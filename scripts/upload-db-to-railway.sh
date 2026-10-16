#!/usr/bin/env bash
#
# Upload (mirror) your local Postgres database to the Railway Postgres service.
#
# This REPLACES the Railway database with an exact copy of your local database:
#   1. Dumps the local database (from the docker compose Postgres service).
#   2. Opens a temporary public TCP proxy to the Railway Postgres service.
#   3. Drops the `public` schema on Railway and restores the dump into it.
#   4. Removes the temporary proxy (unless one already existed).
#
# NOTE: only database rows are copied. Uploaded media files (public/media)
# are NOT included - handle those separately (e.g. object storage).
#
# Usage:
#   scripts/upload-db-to-railway.sh              # interactive, asks to confirm
#   FORCE=1 scripts/upload-db-to-railway.sh      # non-interactive
#
# Requires: railway (logged in + linked), docker, psql, pg_restore, node
#
# Config (override via environment variables):
#   LOCAL_DB=learnity-web         Local database name
#   LOCAL_USER=postgres           Local database user
#   COMPOSE_SERVICE=postgres      docker compose service for Postgres
#   RAILWAY_DB_SERVICE=Postgres   Railway database service name
#   RAILWAY_ENV=production        Railway environment
#
set -euo pipefail

LOCAL_DB="${LOCAL_DB:-learnity-web}"
LOCAL_USER="${LOCAL_USER:-postgres}"
COMPOSE_SERVICE="${COMPOSE_SERVICE:-postgres}"
RAILWAY_DB_SERVICE="${RAILWAY_DB_SERVICE:-Postgres}"
RAILWAY_ENV="${RAILWAY_ENV:-production}"

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

log()  { printf '\033[1;34m==>\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m!!\033[0m %s\n' "$*" >&2; }
die()  { printf '\033[1;31mError:\033[0m %s\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || die "missing required command: $1"; }

# Read a top-level key from a JSON object on stdin.
json_get() { node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{process.stdout.write(String(JSON.parse(s)[process.argv[1]]??""))}catch(e){}})' "$1"; }

need railway
need docker
need psql
need pg_restore
need node

railway whoami >/dev/null 2>&1 || die "not logged in to Railway. Run: railway login"
railway status >/dev/null 2>&1 || die "no Railway project linked. Run: railway link"

tmp_dir="$(mktemp -d)"
dump_file="$tmp_dir/railway-mirror.dump"
proxy_id=""
created_proxy=0

cleanup() {
  if [[ "$created_proxy" == "1" && -n "$proxy_id" ]]; then
    log "Removing temporary TCP proxy ($proxy_id)..."
    railway tcp-proxy delete "$proxy_id" --service "$RAILWAY_DB_SERVICE" --environment "$RAILWAY_ENV" --yes >/dev/null 2>&1 \
      || warn "Could not delete temporary proxy. Remove it manually: railway tcp-proxy list --service $RAILWAY_DB_SERVICE"
  fi
  rm -rf "$tmp_dir"
}
trap cleanup EXIT

# --- confirmation ---
if [[ "${FORCE:-0}" != "1" ]]; then
  warn "This will OVERWRITE the Railway '$RAILWAY_DB_SERVICE' database in '$RAILWAY_ENV'"
  warn "with an exact copy of your local '$LOCAL_DB' database. This cannot be undone."
  read -r -p "Type 'yes' to continue: " reply
  [[ "$reply" == "yes" ]] || die "aborted"
fi

# --- 1. dump local ---
log "Starting local Postgres container ($COMPOSE_SERVICE)..."
docker compose up -d "$COMPOSE_SERVICE" >/dev/null

log "Waiting for local Postgres to be ready..."
ready=0
for _ in $(seq 1 30); do
  if docker compose exec -T "$COMPOSE_SERVICE" pg_isready -U "$LOCAL_USER" >/dev/null 2>&1; then ready=1; break; fi
  sleep 1
done
[[ "$ready" == "1" ]] || die "local Postgres did not become ready"

log "Dumping local database '$LOCAL_DB'..."
docker compose exec -T "$COMPOSE_SERVICE" pg_dump -U "$LOCAL_USER" -d "$LOCAL_DB" -Fc > "$dump_file"
[[ -s "$dump_file" ]] || die "dump failed (empty file)"
log "Dump created ($(du -h "$dump_file" | cut -f1))"

# --- 2. temporary TCP proxy ---
log "Checking for an existing TCP proxy on '$RAILWAY_DB_SERVICE'..."
existing="$(railway tcp-proxy list --service "$RAILWAY_DB_SERVICE" --environment "$RAILWAY_ENV" --json 2>/dev/null || true)"
endpoint="$(printf '%s' "$existing" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const p=(JSON.parse(s).proxies||[])[0];if(p)process.stdout.write(p.domain+":"+p.proxyPort)}catch(e){}})')"

if [[ -n "$endpoint" ]]; then
  log "Reusing existing TCP proxy at $endpoint"
else
  log "Creating temporary TCP proxy..."
  created="$(railway tcp-proxy create --port 5432 --service "$RAILWAY_DB_SERVICE" --environment "$RAILWAY_ENV" --json)"
  endpoint="$(printf '%s' "$created" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{const o=JSON.parse(s);process.stdout.write(o.proxy.domain+":"+o.proxy.proxyPort)})')"
  proxy_id="$(printf '%s' "$created" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{const o=JSON.parse(s);process.stdout.write(o.proxy.id)})')"
  created_proxy=1
  log "Proxy created at $endpoint"
fi

export PGHOST="${endpoint%:*}"
export PGPORT="${endpoint##*:}"

# --- 3. Railway credentials ---
log "Fetching Railway database credentials..."
creds="$(railway variable list --service "$RAILWAY_DB_SERVICE" --environment "$RAILWAY_ENV" --json)"
export PGUSER="$(printf '%s' "$creds" | json_get PGUSER)"
export PGPASSWORD="$(printf '%s' "$creds" | json_get PGPASSWORD)"
export PGDATABASE="$(printf '%s' "$creds" | json_get PGDATABASE)"
[[ -n "$PGUSER" && -n "$PGPASSWORD" && -n "$PGDATABASE" ]] || die "could not read Railway Postgres credentials"

# --- 4. restore ---
export PGOPTIONS="${PGOPTIONS:-} -c client_min_messages=warning"

log "Waiting for the proxy to accept connections..."
ready=0
for _ in $(seq 1 30); do
  if pg_isready -h "$PGHOST" -p "$PGPORT" -U "$PGUSER" -d "$PGDATABASE" >/dev/null 2>&1; then ready=1; break; fi
  sleep 1
done
[[ "$ready" == "1" ]] || die "cannot reach Railway Postgres via proxy at $endpoint"

log "Resetting 'public' schema on Railway..."
psql -v ON_ERROR_STOP=1 -q -c 'DROP SCHEMA IF EXISTS public CASCADE; CREATE SCHEMA public;'

log "Restoring dump into Railway..."
pg_restore --no-owner --no-privileges --no-comments --exit-on-error -d "$PGDATABASE" "$dump_file"

log "Done. Railway '$RAILWAY_DB_SERVICE' now mirrors local '$LOCAL_DB'."
warn "If the app was already running, restart the Railway service to drop any stale connections."

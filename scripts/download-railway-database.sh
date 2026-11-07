#!/usr/bin/env bash
#
# Download a custom-format dump of the Railway Postgres database.
#
# Usage:
#   scripts/download-railway-database.sh
#
# Config (override via environment variables):
#   RAILWAY_DB_SERVICE=Postgres  Railway database service name
#   RAILWAY_ENV=production       Railway environment
#   OUTPUT_DIR                   Local destination (default: ./railway-backups)
#
# The dump is written as railway-<environment>-<timestamp>.dump.
# Requires: railway (logged in + linked), pg_dump, pg_isready, node
#
set -euo pipefail
umask 077

RAILWAY_DB_SERVICE="${RAILWAY_DB_SERVICE:-Postgres}"
RAILWAY_ENV="${RAILWAY_ENV:-production}"

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="${OUTPUT_DIR:-$repo_root/railway-backups}"

log()  { printf '\033[1;34m==>\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m!!\033[0m %s\n' "$*" >&2; }
die()  { printf '\033[1;31mError:\033[0m %s\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || die "missing required command: $1"; }

# Read a top-level key from Railway's JSON variable map on stdin.
json_get() {
  node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const v=JSON.parse(s)[process.argv[1]];if(v!==undefined&&v!==null)process.stdout.write(String(v))}catch(e){process.exitCode=1}})' "$1"
}

need railway
need pg_dump
need pg_isready
need node

railway whoami >/dev/null 2>&1 || die "not logged in to Railway. Run: railway login"
railway status >/dev/null 2>&1 || die "no Railway project linked. Run: railway link"

timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
dump_file="$OUTPUT_DIR/railway-$RAILWAY_ENV-$timestamp.dump"
tmp_dump=""
proxy_id=""
created_proxy=0

cleanup() {
  if [[ "$created_proxy" == "1" && -n "$proxy_id" ]]; then
    log "Removing temporary TCP proxy ($proxy_id)..."
    railway tcp-proxy delete "$proxy_id" --service "$RAILWAY_DB_SERVICE" \
      --environment "$RAILWAY_ENV" --yes >/dev/null 2>&1 \
      || warn "Could not delete the temporary proxy. Remove it manually with railway tcp-proxy list."
  fi
  [[ -z "$tmp_dump" ]] || rm -f "$tmp_dump"
}
trap cleanup EXIT

mkdir -p -m 700 "$OUTPUT_DIR"
[[ ! -e "$dump_file" ]] || die "dump destination already exists: $dump_file"
tmp_dump="$(mktemp "$OUTPUT_DIR/.railway-dump.XXXXXX")"

log "Checking for an existing TCP proxy on '$RAILWAY_DB_SERVICE'..."
existing="$(railway tcp-proxy list --service "$RAILWAY_DB_SERVICE" \
  --environment "$RAILWAY_ENV" --json)"
endpoint="$(printf '%s' "$existing" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const p=JSON.parse(s).proxies?.[0];if(p?.domain&&p?.proxyPort)process.stdout.write(p.domain+":"+p.proxyPort)}catch(e){process.exitCode=1}})')"

if [[ -n "$endpoint" ]]; then
  log "Reusing existing TCP proxy at $endpoint"
else
  log "Creating temporary TCP proxy..."
  created="$(railway tcp-proxy create --port 5432 --service "$RAILWAY_DB_SERVICE" \
    --environment "$RAILWAY_ENV" --json)"
  proxy_id="$(printf '%s' "$created" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const id=JSON.parse(s).proxy?.id;if(id)process.stdout.write(id);else process.exitCode=1}catch(e){process.exitCode=1}})')" \
    || die "could not read the TCP proxy ID from Railway"
  created_proxy=1
  endpoint="$(printf '%s' "$created" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const p=JSON.parse(s).proxy;if(p?.domain&&p?.proxyPort)process.stdout.write(p.domain+":"+p.proxyPort);else process.exitCode=1}catch(e){process.exitCode=1}})')" \
    || die "could not read the TCP proxy endpoint from Railway"
  log "Proxy created at $endpoint"
fi

export PGHOST="${endpoint%:*}"
export PGPORT="${endpoint##*:}"

log "Fetching Railway database credentials..."
creds="$(railway variable list --service "$RAILWAY_DB_SERVICE" \
  --environment "$RAILWAY_ENV" --json)"
export PGUSER="$(printf '%s' "$creds" | json_get PGUSER)"
export PGPASSWORD="$(printf '%s' "$creds" | json_get PGPASSWORD)"
export PGDATABASE="$(printf '%s' "$creds" | json_get PGDATABASE)"
[[ -n "$PGUSER" && -n "$PGPASSWORD" && -n "$PGDATABASE" ]] \
  || die "could not read PGUSER, PGPASSWORD, and PGDATABASE from Railway variables"

log "Waiting for the Railway Postgres proxy..."
ready=0
for _ in $(seq 1 30); do
  if pg_isready -h "$PGHOST" -p "$PGPORT" -U "$PGUSER" -d "$PGDATABASE" >/dev/null 2>&1; then
    ready=1
    break
  fi
  sleep 1
done
[[ "$ready" == "1" ]] || die "cannot reach Railway Postgres via proxy at $endpoint"

log "Dumping Railway database '$PGDATABASE'..."
pg_dump --format=custom --no-owner --no-privileges \
  --dbname="$PGDATABASE" --file="$tmp_dump"
[[ -s "$tmp_dump" ]] || die "dump failed (empty file)"
mv "$tmp_dump" "$dump_file"
tmp_dump=""

log "Database dump saved to $dump_file ($(du -h "$dump_file" | cut -f1))"

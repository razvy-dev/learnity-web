#!/usr/bin/env bash
#
# Upload a Railway custom-format dump to an SSH server and restore it into an
# existing, empty PostgreSQL database on that server.
#
# Usage:
#   scripts/restore-railway-database-to-server.sh <dump-file> <ssh-target> <database>
#
# Example:
#   scripts/restore-railway-database-to-server.sh \
#     railway-backups/railway-production-20261107T160000Z.dump \
#     deploy@example.com learnity
#
# The remote SSH user must be able to connect to the target database using
# psql/pg_restore (for example via a local PostgreSQL role or ~/.pgpass).
# Requires locally: ssh, scp
# Requires remotely: psql, pg_restore
#
set -euo pipefail
umask 077

die() { printf '\033[1;31mError:\033[0m %s\n' "$*" >&2; exit 1; }
log() { printf '\033[1;34m==>\033[0m %s\n' "$*"; }
need() { command -v "$1" >/dev/null 2>&1 || die "missing required command: $1"; }

[[ "$#" -eq 3 ]] || die "usage: $0 <dump-file> <ssh-target> <database>"

dump_file="$1"
ssh_target="$2"
database="$3"

need ssh
need scp
[[ -f "$dump_file" && -s "$dump_file" ]] || die "dump file does not exist or is empty: $dump_file"
[[ -n "$ssh_target" ]] || die "SSH target must not be empty"
[[ -n "$database" ]] || die "database name must not be empty"

printf "Restore %s to database '%s' on %s? The database must be empty. Type 'yes' to continue: " \
  "$dump_file" "$database" "$ssh_target"
read -r reply
[[ "$reply" == "yes" ]] || die "aborted"

log "Checking SSH access and creating a temporary directory on '$ssh_target'..."
remote_tmp_dir="$(ssh "$ssh_target" 'mktemp -d "${TMPDIR:-/tmp}/learnity-restore.XXXXXX"')" \
  || die "could not create a temporary directory on '$ssh_target'"
[[ -n "$remote_tmp_dir" ]] || die "remote command returned an empty temporary directory"
remote_dump="$remote_tmp_dir/backup.dump"

cleanup() {
  if ! ssh "$ssh_target" "rm -f -- $(printf '%q' "$remote_dump") && rmdir -- $(printf '%q' "$remote_tmp_dir")" \
    >/dev/null 2>&1; then
    printf 'Warning: could not remove temporary restore files from %s:%s\n' \
      "$ssh_target" "$remote_tmp_dir" >&2
  fi
}
trap cleanup EXIT

log "Uploading the database dump..."
scp -- "$dump_file" "$ssh_target:$remote_dump"

log "Validating dump and checking the target database..."
ssh "$ssh_target" "bash -s -- $(printf '%q' "$database") $(printf '%q' "$remote_dump")" <<'REMOTE'
set -euo pipefail
database="$1"
dump_file="$2"

command -v psql >/dev/null 2>&1 || { echo "Error: psql is not installed on the server" >&2; exit 1; }
command -v pg_restore >/dev/null 2>&1 || { echo "Error: pg_restore is not installed on the server" >&2; exit 1; }

pg_restore --list "$dump_file" >/dev/null

is_empty="$(psql -X --set=ON_ERROR_STOP=1 --tuples-only --no-align \
  --dbname="$database" --command="
    SELECT NOT EXISTS (
      SELECT 1
      FROM pg_class AS c
      JOIN pg_namespace AS n ON n.oid = c.relnamespace
      WHERE n.nspname NOT IN ('pg_catalog', 'information_schema')
        AND n.nspname NOT LIKE 'pg_toast%'
    )
    AND NOT EXISTS (
      SELECT 1
      FROM pg_namespace
      WHERE nspname NOT IN ('pg_catalog', 'information_schema', 'public')
        AND nspname NOT LIKE 'pg_toast%'
    );
  ")"
if [[ "$is_empty" != "t" ]]; then
  echo "Error: target database '$database' is not empty; refusing to restore." >&2
  exit 1
fi

echo "Restoring into '$database'..."
pg_restore --no-owner --no-privileges --exit-on-error --single-transaction \
  --dbname="$database" "$dump_file"
echo "Restore completed."
REMOTE

log "Restore completed successfully."

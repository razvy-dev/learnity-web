#!/usr/bin/env bash
#
# Download the uploads directory from a Railway app service.
#
# Usage:
#   RAILWAY_APP_SERVICE=learnity-web scripts/download-railway-uploads.sh
#
# Config (override via environment variables):
#   RAILWAY_APP_SERVICE          Railway app service name (required)
#   RAILWAY_ENV=production       Railway environment
#   REMOTE_UPLOADS_PATH          Remote uploads path (default: /app/public/media)
#   OUTPUT_DIR                   Local destination (default: ./railway-backups)
#
# The download is placed in OUTPUT_DIR/uploads-<timestamp>/media.
# Requires: railway (logged in + linked), scp
#
set -euo pipefail
umask 077

RAILWAY_APP_SERVICE="${RAILWAY_APP_SERVICE:-}"
RAILWAY_ENV="${RAILWAY_ENV:-production}"
REMOTE_UPLOADS_PATH="${REMOTE_UPLOADS_PATH:-/app/public/media}"

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="${OUTPUT_DIR:-$repo_root/railway-backups}"

log()  { printf '\033[1;34m==>\033[0m %s\n' "$*"; }
die()  { printf '\033[1;31mError:\033[0m %s\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || die "missing required command: $1"; }

need railway
need scp

[[ -n "$RAILWAY_APP_SERVICE" ]] || die "set RAILWAY_APP_SERVICE to the Railway app service name"
[[ "$REMOTE_UPLOADS_PATH" == /* ]] || die "REMOTE_UPLOADS_PATH must be an absolute path"

railway whoami >/dev/null 2>&1 || die "not logged in to Railway. Run: railway login"
railway status >/dev/null 2>&1 || die "no Railway project linked. Run: railway link"

timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
download_dir="$OUTPUT_DIR/uploads-$timestamp"
ssh_config="$(mktemp)"
cleanup() { rm -f "$ssh_config"; }
trap cleanup EXIT

[[ ! -e "$download_dir" ]] || die "download destination already exists: $download_dir"
mkdir -p -m 700 "$OUTPUT_DIR"
mkdir -m 700 "$download_dir"

log "Checking uploads directory on '$RAILWAY_APP_SERVICE'..."
railway ssh --service "$RAILWAY_APP_SERVICE" --environment "$RAILWAY_ENV" \
  -- test -d "$REMOTE_UPLOADS_PATH" \
  || die "Railway uploads directory not found or SSH failed: $REMOTE_UPLOADS_PATH"

log "Preparing Railway SSH config..."
railway ssh config --service "$RAILWAY_APP_SERVICE" --environment "$RAILWAY_ENV" \
  --alias railway-media-download --path "$ssh_config" >/dev/null

log "Downloading uploads from '$RAILWAY_APP_SERVICE'..."
scp -r -F "$ssh_config" "railway-media-download:$REMOTE_UPLOADS_PATH" "$download_dir/"

[[ -d "$download_dir/$(basename "$REMOTE_UPLOADS_PATH")" ]] \
  || die "download completed without the expected uploads directory"
log "Uploads downloaded to $download_dir/$(basename "$REMOTE_UPLOADS_PATH")"

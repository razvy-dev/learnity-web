#!/usr/bin/env bash
#
# Upload downloaded Payload media files to a server over SSH.
#
# Usage:
#   scripts/upload-uploads-to-server.sh <local-media-dir> <ssh-target> <remote-media-dir>
#
# Example:
#   scripts/upload-uploads-to-server.sh \
#     railway-backups/uploads-20261107T160000Z/media \
#     deploy@example.com /srv/learnity/public/media
#
# The contents of the local directory are copied directly into the remote
# directory. Matching remote files are overwritten; remote-only files remain.
# Requires: rsync, ssh
#
set -euo pipefail

die() { printf '\033[1;31mError:\033[0m %s\n' "$*" >&2; exit 1; }
log() { printf '\033[1;34m==>\033[0m %s\n' "$*"; }
need() { command -v "$1" >/dev/null 2>&1 || die "missing required command: $1"; }

[[ "$#" -eq 3 ]] || die "usage: $0 <local-media-dir> <ssh-target> <remote-media-dir>"

local_media_dir="${1%/}"
ssh_target="$2"
remote_media_dir="${3%/}"

need rsync
need ssh
[[ -d "$local_media_dir" ]] || die "local media directory not found: $local_media_dir"
[[ -n "$ssh_target" ]] || die "SSH target must not be empty"
[[ "$remote_media_dir" == /* && "$remote_media_dir" != "/" ]] \
  || die "remote media directory must be an absolute path other than /"
[[ "$remote_media_dir" != *"/../"* && "$remote_media_dir" != */.. ]] \
  || die "remote media directory must not contain parent-directory segments"
[[ "$remote_media_dir" =~ ^/[A-Za-z0-9._/-]+$ ]] \
  || die "remote media directory may contain only letters, numbers, '.', '_', '-', and '/'"

printf "Upload the contents of '%s' to %s:%s? Existing matching files will be overwritten. Type 'yes' to continue: " \
  "$local_media_dir" "$ssh_target" "$remote_media_dir"
read -r reply
[[ "$reply" == "yes" ]] || die "aborted"

log "Creating remote Payload uploads directory..."
ssh "$ssh_target" "mkdir -p -- '$remote_media_dir'"

log "Uploading media files..."
rsync -av --human-readable --info=progress2 -- \
  "$local_media_dir/" "$ssh_target:$remote_media_dir/"

log "Uploads transferred to $ssh_target:$remote_media_dir"

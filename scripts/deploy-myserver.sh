#!/usr/bin/env bash
set -euo pipefail

SERVER_ALIAS="${1:-myserver}"

# Host port on the server. Change if you need a different public port.
HOST_PORT="${HOST_PORT:-8081}"

# Base images for environments that cannot access Docker Hub.
NODE_IMAGE="${NODE_IMAGE:-docker.m.daocloud.io/library/node:20-alpine}"
NGINX_IMAGE="${NGINX_IMAGE:-docker.m.daocloud.io/library/nginx:1.27-alpine}"

# External network used by Nginx Proxy Manager (default: npm_default)
NPM_NETWORK="${NPM_NETWORK:-npm_default}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

TARBALL="${ROOT_DIR}/.resume-deploy.tgz"
TS="$(date +%Y%m%d-%H%M%S)"

echo "Packaging…"
tar -czf "$TARBALL" \
  --exclude='./.git' \
  --exclude='./node_modules' \
  --exclude='./dist' \
  --exclude='./.idea' \
  --exclude='./.vscode' \
  --exclude='./.resume-deploy.tgz' \
  -C "$ROOT_DIR" .

echo "Uploading to ${SERVER_ALIAS}…"
ssh "$SERVER_ALIAS" "mkdir -p ~/apps/resume/releases"
scp "$TARBALL" "$SERVER_ALIAS":~/apps/resume/releases/$TS.tgz

echo "Deploying (HOST_PORT=${HOST_PORT})…"
ssh "$SERVER_ALIAS" \
  "TS=$TS HOST_PORT=$HOST_PORT NODE_IMAGE=$NODE_IMAGE NGINX_IMAGE=$NGINX_IMAGE NPM_NETWORK=$NPM_NETWORK bash -lc 'set -euo pipefail; base=\"\$HOME/apps/resume\"; rel=\"\$base/releases/\$TS\"; mkdir -p \"\$rel\"; tar -xzf \"\$base/releases/\$TS.tgz\" -C \"\$rel\"; ln -sfn \"\$rel\" \"\$base/current\"; cd \"\$base/current\"; HOST_PORT=\"\$HOST_PORT\" NODE_IMAGE=\"\$NODE_IMAGE\" NGINX_IMAGE=\"\$NGINX_IMAGE\" NPM_NETWORK=\"\$NPM_NETWORK\" docker compose -f docker-compose.prod.yml up -d --build; docker compose -f docker-compose.prod.yml ps'"

rm -f "$TARBALL"

echo "Done. Try: http://<server-ip>:${HOST_PORT}/"

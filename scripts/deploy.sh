#!/bin/bash

# Deploy script for panovalife.ru
# Uses environment variables, .env file, or git config

set -e

# Try loading from git config first (if set)
if command -v git &> /dev/null; then
  SERVER_USER=${SERVER_USER:-$(git config deploy.server-user 2>/dev/null || echo "")}
  SERVER_HOST=${SERVER_HOST:-$(git config deploy.server-host 2>/dev/null || echo "")}
  SERVER_PATH=${SERVER_PATH:-$(git config deploy.server-path 2>/dev/null || echo "")}
  SERVER_SSH_KEY=${SERVER_SSH_KEY:-$(git config deploy.server-ssh-key 2>/dev/null || echo "")}
fi

# Load .env if exists (handle multiline values)
if [ -f .env ]; then
  set -a
  source <(cat .env | sed -e '/^$/d' -e '/^#/d' | awk -F= '{print $1"=\""$2"\""}')
  set +a
fi

# Also try loading from .env.local
if [ -f .env.local ]; then
  set -a
  source <(cat .env.local | sed -e '/^$/d' -e '/^#/d' | awk -F= '{print $1"=\""$2"\""}')
  set +a
fi

# Check required variables
if [ -z "$SERVER_USER" ] || [ -z "$SERVER_HOST" ] || [ -z "$SERVER_PATH" ] || [ -z "$SERVER_SSH_KEY" ]; then
  echo ""
  echo "⚠️  Deployment skipped: Missing environment variables"
  echo ""
  echo "To enable deployment, create .env file with:"
  echo "   SERVER_USER=your_user"
  echo "   SERVER_HOST=your_server.com"
  echo "   SERVER_PATH=/var/www/html"
  echo "   SERVER_SSH_KEY=\"\$(cat ~/.ssh/id_rsa)\""
  echo ""
  echo "Or set environment variables before running:"
  echo "   export SERVER_USER=... && export SERVER_HOST=... && npm run push"
  echo ""
  exit 0
fi

# Check if dist exists
if [ ! -d "dist" ]; then
  echo "❌ dist directory not found. Run 'npm run build' first"
  exit 1
fi

echo "🚀 Starting deployment to $SERVER_USER@$SERVER_HOST:$SERVER_PATH"

# Setup SSH
mkdir -p ~/.ssh
echo "$SERVER_SSH_KEY" > ~/.ssh/deploy_key
chmod 600 ~/.ssh/deploy_key
ssh-keyscan -H $SERVER_HOST >> ~/.ssh/known_hosts 2>/dev/null || true

# Deploy
echo "📦 Syncing files..."
rsync -azv --delete \
  -e "ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no -o UserKnownHostsFile=~/.ssh/known_hosts" \
  dist/ $SERVER_USER@$SERVER_HOST:$SERVER_PATH/

# Cleanup
rm -f ~/.ssh/deploy_key

echo "✅ Deployment completed successfully!"

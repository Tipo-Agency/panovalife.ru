#!/bin/bash

# Setup git config for deployment (stores in .git/config, not committed)

echo "🔧 Setting up git config for deployment"
echo ""
echo "Enter your deployment credentials (stored locally in git config):"
echo ""

read -p "Server user: " user
read -p "Server host/IP: " host
read -p "Server path: " path
echo ""
echo "SSH Key - enter path to private key file: "
read -p "Path: " key_path

if [ ! -f "$key_path" ]; then
  echo "❌ File not found: $key_path"
  exit 1
fi

# Store in git config
git config deploy.server-user "$user"
git config deploy.server-host "$host"
git config deploy.server-path "$path"
git config deploy.server-ssh-key "$(cat "$key_path")"

echo ""
echo "✅ Git config updated!"
echo ""
echo "You can now run: npm run push"

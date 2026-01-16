#!/bin/bash

# Helper script to create .env file for deployment

echo "🔧 Setting up .env file for deployment"
echo ""

read -p "Server user (SERVER_USER): " SERVER_USER
read -p "Server host/IP (SERVER_HOST): " SERVER_HOST
read -p "Server path (SERVER_PATH): " SERVER_PATH
echo ""
echo "SSH Key options:"
echo "1. Enter path to SSH key file"
echo "2. Paste SSH key content"
read -p "Choose option (1 or 2): " KEY_OPTION

if [ "$KEY_OPTION" = "1" ]; then
  read -p "Path to SSH private key: " KEY_PATH
  if [ -f "$KEY_PATH" ]; then
    SERVER_SSH_KEY=$(cat "$KEY_PATH")
  else
    echo "❌ File not found: $KEY_PATH"
    exit 1
  fi
else
  echo "Paste your SSH private key (press Enter, then paste, then Ctrl+D):"
  SERVER_SSH_KEY=$(cat)
fi

# Create .env file
cat > .env << EOF
SERVER_USER=$SERVER_USER
SERVER_HOST=$SERVER_HOST
SERVER_PATH=$SERVER_PATH
SERVER_SSH_KEY="$SERVER_SSH_KEY"
EOF

echo ""
echo "✅ .env file created successfully!"
echo ""
echo "You can now run: npm run push"

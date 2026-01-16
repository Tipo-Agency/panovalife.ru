#!/bin/bash

# Quick script to create .env from GitHub Secrets values
# Just paste the values when prompted

echo "📝 Creating .env file from GitHub Secrets"
echo ""
echo "Go to: https://github.com/Tipo-Agency/panovalife.ru/settings/secrets/actions"
echo "Copy each value and paste below:"
echo ""

read -p "SERVER_USER: " SERVER_USER
read -p "SERVER_HOST: " SERVER_HOST  
read -p "SERVER_PATH: " SERVER_PATH
echo ""
echo "For SERVER_SSH_KEY, paste the entire key (including BEGIN/END lines):"
echo "Press Enter, paste key, then type 'END' on new line:"
echo ""

SSH_KEY=""
while IFS= read -r line; do
  if [ "$line" = "END" ]; then
    break
  fi
  SSH_KEY="${SSH_KEY}${line}\n"
done

# Remove trailing newline
SSH_KEY=$(echo -e "$SSH_KEY" | sed '$d')

cat > .env << EOF
SERVER_USER=$SERVER_USER
SERVER_HOST=$SERVER_HOST
SERVER_PATH=$SERVER_PATH
SERVER_SSH_KEY="$SSH_KEY"
EOF

echo ""
echo "✅ .env file created!"
echo ""
echo "Now run: npm run push"

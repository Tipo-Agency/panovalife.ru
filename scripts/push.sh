#!/bin/bash

# Auto push script - builds, commits and pushes changes

set -e

echo "🔨 Building project..."
npm run build

echo ""
echo "📝 Checking for changes..."

# Check if there are any changes to commit
if git diff --quiet && git diff --cached --quiet; then
  echo "✅ No changes to commit"
  echo "🚀 Pushing to remote..."
  git push
else
  echo "📦 Staging changes..."
  git add -A
  
  echo "💾 Committing changes..."
  git commit -m "Build and deploy" || echo "Nothing to commit"
  
  echo "🚀 Pushing to remote..."
  git push
fi

echo ""
echo "✅ Done! GitHub Actions will deploy automatically."

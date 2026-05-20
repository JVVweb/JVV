#!/bin/bash
# Auto-commit and push all changes
# Usage: ./auto-push.sh

git add -A
# Use a generic commit message with timestamp
git commit -m "Auto commit $(date +'%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

git push origin main

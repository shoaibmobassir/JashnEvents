#!/bin/bash

# Setup script for GitHub Pages deployment
# This script will initialize git, add remote, and prepare for first push

echo "🚀 Setting up JASHN Events for GitHub Pages deployment..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
else
    echo "✅ Git repository already initialized"
fi

# Add remote if not exists
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin git@github.com:shoaibmobassir/JashnEvents.git
else
    echo "✅ Remote already configured"
    git remote set-url origin git@github.com:shoaibmobassir/JashnEvents.git
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Initial commit: JASHN Events website with GitHub Pages setup"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Make sure GitHub Pages is enabled in your repository settings:"
echo "   https://github.com/shoaibmobassir/JashnEvents/settings/pages"
echo "   - Source: GitHub Actions"
echo ""
echo "2. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "3. The website will be available at:"
echo "   https://shoaibmobassir.github.io/JashnEvents/"
echo ""


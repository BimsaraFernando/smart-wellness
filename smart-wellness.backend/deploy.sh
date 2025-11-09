#!/bin/bash

# Smart Wellness Academy - Deployment Helper Script
# This script helps deploy the app from the subdirectory to GitHub Pages

echo "🚀 Smart Wellness Academy - GitHub Pages Deployment"
echo "=================================================="

# Check if we're in the correct directory
if [ ! -f "smart-wellness.backend/package.json" ]; then
    echo "❌ Error: Run this script from the repository root (where README.md is located)"
    exit 1
fi

echo "📂 Repository structure detected correctly"

# Navigate to app directory and build
echo "🔧 Building the application..."
cd smart-wellness.backend

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the app
echo "🏗️  Building static export..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in: smart-wellness.backend/dist/"
    echo ""
    echo "🌐 Next steps:"
    echo "1. git add ."
    echo "2. git commit -m 'Deploy Smart Wellness Academy'"
    echo "3. git push origin main"
    echo ""
    echo "📍 Your site will be available at:"
    echo "   https://[your-username].github.io/smart-wellness"
else
    echo "❌ Build failed! Check the error messages above."
    exit 1
fi
@echo off
REM Smart Wellness Academy - Deployment Helper Script
REM This script helps deploy the app from the subdirectory to GitHub Pages

echo 🚀 Smart Wellness Academy - GitHub Pages Deployment
echo ==================================================

REM Check if we're in the correct directory
if not exist "smart-wellness.backend\package.json" (
    echo ❌ Error: Run this script from the repository root (where README.md is located)
    pause
    exit /b 1
)

echo 📂 Repository structure detected correctly

REM Navigate to app directory and build
echo 🔧 Building the application...
cd smart-wellness.backend

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Build the app
echo 🏗️  Building static export...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo 📁 Static files generated in: smart-wellness.backend/dist/
    echo.
    echo 🌐 Next steps:
    echo 1. git add .
    echo 2. git commit -m "Deploy Smart Wellness Academy"
    echo 3. git push origin main
    echo.
    echo 📍 Your site will be available at:
    echo    https://[your-username].github.io/smart-wellness
    pause
) else (
    echo ❌ Build failed! Check the error messages above.
    pause
    exit /b 1
)
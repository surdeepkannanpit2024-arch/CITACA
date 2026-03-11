#!/bin/bash

echo "======================================"
echo "CIT College Dashboard - Setup Script"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js and npm..."
    sudo dnf install -y nodejs npm
else
    echo "✅ Node.js is already installed"
    node --version
fi

echo ""
echo "📦 Installing project dependencies..."
npm install

echo ""
echo "✅ Installation complete!"
echo ""
echo "======================================"
echo "Available Commands:"
echo "======================================"
echo "npm run dev      - Start development server"
echo "npm run build    - Build for production"
echo "npm run preview  - Preview production build"
echo ""
echo "🚀 To start: npm run dev"
echo "======================================"

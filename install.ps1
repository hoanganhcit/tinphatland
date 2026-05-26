# Installation Script for Tín Phát Land
# Tự động cài đặt dependencies và setup môi trường

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Tín Phát Land - Installation Script" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "✓ Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "  Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Node.js not found! Please install Node.js from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Check npm
Write-Host "✓ Checking npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "  npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "  ✗ npm not found!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Step 1: Installing Frontend Dependencies" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to install frontend dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Frontend dependencies installed successfully!" -ForegroundColor Green

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Step 2: Installing Backend Dependencies" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

Set-Location backend
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to install backend dependencies" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Write-Host "✓ Backend dependencies installed successfully!" -ForegroundColor Green
Set-Location ..

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Step 3: Creating Upload Directories" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

$uploadDir = "backend\uploads\properties"
if (-not (Test-Path $uploadDir)) {
    New-Item -ItemType Directory -Path $uploadDir -Force | Out-Null
    Write-Host "✓ Created directory: $uploadDir" -ForegroundColor Green
} else {
    Write-Host "✓ Directory already exists: $uploadDir" -ForegroundColor Green
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Step 4: Checking MongoDB" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

try {
    $mongoCheck = mongosh --version
    Write-Host "✓ MongoDB is installed" -ForegroundColor Green
    
    # Try to connect
    Write-Host "  Checking MongoDB connection..." -ForegroundColor Yellow
    $mongoTest = mongosh --eval "db.version()" --quiet 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ MongoDB is running!" -ForegroundColor Green
    } else {
        Write-Host "⚠ MongoDB is installed but not running" -ForegroundColor Yellow
        Write-Host "  Please start MongoDB service:" -ForegroundColor Yellow
        Write-Host "    net start MongoDB" -ForegroundColor White
        Write-Host "  Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas" -ForegroundColor White
    }
} catch {
    Write-Host "⚠ MongoDB not found on this system" -ForegroundColor Yellow
    Write-Host "  Options:" -ForegroundColor Yellow
    Write-Host "    1. Install MongoDB Community Server: https://www.mongodb.com/try/download/community" -ForegroundColor White
    Write-Host "    2. Use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas" -ForegroundColor White
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Step 5: Configuration Files" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

# Check frontend .env
if (Test-Path ".env") {
    Write-Host "✓ Frontend .env exists" -ForegroundColor Green
} else {
    Write-Host "⚠ Creating frontend .env from .env.example" -ForegroundColor Yellow
    Copy-Item ".env.example" ".env"
    Write-Host "✓ Created .env" -ForegroundColor Green
}

# Check backend .env
if (Test-Path "backend\.env") {
    Write-Host "✓ Backend .env exists" -ForegroundColor Green
} else {
    Write-Host "⚠ Creating backend .env from .env.example" -ForegroundColor Yellow
    Copy-Item "backend\.env.example" "backend\.env"
    Write-Host "✓ Created backend\.env" -ForegroundColor Green
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Installation Complete!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Make sure MongoDB is running:" -ForegroundColor White
Write-Host "   Local: net start MongoDB" -ForegroundColor Gray
Write-Host "   Or configure MongoDB Atlas in backend\.env" -ForegroundColor Gray
Write-Host ""
Write-Host "2. (Optional) Seed sample data:" -ForegroundColor White
Write-Host "   cd backend" -ForegroundColor Gray
Write-Host "   npm run seed" -ForegroundColor Gray
Write-Host "   cd .." -ForegroundColor Gray
Write-Host ""
Write-Host "3. Start Backend (Terminal 1):" -ForegroundColor White
Write-Host "   cd backend" -ForegroundColor Gray
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Start Frontend (Terminal 2):" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "5. Open browser:" -ForegroundColor White
Write-Host "   http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "📚 Documentation:" -ForegroundColor Yellow
Write-Host "   - QUICKSTART.md - Quick start guide" -ForegroundColor Gray
Write-Host "   - SETUP_GUIDE.md - Detailed setup guide" -ForegroundColor Gray
Write-Host "   - IMPLEMENTATION_SUMMARY.md - Technical details" -ForegroundColor Gray
Write-Host "   - backend/README.md - API documentation" -ForegroundColor Gray
Write-Host ""
Write-Host "Happy coding! 🚀" -ForegroundColor Green

@echo off
echo ================================================
echo    Starting Tin Phat Land - Full Stack
echo ================================================
echo.

echo Starting Backend Server...
start "Tin Phat Land - Backend" powershell -NoExit -Command "cd backend; npm run dev"

timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "Tin Phat Land - Frontend" powershell -NoExit -Command "npm run dev"

echo.
echo ================================================
echo    Servers are starting...
echo ================================================
echo.
echo Backend:  http://localhost:3000/api
echo Frontend: http://localhost:5173
echo.
echo Press any key to close this window (servers will keep running)...
pause >nul

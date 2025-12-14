@echo off
echo Starting AI T-Shirt Designer...
echo.
echo Starting Backend Server...
start "Backend API" cmd /k "cd server && npm start"
timeout /t 3 /nobreak >nul
echo.
echo Starting Frontend...
start "Frontend" cmd /k "npm run dev"
echo.
echo Both servers are starting!
echo Frontend will open at: http://localhost:5173/mvp
echo Backend API is at: http://localhost:3001
echo.
echo Press any key to exit this window (servers will keep running)...
pause >nul


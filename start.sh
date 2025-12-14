#!/bin/bash
echo "Starting AI T-Shirt Designer..."
echo ""
echo "Starting Backend Server..."
cd server && npm start &
BACKEND_PID=$!
sleep 3
echo ""
echo "Starting Frontend..."
npm run dev &
FRONTEND_PID=$!
echo ""
echo "Both servers are starting!"
echo "Frontend will open at: http://localhost:5173/mvp"
echo "Backend API is at: http://localhost:3001"
echo ""
echo "Press Ctrl+C to stop both servers"
wait


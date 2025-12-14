# 🚀 Quick Start Guide

Everything is set up and ready! Here's how to use it:

## 🎯 EASIEST WAY TO START (Windows)

Just double-click: **`start.bat`**

This will automatically start both the backend and frontend servers!

## 📋 Manual Start (Any Platform)

### Step 1: Start Backend
Open Terminal/Command Prompt and run:
```bash
cd server
npm start
```

Wait until you see: `🚀 AI Design API server running on http://localhost:3001`

### Step 2: Start Frontend
Open a NEW Terminal/Command Prompt and run:
```bash
npm run dev
```

### Step 3: Open in Browser
Go to: **http://localhost:5173/mvp**

## ✅ That's It!

The app will work immediately with gradient placeholders. 

## 🎨 To Get Real AI Images (Optional)

1. Get a FREE Hugging Face token: https://huggingface.co/settings/tokens
2. Open `server/.env` file
3. Add your token: `HF_API_KEY=your_token_here`
4. Restart the backend server

## 🎯 How to Use the App

1. **Enter design idea** - Type something like "geometric patterns" or "vintage waves"
2. **Click "Generate Designs"** - Creates 4 style variations
3. **Select a design** - Click on your favorite
4. **Choose product** - Pick shirt type, color, size
5. **Add to cart** - Done!

## 🆘 Troubleshooting

**Can't see designs?**
- Make sure backend is running (check Terminal 1)
- Check browser console (F12) for errors

**Backend won't start?**
- Make sure you're in the `server` folder
- Try: `cd server && npm install` again

**Port already in use?**
- Change PORT in `server/.env` to something else like 3002

## 💡 Tips

- The app works perfectly without API keys (uses placeholders)
- Add API keys only if you want real AI-generated images
- Hugging Face is FREE and easiest to set up
- Replicate has better quality but requires payment

---

**You're all set! Just run `start.bat` (Windows) or follow the manual steps above!** 🎉


# ✅ Setup Complete!

Your AI T-Shirt Designer is ready to use! Here's what's been set up:

## 🎯 What's Working

1. **Frontend** - Modern React app with Tailwind CSS
2. **Backend API** - Node.js/Express server for AI generation
3. **Integration** - Frontend connected to backend

## 🚀 How to Run

### Option 1: Run Everything Together (Easiest)

```bash
npm run dev:all
```

This starts both frontend and backend at the same time.

### Option 2: Run Separately

**Terminal 1 - Backend:**
```bash
npm run server:dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Then visit: `http://localhost:5173/mvp`

## 🔑 Adding AI API Keys (Optional but Recommended)

To generate **real AI images**, add an API key to `server/.env`:

### Option 1: Hugging Face (FREE - Easiest)

1. Go to: https://huggingface.co/settings/tokens
2. Create a token (free)
3. Open `server/.env` and add:
   ```
   HF_API_KEY=your_token_here
   ```

### Option 2: Replicate (Best Quality)

1. Go to: https://replicate.com/account/api-tokens
2. Get your token
3. Open `server/.env` and add:
   ```
   REPLICATE_API_TOKEN=your_token_here
   ```

### Option 3: OpenAI DALL-E

1. Go to: https://platform.openai.com/api-keys
2. Get your API key
3. Open `server/.env` and add:
   ```
   OPENAI_API_KEY=your_key_here
   ```

**After adding a key, restart the server!**

## ⚠️ Without API Keys

The app will still work! It uses gradient placeholders as fallback. You'll see:
- Design generation still works
- Style variations (Minimal, Bold, Vintage, Modern)
- Full functionality, just with placeholder images instead of AI-generated ones

## 📁 Project Structure

```
customtees widget/
├── src/
│   ├── AppMVP.jsx          # Main app component
│   └── services/
│       └── aiGenerator.js  # Frontend AI service
├── server/
│   ├── index.js            # Backend API server
│   ├── services/
│   │   └── aiService.js    # AI generation logic
│   ├── .env                # API keys (not in git)
│   └── package.json        # Backend dependencies
└── package.json            # Frontend dependencies
```

## 🎨 Using the App

1. **Step 1: Upload** - Enter your design idea and click "Generate Designs"
2. **Step 2: Design** - Select your favorite design
3. **Step 3: Products** - Choose shirt type
4. **Step 4: Sizes** - Select size and quantity

## 🐛 Troubleshooting

**Backend won't start:**
- Make sure you ran `cd server && npm install`
- Check that port 3001 isn't already in use

**Frontend can't connect to backend:**
- Make sure backend is running on port 3001
- Check browser console for errors

**No images generating:**
- Check if API key is set in `server/.env`
- Restart the server after adding keys
- Check server logs for API errors

## 📝 Next Steps

1. Test the app: `npm run dev:all`
2. (Optional) Add an API key for real AI images
3. Customize designs, colors, pricing as needed
4. Deploy to production when ready!

Everything is set up and ready to go! 🎉

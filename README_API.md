# AI Design API Setup

This project includes a backend API server for AI image generation.

## Quick Start

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure API Keys

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` and add at least one AI service API key:

**Option 1: Replicate (Recommended)**
- Get token: https://replicate.com/account/api-tokens
- Add to `.env`: `REPLICATE_API_TOKEN=your_token_here`

**Option 2: OpenAI DALL-E**
- Get key: https://platform.openai.com/api-keys
- Add to `.env`: `OPENAI_API_KEY=your_key_here`

**Option 3: Hugging Face (Free)**
- Get token: https://huggingface.co/settings/tokens
- Add to `.env`: `HF_API_KEY=your_token_here`

### 3. Start the Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:3001`

### 4. Update Frontend

The frontend is already configured to call `http://localhost:3001/api/generate-design`.

For production, update `VITE_AI_API_ENDPOINT` in your frontend `.env`:
```
VITE_AI_API_ENDPOINT=https://your-api-domain.com/api/generate-design
```

## API Endpoints

### POST `/api/generate-design`

Generate AI designs based on a prompt.

**Request:**
```json
{
  "prompt": "abstract geometric patterns with neon colors",
  "count": 4
}
```

**Response:**
```json
{
  "success": true,
  "designs": [
    {
      "id": 1234567890,
      "prompt": "original prompt",
      "style": "Minimal",
      "colors": ["#00e0ff", "#8b5cf6"],
      "imageUrl": "https://...",
      "previewText": "ABSTRACT GEOMETRIC PATTERNS"
    }
  ],
  "count": 4
}
```

### GET `/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "AI Design API is running"
}
```

## Deployment

### Vercel (Serverless)

1. Create `vercel.json` in server directory:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

2. Deploy:
```bash
vercel --prod
```

### Railway / Render

1. Set build command: `cd server && npm install`
2. Set start command: `cd server && npm start`
3. Add environment variables in dashboard

## Troubleshooting

- **Port already in use**: Change `PORT` in `.env`
- **API errors**: Check your API keys are valid
- **CORS issues**: The server includes CORS middleware
- **Canvas errors**: On some systems, you may need to install canvas dependencies separately


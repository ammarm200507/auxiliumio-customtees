# AI Image Generation Setup

This app uses AI to generate t-shirt designs based on user prompts. Here's how to set it up:

## Option 1: Custom Backend API (Recommended for Production)

1. Create a backend endpoint at `/api/generate-design` that accepts:
   ```json
   {
     "prompt": "user's design description",
     "count": 4,
     "style": "t-shirt design"
   }
   ```

2. Your backend should return:
   ```json
   {
     "designs": [
       {
         "id": 123,
         "prompt": "original prompt",
         "style": "Minimal",
         "colors": ["#00e0ff", "#8b5cf6"],
         "imageUrl": "https://...",
         "previewText": "DESIGN TEXT"
       }
     ]
   }
   ```

3. Set `VITE_AI_API_ENDPOINT` in your `.env` file to your API endpoint.

## Option 2: Hugging Face Inference API (Free Tier)

1. Get a free API token from https://huggingface.co/settings/tokens
2. Add to `.env`:
   ```
   VITE_HF_API_KEY=your_token_here
   ```
3. The app will use Hugging Face's Stable Diffusion model automatically.

**Note:** Hugging Face free tier has rate limits. For production, use a backend proxy.

## Option 3: Replicate API

1. Get API token from https://replicate.com/account/api-tokens
2. **Important:** Set up a backend proxy (don't expose API key in frontend)
3. Create backend endpoint at `/api/replicate/generate`
4. Set `VITE_REPLICATE_API_TOKEN` in backend environment (not frontend `.env`)

## Option 4: OpenAI DALL-E

1. Get API key from https://platform.openai.com/api-keys
2. **Important:** Use backend proxy only (never expose key in frontend)
3. Create backend endpoint at `/api/openai/generate`

## Fallback Behavior

If no API keys are configured, the app will:
- Generate gradient-based placeholder designs
- Show style variations (Minimal, Bold, Vintage, Modern)
- Still provide a functional demo experience

## Security Best Practices

**NEVER** expose API keys in frontend code or `.env` files that are committed to git.

1. Use backend proxies for all API calls
2. Store API keys in backend environment variables
3. Add `.env` to `.gitignore`
4. Use environment-specific keys for dev/prod

## Testing

1. Start with fallback mode (no API keys) to test UI
2. Add Hugging Face key for free AI generation
3. Set up backend proxy for production deployment


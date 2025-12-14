# 🔑 API Key Setup - Super Simple!

## Using OpenAI (EASIEST - Recommended!)

1. **Get your API key:**
   - Go to: https://platform.openai.com/api-keys
   - Sign up or log in
   - Click "Create new secret key"
   - Copy the key (starts with `sk-...`)

2. **Add it to the server:**
   - Open `server/.env` file
   - Find the line: `# OPENAI_API_KEY=your_key_here`
   - Remove the `#` and paste your key:
   ```
   OPENAI_API_KEY=sk-your-actual-key-here
   ```

3. **Save the file and restart the server**

That's it! OpenAI DALL-E will now generate your designs!

## About Gemini

⚠️ **Important:** Google Gemini is a text/chat AI, not an image generation AI. It can't create images directly.

However, if you want to use Gemini for other features (like enhancing prompts), we can add that later. For image generation, you need:
- ✅ **OpenAI DALL-E** (what we're using)
- ✅ **Replicate** (Stable Diffusion)
- ✅ **Hugging Face** (Stable Diffusion - free)
- ❌ **Gemini** (text only, no images)

## Pricing

**OpenAI DALL-E:**
- DALL-E 3: ~$0.04 per image (1024x1024)
- DALL-E 2: ~$0.02 per image (512x512) - cheaper option

**Hugging Face:**
- FREE (but slower and has rate limits)

**Replicate:**
- Pay per use, varies by model

## Quick Test

Once you add your OpenAI key:
1. Restart the backend server
2. Try generating a design
3. You should see real AI-generated images!

---

**TL;DR:** Get OpenAI key from https://platform.openai.com/api-keys and add it to `server/.env` as `OPENAI_API_KEY=sk-...`


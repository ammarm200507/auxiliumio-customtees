import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { generateDesigns } from './services/aiService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'AI Design API is running' });
});

// Generate designs endpoint
app.post('/api/generate-design', async (req, res) => {
  try {
    const { prompt, count = 4 } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({ 
        error: 'Prompt is required' 
      });
    }

    console.log(`Generating ${count} designs for prompt: "${prompt}"`);

    // Generate designs using AI service
    const designs = await generateDesigns(prompt, count);

    res.json({
      success: true,
      designs: designs,
      count: designs.length
    });

  } catch (error) {
    console.error('Error generating designs:', error);
    res.status(500).json({ 
      error: 'Failed to generate designs',
      message: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AI Design API server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  // Check which AI services are configured
  const services = [];
  if (process.env.REPLICATE_API_TOKEN) services.push('Replicate');
  if (process.env.OPENAI_API_KEY) services.push('OpenAI DALL-E');
  if (process.env.HF_API_KEY) services.push('Hugging Face');
  
  if (services.length > 0) {
    console.log(`✅ AI Services configured: ${services.join(', ')}`);
  } else {
    console.log(`⚠️  No AI API keys found - using fallback mode`);
    console.log(`   Add API keys to .env file for real AI generation`);
  }
});


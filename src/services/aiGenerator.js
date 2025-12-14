// AI Image Generation Service
// For production, these API calls should go through a backend proxy for security

const API_ENDPOINT = import.meta.env.VITE_AI_API_ENDPOINT || '/api/generate-design';

/**
 * Generate AI design images based on user prompt
 * @param {string} prompt - User's design description
 * @param {number} count - Number of variations to generate (default: 4)
 * @returns {Promise<Array>} Array of design objects with image URLs
 */
export async function generateAIDesigns(prompt, count = 4) {
  try {
    // Enhanced prompt for t-shirt designs
    const enhancedPrompt = `t-shirt design, ${prompt}, graphic design, print-ready, high quality, vector style, bold colors, clean design, professional artwork`;
    
    // Check if we have a custom API endpoint configured
    if (import.meta.env.VITE_AI_API_ENDPOINT || API_ENDPOINT !== '/api/generate-design') {
      // Call custom API endpoint
      return await callCustomAPI(enhancedPrompt, count);
    }
    
    // Try to use Replicate API (requires backend proxy)
    if (import.meta.env.VITE_REPLICATE_API_TOKEN) {
      return await callReplicateAPI(enhancedPrompt, count);
    }
    
    // Fallback: Generate variations using a free service or mock
    return await generateDesignVariations(prompt, count);
    
  } catch (error) {
    console.error('AI generation error:', error);
    // Fallback to variations if API fails
    return generateDesignVariations(prompt, count);
  }
}

/**
 * Call custom API endpoint (for backend integration)
 */
async function callCustomAPI(prompt, count) {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      count,
      style: 't-shirt design',
    }),
  });
  
  if (!response.ok) {
    throw new Error('API request failed');
  }
  
  const data = await response.json();
  return data.designs || generateDesignVariations(prompt, count);
}

/**
 * Call Replicate API (should be proxied through backend)
 */
async function callReplicateAPI(prompt, count) {
  // This would typically go through your backend for security
  // For now, we'll use a proxy pattern
  const response = await fetch('/api/replicate/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      count,
      model: 'stability-ai/sdxl', // or other Stable Diffusion models
    }),
  });
  
  if (!response.ok) {
    throw new Error('Replicate API request failed');
  }
  
  const data = await response.json();
  return data.designs;
}

/**
 * Generate design variations with different styles
 * Uses a combination of prompt variations and placeholder generation
 */
async function generateDesignVariations(prompt, count) {
  const styleVariations = [
    { name: "Minimal", modifier: "minimalist, simple, clean lines" },
    { name: "Bold", modifier: "bold, vibrant, high contrast, eye-catching" },
    { name: "Vintage", modifier: "vintage, retro, classic style, aged aesthetic" },
    { name: "Modern", modifier: "modern, contemporary, sleek, trendy" },
  ];
  
  const colorSchemes = [
    ["#00e0ff", "#8b5cf6"],
    ["#ff6b6b", "#4ecdc4"],
    ["#feca57", "#ff6348"],
    ["#5f27cd", "#00d2d3"],
  ];
  
  // Try to use a free image generation service (like Unsplash API for placeholders)
  // or create gradient-based designs
  const designs = [];
  
  for (let i = 0; i < Math.min(count, 4); i++) {
    const style = styleVariations[i];
    const colors = colorSchemes[i];
    
    // Enhanced prompt with style
    const stylePrompt = `${prompt}, ${style.modifier}, t-shirt graphic design`;
    
    // Try to generate actual image or use enhanced placeholder
    const imageUrl = await generateImageURL(stylePrompt, colors);
    
    designs.push({
      id: Date.now() + i,
      prompt: prompt,
      style: style.name,
      colors: colors,
      imageUrl: imageUrl,
      previewText: prompt.split(" ").slice(0, 3).join(" ").toUpperCase(),
      stylePrompt: stylePrompt,
    });
  }
  
  return designs;
}

/**
 * Generate image URL - attempts to use AI service, falls back to gradient placeholder
 */
async function generateImageURL(prompt, colors) {
  // Option 1: Try to use Hugging Face Inference API (free tier available)
  try {
    const hfResponse = await fetch('https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_HF_API_KEY || ''}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          num_inference_steps: 20,
          guidance_scale: 7.5,
        },
      }),
    });
    
    if (hfResponse.ok) {
      const blob = await hfResponse.blob();
      return URL.createObjectURL(blob);
    }
  } catch (error) {
    console.log('Hugging Face API not available, using fallback');
  }
  
  // Option 2: Try OpenAI DALL-E (if API key is set)
  if (import.meta.env.VITE_OPENAI_API_KEY) {
    try {
      // Note: This should go through a backend proxy in production
      const response = await fetch('/api/openai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 1,
          size: '512x512',
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        return data.imageUrl;
      }
    } catch (error) {
      console.log('OpenAI API not available');
    }
  }
  
  // Fallback: Create a gradient-based placeholder with text
  // This creates a more visually appealing placeholder than basic gradients
  return createGradientPlaceholder(prompt, colors);
}

/**
 * Create a gradient placeholder image
 */
function createGradientPlaceholder(prompt, colors) {
  // Create a canvas-based gradient image
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add text overlay
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = 'bold 32px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const words = prompt.split(' ').slice(0, 3).join(' ');
  ctx.fillText(words.toUpperCase(), canvas.width / 2, canvas.height / 2);
  
  return canvas.toDataURL('image/png');
}

export default generateAIDesigns;


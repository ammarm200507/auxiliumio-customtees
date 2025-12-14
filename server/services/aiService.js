import Replicate from 'replicate';
import OpenAI from 'openai';

/**
 * Generate AI designs using available services
 */
export async function generateDesigns(prompt, count = 4) {
  // Enhance prompt for t-shirt designs
  const enhancedPrompt = `t-shirt design, ${prompt}, graphic design, print-ready, high quality, vector style, bold colors, clean design, professional artwork, no text, illustration`;

  const styleVariations = [
    { name: "Minimal", modifier: "minimalist, simple, clean lines, geometric" },
    { name: "Bold", modifier: "bold, vibrant, high contrast, eye-catching, dynamic" },
    { name: "Vintage", modifier: "vintage, retro, classic style, aged aesthetic, nostalgic" },
    { name: "Modern", modifier: "modern, contemporary, sleek, trendy, futuristic" },
  ];

  const colorSchemes = [
    ["#00e0ff", "#8b5cf6"],
    ["#ff6b6b", "#4ecdc4"],
    ["#feca57", "#ff6348"],
    ["#5f27cd", "#00d2d3"],
  ];

  const designs = [];

  // Try to generate with AI services
  for (let i = 0; i < Math.min(count, 4); i++) {
    const style = styleVariations[i];
    const colors = colorSchemes[i];
    const stylePrompt = `${enhancedPrompt}, ${style.modifier}`;

    try {
      // Try Replicate first (best quality)
      if (process.env.REPLICATE_API_TOKEN) {
        const imageUrl = await generateWithReplicate(stylePrompt);
        if (imageUrl) {
          designs.push({
            id: Date.now() + i,
            prompt: prompt,
            style: style.name,
            colors: colors,
            imageUrl: imageUrl,
            previewText: prompt.split(" ").slice(0, 3).join(" ").toUpperCase(),
            stylePrompt: stylePrompt,
          });
          continue;
        }
      }

      // Try OpenAI DALL-E
      if (process.env.OPENAI_API_KEY) {
        const imageUrl = await generateWithOpenAI(stylePrompt);
        if (imageUrl) {
          designs.push({
            id: Date.now() + i,
            prompt: prompt,
            style: style.name,
            colors: colors,
            imageUrl: imageUrl,
            previewText: prompt.split(" ").slice(0, 3).join(" ").toUpperCase(),
            stylePrompt: stylePrompt,
          });
          continue;
        }
      }

      // Try Hugging Face
      if (process.env.HF_API_KEY) {
        const imageUrl = await generateWithHuggingFace(stylePrompt);
        if (imageUrl) {
          designs.push({
            id: Date.now() + i,
            prompt: prompt,
            style: style.name,
            colors: colors,
            imageUrl: imageUrl,
            previewText: prompt.split(" ").slice(0, 3).join(" ").toUpperCase(),
            stylePrompt: stylePrompt,
          });
          continue;
        }
      }

      // Fallback: Create gradient placeholder
      const placeholderUrl = createGradientPlaceholder(prompt, colors);
      designs.push({
        id: Date.now() + i,
        prompt: prompt,
        style: style.name,
        colors: colors,
        imageUrl: placeholderUrl,
        previewText: prompt.split(" ").slice(0, 3).join(" ").toUpperCase(),
        stylePrompt: stylePrompt,
      });

    } catch (error) {
      console.error(`Error generating design ${i + 1}:`, error);
      // Fallback to placeholder
      const placeholderUrl = createGradientPlaceholder(prompt, colors);
      designs.push({
        id: Date.now() + i,
        prompt: prompt,
        style: style.name,
        colors: colors,
        imageUrl: placeholderUrl,
        previewText: prompt.split(" ").slice(0, 3).join(" ").toUpperCase(),
      });
    }
  }

  return designs;
}

/**
 * Generate image using Replicate (Stable Diffusion)
 */
async function generateWithReplicate(prompt) {
  try {
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt: prompt,
          num_outputs: 1,
          aspect_ratio: "1:1",
          output_format: "url",
        }
      }
    );

    return Array.isArray(output) ? output[0] : output;
  } catch (error) {
    console.error('Replicate API error:', error);
    return null;
  }
}

/**
 * Generate image using OpenAI DALL-E
 */
async function generateWithOpenAI(prompt) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      quality: "standard",
    });

    return response.data[0].url;
  } catch (error) {
    console.error('OpenAI API error:', error);
    return null;
  }
}

/**
 * Generate image using Hugging Face Inference API
 */
async function generateWithHuggingFace(prompt) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            num_inference_steps: 30,
            guidance_scale: 7.5,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HF API error: ${response.statusText}`);
    }

    // Convert blob to data URL
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Hugging Face API error:', error);
    return null;
  }
}

/**
 * Create gradient placeholder (fallback)
 * Returns a data URL that the frontend can use
 */
function createGradientPlaceholder(prompt, colors) {
  // Return a simple gradient placeholder URL
  // The frontend will handle the actual gradient rendering
  // This is just a marker that tells the frontend to use gradient mode
  const words = prompt.split(' ').slice(0, 3).join('+');
  return `gradient://${colors[0]}/${colors[1]}/${encodeURIComponent(words)}`;
}


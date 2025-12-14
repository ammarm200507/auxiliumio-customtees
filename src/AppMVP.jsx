import { useState } from "react";
import "./index.css";

// Modern AI T-Shirt Designer MVP
function AppMVP() {
  const [prompt, setPrompt] = useState("");
  const [generatedDesigns, setGeneratedDesigns] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shirtType, setShirtType] = useState("t-shirt");
  const [shirtColor, setShirtColor] = useState("#ffffff");
  const [shirtSize, setShirtSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [view, setView] = useState("front"); // front or back
  const [pricingMode, setPricingMode] = useState("retail"); // retail or wholesale

  const shirtTypes = [
    { id: "t-shirt", name: "Classic T-Shirt", basePrice: 24.99 },
    { id: "tank", name: "Tank Top", basePrice: 22.99 },
    { id: "long-sleeve", name: "Long Sleeve", basePrice: 29.99 },
    { id: "hoodie", name: "Hoodie", basePrice: 49.99 },
  ];

  const shirtColors = [
    { name: "White", value: "#ffffff", textColor: "#000000" },
    { name: "Black", value: "#000000", textColor: "#ffffff" },
    { name: "Navy", value: "#1a2332", textColor: "#ffffff" },
    { name: "Gray", value: "#808080", textColor: "#ffffff" },
    { name: "Red", value: "#d32f2f", textColor: "#ffffff" },
    { name: "Blue", value: "#1976d2", textColor: "#ffffff" },
    { name: "Green", value: "#388e3c", textColor: "#ffffff" },
    { name: "Purple", value: "#7b1fa2", textColor: "#ffffff" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

  // Pricing calculation
  const getBasePrice = () => {
    return shirtTypes.find(t => t.id === shirtType)?.basePrice || 24.99;
  };

  const getUnitPrice = () => {
    const base = getBasePrice();
    if (pricingMode === "wholesale") {
      if (quantity >= 50) return base * 0.6; // 40% discount
      if (quantity >= 25) return base * 0.7; // 30% discount
      if (quantity >= 10) return base * 0.8; // 20% discount
      return base * 0.9; // 10% discount
    }
    return base;
  };

  const getTotalPrice = () => {
    return (getUnitPrice() * quantity).toFixed(2);
  };

  // Generate designs based on AI prompt
  const generateDesigns = async () => {
    if (!prompt.trim()) {
      alert("Please enter a design description");
      return;
    }

    setLoading(true);
    setGeneratedDesigns([]);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate 4 design variations
    const designs = [];
    const styleVariations = ["Minimal", "Bold", "Vintage", "Modern"];
    const colorSchemes = [
      ["#00e0ff", "#8b5cf6"],
      ["#ff6b6b", "#4ecdc4"],
      ["#feca57", "#ff6348"],
      ["#5f27cd", "#00d2d3"],
    ];
    
    // Create placeholder image URLs (using gradient placeholders)
    const placeholderImages = colorSchemes.map((colors, i) => 
      `https://via.placeholder.com/400x400/${colors[0].replace('#', '')}/${colors[1].replace('#', '')}?text=${encodeURIComponent(prompt.split(' ').slice(0, 2).join('+'))}`
    );

    for (let i = 0; i < 4; i++) {
      designs.push({
        id: Date.now() + i,
        prompt: prompt,
        style: styleVariations[i],
        colors: colorSchemes[i],
        imageUrl: placeholderImages[i],
        previewText: prompt.split(" ").slice(0, 3).join(" ").toUpperCase(),
      });
    }

    setGeneratedDesigns(designs);
    setLoading(false);
  };

  const selectDesign = (design) => {
    setSelectedDesign(design);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0d14] via-[#141923] to-[#0a0d14]">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00e0ff] to-[#8b5cf6] bg-clip-text text-transparent font-display">
                AI T-Shirt Designer
              </h1>
              <p className="text-gray-400 text-sm mt-1">Create custom graphic tees with AI</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setPricingMode(pricingMode === "retail" ? "wholesale" : "retail")}
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
              >
                {pricingMode === "retail" ? "💰 Retail" : "🏭 Wholesale"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Design Generation */}
          <div className="space-y-6">
            {/* Prompt Input */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4">Describe Your Design</h2>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder='e.g., "Abstract geometric patterns with neon colors" or "Vintage retro wave design with sunset colors"'
                className="w-full h-32 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00e0ff] resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                    generateDesigns();
                  }
                }}
              />
              <button
                onClick={generateDesigns}
                disabled={loading || !prompt.trim()}
                className="mt-4 w-full py-3 bg-gradient-to-r from-[#00e0ff] to-[#8b5cf6] rounded-xl font-semibold text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {loading ? "⏳ Generating..." : "✨ Generate Designs"}
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">Press Ctrl+Enter to generate</p>
            </div>

            {/* Generated Designs */}
            {generatedDesigns.length > 0 && (
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-4">Generated Designs ({generatedDesigns.length})</h3>
                <div className="grid grid-cols-2 gap-4">
                  {generatedDesigns.map((design) => (
                    <div
                      key={design.id}
                      onClick={() => selectDesign(design)}
                      className={`relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                        selectedDesign?.id === design.id
                          ? "border-[#00e0ff] ring-2 ring-[#00e0ff]/50"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="aspect-square bg-gradient-to-br" style={{
                        backgroundImage: `linear-gradient(135deg, ${design.colors[0]}, ${design.colors[1]})`
                      }}>
                        <img 
                          src={design.imageUrl} 
                          alt={design.prompt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to gradient if image fails
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                        <div className="text-xs font-semibold text-white">{design.style}</div>
                      </div>
                      {selectedDesign?.id === design.id && (
                        <div className="absolute top-2 right-2 bg-[#00e0ff] rounded-full w-6 h-6 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How It Works */}
            {generatedDesigns.length === 0 && !loading && (
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-4">How It Works</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: "✍️", title: "Describe", desc: "Enter your design idea" },
                    { icon: "🤖", title: "AI Generates", desc: "Get 4 style variations" },
                    { icon: "👕", title: "Customize", desc: "Preview & order" },
                  ].map((step, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl mb-2">{step.icon}</div>
                      <div className="font-semibold text-sm mb-1">{step.title}</div>
                      <div className="text-xs text-gray-400">{step.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Preview & Customization */}
          <div className="space-y-6">
            {/* T-Shirt Preview */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Preview</h2>
                <div className="flex gap-2 bg-black/30 rounded-lg p-1">
                  <button
                    onClick={() => setView("front")}
                    className={`px-4 py-1 rounded-md text-sm font-medium transition-colors ${
                      view === "front"
                        ? "bg-[#00e0ff] text-black"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Front
                  </button>
                  <button
                    onClick={() => setView("back")}
                    className={`px-4 py-1 rounded-md text-sm font-medium transition-colors ${
                      view === "back"
                        ? "bg-[#00e0ff] text-black"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Back
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center min-h-[500px] bg-black/20 rounded-xl p-8">
                <div className="relative" style={{ width: "350px" }}>
                  <svg viewBox="0 0 400 480" className="w-full h-auto">
                    <defs>
                      {selectedDesign && (
                        <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={selectedDesign.colors[0]} />
                          <stop offset="100%" stopColor={selectedDesign.colors[1]} />
                        </linearGradient>
                      )}
                      {/* Shadow for depth */}
                      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                        <feOffset dx="0" dy="2" result="offsetblur"/>
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.3"/>
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* T-Shirt Body - Realistic shape */}
                    {/* Main body */}
                    <path
                      d="M 60 100 
                         L 60 420 
                         Q 60 440 80 440 
                         L 320 440 
                         Q 340 440 340 420 
                         L 340 100 
                         Q 340 85 330 80 
                         L 290 80 
                         L 290 65 
                         Q 290 50 275 50 
                         L 200 50 
                         L 200 45 
                         Q 200 35 190 35 
                         L 210 35 
                         Q 220 35 220 45 
                         L 220 50 
                         L 125 50 
                         Q 110 50 110 65 
                         L 110 80 
                         L 70 80 
                         Q 60 85 60 100 Z"
                      fill={shirtColor}
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.5"
                      filter="url(#shadow)"
                    />
                    
                    {/* Left sleeve */}
                    <ellipse
                      cx="60"
                      cy="100"
                      rx="35"
                      ry="50"
                      fill={shirtColor}
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.5"
                    />
                    {/* Sleeve opening detail */}
                    <ellipse
                      cx="60"
                      cy="100"
                      rx="30"
                      ry="42"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.1)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    
                    {/* Right sleeve */}
                    <ellipse
                      cx="340"
                      cy="100"
                      rx="35"
                      ry="50"
                      fill={shirtColor}
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.5"
                    />
                    {/* Sleeve opening detail */}
                    <ellipse
                      cx="340"
                      cy="100"
                      rx="30"
                      ry="42"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.1)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    
                    {/* Neckline - more realistic */}
                    {view === "front" ? (
                      <path
                        d="M 180 50 
                           Q 200 50 220 50 
                           Q 220 65 200 65 
                           Q 180 65 180 50 Z"
                        fill={shirtColor}
                        stroke="rgba(0, 0, 0, 0.2)"
                        strokeWidth="1.5"
                      />
                    ) : (
                      <path
                        d="M 170 50 
                           Q 200 45 230 50 
                           Q 230 75 200 75 
                           Q 170 75 170 50 Z"
                        fill={shirtColor}
                        stroke="rgba(0, 0, 0, 0.2)"
                        strokeWidth="1.5"
                      />
                    )}
                    
                    {/* Side seams for depth */}
                    <line
                      x1="60"
                      y1="100"
                      x2="60"
                      y2="420"
                      stroke="rgba(0, 0, 0, 0.08)"
                      strokeWidth="1"
                    />
                    <line
                      x1="340"
                      y1="100"
                      x2="340"
                      y2="420"
                      stroke="rgba(0, 0, 0, 0.08)"
                      strokeWidth="1"
                    />
                    
                    {/* Bottom hem detail */}
                    <path
                      d="M 80 440 Q 200 445 320 440"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    
                    {/* Design on shirt */}
                    {selectedDesign && view === "front" && (
                      <g>
                        <circle
                          cx="200"
                          cy="200"
                          r="65"
                          fill="url(#designGradient)"
                          opacity="0.92"
                          filter="url(#shadow)"
                        />
                        {/* Design shadow for depth */}
                        <ellipse
                          cx="202"
                          cy="205"
                          rx="65"
                          ry="10"
                          fill="rgba(0, 0, 0, 0.2)"
                          opacity="0.3"
                        />
                      </g>
                    )}
                    {selectedDesign && view === "back" && (
                      <g>
                        <circle
                          cx="200"
                          cy="220"
                          r="75"
                          fill="url(#designGradient)"
                          opacity="0.92"
                          filter="url(#shadow)"
                        />
                        {/* Design shadow for depth */}
                        <ellipse
                          cx="202"
                          cy="228"
                          rx="75"
                          ry="12"
                          fill="rgba(0, 0, 0, 0.2)"
                          opacity="0.3"
                        />
                      </g>
                    )}
                    {!selectedDesign && (
                      <text
                        x="200"
                        y="200"
                        textAnchor="middle"
                        fill="rgba(255, 255, 255, 0.25)"
                        fontSize="14"
                        fontFamily="Inter, sans-serif"
                      >
                        Select a design to preview
                      </text>
                    )}
                  </svg>
                </div>
              </div>
            </div>

            {/* Customization Options */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 space-y-6">
              {/* Shirt Type */}
              <div>
                <label className="block text-sm font-medium mb-3">Shirt Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {shirtTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setShirtType(type.id)}
                      className={`px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                        shirtType === type.id
                          ? "border-[#00e0ff] bg-[#00e0ff]/10 text-[#00e0ff]"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shirt Color */}
              <div>
                <label className="block text-sm font-medium mb-3">Color</label>
                <div className="flex flex-wrap gap-3">
                  {shirtColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setShirtColor(color.value)}
                      className={`w-12 h-12 rounded-xl border-2 transition-all ${
                        shirtColor === color.value
                          ? "border-[#00e0ff] ring-2 ring-[#00e0ff]/50"
                          : "border-white/20 hover:border-white/40"
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium mb-3">Size</label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setShirtSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                        shirtSize === size
                          ? "border-[#00e0ff] bg-[#00e0ff]/10 text-[#00e0ff]"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Pricing */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium">Quantity</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg border border-white/10 hover:bg-white/10 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg border border-white/10 hover:bg-white/10 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2 bg-black/30 rounded-xl p-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      {pricingMode === "retail" ? "Retail Price" : "Wholesale Price"}
                    </span>
                    <span className="font-semibold">${getUnitPrice().toFixed(2)} each</span>
                  </div>
                  {pricingMode === "wholesale" && quantity >= 10 && (
                    <div className="text-xs text-[#00e0ff]">
                      {quantity >= 50 ? "40%" : quantity >= 25 ? "30%" : "20%"} discount applied
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#00e0ff] to-[#8b5cf6] bg-clip-text text-transparent">
                      ${getTotalPrice()}
                    </span>
                  </div>
                </div>

                <button
                  disabled={!selectedDesign}
                  className="mt-4 w-full py-4 bg-gradient-to-r from-[#00e0ff] to-[#8b5cf6] rounded-xl font-semibold text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppMVP;

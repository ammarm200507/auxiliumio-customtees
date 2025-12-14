import { useState } from "react";
import "./index.css";
import { generateAIDesigns } from "./services/aiGenerator";

// Modern AI T-Shirt Designer - Step-by-Step Interface
function AppMVP() {
  const [currentStep, setCurrentStep] = useState(1); // 1: Upload, 2: Design, 3: Products, 4: Sizes
  const [prompt, setPrompt] = useState("");
  const [generatedDesigns, setGeneratedDesigns] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shirtType, setShirtType] = useState("t-shirt");
  const [shirtColor, setShirtColor] = useState("#ffffff");
  const [shirtSize, setShirtSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [view, setView] = useState("front"); // front or back
  const [pricingMode, setPricingMode] = useState("retail");
  const [zoom, setZoom] = useState(100);
  const [displayMode, setDisplayMode] = useState("model"); // model, flat, grid

  const steps = [
    { id: 1, name: "Upload", icon: "☁️" },
    { id: 2, name: "Design", icon: "🎨" },
    { id: 3, name: "Products", icon: "👕" },
    { id: 4, name: "Sizes", icon: "📏" },
  ];

  const shirtTypes = [
    { 
      id: "t-shirt", 
      name: "Gildan G640 - Softstyle® Unisex T-Shirt", 
      basePrice: 30.32,
      material: "100% Cotton",
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    { 
      id: "tank", 
      name: "Classic Tank Top", 
      basePrice: 22.99,
      material: "100% Cotton",
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    { 
      id: "long-sleeve", 
      name: "Long Sleeve T-Shirt", 
      basePrice: 35.99,
      material: "100% Cotton",
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    { 
      id: "hoodie", 
      name: "Classic Hoodie", 
      basePrice: 49.99,
      material: "80% Cotton, 20% Polyester",
      sizes: ["S", "M", "L", "XL", "2XL"]
    },
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
    return shirtTypes.find(t => t.id === shirtType)?.basePrice || 30.32;
  };

  const getUnitPrice = () => {
    const base = getBasePrice();
    if (pricingMode === "wholesale") {
      if (quantity >= 50) return base * 0.6;
      if (quantity >= 25) return base * 0.7;
      if (quantity >= 10) return base * 0.8;
      return base * 0.9;
    }
    return base;
  };

  const getSubTotal = () => {
    return (getUnitPrice() * quantity).toFixed(2);
  };

  // Generate designs using AI
  const generateDesigns = async () => {
    if (!prompt.trim()) {
      alert("Please enter a design description");
      return;
    }

    setLoading(true);
    setGeneratedDesigns([]);
    
    try {
      // Call AI generation service
      const designs = await generateAIDesigns(prompt, 4);
      setGeneratedDesigns(designs);
      setCurrentStep(2); // Move to Design step
    } catch (error) {
      console.error("Error generating designs:", error);
      alert("Failed to generate designs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectDesign = (design) => {
    setSelectedDesign(design);
  };

  const currentProduct = shirtTypes.find(t => t.id === shirtType) || shirtTypes[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Custom T-Shirt Designer</h1>
              <p className="text-sm text-gray-500">Create your perfect design</p>
            </div>
            <button
              onClick={() => setPricingMode(pricingMode === "retail" ? "wholesale" : "retail")}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700"
            >
              {pricingMode === "retail" ? "💰 Retail" : "🏭 Wholesale"}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1800px] mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-200px)]">
          {/* Left Navigation */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-full">
              <div className="space-y-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                      currentStep === step.id
                        ? "bg-blue-50 border-2 border-blue-500 text-blue-700 font-semibold"
                        : "border-2 border-transparent text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-xl">{step.icon}</span>
                    <div>
                      <div className="text-sm font-medium">{step.id}. {step.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Central Configuration Panel */}
          <div className="col-span-5 bg-white rounded-lg shadow-sm border border-gray-200 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Step Header */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentStep}. {steps.find(s => s.id === currentStep)?.name}</h2>
              </div>

              {/* Front/Back Toggle */}
              {(currentStep === 1 || currentStep === 2) && (
                <div className="flex gap-3">
                  <button
                    onClick={() => setView("front")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                      view === "front"
                        ? "border-blue-500 bg-blue-50 text-blue-700 font-semibold"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span>👕</span>
                    Front of Shirt
                  </button>
                  <button
                    onClick={() => setView("back")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                      view === "back"
                        ? "border-blue-500 bg-blue-50 text-blue-700 font-semibold"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span>👕</span>
                    Back of Shirt
                  </button>
                </div>
              )}

              {/* Product Details Card */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">👕</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{currentProduct.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-gray-600">Color: {shirtColors.find(c => c.value === shirtColor)?.name}</span>
                      <span className="px-2 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                        {currentProduct.material}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      Prices for {currentProduct.sizes.join(", ")}: ${getUnitPrice().toFixed(2)}
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      Sub Total: ${getSubTotal()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 1: Upload/Generate */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe Your Design
                    </label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder='e.g., "Abstract geometric patterns with neon colors" or "Vintage retro wave design"'
                      className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900 placeholder-gray-400 bg-white"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                          generateDesigns();
                        }
                      }}
                    />
                    <button
                      onClick={generateDesigns}
                      disabled={loading || !prompt.trim()}
                      className="mt-3 w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {loading ? "⏳ Generating Designs..." : "✨ Generate Designs"}
                    </button>
                  </div>
                  
                  {/* Design Area Placeholder */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center text-center min-h-[300px] bg-gray-50">
                    <span className="text-6xl mb-4">👕</span>
                    <p className="text-gray-600 font-medium">{view === "front" ? "Front of Shirt" : "Back of Shirt"}</p>
                    <p className="text-sm text-gray-400 mt-2">Your design will appear here</p>
                  </div>

                  <button
                    onClick={() => setCurrentStep(2)}
                    disabled={!selectedDesign}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next &gt;
                  </button>
                </div>
              )}

              {/* Step 2: Design Selection */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  {generatedDesigns.length > 0 ? (
                    <>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Select a Design</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {generatedDesigns.map((design) => (
                            <div
                              key={design.id}
                              onClick={() => selectDesign(design)}
                              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                                selectedDesign?.id === design.id
                                  ? "border-blue-500 ring-2 ring-blue-200"
                                  : "border-gray-200 hover:border-gray-300"
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
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                                <div className="text-xs font-semibold text-white">{design.style}</div>
                              </div>
                              {selectedDesign?.id === design.id && (
                                <div className="absolute top-2 right-2 bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {selectedDesign && (
                        <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50 min-h-[200px] flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br" style={{
                              backgroundImage: `linear-gradient(135deg, ${selectedDesign.colors[0]}, ${selectedDesign.colors[1]})`
                            }}></div>
                            <p className="font-semibold text-gray-900">{selectedDesign.style} Design</p>
                            <p className="text-sm text-gray-500">{selectedDesign.prompt}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <button
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        >
                          ← Back
                        </button>
                        <button
                          onClick={() => setCurrentStep(3)}
                          disabled={!selectedDesign}
                          className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Next &gt;
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500">Generate designs in Step 1 first</p>
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                      >
                        Go to Upload
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Products */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Product</label>
                    <div className="space-y-2">
                      {shirtTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setShirtType(type.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-left transition-all ${
                            shirtType === type.id
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <span className="text-2xl">👕</span>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">{type.name}</div>
                            <div className="text-sm text-gray-500">${type.basePrice.toFixed(2)}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Next &gt;
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Sizes & Quantity */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Size</label>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setShirtSize(size)}
                          className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                            shirtSize === size
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center justify-center font-semibold"
                      >
                        -
                      </button>
                      <span className="w-16 text-center font-semibold text-lg">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center justify-center font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-gray-900">${getSubTotal()}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Product Preview */}
          <div className="col-span-5 bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col">
            {/* Preview Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setView("front")}
                  className={`px-3 py-1.5 rounded text-sm font-medium ${
                    view === "front"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Front
                </button>
                <button
                  onClick={() => setView("back")}
                  className={`px-3 py-1.5 rounded text-sm font-medium ${
                    view === "back"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Back
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoom(Math.max(50, zoom - 25))}
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded"
                >
                  -
                </button>
                <span className="text-sm text-gray-600 w-16 text-center">{zoom}%</span>
                <button
                  onClick={() => setZoom(Math.min(200, zoom + 25))}
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Display Mode Toggle */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setDisplayMode("model")}
                className={`p-2 rounded ${displayMode === "model" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
                title="Model View"
              >
                👕
              </button>
              <button
                onClick={() => setDisplayMode("flat")}
                className={`p-2 rounded ${displayMode === "flat" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
                title="Flat View"
              >
                ⬜
              </button>
              <button
                onClick={() => setDisplayMode("grid")}
                className={`p-2 rounded ${displayMode === "grid" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
                title="Grid View"
              >
                ⊞
              </button>
            </div>

            {/* Product Preview */}
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden relative">
              <div className="relative" style={{ transform: `scale(${zoom / 100})`, transition: 'transform 0.2s' }}>
                {displayMode === "model" ? (
                  <div className="relative" style={{ width: "400px", height: "500px" }}>
                    {/* Model silhouette with shirt */}
                    <svg viewBox="0 0 400 500" className="w-full h-full">
                      {/* Model base */}
                      <ellipse cx="200" cy="480" rx="120" ry="20" fill="#e5e7eb" opacity="0.3" />
                      
                      {/* T-Shirt on model */}
                      <path
                        d="M 80 120 L 80 420 Q 80 440 100 440 L 300 440 Q 320 440 320 420 L 320 120 Q 320 100 300 100 L 280 100 L 280 80 Q 280 65 265 65 L 235 65 Q 220 65 220 80 L 220 100 L 180 100 L 180 80 Q 180 65 165 65 L 135 65 Q 120 65 120 80 L 120 100 L 100 100 Q 80 100 80 120 Z"
                        fill={shirtColor}
                        stroke="rgba(0, 0, 0, 0.1)"
                        strokeWidth="2"
                      />
                      
                      {/* Sleeves */}
                      <ellipse cx="80" cy="120" rx="30" ry="45" fill={shirtColor} stroke="rgba(0, 0, 0, 0.1)" strokeWidth="2" />
                      <ellipse cx="320" cy="120" rx="30" ry="45" fill={shirtColor} stroke="rgba(0, 0, 0, 0.1)" strokeWidth="2" />
                      
                      {/* Design */}
                      {selectedDesign && view === "front" && (
                        <defs>
                          <linearGradient id="previewGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={selectedDesign.colors[0]} />
                            <stop offset="100%" stopColor={selectedDesign.colors[1]} />
                          </linearGradient>
                        </defs>
                      )}
                      {selectedDesign && view === "front" && (
                        <circle cx="200" cy="220" r="50" fill="url(#previewGradient)" opacity="0.9" />
                      )}
                      {selectedDesign && view === "back" && (
                        <circle cx="200" cy="240" r="60" fill="url(#previewGradient)" opacity="0.9" />
                      )}
                    </svg>
                  </div>
                ) : (
                  <div className="text-gray-400">Flat/Grid view coming soon</div>
                )}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setCurrentStep(3)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
              >
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: shirtColor, border: "1px solid #ccc" }}></div>
                Pick Color
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
              >
                <span>👕</span>
                Switch Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppMVP;

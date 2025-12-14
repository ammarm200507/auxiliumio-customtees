import { useState } from "react";
import "./App.css";

// AI T-Shirt Designer - Functional MVP
function AppMVP() {
  const [prompt, setPrompt] = useState("");
  const [generatedDesigns, setGeneratedDesigns] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shirtColor, setShirtColor] = useState("#ffffff");
  const [designSize, setDesignSize] = useState(100);
  const [designPosition, setDesignPosition] = useState({ x: 50, y: 45 });
  const [showPreview, setShowPreview] = useState(false);

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

    // Generate 4 design variations based on prompt
    const designs = [];
    const styleVariations = ["Minimal", "Bold", "Vintage", "Modern"];
    const colorSchemes = [
      ["#00e0ff", "#8b5cf6"],
      ["#ff6b6b", "#4ecdc4"],
      ["#feca57", "#ff6348"],
      ["#5f27cd", "#00d2d3"],
    ];

    for (let i = 0; i < 4; i++) {
      designs.push({
        id: Date.now() + i,
        prompt: prompt,
        style: styleVariations[i],
        colors: colorSchemes[i],
        previewText: prompt.split(" ").slice(0, 3).join(" ").toUpperCase(),
        description: `${styleVariations[i]} style interpretation of "${prompt}"`,
      });
    }

    setGeneratedDesigns(designs);
    setLoading(false);
  };

  const selectDesign = (design) => {
    setSelectedDesign(design);
    setShowPreview(true);
  };

  const exportDesign = () => {
    if (!selectedDesign) return;
    
    const exportData = {
      prompt: selectedDesign.prompt,
      style: selectedDesign.style,
      shirtColor: shirtColor,
      designSize: designSize,
      position: designPosition,
      timestamp: new Date().toISOString(),
    };

    // In production, this would generate actual print files
    const message = `Design Export Ready!\n\n` +
      `Prompt: ${exportData.prompt}\n` +
      `Style: ${exportData.style}\n` +
      `Shirt Color: ${shirtColors.find(c => c.value === shirtColor)?.name || shirtColor}\n` +
      `Design Size: ${designSize}%\n\n` +
      `Print-ready files would include:\n` +
      `- High-res PNG (300 DPI)\n` +
      `- Vector SVG format\n` +
      `- Placement guide\n` +
      `- Color specifications`;
    
    alert(message);
    console.log("Export data:", exportData);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0d14",
      color: "#f5f8fc",
      fontFamily: "Inter, 'Source Sans Pro', sans-serif",
      padding: "0",
    }}>
      {/* Header */}
      <header style={{
        background: "linear-gradient(135deg, rgba(0, 224, 255, 0.1), rgba(139, 92, 246, 0.1))",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "24px 40px",
        backdropFilter: "blur(10px)",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{
              background: "linear-gradient(135deg, #00e0ff, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "32px",
              fontWeight: "700",
              margin: "0 0 8px 0",
              fontFamily: "Poppins, sans-serif",
            }}>
              AI T-Shirt Designer
            </h1>
            <p style={{ margin: "0", color: "#c2c8d6", fontSize: "16px" }}>
              Create custom graphic tees with AI-powered design generation
            </p>
          </div>
          {selectedDesign && (
            <button
              onClick={exportDesign}
              style={{
                padding: "12px 32px",
                background: "linear-gradient(135deg, #00e0ff, #8b5cf6)",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Export Design
            </button>
          )}
        </div>
      </header>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: showPreview ? "1fr 1fr" : "1fr", gap: "32px" }}>
          {/* Left: Design Generation */}
          <div>
            {/* Prompt Input */}
            <div style={{
              background: "rgba(20, 25, 35, 0.85)",
              borderRadius: "16px",
              padding: "32px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              marginBottom: "24px",
            }}>
              <h2 style={{ color: "#f5f8fc", marginBottom: "20px", fontSize: "24px", fontWeight: "600" }}>
                Describe Your Design
              </h2>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder='e.g., "Abstract geometric patterns with neon colors" or "Vintage retro wave design with sunset colors" or "Minimalist mountain landscape in blue tones"'
                style={{
                  width: "100%",
                  minHeight: "120px",
                  padding: "16px",
                  background: "rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  color: "#f5f8fc",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                    generateDesigns();
                  }
                }}
              />
              <div style={{ marginTop: "16px", display: "flex", gap: "12px", alignItems: "center" }}>
                <button
                  onClick={generateDesigns}
                  disabled={loading || !prompt.trim()}
                  style={{
                    padding: "14px 32px",
                    background: loading
                      ? "rgba(0, 224, 255, 0.5)"
                      : "linear-gradient(135deg, #00e0ff, #8b5cf6)",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: loading || !prompt.trim() ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    opacity: loading || !prompt.trim() ? 0.6 : 1,
                  }}
                  onMouseOver={(e) => {
                    if (!loading && prompt.trim()) {
                      e.currentTarget.style.transform = "scale(1.02)";
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {loading ? "⏳ Generating Designs..." : "✨ Generate Designs"}
                </button>
                <span style={{ color: "#97a1b5", fontSize: "14px" }}>
                  Press Ctrl+Enter to generate
                </span>
              </div>
            </div>

            {/* Generated Designs Grid */}
            {generatedDesigns.length > 0 && (
              <div style={{
                background: "rgba(20, 25, 35, 0.85)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}>
                <h3 style={{ color: "#f5f8fc", marginBottom: "24px", fontSize: "20px", fontWeight: "600" }}>
                  Generated Designs ({generatedDesigns.length})
                </h3>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}>
                  {generatedDesigns.map((design) => (
                    <div
                      key={design.id}
                      onClick={() => selectDesign(design)}
                      style={{
                        padding: "24px",
                        background: selectedDesign?.id === design.id
                          ? "rgba(0, 224, 255, 0.2)"
                          : "rgba(0, 0, 0, 0.3)",
                        border: selectedDesign?.id === design.id
                          ? "2px solid #00e0ff"
                          : "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        position: "relative",
                      }}
                      onMouseOver={(e) => {
                        if (selectedDesign?.id !== design.id) {
                          e.currentTarget.style.borderColor = "rgba(0, 224, 255, 0.5)";
                          e.currentTarget.style.transform = "translateY(-4px)";
                        }
                      }}
                      onMouseOut={(e) => {
                        if (selectedDesign?.id !== design.id) {
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }
                      }}
                    >
                      {/* Design Preview */}
                      <div style={{
                        height: "180px",
                        background: `linear-gradient(135deg, ${design.colors[0]}, ${design.colors[1]})`,
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                        position: "relative",
                        overflow: "hidden",
                      }}>
                        <div style={{
                          fontSize: "24px",
                          fontWeight: "700",
                          color: "white",
                          textAlign: "center",
                          textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                          padding: "16px",
                        }}>
                          {design.previewText}
                        </div>
                      </div>
                      <div style={{ color: "#c2c8d6", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>
                        {design.style} Style
                      </div>
                      <div style={{ color: "#97a1b5", fontSize: "12px" }}>
                        {design.description}
                      </div>
                      {selectedDesign?.id === design.id && (
                        <div style={{
                          position: "absolute",
                          top: "12px",
                          right: "12px",
                          background: "#00e0ff",
                          borderRadius: "50%",
                          width: "24px",
                          height: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "14px",
                        }}>
                          ✓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How It Works */}
            {generatedDesigns.length === 0 && !loading && (
              <div style={{
                background: "rgba(20, 25, 35, 0.85)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginTop: "24px",
              }}>
                <h3 style={{ color: "#f5f8fc", marginBottom: "24px", fontSize: "20px", fontWeight: "600" }}>
                  How It Works
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
                  {[
                    { icon: "✍️", title: "Describe", desc: "Enter your design idea in plain English" },
                    { icon: "🤖", title: "AI Generates", desc: "Our AI creates multiple style variations" },
                    { icon: "👕", title: "Customize & Export", desc: "Preview on shirt and get print-ready files" },
                  ].map((step, i) => (
                    <div key={i}>
                      <div style={{ fontSize: "40px", marginBottom: "12px" }}>{step.icon}</div>
                      <h4 style={{ color: "#f5f8fc", marginBottom: "8px", fontSize: "18px" }}>{step.title}</h4>
                      <p style={{ color: "#97a1b5", fontSize: "14px", lineHeight: "1.6" }}>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Preview & Customization */}
          {showPreview && selectedDesign && (
            <div>
              <div style={{
                background: "rgba(20, 25, 35, 0.85)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                position: "sticky",
                top: "40px",
              }}>
                <h2 style={{ color: "#f5f8fc", marginBottom: "24px", fontSize: "24px", fontWeight: "600" }}>
                  Preview & Customize
                </h2>

                {/* T-Shirt Preview */}
                <div style={{
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "16px",
                  padding: "60px 40px",
                  marginBottom: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "500px",
                }}>
                  <div style={{ position: "relative", width: "100%", maxWidth: "350px" }}>
                    <svg viewBox="0 0 300 360" style={{ width: "100%", height: "auto" }}>
                      {/* T-Shirt */}
                      <defs>
                        <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={selectedDesign.colors[0]} />
                          <stop offset="100%" stopColor={selectedDesign.colors[1]} />
                        </linearGradient>
                      </defs>
                      
                      {/* Shirt body */}
                      <path
                        d="M 30 70 L 30 300 Q 30 320 50 320 L 250 320 Q 270 320 270 300 L 270 70 Q 270 50 250 50 L 230 50 L 230 30 Q 230 20 220 20 L 80 20 Q 70 20 70 30 L 70 50 L 50 50 Q 30 50 30 70 Z"
                        fill={shirtColor}
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="3"
                      />
                      
                      {/* Sleeves */}
                      <ellipse cx="50" cy="70" rx="25" ry="35" fill={shirtColor} stroke="rgba(255, 255, 255, 0.2)" strokeWidth="3" />
                      <ellipse cx="250" cy="70" rx="25" ry="35" fill={shirtColor} stroke="rgba(255, 255, 255, 0.2)" strokeWidth="3" />
                      
                      {/* Design on shirt */}
                      <circle
                        cx={150 + (designPosition.x - 50) * 3}
                        cy={180 + (designPosition.y - 45) * 3.6}
                        r={designSize * 1.5}
                        fill="url(#designGradient)"
                        opacity="0.9"
                      />
                      <text
                        x={150 + (designPosition.x - 50) * 3}
                        y={180 + (designPosition.y - 45) * 3.6}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={shirtColors.find(c => c.value === shirtColor)?.textColor || "#000"}
                        fontSize={designSize * 0.8}
                        fontWeight="700"
                        fontFamily="Poppins, sans-serif"
                        opacity="0.8"
                      >
                        {selectedDesign.previewText}
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Shirt Color Picker */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={{
                    display: "block",
                    color: "#c2c8d6",
                    marginBottom: "12px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}>
                    Shirt Color
                  </label>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {shirtColors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setShirtColor(color.value)}
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "10px",
                          background: color.value,
                          border: shirtColor === color.value
                            ? "3px solid #00e0ff"
                            : "2px solid rgba(255, 255, 255, 0.2)",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          boxShadow: shirtColor === color.value ? "0 0 12px rgba(0, 224, 255, 0.5)" : "none",
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Design Size */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={{
                    display: "block",
                    color: "#c2c8d6",
                    marginBottom: "12px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}>
                    Design Size: {designSize}%
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    value={designSize}
                    onChange={(e) => setDesignSize(Number(e.target.value))}
                    style={{
                      width: "100%",
                      height: "8px",
                      borderRadius: "4px",
                      background: "rgba(0, 224, 255, 0.2)",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Design Position */}
                <div>
                  <label style={{
                    display: "block",
                    color: "#c2c8d6",
                    marginBottom: "12px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}>
                    Design Position
                  </label>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <div style={{ flex: 1 }}>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={designPosition.x}
                        onChange={(e) => setDesignPosition({ ...designPosition, x: Number(e.target.value) })}
                        style={{ width: "100%" }}
                      />
                      <div style={{ color: "#97a1b5", fontSize: "12px", marginTop: "4px" }}>Horizontal</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={designPosition.y}
                        onChange={(e) => setDesignPosition({ ...designPosition, y: Number(e.target.value) })}
                        style={{ width: "100%" }}
                      />
                      <div style={{ color: "#97a1b5", fontSize: "12px", marginTop: "4px" }}>Vertical</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppMVP;

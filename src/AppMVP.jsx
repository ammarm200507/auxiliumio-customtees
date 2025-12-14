import { useState } from "react";
import "./App.css";

// MVP AI T-Shirt Design Tool
function AppMVP() {
  const [prompt, setPrompt] = useState("");
  const [designs, setDesigns] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shirtColor, setShirtColor] = useState("#ffffff");
  const [designPosition, setDesignPosition] = useState({ x: 50, y: 40 });

  const shirtColors = [
    { name: "White", value: "#ffffff" },
    { name: "Black", value: "#000000" },
    { name: "Navy", value: "#1a2332" },
    { name: "Gray", value: "#808080" },
    { name: "Red", value: "#d32f2f" },
    { name: "Blue", value: "#1976d2" },
  ];

  // Simulate AI design generation
  const generateDesign = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate mock designs based on prompt
    const mockDesigns = Array.from({ length: 4 }, (_, i) => ({
      id: Date.now() + i,
      prompt: prompt,
      preview: `🎨 ${prompt} (Design ${i + 1})`,
      style: ["Minimal", "Bold", "Vintage", "Modern"][i],
      colors: ["#00e0ff", "#8b5cf6", "#ff6b6b", "#4ecdc4"][i],
    }));

    setDesigns(mockDesigns);
    setLoading(false);
  };

  const handleDesignSelect = (design) => {
    setSelectedDesign(design);
  };

  const exportDesign = () => {
    if (!selectedDesign) return;
    alert(`Exporting design: ${selectedDesign.prompt}\n\nIn production, this would generate:\n- PNG file (high-res)\n- Vector file (SVG/EPS)\n- Print-ready specifications`);
  };

  return (
    <div className="mvp-container" style={{
      minHeight: "100vh",
      background: "var(--bg-primary)",
      padding: "40px 20px",
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{
            background: "linear-gradient(135deg, #00e0ff, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "16px",
            fontFamily: "Poppins, sans-serif"
          }}>
            AI T-Shirt Designer
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "18px" }}>
            Generate custom designs for your t-shirts using AI
          </p>
        </header>

        {/* Main Content */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "32px" }}>
          {/* Left: Input & Generation */}
          <div style={{
            background: "var(--bg-card)",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <h2 style={{ color: "var(--text-primary)", marginBottom: "24px", fontSize: "24px" }}>
              Create Your Design
            </h2>

            <div style={{ marginBottom: "24px" }}>
              <label style={{ 
                display: "block", 
                color: "var(--text-secondary)", 
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500"
              }}>
                Describe your design
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., 'Abstract geometric patterns in blue and purple' or 'Vintage retro wave design'"
                style={{
                  width: "100%",
                  minHeight: "120px",
                  padding: "16px",
                  background: "rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  resize: "vertical"
                }}
              />
            </div>

            <button
              onClick={generateDesign}
              disabled={loading || !prompt.trim()}
              style={{
                width: "100%",
                padding: "16px",
                background: loading 
                  ? "rgba(0, 224, 255, 0.5)" 
                  : "linear-gradient(135deg, #00e0ff, #8b5cf6)",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                cursor: loading || !prompt.trim() ? "not-allowed" : "pointer",
                transition: "transform 0.2s",
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
              {loading ? "Generating Designs..." : "Generate Designs"}
            </button>

            {designs.length > 0 && (
              <div style={{ marginTop: "32px" }}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                  Generated Designs
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {designs.map((design) => (
                    <div
                      key={design.id}
                      onClick={() => handleDesignSelect(design)}
                      style={{
                        padding: "16px",
                        background: selectedDesign?.id === design.id 
                          ? "rgba(0, 224, 255, 0.2)" 
                          : "rgba(0, 0, 0, 0.3)",
                        border: selectedDesign?.id === design.id
                          ? "2px solid #00e0ff"
                          : "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                    >
                      <div style={{ 
                        fontSize: "32px", 
                        marginBottom: "8px",
                        textAlign: "center"
                      }}>
                        {design.preview.split(" ")[0]}
                      </div>
                      <div style={{ 
                        color: "var(--text-secondary)", 
                        fontSize: "12px",
                        textAlign: "center"
                      }}>
                        {design.style}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Preview */}
          <div style={{
            background: "var(--bg-card)",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <h2 style={{ color: "var(--text-primary)", marginBottom: "24px", fontSize: "24px" }}>
              Preview
            </h2>

            {/* T-Shirt Preview */}
            <div style={{
              background: "rgba(0, 0, 0, 0.3)",
              borderRadius: "16px",
              padding: "40px",
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px"
            }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "300px" }}>
                {/* T-Shirt SVG */}
                <svg viewBox="0 0 200 240" style={{ width: "100%", height: "auto" }}>
                  {/* Shirt body */}
                  <path
                    d="M 20 60 L 20 200 Q 20 220 40 220 L 160 220 Q 180 220 180 200 L 180 60 Q 180 40 160 40 L 140 40 L 140 20 Q 140 10 130 10 L 70 10 Q 60 10 60 20 L 60 40 L 40 40 Q 20 40 20 60 Z"
                    fill={shirtColor}
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="2"
                  />
                  {/* Design placeholder */}
                  {selectedDesign && (
                    <circle
                      cx={designPosition.x * 2}
                      cy={designPosition.y * 2.4}
                      r="30"
                      fill={selectedDesign.colors}
                      opacity="0.8"
                    />
                  )}
                  {!selectedDesign && (
                    <text
                      x="100"
                      y="120"
                      textAnchor="middle"
                      fill="rgba(255, 255, 255, 0.3)"
                      fontSize="14"
                    >
                      Select a design to preview
                    </text>
                  )}
                </svg>
              </div>
            </div>

            {/* Shirt Color Picker */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ 
                display: "block", 
                color: "var(--text-secondary)", 
                marginBottom: "12px",
                fontSize: "14px",
                fontWeight: "500"
              }}>
                Shirt Color
              </label>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {shirtColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setShirtColor(color.value)}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      background: color.value,
                      border: shirtColor === color.value 
                        ? "3px solid #00e0ff" 
                        : "2px solid rgba(255, 255, 255, 0.2)",
                      cursor: "pointer",
                      transition: "transform 0.2s"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Export Button */}
            {selectedDesign && (
              <button
                onClick={exportDesign}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "linear-gradient(135deg, #00e0ff, #8b5cf6)",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "transform 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                Export Print-Ready Design
              </button>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div style={{
          background: "var(--bg-card)",
          borderRadius: "16px",
          padding: "32px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          marginTop: "32px"
        }}>
          <h3 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
            How It Works
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            <div>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>1️⃣</div>
              <h4 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Enter Prompt</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Describe your design idea in plain English
              </p>
            </div>
            <div>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>2️⃣</div>
              <h4 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>AI Generates</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Our AI creates multiple design variations
              </p>
            </div>
            <div>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>3️⃣</div>
              <h4 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>Export & Print</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Get print-ready files and order directly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppMVP;


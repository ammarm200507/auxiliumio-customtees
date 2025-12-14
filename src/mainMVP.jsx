import React from "react";
import ReactDOM from "react-dom/client";
import AppMVP from "./AppMVP.jsx";
import "./App.css";

try {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <AppMVP />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Error rendering app:", error);
  document.getElementById("root").innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; color: white; background: #0a0d14; min-height: 100vh;">
      <h1>Error Loading Application</h1>
      <p>${error.message}</p>
      <pre style="background: #1a1a1a; padding: 10px; overflow: auto;">${error.stack}</pre>
    </div>
  `;
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./mvp.html",
  ],
  theme: {
    extend: {
      colors: {
        'auxilium-slate': '#1c1f26',
        'electric-blue': '#007bff',
        'neon-cyan': '#00e0ff',
        'purple': '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'Source Sans Pro', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


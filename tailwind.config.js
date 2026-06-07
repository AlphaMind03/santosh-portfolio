/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        dark: "#020617",
        panel: "#0f172a",
        electric: "#38bdf8",
        purpleGlow: "#8b5cf6",
        emeraldGlow: "#34d399",
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.25)",
        purple: "0 0 40px rgba(139, 92, 246, 0.25)",
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgdark: "#0a0f1a",
        neon: "#00f5ff",
        neon2: "#00ffa3"
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 245, 255, 0.35)",
        glow2: "0 0 25px rgba(0, 255, 163, 0.25)"
      }
    },
  },
  plugins: [],
}
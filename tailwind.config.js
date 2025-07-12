/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",
        secondary: "#16213e",
      },
    },
  },
  plugins: [],
};
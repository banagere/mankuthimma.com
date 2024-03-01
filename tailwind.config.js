/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "selector", // to enable dark mode, comment this line
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "gold-300": "#dad1bd",
      "gold-400": "#cbbda4",
      "gold-500": "#b8a383",
      "gold-600": "#978365",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

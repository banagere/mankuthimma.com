/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      "white-100": "#F8F8F8",
      black: "#000000",
      "black-100": "#202022",
      "gold-0": "#f5f2e9",
      "gold-100": "#eeeadd",
      "gold-200": "#e5dfd0",
      "gold-300": "#dad1bd",
      "gold-400": "#cbbda4",
      "gold-500": "#b8a383",
      "gold-600": "#978365",
      "gold-700": "#8c795d",
      "gold-800": "#776750",
      "gray-0": "#F3F3F3",
      "gray-100": "#E2E2E2",
      "gray-200": "#DBDBDB",
      "gray-300": "#C7C7C7",
      "gray-400": "#8F8F8F",
      "gray-500": "#6F6F6F",
      "gray-600": "#181818",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

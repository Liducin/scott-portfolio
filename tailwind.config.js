/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <-- This enables dark mode using a CSS class
  theme: {
    extend: {
      // Optional: extend color palette, fonts, etc.
    },
  },
  plugins: [],
};

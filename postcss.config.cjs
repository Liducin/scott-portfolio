module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // new way to load Tailwind
    require('autoprefixer'),
  ],
}

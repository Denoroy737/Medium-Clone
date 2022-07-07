/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '455px',
      },
      fontFamily: {
        'Lalarona': 'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
        'title': 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
        'Domino': 'medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      },
      width: {
        '54': '213px',
        '94': '376px'
      }
    },
  },
  plugins: [],
}

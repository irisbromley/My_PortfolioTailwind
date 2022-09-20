/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'body': '#17171f',
        'selected-text': '#a3a3ff',
        'theme': '#3f3fff',
        'nav': '#404053',
        'secondary': '#9191a4',
        'badge': '#3f3f51',
        'input-order': '#565666',
        'input': '#2a2a35'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
    plugins: [],
  },
}

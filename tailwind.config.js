/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      colors: {
        'green': '#20503D',
        'red': '#BC0606',
        'tan-light': '#F6F5F3',
        'tan-mid': '#D3CFC3',
        'tan-dark': '#A49E8C'
      },
      fontFamily: {
        'display': ['Bebas Neue', 'Arial', 'sans-serif'],
        'script': ['Tilda', 'sans-serif'],
        'hagerman': ['Hagerman', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

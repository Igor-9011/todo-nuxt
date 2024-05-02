/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './pages/**/*.{html,js}',
      './components/**/*.{html,js}',
    ],
    theme: {
        screens: {
          'sm': {'max': '640px'},
          'md': {'max': '768px'},
          'lg': {'max': '1024px'},
          'xl': {'max': '1280px'},
          '2xl': {'max': '1536px'},
        }
      }
  }
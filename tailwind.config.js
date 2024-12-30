/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"M PLUS 1"', 'sans-serif'],
      },
      colors: { 
        primary: '#2199EA',  // este es el azul
        secondary: 'rgba(15, 95, 150, 0.6)', // el azul oscuro
        tertiary: '#ADB2B1',  // el gris
        Quaternary : '#292D32', // el negro 
      },
    },
  },
  plugins: [],
}

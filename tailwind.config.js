/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        staatliches: ['Staatliches'],
      },
      keyframes: {
        flap: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(50deg)' },
        },
      },
      animation: {
        flap: 'flap 2s ease-in-out alternate infinite',
      }
    },
  },
  plugins: [],
}


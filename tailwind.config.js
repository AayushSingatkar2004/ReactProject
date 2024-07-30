/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-none': {
          'scrollbar-width': 'none',
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

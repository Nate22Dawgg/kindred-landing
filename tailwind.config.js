/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'waves': 
"url('https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/img/shapes/pattern-lines.svg')",
      },
      animation: {
        grow: 'grow 5s infinite alternate ease-in-out',
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}


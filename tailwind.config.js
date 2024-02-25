/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'title': '"IBM Plex Sans Condensed", sans-serif',
      'sub-title': '"Inconsolata", monospace',
    },
    extend: {
      animation: {
        'hamburger': 'hamburger 0.3s ease-out forwards',
        'hamburger-close': 'hamburger-close 0.3s ease-out forwards'
      },
      colors: {
        'heading': '#C6CFB7',
        'normal': '#FDF0D5',
        'smoky': '#F5F5F5',
      },
      dropShadow: {
        'title': '0 0px 1px black'
      },
      backgroundImage:{
        'radial': 'radial-gradient(rgb(68, 79, 111) 30%, #384261)'
      },
      keyframes:{
        'hamburger': {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-100%)' },
        },
        'hamburger-close': {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};


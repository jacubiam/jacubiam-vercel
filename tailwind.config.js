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
        'hamburger-close': 'hamburger-close 0.3s ease-out forwards',
        'language': 'language 0.3s ease-out forwards',
        'language-close': 'language-close 0.3s ease-out forwards'
      },
      colors: {
        'heading': '#C6CFB7',
        'normal': '#FDF0D5',
        'smoky': '#F5F5F5',
      },
      dropShadow: {
        'title': '0 0px 1px black',
        'clear': '0 0 1px transparent'
      },
      backgroundImage:{
        'radial': 'radial-gradient(rgb(68, 79, 111) 30%, #384261)'
      },
      fontSize: {
        '4.5xl':'40px',
      },
      keyframes:{
        'hamburger': {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0%)' },
        },
        'hamburger-close': {
          '0%': { transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(100%)' },
        },
        'language':{
          '0%': { transform: 'translateY(0%)'},
          '100%': { transform: 'translateY(100%)'},
        },
        'language-close':{
          '0%': { transform: 'translateY(100%)'},
          '100%': { transform: 'translateY(0%)'},
        }
      },
    },
  },
  plugins: [],
};


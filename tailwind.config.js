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
      colors: {
        'heading': '#C6CFB7',
        'normal': '#FDF0D5',
      },
      dropShadow: {
        'title': '0 0px 1px black'
      },
    },
  },
  plugins: [],
};


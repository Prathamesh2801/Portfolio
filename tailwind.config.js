/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'jersey': ['"Jersey 15"', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          green: '#00FF00',
          'green-dark': '#00CC00',
          'green-light': '#33FF33',
        },
        background: '#FFFFFF',
        text: {
          primary: '#000000',
          secondary: '#666666',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

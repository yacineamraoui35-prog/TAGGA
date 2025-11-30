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
          green: '#10B981', // Vert émeraude professionnel (style Uber)
          'green-dark': '#059669',
          'green-light': '#34D399',
          'green-lighter': '#D1FAE5',
        },
        background: '#FFFFFF',
        text: {
          primary: '#000000',
          secondary: '#666666',
          light: '#9CA3AF',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

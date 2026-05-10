/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3eeff', 100: '#e6dcff', 200: '#c9b0ff', 300: '#a984ff',
          400: '#8b5cff', 500: '#7c3aed', 600: '#6d28d9', 700: '#5b21b6',
          800: '#4c1d95', 900: '#2e1065',
        },
        navy: {
          900: '#070a18',
          800: '#0b0f23',
          700: '#10162e',
          600: '#161d3a',
          500: '#1d2547',
        }
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
        'brand-soft': 'linear-gradient(180deg, #f5f0ff 0%, #ffffff 100%)',
      }
    },
  },
  plugins: [],
}

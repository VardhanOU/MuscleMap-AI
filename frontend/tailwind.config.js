/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DC2626',
        dark: '#1A1A1A',
        card: '#2A2A2A',
        border: '#3A3A3A',
        gray: {
          400: '#B0B0B0',
          500: '#7A7A7A',
          600: '#4A4A4A',
          700: '#3A3A3A',
          800: '#2A2A2A'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      },
      lineHeight: {
        body: '1.6'
      }
    }
  },
  plugins: []
}

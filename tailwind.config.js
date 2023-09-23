/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#903AFF',
        secondary: '#150E28',
        tertiary: '#903AFF',
        mirage: '#D434FE',
        subby: '#18112b',
      },
    },
    fontFamily: {
      Monts: ['Montserrat, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  plugins: [],
};

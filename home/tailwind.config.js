module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['Cardo', 'serif'],
    },
    extend: {
      colors: {
        "blue-cookie": { DEFAULT: '#4478A6' },
        "yellow-cookie": { DEFAULT: '#F2CD5C' },
        "white-cookie": { DEFAULT: '#F2EEEB' },
        "brown-cookie": { DEFAULT: '#D9967E' },
        "red-cookie": { DEFAULT: '#F24444' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Abril Fatface', 'serif'],
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

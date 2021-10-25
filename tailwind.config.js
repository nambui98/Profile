module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    boxShadow: {
      DEFAULT: '13px 13px 20px #cbced1, -13px -13px 20px #fff',
    },
    letterSpacing: {
      max: '3px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

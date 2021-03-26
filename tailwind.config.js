module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},

    maxWidth: {
      "8xl": "88rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

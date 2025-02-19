/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", //for faster runtime
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ['"Roboto"', '"sans-serif"'], //need to add a new font
    },
  },
  plugins: [],
};

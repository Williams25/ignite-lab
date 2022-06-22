/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif"
      },
      colors: {
        gray: {
          100: "#e1e1e6",
          200: "#c4c4cc",
          300: "#8d8d99",
          500: "#323238",
          600: "#28282e",
          700: "#121214",
          900: "#09090a"
        },
        red: {
          500: "#f75a68"
        },
        orange: {
          500: "#fba94c"
        },
        blue: {
          500: "#81d8f7"
        },
        green: {
          300: "#00b37e",
          500: "#00875f",
          700: "#015f43"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-scrollbar")]
};

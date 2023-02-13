/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#FFF",
      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7C7C8A",
        100: "#E1E1E6",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, Arial, sans-serif",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#FFF",
      borderT: "rgba(255, 255, 255, 0.05)",
      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7C7C8A",
        100: "#E1E1E6",
      },
      yellow: {
        800: "#C5FF21",
        300: "#CBFF37",
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

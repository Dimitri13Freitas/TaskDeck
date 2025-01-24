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
        700: "#19191B",
        400: "#7C7C8A",
        100: "#E1E1E6",
      },
      yellow: {
        800: "#C5FF21",
        300: "#CBFF37",
      },
      red: {
        900: "#7f1d1d",
        800: "#991b1b",
        700: "#b91c1c",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, Arial, sans-serif",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

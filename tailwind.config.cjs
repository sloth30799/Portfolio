/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  daisyui: {
    themes: ["wireframe"],
  },
  theme: {
    extend: {},
    colors: {
      grey: "#f5f5f5",
      black: "#000000",
      white: "#FFFFFF",
      darkBlue: "#1d2445",
    },
    screens: {
      sm: "480px",
      md: "600px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [require("daisyui")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {

      fontFamily: {
        title: "Sigmar",
        body: "VT323",
      },
      backgroundImage: {
        skillCard: "url('./src/assets/svg/code-card.svg')",
      },
      backgroundSize: {
        "40px": "40px 40px",
      },
      dropShadow: {
        "3xl": "10px 10px 0 rgba(0,0,0,0.72)",
      },
  
      boxShadow: {
        black: "10px 10px 0px 0px rgba(0,0,0,1)",
        btn: "5px 5px 0px 0px rgba(0,0,0,1)",
        blue: "10px 10px 0px 0px #1d2445",
        card: "-10px 10px 0px 0px rgba(0,0,0,1)"
      },
    },
    colors: {
      grey: "#444444",
      black: "#111111",
      white: "#F8F8F8",
      darkBlue: "#1d2445",
      deepPurple: "#311b92",
    },
    screens: {
      sm: "480px",
      md: "600px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
    themes: [
      {
        lofi: {
          ...require("daisyui/src/colors/themes")["[data-theme=lofi]"],
          secondary: "#1d2445",
        },
      },
    ],
  },
}

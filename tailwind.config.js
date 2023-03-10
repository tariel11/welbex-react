module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E4E5EA",
        secondary: "#656566",
      },
      backgroundImage: (theme) => ({
        "heading":
          "linear-gradient(90deg, #FCB045, #FF3F78)",
        "red-ball": 
          ` 
            background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%);
            box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
            backdrop-filter: blur(2px);
          `,
        "small-red-ball":
          `
            background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.248) 59.67%, rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
            box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
            filter: blur(2.5px);
            backdrop-filter: blur(2px);
          `,
        "purple-ball": 
          ` 
            background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
            box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
            filter: blur(5px);
            backdrop-filter: blur(2px);
          `,
        "purple-light": 
          ` 
            background: #833AB4;
            opacity: 0.5;
            filter: blur(196px);
          `,
        "red-light": 
          ` 
            background: #961A1A;
            opacity: 0.5;
            filter: blur(196px)
          `,
      }),
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
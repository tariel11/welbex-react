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
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(25vw) translateY(10vh)' },
          '25%': { transform: 'translateX(30vw) translateY(40vh)' },
          '50%': { transform: 'translateX(60vw) translateY(70vh)' },
          '100%': { transform: 'translateX(25vw) translateY(10vh)' },
        },
        wiggle2: {
          '0%': { transform: 'translateX(80vw) translateY(10vh)' },
          '25%': { transform: 'translateX(70vw) translateY(20vh)' },
          '50%': { transform: 'translateX(90vw) translateY(50vh)' },
          '100%': { transform: 'translateX(80vw) translateY(10vh)' },
        },
        wiggle3: {
          '0%': { transform: 'translateX(80vw) translateY(90vh) ' },
          '25%': { transform: 'translateX(25vw) translateY(50vh)' },
          '50%': { transform: 'translateX(50vw) ranslateY(70vh)' },
          '100%': { transform: 'translateX(80vw) translateY(90vh) ' },
        }
      },
      backgroundImage: (theme) => ({
        "heading":
          "linear-gradient(90deg, #FCB045, #FF3F78)",
        "linear":
          "url('./img/linear.svg')",
        "red-ball": 
          "radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%)",
        "small-red-ball":
          "radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.248) 59.67%, rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%)",
        "purple-ball": 
          "radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%)",
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
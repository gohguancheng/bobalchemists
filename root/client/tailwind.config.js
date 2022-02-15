module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Bitter"', "sans-serif"],
        normal: ['"Quicksand"', "sans-serif"],
      },
      colors: {
        purple: "#8785A2",
        lighterpink: "#FFE2E2",
        lightpink: "#FFC7C7",
        lightgray: "#F6F6F6",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

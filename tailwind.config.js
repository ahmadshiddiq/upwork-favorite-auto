const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
        transparent: "transparent",
        brand: colors.yellow[400],
        text: colors.gray[800],
        cardBg: colors.gray[100],
        cardBgHover: colors.gray[50],
      },
      fontFamily: {
        sans: [
          "Gilroy",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      gridTemplateColumns: {
        "car-page": "auto auto 1fr auto",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  xwind: {
    mode: "objectstyles",
    warningCache: true,
  },
};

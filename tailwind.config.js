const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    "custom-blue": {
      700: "#2c7be5",
    },
  },
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        main: "var(--color-bg-main)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};

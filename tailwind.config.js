module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      full: { max: "320px" },
      xs: "0px",
      // => @media (min-width: 320px) { ... }
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    maxWidth: {
      screen: "100%",
    },
    colors: {
      turk: "var(--c-turk)",
      black: "var(--c-black)",
      dark: "var(--c-dark)",
      dark80: "var(--c-dark-80)",
      dark60: "var(--c-dark-60)",
      dark40: "var(--c-dark-40)",
      dark20: "var(--c-dark-20)",
      dark10: "var(--c-dark-10)",
      dark05: "var(--c-dark-05)",
      light: "var(--c-white)",
      light70: "var(--c-white-70)",
      light50: "var(--c-white-50)",
      light30: "var(--c-white-30)",
      light20: "var(--c-white-20)",
      light10: "var(--c-white-10)",
      light05: "var(--c-white-05)",
      red: "var(--c-red)",
      trans: "transparent",
    },
    spacing: {},
    zIndex: {},
    fontFamily: {},
    fontSize: {},
    letterSpacing: {},
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

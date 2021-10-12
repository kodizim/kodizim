module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      full: { max: "320px" },
      xs: "0px",
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
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      shadow: "var(--shadow-color)",
      danger: "var(--danger-color)",
      warning: "var(--warning-color)",
      success: "var(--success-color)",
      info: "var(--info-color)",
      light: "var(--light-color)",
      gray: "var(--gray-color)",
      discord: "var(--discord-color)",
    },
    spacing: {
      default: "0.375rem 0.75rem",
      small: "0.19rem 0.375rem",
      large: "0.75rem 1.5rem",
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
    },
    zIndex: {},
    fontFamily: {},
    fontSize: {},
    letterSpacing: {},
  },

  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [],
};

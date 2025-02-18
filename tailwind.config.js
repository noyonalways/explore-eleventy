/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,md,njk,ejs,pug}"],
  darkMode: "media",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "var(--tw-color-primary)",
        background: "var(--tw-color-background)",
        text: "var(--tw-color-text)",
      },
      fontFamily: {
        sans: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--ifm-color-primary)",
          dark: "var(--ifm-color-primary-dark)",
          darker: "var(--ifm-color-primary-darker)",
          darkest: "var(--ifm-color-primary-darkest)",
          light: "var(--ifm-color-primary-light)",
          lighter: "var(--ifm-color-primary-lighter)",
          lightest: "var(--ifm-color-primary-lightest)",
        },
      },
    },
  },
  plugins: [],
};

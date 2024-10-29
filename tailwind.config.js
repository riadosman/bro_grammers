/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#1c163c",
        light_text: "#4E92F3",
        gray_text: "#78797C",
        main_blue: "#0b63e5",
        dark_gray: "#3c3e3f",
        primary_blue: "#5093f3",
        light_primary: "#5C99F0",
        border_color: "#EAE9EE",
        dark_bg: "#131517",
      },
    },
  },
  plugins: [], // Move plugins array here
};

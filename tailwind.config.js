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
        dark_text: "#061C3D",
        dark_bg: "#131517",
        dark_blue: "#008AFF",
        main_blue: "#0b63e5",
        light_text: "#4E92F3",
        light_primary: "#5C99F0",
        primary_blue: "#5093f3",
        dark_gray: "#3c3e3f",
        hero_text: "#475467",
        gray_text: "#78797C",
        border_color: "#EAE9EE",
        reload_color: "#F2F4F6",
      },
    },
  },
  plugins: [], // Move plugins array here
};

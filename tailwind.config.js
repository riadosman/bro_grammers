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
        main_blue: "#0b63e5",
        dark_gray: "#3c3e3f",
        primary_blue: "#5093f3",
      },
    },
  },
  plugins: [],
};

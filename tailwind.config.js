/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorBlue: "#1A0DA8",
        colorDark: "#1F1F1F",
        ColortextSummary: "#4D5156",
        colorHeader: "#202124",
        colorTextNav: "#70757A",
        bgCard: "#e9f2f7",
      },
      fontFamily: {
        GoogleSans: ["Google Sans", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

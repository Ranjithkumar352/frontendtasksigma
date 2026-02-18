/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#B9FF66",
        brandDark: "#191A23",
        brandGray: "#F3F3F3",
      },
    },
  },
  plugins: [],
};

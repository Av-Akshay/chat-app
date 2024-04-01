/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fraction: "0.8fr 1.2fr",
      },
      borderRadius: {
        message: "0px 10px 10px 10px",
      },
    },
  },
  plugins: [],
};

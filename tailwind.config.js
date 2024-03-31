/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fraction: "0.6fr 1.4fr",
      },
      borderRadius: {
        message: "0px 10px 10px 10px",
      },
    },
  },
  plugins: [],
};

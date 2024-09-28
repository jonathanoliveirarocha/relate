/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#919096",
        secondary: "#888888",
        dark: "#111111",
        darker: "#1a1a1a",
        subtle: "#27272a80",
      },
    },
  },
  plugins: [],
};

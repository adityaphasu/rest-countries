/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 52%)",
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-light-gray": "hsl(0, 0%, 97%)",
        "very-dark-blue1": "hsl(200, 15%, 8%)",
        "very-dark-blue2": "hsl(207, 26%, 17%)",
      },
    },
  },
  plugins: [],
};

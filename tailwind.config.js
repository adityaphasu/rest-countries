/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-light-gray": "hsl(0, 0%, 97%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "very-dark-blue1": "hsl(200, 15%, 8%)",
        "very-dark-blue2": "(207, 26%, 17%)",
        "dakr-blue": "hsl(209, 23%, 22%)",
      },
    },
  },
  plugins: [],
};

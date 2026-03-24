/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          dark: "#0B1120",
          blue: "#1E3A8A",
          accent: "#38BDF8"
        }
      }
    }
  },
  plugins: []
};

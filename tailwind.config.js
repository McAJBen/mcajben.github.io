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
        primary: {
          100: "#A06080",
          DEFAULT: "#800040",
          // DEFAULT: "#4D0202", // real icon color
          600: "#600030",
          800: "#420c27",
        },
        highlight: "#A06080",
        secondary: {
          300: "#0179e2",
          DEFAULT: "#0F4D82", // real icon color
        },
        link: "#0179e2",
        error: "#ce6262",
        warning: "#bfbb54",
        success: "#63b159",
      },
      animation: {
        "bob-spin": "bob-spin infinite 5s linear",
      },
      keyframes: {
        "bob-spin": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(30deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};

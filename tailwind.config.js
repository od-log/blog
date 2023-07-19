/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "left-bounce": "left-bounce 0.5s linear infinite alternate",
        "right-bounce": "right-bounce 0.5s linear infinite alternate",
      },
      keyframes: {
        "left-bounce": {
          "0%": { "margin-left": "0px" },
          "100%": { "margin-left": "10px" },
        },
        "right-bounce": {
          "0%": { "margin-left": "0px" },
          "100%": { "margin-left": "10px" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

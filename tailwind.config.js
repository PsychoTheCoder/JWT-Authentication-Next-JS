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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#18dcf2",

          secondary: "#fff2cc",

          accent: "#d2f296",

          neutral: "#20282c",

          "base-100": "#ffffff",

          info: "#93bcdc",

          success: "#5ae2b5",

          warning: "#a98b04",

          error: "#e33538",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

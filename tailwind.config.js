/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1000px",
    },
    extend: {
      colors: {
        "light-grey": "#5C5C5C",
        "dark-grey": "#242526",
        "light-blue": "#41B6E6",
        "dark-blue": "#0079AA",
        "light-pink": "#F884D9",
        "dark-pink": "#DB3EB1",
      },
      padding: {},
      fontSize: {
        h1: "3.6rem",
        h2: "3rem",
        h3: "2.8rem",
        h4: "2.4rem",
        h5: "2.2rem",
        h6: "2rem",
        label: "1.4rem",
      },
    },
  },
  plugins: [],
};

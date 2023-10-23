module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          nameface: "#ff0054"
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
  };
  
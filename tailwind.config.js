module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          "color-primary-text":"#32292f",
          "color-primary-background":"#d1e3dd",
          "color-primary-viceversa-text":"#d1e3dd",
          "color-primary-viceversa-background":"#32292f",
          "color-secondary-text":"#575366",
          "color-secondary-background":"#5762D5",
          "color-secondary-viceversa-text":"#5762D5",
          "color-secondary-viceversa-background":"#5762D5",
          "color-exception-text":"#A94D4D",
          "color-exception-background":"#32292F",
        },
      },
    },
  },
  plugins: [],
}

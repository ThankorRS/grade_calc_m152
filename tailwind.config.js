module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          // "white text on dark gray background"
          "color-primary-text":"#32292f",
          "color-primary-background":"#d1e3dd",
          // "background text on dark gray white"
          "color-primary-viceversa-text":"#d1e3dd",
          "color-primary-viceversa-background":"#32292f",
          // "middle gray text on light blue background"
          "color-secondary-text":"#575366",
          "color-secondary-background":"#5762D5",
          // "blue background text on middle gray background"
          "color-secondary-viceversa-text":"#5762D5",
          "color-secondary-viceversa-background":"#5762D5",
          // "exception: light dark text on dark gray background"
          "color-exception-text":"#A94D4D",
          "color-exception-background":"#32292F",
        },
      },
    },
  },
  plugins: [],
}

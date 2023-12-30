/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Press Start 2P"'],
        subtitle: ['"Nixie One"'],
        main: ['"Roboto"'],
      },
    },
  },
  plugins: [],
};

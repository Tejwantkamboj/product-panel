/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.bg-blue-500-important': {
        backgroundColor: '#000 ',
        color: "white"
      },
      '.bg-black-important': {
        backgroundColor: '#000 !important',
        color: "white"
      }
      // Add more utilities as needed
    }, ['responsive', 'hover']);
  },],
}
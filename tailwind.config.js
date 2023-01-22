/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-20px)' },
          '100%': { transform: 'translatey(0px)' },
        },
        marquee: {
          '0%': { transform: 'translateY(0.5%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        animation: {
          float: 'float 4s ease-in-out infinite',
          marquee: 'marquee 3s linear infinite',
        }
      }
    },
  },
  plugins: [],
}

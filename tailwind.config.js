/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          coffee: {
            light: '#D4A373', // Màu nâu nhạt
            DEFAULT: '#8B5523', // Màu nâu trung bình
            dark: '#5C4033', // Màu nâu đậm
          },
        },
      },
    },
    plugins: [],
  };
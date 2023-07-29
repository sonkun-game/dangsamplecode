/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      gap: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        // Thêm các giá trị khoảng cách tùy chỉnh khác tại đây
      },
    },
    color: {
      'custom-color': '#2c3e50'
    }

  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}

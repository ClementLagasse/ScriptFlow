/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
        colors: {
          'custom-red': '#DD1B60',
        },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to template files
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors:{
        'eerie-black': '#252525',
        'persian-red': '#CC2936',
        'slate-gray': '#6B818C',
        'peach': '#F1BF98',
        'lavender-blush': '#EEE5E9',
        'majorelle-blue': '#574AE2'
      }
    }
  },
  plugins: [],
}


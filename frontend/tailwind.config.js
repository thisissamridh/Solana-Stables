/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
              '.scrollbar-hide': {
                /* Firefox */
                'scrollbar-width': 'none',
      
                /* Safari and Chrome */
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              },
            }
      
            addUtilities(newUtilities)
          }

    ],
}

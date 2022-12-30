/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        '30':'7.625rem',
        '45':'11.563rem',
        '50':'10.875rem',
        '76':'19rem',
        '95':'23.75rem',
      },
      height: {
        '13':'3.125rem',
        '37':'9.188rem',
        '45':'11.25rem',
        '63':'15.688rem',
        '78':'19.438rem',
        '86':'21.375rem',
      },
      fontSize: {
        '10':'0.625rem',
      },
      padding: {
        '13':'3.125rem',
        '77':'19.438rem',
        '85':'21,375rem'
      },
      backgroundImage: {
        'search-icon': "url('/src/assets/pesquisa.svg')",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      colors: {
        'dark-blue': '#0B1641',
        'strong-pink': '#C70160',
        'dark-cyan':"#16857B",
        'disable':'#272D44'
      },
      boxShadow: {
        '4x4': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'xl':'1250px'
      }
    },
  },
  plugins: [],
}

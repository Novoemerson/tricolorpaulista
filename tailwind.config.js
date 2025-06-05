/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Cores oficiais do SPFC
        'spfc': {
          'red': '#C10016',       // Vermelho principal
          'dark-red': '#8A0010',  // Vermelho escuro
          'light-red': '#FF1A3A', // Vermelho claro
          'black': '#000000',     // Preto
          'white': '#FFFFFF',    // Branco
          'gray': '#F5F5F5'      // Cinza de fundo
        },
      },
      fontFamily: {
        // Fontes que combinam com o estilo do site
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
        'heading': ['"Yanone Kaffeesatz"', 'sans-serif'], // Fonte para títulos
      },
      backgroundImage: {
        'gradient-spfc': 'linear-gradient(135deg, #C10016 0%, #8A0010 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}


module.exports = {
  theme: {
    extend: {
      colors: {
        'spfc': {
          'red': '#C10016',
          'dark-red': '#8A0010',
          'light-red': '#FF1A3A',
          'gold': '#FFD700',
        },
      },
      boxShadow: {
        'spfc': '0 4px 6px -1px rgba(193, 0, 22, 0.2)',
      }
    }
  }
}

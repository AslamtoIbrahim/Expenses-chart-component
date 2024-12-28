/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'soft-red': 'hsl(10, 79%, 65%)',
        'very-soft-red': 'hsl(10deg 93.95% 76.43%)',
        'cyan': 'hsl(186, 34%, 60%)',
        'soft-cyan': '#abecf3',
        'dark-brown': 'hsl(25, 47%, 15%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        'cream': ' hsl(27, 66%, 92%)',
        'very-pale-orange': 'hsl(33, 100%, 98%)',
      },
      fontFamily:{
        'dmns': ['DM Sans', 'serif'],
        'pop' : ['Poppins', 'serif'],
      }
    },
  },
  plugins: [],
}


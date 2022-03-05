module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontSize: {
      xs: ['.6875rem', { letterSpacing: '.216rem', lineHeight: '.9375rem' }],
      sm: ['.8125rem', { letterSpacing: '.255rem', lineHeight: '1.11rem' }],
      md: ['1.5rem', { letterSpacing: '.01625rem', lineHeight: '2.048rem' }],
      lg: ['1.75rem', { letterSpacing: '.01875rem', lineHeight: '2.39rem' }],
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'Ligh-Cyan': 'hsl(193, 38%, 86%)',
        'Neon-Green': 'hsl(150, 100%, 66%)',
        'Grayish-Blue': 'hsl(217, 19%, 38%)',
        'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
        'Dark-Blue': 'hsl(218, 23%, 16%)',
      },
      boxShadow: {
        main: '30px 50px 80px rgba(0, 0, 0, 0.100202)',
        glowing: '0px 0px 40px',
      },
    },
  },
  plugins: [],
};

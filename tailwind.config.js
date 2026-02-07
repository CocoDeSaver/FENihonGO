export default {
  theme: {
    extend: {
      colors: {
        primary: '#E81509',
        primaryDark: '#320001',
        soft: '#FFF5F4',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatWiggle: 'floatWiggle 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatWiggle: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
      },
    },
  },
}


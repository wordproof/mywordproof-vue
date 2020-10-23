module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      'black': '#252525',
      'white': '#FFFFFF',
      'blue': '#2000FF',
      'pink': '#FF1F7C',
      'teal': '#00E8C6',
      'yellow': '#FFA713',
      'purple': '#783CDC',
      'gray': {
        '200': '#F5F7FA',
        '400': '#E3E2E6',
        '600': '#AEA9AB',
      },
    },
    fontSize: {
      'xs': '.75rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
    },
    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '6': '24px',
      '8': '32px',
      '10': '40px',
      '20': '80px',
    },
    extend: {
      colors: {
        'light-blue': '#E2E9F4',
        'sand': '#FFEBCA',
      },
      opacity: {
        '30': '.3',
      }
    }
  },
  variants: {},
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '92%',

          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '960px',
          },
        }
      })
    }
  ]
};

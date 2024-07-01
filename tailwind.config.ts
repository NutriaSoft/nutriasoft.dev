import tailwindPlugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{astro,html}'],

  safelist: ['btn', 'btn-primary', 'btn-compact', 'btn-large', 'border-green-500'],

  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },

    extend: {
      colors: {
        primary: '#D5FA51',

        white: '#FFF',
        black: '#1F1F1F',
        transparent: 'transparent'
      }
    }
  },

  plugins: [
    tailwindPlugin(function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          'font-weight': '500',
          color: theme('colors.white'),
          backgroundColor: theme('colors.black'),
          'line-height': theme('lineHeight.tight'),
          'font-family': theme('fontFamily.inter')
        },
        '.btn-primary': {
          'padding-top': theme('spacing.4'),
          'padding-left': theme('spacing.5'),
          'padding-right': theme('spacing.5'),
          'padding-bottom': theme('spacing.4'),
          'border-radius': theme('borderRadius.2xl')
        },
        '.btn-compact': {
          'padding-top': theme('spacing.3'),
          'padding-left': theme('spacing.3'),
          'padding-right': theme('spacing.3'),
          'padding-bottom': theme('spacing.3'),
          'border-radius': theme('borderRadius.lg')
        },
        '.btn-large': {
          'padding-top': theme('spacing.2'),
          'padding-left': theme('spacing.5'),
          'padding-right': theme('spacing.5'),
          'padding-bottom': theme('spacing.2'),
          'border-radius': theme('borderRadius.lg')
        }
      })
    })
  ]
}

export default config

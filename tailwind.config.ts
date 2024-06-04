import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{astro,html}'],

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

    colors: {
      primary: '#D5FA51',

      gray: {
        100: '#363B42',
        200: '#2E2E2F'
      },

      white: '#FFF',
      black: '#1F1F1F',
      transparent: 'transparent'
    },

    extend: {}
  },

  plugins: []
}

export default config

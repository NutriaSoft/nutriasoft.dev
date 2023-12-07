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

    extend: {}
  },

  plugins: []
}

export default config

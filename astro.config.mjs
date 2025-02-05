import icon from 'astro-icon'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import { typings } from './scripts/integrations'

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), typings()],
  output: 'server',
  adapter: vercel(),
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()],
  }
})

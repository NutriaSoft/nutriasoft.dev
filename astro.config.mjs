import icon from 'astro-icon'
import vercel from '@astrojs/vercel'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import { typings } from './scripts/integrations'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), typings()],
  output: 'server',
  adapter: vercel(),
  build: {
    assets: 'assets'
  }
})

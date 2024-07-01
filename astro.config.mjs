import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import { typings } from './scripts/integrations'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), typings()],
  build: {
    assets: 'assets'
  }
})

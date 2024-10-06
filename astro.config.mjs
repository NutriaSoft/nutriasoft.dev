import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import vercelServerless from '@astrojs/vercel/serverless'

import { typings } from './scripts/integrations'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), typings()],
  output: 'server',
  adapter: vercelServerless(),
  build: {
    assets: 'assets'
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es', 'fr', 'pt-BR']
  }
})

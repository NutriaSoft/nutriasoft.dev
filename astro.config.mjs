import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en']
  },
  integrations: [
    tailwind({
      nesting: true,
      applyBaseStyles: true
    }),
    icon()
  ],
  build: {
    assets: 'assets'
  }
})

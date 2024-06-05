import { generateIconTypes } from './generate/types'

/**
 * @type {() => import('astro').AstroIntegration}
 */
export const typings = () => ({
  name: 'typings',
  hooks: {
    'astro:config:setup': ({ logger }) => {
      generateIconTypes(logger)
    }
  }
})

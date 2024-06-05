import { join } from 'node:path'
import { readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'

/**
 * @param {import('astro').AstroIntegrationLogger} logger
 */
export function generateIconTypes (logger) {
  const iconsDir = join(process.cwd(), 'src/icons')
  const files = readdirSync(iconsDir)
  const svgFiles = files.filter((file) => file.endsWith('.svg'))

  const iconNames = svgFiles.map((file) => file.replace('.svg', ''))

  const typeDefinitions = `declare module 'virtual:icon' {
  export type IconName =
    | ${iconNames.map((name) => `'${name}'`).join('\n    | ')}
}
`

  const outputDir = join(process.cwd(), 'src/typings')
  const outputFile = join(outputDir, 'icon.d.ts')

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }

  writeFileSync(outputFile, typeDefinitions)
  logger.info('Icon types generated')
}

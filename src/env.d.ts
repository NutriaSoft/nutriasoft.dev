/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_URL: string
  readonly ORIGIN_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

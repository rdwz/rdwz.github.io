import { defineConfig } from 'astro/config'

import compress from "astro-compress"
import compressor from "astro-compressor"
import sitemap from "astro-sitemap"
import robotsTxt from "astro-robots-txt"

import { SITE } from "./src/config"

export default defineConfig({
  site: "https://" + SITE.URL,
  integrations: [
    compress(),
    compressor(),
    sitemap(),
    robotsTxt()
  ]
})
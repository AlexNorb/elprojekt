// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 1. Reliable check: Are we running the "build" command?
const isProd = process.argv.includes('build');

export default defineConfig({
  site: isProd ? 'https://elprojekt.nu' : 'http://localhost:4321',
  base: undefined,

  redirects: {
    '/betyg': {
      status: 301,
      destination: 'https://g.page/r/CZaiX2q-GJRhEBM/review'
    }
  },

  // 2. We explicitly tell TypeScript the result is one of the allowed strings
  trailingSlash: isProd ? /** @type {'always'} */ ('always') : /** @type {'ignore'} */ ('ignore'),

  image: {
    domains: ['images.unsplash.com'],
  },

  prefetch: true,

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sv',
        locales: { sv: 'sv-SE' }
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});

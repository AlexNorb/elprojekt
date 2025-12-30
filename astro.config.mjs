// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 1. Reliable check: Are we running the "build" command?
const isProd = process.argv.includes('build');

export default defineConfig({
  site: isProd ? 'https://AlexNorb.github.io' : undefined,
  base: isProd ? '/elprojekt/' : undefined,

  // 2. We explicitly tell TypeScript the result is one of the allowed strings
  trailingSlash: isProd ? /** @type {'always'} */ ('always') : /** @type {'ignore'} */ ('ignore'),

  vite: {
    plugins: [tailwindcss()]
  }
});
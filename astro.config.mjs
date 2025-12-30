// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Check if we are in production or running the build command
const isProd = process.env.NODE_ENV === 'production' || process.argv.includes('build');

export default defineConfig({
  site: isProd ? 'https://AlexNorb.github.io' : undefined,
  base: isProd ? '/elprojekt/' : undefined,
  trailingSlash: isProd ? 'always' : 'ignore',
  vite: {
    plugins: [tailwindcss()]
  }
});
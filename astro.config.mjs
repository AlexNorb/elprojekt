// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isProd ? 'https://AlexNorb.github.io' : undefined,
  base: isProd ? '/elprojekt/' : undefined,
  trailingSlash: isProd ? 'always' : 'ignore',
  vite: {
    plugins: [tailwindcss()]
  }
});
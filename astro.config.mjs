import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fec-cserl.github.io',
  base: '',
  integrations: [
    tailwind()
  ]
});

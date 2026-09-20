// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://morta.vercel.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    define: {
      // Fresh last-modified date for JSON-LD at every build
      'import.meta.env.BUILD_DATE': JSON.stringify(new Date().toISOString().slice(0, 10)),
    },
  },
});

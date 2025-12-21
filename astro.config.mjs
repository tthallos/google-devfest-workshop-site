// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tthallos.github.io',
  base: '/google-devfest-workshop-site',
  output: 'static',
  markdown: {
    syntaxHighlight: 'prism',
  },
});

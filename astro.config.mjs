import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://victorghss-portfolio.ctrls.dev.br',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'pt-br',
        locales: {
          'pt-br': 'pt-BR',
          en: 'en',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});

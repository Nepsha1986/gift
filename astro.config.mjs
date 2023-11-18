import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gift-idea.co",
  integrations: [react(), sitemap({
    filter: (page) => page !== 'https://gift-idea.co/admin/',
    i18n: {
      defaultLocale: 'en-us',
      locales: {
        'en-us': 'en-US',
        'ru-ua': 'ru-UA',
        'uk-ua': 'uk-UA',
      },
    },
  })],
});

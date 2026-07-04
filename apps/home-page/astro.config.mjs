// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["zh-CN", "en"],
    defaultLocale: "zh-CN",
  },
  site: 'https://4hworld.com',

  integrations: [pagefind(),sitemap()],

  build: {
    inlineStylesheets: 'auto'
  },
});
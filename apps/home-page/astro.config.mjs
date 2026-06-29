// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["zh-CN", "en"],
    defaultLocale: "zh-CN",
  },

  integrations: [pagefind()],

  build: {
    inlineStylesheets: 'auto'
  },
});
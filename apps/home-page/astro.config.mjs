// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import playformCompress from "@playform/compress";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["zh-CN", "en"],
    defaultLocale: "zh-CN",
  },

  integrations: [playformCompress()],
});
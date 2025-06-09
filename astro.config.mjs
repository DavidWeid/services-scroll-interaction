// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    open: true,
    port: 4000,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
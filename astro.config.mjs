// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.PUBLIC_SITE_URL ??
    "https://legacy-beacon.boldideas-official.workers.dev",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) =>
        ![
          "/thank-you",
          "/privacy-policy",
          "/terms-and-conditions",
          "/disclosures",
        ].some((path) => page.includes(path)),
    }),
    icon(),
  ],
});

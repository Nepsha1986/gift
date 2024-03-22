import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gift-idea.co",
  redirects: {
    "/[lang]/posts": {
      status: 302,
      destination: "/[lang]/posts/1",
    },
  },
  integrations: [react(), mdx(), sitemap()],
});

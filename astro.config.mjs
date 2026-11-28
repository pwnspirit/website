// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Update `site` to your real domain before deploying (used for sitemap/feed URLs).
export default defineConfig({
  site: "https://pwnspirit.me",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: "github-dark-dimmed", wrap: true },
  },
});

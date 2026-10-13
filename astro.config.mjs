// @ts-check
import { defineConfig } from "astro/config";

// Update `site` to your real domain before deploying (used for sitemap/feed URLs).
export default defineConfig({
  site: "https://roshan-tiwari.com.np",
  markdown: {
    shikiConfig: { theme: "github-dark-dimmed", wrap: true },
  },
});

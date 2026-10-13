import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog + writeup posts live as Markdown in src/content/blog/*.md
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // "article" shows in Recent Articles, "writeup" shows in Writeups
    kind: z.enum(["article", "writeup"]).default("article"),
    // optional severity badge for writeups
    severity: z.enum(["critical", "high", "medium", "low"]).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

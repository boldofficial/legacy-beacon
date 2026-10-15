import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
const resources = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.coerce.date(),
    category: z.string(),
    excerpt: z.string(),
    featuredImage: z.string().optional(),
    seoTitle: z.string().optional(),
    metaDescription: z.string(),
    socialImage: z.string().optional(),
    status: z.enum(["draft", "published"]).default("draft"),
  }),
});
export const collections = { resources };

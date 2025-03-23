import { defineCollection, z } from 'astro:content';

// Define a coleção "blog"
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};

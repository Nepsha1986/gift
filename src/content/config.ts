import { z, defineCollection } from "astro:content";

const giftsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    price: z.number(),
    category: z.string().optional(),
  }),
});

export const collections = {
  gifts: giftsCollection,
};

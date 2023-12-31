import { z, defineCollection } from "astro:content";
import type { Category } from "../types/category.ts";

const GiftCategory = z.union([
  z.literal("for-men" as Category),
  z.literal("for-women" as Category),
  z.literal("for-kids" as Category),
  z.literal("for-teens" as Category),
]);

const giftsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      thumbnail: image().refine((img) => img.width >= 400, {
        message: "Thumbnail image must be at least 400 pixels wide!",
      }),
      author: z
        .object({
          fullName: z.string(),
          link: z.string().optional(),
        })
        .optional(),
      date: z.string(),
      category: GiftCategory.optional(),
      meta: z
        .object({
          age: z.string().optional(),
        })
        .optional(),
      featured: z.boolean().optional().default(false),
      modules: z.array(z.string()).optional(),
    }),
});

export const collections = {
  gifts: giftsCollection,
};

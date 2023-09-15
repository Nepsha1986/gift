import { z, defineCollection } from "astro:content";
import type { Category } from "../types/category.ts";

const GiftCategory = z.union([
  z.literal("for-men" as Category),
  z.literal("for-women" as Category),
  z.literal("for-children" as Category),
  z.literal("for-wife" as Category),
  z.literal("for-husband" as Category),
  z.literal("for-mothers" as Category),
  z.literal("for-mothers" as Category),
  z.literal("for-fathers" as Category),
  z.literal("for-babies" as Category),
  z.literal("for-kids" as Category),
  z.literal("for-teens" as Category),
  z.literal("for-friends" as Category),
  z.literal("for-girlfriend" as Category),
  z.literal("for-girlfriend" as Category),
  z.literal("for-boyfriend" as Category),
]);

const giftsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    price: z.number(),
    category: GiftCategory.optional(),
  }),
});

export const collections = {
  gifts: giftsCollection,
};

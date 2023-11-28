// Temporary hardcoded links, as we do not have separate pages for categories

import type { Category } from "@src/types/category.ts";

type CategoryLinks = Record<Category, string>;

export const categoryLinks: CategoryLinks = {
  "for-women": "/gifts/for-women/adventure-experience-for-women",
  "for-men": "/gifts/for-men/adventure-experiences-for-men",
  "for-teens": "/gifts/for-teens/board-game",
  "for-kids": "/gifts/for-kids/arts-and-craft-kits",
};

import type { Category } from "../types/category.ts";

export const toCategoryName = (category: Category): string => {
  return category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ");
};

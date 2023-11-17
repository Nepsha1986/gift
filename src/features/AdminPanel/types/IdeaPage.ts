import type { Category } from "@src/types/category.ts";

export interface IdeaPage {
  refId: string;
  title: string;
  slug: string;
  category: Category;
}

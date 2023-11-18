import type { Category } from "@src/types/category.ts";

export type ModuleName = "RelatedProducts" | "Ads";

export interface IdeaPage {
  title: string;
  slug: string;
  category: Category;
  modules: ModuleName[] | [];
}

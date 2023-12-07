import { getCollection } from "astro:content";
import type { Category } from "@src/types/category.ts";

export type ModuleName = "RelatedProducts" | "Ads";

export interface IdeaPage {
  title: string;
  slug: string;
  category: Category;
  modules: ModuleName[] | [];
}

const giftsEntries = await getCollection("gifts");

const pages: IdeaPage[] = giftsEntries.map((i) => ({
  title: i.data.title,
  slug: i.slug,
  category: i.data.category as Category,
  modules: (i.data.modules as ModuleName[]) || [],
}));

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(pages));
}

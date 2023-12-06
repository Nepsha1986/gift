import { getCollection } from "astro:content";
import {
  type IdeaPage,
  type ModuleName,
} from "@src/features/AdminPanel/types/IdeaPage.ts";
import type { Category } from "@src/types/category.ts";

const giftsEntries = await getCollection("gifts");

const pages: IdeaPage[] = giftsEntries.map((i) => ({
  title: i.data.title,
  slug: i.slug,
  category: i.data.category as Category,
  modules: (i.data.modules as ModuleName[]) || [],
}));

export async function GET() {
  return new Response(JSON.stringify(pages));
}

import { getCollection } from "astro:content";
import type { Category } from "@src/types/category.ts";
import type { Module } from "@src/types/module.ts";
import { getCleanSlug, getLocaleFromSlug } from "@i18n/utils.ts";

export interface IdeaPage {
  title: string;
  slug: string;
  category: Category;
  modules: Module[] | [];
}

const giftsEntries = await getCollection("gifts");

const pages: IdeaPage[] = giftsEntries.map((i) => ({
  id: i.id,
  title: i.data.title,
  slug: getCleanSlug(i.slug),
  locale: getLocaleFromSlug(i.slug),
  category: i.data.category as Category,
  modules: (i.data.modules as Module[]) || undefined,
}));

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(pages));
}

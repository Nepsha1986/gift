import { getCollection } from "astro:content";
import type { Category } from "@src/types/category.ts";
import type { Module } from "@src/types/module.ts";
import { getCleanSlug, getLocaleFromSlug } from "@i18n/utils.ts";
import { locales, type SupportedLocales } from "@i18n/ui.ts";
import type { APIContext } from "astro";

export interface IdeaPage {
  id: string;
  title: string;
  slug: string;
  locale: SupportedLocales;
  category: Category;
  modules: Module[] | [];
}

const giftsEntries = await getCollection("gifts");

export function getStaticPaths(): any {
  return locales.map((i) => ({ params: { locale: i } }));
}

export async function GET({ params }: APIContext): Promise<Response> {
  const filtered = giftsEntries.filter(
    (i) => getLocaleFromSlug(i.slug) === params.locale,
  );

  const pages: IdeaPage[] = filtered.map((i) => ({
    id: i.id,
    title: i.data.title,
    slug: getCleanSlug(i.slug),
    locale: getLocaleFromSlug(i.slug),
    category: i.data.category as Category,
    modules: (i.data.modules as Module[]) || undefined,
  }));

  return new Response(JSON.stringify(pages));
}

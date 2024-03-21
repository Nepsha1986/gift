import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { locales } from "@i18n/ui.ts";
import { getCleanSlug, getLocaleFromSlug } from "@i18n/utils.ts";

const postsEntries = await getCollection("posts");

export function getStaticPaths(): any {
  return locales.map((i) => ({ params: { locale: i } }));
}

export function GET({ params }: APIContext): Response {
  const filtered = postsEntries.filter(
    (i) => getLocaleFromSlug(i.slug) === params.locale,
  );
  const data = filtered.map((i) => ({
    id: i.id,
    title: i.data.title,
    slug: getCleanSlug(i.slug),
    locale: getLocaleFromSlug(i.slug),
  }));

  return new Response(JSON.stringify(data));
}

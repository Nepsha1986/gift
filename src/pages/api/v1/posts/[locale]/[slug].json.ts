import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { getCleanSlug, getLocaleFromSlug } from "@i18n/utils.ts";

const postsEntries = await getCollection("posts");

export function getStaticPaths(): any {
  return postsEntries.map((i) => ({
    params: { locale: getLocaleFromSlug(i.slug), slug: getCleanSlug(i.slug) },
  }));
}

export function GET({ params }: APIContext): Response {
  const filtered = postsEntries.find(
    (i) =>
      getLocaleFromSlug(i.slug) === params.locale &&
      getCleanSlug(i.slug) === params.slug,
  );

  const data = {
    id: filtered?.id,
    title: filtered?.data.title,
    slug: getCleanSlug(filtered?.slug as string),
    locale: getLocaleFromSlug(filtered?.slug as string),
    author: filtered?.data.author,
    date: filtered?.data.date,
    thumbnail: filtered?.data.thumbnail,
    content: filtered?.body,
  };

  return new Response(JSON.stringify(data));
}

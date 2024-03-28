import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { getCleanSlug, getLocaleFromSlug } from "@i18n/utils.ts";

const postsEntries = await getCollection("posts");

const getImageName = (path: string): string => {
  const parts = path.split("/");
  return parts.slice(-1)[0];
};

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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const imageName = getImageName(filtered?.data.thumbnail.fsPath);

  const data = {
    id: filtered?.id,
    title: filtered?.data.title,
    slug: getCleanSlug(filtered?.slug as string),
    locale: getLocaleFromSlug(filtered?.slug as string),
    author: filtered?.data.author,
    date: filtered?.data.date,
    thumbnail: imageName,
    content: filtered?.body,
    description: filtered?.data.description,
  };

  return new Response(JSON.stringify(data));
}

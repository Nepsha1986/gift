import { getCollection } from "astro:content";
import { getCleanSlug, getLocaleFromSlug } from "@i18n/utils.ts";

export interface PostDataDto {
  title: string;
  slug: string;
}

const postsEntries = await getCollection("posts");

const postsData: PostDataDto[] = postsEntries.map((i) => ({
  id: i.id,
  title: i.data.title,
  slug: getCleanSlug(i.slug),
  locale: getLocaleFromSlug(i.slug),
}));

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(postsData));
}

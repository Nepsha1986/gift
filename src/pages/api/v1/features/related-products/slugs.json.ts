import { getCollection } from "astro:content";
import { getCleanSlug, getLangFromSlug } from "@i18n/utils.ts";

const giftsEntries = await getCollection("gifts");

const slugs: { name: string; slug: string }[] = giftsEntries
  .filter((i) => getLangFromSlug(i.slug) === "en")
  .filter((i) => i.data?.modules?.includes("RelatedProducts"))
  .map((i) => ({
    name: i.data.title,
    slug: getCleanSlug(i.slug),
  }));

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(slugs));
}

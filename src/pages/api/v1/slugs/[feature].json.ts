import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getCleanSlug, getLangFromSlug } from "@i18n/utils.ts";
import type { Module } from "@src/types/module.ts";
import { transformString } from "@utils/stransformString.ts";

const modules: Module[] = ["RelatedProducts", "Ads"];

const giftsEntries = await getCollection("gifts");

/**
 * API route handler for GET requests.
 * Filter gifts entries that match the feature, and returns an array of slugs and names.
 */
export const GET: APIRoute = ({ params }) => {
  const module = transformString(params.feature as string, [
    "kebabToCamel",
    "capitalize",
  ]) as Module;

  const slugs: Array<{ name: string; slug: string }> = giftsEntries
    .filter((i) => getLangFromSlug(i.slug) === "en")
    .filter((i) => i.data?.modules?.includes(module))
    .map((i) => ({
      name: i.data.title,
      slug: getCleanSlug(i.slug),
    }));

  return new Response(JSON.stringify(slugs));
};

export function getStaticPaths(): any {
  return modules.map((i) => ({
    params: { feature: transformString(i, ["camelToKebab"]) },
  }));
}

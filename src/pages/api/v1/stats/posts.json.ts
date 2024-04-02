import z, { ZodError } from "zod";
import { type CollectionEntry, getCollection } from "astro:content";
import { type SupportedLocales, SupportedLocalesSchema } from "@i18n/ui.ts";
import { getLocaleFromSlug } from "@i18n/utils.ts";
import { groupByKey } from "@utils/groupByKey.ts";

const postsEntries = await getCollection("posts");

const PostsStatsSchema = z.object({
  total: z.number(),
  locales: z.array(
    z.object({
      locale: SupportedLocalesSchema,
      total: z.number(),
      featured: z.number(),
    }),
  ),
});

const getStats = (collection: Array<CollectionEntry<"posts">>): PostsStats => {
  const collectionCropped = collection.map((i) => ({
    id: i.id,
    locale: getLocaleFromSlug(i.slug),
    featured: i.data.featured,
  }));
  const TOTAL = collectionCropped.length;

  const groupedByLocale = groupByKey(collectionCropped, "locale");

  const stats = Object.entries(groupedByLocale).map(([locale, entries]) => ({
    total: entries.length,
    locale: locale as SupportedLocales,
    featured: entries.filter((i) => i.featured).length,
  }));

  return {
    total: TOTAL,
    locales: stats,
  };
};

type PostsStats = z.infer<typeof PostsStatsSchema>;

const resBody: PostsStats = getStats(postsEntries);

export async function GET(): Promise<Response> {
  try {
    PostsStatsSchema.parse(resBody);
    return new Response(JSON.stringify(resBody));
  } catch (e) {
    if (e instanceof ZodError) {
      return new Response(JSON.stringify(e), { status: 400 });
    }
    throw e;
  }
}

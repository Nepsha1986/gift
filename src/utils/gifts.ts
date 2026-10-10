import { getCollection, type CollectionEntry } from "astro:content";
import type { Category } from "@src/types/category.ts";
import type { SupportedLocales } from "@i18n/ui.ts";
import { getCleanSlug, getLocaleFromSlug } from "@i18n/utils.ts";

export type GiftEntry = CollectionEntry<"gifts">;

// Display order of recipient categories across the site
export const giftCategories: Category[] = [
  "for-women",
  "for-men",
  "for-teens",
  "for-kids",
];

export const giftsIndexPath = (): string => "/gifts";

export const giftCategoryPath = (category: Category): string =>
  `/gifts/${category}`;

export const giftPath = (entry: GiftEntry): string =>
  `/gifts/${entry.data.category}/${getCleanSlug(entry.slug)}`;

// Gifts of one locale (optionally one category) in a stable, alphabetical order,
// so the sidebar, category pages and prev/next links all agree with each other
export async function getGifts(
  locale: SupportedLocales,
  category?: Category,
): Promise<GiftEntry[]> {
  const entries = await getCollection(
    "gifts",
    (i) =>
      getLocaleFromSlug(i.slug) === locale &&
      (!category || i.data.category === category),
  );

  return entries.sort((a, b) =>
    a.data.title.localeCompare(b.data.title, locale),
  );
}

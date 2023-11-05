import type { Locale } from "../types/Locale.ts";

export const getBERefId = (refId: string, locale: Locale): string =>
  refId.replace(/\{\$locale\}/g, locale);

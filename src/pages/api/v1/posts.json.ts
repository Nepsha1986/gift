import { getCollection } from "astro:content";

export interface PostDataDto {
  title: string;
  slug: string;
}

const postsEntries = await getCollection("posts");

const postsData: PostDataDto[] = postsEntries.map((i) => ({
  title: i.data.title,
  slug: i.slug,
}));

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(postsData));
}

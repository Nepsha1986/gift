import { getCollection } from "astro:content";
import z, { ZodError } from "zod";

const postsEntries = await getCollection("gifts");

const PostsStatsSchema = z.object({
  size: z.number(),
});
type PostsStats = z.infer<typeof PostsStatsSchema>;

const resBody: PostsStats = {
  size: postsEntries.length,
};

export async function GET(): Promise<Response> {
  try {
    PostsStatsSchema.parse(resBody);
    return new Response(JSON.stringify(resBody));
  } catch (e) {
    if (e instanceof ZodError) {
      return new Response(
        JSON.stringify({
          message: e.message,
        }),
        { status: 400 },
      );
    }
    throw e;
  }
}

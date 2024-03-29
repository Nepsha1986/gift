import { getCollection } from "astro:content";
import z, { ZodError } from "zod";

const postsEntries = await getCollection("posts");

const IdeasStatsSchema = z.object({
  size: z.number(),
});

type IdeasStats = z.infer<typeof IdeasStatsSchema>;

const resBody: IdeasStats = {
  size: postsEntries.length,
};

export async function GET(): Promise<Response> {
  try {
    IdeasStatsSchema.parse(resBody);
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

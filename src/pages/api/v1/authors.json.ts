import { authors } from "@src/content/_authors";

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(authors));
}

import { getCollection } from "astro:content";
import { APIContext } from "astro";
console.log(APIContext);

export async function GET() {
  const books = await getCollection("books");
  return new Response(
    JSON.stringify({
      data: books,
    })
  );
}

export async function POST({ request }) {
  console.log(request.headers);
  const books = await getCollection("books");
  return new Response(
    JSON.stringify({
      data: books,
    })
  );
}

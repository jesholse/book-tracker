import { getCollection } from "astro:content";
const books = await getCollection("books");
export const prerender = false;

export async function POST({ params, request }) {
  const data = await request.formData();
  const query = data.get("search");
  const sorted = books.filter((book) => book.data.title.includes(query));
  return new Response(
    sorted
      .map((book) => {
        return `<article class=" rounded-2xl ">
         <div class=" text-black text-2xl font-medium">
         <h5 transition:name="title-${book.slug}"><a href=/library/${book.slug} class="hover:text-slate-700">${book.data.title}</a></h5>
         </div>
         <div class=" flex flex-col justify-center gap-8 items-start entry-content">
             <div class="text-md excerpt line-clamp-3">
                  ${book.data.excerpt}
             </div>
         </div>
     </article>`;
      })
      .join(" ")
  );
}

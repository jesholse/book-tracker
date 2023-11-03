import { defineCollection, z, reference } from "astro:content";

const bookCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: reference("authors"),
    pages: z.number(),
    rating: z.number(),
    image: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
  }),
});

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
  }),
});

const authorCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  books: bookCollection,
  posts: postCollection,
  authors: authorCollection,
};

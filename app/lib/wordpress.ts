const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {
  throw new Error("WORDPRESS_API_URL no está definida");
}

export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
};

export async function getPosts(perPage: number = 100): Promise<Article[]> {
  const response = await fetch(
    `${WORDPRESS_API_URL}/posts?_embed&per_page=${perPage}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("No se pudieron obtener los artículos de WordPress");
  }

  const posts = await response.json();

  return posts.map((post: any) => ({
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered
      .replace(/<[^>]*>/g, "")
      .replace(/&hellip;/g, "...")
      .trim(),
    content: post.content.rendered,
    category:
      post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "",
    author:
      post._embedded?.author?.[0]?.name ?? "",
    date: new Date(post.date)
      .toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase(),
    image:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
      "/images/article-city.png",
  }));
}

export async function searchPosts(query: string): Promise<Article[]> {
  const response = await fetch(
    `${WORDPRESS_API_URL}/posts?search=${encodeURIComponent(query)}&_embed`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("No se pudieron buscar los artículos");
  }

  const posts = await response.json();

  return posts.map((post: any) => ({
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered
      .replace(/<[^>]*>/g, "")
      .replace(/&hellip;/g, "...")
      .trim(),
    content: post.content.rendered,
    category:
      post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "",
    author:
      post._embedded?.author?.[0]?.name ?? "",
    date: new Date(post.date)
      .toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase(),
    image:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
      "/images/article-city.png",
  }));
}

export function getReadingTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, " ").trim();

  const words = text.split(/\s+/).filter(Boolean);

  const wordsPerMinute = 200;

  return Math.max(1, Math.ceil(words.length / wordsPerMinute));
}
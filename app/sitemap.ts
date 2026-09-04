import type { MetadataRoute } from "next";
import { getPosts } from "@/app/lib/wordpress";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://paso656.com",
    },
    {
      url: "https://paso656.com/articulos",
    },
    {
      url: "https://paso656.com/noticias",
    },
    {
      url: "https://paso656.com/noticias/local",
    },
    {
      url: "https://paso656.com/noticias/estatal",
    },
    {
      url: "https://paso656.com/noticias/nacional",
    },
    {
      url: "https://paso656.com/nosotros",
    },
    {
      url: "https://paso656.com/contacto",
    },
    {
      url: "https://paso656.com/aviso-de-privacidad",
    },
    {
      url: "https://paso656.com/terminos",
    },
  ];

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://paso656.com${
      post.section === "Noticias"
        ? "/noticias"
        : "/articulos"
    }/${post.slug}`,
    lastModified: new Date(post.dateRaw),
  }));

  return [...staticPages, ...postPages];
}
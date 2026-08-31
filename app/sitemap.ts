import type { MetadataRoute } from "next";
import { getPosts } from "@/app/lib/wordpress";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://paso656.com",
    },
    {
      url: "https://paso656.com/articulos",
    },
    {
      url: "https://paso656.com/articulos/opinion",
    },
    {
      url: "https://paso656.com/articulos/ciudad",
    },
    {
      url: "https://paso656.com/articulos/politica",
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

  const articlePages: MetadataRoute.Sitemap = articles.map(
    (article) => ({
      url: `https://paso656.com/articulos/${article.slug}`,
      lastModified: article.dateRaw,
    })
  );

  return [...staticPages, ...articlePages];
}
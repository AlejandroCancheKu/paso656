import type { MetadataRoute } from "next";
import { getPosts } from "@/app/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://paso656.com",
      lastModified: new Date(),
    },
    {
      url: "https://paso656.com/articulos",
      lastModified: new Date(),
    },
    {
      url: "https://paso656.com/articulos/opinion",
      lastModified: new Date(),
    },
    {
      url: "https://paso656.com/articulos/ciudad",
      lastModified: new Date(),
    },
    {
      url: "https://paso656.com/articulos/politica",
      lastModified: new Date(),
    },
    {
      url: "https://paso656.com/contacto",
      lastModified: new Date(),
    },
    {
      url: "https://paso656.com/aviso-de-privacidad",
      lastModified: new Date(),
    },
    {
      url: "https://paso656.com/terminos",
      lastModified: new Date(),
    },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map(
    (article) => ({
      url: `https://paso656.com/articulos/${article.slug}`,
      lastModified: new Date(),
    })
  );

  return [...staticPages, ...articlePages];
}
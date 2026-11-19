import type { MetadataRoute } from "next";
import { getArticles, getPosts } from "@/app/lib/wordpress";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, articles] = await Promise.all([
    getPosts(),
    getArticles(),
  ]);

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

  // Mismo criterio que las páginas: /noticias = posts de sección Noticias,
  // /articulos = posts de la categoría Artículos. Así el sitemap
  // nunca lista URLs que terminan en "no encontrado".
  const newsPages: MetadataRoute.Sitemap = posts
    .filter((post) => post.section === "Noticias")
    .map((post) => ({
      url: `https://paso656.com/noticias/${post.slug}`,
      lastModified: new Date(post.modifiedRaw),
    }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `https://paso656.com/articulos/${article.slug}`,
    lastModified: new Date(article.modifiedRaw),
  }));

  return [...staticPages, ...newsPages, ...articlePages];
}
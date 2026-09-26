"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const filters = [
  { label: "Todas", href: "/noticias" },
  { label: "Local", href: "/noticias/local" },
  { label: "Estatal", href: "/noticias/estatal" },
  { label: "Nacional", href: "/noticias/nacional" },
  { label: "Internacional", href: "/noticias/internacional" },
  { label: "Política", href: "/noticias/politica" },
  { label: "Economía", href: "/noticias/economia" },
  { label: "Seguridad", href: "/noticias/seguridad" },
  { label: "Educación", href: "/noticias/educacion" },
  { label: "Cultura", href: "/noticias/cultura" },
  { label: "Deportes", href: "/noticias/deportes" },
  { label: "Clima", href: "/noticias/clima" },
  { label: "Ecología", href: "/noticias/ecologia" },
  { label: "Protección Civil", href: "/noticias/proteccion-civil" },
  { label: "Obras Públicas", href: "/noticias/obras-publicas" },
  { label: "Vialidad", href: "/noticias/vialidad" },
];

export default function NewsFilters() {
  const pathname = usePathname();

  return (
    <div className="news-filters" aria-label="Filtrar noticias">
      {filters.map((filter) => (
        <Link
          key={filter.href}
          href={filter.href}
          className={pathname === filter.href ? "active" : ""}
        >
          {filter.label}
        </Link>
      ))}
    </div>
  );
}
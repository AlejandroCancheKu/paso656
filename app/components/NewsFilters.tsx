"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const filters = [
  { label: "Todas", href: "/noticias" },
  { label: "Local", href: "/noticias/local" },
  { label: "Estatal", href: "/noticias/estatal" },
  { label: "Nacional", href: "/noticias/nacional" },
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
"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { label: "Todas", value: "" },
  { label: "Opinión", value: "opinion" },
  { label: "Ciudad", value: "ciudad" },
  { label: "Política", value: "politica" },
];

export default function ArticleFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("categoria") ?? "";

  function handleFilter(category: string) {
    if (!category) {
      router.push("/articulos");
      return;
    }

    router.push(`/articulos?categoria=${category}`);
  }

  return (
    <div className="article-filters">
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          className={
            currentCategory === category.value
              ? "active"
              : ""
          }
          onClick={() => handleFilter(category.value)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
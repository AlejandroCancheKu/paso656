"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <span>paso</span>
          <strong>656</strong>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav
          className={`main-nav ${menuOpen ? "menu-open" : ""}`}
          aria-label="Navegación principal"
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>

          <Link
            href="/articulos/opinion"
            onClick={() => setMenuOpen(false)}
          >
            Opinión
          </Link>

          <Link
            href="/articulos/ciudad"
            onClick={() => setMenuOpen(false)}
          >
            Ciudad
          </Link>

          <Link
            href="/articulos/politica"
            onClick={() => setMenuOpen(false)}
          >
            Política
          </Link>

          <Link
            href="/buscar"
            className="search-nav"
            aria-label="Buscar"
            onClick={() => setMenuOpen(false)}
          >
            ⌕
          </Link>
        </nav>
      </div>
    </header>
  );
}
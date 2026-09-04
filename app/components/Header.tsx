"use client";

import Link from "next/link";
import { useState } from "react";
import InfoBar from "@/app/components/InfoBar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <InfoBar />

      <header className="site-header">
        <div className="header-inner">

        <Link
          href="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <span className="logo-name">
            <span>paso</span>
            <strong>656</strong>
          </span>

          <span className="logo-tagline">
            Periodismo desde la frontera
          </span>
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
              href="/articulos"
              onClick={() => setMenuOpen(false)}
            >
              Artículos
            </Link>

            <Link
              href="/noticias"
              onClick={() => setMenuOpen(false)}
            >
              Noticias
            </Link>      

            <Link
              href="/nosotros"
              onClick={() => setMenuOpen(false)}
            >
              Nosotros
            </Link>


            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
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
    </>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
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
            <Image
              src="/images/logo-paso656-v3.png"
              alt="paso656 - Periodismo desde la frontera."
              width={500}
              height={170}
              priority
              className="logo-image"
            />
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
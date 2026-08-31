import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span>paso</span>
            <strong>656</strong>
          </Link>

          <p>
            Opinión, ciudad y política
            <br />
            desde Ciudad Juárez.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navegación del sitio">
          <span>NAVEGACIÓN</span>

          <Link href="/">Inicio</Link>
          <Link href="/articulos/opinion">Opinión</Link>
          <Link href="/articulos/ciudad">Ciudad</Link>
          <Link href="/articulos/politica">Política</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <div className="footer-social">
          <span>REDES</span>

          <div className="footer-social-links">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="#" aria-label="X">
              X
            </a>

            <a href="#" aria-label="TikTok">
              TikTok
            </a>
          </div>
        </div>

        <nav className="footer-legal" aria-label="Información legal">
          <span>LEGAL</span>

          <Link href="/aviso-de-privacidad">
            Aviso de Privacidad
          </Link>

          <Link href="/terminos">
            Términos de uso
          </Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© 2026 paso656</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
}
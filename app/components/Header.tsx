export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span>paso</span>
          <strong>656</strong>
        </a>

        <nav className="main-nav">
          <a href="/">Inicio</a>
          <a href="/opinion">Opinión</a>
          <a href="/ciudad">Ciudad</a>
          <a href="/politica">Política</a>
        </nav>
      </div>
    </header>
  );
}
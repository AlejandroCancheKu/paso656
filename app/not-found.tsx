import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <span>404</span>

        <h1>
          Esta página
          <br />
          no existe.
        </h1>

        <p>
          El contenido que buscas no está disponible
          o la dirección ya no existe.
        </p>

        <Link href="/" className="not-found-link">
          Volver al inicio →
        </Link>
      </div>
    </main>
  );
}
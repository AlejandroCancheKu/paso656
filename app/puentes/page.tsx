import { getBridges } from "@/app/lib/bridges";

export default async function PuentesPage() {
  const bridgeData = await getBridges();

  return (
    <main className="bridges-page">
      <div className="bridges-page-inner">
        <header className="bridges-header">
          <span className="bridges-kicker">INFORMACIÓN FRONTERIZA</span>
          <h1>Puentes fronterizos</h1>
          <p>
            Tiempos estimados de cruce entre Ciudad Juárez y Estados Unidos.
          </p>
        </header>

        <section
          className="bridges-board"
          aria-label="Tiempos de cruce"
        >
          <div className="bridges-board-head">
            <span>PUENTE</span>
            <span>TIEMPO ESTIMADO</span>
          </div>

          {bridgeData.map((bridge, index) => (
            <article key={bridge.name} className="bridge-row">
              <div className="bridge-row-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="bridge-row-info">
                <h2>{bridge.name}</h2>
                <span>{bridge.direction}</span>
              </div>

              <div className="bridge-row-time">
                {bridge.status === "available" &&
                bridge.minutes !== null ? (
                  <>
                    <strong>{bridge.minutes}</strong>
                    <span>min</span>
                  </>
                ) : bridge.status === "closed" ? (
                  <>
                    <strong>—</strong>
                    <span>Cerrado</span>
                  </>
                ) : (
                  <>
                    <strong>—</strong>
                    <span>Actualización pendiente</span>
                  </>
                )}
              </div>
            </article>
          ))}
        </section>

        <footer className="bridges-footer">
          <a
            href="https://www.puentesfronterizos.gob.mx/camaras-en-vivo.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bridges-cameras-link"
          >
            Ver cámaras en vivo →
          </a>

          <span>
            Fuente: U.S. Customs and Border Protection (CBP)
          </span>
        </footer>
      </div>
    </main>
  );
}
type Bridge = {
  name: string;
  minutes: number | null;
  direction: string;
};

const bridges = [
  {
    name: "Paso del Norte",
    url: "https://www.puentesfronterizos.gob.mx/puente-internacional-paso-del-norte.php",
  },
  {
    name: "Lerdo-Stanton",
    url: "https://www.puentesfronterizos.gob.mx/puente-internacional-lerdo-stanton.php",
  },
  {
    name: "Zaragoza-Ysleta",
    url: "https://www.puentesfronterizos.gob.mx/puente-internacional-zaragoza-ysleta.php",
  },
  {
    name: "Guadalupe-Tornillo",
    url: "https://www.puentesfronterizos.gob.mx/puente-internacional-guadalupe-tornillo.php",
  },
];

function extractMexicoToUS(html: string): number | null {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");

  const match = text.match(
    /México\s+a\s+Estados\s+Unidos\s+(\d+)\s+minutos/i
  );

  return match ? Number(match[1]) : null;
}

async function getBridges(): Promise<Bridge[]> {
  const results = await Promise.all(
    bridges.map(async (bridge) => {
      try {
        const response = await fetch(bridge.url, {
          next: {
            revalidate: 300,
          },
        });

        if (!response.ok) {
          return {
            name: bridge.name,
            minutes: null,
            direction: "México → Estados Unidos",
          };
        }

        const html = await response.text();

        return {
          name: bridge.name,
          minutes: extractMexicoToUS(html),
          direction: "México → Estados Unidos",
        };
      } catch {
        return {
          name: bridge.name,
          minutes: null,
          direction: "México → Estados Unidos",
        };
      }
    })
  );

  return results;
}

export default async function PuentesPage() {
  const bridgeData = await getBridges();

  return (
    <main className="bridges-page">
      <div className="bridges-page-inner">

        <header className="bridges-header">
          <span className="bridges-kicker">
            INFORMACIÓN FRONTERIZA
          </span>

          <h1>Puentes fronterizos</h1>

          <p>
            Tiempos estimados de cruce entre Ciudad Juárez y Estados Unidos.
          </p>
        </header>

        <section className="bridges-board" aria-label="Tiempos de cruce">

          <div className="bridges-board-head">
            <span>PUENTE</span>
            <span>TIEMPO ESTIMADO</span>
          </div>

          {bridgeData.map((bridge, index) => (
            <article
              key={bridge.name}
              className="bridge-row"
            >
              <div className="bridge-row-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="bridge-row-info">
                <h2>{bridge.name}</h2>

                <span>
                  {bridge.direction}
                </span>
              </div>

              <div className="bridge-row-time">
                {bridge.minutes !== null ? (
                  <>
                    <strong>{bridge.minutes}</strong>
                    <span>min</span>
                  </>
                ) : (
                  <>
                    <strong>—</strong>
                    <span>No disponible</span>
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
            Fuente: Fideicomiso de Puentes Fronterizos de Chihuahua / TTI
          </span>

        </footer>

      </div>
    </main>
  );
}
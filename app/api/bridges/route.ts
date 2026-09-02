import { NextResponse } from "next/server";

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

export async function GET() {
  try {
    const results: Bridge[] = await Promise.all(
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

    return NextResponse.json({
      source: "Fideicomiso de Puentes Fronterizos de Chihuahua / TTI",
      bridges: results,
    });
  } catch {
    return NextResponse.json(
      { error: "No fue posible obtener los tiempos de los puentes." },
      { status: 500 }
    );
  }
}

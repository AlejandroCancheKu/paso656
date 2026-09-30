export type Bridge = {
  name: string;
  minutes: number | null;
  direction: string;
  status: "available" | "pending" | "closed";
};

type CBPLane = {
  update_time: string;
  operational_status: string;
  delay_minutes: string;
  lanes_open: string;
};

type CBPPort = {
  port_number: string;
  border: string;
  port_name: string;
  crossing_name: string;
  hours: string;
  date: string;
  time: string;
  port_status: string;
  passenger_vehicle_lanes: {
    standard_lanes: CBPLane;
  };
};

const CBP_URL = "https://bwt.cbp.gov/api/bwtpublicmod";

const bridgeConfig = [
  {
    name: "Paso del Norte",
    portNumber: "240202",
  },
  {
    name: "Lerdo-Stanton",
    portNumber: "240204",
  },
  {
    name: "Zaragoza-Ysleta",
    portNumber: "240203",
  },
  {
    name: "Guadalupe-Tornillo",
    portNumber: "240401",
  },
];

function getMinutes(port: CBPPort | undefined): number | null {
  if (!port) {
    return null;
  }

  const delay =
    port.passenger_vehicle_lanes?.standard_lanes?.delay_minutes;

  if (delay === undefined || delay === null || delay.trim() === "") {
    return null;
  }

  const minutes = Number(delay);

  return Number.isFinite(minutes) ? minutes : null;
}

function getStatus(
  port: CBPPort | undefined,
  minutes: number | null
): Bridge["status"] {
  if (!port) {
    return "pending";
  }

  if (port.port_status?.toLowerCase() === "closed") {
    return "closed";
  }

  if (minutes !== null) {
    return "available";
  }

  return "pending";
}

export async function getBridges(): Promise<Bridge[]> {
  try {
    const response = await fetch(CBP_URL, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      throw new Error(`CBP respondió con ${response.status}`);
    }

    const data: CBPPort[] = await response.json();

    return bridgeConfig.map((bridge) => {
      const port = data.find(
        (item) => item.port_number === bridge.portNumber
      );

      const minutes = getMinutes(port);

      return {
        name: bridge.name,
        minutes,
        direction: "México → Estados Unidos",
        status: getStatus(port, minutes),
      };
    });
  } catch (error) {
    console.error("Error obteniendo tiempos de CBP:", error);

    return bridgeConfig.map((bridge) => ({
      name: bridge.name,
      minutes: null,
      direction: "México → Estados Unidos",
      status: "pending",
    }));
  }
}
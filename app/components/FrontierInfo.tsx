"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type WeatherData = {
  temperature: number;
};

type ExchangeData = {
  rate: number;
  date: string;
};

type Bridge = {
  name: string;
  minutes: number | null;
  direction: string;
};

export default function FrontierInfo() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [exchange, setExchange] = useState<ExchangeData | null>(null);
  const [bridge, setBridge] = useState<Bridge | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=31.7619&longitude=-106.4850&current=temperature_2m&temperature_unit=celsius&timezone=America%2FChihuahua"
        );

        if (!response.ok) return;

        const data = await response.json();

        setWeather({
          temperature: Math.round(data.current.temperature_2m),
        });
      } catch {
        // Si el servicio falla, no mostramos el clima.
      }
    };

    const fetchExchange = async () => {
      try {
        const response = await fetch(
          "https://api.frankfurter.dev/v2/rate/USD/MXN?providers=BANXICO"
        );

        if (!response.ok) return;

        const data = await response.json();

        setExchange({
          rate: Number(data.rate),
          date: data.date,
        });
      } catch {
        // Si el servicio falla, no mostramos el tipo de cambio.
      }
    };

    const fetchBridges = async () => {
      try {
        const response = await fetch("/api/bridges");

        if (!response.ok) return;

        const data = await response.json();

        const firstAvailableBridge = data.bridges?.find(
          (item: Bridge) => item.minutes !== null
        );

        if (firstAvailableBridge) {
          setBridge(firstAvailableBridge);
        }
      } catch {
        // Si el servicio falla, no mostramos el tiempo.
      }
    };

    fetchWeather();
    fetchExchange();
    fetchBridges();
  }, []);

  const formattedExchangeDate = exchange
    ? new Intl.DateTimeFormat("es-MX", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
        .format(new Date(`${exchange.date}T12:00:00`))
        .replace(/\./g, "")
    : "";

  const bridgeText = bridge
    ? `${bridge.name} · ${bridge.minutes} min`
    : "Consultar cruces";

  return (
    <section className="frontier-info">
      <div className="frontier-info-inner">

        <div className="frontier-info-header">
          <span>INFORMACIÓN FRONTERIZA</span>
        </div>

        <div className="frontier-info-grid">

          {/* PUENTES */}
          <div className="frontier-info-item">
            <span className="frontier-info-label">PUENTES</span>

            <div className="frontier-info-value">
              {bridgeText}
            </div>

            <Link
            href="/puentes"
            className="frontier-info-detail frontier-info-link"
            >
            Ver cruces →
            </Link>
          </div>

          {/* DÓLAR */}
          <div className="frontier-info-item">
            <span className="frontier-info-label">DÓLAR</span>

            <div className="frontier-info-value">
              {exchange ? `$${exchange.rate.toFixed(2)}` : "—"}
            </div>

            <span className="frontier-info-detail">
              USD / MXN · FIX
              {formattedExchangeDate && ` · ${formattedExchangeDate}`}
            </span>
          </div>

          {/* CLIMA */}
          <div className="frontier-info-item">
            <span className="frontier-info-label">CLIMA</span>

            <div className="frontier-info-value">
              {weather ? `${weather.temperature} °C` : "—"}
            </div>

            <span className="frontier-info-detail">
              Ciudad Juárez
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
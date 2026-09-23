"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  DollarSign,
  MapPin,
  Route,
  Sun,
} from "lucide-react";

type WeatherData = {
  temperature: number;
  weatherCode: number;
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

function getWeatherIcon(code: number) {
  if (code === 0) return Sun;

  if (code === 1 || code === 2) return CloudSun;

  if (code === 3) return Cloud;

  if (code === 45 || code === 48) return CloudFog;

  if (
    (code >= 51 && code <= 67) ||
    (code >= 80 && code <= 82)
  ) {
    return CloudRain;
  }

  if (
    (code >= 71 && code <= 77) ||
    code === 85 ||
    code === 86
  ) {
    return CloudSnow;
  }

  if (code >= 95) return CloudLightning;

  return CloudSun;
}

export default function FrontierInfo() {
  const [weather, setWeather] = useState<WeatherData | null>(
    null
  );

  const [exchange, setExchange] = useState<ExchangeData | null>(
    null
  );

  const [bridge, setBridge] = useState<Bridge | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=31.7619&longitude=-106.4850&current=temperature_2m,weather_code&temperature_unit=celsius&timezone=America%2FChihuahua"
        );

        if (!response.ok) return;

        const data = await response.json();

        setWeather({
          temperature: Math.round(
            data.current.temperature_2m
          ),
          weatherCode: data.current.weather_code,
        });
      } catch {
        // Si falla el servicio, no mostramos el clima.
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
        // Si falla el servicio, no mostramos el dólar.
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
        // Si falla el servicio, no mostramos el tiempo.
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

  const WeatherIcon = weather
    ? getWeatherIcon(weather.weatherCode)
    : CloudSun;

return (
  <section className="frontier-info">
    <div className="frontier-info-inner">

      <div className="frontier-info-header">
        <span>INFORMACIÓN FRONTERIZA</span>
      </div>

      <div className="frontier-info-grid">

        {/* PUENTES */}
        <Link
          href="/puentes"
          className="frontier-info-item frontier-info-item-link"
        >
          <div className="frontier-info-icon">
            <Route size={24} strokeWidth={1.8} />
          </div>

          <div className="frontier-info-content">
            <span className="frontier-info-label">
              PUENTES FRONTERIZOS
            </span>

            <div className="frontier-info-data">
              <strong>
                {bridge ? `${bridge.minutes} min` : "Consultar"}
              </strong>

              <span>
                {bridge ? bridge.name : " Ver cruces"}
              </span>
            </div>
          </div>
        </Link>

        {/* DÓLAR */}
        <div className="frontier-info-item">
          <div className="frontier-info-icon">
            <DollarSign size={24} strokeWidth={1.8} />
          </div>

          <div className="frontier-info-content">
            <span className="frontier-info-label">
              TIPO DE CAMBIO
            </span>

            <div className="frontier-info-data">
              <strong>
                {exchange
                  ? `$${exchange.rate.toFixed(2)}`
                  : "—"}
              </strong>

              <span>USD / MXN</span>
            </div>
          </div>
        </div>

        {/* CLIMA */}
        <div className="frontier-info-item">
          <div className="frontier-info-icon">
            <WeatherIcon size={24} strokeWidth={1.8} />
          </div>

          <div className="frontier-info-content">
            <span className="frontier-info-label">
              CLIMA ACTUAL
            </span>

            <div className="frontier-info-data">
              <strong>
                {weather
                  ? `${weather.temperature} °C`
                  : "—"}
              </strong>

              <span>Ciudad Juárez</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);
}
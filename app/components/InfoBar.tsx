"use client";

import { useEffect, useState } from "react";

type WeatherData = {
  temperature: number;
};

type ExchangeData = {
  rate: number;
};

export default function InfoBar() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [exchange, setExchange] = useState<ExchangeData | null>(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      setDate(
        new Intl.DateTimeFormat("es-MX", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
          timeZone: "America/Chihuahua",
        }).format(now)
      );

      setTime(
        new Intl.DateTimeFormat("es-MX", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "America/Chihuahua",
        }).format(now)
      );
    };

    updateDateTime();

    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

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
        // Si el servicio falla, simplemente no mostramos el clima.
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
        });
      } catch {
        // Si el servicio falla, simplemente no mostramos el tipo de cambio.
      }
    };

    fetchWeather();
    fetchExchange();
  }, []);

  const formattedDate = date
    ? date.charAt(0).toUpperCase() + date.slice(1)
    : "";

  return (
    <div className="info-bar">
      <div className="info-bar-inner">
        <div className="info-date">
          <span className="info-date-full">{formattedDate}</span>
          <span className="info-date-mobile">
            {date
              ? new Intl.DateTimeFormat("es-MX", {
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  timeZone: "America/Chihuahua",
                })
                  .format(new Date())
                  .replace(/\./g, "")
              : ""}
          </span>
          {time && <span className="info-time">{time}</span>}
        </div>

        <div className="info-location">
          <span>Ciudad Juárez</span>
        </div>

        <div className="info-data">
          {weather && (
            <span className="info-item">
              <span className="info-icon">☀</span>
              {weather.temperature} °C
            </span>
          )}

          {exchange && (
            <span className="info-item">
              <span>USD</span> ${exchange.rate.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
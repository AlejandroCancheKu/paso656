"use client";

import { useEffect, useState } from "react";

export default function InfoBar() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

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
          <span>CIUDAD JUÁREZ</span>
        </div>
      </div>
    </div>
  );
}
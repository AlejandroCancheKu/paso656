"use client";

import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  url: string;
};

export default function ShareButtons({
  title,
  url,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareOnWhatsApp = () => {
    const text = `${title} ${url}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      "_blank",
      "width=600,height=500"
    );
  };

  const shareOnX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=500"
    );
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="share-buttons">
      <span>COMPARTIR</span>

      <div className="share-buttons-list">
        <button onClick={shareOnWhatsApp}>
          WhatsApp
        </button>

        <button onClick={shareOnFacebook}>
          Facebook
        </button>

        <button onClick={shareOnX}>
          X
        </button>

        <button onClick={copyLink}>
          {copied ? "Enlace copiado" : "Copiar enlace"}
        </button>
      </div>
    </div>
  );
}
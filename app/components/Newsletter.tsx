
import Script from "next/script";

export default function Newsletter() {
  return (
    <section
      aria-label="Suscripción al boletín semanal"
      className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6"
    >
      <div data-reach-form="7090e48f-033b-415f-859e-916a8c84567c" />

      <Script
        src="https://cdn-reach.hostinger.com/js/embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}

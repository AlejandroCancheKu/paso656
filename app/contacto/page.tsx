export default function ContactoPage() {
  return (
      <main className="static-page">
        <header className="static-page-header">
          <span>CONTACTO</span>

          <h1>
            Hablemos.
          </h1>

          <p>
            ¿Tienes una historia, propuesta o información
            que quieras compartir con paso656?
          </p>
        </header>

        <section className="contact-content">
          <div className="contact-block">
            <span>EDITORIAL</span>

            <h2>
              Información, historias y propuestas
            </h2>

            <p>
              Si tienes información de interés para
              Ciudad Juárez o quieres proponer un tema
              para nuestra cobertura, puedes ponerte en
              contacto con nosotros.
            </p>
          </div>

          <div className="contact-block">
            <span>REDES SOCIALES</span>

            <h2>
              También puedes encontrarnos en redes.
            </h2>

            <p>
              Próximamente encontrarás aquí nuestros
              canales oficiales de comunicación.
            </p>
          </div>
        </section>
      </main>
  );
}
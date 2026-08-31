import Header from "@/app/components/Header";

export default function AvisoPrivacidadPage() {
  return (
    <>
      <Header />

      <main className="legal-page">
        <header className="legal-page-header">
          <span>INFORMACIÓN LEGAL</span>

          <h1>Aviso de Privacidad</h1>

          <p>
            En paso656 nos importa la privacidad de las personas
            que visitan nuestro sitio y la forma en que utilizamos
            la información que nos proporcionan.
          </p>
        </header>

        <article className="legal-content">
          <section>
            <h2>1. Responsable</h2>

            <p>
              El responsable del tratamiento de los datos personales
              recabados a través de este sitio será identificado en
              esta sección con la información correspondiente de
              paso656.
            </p>
          </section>

          <section>
            <h2>2. Información que podemos recopilar</h2>

            <p>
              Dependiendo de las funciones disponibles en el sitio,
              podremos recopilar información que el visitante
              proporcione voluntariamente, así como determinados
              datos técnicos relacionados con la navegación.
            </p>
          </section>

          <section>
            <h2>3. Finalidad del tratamiento</h2>

            <p>
              La información podrá utilizarse para atender
              solicitudes de contacto, responder comunicaciones,
              mejorar la experiencia del sitio y mantener la
              seguridad y funcionamiento de la plataforma.
            </p>
          </section>

          <section>
            <h2>4. Cookies y tecnologías similares</h2>

            <p>
              El sitio podrá utilizar cookies u otras tecnologías
              similares para determinadas funciones técnicas,
              estadísticas o de experiencia del usuario.
            </p>
          </section>

          <section>
            <h2>5. Derechos de los usuarios</h2>

            <p>
              Las personas podrán ejercer los derechos que les
              correspondan respecto al tratamiento de sus datos
              personales, de acuerdo con la legislación aplicable.
            </p>
          </section>

          <section>
            <h2>6. Contacto</h2>

            <p>
              Para cualquier consulta relacionada con este aviso,
              utilizaremos los medios de contacto oficiales que
              sean publicados por paso656.
            </p>
          </section>

          <section>
            <h2>7. Actualizaciones</h2>

            <p>
              Este aviso podrá actualizarse cuando cambien las
              funciones del sitio, las prácticas de tratamiento
              de información o las disposiciones aplicables.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
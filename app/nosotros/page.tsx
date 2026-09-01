export const metadata = {
  title: "Nosotros",
  description:
    "Conoce paso656, un medio digital enfocado en Ciudad Juárez y su entorno.",
};

export default function NosotrosPage() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <span className="about-label">Nosotros</span>

        <div className="about-hero-grid">
          <div>
            <p className="about-brand">paso656</p>

            <h1>
              Periodismo
              <br />
              desde la
              <br />
              frontera.
            </h1>
          </div>

          <p className="about-intro">
            Ciudad Juárez es una ciudad que nunca permanece quieta.
          </p>
        </div>
      </section>


      {/* QUÉ ES PASO656 */}
      <section className="about-section about-introduction">
        <div className="about-section-label">
          <span>01</span>
          <span>Qué es paso656</span>
        </div>

        <div className="about-section-content">
          <p className="about-lead">
            Ciudad Juárez es una ciudad marcada por su condición
            fronteriza, pero que no puede reducirse a ella.
          </p>

          <p>
            paso656 nace para mirar de cerca lo que ocurre aquí.
            Somos un medio digital enfocado en Ciudad Juárez y su
            entorno. Contamos historias, compartimos información y
            abrimos espacios para la opinión sobre los temas que
            forman parte de nuestra ciudad.
          </p>

          <p>
            No buscamos contar todo.
            <br />
            Buscamos contar <strong>lo que importa.</strong>
          </p>
        </div>
      </section>


      {/* NUESTRA MIRADA */}
      <section className="about-section">
        <div className="about-section-label">
          <span>02</span>
          <span>Nuestra mirada</span>
        </div>

        <div className="about-topics">

          <article className="about-topic">
            <span>01</span>

            <h2>Ciudad</h2>

            <p>
              Observamos lo que sucede en nuestras calles,
              colonias y espacios públicos. Las historias que
              forman parte de la vida cotidiana de quienes
              habitan esta ciudad.
            </p>
          </article>


          <article className="about-topic">
            <span>02</span>

            <h2>Opinión</h2>

            <p>
              Creemos en el valor de las ideas y en la
              conversación. Un espacio para distintas voces,
              perspectivas y formas de entender nuestra
              realidad.
            </p>
          </article>


          <article className="about-topic">
            <span>03</span>

            <h2>Política</h2>

            <p>
              Seguimos las decisiones y acontecimientos que
              tienen impacto en Ciudad Juárez. Porque entender
              lo que ocurre también significa entender quién
              decide y por qué.
            </p>
          </article>

        </div>
      </section>


      {/* DESDE LA FRONTERA */}
      <section className="about-section about-border">
        <div className="about-section-label">
          <span>03</span>
          <span>Desde la frontera</span>
        </div>

        <div className="about-border-content">
          <p className="about-border-lead">
            Ciudad Juárez tiene una historia particular.
          </p>

          <p>
            Es frontera, pero también es hogar. Es una ciudad
            de contrastes, de movimiento y de transformación
            constante.
          </p>

          <p>
            Por eso queremos contarla desde aquí.
          </p>

          <p>
            Con una mirada local, una voz propia y la intención
            de poner sobre la mesa aquello que merece nuestra
            atención.
          </p>
        </div>
      </section>


      {/* CIERRE */}
      <section className="about-closing">

        <div className="about-closing-line" />

        <h2>
          La frontera también
          <br />
          tiene algo que decir.
        </h2>

        <div className="about-signature">
          <strong>paso656</strong>
          <span>Ciudad Juárez · Chihuahua</span>
        </div>

      </section>

    </main>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce paso656, un medio digital de Ciudad Juárez enfocado en información, noticias y análisis desde la frontera.",
  alternates: {
    canonical: "https://paso656.com/nosotros",
  },
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

            <h2>Cercanía</h2>

            <p>
              Estamos cerca de lo que ocurre. De las calles,
              de las personas y de las historias que forman
              parte de la vida cotidiana de nuestra ciudad.
            </p>
          </article>


          <article className="about-topic">
            <span>02</span>

            <h2>Contexto</h2>

            <p>
              Informar no es solamente contar qué pasó.
              También es ayudar a entender por qué importa
              y cómo puede impactar a quienes vivimos aquí.
            </p>
          </article>


          <article className="about-topic">
            <span>03</span>

            <h2>Perspectiva</h2>

            <p>
              Creemos en un periodismo con voz propia, abierto
              a distintas ideas y dispuesto a poner sobre la mesa
              los temas que merecen nuestra atención.
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
            Con una mirada local, una voz propia y el compromiso
            de mantenernos cerca de aquello que sucede a nuestro alrededor.
            Porque conocer nuestra ciudad también es una forma de entenderla.
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
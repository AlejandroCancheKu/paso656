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
      <section className="about-section about-border">
        <div className="about-section-label">
          <span>01</span>
          <span>QUIÉNES SOMOS</span>
        </div>

        <div className="about-border-content">
          <p className="about-border-lead">
            <span>Paso</span>
            <strong>656</strong> nace para mirar de cerca lo que ocurre aquí.
          </p>

          <p>
            Somos un medio digital enfocado en Ciudad Juárez y su entorno. 
            Contamos historias, compartimos información y abrimos espacios 
            para la opinión sobre los temas que forman parte de nuestra ciudad.
          </p>

          <p>
            Ciudad Juárez tiene una historia particular. Es frontera, pero 
            también es hogar; una ciudad de contrastes, de movimiento y de 
            transformación constante. Por eso queremos contarla desde aquí, 
            con una mirada local, una voz propia y el compromiso de 
            mantenernos cerca de aquello que sucede a nuestro alrededor.
          </p>

          <p>
            No buscamos contar todo. Buscamos contar <strong>lo que importa.</strong>
          </p>

          <p>
            Porque conocer nuestra ciudad también es una forma de entenderla.
          </p>
        </div>
      </section>

      {/* NUESTRO PROPÓSITO */}
      <section className="about-section about-border">
        <div className="about-section-label">
          <span>02</span>
          <span>NUESTRO PROPÓSITO</span>
        </div>

        <div className="about-border-content">
          <p className="about-border-lead">
            Misión
          </p>

          <p>
            Informar a la ciudadanía de manera veraz, oportuna y responsable 
            sobre los acontecimientos más relevantes de Ciudad Juárez, 
            Chihuahua y la región fronteriza, promoviendo el acceso a 
            información confiable que contribuya a una sociedad más 
            informada, participativa y consciente de su entorno.
          </p>

          <p className="about-border-lead">
            Visión
          </p>

          <p>
            Ser un medio digital de referencia en la frontera norte de 
            México, reconocido por su credibilidad, compromiso con la 
            verdad, cercanía con la comunidad e innovación en la difusión 
            de información de interés público.
          </p>
        </div>
      </section>

      
      {/* NUESTRO OBJETIVO */}
      <section className="about-section about-border">
        <div className="about-section-label">
          <span>03</span>
          <span>NUESTRO OBJETIVO</span>
        </div>

        <div className="about-border-content">
          <p className="about-border-lead">
            Objetivo
          </p>

          <p>
            Ser un medio de comunicación dedicado a informar de manera 
            clara, objetiva y oportuna sobre los acontecimientos más 
            relevantes de Ciudad Juárez, Chihuahua, México y el mundo, 
            acercando la información a la comunidad a través de 
            plataformas digitales.
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
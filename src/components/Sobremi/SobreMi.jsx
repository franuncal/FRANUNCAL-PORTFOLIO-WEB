import "./SobreMi.css";
import { Link } from "react-router-dom";

export const SobreMi = () => {
  return (
    <section className="sobre-mi-section" id="sobre-mi">
      {/* Botón HOME arriba */}
      <Link to="/" className="home-link">
        HOME
      </Link>

      {/* Copyright vertical abajo izquierda */}
      <div className="copyright">© {new Date().getFullYear()}</div>

      <div className="sobre-mi-container">
        <div className="sobre-mi-content">
          <div className="sobre-mi-text">
            <h1 className="sobre-mi-title">Soy Fran.</h1>

            <p className="sobre-mi-intro">
              Programador frontend y creador digital.
            </p>

            <div className="sobre-mi-description">
              <p>
                Siempre me atrajo el punto donde el diseño y la tecnología se
                cruzan. Desde que entendí que el código puede transformar ideas
                en experiencias reales, no dejé de probar, romper y volver a
                armar.
              </p>

              <p>
                Hoy desarrollo sitios web, landing pages y aplicaciones frontend
                modernas. Más allá del tamaño del proyecto, trabajo con el mismo
                enfoque: construir experiencias con propósito, resolver
                problemas reales y diseñar soluciones claras, eficientes y
                centradas en el usuario.
              </p>

              {/* <p className="quote-text">
                Esta idea resume mucho de cómo encaro mi trabajo:
              </p> */}

              {/* <blockquote className="quote">
                &quot;La simplicidad es una de las cosas más difíciles de
                lograr.&quot;
                <cite>— Jorge Luis Borges</cite>
              </blockquote> */}

              <div className="section-divider">⸻</div>

              <h2 className="section-title">EXPERIENCIA</h2>

              <p className="section-subtitle">
                <strong>Técnico en Programación</strong>
              </p>
              <p className="section-subtitle">
                +4 años de experiencia en desarrollo web y frontend
              </p>

              <p>Durante este recorrido trabajé en:</p>
              <ul className="experience-list">
                <li>Desarrollo de sitios web y landing pages</li>
                <li>Aplicaciones web frontend con React</li>
                <li>Proyectos orientados a UX, performance y escalabilidad</li>
                <li>Colaboración directa con clientes, marcas y equipos</li>
              </ul>

              <div className="section-divider">⸻</div>

              <h2 className="section-title">SKILLS</h2>

              <p className="skills-text">
                Frontend Development / React / JavaScript / HTML & CSS
                <br />
                UI & UX Thinking / Responsive Design / Web Performance
                <br />
                Arquitectura Frontend / Componentización / Design Systems
                <br />
                Animaciones y micro-interacciones / Git / Trabajo colaborativo
              </p>

              <div className="section-divider">⸻</div>

              {/* <h2 className="section-title">AGRADECIMIENTOS</h2> */}

              <p>
                Gran parte de este portfolio es trabajo en equipo. Hoy es muy
                difícil construir algo realmente bueno en soledad. Acá muestro
                proyectos donde tuve una participación fuerte, pero muchas
                personas —clientes, colegas, diseñadores y otros
                desarrolladores— influyeron enormemente en mi crecimiento, ya
                sea con ideas, feedback, criterio o confianza. A todos ellos,
                gracias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

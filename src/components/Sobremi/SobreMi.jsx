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
              Desarrollo web frontend — React, animaciones y performance.
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
                desde cero. Me especializo en React, animaciones con GSAP y
                optimización de performance. Trabajo directamente con clientes y
                diseñadores — del mockup al deploy — con el mismo nivel de
                atención sin importar el tamaño del proyecto.
              </p>

              <div className="section-divider">⸻</div>

              <h2 className="section-title">EXPERIENCIA</h2>

              <p className="section-subtitle">
                <strong>Frontend Web Developer — Freelance</strong>
              </p>
              <p className="section-subtitle">
                Marzo 2023 – Presente · +2 años
              </p>

              <p>Durante este tiempo trabajé en:</p>
              <ul className="experience-list">
                <li>Desarrollo de sitios web y landing pages a medida</li>
                <li>Aplicaciones web frontend con React y Vite</li>
                <li>Animaciones e interacciones con GSAP</li>
                <li>Integraciones con APIs REST y Supabase como backend</li>
                <li>
                  Proyectos orientados a performance, Core Web Vitals y
                  escalabilidad
                </li>
                <li>
                  Colaboración directa con clientes, marcas y equipos de diseño
                </li>
              </ul>

              <div className="section-divider">⸻</div>

              <h2 className="section-title">SKILLS</h2>

              <p className="skills-text">
                Frontend Development / React / JavaScript (ES6+) / HTML & CSS
                <br />
                CSS Modules / GSAP / Animaciones y micro-interacciones
                <br />
                Vite / npm / Git / GitHub
                <br />
                Supabase / REST APIs / Node.js básico
                <br />
                Responsive Design / Web Performance / Core Web Vitals
                <br />
                Figma / Trabajo colaborativo con diseño y producto
              </p>

              <div className="section-divider">⸻</div>

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

// import "./Contacto.css";
// import { Link } from "react-router-dom";

// export const Contacto = () => {
//   return (
//     <section className="contact-section">
//       {/* Botón HOME arriba */}
//       <Link to="/" className="home-link">
//         HOME
//       </Link>

//       {/* Copyright vertical abajo izquierda */}
//       <div className="copyright">© {new Date().getFullYear()}</div>

//       <div className="contact-container">
//         <h1 className="contact-title">Contacto.</h1>

//         <p className="contact-description">
//           ¿Necesitas un sitio web o queres colaborar en un proyecto? Contactame.
//         </p>

//         <div className="contact-info">
//           <p className="contact-line">
//             <span className="contact-label">Email: </span>
//             <a
//               href="mailto:franuncal@gmail.com"
//               target="_blank"
//               rel="noreferrer"
//               className="contact-link"
//             >
//               franuncal@gmail.com
//             </a>
//           </p>
//           <p className="contact-line">
//             <span className="contact-label">En Internet: </span>
//             <a
//               href="https://www.linkedin.com/in/franuncal/"
//               target="_blank"
//               rel="noreferrer"
//               className="contact-link"
//             >
//               LinkedIn
//             </a>
//             {" / "}
//             <a
//               href="https://www.instagram.com/franuncal.dev/"
//               target="_blank"
//               rel="noreferrer"
//               className="contact-link"
//             >
//               Instagram
//             </a>
//             {" / "}
//             <a
//               href="https://wa.me/2324469630"
//               target="_blank"
//               rel="noreferrer"
//               className="contact-link"
//             >
//               WhatsApp
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

import "./Contacto.css";
import { Link } from "react-router-dom";

export const Contacto = () => {
  return (
    <section className="contact-section">
      {/* Botón HOME arriba */}
      <Link to="/" className="home-link">
        HOME
      </Link>

      {/* Copyright vertical abajo izquierda */}
      <div className="copyright">© {new Date().getFullYear()}</div>

      <div className="contact-container">
        <div className="contact-availability">
          <span className="availability-dot" />
          Disponible para nuevos proyectos
        </div>

        <h1 className="contact-title">Hablemos.</h1>

        <p className="contact-description">
          Contame tu proyecto y te respondo en menos de 24hs.
        </p>

        <div className="contact-info">
          {/* Canales de contacto directo */}
          <div className="contact-group">
            <span className="contact-group-label">Contacto directo</span>
            <div className="contact-group-links">
              <a
                href="https://wa.me/2324469630"
                target="_blank"
                rel="noreferrer"
                className="contact-link contact-link--primary"
              >
                WhatsApp →
              </a>
              <a
                href="mailto:franuncal@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact-link contact-link--primary"
              >
                franuncal@gmail.com →
              </a>
            </div>
          </div>

          {/* Canales de seguimiento */}
          <div className="contact-group">
            <span className="contact-group-label">En internet</span>
            <div className="contact-group-links">
              <a
                href="https://www.linkedin.com/in/franuncal/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/franuncal.dev/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

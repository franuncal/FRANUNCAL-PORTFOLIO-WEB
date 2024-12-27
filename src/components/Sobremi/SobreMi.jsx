import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"; // Importar los iconos
import "./SobreMi.css";
import img from "../../assets/img/4.png";
import cv from "../../assets/pdf/UncalFrancisco.pdf";

export const SobreMi = () => {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="container">
        <div className="image" data-aos="fade-left">
          <img src={img} alt="Imagen de perfil" />
        </div>
        <div className="text">
          <h2>Hola, soy Fran</h2>
          <p>
            Soy programador web freelance con más de 3 años de experiencia en la
            creación de sitios web personalizados. Especializado en React y
            JavaScript, aporto soluciones eficientes a proyectos desafiantes. Mi
            enfoque freelance me ha permitido colaborar con clientes de diversas
            industrias, ofreciendo soluciones a medida. Creo en la comunicación
            clara para asegurar la satisfacción del cliente en todo el proceso
            de desarrollo.
          </p>
          <div className="button-group">
            <a href="/contacto" className="btn btn-primary">
              Contáctame
            </a>
            <a href={cv} download className="btn btn-secondary">
              Descargar CV
            </a>
          </div>
        </div>
      </div>

      {/* Nueva sección de Tecnologías */}
      <div className="tecnologias">
        <h2>Tecnologías</h2>
        <div className="iconos-tecnologias">
          <FaHtml5 className="icon icon-html" />
          <FaCss3Alt className="icon icon-css" />
          <FaJs className="icon icon-js" />
          <FaReact className="icon icon-react" />
          <FaGitAlt className="icon icon-git" />
          <FaGithub className="icon icon-github" />
        </div>
      </div>
    </section>
  );
};

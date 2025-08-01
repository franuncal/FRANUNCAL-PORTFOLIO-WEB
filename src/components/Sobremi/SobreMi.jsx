import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaNpm,
} from "react-icons/fa";
import "./SobreMi.css";
import img from "../../assets/img/logoB2.webp";
import cv from "../../assets/pdf/FranciscoUncalApraiz.pdf";

export const SobreMi = () => {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="container">
        <div className="image" data-aos="fade-left">
          <img src={img} alt="Logo personal" className="profile-logo" />
        </div>
        <div className="text">
          <h2>Hola, soy Fran</h2>
          <p>
            Frontend Developer con más de 4 años creando sitios web modernos y
            funcionales. Me apasiona transformar ideas en experiencias digitales
            únicas, mezclando estilo, detalle y personalidad en cada proyecto.
            Trabajo con foco en la colaboración y la innovación, porque cada
            cliente y cada equipo merecen resultados que realmente destaquen.
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
      <div className="tecnologias">
        <h2>Habilidades Técnicas</h2>
        <div className="iconos-tecnologias">
          <FaHtml5 className="icon icon-html" />
          <FaCss3Alt className="icon icon-css" />
          <FaJs className="icon icon-js" />
          <FaReact className="icon icon-react" />
          <FaGitAlt className="icon icon-git" />
          <FaGithub className="icon icon-github" />
          <FaAws className="icon icon-aws" />
          <FaNpm className="icon icon-npm" />
        </div>
      </div>
    </section>
  );
};

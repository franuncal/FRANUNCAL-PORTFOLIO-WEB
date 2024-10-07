import "./Proyectos.css";
import img from "../../assets/img/img-proyectos/bodas1.png";
import img1 from "../../assets/img/img-proyectos/cm1.png";
import img2 from "../../assets/img/img-proyectos/fr1.png";
import img3 from "../../assets/img/img-proyectos/ud.png";

import logo from "../../assets/img-logos/html.png";
import logo1 from "../../assets/img-logos/css.png";
import logo2 from "../../assets/img-logos/js.png";
import logo3 from "../../assets/img-logos/react.png";

const Proyectos = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Mis proyectos</h2>
      <p>
        Estos son algunos de los proyectos que he creado a lo largo de mi
        carrera como programador.
      </p>
      <div className="projects-container">
        <div className="project-card">
          <img src={img2} alt="Proyecto 3" />
          <div className="project-info">
            <h3>FR - Realizador Audiovisual</h3>
            <p>
              Portfolio profesional para un realizador audiovisual, donde se
              muestran sus proyectos más importantes. El sitio invita a los
              visitantes a explorar su trabajo mediante galerías visuales y
              permite fácilmente programar reuniones para futuros proyectos.
            </p>
            {/* Contenedor para los logos de las tecnologías */}
            <div className="tech-logos">
              <img src={logo} alt="HTML Logo" />
              <img src={logo1} alt="CSS Logo" />
              <img src={logo2} alt="JavaScript Logo" />
              <img src={logo3} alt="React Logo" />
            </div>
            <a href="https://federementeria.com/" target="_blank">
              Sitio Web
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src={img} alt="Proyecto 1" />
          <div className="project-info">
            <h3>Bodas Click</h3>
            <p>
              Aplicación web diseñada para facilitar la planificación de bodas.
              Los usuarios pueden gestionar listas de invitados, organizar
              eventos y coordinar todos los detalles de una boda desde una única
              plataforma.
            </p>
            {/* Contenedor para los logos de las tecnologías */}
            <div className="tech-logos">
              <img src={logo} alt="HTML Logo" />
              <img src={logo1} alt="CSS Logo" />
              <img src={logo2} alt="JavaScript Logo" />
              {/* <img src={logo3} alt="React Logo" /> */}
            </div>
            <a href="https://bodas.click/" target="_blank">
              Sitio Web
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src={img1} alt="Proyecto 2" />
          <div className="project-info">
            <h3>Chand Mantra</h3>
            <p>
              Landing page dedicada a la venta de espejos de diseño
              personalizados. La página se centra en presentar los productos de
              manera visual, con secciones claras que guían al usuario hacia la
              compra de manera eficiente.
            </p>
            <div className="tech-logos">
              <img src={logo} alt="HTML Logo" />
              <img src={logo1} alt="CSS Logo" />
              <img src={logo2} alt="JavaScript Logo" />
              {/* <img src={logo3} alt="React Logo" /> */}
            </div>
            <a href="https://chandmantra.com/" target="_blank">
              Sitio Web
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src={img3} alt="Proyecto 2" />
          <div className="project-info">
            <h3>Unqui Devs</h3>
            <p>
              Sitio web corporativo para una pyme que ofrece soluciones de
              desarrollo y diseño web. Muestra los servicios de la empresa con
              secciones informativas que ayudan a los clientes a entender el
              valor de los productos ofrecidos.
            </p>
            {/* Contenedor para los logos de las tecnologías */}
            <div className="tech-logos">
              <img src={logo} alt="HTML Logo" />
              <img src={logo1} alt="CSS Logo" />
              <img src={logo2} alt="JavaScript Logo" />
              {/* <img src={logo3} alt="React Logo" /> */}
            </div>
            <a href="https://unquidev.com/" target="_blank">
              Sitio Web
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;

import "./Proyectos.css";
import img from "../../assets/img/img-proyectos/N1.webp";
import img1 from "../../assets/img/img-proyectos/N8.webp";
import img2 from "../../assets/img/img-proyectos/N2.webp";
import img3 from "../../assets/img/img-proyectos/unqui2.webp";
import img4 from "../../assets/img/img-proyectos/N6.webp";
import img5 from "../../assets/img/img-proyectos/N5.webp";
// import img6 from "../../assets/img/img-proyectos/mi1.webp";
import img7 from "../../assets/img/img-proyectos/N3.webp";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; // Importa los íconos de react-icons

const Proyectos = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Mis proyectos</h2>
      <p>
        Estos son algunos de los proyectos que he creado a lo largo de mi
        carrera como programador.
      </p>
      <div className="projects-container">
        {/* Grand Alyson */}
        <div className="project-card">
          <img src={img} alt="Portfolio del realizador audiovisual" />
          <div className="project-info">
            <h3>Grand Alyson - Proyecto Inmobiliario</h3>
            <p>
              Landing page inmobiliaria desarrollada para Grand Alyson, proyecto
              residencial orientado a mayores de 45 años. El sitio destaca su
              propuesta de vida, ubicación y amenities, transmitiendo calidez y
              confianza para facilitar consultas y ventas.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://experienciagrandalyson.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div>
        {/* Fede */}
        <div className="project-card">
          <img src={img2} alt="Portfolio del realizador audiovisual" />
          <div className="project-info">
            <h3>FR - Realizador Audiovisual</h3>
            <p>
              Portfolio profesional de un realizador audiovisual, destacando sus
              proyectos más importantes. El sitio permite explorar su trabajo
              visualmente y facilita la programación de reuniones para futuros
              proyectos.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://federementeria.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div>
        {/* Silvestre */}
        <div className="project-card">
          <img src={img5} alt="Silvestre DDL" />
          <div className="project-info">
            <h3>Silvestre - Dulce de Leche</h3>
            <p>
              Sitio web para Silvestre - Tienda Natural, que refleja la esencia
              de la marca con imágenes y descripciones claras. Facilita la
              exploración de productos, conocimiento de su filosofía y compras
              seguras.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://silvestreddl.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div>
        {/* Menta y Limon */}
        <div className="project-card">
          <img src={img7} alt="Alquileres Temporales" />
          <div className="project-info">
            <h3>Menta&Limon Cumbia</h3>
            <p>
              Landing page creada para la banda de cumbia Menta y Limón,
              mostrando su identidad musical y próximos shows. El sitio combina
              un diseño vibrante con contenido multimedia, permitiendo conocer
              su propuesta artística y agilizando las contrataciones para
              eventos.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://mentaylimoncumbia.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div>
        {/* Temistocles */}
        <div className="project-card">
          <img src={img4} alt="Cabanas Temistocles" />
          <div className="project-info">
            <h3>Cabañas Temistocles</h3>
            <p>
              Sitio web para Cabañas Temistocles en Esquel, que destaca sus
              instalaciones y servicios a través de imágenes y descripciones.
              Facilita la exploración de las cabañas y la realización de
              reservas de manera fácil y efectiva.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://temistoclesesquel.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div>
        {/* Bodas */}
        {/* <div className="project-card">
          <img src={img} alt="Bodas Click" />
          <div className="project-info">
            <h3>Bodas Click</h3>
            <p>
              Aplicación web diseñada para facilitar la planificación de bodas.
              Los usuarios pueden gestionar listas de invitados, organizar
              eventos y coordinar todos los detalles de una boda desde una única
              plataforma.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
            </div>
            <a href="https://bodas.click/" target="_blank" rel="noreferrer">
              Sitio Web
            </a>
          </div>
        </div> */}
        {/* Chand Mantra */}
        <div className="project-card">
          <img src={img1} alt="Chand Mantra" />
          <div className="project-info">
            <h3>Chand Mantra - Espejos de Diseño</h3>
            <p>
              Landing page dedicada a la venta de espejos de diseño
              personalizados. La página se centra en presentar los productos de
              manera visual, con secciones claras que guían al usuario hacia la
              compra de manera eficiente.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
            </div>
            <a href="https://chandmantra.com/" target="_blank" rel="noreferrer">
              Sitio Web
            </a>
          </div>
        </div>
        {/* Unqui Dev */}
        <div className="project-card">
          <img src={img3} alt="Sitio web corporativo Unqui Devs" />
          <div className="project-info">
            <h3>Unqui Devs - Desarrollo Web</h3>
            <p>
              Sitio web de Unqui Devs, dedicado a ofrecer soluciones web
              personalizadas. Presenta proyectos realizados para diversos
              clientes, con énfasis en diseño atractivo y desarrollo funcional
              de sitios web a medida.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
            </div>
            <a href="https://unquidev.com/" target="_blank" rel="noreferrer">
              Sitio Web
            </a>
          </div>
        </div>
        {/* M.I Logistica */}
        {/* <div className="project-card">
          <img src={img6} alt="M.I Logistica" />
          <div className="project-info">
            <h3>M.I Logística y Comercio Internacional</h3>
            <p>
              Desarrollo del sitio web de Mi Logística Internacional presenta
              los servicios de transporte y logística de la empresa, facilitando
              el contacto y la información clave.
            </p>
            <div className="tech-logos">
              <FaHtml5 className="icon icon-html" />
              <FaCss3Alt className="icon icon-css" />
              <FaJs className="icon icon-js" />
              <FaReact className="icon icon-react" />
            </div>
            <a
              href="https://milogisticainternacional.com"
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Proyectos;

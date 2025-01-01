import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            © {new Date().getFullYear()} Fran Uncal | Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

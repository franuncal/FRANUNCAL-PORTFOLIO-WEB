import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home"; // Nuevo componente Home
import { Contacto } from "./components/Contacto/Contacto";
import Projects from "./components/Proyectos/Proyectos";
import { Footer } from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* Ruta para la página de contacto */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

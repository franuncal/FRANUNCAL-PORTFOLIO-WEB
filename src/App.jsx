import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home"; // Nuevo componente Home
import { Contacto } from "./components/Contacto/Contacto";
import Projects from "./components/Proyectos/Proyectos";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      gsap.to(document.body, {
        backgroundPosition: `${x * 30}px ${y * 30}px`,
        duration: 0.6,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

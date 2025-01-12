import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();


  const handleNavigation = (hash: string) => {
    navigate("/"); // Navega a la página principal
    setTimeout(() => {
     
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); 
  };


  const handleHomeNavigation = () => {
    navigate("/"); // Redirige a la página principal
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, 100); 
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-3 bg-white fixed top-0 z-50 border-b border-gray-300 shadow-sm">
      <button onClick={handleHomeNavigation} className="flex items-center">
        <img
          src="/images/Logo_azul.png"
          alt="Creditea.me"
          className="w-auto h-10 object-contain"
        />
      </button>

      {/* Elementos del menú */}
      <ul className="hidden sm:flex items-center flex-wrap text-sm text-gray-700 space-x-4 sm:space-x-6 lg:space-x-10">
        <li>
          <button
            onClick={() => handleNavigation("#como")}
            className="hover:text-blue-500"
          >
            Cómo funciona
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("#calculadora")}
            className="hover:text-blue-500"
          >
            Calculadora
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("#faqs")}
            className="hover:text-blue-500"
          >
            FAQs
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("#contacto")}
            className="hover:text-blue-500"
          >
            Inversores
          </button>
        </li>
        <li>
          <a
            href="https://wa.me/573245192378"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Contacto
          </a>
        </li>
      </ul>

      {/* Botones de acción */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <button className="px-4 py-2 bg-primary text-Quaternary rounded-full hover:bg-blue-600">
          Solicitar préstamo
        </button>
        <button className="px-4 py-2 border border-gray-700 text-gray-700 rounded-full hover:bg-gray-100">
          Iniciar sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

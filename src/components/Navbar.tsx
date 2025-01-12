import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-3 bg-white fixed top-0 z-50 border-b border-gray-300 shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/Logo_azul.png"
          alt="Creditea.me"
          className="w-auto h-10 object-contain"
        />
      </div>

      {/* Menu items */}
      <ul className="hidden sm:flex items-center flex-wrap text-sm text-gray-700 space-x-4 sm:space-x-6 lg:space-x-10">
        <li>
          <a href="#como" className="hover:text-blue-500">
            Cómo funciona
          </a>
        </li>
        <li>
          <a href="#calculadora" className="hover:text-blue-500">
            Calculadora
          </a>
        </li>
        <li>
          <a href="#faqs" className="hover:text-blue-500">
            FAQs
          </a>
        </li>
        <li>
          <a href="#contacto" className="hover:text-blue-500">
            Inversores
          </a>
        </li>
        <li>
          {/* numero de whatsapp */}
          <a href="https://wa.me/573245192378" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Contacto
          </a>
        </li>
      </ul>

      {/* Action buttons */}
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

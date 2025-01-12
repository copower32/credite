import React, { useState } from 'react';

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/Logo_azul.png" // Ruta de la imagen desde la carpeta public
            alt="Creditea.me"
            className="w-auto h-10 object-contain"
          />
        </div>

        {/* Hamburger menu button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t border-gray-200`}
      >
        <ul className="flex flex-col space-y-2 px-4 py-3 text-gray-700">
          <li>
            <a
              href="#como"
              className="block py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleMenu}
            >
              Cómo funciona
            </a>
          </li>
          <li>
            <a
              href="#calculadora"
              className="block py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleMenu}
            >
              Calculadora
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className="block py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleMenu}
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="block py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleMenu}
            >
              Inversores
            </a>
          </li>
          <li>
              <a href="https://wa.me/573245192378" target="_blank" rel="noopener noreferrer"
              className="block py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleMenu}
            >
              Contacto
            </a>
          </li>
        </ul>
        <div className="flex flex-col items-center space-y-2 px-4 py-3">
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Solicitar préstamo
          </button>
          <button className="w-full px-4 py-2 border border-gray-700 text-gray-700 rounded-full hover:bg-gray-100">
            Iniciar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/Logo_azul.png" // Ruta de la imagen desde la carpeta public
          alt="Creditea.me"
          className="w-auto h-10 object-contain" // Ajusta la altura de la imagen
        />
      </div>

      {/* Menu items */}
      <ul className="flex items-center space-x-4 text-sm text-gray-700">
        <li><a href="#como" className="hover:text-blue-500">Cómo funciona</a></li>
        <li><a href="#calculadora" className="hover:text-blue-500">Calculadora</a></li>
        <li><a href="#faqs" className="hover:text-blue-500">FAQs</a></li>
        <li><a href="#inversores" className="hover:text-blue-500">Inversores</a></li>
        <li><a href="#contacto" className="hover:text-blue-500">Contacto</a></li>
      </ul>

      {/* Action buttons */}
      <div className="flex items-center space-x-4">
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

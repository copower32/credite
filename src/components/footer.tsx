import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A]/80 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/images/Logo_blanco.png"
              alt="Creditea.me"
              className="h-8 mb-4"
            />
            <p className="text-tertiary">Tu crédito fácil, rápido y a la medida.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Páginas</h3>
            <ul className="space-y-2">
              <li><a href="#como" className="text-tertiary hover:text-white">Cómo funciona</a></li>
              <li><a href="#calculadora" className="text-tertiary hover:text-white">Calculadora</a></li>
              <li><a href="#faqs" className="text-tertiary hover:text-white">FAQs</a></li>
              <li><a href="#inversores" className="text-tertiary hover:text-white">Inversores</a></li>
              <li><a href="#contacto" className="text-tertiary hover:text-white">Contacto</a></li>              </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-tertiary hover:text-white">Términos y condiciones</a></li>
              <li><a href="#" className="text-tertiary hover:text-white">Política de privacidad</a></li>
              <li><a href="#" className="text-tertiary hover:text-white">Política de cookies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-tertiary">
              <li>contacto@creditea.me</li>
              <li>+57 324 519 2378</li>
              <li className="text-sm">CL 16 # 1 - 67 TO 20 AP 604, Chía, Cundinamarca</li>
              <li>NIT: 901782780</li>
            </ul>
          </div>
        </div>
        <div className="text-tertiary text-sm text-center mt-8">
          Copyright 2024 Creditea.me SAS All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;

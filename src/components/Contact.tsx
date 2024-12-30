import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contacto" className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:pb-0 lg:pl-12">
      <div className="lg:w-1/2 max-w-xl text-center lg:text-left">
        <h2 className="text-4xl font-bold text-quaternary mb-4">
          Invierte en Creditea.me y haz <span className="text-primary">crecer</span> tu dinero
        </h2>
        <p className="text-tertiary mb-8">
          Forma parte de nuestra plataforma y accede a una oportunidad de inversión segura y rentable. Ayuda a financiar micropréstamos que impulsan a personas y pequeñas empresas, mientras generas ingresos pasivos con atractivas tasas de retorno.
        </p>
        <button className="bg-primary text-Quaternary px-6 py-3 rounded-lg hover:opacity-90">
          Quiero saber más
        </button>
      </div>
      <div className="lg:w-1/2 flex justify-end hidden lg:flex">
        <img
          src="images/image 5.png"
          alt="Inversionista"
          className="w-full max-w-md lg:max-w-xl h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Contact;
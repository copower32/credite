import React from "react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

// Componente para cada paso
const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-Quaternary font-semibold">
      {number}
    </div>
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  </div>
);

// Componente principal
const LoanProcess: React.FC = () => {
  const steps = [
    {
      title: "Regístrate en minutos",
      description: "Accede a nuestra plataforma y crea tu cuenta con tus datos básicos."
    },
    {
      title: "Sube tu documentación",
      description: "Adjunta los documentos solicitados de forma segura y sin complicaciones."
    },
    {
      title: "Solicita tu préstamo",
      description: "Solicita el monto, plazo y condiciones que más se ajusten a tus necesidades."
    },
    {
      title: "Recibe tu dinero rápidamente",
      description: "Tras una revisión ágil de tu solicitud, aprobamos tu préstamo y el dinero llega a tu cuenta."
    }
  ];

  return (
    <section id="como" className="w-full bg-transparent px-6 py-12 lg:px-0 lg:py-0" >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Sección de texto */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Así de fácil es obtener tu préstamo
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        {/* Imagen (oculta en móviles) */}
        <div className="w-full lg:w-1/2 relative hidden md:block">
          <img
            src="/images/image 6.png"
            alt="Woman using mobile app"
            className="relative z-10 w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LoanProcess;

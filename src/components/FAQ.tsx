import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Todas las preguntas cerradas por defecto.

  const faqs: FAQItem[] = [
    {
      question: "¿Qué requisitos necesito para solicitar un préstamo?",
      answer: `Para solicitar un préstamo con nosotros, solo necesitas:
      ● Ser mayor de 18 años y residir en Colombia.
      ● Tener cédula de ciudadanía o extranjería.
      ● Demostrar ingresos o capacidad de pago.
      ● Completar el formulario y enviar la documentación solicitada.`,
    },
    {
      question: "¿Cuánto dinero puedo solicitar?",
      answer: `Puedes solicitar desde $200,000 COP hasta:
      ● $2,000,000 COP si eres persona natural.
      ● $8,000,000 COP si eres una empresa o persona jurídica.
      El monto aprobado dependerá de tu perfil financiero y tu historial de pagos.`,
    },
    {
      question: "¿En cuánto tiempo recibiré el dinero si mi préstamo es aprobado?",
      answer: `El dinero será transferido a tu cuenta bancaria en un plazo de 24 horas hábiles después de aprobarse tu préstamo y firmar los documentos.`,
    },
    {
      question: "¿Cuáles son las tasas de interés y los plazos de pago?",
      answer: `Nuestras tasas de interés y plazos varían según tu perfil financiero:
      ● Tasas de interés: Se informan antes de firmar el contrato y cumplen con la normativa legal vigente en Colombia.
      ● Plazos de pago: Desde 3 hasta 12 meses con cuotas mensuales fijas.
      Antes de confirmar tu préstamo, te mostraremos todos los detalles claramente.`,
    },
    {
      question: "¿El proceso es completamente en línea?",
      answer: `Sí, todo el proceso es 100% digital:
      ● Regístrate en nuestra plataforma.
      ● Completa el formulario y sube tus documentos.
      ● Si tu préstamo es aprobado, firma el contrato digitalmente.
      ● Recibe el dinero en tu cuenta bancaria.
      Sin filas ni trámites presenciales.`,
    },
    {
      question: "¿Puedo hacer pagos anticipados sin penalización?",
      answer: `Sí, puedes realizar pagos anticipados, incluyendo el pago de cuotas futuras, sin penalización ni cargos adicionales. Sin embargo, el pago anticipado no modificará la estructura del préstamo, es decir, las cuotas, plazos e intereses establecidos al inicio del contrato se mantendrán sin alteraciones.`,
    },
    {
      question: "¿Qué sucede si me retraso con el pago de mi cuota?",
      answer: `Si te atrasas en tu pago:
      ● Se aplicarán intereses de mora según tu contrato.
      ● Te enviaremos recordatorios para ayudarte a regularizar tu deuda.
      ● Un retraso prolongado podría afectar tu historial crediticio y generar acciones de cobro.
      Para evitar estos inconvenientes, te recomendamos siempre pagar a tiempo.`,
    },
  ];

  return (
    <div id="faqs" className="max-w-3xl mx-auto py-8 px-4 sm:px-6 md:px-8">
      {/* Título centrado */}
      <h2 className="text-3xl font-semibold text-center text-[#292D32] mb-6">Preguntas Frecuentes</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="border-b-2 border-gray-400 py-4">
          <button
            className="w-full flex justify-between items-center focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="text-[#292D32] font-bold text-left">{faq.question}</h3>
            {openIndex === index ? (
              <Minus className="flex-shrink-0 text-black" />
            ) : (
              <Plus className="flex-shrink-0 text-black" />
            )}
          </button>
          {openIndex === index && (
            <div className="mt-2">
              <p className="text-tertiary whitespace-pre-line">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "¿Qué requisitos necesito para solicitar un préstamo?",
      answer: "Debes ser mayor de edad, tener tu cédula de ciudadanía al día, demostrar ingresos (para personas naturales) o presentar los documentos de tu empresa si eres persona jurídica."
    },
    {
      question: "¿Cuánto dinero puedo solicitar?",
      answer: "Nuestros préstamos van desde $200.000 hasta $8.000.000 COP, dependiendo de tu perfil crediticio y capacidad de pago. El monto final será evaluado según tus ingresos y historial crediticio."
    },
    {
      question: "¿En cuánto tiempo recibiré el dinero si mi préstamo es aprobado?",
      answer: "Una vez aprobado tu préstamo, el desembolso se realiza en menos de 24 horas directamente a tu cuenta bancaria. El proceso de aprobación suele tomar entre 1 y 2 horas."
    },
    {
      question: "¿Cuáles son las tasas de interés y los plazos de pago?",
      answer: "Ofrecemos tasas competitivas que varían según el plazo y monto del préstamo. Los plazos pueden ser de 12, 24 o 36 meses, con cuotas fijas mensuales adaptadas a tu capacidad de pago."
    },
    {
      question: "¿El proceso es completamente en línea?",
      answer: "Sí, todo el proceso es 100% digital. Desde la solicitud hasta la firma del contrato, todo se realiza en línea sin necesidad de visitar una oficina física."
    },
    {
      question: "¿Puedo hacer pagos anticipados sin penalización?",
      answer: "Sí, puedes realizar pagos anticipados o cancelar tu préstamo de forma anticipada sin ningún tipo de penalización o costo adicional."
    },
    {
      question: "¿Qué sucede si me retraso con el pago de mi cuota?",
      answer: "En caso de retraso, se aplicarán intereses de mora según las tasas vigentes. Te recomendamos contactarnos inmediatamente para buscar alternativas de pago y evitar afectaciones a tu historial crediticio."
    }
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
              <p className="text-tertiary">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

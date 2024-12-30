import React from "react";
import { Quote } from "lucide-react";

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Juan P., Cali",
      role: "Empresario",
      text: "El proceso fue rápido y claro. Necesitaba un préstamo para mi negocio y en cuestión de horas todo estaba aprobado. Lo recomiendo totalmente.",
      avatar: "/images/image 3.jpg"
    },
    {
      name: "Camila R., Bogotá",
      role: "Enfermera",
      text: "Gracias a esta plataforma pude cubrir un imprevisto personal sin complicaciones. La atención y el proceso son muy eficientes.",
      avatar: "/images/image 2.jpg"
    },
    {
      name: "Rosmery M., Cartagena",
      role: "Agente Financiero",
      text: "Nunca había sido tan fácil solicitar un préstamo. Todo online, sin trámites innecesarios y con cuotas adaptadas a mi presupuesto. Excelente servicio.",
      avatar: "/images/image 4.jpg"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#0F5F963D] p-6 rounded-lg h-[350px] max-w-xs mx-auto"
            >
              {/* Icono de comillas con fondo blanco circular */}
              <div className="bg-white rounded-full p-2 mb-4 inline-block">
                <Quote size={24} className="text-primary" />
              </div>

              <p className="text-[#292D32] mb-6">"{review.text}"</p>
              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-[#292D32]">{review.name}</h4>
                  <p className="text-sm text-[#292D32]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

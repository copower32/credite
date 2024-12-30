import React, { useState, useEffect } from "react";

// Función para formatear números con sufijos
const formatNumber = (value: number): string => {
  if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1) + "B";
  if (value >= 1_000_000) return (value / 1_000_000).toFixed(1) + "M";
  if (value >= 1_000) return (value / 1_000).toFixed(1) + "k";
  return value.toString();
};

// Definimos las props para el componente Counter
interface CounterProps {
  end: number; // Valor final
  duration: number; // Duración de la animación en milisegundos
}

// Componente de conteo animado
const Counter: React.FC<CounterProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10); // Incremento progresivo
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end); // Finaliza en el valor exacto
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{formatNumber(Math.ceil(count))}</span>;
};

const StatsBanner: React.FC = () => {
  return (
    <section className="w-[90%] mx-auto bg-[#0F5F9633] py-12 rounded-lg flex items-center justify-center mt-[-32px] shadow-md sm:w-[85%] md:max-w-[90%]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg text-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">
            +<Counter end={13} duration={2000} />
          </h2>
          <p className="text-gray-600 text-sm">Años de experiencia</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">
            +<Counter end={2100000000} duration={2500} />
          </h2>
          <p className="text-gray-600 text-sm">COP Prestados</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">
            +<Counter end={1200} duration={1500} />
          </h2>
          <p className="text-gray-600 text-sm">Clientes satisfechos</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">100%</h2>
          <p className="text-gray-600 text-sm">Digital y seguro</p>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;

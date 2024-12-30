import React, { useEffect, useRef } from "react";


interface Logo {
  src: string;
  alt: string;
}

interface LogoCarouselProps {
  logos: Logo[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; 
    const interval = 20; 

    const scroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= container.scrollWidth / 2) {
        
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
    };

    const scrollInterval = setInterval(scroll, interval);

    return () => clearInterval(scrollInterval); 
  }, []);


  const duplicatedLogos = [...logos, ...logos];

  return (
    <div id="inversores" className="overflow-hidden whitespace-nowrap relative w-full">
      <div
        ref={containerRef}
        className="flex items-center space-x-6"
        style={{ width: "max-content" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="w-28 h-16 md:w-32 md:h-20 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Elegirnos: React.FC = () => {
  // Definición de los logos
  const logos = [
    { src: "/logos/image 3.png", alt: "Forbes" },
    { src: "/logos/image 4.png", alt: "FCC" },
    { src: "/logos/image 5.png", alt: "Industria y Comercio" },
    { src: "/logos/image 6.png", alt: "Cámara de Comercio de Bogotá" },
    { src: "/logos/image 7.png", alt: "AWS" },
  ];


  const features = [
    {
      icon: "/logos/security.png",
      title: "Aprobación rápida",
      description:
        "Resolvemos tu solicitud en menos de 24h, sin trámites interminables.",
    },
    {
      icon: "/logos/pie.png",
      title: "Flexibilidad",
      description:
        "Préstamos personalizados para particulares y pequeñas empresas.",
    },
    {
      icon: "/logos/analytics.png",
      title: "100% online y seguro",
      description: "Tu información está protegida con la mejor tecnología.",
    },
  ];

  return (
    <section className="bg-transparent py-10 px-6 md:px-20">
      <div className="mb-12 max-w-4xl mx-auto">
        <LogoCarousel logos={logos} />
      </div>

      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-Quaternary">
        ¿Por qué elegirnos?
      </h2>

      {/* Características */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-white bg-opacity-80 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-secondary icon-Quaternary flex items-center justify-center p-3">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-8 h-8 object-contain brightness-0 invert"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-Quaternary">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Elegirnos;

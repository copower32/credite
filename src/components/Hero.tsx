const LoanText = () => {
  return (
    <div className="text-left w-full lg:w-1/2 text-black px-4">
      <h1 className="text-4xl font-bold mb-4">
        Tu <span className="text-primary">préstamo</span>
        <br /> rápido, fácil y
        <br /> 100% en línea.
      </h1>
      <p className="text-gray-700 mb-6">
        Préstamos rápidos <strong>desde 200 mil hasta 8 millones COP</strong>, ajustados a tu perfil, ya seas particular o empresa. Sin trámites eternos, todo 100% online y en minutos.
      </p>
      <div className="flex items-center mb-6">
        <div className="flex -space-x-2">
          <img
            src="/images/image 2.jpg"
            alt="Cliente 1"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img
            src="/images/image 3.jpg"
            alt="Cliente 2"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img
            src="/images/image 4.jpg"
            alt="Cliente 3"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
        <span className="ml-4 font-semibold">+1.2k</span>
        <span className="text-gray-500 ml-1">Clientes satisfechos</span>
      </div>
      <button className="bg-primary text-Quaternary py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
        Solicita tu préstamo ahora
      </button>
    </div>
  );
};

const LoanImage = () => {
  return (
    <div className="relative hidden md:flex items-center justify-center w-full lg:w-1/2">
      <img
        src="/images/image 1.png"
        alt="Clientes felices"
        className="w-full h-auto"
      />
      <svg
        className="absolute -top-10 -left-10 w-32 h-32 text-blue-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <circle cx="50" cy="50" r="40" opacity="0.2" />
        <path d="M30 50a20 20 0 1 1 40 0 20 20 0 1 1 -40 0" opacity="0.4" />
      </svg>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="py-12 bg-transparent px-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto">
        <LoanText />
        <LoanImage />
      </div>
    </section>
  );
};

export default Hero;
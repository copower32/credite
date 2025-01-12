import React from 'react';
import Hero from './components/Hero';
import LoanProcess from './components/LoanProcess';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Slidert from './components/Slidert';
import Elegirnos from './components/Elegirnos';
import Calculadora from './components/Calculadora';
import FAQ from './components/FAQ';
import Footer from './components/footer';
const App: React.FC = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center max-w-[1440px] mx-auto scroll-smooth"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <Hero />
      <Slidert />
      <Elegirnos />
      <LoanProcess />
      <Calculadora />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};


export default App;

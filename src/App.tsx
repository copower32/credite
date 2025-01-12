import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import LoanProcess from './components/LoanProcess';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Slidert from './components/Slidert';
import Elegirnos from './components/Elegirnos';
import Calculadora from './components/Calculadora';
import FAQ from './components/FAQ';
import Footer from './components/footer';
import Terminos from './components/Terms';
import PoliticaPrivacidad from './components/PrivacyPolicy';
import PoliticaCookies from './components/CookiesPolicy';

const App: React.FC = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center max-w-[1440px] mx-auto scroll-smooth"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <Routes>
        {/* Página principal con todos los componentes */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Slidert />
              <Elegirnos />
              <LoanProcess />
              <Calculadora />
              <Reviews />
              <FAQ />
              <Contact />
              <Footer />
            </>
          } 
        />

        {/* Páginas legales */}
        <Route path="/terminos" element={<> <Terminos /> <Footer /> </>  } />
        <Route path="/politica-privacidad" element={<> <PoliticaPrivacidad />  <Footer /> </>} />
        <Route path="/politica-cookies" element={<><PoliticaCookies /> <Footer />  </>} />
      </Routes>
    </div>
  );
};

export default App;

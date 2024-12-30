import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar'; 

const ResponsiveNavbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    window.addEventListener('resize', handleResize);
 
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      {isMobile ? <MobileNavbar /> : <Navbar />}
    </header>
  );
};

export default ResponsiveNavbar;
export {};
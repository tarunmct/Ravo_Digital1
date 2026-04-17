import React, { useRef, useEffect } from 'react';

import renault from '../../assets/renault.png';
import skLogo from '../../assets/SK Logo.png';
import carCare from '../../assets/car care.png';
import greenTrends from '../../assets/greentrends.png';
import artboard from '../../assets/Artboard.jpeg';
import fotonyx from '../../assets/Fotonyx.jpeg';
import max from '../../assets/max.png';
import lookCool from '../../assets/look_cool.png';

const clients = [
  { name: 'Renault', logo: renault },
  { name: 'SK Construction', logo: skLogo },
  { name: 'Car Care', logo: carCare },
  { name: 'Green Trends', logo: greenTrends },
  { name: 'Little Soe', logo: artboard },
  { name: 'Fotonyx', logo: fotonyx },
  { name: 'Max', logo: max },
  { name: 'Look Kool', logo: lookCool },
];

const Clients = () => {
  const loopClients = [...clients, ...clients, ...clients, ...clients];
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.client-logo-wrapper');
        const screenCenter = window.innerWidth / 2;
        
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.left + rect.width / 2;
          const distance = Math.abs(screenCenter - elCenter);
          
          // Smooth magnification active within 250px of the exact viewport center
          const maxScale = 1.4;
          const minScale = 1.0;
          const activationZone = 250; 

          if (distance < activationZone) {
            const intensity = 1 - (distance / activationZone);
            const currentScale = minScale + (maxScale - minScale) * intensity;
            
            // Apply scale and slightly enhance opacity
            el.style.transform = `scale(${currentScale})`;
            el.style.opacity = '1';
          } else {
            el.style.transform = `scale(${minScale})`;
            el.style.opacity = '0.7';
          }
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center focus-visible:outline-none">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Our Happy <span className="underline underline-offset-4 decoration-1 font-bold text-[#fdcd2d] pl-2">Clients</span>
        </h2>
        <p className="text-gray-500 text-lg md:text-xl font-light mt-4">Trusted by great brands</p>
      </div>
      
      {/* Container tracking the marquee */}
      <div className="relative w-full overflow-hidden h-[250px] flex items-center bg-white" ref={containerRef}>
        
        {/* Continuous Linear Marquee */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          
          {loopClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="client-logo-wrapper flex flex-col items-center justify-center w-32 sm:w-40 md:w-52 mx-4 sm:mx-8 md:mx-12 cursor-pointer"
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 sm:max-h-20 md:max-h-24 w-auto object-contain mb-5" 
                loading="lazy"
              />
              <p className="text-sm md:text-base font-bold text-gray-800 text-center whitespace-nowrap">
                {client.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Clients;

import React from 'react';
import { textContent } from '../config/images';
import heroVideo from '../assets/images/hero-video.mp4';
import VideoBackground from './common/VideoBackground';
import BoxMenu from './common/BoxMenu';
import { useUnmaskOnScroll } from '../hooks/useUnmaskOnScroll';

/**
 * Hero - Sección principal con video de fondo y revelación al scroll
 * Open/Closed: Extensible sin modificar el componente
 */
const Hero = () => {
  const [sectionRef, isVisible] = useUnmaskOnScroll();

  return (
    <section ref={sectionRef} className={`relative w-full h-screen bg-white overflow-hidden section-unmask z-10 ${isVisible ? 'visible' : ''}`}>
      {/* Video de fondo */}
      <VideoBackground src={heroVideo} opacity={0.4} rotation={180} />

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-between py-20 px-[70px]">
        {/* Título */}
        <div className="mt-20">
          <h2 className="font-jacquarda text-[150px] leading-none text-dramatic-gray whitespace-pre-line">
            {textContent.hero.title}
          </h2>
        </div>

        {/* BOX menu */}
        <div className="mb-20 cursor-cross-green">
          <BoxMenu
            primaryLabel={textContent.hero.button1}
            secondaryLabels={[textContent.hero.availability, textContent.hero.stock]}
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);

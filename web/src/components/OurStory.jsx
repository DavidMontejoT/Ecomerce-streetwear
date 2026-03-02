import React from 'react';
import { textContent } from '../config/images';
import VideoBackground from './common/VideoBackground';
import { useUnmaskOnScroll } from '../hooks/useUnmaskOnScroll';
import storyVideo from '../assets/images/story-video.mp4';

/**
 * OurStory - Sección "nuestra historia" con video de fondo
 * Single Responsibility: Mostrar el contenido de la historia
 */
const OurStory = () => {
  const [sectionRef, isVisible] = useUnmaskOnScroll();
  const storyTextLeft = "Driven by street culture and digital evolution, we merge urban fashion with reactive technology to create garments that go beyond fabric. For us, clothing is not just style — it's identity, movement, and coded expression. Each piece is designed as an experience, where light, texture, and innovation converge to transform everyday wear into a statement of the future.";

  const storyTextRight = "Driven by street culture and digital evolution, we merge urban fashion with reactive technology to create garments that go beyond fabric. For us, clothing is not just style — it's identity, movement, and coded expression. Each piece is designed as an experience, where light, texture, and innovation converge to transform everyday wear into a statement of the future.";

  return (
    <section ref={sectionRef} className={`relative w-full h-screen bg-dramatic-gray overflow-hidden section-unmask -mt-1 z-30 ${isVisible ? 'visible' : ''}`}>
      {/* Video de fondo */}
      <VideoBackground src={storyVideo} opacity={0.5} rotation={0} />

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Título principal */}
        <div className="px-[70px] pt-20 pb-24">
          <h2 className="font-jacquarda text-[60px] leading-none text-white whitespace-pre-line">
            {textContent.story.title}
          </h2>
        </div>

        {/* Título OUR STORY - Alineado a la derecha */}
        <div className="px-[70px] pb-24 flex justify-end">
          <h3 className="font-darker-grotesque text-[100px] font-normal text-neon-green leading-none">
            OUR STORY
          </h3>
        </div>

        {/* BOX contenedor - Extendido de lateral a lateral */}
        <div className="flex-1 flex items-stretch px-0">
          <div className="w-full flex border-y-2 border-neon-green">
            {/* Caja IZQUIERDA - Letras más pequeñas, texto verde */}
            <div className="flex-1 flex items-end p-8">
              <div className="text-neon-green text-[40px] font-darker-grotesque leading-[0.6]">
                {storyTextLeft}
              </div>
            </div>

            {/* Border vertical divisor - Exacto en el medio */}
            <div className="w-px bg-neon-green"></div>

            {/* Caja DERECHA - Letras más grandes, texto verde, con cursor */}
            <div className="flex-1 flex items-start justify-end p-8 hover:bg-neon-green/10 transition-all cursor-cross-green">
              <div className="text-right text-neon-green text-[50px] font-darker-grotesque leading-[0.6]">
                {storyTextRight}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(OurStory);

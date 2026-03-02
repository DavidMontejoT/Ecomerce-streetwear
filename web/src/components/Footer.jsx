import React from 'react';
import { textContent } from '../config/images';

/**
 * Footer - Pie de página con contacto
 * Single Responsibility: Mostrar información de contacto
 */
const Footer = () => {
  const contactEmail = "montiled@gmail.com";

  return (
    <footer className="relative w-full h-[40vh] bg-dramatic-gray overflow-hidden -mt-1 z-40">
      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Título principal */}
        <div className="px-[70px] pt-8 pb-12">
          <h2 className="font-jacquarda text-[60px] leading-none text-white whitespace-pre-line">
            {textContent.footer.title}
          </h2>
        </div>

        {/* Título CONTACT US - Alineado a la derecha */}
        <div className="px-[70px] pb-12 flex justify-end">
          <h3 className="font-darker-grotesque text-[100px] font-normal text-neon-green leading-none">
            CONTACT US
          </h3>
        </div>

        {/* BOX contenedor - Extendido de lateral a lateral */}
        <div className="flex-1 flex items-stretch px-0">
          <div className="w-full flex border-y-2 border-neon-green">
            {/* Caja IZQUIERDA - Vacía pero presente */}
            <div className="flex-1 flex items-end p-8">
              <div className="text-neon-green text-[40px] font-darker-grotesque leading-[0.6]">
                &nbsp;
              </div>
            </div>

            {/* Border vertical divisor */}
            <div className="w-px bg-neon-green"></div>

            {/* Caja DERECHA - Email - Con cursor personalizado */}
            <div className="flex-1 flex items-start justify-end p-8 hover:bg-neon-green/10 transition-all cursor-cross-green">
              <div className="text-right text-neon-green text-[50px] font-darker-grotesque leading-[0.6]">
                {contactEmail}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);

import React from 'react';
import { textContent } from '../../config/images';

/**
 * SectionHeader - Componente reutilizable para el header de secciones
 * Single Responsibility: Muestra únicamente el header con logo y título
 */
const SectionHeader = ({ title }) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      {/* Rectángulo verde decorativo */}
      <div className="relative">
        <div className="w-[296px] h-[69px] bg-neon-green"></div>
        <div className="absolute top-3 left-[48px]">
          <h1 className="font-jacquarda text-[40px] text-white">
            {textContent.header.brand}
          </h1>
        </div>
      </div>

      {/* Título */}
      {title && (
        <div className="px-[70px] mt-8">
          <h2 className="font-jacquarda text-[60px] leading-none text-white whitespace-pre-line">
            {title}
          </h2>
        </div>
      )}
    </div>
  );
};

export default React.memo(SectionHeader);

import React from 'react';
import { textContent } from '../config/images';

/**
 * Header - Navbar fijo en la esquina superior derecha
 * Single Responsibility: Mostrar el logo de la marca
 */
const Header = () => {
  return (
    <header className="fixed top-0 right-0 z-50">
      {/* Logo - Rectángulo verde decorativo */}
      <div className="relative">
        <div className="w-[296px] h-[69px] bg-neon-green"></div>
        <div className="absolute top-3 left-[48px]">
          <h1 className="font-jacquarda text-[40px] text-white">
            {textContent.header.brand}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);

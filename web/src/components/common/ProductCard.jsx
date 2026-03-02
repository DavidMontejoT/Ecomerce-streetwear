import React from 'react';
import ImageWithFallback from './ImageWithFallback';

/**
 * ProductCard - Componente para tarjetas de producto
 * Single Responsibility: Mostrar información de un producto
 */
const ProductCard = ({ imageSrc, price, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 border-2 border-neon-green bg-neon-green p-2">
      {/* Imagen del producto */}
      <div className="w-[259px] h-[259px] bg-gray-300 overflow-hidden">
        <ImageWithFallback
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
          fallbackText={name}
          fallbackClassName="w-full h-full flex items-center justify-center bg-gray-400"
        />
      </div>

      {/* Precio */}
      <span className="font-darker-grotesque text-[50px] font-normal text-white">
        {price}
      </span>
    </div>
  );
};

export default React.memo(ProductCard);

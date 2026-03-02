import React from 'react';
import { textContent } from '../config/images';
import ImageWithFallback from './common/ImageWithFallback';
import { useUnmaskOnScroll } from '../hooks/useUnmaskOnScroll';
import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import product4 from '../assets/images/product4.png';

const productImages = [product1, product2, product3, product4];

/**
 * Shop - Sección de productos con BOX SHOP contenedor
 * Single Responsibility: Mostrar productos en contenedor con borders
 */
const Shop = () => {
  const [sectionRef, isVisible] = useUnmaskOnScroll();

  return (
    <section ref={sectionRef} className={`relative w-full h-screen bg-dramatic-gray flex flex-col section-unmask -mt-1 z-20 ${isVisible ? 'visible' : ''}`}>
      {/* Título de la sección */}
      <div className="px-[70px] pt-20">
        <h2 className="font-jacquarda text-[60px] leading-none text-white whitespace-pre-line">
          {textContent.shop.title}
        </h2>
      </div>

      {/* BOX SHOP contenedor - Extendido de lateral a lateral */}
      <div className="flex-1 flex items-center">
        <div className="w-full flex border-y-2 border-neon-green">
          {textContent.shop.products.map((product, index) => (
            <React.Fragment key={index}>
              {/* Producto - Con cursor personalizado */}
              <div className="flex-1 flex flex-col items-center justify-center gap-2 p-2 hover:bg-neon-green/10 transition-all cursor-cross-green group">
                {/* Imagen del producto - Sin fondo para que herede el hover */}
                <div className="w-[259px] h-[259px] overflow-hidden group-hover:opacity-70 transition-opacity">
                  <ImageWithFallback
                    src={productImages[index]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    fallbackText={product.name}
                    fallbackClassName="w-full h-full flex items-center justify-center bg-dramatic-gray"
                  />
                </div>

                {/* Precio */}
                <span className="font-darker-grotesque text-[50px] font-normal text-neon-green">
                  {product.price}
                </span>
              </div>

              {/* Border vertical divisor entre productos */}
              {index < textContent.shop.products.length - 1 && (
                <div className="w-px bg-neon-green"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Shop);

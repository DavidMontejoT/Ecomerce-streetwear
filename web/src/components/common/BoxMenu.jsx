import React from 'react';

/**
 * BoxMenu - Componente para el menú tipo caja con border vertical divisor
 * Single Responsibility: Mostrar dos opciones clickeables separadas
 */
const BoxMenu = ({ primaryLabel, secondaryLabels }) => {
  return (
    <div className="flex border-2 border-neon-green cursor-cross-green">
      {/* Caja 1 - Opción primaria */}
      <div className="flex-1 flex items-center justify-end p-5 hover:bg-neon-green/10 transition-colors">
        <span className="font-darker-grotesque text-[100px] font-normal text-neon-green">
          {primaryLabel}
        </span>
      </div>

      {/* Border vertical divisor */}
      <div className="w-px bg-neon-green"></div>

      {/* Caja 2 - Opciones secundarias */}
      <div className="flex-1 flex flex-col items-end justify-center p-5 hover:bg-neon-green/10 transition-colors">
        {secondaryLabels.map((label, index) => (
          <span
            key={index}
            className="font-darker-grotesque text-[100px] font-normal text-neon-green leading-none"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default React.memo(BoxMenu);

import React, { useState } from 'react';

/**
 * ImageWithFallback - Componente para imágenes con fallback
 * Single Responsibility: Manejar la carga y errores de imágenes
 */
const ImageWithFallback = ({ src, alt, className, fallbackText, fallbackClassName }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={fallbackClassName}>
        <span className="text-white text-sm">{fallbackText}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

export default React.memo(ImageWithFallback);

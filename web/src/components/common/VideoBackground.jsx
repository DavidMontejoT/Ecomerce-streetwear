import React, { useRef, useEffect } from 'react';

/**
 * VideoBackground - Componente para background de video
 * Single Responsibility: Manejar la reproducción de video
 */
const VideoBackground = ({ src, opacity = 0.4, rotation = 0 }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  const rotationClass = rotation === 180 ? 'rotate-180' : rotation === -1 ? 'scale-x-[-1]' : '';

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        src={src}
        alt="Background video"
        className={`w-full h-full object-cover ${rotationClass}`}
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity }}
      ></div>
    </div>
  );
};

export default React.memo(VideoBackground);

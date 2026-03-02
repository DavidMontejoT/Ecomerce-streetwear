import React, { Suspense, lazy } from 'react';
import Header from './components/Header';

/**
 * Lazy loading de componentes pesados para mejor rendimiento
 * Optimización: Cargar componentes solo cuando se necesitan
 */
const Hero = lazy(() => import('./components/Hero'));
const Shop = lazy(() => import('./components/Shop'));
const OurStory = lazy(() => import('./components/OurStory'));
const Footer = lazy(() => import('./components/Footer'));

/**
 * App - Componente principal
 * Single Responsibility: Orquestar la estructura de la aplicación
 */
function App() {
  return (
    <div className="min-h-screen bg-dark-gray">
      <Header />
      <main>
        <Suspense fallback={<div className="h-screen bg-dark-gray" />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div className="h-screen bg-dark-gray" />}>
          <Shop />
        </Suspense>
        <Suspense fallback={<div className="h-screen bg-dark-gray" />}>
          <OurStory />
        </Suspense>
        <Suspense fallback={<div className="h-screen bg-dark-gray" />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;

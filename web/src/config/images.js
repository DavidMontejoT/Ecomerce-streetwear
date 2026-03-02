// ==========================================
// CONFIGURACIÓN DE IMÁGENES Y VIDEOS
// ==========================================
// Cambia estas rutas cuando quieras actualizar las imágenes

export const images = {
  // Hero Section
  hero: {
    video: '/src/assets/images/hero-video.mp4', // Video de fondo
    background: '/src/assets/images/hero-bg.jpg', // Imagen fallback
  },

  // Shop Section - Productos
  shop: {
    product1: '/src/assets/images/product1.png',
    product2: '/src/assets/images/product2.png',
    product3: '/src/assets/images/product3.png',
    product4: '/src/assets/images/product4.png',
  },

  // Our Story Section
  story: {
    background: '/src/assets/images/story-bg.jpg',
  },

  // Footer Section
  footer: {
    background: '/src/assets/images/footer-bg.jpg',
  },
};

// ==========================================
// CONFIGURACIÓN DE TEXTO
// ==========================================
// Cambia estos textos cuando quieras actualizar el contenido

export const textContent = {
  header: {
    brand: 'VoidYZK',
  },

  hero: {
    title: 'dramatic\ncomposition',
    button1: 'LOOK IT',
    availability: 'AVAILABLE',
    stock: '40/5000',
  },

  shop: {
    title: 'dramatic\ncomposition',
    products: [
      { price: '120$', name: 'Product 1' },
      { price: '120$', name: 'Product 2' },
      { price: '120$', name: 'Product 3' },
      { price: '120$', name: 'Product 4' },
    ],
  },

  story: {
    title: 'dramatic\ncomposition',
  },

  footer: {
    title: 'thank you',
  },
};

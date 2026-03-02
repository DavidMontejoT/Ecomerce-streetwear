# Dramatic Composition - VoidYZK

Sitio web con diseño dramático para la marca VoidYZK.

## 🚀 Iniciar el Proyecto

```bash
# Instalar dependencias (si no lo has hecho)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## 📁 Estructura del Proyecto

```
web/
├── src/
│   ├── components/          # Componentes de React
│   │   ├── Header.jsx       # Header con logo
│   │   ├── Hero.jsx         # Sección hero
│   │   ├── Shop.jsx         # Sección de productos
│   │   ├── OurStory.jsx     # Sección "nuestra historia"
│   │   └── Footer.jsx       # Footer
│   ├── config/
│   │   └── images.js        # ⭐ CONFIGURACIÓN DE IMÁGENES Y TEXTOS
│   ├── assets/
│   │   └── images/          # Coloca tus imágenes aquí
│   ├── App.jsx              # Componente principal
│   └── index.css            # Estilos globales
```

## 🎨 Cambiar las Imágenes

Todas las imágenes y textos se configuran en un solo archivo:

### `src/config/images.js`

```javascript
export const images = {
  hero: {
    background: '/src/assets/images/hero-bg.jpg',
  },
  shop: {
    product1: '/src/assets/images/shop-product-1.jpg',
    product2: '/src/assets/images/shop-product-2.jpg',
    product3: '/src/assets/images/shop-product-3.jpg',
  },
  story: {
    background: '/src/assets/images/story-bg.jpg',
  },
};
```

### Pasos para actualizar las imágenes:

1. **Coloca tus imágenes** en la carpeta `src/assets/images/`
2. **Abre** `src/config/images.js`
3. **Actualiza las rutas** con los nombres de tus imágenes
4. ¡Listo! La página se actualizará automáticamente

### También puedes usar URLs externas:

```javascript
export const images = {
  hero: {
    background: 'https://example.com/tu-imagen.jpg',
  },
};
```

## ✏️ Cambiar los Textos

En el mismo archivo `src/config/images.js` encontrarás la sección `textContent`:

```javascript
export const textContent = {
  header: {
    brand: 'VoidYZK',  // Cambia el nombre de la marca
  },
  hero: {
    title: 'dramatic\ncomposition',  // Usa \n para saltos de línea
    button1: 'LOOK IT',
    availability: 'AVAILABLE',
    stock: '40/5000',
  },
  // ... más secciones
};
```

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.js`:

- `neon-green`: #33ff00 (Verde neón)
- `dramatic-gray`: #cccccc (Gris dramático)
- `dark-gray`: #444444 (Gris oscuro)

### Fuentes

- **Jacquarda Bastarda 9**: Títulos dramáticos
- **Darker Grotesque**: Botones y texto general

## 📝 Notas

- Las imágenes que no se encuentren mostrarán un placeholder con el nombre
- El diseño es totalmente responsive
- Todas las secciones tienen altura completa (h-screen)

## 🛠️ Stack

- React 18
- Vite
- Tailwind CSS
- Google Fonts + CDN Fonts

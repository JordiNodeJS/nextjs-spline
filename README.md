# 🎨 Guía Completa de Spline con Next.js

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Spline](https://img.shields.io/badge/Spline-4.1-purple?style=for-the-badge)](https://spline.design/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **Tutorial interactivo y completo** para aprender a integrar experiencias 3D de Spline en tus proyectos Next.js. Incluye ejemplos prácticos, mejores prácticas y código listo para usar.

![Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)

## 🌟 Características

- ✅ **4 Módulos Completos** - Desde instalación hasta optimización profesional
- 🎓 **15+ Ejemplos de Código** - Snippets listos para copiar y usar
- 🎨 **Diseño Moderno** - UI profesional con Tailwind CSS 4 y modo oscuro
- 🚀 **Next.js 16** - Usando las últimas características de React Server Components
- 📱 **Responsive** - Optimizado para todos los dispositivos
- 🎯 **TypeScript** - Completamente tipado para mejor DX
- 💡 **Código Interactivo** - Bloques de código con sintaxis destacada y botón de copiar
- 🌈 **3D Interactivo** - Escenas de Spline completamente funcionales

## 📚 Contenido del Tutorial

### 📖 **Paso 1: Instalación y Configuración**
- Creación de proyecto Next.js
- Instalación de dependencias de Spline
- Configuración de TypeScript y Tailwind CSS
- Estructura del proyecto recomendada

### 🔧 **Paso 2: Implementación Básica**
- Integración del componente Spline
- Manejo de estados de carga y errores
- Server Components vs Client Components
- Props y configuración del componente

### 🎨 **Paso 3: Personalización y Posicionamiento**
- Posicionamiento absoluto y relativo
- Escenas como fondo de página
- Diseño responsive y adaptativo
- Capas y z-index management

### 🚀 **Paso 4: Mejores Prácticas**
- Optimización de rendimiento
- Lazy loading y code splitting
- Accesibilidad (a11y)
- SEO y metadatos
- Despliegue en producción

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ instalado
- pnpm, npm, yarn o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JordiNodeJS/nextjs-spline.git
cd nextjs-spline

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📂 Estructura del Proyecto

```
nextjs-spline/
├── src/
│   ├── app/
│   │   ├── page.tsx                      # Página principal (landing)
│   │   ├── layout.tsx                    # Layout raíz
│   │   ├── globals.css                   # Estilos globales
│   │   └── guia-spline/
│   │       ├── page.tsx                  # Índice de la guía
│   │       ├── instalacion/
│   │       │   └── page.tsx              # Paso 1: Instalación
│   │       ├── implementacion/
│   │       │   └── page.tsx              # Paso 2: Implementación
│   │       ├── personalizacion/
│   │       │   └── page.tsx              # Paso 3: Personalización
│   │       └── mejores-practicas/
│   │           └── page.tsx              # Paso 4: Mejores Prácticas
│   └── components/
│       └── CodeBlock.tsx                 # Componente de código con syntax highlight
├── public/
│   ├── scene.splinecode                  # Escena principal de Spline
│   ├── scene-1.splinecode                # Escena de ejemplo 1
│   └── scene-3.splinecode                # Escena de ejemplo 2
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 16.0 | Framework React con SSR y App Router |
| **React** | 19.2 | Biblioteca UI |
| **TypeScript** | 5.x | Tipado estático |
| **Tailwind CSS** | 4.x | Estilos utility-first |
| **@splinetool/react-spline** | 4.1.0 | Integración de Spline |
| **@splinetool/runtime** | 1.10.86 | Runtime de Spline |
| **prism-react-renderer** | 2.4.1 | Syntax highlighting para código |
| **lucide-react** | 0.548.0 | Iconos SVG modernos |

## 📖 Uso Básico

### Ejemplo 1: Integración Simple

```tsx
import Spline from '@splinetool/react-spline/next';

export default function MiComponente() {
  return (
    <div className="w-full h-screen">
      <Spline scene="/mi-escena.splinecode" />
    </div>
  );
}
```

### Ejemplo 2: Con Controles de Carga

```tsx
'use client';

import Spline from '@splinetool/react-spline/next';
import { useState } from 'react';

export default function SplineConControles() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-screen">
      {isLoading && <div>Cargando escena 3D...</div>}
      <Spline 
        scene="/mi-escena.splinecode"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
```

### Ejemplo 3: Como Fondo de Página

```tsx
import Spline from '@splinetool/react-spline/next';

export default function PaginaConFondo() {
  return (
    <div className="relative min-h-screen">
      {/* Fondo con Spline */}
      <div className="fixed inset-0 z-0">
        <Spline scene="/fondo-3d.splinecode" />
      </div>
      
      {/* Contenido superpuesto */}
      <div className="relative z-10">
        <h1>Mi Contenido</h1>
      </div>
    </div>
  );
}
```

## 🎯 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo en http://localhost:3000

# Build
pnpm build        # Crea la build de producción

# Producción
pnpm start        # Inicia el servidor de producción

# Linting
pnpm lint         # Ejecuta ESLint para verificar el código
```

## 🌐 Despliegue

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JordiNodeJS/nextjs-spline)

1. Haz push de tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará todo
4. ¡Tu sitio estará en vivo en segundos!

### Otras Plataformas

- **Netlify**: Compatible con Next.js
- **Railway**: Soporte completo para Next.js
- **Docker**: Usa el `Dockerfile` incluido

## 📝 Roadmap

- [ ] Agregar más ejemplos de interacciones 3D
- [ ] Tutorial de integración con APIs
- [ ] Guía de animaciones avanzadas
- [ ] Ejemplos de e-commerce con 3D
- [ ] Integración con CMS (Sanity, Contentful)
- [ ] Casos de uso en gaming y portfolios

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Spline Design](https://spline.design/) - Por la increíble herramienta de diseño 3D
- [Vercel](https://vercel.com/) - Por Next.js y el hosting
- [Tailwind CSS](https://tailwindcss.com/) - Por el framework de estilos

## 📬 Contacto

**Autor**: JordiNodeJS

- GitHub: [@JordiNodeJS](https://github.com/JordiNodeJS)
- Proyecto: [nextjs-spline](https://github.com/JordiNodeJS/nextjs-spline)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub

**Hecho con ❤️ y Next.js**

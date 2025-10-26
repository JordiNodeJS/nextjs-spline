import Link from "next/link";
import { ArrowLeft, Code, Copy, Move, Palette, Smartphone, Monitor } from "lucide-react";

export default function PersonalizacionSpline() {
  const tecnicasPosicionamiento = [
    {
      titulo: "Posicionamiento con CSS",
      descripcion: "Usa CSS para mover y ajustar la posición de las escenas",
      codigo: `/* Posicionamiento básico */
.spline-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.spline-scene {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Desplazamiento específico */
.spline-desplazado {
  transform: translate(100px, -50px);
  top: -25px;
  left: 50px;
}`,
      icono: <Move className="w-6 h-6" />
    },
    {
      titulo: "Posicionamiento Responsive",
      descripcion: "Usa clamp() para posicionamiento adaptativo",
      codigo: `/* Posicionamiento responsive con clamp() */
canvas {
  transform: translate(
    clamp(50px, 8vw, 150px), 
    clamp(-150px, -12vh, -50px)
  );
  position: relative;
  top: clamp(-80px, -6vh, -30px);
  left: clamp(100px, 15vw, 400px);
}

/* Media queries para control específico */
@media (max-width: 768px) {
  canvas {
    transform: translate(20px, -30px);
    top: -20px;
    left: 20px;
  }
}`,
      icono: <Smartphone className="w-6 h-6" />
    },
    {
      titulo: "Contenedores Personalizados",
      descripcion: "Crea contenedores específicos para diferentes layouts",
      codigo: `/* Contenedor de fondo completo */
.spline-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.spline-background canvas {
  width: 120%;
  height: 120%;
  transform: translate(-10%, -10%);
}

/* Contenedor centrado */
.spline-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

/* Contenedor sidebar */
.spline-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  z-index: 10;
}`,
      icono: <Monitor className="w-6 h-6" />
    }
  ];

  const ejemplosAvanzados = [
    {
      titulo: "Escena como Fondo con Contenido",
      codigo: `import Spline from '@splinetool/react-spline/next';

export default function PaginaConFondo3D() {
  return (
    <div className="relative min-h-screen">
      {/* Fondo Spline */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute w-[150%] h-[150%] -top-[25%] -right-[25%]">
          <Spline scene="/fondo-3d.splinecode" />
        </div>
      </div>
      
      {/* Contenido superpuesto */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-4 shadow-2xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
            Mi Contenido
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Este contenido se superpone perfectamente sobre la escena 3D
          </p>
        </div>
      </div>
    </div>
  );
}`
    },
    {
      titulo: "Escena Interactiva en Modal",
      codigo: `import { useState } from 'react';
import Spline from '@splinetool/react-spline/next';

export default function Modal3D() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all"
      >
        Abrir Experiencia 3D
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-[90vw] h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              ×
            </button>
            <Spline scene="/escena-interactiva.splinecode" />
          </div>
        </div>
      )}
    </>
  );
}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/guia-spline" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a la guía
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Paso 3: Personalización y Posicionamiento
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Domina el arte de posicionar y personalizar tus escenas de Spline
          </p>
        </div>

        {/* Técnicas de posicionamiento */}
        <div className="space-y-12 mb-16">
          {tecnicasPosicionamiento.map((tecnica, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-cyan-100 dark:from-pink-900/30 dark:to-cyan-900/30 rounded-xl flex items-center justify-center text-pink-600 dark:text-pink-400">
                  {tecnica.icono}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {tecnica.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {tecnica.descripcion}
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6 relative">
                    <button 
                      className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                      onClick={() => navigator.clipboard.writeText(tecnica.codigo)}
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{tecnica.codigo}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ejemplos avanzados */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <Palette className="w-6 h-6 text-purple-500" />
            Ejemplos Avanzados de Implementación
          </h2>
          <div className="space-y-8">
            {ejemplosAvanzados.map((ejemplo, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {ejemplo.titulo}
                </h3>
                <div className="bg-gray-900 rounded-lg p-6 relative">
                  <button 
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                    onClick={() => navigator.clipboard.writeText(ejemplo.codigo)}
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{ejemplo.codigo}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consejos de diseño */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Consejos de Diseño y UX
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Posicionamiento Efectivo
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Usa z-index para controlar capas</li>
                <li>• Implementa overflow: hidden para contener escenas</li>
                <li>• Considera el rendimiento en dispositivos móviles</li>
                <li>• Prueba en diferentes tamaños de pantalla</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Optimización Visual
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Usa backdrop-blur para efectos glassmorphism</li>
                <li>• Implementa transiciones suaves</li>
                <li>• Mantén contraste adecuado con el contenido</li>
                <li>• Considera la accesibilidad</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="flex justify-between items-center">
          <Link 
            href="/guia-spline/implementacion" 
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Anterior: Implementación
          </Link>
          <Link 
            href="/guia-spline/mejores-practicas" 
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-lg hover:from-pink-600 hover:to-cyan-600 transition-all shadow-lg"
          >
            Siguiente: Mejores Prácticas
          </Link>
        </div>
      </div>
    </div>
  );
}

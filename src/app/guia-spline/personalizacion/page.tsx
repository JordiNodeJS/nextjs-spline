import Link from "next/link";
import { Move, Palette, Smartphone, Monitor } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import PageNavigation from "@/components/PageNavigation";

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
    <div className="relative min-h-screen">
      <PageLayout>
        <PageHeader 
          title="Paso 3: Personalización y Posicionamiento"
          description="Domina el arte de posicionar y personalizar tus escenas de Spline"
        >
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Nota:</strong> Esta página usa <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded">&apos;use client&apos;</code> para habilitar la interactividad de los botones de copiar código.
            </p>
          </div>
        </PageHeader>

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
                  <CodeBlock 
                    code={tecnica.codigo} 
                    language="css"
                  />
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
                <CodeBlock 
                  code={ejemplo.codigo} 
                  language="tsx"
                />
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

        {/* Sistema Unificado de Estilos */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Palette className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Sistema Unificado de Estilos Spline
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Usa el nuevo sistema centralizado para mantener consistencia y facilitar el mantenimiento
              </p>
              <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>✨ Nuevo:</strong> Desplazamiento responsive automático hacia la derecha según el tamaño de pantalla
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Uso con Presets (Recomendado)
              </h4>
              <CodeBlock 
                language="tsx"
                code={`import SplineBackground from '@/components/SplineBackground';

// Fondo de pantalla completa
<SplineBackground preset="BACKGROUND" />

// Fondo responsive (se desplaza hacia la derecha según el tamaño de pantalla)
<SplineBackground preset="BACKGROUND_RESPONSIVE" />

// Hero section centrado
<SplineBackground preset="HERO" />

// Sidebar pequeño
<SplineBackground preset="SIDEBAR" />

// Modal centrado
<SplineBackground preset="MODAL" />`}
              />
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Configuración Personalizada
              </h4>
              <CodeBlock 
                language="tsx"
                code={`// Cambiar solo la posición
<SplineBackground 
  preset="BACKGROUND"
  position="RESPONSIVE_RIGHT"  // Nueva posición responsive
/>

// Cambiar tamaño y escala
<SplineBackground 
  preset="BACKGROUND"
  size="EXTRA_LARGE"
  scale="EXTRA_LARGE"
/>

// Posición completamente personalizada con valores actualizados
<SplineBackground 
  preset="BACKGROUND"
  customPosition={{
    top: '-30%',  // Mejorado desde -25%
    right: 'clamp(-35%, -8vw, -38%)',  // Desplazamiento responsive optimizado
    transform: 'translate(clamp(50px, 10vw, 200px), -50px)'
  }}
/>`}
              />
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Desplazamiento Responsive (Nuevo)
              </h4>
              <CodeBlock 
                language="tsx"
                code={`// Usar el preset responsive (Recomendado)
<SplineBackground preset="BACKGROUND_RESPONSIVE" />

// Comportamiento por pantalla:
// 📱 Móvil: right: -35%, translate(50px, -50px)
// 📱 Tablet: right: -8vw, translate(10vw, -50px)  
// 💻 Desktop: right: -38%, translate(200px, -50px)

// Personalización avanzada responsive
<SplineBackground 
  preset="BACKGROUND"
  customPosition={{
    top: '-30%',  // Posición vertical optimizada
    right: 'clamp(-35%, -8vw, -38%)',  // Desplazamiento responsive
    transform: 'translate(clamp(50px, 10vw, 200px), -50px)'
  }}
/>`}
              />
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Ventajas del Sistema Unificado
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Consistencia:</strong> Todos los estilos Spline siguen el mismo patrón</li>
                <li><strong>Mantenibilidad:</strong> Cambios centralizados en un solo archivo</li>
                <li><strong>Flexibilidad:</strong> Presets + overrides + customización</li>
                <li><strong>Responsive:</strong> Desplazamiento automático según el tamaño de pantalla</li>
                <li><strong>TypeScript:</strong> Tipado completo para todas las opciones</li>
                <li><strong>Reutilización:</strong> Un componente para todos los casos de uso</li>
                <li><strong>Documentación:</strong> Ejemplos claros y casos de uso comunes</li>
              </ul>
            </div>
          </div>
        </div>

        <PageNavigation 
          previousHref="/guia-spline/implementacion"
          previousText="Anterior: Implementación"
          nextHref="/guia-spline/mejores-practicas"
          nextText="Siguiente: Mejores Prácticas"
        />
      </PageLayout>
    </div>
  );
}

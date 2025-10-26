import Link from "next/link";
import { Code, Play, Zap } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import PageNavigation from "@/components/PageNavigation";

export default function ImplementacionSpline() {
  const ejemplosCodigo = [
    {
      titulo: "Implementación Básica",
      descripcion: "Integra una escena de Spline en tu componente React",
      codigo: `import Spline from '@splinetool/react-spline/next';

export default function MiComponente() {
  return (
    <div className="w-full h-screen">
      <Spline scene="/mi-escena.splinecode" />
    </div>
  );
}`,
      tipo: "básico",
    },
    {
      titulo: "Con Controles de Carga",
      descripcion: "Maneja el estado de carga y errores",
      codigo: `import Spline from '@splinetool/react-spline/next';
import { useState } from 'react';

export default function SplineConControles() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50 dark:bg-red-900/20">
          <p className="text-red-600 dark:text-red-400">Error al cargar la escena</p>
        </div>
      )}
      
      <Spline 
        scene="/mi-escena.splinecode"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}`,
      tipo: "avanzado",
    },
    {
      titulo: "Como Fondo de Página",
      descripcion: "Usa Spline como fondo con contenido superpuesto",
      codigo: `import Spline from '@splinetool/react-spline/next';

export default function PaginaConFondo() {
  return (
    <div className="relative min-h-screen">
      {/* Fondo con Spline */}
      <div className="fixed inset-0 z-0">
        <Spline scene="/fondo-3d.splinecode" />
      </div>
      
      {/* Contenido superpuesto */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Mi Contenido</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Este contenido se superpone sobre la escena 3D de fondo
          </p>
        </div>
      </div>
    </div>
  );
}`,
      tipo: "fondo",
    },
    {
      titulo: "Landing Page Interactiva - WebCode",
      descripcion:
        "Landing page completa con escena de teclado interactiva en el lado derecho, permitiendo la interacción del usuario con el 3D mientras mantiene el contenido accesible en el lado izquierdo",
      demoUrl: "/ejemplo/landing-webcode",
      codigo: `import SplineBackground from "@/components/SplineBackground";
import { SPLINE_SCENES } from "@/lib/spline-paths";
import { ArrowRight } from "lucide-react";

export default function LandingWebCode() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Escena Spline de fondo */}
      <SplineBackground 
        scene={SPLINE_SCENES.KEYBOARD}
        preset="BACKGROUND_RESPONSIVE"
        className="fixed inset-0 z-0"
      />
      
      {/* Zona interactiva - Lado derecho */}
      <div className="fixed right-0 top-0 bottom-0 w-full md:w-1/2 z-5 pointer-events-auto" />
      
      {/* Overlay para mejor contraste del texto - Lado izquierdo */}
      <div className="fixed left-0 top-0 bottom-0 w-full md:w-1/2 bg-linear-to-r from-black/60 via-black/40 to-transparent z-1" />
      
      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Section - Lado izquierdo */}
            <div className="space-y-8 pointer-events-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-linear-to-r from-pink-500/10 to-cyan-500/10 backdrop-blur-sm border border-pink-500/20 rounded-full px-4 py-2">
                <span className="text-sm font-medium bg-linear-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  ✨ Nuevo diseño disponible
                </span>
              </div>
              
              {/* Título principal */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-linear-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    WebCode
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-white/90">
                  WebDesign
                </p>
                <p className="text-lg text-gray-300 max-w-lg">
                  Crea experiencias web únicas con diseño 3D interactivo. 
                  Combina código elegante con visualizaciones impresionantes.
                </p>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-linear-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50 flex items-center justify-center gap-2">
                  Comenzar ahora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-300">
                  Ver ejemplos
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">Responsive</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    3D
                  </div>
                  <div className="text-sm text-gray-400">Interactivo</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Fast
                  </div>
                  <div className="text-sm text-gray-400">Optimizado</div>
                </div>
              </div>
            </div>
            
            {/* Lado derecho - Espacio para interacción con la escena */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
}`,
      tipo: "landing",
    },
  ];

  const propsSpline = [
    {
      prop: "scene",
      tipo: "string",
      descripcion: "URL o ruta del archivo .splinecode",
    },
    {
      prop: "onLoad",
      tipo: "function",
      descripcion: "Callback ejecutado cuando la escena se carga",
    },
    {
      prop: "onError",
      tipo: "function",
      descripcion: "Callback ejecutado si hay un error",
    },
    {
      prop: "style",
      tipo: "object",
      descripcion: "Estilos CSS personalizados",
    },
    {
      prop: "className",
      tipo: "string",
      descripcion: "Clases CSS adicionales",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <PageLayout>
        <PageHeader
          title="Paso 2: Implementación Básica"
          description="Aprende a integrar Spline en tus componentes React de manera efectiva"
        >
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Nota:</strong> Esta página usa{" "}
              <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded">
                &apos;use client&apos;
              </code>{" "}
              para habilitar la interactividad de los botones de copiar código.
            </p>
          </div>
        </PageHeader>

        {/* Ejemplos de código */}
        <div className="space-y-12 mb-16">
          {ejemplosCodigo.map((ejemplo, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg overflow-hidden"
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    ejemplo.tipo === "básico"
                      ? "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
                      : ejemplo.tipo === "avanzado"
                      ? "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"
                      : "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                  }`}
                >
                  <Code className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {ejemplo.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {ejemplo.descripcion}
                  </p>
                  {ejemplo.demoUrl && (
                    <Link
                      href={ejemplo.demoUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-linear-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Play className="w-4 h-4" />
                      Ver Demo Funcional
                    </Link>
                  )}
                  <div className="w-full overflow-hidden">
                    <CodeBlock code={ejemplo.codigo} language="tsx" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Props del componente Spline */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Propiedades del Componente Spline
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Propiedad
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Tipo
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Descripción
                  </th>
                </tr>
              </thead>
              <tbody>
                {propsSpline.map((prop, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-700"
                  >
                    <td className="py-3 px-4">
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                        {prop.prop}
                      </code>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                      {prop.tipo}
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                      {prop.descripcion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Server vs Client Components */}
        <div className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Code className="w-6 h-6 text-blue-500" />
            Server Components vs Client Components
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ¿Cuándo usar &apos;use client&apos;?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                En Next.js 16, los componentes son Server Components por
                defecto. Añade{" "}
                <code className="bg-blue-100 dark:bg-blue-900/50 px-1 rounded">
                  &apos;use client&apos;
                </code>{" "}
                cuando necesites:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Manejar eventos (onClick, onChange)</li>
                <li>• Usar hooks de React (useState, useEffect)</li>
                <li>• Acceder a APIs del navegador (window, document)</li>
                <li>• Usar componentes de terceros que requieren JavaScript</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Ejemplo de uso
              </h3>
              <CodeBlock 
                code={`'use client';

import { useState } from 'react';
import Spline from '@splinetool/react-spline/next';

export default function InteractiveSpline() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div>
      {!isLoaded && <div>Cargando...</div>}
      <Spline 
        scene="/escena.splinecode"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}`}
                language="tsx"
                className="mt-4"
              />
            </div>
          </div>
        </div>

        {/* Landing Pages Interactivas */}
        <div className="bg-linear-to-r from-pink-50 to-cyan-50 dark:from-pink-950/20 dark:to-cyan-950/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Play className="w-6 h-6 text-pink-500" />
            Landing Pages con Escenas Interactivas
          </h2>

          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              Crear landing pages con escenas 3D interactivas requiere una
              arquitectura de capas cuidadosa para garantizar que tanto el
              contenido como la escena sean accesibles e interactivos.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Gestión de pointer-events
                </h3>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div>
                    <strong className="text-pink-600 dark:text-pink-400">
                      CRÍTICO:
                    </strong>{" "}
                    El container de SplineBackground debe usar el preset{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded cursor-help"
                      title="fixed inset-0 z-0 pointer-events-auto overflow-hidden"
                    >
                      FIXED_FULLSCREEN_INTERACTIVE
                    </code>
                  </div>
                  <div>
                    <strong className="text-green-600 dark:text-green-400">
                      ✓ Hacer:
                    </strong>{" "}
                    Usar{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded cursor-help"
                      title="No permite eventos de puntero en el elemento"
                    >
                      pointer-events-none
                    </code>{" "}
                    en capas de overlay y contenido
                  </div>
                  <div>
                    <strong className="text-red-600 dark:text-red-400">
                      ✗ Evitar:
                    </strong>{" "}
                    Divs con{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded cursor-help"
                      title="Permite todos los eventos de puntero en el elemento"
                    >
                      pointer-events-auto
                    </code>{" "}
                    sobre la escena que bloqueen la interacción
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">📐</span>
                  Arquitectura de Capas
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span 
                      className="font-mono text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded cursor-help"
                      title="z-index: 0 - Capa más baja"
                    >
                      z-0
                    </span>
                    <span>SplineBackground (interactivo)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span 
                      className="font-mono text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded cursor-help"
                      title="z-index: 1 - Capa intermedia"
                    >
                      z-[1]
                    </span>
                    <span>Overlay de gradiente (pointer-events-none)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span 
                      className="font-mono text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded cursor-help"
                      title="z-index: 10 - Capa superior"
                    >
                      z-10
                    </span>
                    <span>Contenido (pointer-events-none en container)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span 
                      className="font-mono text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded cursor-help"
                      title="Sin z-index específico"
                    >
                      ---
                    </span>
                    <span>
                      Elementos interactivos (pointer-events-auto individual)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Contraste y Legibilidad
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    • Usa gradientes oscuros/claros según el fondo de la escena
                  </li>
                  <li>
                    • Aplica{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-1 rounded cursor-help"
                      title="Filtro de difuminado de fondo (backdrop-filter: blur(4px))"
                    >
                      backdrop-blur-sm
                    </code>{" "}
                    para efecto glassmorphism
                  </li>
                  <li>
                    • Divide la pantalla (50/50) para separar contenido y escena
                  </li>
                  <li>• El overlay debe cubrir solo el área del contenido</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">📱</span>
                  Responsive Design
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    • Usa{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-1 rounded cursor-help"
                      title="Contenedor: FIXED_FULLSCREEN, Posición: RESPONSIVE_RIGHT (top: -30%, right: clamp(-35%, -8vw, -38%))"
                    >
                      BACKGROUND_RESPONSIVE
                    </code>{" "}
                    para posicionamiento adaptativo
                  </li>
                  <li>
                    • En móvil, prioriza el contenido sobre la interacción 3D
                  </li>
                  <li>
                    • Considera ocultar la escena en pantallas pequeñas si es
                    pesada
                  </li>
                  <li>
                    • Usa grid{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-1 rounded cursor-help"
                      title="Grid de 2 columnas en pantallas grandes (≥1024px)"
                    >
                      lg:grid-cols-2
                    </code>{" "}
                    para layout adaptativo
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-linear-to-r from-pink-100 to-cyan-100 dark:from-pink-900/30 dark:to-cyan-900/30 rounded-xl p-6 border-2 border-pink-200 dark:border-pink-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                Errores Comunes a Evitar
              </h4>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold">❌</span>
                  <div>
                    <strong>No eliminar las capas bloqueantes:</strong> Si hay
                    un div con z-index superior al canvas y sin{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-1 rounded cursor-help"
                      title="No permite eventos de puntero en el elemento"
                    >
                      pointer-events-none
                    </code>
                    , bloqueará toda la interacción.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold">❌</span>
                  <div>
                    <strong>Usar preset incorrecto:</strong> El preset por
                    defecto{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-1 rounded cursor-help"
                      title="fixed inset-0 z-0 pointer-events-none overflow-hidden"
                    >
                      FIXED_FULLSCREEN
                    </code>{" "}
                    tiene{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-1 rounded cursor-help"
                      title="No permite eventos de puntero en el elemento"
                    >
                      pointer-events-none
                    </code>
                    , usa{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-1 rounded cursor-help"
                      title="fixed inset-0 z-0 pointer-events-auto overflow-hidden"
                    >
                      FIXED_FULLSCREEN_INTERACTIVE
                    </code>{" "}
                    para escenas interactivas.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold">❌</span>
                  <div>
                    <strong>Contenido que cubre toda la pantalla:</strong> Si el
                    contenido no está limitado a un lado, bloqueará la escena.
                    Usa grid de 2 columnas o limita el ancho.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-500 font-bold">✅</span>
                  <div>
                    <strong>Aplicar pointer-events granularmente:</strong>{" "}
                    Container con{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-1 rounded cursor-help"
                      title="No permite eventos de puntero en el elemento"
                    >
                      pointer-events-none
                    </code>
                    , elementos interactivos con{" "}
                    <code 
                      className="bg-gray-100 dark:bg-gray-700 px-1 rounded cursor-help"
                      title="Permite todos los eventos de puntero en el elemento"
                    >
                      pointer-events-auto
                    </code>
                    .
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-500" />
                Ejemplo de estructura correcta
              </h4>
              <CodeBlock 
                code={`<div className="relative min-h-screen">
  {/* Capa 1: Escena 3D (z-0, interactiva) */}
  <SplineBackground
    scene={SPLINE_SCENES.KEYBOARD}
    preset="BACKGROUND_RESPONSIVE"
    container="FIXED_FULLSCREEN_INTERACTIVE" // ← IMPORTANTE
    className="fixed inset-0 z-0"
  />

                {/* Capa 2: Overlay de gradiente (z-1, no interactivo) */}
              <div className="fixed left-0 top-0 bottom-0 w-full md:w-1/2
                  bg-linear-to-r from-black/60 to-transparent
                  z-1 pointer-events-none" /> {/* ← No bloquea interacción */}

  {/* Capa 3: Contenido (z-10) */}
  <div className="relative z-10 min-h-screen flex items-center 
                  pointer-events-none"> {/* ← pointer-events-none en container */}
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contenido izquierda - interactivo */}
      <div className="space-y-8 pointer-events-auto"> {/* ← auto solo aquí */}
        <h1>WebCode</h1>
        <button>Click me</button> {/* ← Este botón funciona */}
      </div>
      
      {/* Espacio derecho - NO bloquear la escena */}
      <div className="hidden lg:block pointer-events-none" /> {/* ← none */}
    </div>
  </div>
</div>`}
                language="tsx"
                className="mt-4"
              />
            </div>
          </div>
        </div>

        {/* Consejos importantes */}
        <div className="bg-linear-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-yellow-500" />
            Consejos Importantes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Optimización de Archivos
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Usa archivos .splinecode optimizados</li>
                <li>• Implementa lazy loading para escenas pesadas</li>
                <li>• Considera usar CDN para archivos grandes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Manejo de Estados
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Siempre maneja estados de carga</li>
                <li>• Implementa fallbacks para errores</li>
                <li>• Usa loading states para mejor UX</li>
              </ul>
            </div>
          </div>
        </div>

        <PageNavigation
          previousHref="/guia-spline/instalacion"
          previousText="Anterior: Instalación"
          nextHref="/guia-spline/personalizacion"
          nextText="Siguiente: Personalización"
        />
      </PageLayout>
    </div>
  );
}

'use client';

import Link from "next/link";
import { ArrowLeft, Code, Copy, Play, Zap } from "lucide-react";

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
      tipo: "básico"
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
      tipo: "avanzado"
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
      tipo: "fondo"
    }
  ];

  const propsSpline = [
    { prop: "scene", tipo: "string", descripcion: "URL o ruta del archivo .splinecode" },
    { prop: "onLoad", tipo: "function", descripcion: "Callback ejecutado cuando la escena se carga" },
    { prop: "onError", tipo: "function", descripcion: "Callback ejecutado si hay un error" },
    { prop: "style", tipo: "object", descripcion: "Estilos CSS personalizados" },
    { prop: "className", tipo: "string", descripcion: "Clases CSS adicionales" }
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
            Paso 2: Implementación Básica
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Aprende a integrar Spline en tus componentes React de manera efectiva
          </p>
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Nota:</strong> Esta página usa <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded">'use client'</code> para habilitar la interactividad de los botones de copiar código.
            </p>
          </div>
        </div>

        {/* Ejemplos de código */}
        <div className="space-y-12 mb-16">
          {ejemplosCodigo.map((ejemplo, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  ejemplo.tipo === 'básico' ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400' :
                  ejemplo.tipo === 'avanzado' ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400' :
                  'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                }`}>
                  <Code className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {ejemplo.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {ejemplo.descripcion}
                  </p>
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
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Propiedad</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Tipo</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Descripción</th>
                </tr>
              </thead>
              <tbody>
                {propsSpline.map((prop, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
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
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Code className="w-6 h-6 text-blue-500" />
            Server Components vs Client Components
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ¿Cuándo usar 'use client'?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                En Next.js 16, los componentes son Server Components por defecto. Añade <code className="bg-blue-100 dark:bg-blue-900/50 px-1 rounded">'use client'</code> cuando necesites:
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
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`'use client';

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
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos importantes */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-2xl p-8 mb-16">
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

        {/* Navegación */}
        <div className="flex justify-between items-center">
          <Link 
            href="/guia-spline/instalacion" 
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Anterior: Instalación
          </Link>
          <Link 
            href="/guia-spline/personalizacion" 
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-lg hover:from-pink-600 hover:to-cyan-600 transition-all shadow-lg"
          >
            Siguiente: Personalización
          </Link>
        </div>
      </div>
    </div>
  );
}

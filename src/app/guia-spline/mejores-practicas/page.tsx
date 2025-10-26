import Link from "next/link";
import { CheckCircle, Lightbulb, Gauge, Shield, Zap } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import PageNavigation from "@/components/PageNavigation";

export default function MejoresPracticasSpline() {
  const mejoresPracticas = [
    {
      categoria: "Rendimiento",
      icono: <Gauge className="w-6 h-6" />,
      color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
      items: [
        {
          titulo: "Lazy Loading",
          descripcion: "Carga las escenas solo cuando son necesarias",
          codigo: `import { lazy, Suspense } from 'react';

const SplineScene = lazy(() => import('./SplineScene'));

export default function App() {
  return (
    <Suspense fallback={<div>Cargando escena 3D...</div>}>
      <SplineScene />
    </Suspense>
  );
}`
        },
        {
          titulo: "Optimización de Archivos",
          descripcion: "Reduce el tamaño de los archivos .splinecode",
          codigo: `// En Spline Editor:
// 1. Reduce la calidad de texturas
// 2. Optimiza geometrías complejas
// 3. Usa instancias para objetos repetidos
// 4. Limita el número de luces
// 5. Exporta solo lo necesario`
        },
        {
          titulo: "Preload de Recursos",
          descripcion: "Precarga recursos críticos",
          codigo: `// En tu layout.tsx o _document.tsx
<link rel="preload" href="/escena-principal.splinecode" as="fetch" />
<link rel="preload" href="/texturas-principales.jpg" as="image" />`
        }
      ]
    },
    {
      categoria: "Accesibilidad",
      icono: <Shield className="w-6 h-6" />,
      color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
      items: [
        {
          titulo: "Reduced Motion",
          descripcion: "Respeta las preferencias de movimiento del usuario",
          codigo: `@media (prefers-reduced-motion: reduce) {
  .spline-container {
    display: none;
  }
  
  .fallback-content {
    display: block;
  }
}`
        },
        {
          titulo: "Alt Text y ARIA",
          descripcion: "Proporciona alternativas para usuarios con discapacidades",
          codigo: `export default function AccessibleSpline() {
  return (
    <div>
      <div 
        className="spline-container"
        role="img"
        aria-label="Escena 3D interactiva mostrando un logo animado"
      >
        <Spline scene="/escena.splinecode" />
      </div>
      <div className="sr-only">
        <p>Esta escena muestra un logo animado en 3D con efectos de luz.</p>
      </div>
    </div>
  );
}`
        },
        {
          titulo: "Controles de Teclado",
          descripcion: "Permite navegación por teclado",
          codigo: `useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      // Pausar o cerrar escena
      setSplinePaused(true);
    }
  };
  
  document.addEventListener('keydown', handleKeyPress);
  return () => document.removeEventListener('keydown', handleKeyPress);
}, []);`
        }
      ]
    },
    {
      categoria: "UX/UI",
      icono: <Lightbulb className="w-6 h-6" />,
      color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
      items: [
        {
          titulo: "Loading States",
          descripcion: "Proporciona feedback visual durante la carga",
          codigo: `export default function SplineWithLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">
              Cargando experiencia 3D... {progress}%
            </p>
          </div>
        </div>
      )}
      <Spline 
        scene="/escena.splinecode"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}`
        },
        {
          titulo: "Error Handling",
          descripcion: "Maneja errores de manera elegante",
          codigo: `export default function RobustSpline() {
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleError = () => {
    setHasError(true);
    if (retryCount < 3) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setHasError(false);
      }, 2000);
    }
  };

  if (hasError && retryCount >= 3) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            No se pudo cargar la escena 3D
          </p>
          <button 
            onClick={() => {
              setRetryCount(0);
              setHasError(false);
            }}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <Spline 
      scene="/escena.splinecode"
      onError={handleError}
    />
  );
}`
        },
        {
          titulo: "Responsive Design",
          descripcion: "Adapta las escenas a diferentes dispositivos",
          codigo: `export default function ResponsiveSpline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={\`spline-container \${isMobile ? 'mobile-optimized' : 'desktop-optimized'}\`}>
      <Spline 
        scene={isMobile ? "/escena-mobile.splinecode" : "/escena-desktop.splinecode"}
        style={{
          width: isMobile ? '100%' : '120%',
          height: isMobile ? '100%' : '120%'
        }}
      />
    </div>
  );
}`
        }
      ]
    }
  ];

  const checklistOptimizacion = [
    "Usar lazy loading para escenas pesadas",
    "Implementar loading states informativos",
    "Manejar errores de carga elegantemente",
    "Optimizar archivos .splinecode en el editor",
    "Usar preload para recursos críticos",
    "Implementar fallbacks para dispositivos lentos",
    "Respetar prefers-reduced-motion",
    "Proporcionar alternativas accesibles",
    "Probar en diferentes dispositivos y conexiones",
    "Monitorear métricas de rendimiento"
  ];

  return (
    <div className="relative min-h-screen">
      <PageLayout>
        <PageHeader 
          title="Paso 4: Mejores Prácticas"
          description="Optimiza el rendimiento, accesibilidad y experiencia de usuario de tus escenas Spline"
        >
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Nota:</strong> Esta página usa <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded">&apos;use client&apos;</code> para habilitar la interactividad de los botones de copiar código.
            </p>
          </div>
        </PageHeader>

        {/* Mejores prácticas por categoría */}
        <div className="space-y-12 mb-16">
          {mejoresPracticas.map((categoria, categoriaIndex) => (
            <div key={categoriaIndex} className={`rounded-2xl p-8 border-2 ${categoria.color}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                  {categoria.icono}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {categoria.categoria}
                </h2>
              </div>
              
              <div className="space-y-8">
                {categoria.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {item.titulo}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.descripcion}
                    </p>
                    {item.codigo && (
                      <CodeBlock 
                        code={item.codigo} 
                        language="tsx"
                        className="mt-4"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Checklist de optimización */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-500" />
            Checklist de Optimización
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {checklistOptimizacion.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Herramientas recomendadas */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-cyan-500" />
            Herramientas Recomendadas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Monitoreo de Rendimiento
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Chrome DevTools Performance</li>
                <li>• Lighthouse audits</li>
                <li>• Web Vitals extension</li>
                <li>• React DevTools Profiler</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Testing de Accesibilidad
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• axe DevTools</li>
                <li>• WAVE Web Accessibility</li>
                <li>• Lighthouse accessibility</li>
                <li>• Screen reader testing</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Optimización de Archivos
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Spline Editor optimization</li>
                <li>• Image compression tools</li>
                <li>• Bundle analyzer</li>
                <li>• CDN implementation</li>
              </ul>
            </div>
          </div>
        </div>

        <PageNavigation 
          previousHref="/guia-spline/personalizacion"
          previousText="Anterior: Personalización"
          nextHref="/guia-spline"
          nextText="Volver al Inicio"
          showNext={false}
        />
      </PageLayout>
    </div>
  );
}

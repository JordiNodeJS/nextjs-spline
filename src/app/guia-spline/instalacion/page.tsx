import Link from "next/link";
import { ArrowLeft, CheckCircle, Download, Settings, Terminal } from "lucide-react";

export default function InstalacionSpline() {
  const pasosInstalacion = [
    {
      titulo: "Crear proyecto Next.js",
      descripcion: "Inicializa un nuevo proyecto Next.js con TypeScript",
      codigo: `pnpm create next-app@latest mi-proyecto-spline
cd mi-proyecto-spline`,
      icono: <Terminal className="w-6 h-6" />
    },
    {
      titulo: "Instalar Spline",
      descripcion: "Instala el paquete oficial de Spline para React",
      codigo: `pnpm add @splinetool/react-spline`,
      icono: <Download className="w-6 h-6" />
    },
    {
      titulo: "Configurar TypeScript",
      descripcion: "Agrega los tipos necesarios para Spline",
      codigo: `pnpm add -D @types/react @types/react-dom`,
      icono: <Settings className="w-6 h-6" />
    }
  ];

  const estructuraProyecto = [
    "src/app/page.tsx - Página principal",
    "src/app/layout.tsx - Layout de la aplicación",
    "src/app/globals.css - Estilos globales",
    "public/scene.splinecode - Archivo de escena Spline",
    "package.json - Dependencias del proyecto"
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
            Paso 1: Instalación y Configuración
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Configura tu entorno de desarrollo para trabajar con Spline en Next.js
          </p>
        </div>

        {/* Pasos de instalación */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {pasosInstalacion.map((paso, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center text-pink-600 dark:text-pink-400">
                  {paso.icono}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {paso.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{paso.codigo}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Estructura del proyecto */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Estructura del Proyecto
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {estructuraProyecto.map((archivo, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                  {archivo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Configuración adicional */}
        <div className="bg-gradient-to-r from-pink-50 to-cyan-50 dark:from-pink-950/20 dark:to-cyan-950/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Configuración Adicional Recomendada
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Tailwind CSS (Opcional)
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p`}</code>
                </pre>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Para estilizar fácilmente tus componentes y posicionar las escenas de Spline
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Variables de Entorno
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`# .env.local
NEXT_PUBLIC_SPLINE_SCENE_URL=/scene.splinecode`}</code>
                </pre>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Para gestionar las URLs de las escenas de manera centralizada
              </p>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="flex justify-between items-center">
          <Link 
            href="/guia-spline" 
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Anterior
          </Link>
          <Link 
            href="/guia-spline/implementacion" 
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-lg hover:from-pink-600 hover:to-cyan-600 transition-all shadow-lg"
          >
            Siguiente: Implementación Básica
          </Link>
        </div>
      </div>
    </div>
  );
}

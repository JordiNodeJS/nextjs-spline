import Link from "next/link";
import { ArrowRight, BookOpen, Code, Palette, Zap } from "lucide-react";

export default function GuiaSpline() {
  const pasos = [
    {
      id: 1,
      titulo: "Instalación y Configuración",
      descripcion: "Aprende cómo instalar Spline y configurar tu proyecto Next.js",
      icono: <Zap className="w-8 h-8 text-pink-500" />,
      href: "/guia-spline/instalacion",
      color: "bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800"
    },
    {
      id: 2,
      titulo: "Implementación Básica",
      descripcion: "Integra tu primera escena de Spline en un componente React",
      icono: <Code className="w-8 h-8 text-cyan-500" />,
      href: "/guia-spline/implementacion",
      color: "bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800"
    },
    {
      id: 3,
      titulo: "Personalización y Posicionamiento",
      descripcion: "Ajusta la posición, tamaño y comportamiento de tus escenas",
      icono: <Palette className="w-8 h-8 text-purple-500" />,
      href: "/guia-spline/personalizacion",
      color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800"
    },
    {
      id: 4,
      titulo: "Mejores Prácticas",
      descripcion: "Optimización, rendimiento y consejos profesionales",
      icono: <BookOpen className="w-8 h-8 text-green-500" />,
      href: "/guia-spline/mejores-practicas",
      color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Guía Completa de Spline
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aprende paso a paso cómo integrar Spline en tu proyecto Next.js y crear experiencias 3D increíbles
          </p>
        </div>

        {/* Pasos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pasos.map((paso) => (
            <Link
              key={paso.id}
              href={paso.href}
              className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${paso.color}`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {paso.icono}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      PASO {paso.id}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {paso.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Qué es Spline?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Spline es una herramienta de diseño 3D que permite crear experiencias interactivas 
              directamente en el navegador. Con esta guía aprenderás a integrarlo perfectamente 
              en tus proyectos Next.js.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                React Integration
              </span>
              <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">
                3D Graphics
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                Interactive Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

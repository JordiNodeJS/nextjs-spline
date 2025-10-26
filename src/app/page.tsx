import Link from "next/link";
import Spline from '@splinetool/react-spline/next';
import { ArrowRight, BookOpen, Code, Palette, Zap, Star, Users, Clock } from "lucide-react";

export default function Home() {
  const caracteristicas = [
    {
      icono: <Code className="w-8 h-8 text-pink-500" />,
      titulo: "Implementación Paso a Paso",
      descripcion: "Desde la instalación hasta la implementación avanzada con ejemplos prácticos"
    },
    {
      icono: <Palette className="w-8 h-8 text-cyan-500" />,
      titulo: "Personalización Completa",
      descripcion: "Aprende a posicionar, estilizar y hacer responsive tus escenas 3D"
    },
    {
      icono: <Zap className="w-8 h-8 text-purple-500" />,
      titulo: "Optimización Profesional",
      descripcion: "Mejores prácticas para rendimiento, accesibilidad y experiencia de usuario"
    }
  ];

  const estadisticas = [
    { numero: "4", etiqueta: "Pasos Detallados", icono: <BookOpen className="w-6 h-6" /> },
    { numero: "15+", etiqueta: "Ejemplos de Código", icono: <Code className="w-6 h-6" /> },
    { numero: "100%", etiqueta: "Gratuito", icono: <Star className="w-6 h-6" /> },
    { numero: "30min", etiqueta: "Tiempo de Aprendizaje", icono: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Fixed background with Spline scene */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute w-[150%] h-[150%]"
          style={{
            top: '-25%',
            right: '-25%',
            transform: 'translate(50px, -50px)'
          }}
        >
          <Spline scene="/scene.splinecode" />
        </div>
      </div>
      
      {/* Content layer on top */}
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="flex min-h-screen items-center justify-start px-4">
          <div className="text-left max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-full border border-white/20 dark:border-white/10 mb-8">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Guía Completa y Gratuita
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Guía Spline
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Integra Experiencias 3D en Next.js
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Aprende paso a paso cómo integrar Spline en tus proyectos Next.js. 
              Desde la instalación hasta las mejores prácticas profesionales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-16">
              <Link
                href="/guia-spline"
                className="group flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 px-8 text-white font-semibold text-lg transition-all hover:from-pink-600 hover:to-cyan-600 hover:shadow-2xl hover:scale-105"
              >
                <BookOpen className="w-6 h-6" />
                Comenzar Guía
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/guia-spline/instalacion"
                className="flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 px-8 text-gray-700 dark:text-gray-300 font-semibold text-lg transition-all hover:bg-white/20 dark:hover:bg-black/20"
              >
                <Code className="w-6 h-6" />
                Ver Instalación
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              {estadisticas.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20 dark:border-white/10">
                    <div className="text-pink-500">
                      {stat.icono}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {stat.numero}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.etiqueta}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16">
              <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                ¿Qué Incluye la Guía?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Todo lo que necesitas para dominar Spline en Next.js
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caracteristicas.map((caracteristica, index) => (
                <div key={index} className="bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:shadow-2xl transition-all duration-300">
                  <div className="mb-6">
                    {caracteristica.icono}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {caracteristica.titulo}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {caracteristica.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-left">
            <div className="bg-gradient-to-r from-pink-50 to-cyan-50 dark:from-pink-950/20 dark:to-cyan-950/20 rounded-3xl p-12 border border-pink-200 dark:border-pink-800">
              <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                ¿Listo para Crear Experiencias 3D Increíbles?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Únete a miles de desarrolladores que ya están usando Spline en sus proyectos
              </p>
              <Link
                href="/guia-spline"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold text-lg transition-all hover:from-pink-600 hover:to-cyan-600 hover:shadow-2xl hover:scale-105"
              >
                <Users className="w-6 h-6" />
                Comenzar Ahora
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
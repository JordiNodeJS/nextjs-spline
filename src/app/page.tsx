import Link from "next/link";
import Spline from "@splinetool/react-spline/next";
import {
  ArrowRight,
  BookOpen,
  Code,
  Palette,
  Zap,
  Star,
  Users,
  Clock,
} from "lucide-react";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Descubre cómo integrar Spline en Next.js con nuestra guía completa. Aprende paso a paso desde la instalación hasta las mejores prácticas profesionales.",
  openGraph: {
    title: "Guía Spline - Integra Experiencias 3D en Next.js",
    description: "Descubre cómo integrar Spline en Next.js con nuestra guía completa. Aprende paso a paso desde la instalación hasta las mejores prácticas profesionales.",
    images: ["/og-home.jpg"],
  },
  twitter: {
    title: "Guía Spline - Integra Experiencias 3D en Next.js",
    description: "Descubre cómo integrar Spline en Next.js con nuestra guía completa. Aprende paso a paso desde la instalación hasta las mejores prácticas profesionales.",
    images: ["/og-home.jpg"],
  },
};

export default function Home() {
  const caracteristicas = [
    {
      icono: <Code className="w-8 h-8 text-pink-500" />,
      titulo: "Implementación Paso a Paso",
      descripcion:
        "Desde la instalación hasta la implementación avanzada con ejemplos prácticos",
    },
    {
      icono: <Palette className="w-8 h-8 text-cyan-500" />,
      titulo: "Personalización Completa",
      descripcion:
        "Aprende a posicionar, estilizar y hacer responsive tus escenas 3D",
    },
    {
      icono: <Zap className="w-8 h-8 text-purple-500" />,
      titulo: "Optimización Profesional",
      descripcion:
        "Mejores prácticas para rendimiento, accesibilidad y experiencia de usuario",
    },
  ];

  const estadisticas = [
    {
      numero: "4",
      etiqueta: "Pasos Detallados",
      icono: <BookOpen className="w-6 h-6" />,
    },
    {
      numero: "15+",
      etiqueta: "Ejemplos de Código",
      icono: <Code className="w-6 h-6" />,
    },
    {
      numero: "100%",
      etiqueta: "Gratuito",
      icono: <Star className="w-6 h-6" />,
    },
    {
      numero: "30min",
      etiqueta: "Tiempo de Aprendizaje",
      icono: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <StructuredData 
        type="WebSite" 
        data={{}} 
      />
      <StructuredData 
        type="Course" 
        data={{
          title: "Guía Completa de Spline para Next.js",
          description: "Aprende paso a paso cómo integrar Spline en tus proyectos Next.js",
          steps: [
            {
              name: "Instalación y Configuración",
              text: "Configura tu entorno de desarrollo para trabajar con Spline",
              url: "https://guia-spline.vercel.app/guia-spline/instalacion"
            },
            {
              name: "Implementación Básica", 
              text: "Integra tu primera escena de Spline en un componente React",
              url: "https://guia-spline.vercel.app/guia-spline/implementacion"
            },
            {
              name: "Personalización y Posicionamiento",
              text: "Ajusta la posición, tamaño y comportamiento de tus escenas",
              url: "https://guia-spline.vercel.app/guia-spline/personalizacion"
            },
            {
              name: "Mejores Prácticas",
              text: "Optimización, rendimiento y consejos profesionales",
              url: "https://guia-spline.vercel.app/guia-spline/mejores-practicas"
            }
          ]
        }} 
      />
      <div className="relative min-h-screen">
      {/* Spline scene - Full background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[150%] h-[150%]"
          style={{
            top: '-25%',
            right: '-25%',
            transform: 'translate(120px, -80px)'
          }}
        >
          <Spline scene="/scene.splinecode" />
        </div>
      </div>

      {/* Interactive zone - Top right corner - Reduced size to prevent overlap */}
      <div className="fixed top-0 right-0 w-[300px] h-[300px] z-5 pointer-events-auto">
        <div className="w-full h-full bg-transparent">
          {/* This area allows interaction with the Spline scene */}
        </div>
      </div>

      {/* Content layer - Individual positioned elements */}
      <div className="relative z-10 min-h-screen pointer-events-auto">
        {/* Badge - Top Left */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              Guía Completa y Gratuita
            </span>
          </div>
        </div>

        {/* Main Title - Center Left */}
        <div className="absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 z-20 max-w-xs sm:max-w-none">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-8">
            <span className="bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Guía Spline
            </span>
          </h1>
        </div>

        {/* Subtitle - Below Title */}
        <div className="absolute top-1/2 left-4 sm:left-8 transform translate-y-16 sm:translate-y-20 z-20 max-w-xs sm:max-w-none">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-6">
            Integra Experiencias 3D en Next.js
          </h2>
        </div>

        {/* Description - Below Subtitle */}
        <div className="absolute top-1/2 left-4 sm:left-8 transform translate-y-32 sm:translate-y-40 z-20 max-w-xs sm:max-w-2xl">
          <p className="text-sm sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            Aprende paso a paso cómo integrar Spline en tus proyectos Next.js.
            Desde la instalación hasta las mejores prácticas profesionales.
          </p>
        </div>

        {/* CTA Buttons - Below Description - Improved spacing and positioning */}
        <div className="absolute top-1/2 left-4 sm:left-8 transform translate-y-60 sm:translate-y-72 z-30 w-[calc(100%-2rem)] sm:w-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start mb-12 sm:mb-16">
            <Link
              href="/guia-spline"
              className="group flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 px-6 sm:px-8 text-white font-semibold text-base sm:text-lg transition-all hover:from-pink-600 hover:to-cyan-600 hover:shadow-2xl hover:scale-105 interactive-element"
            >
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              Comenzar Guía
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/guia-spline/instalacion"
              className="flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 px-6 sm:px-8 text-gray-700 dark:text-gray-300 font-semibold text-base sm:text-lg transition-all hover:bg-white/20 dark:hover:bg-black/20 interactive-element"
            >
              <Code className="w-5 h-5 sm:w-6 sm:h-6" />
              Ver Instalación
            </Link>
          </div>
        </div>

        {/* Stats - Bottom Left */}
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-20 w-[calc(100%-2rem)] sm:w-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-full sm:max-w-3xl">
            {estadisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-white/10 dark:border-white/5">
                  <div className="text-pink-500 text-lg sm:text-xl">{stat.icono}</div>
                </div>
                <div className="text-xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {stat.numero}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {stat.etiqueta}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section - Right Side (Hidden on mobile, shown on desktop) */}
        <div className="hidden lg:block absolute top-1/2 right-8 transform -translate-y-1/2 z-25 max-w-md">
          <div className="text-left mb-8">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              ¿Qué Incluye?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Todo lo que necesitas para dominar Spline
            </p>
          </div>

          <div className="space-y-6">
            {caracteristicas.map((caracteristica, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{caracteristica.icono}</div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {caracteristica.titulo}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caracteristica.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section - Mobile (Stacked below content) */}
        <div className="block lg:hidden absolute top-1/2 left-4 sm:left-8 transform translate-y-96 sm:translate-y-[28rem] z-25 w-[calc(100%-2rem)] sm:w-auto">
          <div className="text-left mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
              ¿Qué Incluye?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Todo lo que necesitas para dominar Spline
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {caracteristicas.map((caracteristica, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-white/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-3 sm:mb-4">{caracteristica.icono}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {caracteristica.titulo}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caracteristica.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA - Bottom Center */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-[calc(100%-2rem)] sm:w-auto max-w-xs sm:max-w-2xl">
          <div className="bg-gradient-to-r from-pink-50/80 to-cyan-50/80 dark:from-pink-950/30 dark:to-cyan-950/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-pink-200/50 dark:border-pink-800/50 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
              ¿Listo para Crear Experiencias 3D?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              Únete a miles de desarrolladores que ya están usando Spline
            </p>
            <Link
              href="/guia-spline"
              className="inline-flex items-center gap-2 sm:gap-3 h-10 sm:h-12 px-4 sm:px-6 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold text-sm sm:text-base transition-all hover:from-pink-600 hover:to-cyan-600 hover:shadow-xl hover:scale-105 interactive-element"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              Comenzar Ahora
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

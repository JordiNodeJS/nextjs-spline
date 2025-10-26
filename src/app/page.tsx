import Link from "next/link";
import SplineBackground from "@/components/SplineBackground";
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
  description:
    "Descubre cómo integrar Spline en Next.js con nuestra guía completa. Aprende paso a paso desde la instalación hasta las mejores prácticas profesionales.",
  openGraph: {
    title: "Guía Spline - Integra Experiencias 3D en Next.js",
    description:
      "Descubre cómo integrar Spline en Next.js con nuestra guía completa. Aprende paso a paso desde la instalación hasta las mejores prácticas profesionales.",
    images: ["/og-home.jpg"],
  },
  twitter: {
    title: "Guía Spline - Integra Experiencias 3D en Next.js",
    description:
      "Descubre cómo integrar Spline en Next.js con nuestra guía completa. Aprende paso a paso desde la instalación hasta las mejores prácticas profesionales.",
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
      gradient: "from-pink-500/10 to-pink-600/5",
    },
    {
      icono: <Palette className="w-8 h-8 text-cyan-500" />,
      titulo: "Personalización Completa",
      descripcion:
        "Aprende a posicionar, estilizar y hacer responsive tus escenas 3D",
      gradient: "from-cyan-500/10 to-cyan-600/5",
    },
    {
      icono: <Zap className="w-8 h-8 text-purple-500" />,
      titulo: "Optimización Profesional",
      descripcion:
        "Mejores prácticas para rendimiento, accesibilidad y experiencia de usuario",
      gradient: "from-purple-500/10 to-purple-600/5",
    },
  ];

  const estadisticas = [
    {
      numero: "4",
      etiqueta: "Pasos Detallados",
      icono: <BookOpen className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
    },
    {
      numero: "15+",
      etiqueta: "Ejemplos de Código",
      icono: <Code className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      numero: "100%",
      etiqueta: "Gratuito",
      icono: <Star className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      numero: "30min",
      etiqueta: "Tiempo de Aprendizaje",
      icono: <Clock className="w-6 h-6" />,
      color: "from-pink-500 to-purple-600",
    },
  ];

  return (
    <>
      <StructuredData type="WebSite" data={{}} />
      <StructuredData
        type="Course"
        data={{
          title: "Guía Completa de Spline para Next.js",
          description:
            "Aprende paso a paso cómo integrar Spline en tus proyectos Next.js",
          steps: [
            {
              name: "Instalación y Configuración",
              text: "Configura tu entorno de desarrollo para trabajar con Spline",
              url: "https://guia-spline.vercel.app/guia-spline/instalacion",
            },
            {
              name: "Implementación Básica",
              text: "Integra tu primera escena de Spline en un componente React",
              url: "https://guia-spline.vercel.app/guia-spline/implementacion",
            },
            {
              name: "Personalización y Posicionamiento",
              text: "Ajusta la posición, tamaño y comportamiento de tus escenas",
              url: "https://guia-spline.vercel.app/guia-spline/personalizacion",
            },
            {
              name: "Mejores Prácticas",
              text: "Optimización, rendimiento y consejos profesionales",
              url: "https://guia-spline.vercel.app/guia-spline/mejores-practicas",
            },
          ],
        }}
      />
      <div className="relative min-h-screen">
        {/* Spline scene - Full viewport background */}
        <SplineBackground 
          scene="/scene.splinecode"
          preset="BACKGROUND_RESPONSIVE"
        />

        {/* Interactive zone - Right side */}
        <div className="fixed top-0 right-0 w-full lg:w-1/2 h-screen z-5 pointer-events-auto">
          <div className="w-full h-full bg-transparent">
            {/* This area allows interaction with the Spline scene */}
          </div>
        </div>

        {/* Gradient overlays for better contrast on left side */}
        <div className="fixed inset-0 z-[1] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-white/10 dark:from-black/80 dark:via-black/50 dark:to-black/20 lg:from-white/85 lg:via-white/50 lg:to-transparent dark:lg:from-black/95 dark:lg:via-black/60 dark:lg:to-transparent"></div>
        </div>

        {/* Content layer */}
        <div className="relative z-10 min-h-screen pointer-events-none">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pointer-events-none">
            {/* Hero Section - Left Aligned */}
            <div className="min-h-screen flex flex-col justify-center lg:w-1/2 lg:pr-8 pointer-events-auto">
              {/* Badge - Top Left */}
              <div className="mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-white/90 to-white/70 dark:from-black/80 dark:to-black/60 backdrop-blur-xl rounded-full border border-white/40 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 animate-pulse" />
                  <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Guía Completa y Gratuita
                  </span>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight">
                <span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Guía Spline
                </span>
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 leading-tight">
                Integra Experiencias 3D en Next.js
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 sm:mb-12 leading-relaxed max-w-2xl">
                Aprende paso a paso cómo integrar{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  Spline
                </span>{" "}
                en tus proyectos Next.js. Desde la instalación hasta las mejores
                prácticas profesionales.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
                <Link
                  href="/guia-spline"
                  className="group flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-8 sm:px-10 text-white font-bold text-base sm:text-lg transition-all hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-105 active:scale-95"
                >
                  <BookOpen className="w-6 h-6" />
                  Comenzar Guía
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>

                <Link
                  href="/guia-spline/instalacion"
                  className="flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white/90 dark:bg-black/80 backdrop-blur-xl border-2 border-gray-300/50 dark:border-white/20 px-8 sm:px-10 text-gray-800 dark:text-gray-200 font-bold text-base sm:text-lg transition-all hover:bg-white dark:hover:bg-black/90 hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  <Code className="w-6 h-6" />
                  Ver Instalación
                </Link>
              </div>

              {/* Stats - Below CTA */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
                {estadisticas.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/40 dark:border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>
                    <div className="relative z-10 text-center">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                      >
                        <div className="text-white scale-75 sm:scale-100">
                          {stat.icono}
                        </div>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-1">
                        {stat.numero}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.etiqueta}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Section - Full width below hero */}
            <div className="mb-16 sm:mb-24 pointer-events-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  ¿Qué Incluye?
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                  Todo lo que necesitas para dominar{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Spline
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {caracteristicas.map((caracteristica, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-white/90 dark:bg-black/70 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/40 dark:border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${caracteristica.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <div className="relative z-10">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {caracteristica.icono}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 leading-tight">
                        {caracteristica.titulo}
                      </h4>
                      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {caracteristica.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="max-w-4xl mx-auto pointer-events-auto">
              <div className="relative overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 dark:from-pink-500/10 dark:via-purple-500/10 dark:to-cyan-500/10 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 border border-white/40 dark:border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-cyan-500/5 animate-gradient bg-[length:200%_200%]"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
                    ¿Listo para Crear Experiencias 3D?
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                    Únete a miles de desarrolladores que ya están creando
                    experiencias increíbles con{" "}
                    <span className="font-semibold text-pink-600 dark:text-pink-400">
                      Spline
                    </span>
                  </p>
                  <Link
                    href="/guia-spline"
                    className="group inline-flex items-center gap-3 h-14 sm:h-16 px-8 sm:px-10 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold text-base sm:text-lg transition-all hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95"
                  >
                    <Users className="w-6 h-6" />
                    Comenzar Ahora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Spacing */}
            <div className="h-16 sm:h-24"></div>
          </div>
        </div>
      </div>
    </>
  );
}

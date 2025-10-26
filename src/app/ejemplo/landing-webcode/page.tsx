import SplineBackground from "@/components/SplineBackground";
import { SPLINE_SCENES } from "@/lib/spline-paths";
import { ArrowRight } from "lucide-react";

export default function LandingWebCode() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Escena Spline de fondo */}
      <SplineBackground
        scene={SPLINE_SCENES.KEYBOARD}
        preset="BACKGROUND_RESPONSIVE"
        container="FIXED_FULLSCREEN_INTERACTIVE"
        className="fixed inset-0 z-0"
      />

      {/* Overlay para mejor contraste del texto - Lado izquierdo */}
      <div className="fixed left-0 top-0 bottom-0 w-full md:w-1/2 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-[1] pointer-events-none" />

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Section - Lado izquierdo */}
            <div className="space-y-8 pointer-events-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 backdrop-blur-sm border border-pink-500/20 rounded-full px-4 py-2">
                <span className="text-sm font-medium bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  ✨ Nuevo diseño disponible
                </span>
              </div>

              {/* Título principal */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
                <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50 flex items-center justify-center gap-2">
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
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">Responsive</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    3D
                  </div>
                  <div className="text-sm text-gray-400">Interactivo</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Fast
                  </div>
                  <div className="text-sm text-gray-400">Optimizado</div>
                </div>
              </div>
            </div>

            {/* Lado derecho - Espacio para interacción con la escena */}
            <div className="hidden lg:block pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

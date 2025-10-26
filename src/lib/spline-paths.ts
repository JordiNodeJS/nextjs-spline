// src/lib/spline-paths.ts
// Rutas centralizadas para archivos Spline

export const SPLINE_SCENES = {
  // Escenas principales
  MAIN: '/scenes/scene.splinecode',
  SCENE_1: '/scenes/scene-1.splinecode', 
  SCENE_3: '/scenes/scene-3.splinecode',
  
  // Escenas de ejemplo (para documentación)
  HERO: '/scenes/hero-scene.splinecode',
  BACKGROUND: '/scenes/background-scene.splinecode',
  DECORATION: '/scenes/decoration.splinecode',
  MODAL: '/scenes/modal-scene.splinecode',
  INTERACTIVE: '/scenes/interactive-scene.splinecode',
  
  // Escenas responsive
  MOBILE: '/scenes/scene-mobile.splinecode',
  DESKTOP: '/scenes/scene-desktop.splinecode',
} as const;

// Ruta por defecto
export const DEFAULT_SPLINE_SCENE = SPLINE_SCENES.MAIN;

// Función helper para obtener rutas
export const getSplineScene = (scene: keyof typeof SPLINE_SCENES = 'MAIN') => {
  return SPLINE_SCENES[scene];
};

// Función para rutas personalizadas
export const getCustomSplineScene = (customPath: string) => {
  // Si ya tiene el prefijo /scenes/, lo devuelve tal como está
  if (customPath.startsWith('/scenes/')) {
    return customPath;
  }
  
  // Si empieza con /, asume que es una ruta personalizada completa
  if (customPath.startsWith('/')) {
    return customPath;
  }
  
  // Si no tiene prefijo, lo agrega automáticamente
  return `/scenes/${customPath}`;
};

export type SplineSceneKey = keyof typeof SPLINE_SCENES;

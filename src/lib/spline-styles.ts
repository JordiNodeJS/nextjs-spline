// src/lib/spline-styles.ts
export const SPLINE_POSITIONS = {
  // Posiciones predefinidas comunes
  CENTER: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  
  TOP_RIGHT: {
    top: '-25%',
    right: '-25%',
    transform: 'translate(50px, -50px)',
  },
  
  TOP_LEFT: {
    top: '-25%',
    left: '-25%',
    transform: 'translate(-50px, -50px)',
  },
  
  BOTTOM_RIGHT: {
    bottom: '-25%',
    right: '-25%',
    transform: 'translate(50px, 50px)',
  },
  
  BOTTOM_LEFT: {
    bottom: '-25%',
    left: '-25%',
    transform: 'translate(-50px, 50px)',
  },
  
  FULL_SCREEN: {
    top: '0',
    left: '0',
    transform: 'scale(1.1)',
  },
  
  BACKGROUND_OFFSET: {
    top: '-25%',
    right: '-25%',
    transform: 'translate(50px, -50px)',
  },
  
  // Nueva posición responsive hacia la derecha
  RESPONSIVE_RIGHT: {
    top: '-30%',
    right: 'clamp(-35%, -8vw, -38%)',
    transform: 'translate(clamp(50px, 10vw, 200px), -50px)',
  }
} as const;

export const SPLINE_SIZES = {
  SMALL: 'w-[100%] h-[100%]',
  MEDIUM: 'w-[120%] h-[120%]',
  LARGE: 'w-[150%] h-[150%]',
  EXTRA_LARGE: 'w-[200%] h-[200%]',
} as const;

export const SPLINE_CONTAINERS = {
  FIXED_FULLSCREEN: 'fixed inset-0 z-0 pointer-events-none overflow-hidden',
  ABSOLUTE_FULLSCREEN: 'absolute inset-0 z-0 pointer-events-none overflow-hidden',
  RELATIVE_CONTAINER: 'relative w-full h-screen overflow-hidden',
} as const;

export const SPLINE_SCALES = {
  SMALL: 'scale(0.8)',
  NORMAL: 'scale(1.0)',
  LARGE: 'scale(1.1)',
  EXTRA_LARGE: 'scale(1.3)',
} as const;

// Configuración por defecto para diferentes casos de uso
export const SPLINE_PRESETS = {
  BACKGROUND: {
    container: SPLINE_CONTAINERS.FIXED_FULLSCREEN,
    size: SPLINE_SIZES.LARGE,
    position: SPLINE_POSITIONS.BACKGROUND_OFFSET,
    scale: SPLINE_SCALES.LARGE,
  },
  
  BACKGROUND_RESPONSIVE: {
    container: SPLINE_CONTAINERS.FIXED_FULLSCREEN,
    size: SPLINE_SIZES.LARGE,
    position: SPLINE_POSITIONS.RESPONSIVE_RIGHT,
    scale: SPLINE_SCALES.LARGE,
  },
  
  HERO: {
    container: SPLINE_CONTAINERS.RELATIVE_CONTAINER,
    size: SPLINE_SIZES.MEDIUM,
    position: SPLINE_POSITIONS.CENTER,
    scale: SPLINE_SCALES.NORMAL,
  },
  
  SIDEBAR: {
    container: SPLINE_CONTAINERS.ABSOLUTE_FULLSCREEN,
    size: SPLINE_SIZES.SMALL,
    position: SPLINE_POSITIONS.TOP_RIGHT,
    scale: SPLINE_SCALES.SMALL,
  },
  
  MODAL: {
    container: SPLINE_CONTAINERS.RELATIVE_CONTAINER,
    size: SPLINE_SIZES.MEDIUM,
    position: SPLINE_POSITIONS.CENTER,
    scale: SPLINE_SCALES.NORMAL,
  }
} as const;

export type SplinePosition = keyof typeof SPLINE_POSITIONS;
export type SplineSize = keyof typeof SPLINE_SIZES;
export type SplineContainer = keyof typeof SPLINE_CONTAINERS;
export type SplineScale = keyof typeof SPLINE_SCALES;
export type SplinePreset = keyof typeof SPLINE_PRESETS;

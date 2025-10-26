'use client';

import { Suspense, lazy } from 'react';
import Spline from '@splinetool/react-spline/next';

interface OptimizedSplineProps {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

// Componente de carga optimizado
function SplineLoading() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-pink-50 to-cyan-50 dark:from-pink-950/20 dark:to-cyan-950/20">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Cargando experiencia 3D...
        </p>
      </div>
    </div>
  );
}

// Componente Spline optimizado con lazy loading
export default function OptimizedSpline({ 
  scene, 
  className = '', 
  style = {},
  onLoad,
  onError 
}: OptimizedSplineProps) {
  return (
    <Suspense fallback={<SplineLoading />}>
      <div className={`w-full h-full ${className}`} style={style}>
        <Spline 
          scene={scene}
          onLoad={onLoad}
          onError={onError}
        />
      </div>
    </Suspense>
  );
}

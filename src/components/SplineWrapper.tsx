"use client";

import { useEffect, useState } from "react";
import type { ReactElement } from "react";

interface SplineComponent {
  (props: {
    scene: string;
    onLoad?: () => void;
    onError?: () => void;
  }): ReactElement;
}

interface SplineWrapperProps {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

export default function SplineWrapper({
  scene,
  className = "",
  style = {},
  onLoad,
  onError,
}: SplineWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  const [SplineComponent, setSplineComponent] =
    useState<SplineComponent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Ensure we're on the client
    setIsClient(true);

    // Inject comprehensive process polyfill BEFORE loading Spline
    if (typeof window !== "undefined") {
      const win = window as Window &
        typeof globalThis & {
          process?: NodeJS.Process;
          global?: typeof globalThis;
        };

      if (!win.process) {
        win.process = {
          env: { NODE_ENV: "production" },
          nextTick: (
            callback: (...args: unknown[]) => void,
            ...args: unknown[]
          ) => {
            setTimeout(() => callback(...args), 0);
          },
          version: "v16.0.0",
          platform: "browser",
          cwd: () => "/",
          browser: true,
        } as unknown as NodeJS.Process;
      }

      // Also set global to window for compatibility
      if (!win.global) {
        win.global = win as typeof globalThis;
      }
    }

    // Small delay to ensure polyfills are applied
    const timer = setTimeout(() => {
      import("@splinetool/react-spline")
        .then((mod) => {
          setSplineComponent(() => mod.default as SplineComponent);
          onLoad?.();
        })
        .catch((err) => {
          console.error("Error loading Spline:", err);
          setError(err?.message || "Failed to load Spline");
          onError?.();
        });
    }, 100);

    return () => clearTimeout(timer);
  }, [onLoad, onError]);

  if (!isClient || !SplineComponent) {
    return (
      <div
        className={`${className} flex items-center justify-center`}
        style={style}
      >
        <div className="animate-pulse text-gray-400">
          {error ? `Error: ${error}` : "Cargando escena 3D..."}
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={style}>
      <SplineComponent scene={scene} onLoad={onLoad} onError={onError} />
    </div>
  );
}

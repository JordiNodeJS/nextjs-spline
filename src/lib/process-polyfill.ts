// Polyfill global para process - debe cargarse antes que cualquier módulo
// Esto soluciona el problema de Turbopack + @splinetool/runtime en Next.js 16

if (typeof window !== "undefined") {
  const win = window as typeof window & { process?: unknown; global?: unknown };

  if (!win.process) {
    // @ts-expect-error - Polyfill parcial de NodeJS.Process
    win.process = {
      env: { NODE_ENV: process.env.NODE_ENV || "production" },
      nextTick: function (callback, ...args) {
        setTimeout(() => callback(...args), 0);
      },
      version: "v16.0.0",
      platform: "win32",
      cwd: () => "/",
      browser: true,
    };
  }

  if (!win.global) {
    win.global = window;
  }
}

export {};

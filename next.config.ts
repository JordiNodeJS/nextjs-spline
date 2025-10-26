import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones de rendimiento
  experimental: {
    optimizePackageImports: ["lucide-react"],
    // Turbopack puede tener problemas con @splinetool, lo removemos de la optimización
  },

  // Configuración de Turbopack (Next.js 16)
  turbopack: {
    resolveAlias: {
      // Ayudar a Turbopack a resolver correctamente los módulos de Spline
      "@splinetool/runtime": "@splinetool/runtime/build/runtime.js",
    },
  },

  // Compresión
  compress: true,

  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/scene.splinecode",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirecciones para SEO
  async redirects() {
    return [
      {
        source: "/guide",
        destination: "/guia-spline",
        permanent: true,
      },
      {
        source: "/installation",
        destination: "/guia-spline/instalacion",
        permanent: true,
      },
      {
        source: "/implementation",
        destination: "/guia-spline/implementacion",
        permanent: true,
      },
      {
        source: "/customization",
        destination: "/guia-spline/personalizacion",
        permanent: true,
      },
      {
        source: "/best-practices",
        destination: "/guia-spline/mejores-practicas",
        permanent: true,
      },
    ];
  },

  // Optimización de imágenes
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Configuración de webpack para optimización
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Guía Spline - Integra Experiencias 3D en Next.js",
    template: "%s | Guía Spline",
  },
  description:
    "Aprende paso a paso cómo integrar Spline en tus proyectos Next.js. Guía completa con ejemplos prácticos, mejores prácticas y optimización profesional.",
  keywords: [
    "Spline",
    "Next.js",
    "React",
    "3D",
    "WebGL",
    "tutorial",
    "guía",
    "desarrollo web",
    "experiencias interactivas",
    "frontend",
  ],
  authors: [{ name: "webcode.es" }],
  creator: "webcode.es",
  publisher: "webcode.es",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://guia-spline.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/es",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://guia-spline.vercel.app",
    title: "Guía Spline - Integra Experiencias 3D en Next.js",
    description:
      "Aprende paso a paso cómo integrar Spline en tus proyectos Next.js. Guía completa con ejemplos prácticos y mejores prácticas.",
    siteName: "Guía Spline",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guía Spline - Integra Experiencias 3D en Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guía Spline - Integra Experiencias 3D en Next.js",
    description:
      "Aprende paso a paso cómo integrar Spline en tus proyectos Next.js. Guía completa con ejemplos prácticos.",
    images: ["/og-image.jpg"],
    creator: "@webcode_es",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdn.splinetool.com" />
        <link rel="preload" href="/scene.splinecode" as="fetch" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManager />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}

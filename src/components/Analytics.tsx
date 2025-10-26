'use client';

import Script from 'next/script';
import { GA_TRACKING_ID, GTM_ID } from '@/lib/analytics';

// Google Analytics
export function GoogleAnalytics() {
  if (!GA_TRACKING_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: 'Guía Spline - Integra Experiencias 3D en Next.js',
              page_location: window.location.href,
              custom_map: {
                custom_parameter_1: 'spline_guide',
                custom_parameter_2: 'nextjs_tutorial'
              }
            });
          `,
        }}
      />
    </>
  );
}

// Google Tag Manager
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

// Función para trackear eventos personalizados
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Spline Guide',
      event_label: parameters?.label || '',
      value: parameters?.value || 0,
      ...parameters
    });
  }
}

// Declaración global para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

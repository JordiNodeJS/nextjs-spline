// Google Analytics y Search Console Configuration
// Reemplaza estos valores con tus propios códigos de seguimiento

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'

// Configuración de Google Analytics
export const GA_CONFIG = {
  page_title: 'Guía Spline - Integra Experiencias 3D en Next.js',
  page_location: 'https://guia-spline.vercel.app',
  custom_map: {
    custom_parameter_1: 'spline_guide',
    custom_parameter_2: 'nextjs_tutorial'
  }
}

// Eventos personalizados para tracking
export const GA_EVENTS = {
  GUIDE_STARTED: 'guide_started',
  STEP_COMPLETED: 'step_completed',
  CODE_COPIED: 'code_copied',
  SPLINE_LOADED: 'spline_loaded',
  ERROR_OCCURRED: 'error_occurred'
}

// Configuración de Search Console
export const SEARCH_CONSOLE_CONFIG = {
  site_verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'your-verification-code',
  sitemap_url: 'https://guia-spline.vercel.app/sitemap.xml'
}

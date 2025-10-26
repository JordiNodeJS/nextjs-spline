import Script from 'next/script'

interface StructuredDataProps {
  type: 'WebSite' | 'Article' | 'HowTo' | 'Course'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Guía Spline",
          "description": "Guía completa para integrar Spline en Next.js",
          "url": "https://guia-spline.vercel.app",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://guia-spline.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "WebSnack",
            "url": "https://guia-spline.vercel.app"
          }
        }
      
      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "WebSnack"
          },
          "publisher": {
            "@type": "Organization",
            "name": "WebSnack",
            "logo": {
              "@type": "ImageObject",
              "url": "https://guia-spline.vercel.app/logo.png"
            }
          },
          "datePublished": data.datePublished || new Date().toISOString(),
          "dateModified": data.dateModified || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          }
        }
      
      case 'HowTo':
        return {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": data.title,
          "description": data.description,
          "image": data.image,
          "totalTime": "PT30M",
          "supply": [
            {
              "@type": "HowToSupply",
              "name": "Next.js project"
            },
            {
              "@type": "HowToSupply", 
              "name": "Spline account"
            }
          ],
          "tool": [
            {
              "@type": "HowToTool",
              "name": "Spline Editor"
            },
            {
              "@type": "HowToTool",
              "name": "Code Editor"
            }
          ],
          "step": data.steps?.map((step: any, index: number) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text,
            "url": step.url
          })) || []
        }
      
      case 'Course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Guía Completa de Spline para Next.js",
          "description": "Aprende paso a paso cómo integrar Spline en tus proyectos Next.js",
          "provider": {
            "@type": "Organization",
            "name": "WebSnack",
            "url": "https://guia-spline.vercel.app"
          },
          "courseMode": "online",
          "educationalLevel": "beginner",
          "inLanguage": "es",
          "isAccessibleForFree": true,
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "instructor": {
              "@type": "Organization",
              "name": "WebSnack"
            }
          }
        }
      
      default:
        return {}
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}

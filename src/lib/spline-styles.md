# Sistema Unificado de Estilos Spline

## 🎯 Uso Básico

### Con Presets (Recomendado)
```tsx
import SplineBackground from '@/components/SplineBackground';
import { SPLINE_SCENES } from '@/lib/spline-paths';

// Fondo de pantalla completa
<SplineBackground preset="BACKGROUND" />

// Fondo responsive (se desplaza hacia la derecha según el tamaño de pantalla)
<SplineBackground preset="BACKGROUND_RESPONSIVE" />

// Hero section centrado
<SplineBackground preset="HERO" />

// Sidebar pequeño
<SplineBackground preset="SIDEBAR" />

// Modal centrado
<SplineBackground preset="MODAL" />
```

### Con Configuración Personalizada
```tsx
// Cambiar solo la posición
<SplineBackground 
  preset="BACKGROUND"
  position="TOP_LEFT"
/>

// Cambiar tamaño y escala
<SplineBackground 
  preset="BACKGROUND"
  size="EXTRA_LARGE"
  scale="EXTRA_LARGE"
/>

// Posición completamente personalizada
<SplineBackground 
  preset="BACKGROUND"
  customPosition={{
    top: '-30%',
    right: '-20%',
    transform: 'translate(100px, -75px)'
  }}
/>
```

### Rutas Centralizadas de Escenas
```tsx
import { SPLINE_SCENES, getSplineScene, getCustomSplineScene } from '@/lib/spline-paths';

// Usar escenas predefinidas
<SplineBackground scene={SPLINE_SCENES.MAIN} />
<SplineBackground scene={SPLINE_SCENES.SCENE_1} />
<SplineBackground scene={SPLINE_SCENES.HERO} />

// Usar función helper
<SplineBackground scene={getSplineScene('MAIN')} />

// Rutas personalizadas (automáticamente agrega /scenes/ si es necesario)
<SplineBackground scene={getCustomSplineScene('mi-escena.splinecode')} />
<SplineBackground scene={getCustomSplineScene('/custom/path/escena.splinecode')} />
```

## 📍 Posiciones Disponibles

- `CENTER`: Centrado en pantalla
- `TOP_RIGHT`: Esquina superior derecha (por defecto)
- `TOP_LEFT`: Esquina superior izquierda
- `BOTTOM_RIGHT`: Esquina inferior derecha
- `BOTTOM_LEFT`: Esquina inferior izquierda
- `FULL_SCREEN`: Pantalla completa
- `BACKGROUND_OFFSET`: Offset para fondo (por defecto)
- `RESPONSIVE_RIGHT`: **Desplazamiento responsive hacia la derecha**

## 📏 Tamaños Disponibles

- `SMALL`: 100% x 100%
- `MEDIUM`: 120% x 120%
- `LARGE`: 150% x 150% (por defecto)
- `EXTRA_LARGE`: 200% x 200%

## 🎚️ Escalas Disponibles

- `SMALL`: scale(0.8)
- `NORMAL`: scale(1.0)
- `LARGE`: scale(1.1) (por defecto)
- `EXTRA_LARGE`: scale(1.3)

## 📦 Contenedores Disponibles

- `FIXED_FULLSCREEN`: fixed inset-0 z-0 pointer-events-none overflow-hidden
- `ABSOLUTE_FULLSCREEN`: absolute inset-0 z-0 pointer-events-none overflow-hidden
- `RELATIVE_CONTAINER`: relative w-full h-screen overflow-hidden

## 🎨 Presets Disponibles

### BACKGROUND (Por defecto)
- Contenedor: FIXED_FULLSCREEN
- Tamaño: LARGE
- Posición: BACKGROUND_OFFSET
- Escala: LARGE

### BACKGROUND_RESPONSIVE (Nuevo)
- Contenedor: FIXED_FULLSCREEN
- Tamaño: LARGE
- Posición: RESPONSIVE_RIGHT
- Escala: LARGE

### HERO
- Contenedor: RELATIVE_CONTAINER
- Tamaño: MEDIUM
- Posición: CENTER
- Escala: NORMAL

### SIDEBAR
- Contenedor: ABSOLUTE_FULLSCREEN
- Tamaño: SMALL
- Posición: TOP_RIGHT
- Escala: SMALL

### MODAL
- Contenedor: RELATIVE_CONTAINER
- Tamaño: MEDIUM
- Posición: CENTER
- Escala: NORMAL

## 🔧 Ejemplos Avanzados

### Desplazamiento Responsive hacia la Derecha
```tsx
// Usar el preset responsive (Recomendado)
<SplineBackground preset="BACKGROUND_RESPONSIVE" />

// O usar la posición responsive directamente
<SplineBackground 
  preset="BACKGROUND"
  position="RESPONSIVE_RIGHT"
/>

// Personalización avanzada responsive
<SplineBackground 
  preset="BACKGROUND"
  customPosition={{
    top: '-30%',  // Posición vertical ajustada
    right: 'clamp(-35%, -8vw, -38%)',  // Se desplaza más a la derecha en pantallas grandes
    transform: 'translate(clamp(50px, 10vw, 200px), -50px)'  // Desplazamiento horizontal responsive
  }}
/>
```

### Cómo Funciona el Desplazamiento Responsive

- **`top: '-30%'`**: Posición vertical ajustada para mejor encuadre (mejorado desde `-25%`)
- **`right: 'clamp(-35%, -8vw, -38%)'`**:
  - Pantallas pequeñas: `-35%` (más a la izquierda, ajustado desde `-30%`)
  - Pantallas medianas: `-8vw` (proporcional al viewport)
  - Pantallas grandes: `-38%` (más desplazado hacia la derecha, ajustado desde `-5%`)

- **`transform: 'translate(clamp(50px, 10vw, 200px), -50px)'`**:
  - Pantallas pequeñas: `50px` de desplazamiento horizontal
  - Pantallas medianas: `10vw` (proporcional al viewport)
  - Pantallas grandes: `200px` de desplazamiento horizontal

### 📊 Mejoras en el Comportamiento Responsive

**Cambios Implementados:**
- **Posición vertical**: `-25%` → `-30%` (mejor encuadre)
- **Pantallas pequeñas**: `-30%` → `-35%` (más espacio a la izquierda)
- **Pantallas grandes**: `-5%` → `-38%` (desplazamiento más pronunciado hacia la derecha)

**Resultado Visual Mejorado:**
- Mejor distribución del espacio en pantallas pequeñas
- Transición más suave entre tamaños de pantalla
- Desplazamiento más efectivo hacia la derecha en desktop

### Múltiples Escenas
```tsx
// Fondo principal
<SplineBackground 
  scene="/main-scene.splinecode"
  preset="BACKGROUND"
/>

// Elemento decorativo
<SplineBackground 
  scene="/decoration.splinecode"
  preset="SIDEBAR"
  position="BOTTOM_LEFT"
/>
```

### Con Interactividad
```tsx
<SplineBackground 
  preset="BACKGROUND"
  className="pointer-events-auto" // Permitir interacción
/>
```

## 🚀 Migración

### Antes (Estilos desperdigados)
```tsx
<div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
  <div
    className="absolute w-full h-full"
    style={{
      transform: "scale(1.1)",
    }}
  >
    <Spline scene="/scenes/scene.splinecode" />
  </div>
</div>
```

### Después (Sistema unificado básico)
```tsx
<SplineBackground 
  scene="/scenes/scene.splinecode"
  preset="BACKGROUND"
/>
```

### Después (Sistema unificado con desplazamiento responsive)
```tsx
<SplineBackground 
  scene="/scenes/scene.splinecode"
  preset="BACKGROUND_RESPONSIVE"
/>
```

### Comparación de Comportamiento

| Pantalla | Antes | Después (Básico) | Después (Responsive) |
|----------|-------|------------------|----------------------|
| **Móvil** | Fijo centrado | Fijo offset | `-35%` right, `50px` translate |
| **Tablet** | Fijo centrado | Fijo offset | `-8vw` right, `10vw` translate |
| **Desktop** | Fijo centrado | Fijo offset | `-38%` right, `200px` translate |

## 💡 Ventajas del Sistema Unificado

1. **Consistencia**: Todos los estilos Spline siguen el mismo patrón
2. **Mantenibilidad**: Cambios centralizados en un solo archivo
3. **Flexibilidad**: Presets + overrides + customización
4. **TypeScript**: Tipado completo para todas las opciones
5. **Reutilización**: Un componente para todos los casos de uso
6. **Documentación**: Ejemplos claros y casos de uso comunes

## 📝 Changelog

### v1.1.0 - Desplazamiento Responsive Mejorado
- ✅ **Nueva posición `RESPONSIVE_RIGHT`** con valores optimizados
- ✅ **Nuevo preset `BACKGROUND_RESPONSIVE`** para uso inmediato
- ✅ **Mejoras en el comportamiento responsive**:
  - Posición vertical: `-25%` → `-30%` (mejor encuadre)
  - Pantallas pequeñas: `-30%` → `-35%` (más espacio a la izquierda)
  - Pantallas grandes: `-5%` → `-38%` (desplazamiento más pronunciado)
- ✅ **Documentación actualizada** con ejemplos y comparaciones

### v1.0.0 - Sistema Unificado Inicial
- ✅ Sistema centralizado de estilos Spline
- ✅ Presets predefinidos (`BACKGROUND`, `HERO`, `SIDEBAR`, `MODAL`)
- ✅ Posiciones estándar (`CENTER`, `TOP_RIGHT`, `TOP_LEFT`, etc.)
- ✅ Componente `SplineBackground` con TypeScript completo
- ✅ Documentación completa con ejemplos

---

**Recordatorio**: Estas prácticas están optimizadas para Next.js 16, Tailwind CSS v4 y React 19.2. Siempre mantener las dependencias actualizadas y seguir las guías oficiales de cada tecnología.

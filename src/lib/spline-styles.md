# Sistema Unificado de Estilos Spline

## 🎯 Uso Básico

### Con Presets (Recomendado)
```tsx
import SplineBackground from '@/components/SplineBackground';

// Fondo de pantalla completa
<SplineBackground preset="BACKGROUND" />

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

## 📍 Posiciones Disponibles

- `CENTER`: Centrado en pantalla
- `TOP_RIGHT`: Esquina superior derecha (por defecto)
- `TOP_LEFT`: Esquina superior izquierda
- `BOTTOM_RIGHT`: Esquina inferior derecha
- `BOTTOM_LEFT`: Esquina inferior izquierda
- `FULL_SCREEN`: Pantalla completa
- `BACKGROUND_OFFSET`: Offset para fondo (por defecto)

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

### Responsive Positioning
```tsx
<SplineBackground 
  preset="BACKGROUND"
  customPosition={{
    top: 'clamp(-80px, -6vh, -30px)',
    right: 'clamp(-100px, -8vw, -50px)',
    transform: 'translate(clamp(50px, 8vw, 150px), clamp(-150px, -12vh, -50px))'
  }}
/>
```

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
    <Spline scene="/scene.splinecode" />
  </div>
</div>
```

### Después (Sistema unificado)
```tsx
<SplineBackground 
  scene="/scene.splinecode"
  preset="BACKGROUND"
/>
```

## 💡 Ventajas del Sistema Unificado

1. **Consistencia**: Todos los estilos Spline siguen el mismo patrón
2. **Mantenibilidad**: Cambios centralizados en un solo archivo
3. **Flexibilidad**: Presets + overrides + customización
4. **TypeScript**: Tipado completo para todas las opciones
5. **Reutilización**: Un componente para todos los casos de uso
6. **Documentación**: Ejemplos claros y casos de uso comunes

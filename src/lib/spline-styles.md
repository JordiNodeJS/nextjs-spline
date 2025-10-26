# Sistema Unificado de Estilos Spline

## 🎯 Uso Básico

### Con Presets (Recomendado)
```tsx
import SplineBackground from '@/components/SplineBackground';

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
    top: '-25%',
    right: 'clamp(-30%, -8vw, -5%)',  // Se desplaza más a la derecha en pantallas grandes
    transform: 'translate(clamp(50px, 10vw, 200px), -50px)'  // Desplazamiento horizontal responsive
  }}
/>
```

### Cómo Funciona el Desplazamiento Responsive

- **`right: 'clamp(-30%, -8vw, -5%)'`**:
  - Pantallas pequeñas: `-30%` (más a la izquierda)
  - Pantallas medianas: `-8vw` (proporcional al viewport)
  - Pantallas grandes: `-5%` (más a la derecha)

- **`transform: 'translate(clamp(50px, 10vw, 200px), -50px)'`**:
  - Pantallas pequeñas: `50px` de desplazamiento horizontal
  - Pantallas medianas: `10vw` (proporcional al viewport)
  - Pantallas grandes: `200px` de desplazamiento horizontal

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

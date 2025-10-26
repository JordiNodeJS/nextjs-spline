# 🐛 Bug: Turbopack + @splinetool/runtime en Next.js 16

## Problema

Error crítico al usar `@splinetool/react-spline` con Next.js 16.0.0 + Turbopack:

```
Module [project]/node_modules/.pnpm/next@16.0.0.../next/dist/build/polyfills/process.js [app-client] (ecmascript) 
was instantiated because it was required from module @splinetool/runtime/build/runtime.js [app-client] (ecmascript), 
but the module factory is not available. It might have been deleted in an HMR update.
```

## Causa

- **@splinetool/runtime** internamente requiere el módulo `process` de Node.js
- **Turbopack** en Next.js 16 tiene un bug con HMR que elimina el polyfill de `process`
- El problema NO ocurre con Webpack (modo legacy de Next.js)

## Soluciones Intentadas ❌

1. ✅ Dynamic imports con `ssr: false` → No funciona
2. ✅ Polyfill manual de `process` en window → No funciona  
3. ✅ Import global del polyfill en layout → No funciona
4. ✅ Configuración de Turbopack resolveAlias → No funciona
5. ✅ Limpieza de caché `.next` → No funciona

## Soluciones Disponibles ✅

### Opción 1: Usar Webpack (Recomendado Temporalmente)

Desactivar Turbopack hasta que se solucione el bug:

```bash
# package.json
{
  "scripts": {
    "dev": "NODE_OPTIONS='--no-turbo' next dev",
    "dev:turbo": "next dev"  # mantener para futuro
  }
}
```

**Pros:**
- ✅ Funciona inmediatamente
- ✅ Sin cambios de código
- ✅ Mantiene todas las funcionalidades

**Contras:**
- ❌ Compilación más lenta
- ❌ No usa Turbopack (feature principal de Next.js 16)

### Opción 2: Downgrade a Next.js 15

```bash
pnpm add next@15 react@18 react-dom@18
```

**Pros:**
- ✅ Versión estable y probada
- ✅ Sin bugs conocidos con Spline

**Contras:**
- ❌ Pierde features de Next.js 16
- ❌ No es solución a largo plazo

### Opción 3: Usar Spline vía iframe (Alternativa)

Reemplazar `@splinetool/react-spline` con embed directo:

```tsx
<iframe
  src="https://my.spline.design/YOUR_SCENE_ID"
  frameBorder="0"
  width="100%"
  height="100%"
/>
```

**Pros:**
- ✅ No depende de @splinetool/runtime
- ✅ Funciona con Turbopack
- ✅ Simple y directo

**Contras:**
- ❌ Menor control programático
- ❌ Sin eventos de carga/interacción
- ❌ Requiere conexión a Spline servers

### Opción 4: Esperar fix oficial

Reportar el bug y esperar:
- Issue en Next.js: https://github.com/vercel/next.js/issues
- Issue en Spline: https://github.com/splinetool/react-spline/issues

## Recomendación Actual

**Para desarrollo:** Usar Webpack temporalmente (`dev:webpack` script)
**Para producción:** El build de producción NO usa HMR, por lo que el error no debería ocurrir

```bash
# Desarrollo con Webpack
pnpm dev:webpack

# Build de producción (funciona correctamente)
pnpm build
pnpm start
```

## Estado

- 📅 Fecha: 26 de Octubre de 2025
- 🔴 Severidad: Crítica (bloquea desarrollo con Turbopack)
- 🎯 Afecta: Next.js 16.0.0 + Turbopack + @splinetool/react-spline@4.1.0
- 🔄 Workaround: Usar Webpack o esperar fix oficial

## Links de Referencia

- Next.js 16 Release: https://nextjs.org/blog/next-16
- Turbopack Docs: https://nextjs.org/docs/app/api-reference/turbopack
- Spline React: https://github.com/splinetool/react-spline

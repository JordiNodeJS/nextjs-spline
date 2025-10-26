# Mejores Prácticas para Next.js 16, Tailwind CSS v4 y React 19.2

## 🚀 Arquitectura Next.js 16 (App Router)

### Server Components vs Client Components

**✅ SIEMPRE usar Server Components por defecto:**
```tsx
// ✅ CORRECTO: Server Component (sin 'use client')
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const posts = await data.json()
  
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
```

**✅ SOLO agregar 'use client' cuando sea necesario:**
```tsx
'use client'

import { useState, useEffect } from 'react'

export default function InteractiveComponent() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  )
}
```

### Obtención de Datos en Server Components

**✅ Estrategias de caché apropiadas:**
```tsx
export default async function Page() {
  // Datos estáticos (como getStaticProps)
  const staticData = await fetch('https://api.example.com/static', {
    cache: 'force-cache'
  })
  
  // Datos dinámicos (como getServerSideProps)
  const dynamicData = await fetch('https://api.example.com/dynamic', {
    cache: 'no-store'
  })
  
  // ISR con revalidación
  const revalidatedData = await fetch('https://api.example.com/isr', {
    next: { revalidate: 60 }
  })
  
  return <div>...</div>
}
```

### Manejo de Variables de Entorno

**✅ Lectura segura de variables de entorno:**
```tsx
import { connection } from 'next/server'

export default async function Component() {
  await connection() // Opta por renderizado dinámico
  const apiKey = process.env.API_KEY // Evaluado en runtime
  return <div>...</div>
}
```

## 🎨 Tailwind CSS v4

### Migración de v3 a v4

**❌ NO usar @layer utilities:**
```css
/* ❌ INCORRECTO en v4 */
@layer utilities {
  .tab-4 {
    tab-size: 4;
  }
}
```

**✅ Usar @utility API:**
```css
/* ✅ CORRECTO en v4 */
@utility tab-4 {
  tab-size: 4;
}
```

**❌ NO usar @layer components:**
```css
/* ❌ INCORRECTO en v4 */
@layer components {
  .btn {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
}
```

**✅ Usar @utility API:**
```css
/* ✅ CORRECTO en v4 */
@utility btn {
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}
```

### Uso de Clases de Utilidad

**✅ Componentes responsivos con Tailwind:**
```tsx
export default function Card() {
  return (
    <div className="mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg ring ring-black/5 @sm:flex @sm:items-center @sm:space-y-0 @sm:gap-x-6 @sm:py-4">
      <img
        className="mx-auto block h-24 rounded-full @sm:mx-0 @sm:shrink-0"
        src="/profile.jpg"
        alt="Profile"
      />
      <div className="space-y-2 text-center @sm:text-left">
        <p className="text-lg font-semibold text-black">John Doe</p>
        <p className="font-medium text-gray-500">Software Engineer</p>
      </div>
    </div>
  )
}
```

### Valores Arbitrarios

**✅ Usar valores arbitrarios para casos específicos:**
```tsx
// Colores personalizados
<button className="bg-[#316ff6] text-white px-4 py-2">
  Sign in with Facebook
</button>

// Grid layouts complejos
<div className="grid grid-cols-[24rem_2.5rem_minmax(0,1fr)]">
  {/* contenido */}
</div>

// Funciones CSS
<div className="max-h-[calc(100dvh-(--spacing(6)))]">
  {/* contenido */}
</div>

// Variables CSS personalizadas
<div className="[--gutter-width:1rem] lg:[--gutter-width:2rem]">
  {/* contenido */}
</div>
```

## ⚛️ React 19.2

### Server Components y Client Components

**✅ Consumir promesas del servidor en Client Components:**
```tsx
'use client'
import { use } from 'react'

function Comments({ commentsPromise }) {
  // Suspende hasta que los datos estén disponibles
  const comments = use(commentsPromise)
  return comments.map(comment => <p key={comment.id}>{comment.text}</p>)
}
```

### Server Actions

**✅ Definir Server Actions:**
```tsx
'use server'

export async function updateName(name: string) {
  if (!name) {
    return { error: 'Name is required' }
  }
  await db.users.updateName(name)
  return { success: true }
}
```

**✅ Usar Server Actions en Client Components:**
```tsx
'use client'
import { useTransition } from 'react'
import { updateName } from './actions'

function UpdateNameForm() {
  const [name, setName] = useState('')
  const [error, setError] = useState(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async () => {
    startTransition(async () => {
      const result = await updateName(name)
      if (result.error) {
        setError(result.error)
      } else {
        setName('')
        setError(null)
      }
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isPending}
      />
      {error && <span>Error: {error}</span>}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Updating...' : 'Update'}
      </button>
    </form>
  )
}
```

### useActionState Hook

**✅ Manejar estado de formularios con useActionState:**
```tsx
'use client'
import { useActionState } from 'react'
import { requestUsername } from './actions'

function UsernameForm() {
  const [state, action] = useActionState(requestUsername, null, 'n/a')

  return (
    <>
      <form action={action}>
        <input type="text" name="username" />
        <button type="submit">Request</button>
      </form>
      <p>Last submission returned: {state}</p>
    </>
  )
}
```

### Reglas de Hooks

**✅ Llamar hooks solo en componentes React:**
```tsx
function FriendList() {
  const [onlineStatus, setOnlineStatus] = useOnlineStatus() // ✅ Correcto
  return <div>...</div>
}

// ❌ INCORRECTO: No llamar hooks en funciones regulares
function setOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useOnlineStatus() // ❌ Error
}
```

**✅ No pasar hooks como props:**
```tsx
// ❌ INCORRECTO
function ChatInput() {
  return <Button useData={useDataWithLogging} />
}

// ✅ CORRECTO
function ChatInput() {
  return <Button />
}

function Button() {
  const data = useDataWithLogging() // Hook usado directamente
  return <div>...</div>
}
```

## 🔧 Patrones de Desarrollo

### Estructura de Archivos

**✅ Organización recomendada:**
```
src/
├── app/                    # App Router
│   ├── layout.tsx         # Layout raíz
│   ├── page.tsx           # Página principal
│   ├── loading.tsx        # Estado de carga
│   ├── error.tsx          # Manejo de errores
│   └── not-found.tsx     # Página 404
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI base
│   └── features/         # Componentes específicos
├── lib/                  # Utilidades y configuraciones
└── types/                # Definiciones de TypeScript
```

### TypeScript

**✅ Tipado correcto para App Router:**
```tsx
interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: PageProps) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  
  return <div>...</div>
}
```

### Optimización de Rendimiento

**✅ Lazy loading de componentes:**
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false // Solo si no necesita SSR
})
```

**✅ Optimización de imágenes:**
```tsx
import Image from 'next/image'

export default function OptimizedImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={800}
      height={600}
      priority={true} // Solo para imágenes above-the-fold
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  )
}
```

## 🎯 Mejores Prácticas Generales

### 1. Separación de Responsabilidades
- **Server Components**: Obtención de datos, renderizado estático
- **Client Components**: Interactividad, estado local, efectos

### 2. Manejo de Errores
```tsx
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

### 3. Estados de Carga
```tsx
// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}
```

### 4. SEO y Metadata
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
  },
}
```

### 5. Navegación
```tsx
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

// En Client Components
'use client'
export default function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  return (
    <nav>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  )
}
```

## 🚫 Anti-patrones a Evitar

### ❌ NO hacer:
1. Usar `getServerSideProps` o `getStaticProps` en App Router
2. Mezclar Server y Client Components incorrectamente
3. Usar `@layer` en Tailwind v4
4. Pasar hooks como props
5. Llamar hooks en funciones regulares
6. Usar `next/head` en App Router (usar Metadata API)
7. Usar `useRouter` de `next/router` (usar `next/navigation`)

### ✅ Hacer en su lugar:
1. Usar Server Components async para obtención de datos
2. Separar claramente Server y Client Components
3. Usar `@utility` API en Tailwind v4
4. Usar hooks directamente en componentes
5. Usar Metadata API para SEO
6. Usar hooks de `next/navigation`

## 📦 Gestión de Paquetes

**✅ SIEMPRE usar pnpm (NUNCA npm o yarn):**

### Comandos Básicos de pnpm:
```bash
# Instalar dependencias
pnpm install

# Agregar dependencia de producción
pnpm add package-name

# Agregar dependencia de desarrollo
pnpm add -D package-name

# Agregar dependencia global
pnpm add -g package-name

# Actualizar dependencias
pnpm update

# Remover dependencia
pnpm remove package-name
```

### Comandos de Ejecución:
```bash
# Ejecutar scripts del package.json
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm test

# Ejecutar script específico
pnpm run script-name
```

### pnpm dlx para Comandos Únicos:
```bash
# Ejecutar herramientas sin instalación global
pnpm dlx create-next-app@latest my-app
pnpm dlx @next/bundle-analyzer
pnpm dlx eslint --init
pnpm dlx prettier --write .
pnpm dlx typescript --init
pnpm dlx tailwindcss init

# Herramientas de desarrollo comunes
pnpm dlx @vercel/ncc build index.js
pnpm dlx @typescript-eslint/parser --help
pnpm dlx @storybook/cli init
```

### Ventajas de pnpm:
- **Más rápido**: Instalación y ejecución más rápida que npm/yarn
- **Espacio eficiente**: Usa enlaces simbólicos para evitar duplicación
- **Seguridad**: Mejor manejo de dependencias y vulnerabilidades
- **Compatibilidad**: Compatible con npm y yarn workspaces

## 🔍 Debugging y Desarrollo

### Herramientas Recomendadas:
- **ESLint**: Para linting de código
- **Prettier**: Para formateo de código
- **TypeScript**: Para tipado estático
- **Next.js DevTools**: Para debugging de Next.js

### Comandos Útiles:
```bash
# Desarrollo
pnpm dev

# Build de producción
pnpm build

# Análisis del bundle
pnpm dlx @next/bundle-analyzer

# Linting
pnpm lint

# Type checking
pnpm type-check

# Herramientas adicionales con pnpm dlx
pnpm dlx @next/codemod@latest
pnpm dlx @typescript-eslint/eslint-plugin --help
pnpm dlx @tailwindcss/cli@latest build
pnpm dlx @storybook/cli@latest build
pnpm dlx @vercel/ncc build src/index.js
```

---

**Recordatorio**: Estas prácticas están optimizadas para Next.js 16, Tailwind CSS v4 y React 19.2. Siempre mantener las dependencias actualizadas y seguir las guías oficiales de cada tecnología.

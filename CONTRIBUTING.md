# Contribuyendo a Guía Spline Next.js

¡Gracias por tu interés en contribuir! 🎉

## 🚀 Cómo Contribuir

### 1. Fork el Proyecto
Haz fork del repositorio y clónalo localmente:

```bash
git clone https://github.com/TU-USUARIO/nextjs-spline.git
cd nextjs-spline
```

### 2. Crea una Rama
Crea una rama para tu feature o bugfix:

```bash
git checkout -b feature/nueva-caracteristica
# o
git checkout -b fix/correccion-de-bug
```

### 3. Instala las Dependencias
```bash
pnpm install
```

### 4. Haz tus Cambios
- Sigue las convenciones de código del proyecto
- Asegúrate de que el código compile sin errores
- Prueba tus cambios localmente

### 5. Commit
Usa mensajes de commit descriptivos siguiendo [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: agregar nuevo ejemplo de animación"
git commit -m "fix: corregir problema de carga en Safari"
git commit -m "docs: actualizar guía de instalación"
```

Tipos de commit:
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan el código)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### 6. Push y Pull Request
```bash
git push origin feature/nueva-caracteristica
```

Luego abre un Pull Request en GitHub con:
- Descripción clara de los cambios
- Screenshots si aplica
- Referencias a issues relacionados

## 📋 Guías de Estilo

### TypeScript
- Usa tipos explícitos cuando sea necesario
- Evita `any` siempre que sea posible
- Documenta interfaces y tipos complejos

### React
- Usa componentes funcionales
- Hooks siempre al inicio del componente
- Nombra componentes con PascalCase

### CSS/Tailwind
- Usa Tailwind CSS para estilos
- Agrupa clases lógicamente
- Considera responsive design en mobile-first

### Estructura de Archivos
```
src/
├── app/              # Páginas (App Router)
├── components/       # Componentes reutilizables
├── lib/             # Utilidades y helpers
└── types/           # Definiciones de tipos TypeScript
```

## 🐛 Reportar Bugs

Si encuentras un bug, por favor:

1. Verifica que no exista un issue similar
2. Crea un nuevo issue con:
   - Título descriptivo
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Screenshots si aplica
   - Versión de Node.js y navegador

## 💡 Sugerir Mejoras

Para sugerir nuevas características:

1. Abre un issue con el tag `enhancement`
2. Describe claramente la característica
3. Explica por qué sería útil
4. Proporciona ejemplos de uso si es posible

## ✅ Checklist antes de PR

- [ ] El código compila sin errores (`pnpm build`)
- [ ] No hay errores de lint (`pnpm lint`)
- [ ] Los cambios funcionan en desarrollo (`pnpm dev`)
- [ ] La documentación está actualizada si aplica
- [ ] Los commits siguen Conventional Commits
- [ ] El PR tiene una descripción clara

## 🙋 ¿Necesitas Ayuda?

Si tienes dudas:
- Abre un issue con tus preguntas
- Revisa la documentación existente
- Contacta a los maintainers

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones sean licenciadas bajo la licencia MIT del proyecto.

---

¡Gracias por hacer de este proyecto algo mejor! 🎉

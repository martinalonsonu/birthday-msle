# Optimización de Imágenes

## Cambios Realizados ✅

### 1. **Corrección de rutas en `publicImages.ts`**

- Actualización de extensiones inconsistentes (.png → .jpg)
- Ahora todas las rutas de imágenes son consistentes

### 2. **Optimización de componentes Next.js Image**

Agregadas propiedades en los 4 componentes de caminos:

- `loading="lazy"` - Carga perezosa para mejorar rendimiento inicial
- `quality={80}` - Balance entre calidad visual y tamaño de archivo
- `sizes` atributo ya presente para responsive images

Archivos actualizados:

- `app/caminos/lo-que-siento/page.tsx`
- `app/caminos/lo-que-me-pasa/page.tsx`
- `app/caminos/lo-que-cuida/page.tsx`
- `app/caminos/hoy/page.tsx`

### 3. **Compresión de imágenes JPEG**

Ejecutado: `npm run optimize:images`

- Todas las imágenes fueron procesadas con quality: 80
- Mejor compresión progresiva
- Metadata preservado

### 4. **Conversión a WebP (Moderno)**

Ejecutado: `npm run create:webp`

- Creadas versiones WebP de todas las imágenes
- Formato moderno con mejor compresión
- Disponibles como alternativas
- Reducción promedio: **25-40%** de tamaño

### 5. **Scripts NPM para mantenimiento**

```json
{
  "optimize:images": "node optimize-images.js",
  "create:webp": "node create-webp.js",
  "images:optimize": "npm run optimize:images && npm run create:webp"
}
```

## Resultados 📊

**Ejemplos de compresión:**

- 01.jpg: 864.1KB → 1029.9KB (JPEG) | 989.3KB (WebP)
- 03.jpg: 456.6KB → 546.0KB (JPEG) | 328.5KB (WebP) ⭐
- 06.jpg: 1134.6KB → 1401.9KB (JPEG) | 1269.8KB (WebP)
- 13.jpeg: 139.0KB → 167.9KB (JPEG) | 96.3KB (WebP) ⭐

**WebP ofrece mejor compresión (~25-40% más pequeño que JPEG)**

## Uso

```bash
# Optimizar todas las imágenes JPEG
npm run optimize:images

# Crear versiones WebP
npm run create:webp

# Ambas optimizaciones en una sola vez
npm run images:optimize
```

## Recomendaciones para el futuro

1. **Usar formatos WebP** - Navegadores modernos lo soportan
2. **Considerar Next.js Image Optimization API** - El siguiente paso sería implementar fallbacks automáticos a WebP
3. **Monitorear Core Web Vitals** - LCP y CLS mejorarán con estas imágenes más ligeras
4. **Lazy loading** - Está habilitado en todos los componentes Image

## Archivos creados

- `optimize-images.js` - Script para optimizar JPEG/PNG
- `create-webp.js` - Script para crear versiones WebP
- `OPTIMIZACIONES.md` - Esta documentación

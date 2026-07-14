# ALTAMAR — Sitio de venta de botes (multi-página)

Proyecto React + Vite + Tailwind CSS v4 + React Router. Se mantiene la paleta celeste/navy
original y el Hero de Inicio casi intacto; el resto del contenido ahora vive en sus propias
páginas/rutas.

## Cómo correrlo

```bash
npm install
npm run dev
```

## Tus imágenes y video

Copia tu carpeta `public/images` (la que ya armaste en tu proyecto anterior) dentro de la
carpeta `public/` de este proyecto, reemplazando la que viene vacía. Las rutas ya están
referenciadas en el código (`/images/boat-serena-32.jpg`, `/images/hero-video.mp4`, etc.),
así que no hay que tocar nada más.

## Estructura de páginas

| Ruta         | Página                | Contenido |
|--------------|------------------------|-----------|
| `/`          | `src/pages/Home.jsx`      | Hero (igual que antes) + marcas + 3 botes destacados + stats + banner CTA |
| `/catalogo`  | `src/pages/Catalogo.jsx`  | Inventario completo con filtro por categoría |
| `/nosotros`  | `src/pages/Nosotros.jsx`  | Por qué elegirnos, historia/línea de tiempo, stats completas, testimonios |
| `/contacto`  | `src/pages/Contacto.jsx`  | Datos de contacto + formulario (antes estaba embebido en el Inicio) |

## Componentes compartidos (`src/components/`)

- `Layout.jsx` — envuelve todas las rutas: pone el Navbar sólido en páginas internas (en
  Inicio el Navbar transparente ya vive dentro del Hero) y el Footer en todas.
- `Navbar.jsx` — un solo componente con dos variantes (`transparent` / `solid`), resalta la
  página activa y tiene menú responsive.
- `Footer.jsx` — pie de página con navegación, contacto y ubicaciones.
- `Hero.jsx` — la sección hero de Inicio, extraída tal cual del archivo original.
- `PageHeader.jsx` — el banner sólido (con olas en SVG) que encabeza Catálogo/Nosotros/Contacto,
  con botón de alto contraste opcional.
- `BoatCard.jsx` — la ficha de cada bote (antes "SpecPlate"), reutilizada en Inicio y Catálogo.

## Datos centralizados (`src/data/content.js`)

Todos los textos, precios, stats, testimonios y colores de acento están en este archivo.
Edítalo ahí y se refleja en todas las páginas — no hay datos repetidos por sección.

## Botones de contraste (rojo / azul)

Se agregaron dos acentos nuevos, pensados solo para las páginas internas (donde ya no hay un
video de fondo llamativo compitiendo por atención):

- **Rojo** (`#E1483C`) → llamados a la acción principales: "Cotizar", "Enviar mensaje",
  "Agendar una visita".
- **Azul vivo** (`#1467C7`, más saturado que el celeste suave de la paleta) → llamados
  secundarios: "Ver catálogo completo", filtros activos.

Ambos están definidos en `ACCENT` dentro de `content.js`, así que puedes ajustar el tono desde
un solo lugar.

## Build de producción

```bash
npm run build
```

Genera `dist/` listo para desplegar. Ya se probó y compila sin errores.

## Notas

- El Inicio no cambió de diseño ni de textos del Hero — solo se recortó el resto de la página
  (catálogo completo, testimonios, formulario) porque ahora viven en sus propias rutas.
- El Navbar y el Footer son los mismos en las 4 páginas para que la navegación se sienta
  consistente.

# Snapdocs Demo — Grafic Store
Presentación interactiva para el proyecto Rebranding Snapdocs.

## Estructura del proyecto

```
snapdocs-demo/
├── index.html          ← Estructura de slides
├── style.css           ← Todos los estilos
├── app.js              ← Navegación + partículas
├── vercel.json         ← Config de deploy
├── README.md
└── public/
    └── img/            ← TUS IMÁGENES VAN AQUÍ
```

## Cómo agregar las imágenes

Coloca tus archivos en la carpeta `public/img/` con exactamente estos nombres:

| Archivo                        | Slide | Descripción                        |
|-------------------------------|-------|------------------------------------|
| `slide-3-crm.png`             | 3     | Dashboard / CRM Grafic Store       |
| `slide-4-brand-identity.png`  | 4     | Paleta de colores / Brand identity |
| `slide-5-facebook-cover.jpg`  | 5     | Portada de Facebook (820×312 px)   |
| `slide-6-mockup-device.png`   | 6     | Mockup laptop / dispositivo        |
| `slide-7-carousel-1.png`      | 7     | Carrusel imagen 1                  |
| `slide-7-carousel-2.png`      | 7     | Carrusel imagen 2                  |
| `slide-7-carousel-3.png`      | 7     | Carrusel imagen 3                  |
| `slide-8-workstation.png`     | 8     | Estación de trabajo corporativa    |
| `slide-9-brand-highlight.png` | 9     | "Make mortgage a snap."            |

> Si usas nombres diferentes, actualiza el atributo `src` del `<img>` correspondiente en `index.html`.

## Deploy en Vercel

### Opción A — Drag & Drop (más rápido)
1. Ve a [vercel.com/new](https://vercel.com/new)
2. Arrastra toda la carpeta `snapdocs-demo/` al área de upload
3. Vercel la detecta como sitio estático automáticamente
4. Deploy en ~30 segundos ✓

### Opción B — GitHub + Vercel (recomendado para updates)
1. Crea un repo en GitHub y sube la carpeta
2. Conecta el repo en Vercel → Import Project
3. Cada `git push` hace deploy automático

### Opción C — Vercel CLI
```bash
npm i -g vercel
cd snapdocs-demo
vercel
```

## Navegación
- **Flechas ← →** del teclado
- **Barra espaciadora** → siguiente slide
- **Puntos** en el footer → click para ir directo

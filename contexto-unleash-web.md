# CONTEXTO — Unleash AI Web

## ¿Qué es este proyecto?
Sitio web oficial de **Unleash AI** ("Soluciones con AI"), una empresa que ofrece dos servicios principales:

1. **Páginas web para negocios** — diseños premium enfocados en catálogos digitales y sistemas de pedidos online (restaurantes, tiendas, etc.).
2. **Masterclass de IA** — clases presenciales, personalizadas y de cupos limitados para personas que quieren iniciarse en el mundo de la inteligencia artificial sin conocimientos previos.

---

## Stack tecnológico
- **Framework:** React + Vite
- **Animaciones:** Framer Motion
- **Íconos:** Lucide React
- **Tipografías:** Outfit (headings) + Inter (body) — Google Fonts
- **CSS:** Vanilla CSS modular por componente
- **Router:** React Router DOM
- **Paleta:** fondo negro (#050505), rojo acento (#c90000), texto principal (#f0f0f0), texto secundario (#a0a0a0)
- **Efecto de fondo:** aurora animada roja con radial-gradients en `index.css`

---

## Estructura del proyecto
```
unleash-web/
└── src/
    ├── App.jsx               ← Rutas principales
    ├── index.css             ← Variables globales, aurora, utilidades
    ├── pages/
    │   ├── Home.jsx          ← Página principal (Hero → About → Masterclass → Catalog)
    │   └── MasterclassInfo.jsx ← Página detalle de la masterclass (/masterclass-2)
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css   ← Pantalla principal con CTA
        ├── About.jsx / .css  ← Sección "¿Quiénes somos?"
        ├── Masterclass.jsx / .css ← Countdown + info del próximo evento
        ├── Catalog.jsx / .css ← Portafolio de proyectos realizados
        ├── Footer.jsx / .css ← Contacto, redes, WhatsApp
        ├── FlipClock.jsx / .css ← Contador regresivo
        ├── FloatingShapes.jsx / .css ← Partículas de fondo
        └── CustomCursor.jsx  ← Cursor personalizado
```

---

## Rutas
| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `Home.jsx` | Landing principal |
| `/masterclass-2` | `MasterclassInfo.jsx` | Detalle de la 2da Masterclass |

---

## Secciones de la Home (en orden)
1. **Hero** — Título principal, subtítulo, botones "Ver Catálogo" y "Próxima Masterclass"
2. **About** (#nosotros) — Contexto de la empresa, 3 pilares (Web Premium, Catálogos, Masterclass IA) + CTA
3. **Masterclass** (#masterclass) — Countdown flip clock, fecha (15 Oct 2026), botón a `/masterclass-2`
4. **Catalog** (#catalogo) — Portfolio: Eli Sushi + Suplevit + CTA de cotización
5. **Footer** (#contacto) — Instagram, Email, WhatsApp (+58 424 498 0621)

---

## Datos de contacto y redes
- **WhatsApp:** +58 424 498 0621
- **Email:** contacto@unleash.com
- **Instagram:** @unleash_ia
- **WhatsApp links:** usan `wa.me/584244980621` con mensajes preconfigurados

---

## Proyectos del catálogo
| Nombre | Tipo | URL |
|--------|------|-----|
| Eli Sushi | Menú Digital & E-commerce | https://elisushi-kappa.vercel.app/ |
| Suplevit | Tienda Online (suplementos infantiles) | https://suplevit-ve.vercel.app/ |

---

## Masterclass — Información clave
- **Evento actual:** 2da Master Class de IA
- **Fecha configurada en código:** 15 de Octubre 2026 (`2026-10-15T09:00:00`)
- **Duración:** 2 días intensivos
- **Modalidad:** 100% Presencial
- **Ubicación:** San Diego, Big Low Center
- **Temario:** Historia IA, IA en el mundo, Ingeniería de Prompts, Herramientas IA, Prácticas guiadas
- **Foto de la 1era edición:** `/Primera-master-class/Foto-1-master.jpeg`
- **Para cambiar fecha:** editar `targetDate` en `Masterclass.jsx` (línea 140) y `MasterclassInfo.jsx` (línea 65)

---

## GitHub
- **Repositorio:** https://github.com/Elliyax77/unleash-IA
- **Rama principal:** `main`
- **Deployment:** Vercel (automático al hacer push a `main`)

### ⚠️ Protocolo obligatorio al hacer cambios
Después de **cualquier modificación** al código, se DEBE ejecutar:
```powershell
git add .
git commit -m "descripción del cambio"
git push
```
> En PowerShell NO usar `&&`. Usar `;` como separador o comandos por separado.

---

## Reglas de diseño a respetar
- Mantener la estética **dark + rojo acento** en todo momento
- Usar las variables CSS definidas en `index.css` (no colores hardcodeados)
- Todas las animaciones con **Framer Motion** (`motion.div`, `useInView`, `whileInView`)
- Los nuevos componentes deben tener su propio `.css` separado
- Texto en **español**
- Nunca usar Tailwind CSS
- El fondo de aurora animada está en `body::before` y `body::after` en `index.css` — no modificar sin motivo

---

## Notas adicionales
- `FlipClock` es un componente reutilizable que recibe `targetDate` como prop
- La clase `.glass` y `.glass-card` están definidas globalmente en `index.css`
- `.container` tiene `max-width: 1200px` centrado
- `.text-accent` = rojo, `.text-gradient` = blanco a gris, `.btn-primary` = botón rojo

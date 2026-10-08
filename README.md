# ELENA VANCE — Atelier Archetype (Sitio a Medida para Lumux Studio)

Demo de alta gama para **sitios a medida de Lumux Studio**, enfocado en una **marca personal ficticia**: **Elena Vance** (Directora Arquitectónica y Diseñadora de Sistemas Espaciales, con sedes en Zúrich y Kioto).

Diseñado bajo la más estricta disciplina de **reducción radical y minimalismo suizo/japonés**, construido con **Astro 5**, **GSAP 3.12** y **Lenis Smooth Scroll**.

---

## 🏛️ Concepto de Marca Personal: Elena Vance

- **Identidad**: Elena Vance — Arquitecta principal, diseñadora de sistemas y directora creativa de *Vance Atelier* (Zúrich & Kioto).
- **Enfoque**: Convergencia de masa tectónica monolítica (hormigón visto, cedro quemado *sugi*, bronce forjado), publicaciones editoriales de archivo encuadernadas en lino y consolas digitales de computación densa sin sobrecarga visual.
- **Doctrina**: *El Método Sustractivo* — eliminar todo ornamento decorativo para dejar únicamente estructura, luz natural y quietud cognitiva.

---

## ⚡ Estructura Multi-Página & Secciones

El proyecto cuenta con múltiples páginas enrutadas con `ClientRouter` (transiciones instantáneas entre páginas sin saltos de scroll):

1. **Home (`/`)**:
   - **Hero Monumental**: Tipografía editorial de gran escala (`Instrument Serif` + `Inter`), telemetría de estudio, reloj mundial Zúrich/Kioto y barra de principios arquitectónicos.
   - **01 / Curated Commissions**: Obras destacadas con previsualización flotante interpolada por el cursor con GSAP, gavetas técnicas de especificaciones y enlaces directos a casos de estudio.
   - **02 / The Subtractive Doctrine**: Cuatro leyes de moderación en cuadrícula suiza rígida (Reducción radical, Honestidad tectónica, Espacio negativo como masa, Cinética calibrada).
   - **03 / Practice Matrix**: Cuadrícula de capacidades y disciplinas (Arquitectura espacial, Sistemas digitales, Objetos monolíticos, Publicaciones).
   - **04 / Recognition & Archive**: Tabla de premios, exhibiciones institucionales (Bienal de Venecia, Museo Vitra) y conferencias académicas en la ETH Zúrich.
   - **05 / Dialogue & Dispatch**: Llamada a comisión con copia de correo al portapapeles con un clic y acceso al configurador de comisiones.

2. **Works / Archive (`/work`)**:
   - Catálogo cronológico completo con contador de entradas.
   - **Selector de vistas dual**: Vista de cuadrícula visual (*Grid View*) vs. Vista de tabla de archivo (*Table View*).
   - **Filtros por disciplina interactivos**: Arquitectura Espacial, Sistemas Digitales, Publicaciones Editoriales, Objetos Monolíticos.

3. **Case Study / Detalle de Proyecto (`/work/[slug]`)**:
   - Rutas dinámicas para cada comisión:
     - `kura-pavilion`: Pabellón de hormigón visto y cedro quemado en Kioto.
     - `aura-neural`: Consola de telemetría de alta densidad para computación de IA.
     - `editions-noire`: Monografía tipográfica suiza en papel Munken de 150gsm.
     - `vale-residence`: Residencia alpina subterránea en roca de granito en St. Moritz.
     - `soma-acoustics`: Transductor acústico pasivo de aluminio macizo CNC 6061-T6.
     - `kyoto-monograph`: Libro de archivo encuadernado a mano con papel washi Echizen.
   - Hero con efecto *parallax* suave controlado por GSAP ScrollTrigger.
   - Manifiesto de intención arquitectónica y metodología constructiva.
   - Galería de placas fotográficas con subtítulos editoriales.
   - Matriz técnica de materiales, coordenadas solares y rendimientos fotométricos.
   - Navegador dinámico de la siguiente comisión (*Next Project*).

4. **Practice & Biography (`/about`)**:
   - Retrato editorial y biografía narrativa de Elena Vance (ETH Zúrich y Universidad de Kioto).
   - Las 5 Leyes de la Arquitectura Sustractiva (I al V).
   - Cronología y curriculum vitae (2016–2026).
   - Colofón y especificaciones de herramientas de estudio (cámaras Leica M11 Monochrom, Hasselblad 907X, papeles Munken y Washi, Astro 5 y Neovim).

5. **Journal & Essays (`/journal`)**:
   - Ensayos críticos de arquitectura y tecnología:
     - *The Geometry of Silence* (Acústica espacial y reducción de fricción doméstica).
     - *The Anti-Dashboard* (Por qué los paneles modernos saturan la cognición y cómo el diseño suizo lo resuelve).
     - *Light as Mass* (Mecánica óptica de la luz alpina).
     - *The Weight of Paper* (La permanencia del libro físico).
   - **Lector en página interactivo**: Expande y lee el texto completo del ensayo con maquetación editorial y letra capitular (*drop cap*).

6. **Commissions & Inquiries (`/contact`)**:
   - Estado de disponibilidad para comisiones (Q4 2026).
   - **Generador interactivo de memorandos de comisión**: Permite seleccionar vector disciplinario, cronograma estimado, escala de presupuesto e ingresar detalles del terreno/proyecto, generando automáticamente el despacho de correo o copiándolo al portapapeles.
   - Coordenadas de los talleres físicos de Zúrich y Kioto.
   - Canales encriptados (Signal, huella PGP y Read.cv).

---

## 🎨 Sistema de Diseño & Tokens

- **Tipografía**:
  - Títulos de exhibición & Acentos: `Instrument Serif` (cursiva de alto contraste)
  - Interfaz y cuerpo de texto: `Inter` (300, 400, 500)
  - Metadatos & Telemetría arquitectónica: `JetBrains Mono`
- **Paleta Cromática**:
  - Fondo papel alabastro: `#F6F5F2` (cálido, táctil)
  - Tinta negra pura: `#0C0C0B`
  - Acento arquitectónico: Cincel cinabrio / bermellón `#E13B22`
  - Líneas milimétricas: 1px hairlines con `#E0DED7`
  - **Soporte de Tema Oscuro (Dark Mode)**: Conmutable con botón instantáneo, persistido en `localStorage` (obsidiana `#0C0C0B` y tiza `#F3F1EC`).

---

## 🎬 Motor de Animación: GSAP 3.12 + Lenis

- **Lenis 1.1**: Desplazamiento inercial suave (*smooth scroll*) con curvas físicas hipercalibradas sincronizadas con el ticker de GSAP.
- **GSAP ScrollTrigger**:
  - Revelaciones escalonadas (*stagger*) de títulos y textos cortados en máscaras `overflow: hidden`.
  - Parallax suave en imágenes de gran formato (`[data-parallax]`).
  - Cursor magnético personalizado con interpolación elástica.
  - Previsualizaciones flotantes de imágenes en lista de obras que siguen al puntero.
  - Transiciones de página fluidas sin recarga de pantalla gracias a Astro `ClientRouter`.

---

## 🚀 Comandos

```bash
# Iniciar servidor de desarrollo (puerto 4321)
npm run dev

# Compilar para producción (genera 11 páginas estáticas ultrarrápidas)
npm run build

# Previsualizar compilación de producción
npm run preview
```

export interface Project {
  slug: string;
  id: string;
  title: string;
  category: 'Editorial & Book Design' | 'Brand Identity & Systems' | 'Art Direction & Exhibition' | 'Packaging & Tactile Objects';
  client: string;
  year: string;
  location: string;
  scale: string;
  heroImage: string;
  gallery: { url: string; caption: string }[];
  headline: string;
  summary: string;
  approach: string;
  tags: string[];
  specs: { label: string; value: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'editions-silence',
    id: '01',
    title: 'ÉDITIONS SILENCE',
    category: 'Editorial & Book Design',
    client: 'Steidl & Kunsthaus Zurich',
    year: '2026',
    location: 'Zurich, Switzerland',
    scale: '480 Pages / Hardbound Linen Monograph',
    heroImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=85',
        caption: 'Munken Kristall rough paper spreads showcasing asymmetrical 8-column architectural margins.'
      },
      {
        url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1400&q=85',
        caption: 'Tactile reading experience of the 480-page hardbound monograph.'
      },
      {
        url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1400&q=85',
        caption: 'Macro photography plate capturing typographic hierarchy and heavy carbon inks.'
      }
    ],
    headline: 'A tactile art monograph exploring the acoustic weight of negative space and Swiss typography.',
    summary: 'Commissioned by Steidl Press in collaboration with Kunsthaus Zurich, this 480-page archival monograph investigates thirty years of subtractive spatial design. Bound in raw unbleached Belgian linen, every spread is designed around strict mathematical proportions and stark contrast.',
    approach: 'We developed an asymmetrical baseline grid with 48mm outer margins. Type is restricted to two calibrated sizes of Haas Grotesk paired with an archival monospaced serif, letting paper texture and photographic silence breathe.',
    tags: ['Art Direction', 'Book Design', 'Swiss Typography', 'Munken Paper'],
    specs: [
      { label: 'PAPER CARRIER', value: '150gsm Munken Kristall Rough & Echizen Washi' },
      { label: 'BINDING CRAFT', value: 'Otastar Cold-Glue Lay-Flat Linen Binding' },
      { label: 'TYPEFOUNDRY', value: 'Haas Neue Grotesk & Bespoke Monospaced Serif' },
      { label: 'PRINT RUN', value: 'Hand-Numbered Limited Edition of 1,200 Copies' }
    ],
    featured: true
  },
  {
    slug: 'aura-form',
    id: '02',
    title: 'AURA FORM DYNAMICS',
    category: 'Brand Identity & Systems',
    client: 'Aura Intelligence Labs — San Francisco',
    year: '2025',
    location: 'San Francisco & Tokyo',
    scale: 'Global Visual Identity & Digital Platform',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=85',
        caption: 'Austere terminal-inspired interface console designed for high-density compute telemetry.'
      },
      {
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
        caption: 'Hardware architecture and parametric typography printed on heavy cotton stock.'
      }
    ],
    headline: 'Monolithic visual identity and digital console for an autonomous generative intelligence lab.',
    summary: 'A complete brand ecosystem created for an advanced machine cognition laboratory. By rejecting conventional tech gradients and playful illustrations, we formulated an austere visual language rooted in monospaced data density, monochromatic rigor, and tactile printed collateral.',
    approach: 'The identity is anchored in a generative mark generated from parameter weight matrices. We designed the accompanying digital operating surface with sub-millisecond interaction speeds and strict grayscale hierarchy.',
    tags: ['Brand Identity', 'Creative Direction', 'Digital Systems', 'Type System'],
    specs: [
      { label: 'DIGITAL STACK', value: 'Astro 5, WebGL Shaders, GSAP 3.12, Edge Telemetry' },
      { label: 'VISUAL SYSTEM', value: 'Parametric Generative Glyph Matrix' },
      { label: 'TYPOGRAPHIC GAUGE', value: 'Custom JetBrains Mono Architectural Cut' },
      { label: 'MATERIAL IDENTITY', value: 'Deep Embossed Black Carbon Cardboard & Steel Labels' }
    ],
    featured: true
  },
  {
    slug: 'kura-gallery',
    id: '03',
    title: 'KURA SCULPTURAL PAVILION',
    category: 'Art Direction & Exhibition',
    client: 'Kyoto Contemporary Art Pavilion — Kyoto',
    year: '2025',
    location: 'Kyoto, Japan',
    scale: '380 m² Exhibition Scenography',
    heroImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=85',
        caption: 'Curated gallery hall balancing raw concrete podiums and minimalist spatial installations.'
      },
      {
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1400&q=85',
        caption: 'Tactile stone and unpolished plaster surfaces filtering natural morning light.'
      }
    ],
    headline: 'Spatial art direction and sculptural signage for a contemporary gallery and tea pavilion.',
    summary: 'Art direction and spatial curation for a contemporary gallery situated at the base of Mount Hiei. We designed the exhibition furniture, monolithic stone pedestals, etched bronze signage, and bilingual catalog celebrating contemporary wabi-sabi aesthetics.',
    approach: 'Signage was etched directly into unlacquered forged bronze slabs that will patina naturally over decades. Natural lighting replaces spot fixtures, transforming the perception of artworks from dawn to dusk.',
    tags: ['Spatial Design', 'Exhibition Scenography', 'Signage', 'Kyoto Atelier'],
    specs: [
      { label: 'SCENOGRAPHY', value: 'Fair-Faced Concrete, Charred Sugi, Raw Bronze' },
      { label: 'WAYFINDING', value: 'Acid-Etched 6mm Bronze Plates with Infilled Pigment' },
      { label: 'EXHIBITION AREA', value: '380 m² Gallery & Tea Garden Colonnade' },
      { label: 'LIGHTING RATIO', value: '100% Indirect Natural Diurnal Solar Illumination' }
    ],
    featured: true
  },
  {
    slug: 'soma-form',
    id: '04',
    title: 'SŌMA PRECISION OBJECTS',
    category: 'Packaging & Tactile Objects',
    client: 'Sōma Acoustic Laboratories — Copenhagen',
    year: '2024',
    location: 'Copenhagen, Denmark',
    scale: 'Limited Edition of 250 Units',
    heroImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=85',
        caption: 'Geometric tactile paper fold sculpture demonstrating material tension.'
      },
      {
        url: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=85',
        caption: 'Tactile unboxing packaging crafted from custom die-cut matte dyed pulp.'
      }
    ],
    headline: 'Single-billet milled aluminum audio transducer balancing sculptural weight and acoustic purity.',
    summary: 'Industrial design and packaging architecture for a reference audio component milled from a solid 42kg block of aerospace aluminum. Free from screens, LED indicators, or visible fasteners; every interaction is modulated via a weighted rotary flywheel.',
    approach: 'The unboxing experience was engineered using 100% recycled high-density molded paper pulp and blind-embossed black cardboard sleeves, honoring the physical gravity of the metal transducer.',
    tags: ['Industrial Design', 'Tactile Packaging', 'Aluminum Milled', 'Limited Run'],
    specs: [
      { label: 'MATERIALITY', value: 'Monobloc CNC Milled 6061-T6 Aluminum' },
      { label: 'SURFACE FINISH', value: 'Bead-Blasted Hard Anodized Matte 08' },
      { label: 'PACKAGING', value: 'High-Density Molded Paper Pulp & Heavy Sleeve' },
      { label: 'NET MASS', value: '18.4 kg Solid Billet Transducer' }
    ],
    featured: true
  },
  {
    slug: 'verve-botanica',
    id: '05',
    title: 'VERVE OLFACTORY IDENTITY',
    category: 'Packaging & Tactile Objects',
    client: 'Verve Parfumerie — Paris & Kyoto',
    year: '2024',
    location: 'Paris, France',
    scale: 'Flacon Architecture & Packaging System',
    heroImage: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=1400&q=85',
        caption: 'Heavy flacon glassware with cold-foil monospaced typographic labeling.'
      },
      {
        url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1400&q=85',
        caption: 'Tactile textured secondary packaging in uncoated raw cotton stock.'
      }
    ],
    headline: 'Minimalist luxury olfactory identity crafted with bespoke glass vessels and unbleached paper.',
    summary: 'Brand identity, bespoke bottle glassware design, and sustainable packaging architecture for a high-end natural fragrance house. Exploring radical simplicity in a market often saturated with ornate decorative bottles.',
    approach: 'We designed a monolithic cylindrical glass flacon with a solid turned ebony cap. Labels are printed on raw cotton paper with water-based black ink, providing a deeply tactile sensory touchpoint.',
    tags: ['Luxury Packaging', 'Brand Direction', 'Glassware', 'Paris'],
    specs: [
      { label: 'FLACON GLASS', value: 'Custom Molded Heavy Soda-Lime Glass' },
      { label: 'CLOSURE', value: 'Turned Solid Japanese Hinoki Timber' },
      { label: 'LABEL STOCK', value: '300gsm G.F Smith Colorplan Cotton White' },
      { label: 'PRINT FINISH', value: 'Letterpress Black & Blind Emboss Seal' }
    ],
    featured: false
  },
  {
    slug: 'neue-typografie',
    id: '06',
    title: 'NEUE TYPOGRAFIE GUILD',
    category: 'Brand Identity & Systems',
    client: 'Swiss Typographic Guild — Basel',
    year: '2023',
    location: 'Basel, Switzerland',
    scale: 'Exhibition Identity & Kinetic Poster Archive',
    heroImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=85',
        caption: 'Exhibition specimen catalog showing macro letterform anatomy.'
      },
      {
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=85',
        caption: 'Silkscreened exhibition posters installed in the Museum für Gestaltung Basel.'
      }
    ],
    headline: 'Experimental poster collection and type specimen investigating neo-grotesque visual rhythm.',
    summary: 'A curated visual identity and commemorative poster series for the 70th anniversary of the Swiss International Style. Translating mid-century grid principles into responsive web typography and large-format silkscreen prints.',
    approach: 'Every composition adheres to strict mathematical intervals based on Root 2 proportions. Hand-pulled silkscreen prints on 300gsm Somerset archival rag paper were exhibited across Basel, Zurich, and Tokyo.',
    tags: ['Typography', 'Silkscreen', 'Swiss Style', 'Poster Design'],
    specs: [
      { label: 'PRINT MEDIUM', value: '2-Color Hand-Pulled Silkscreen on Somerset 300gsm' },
      { label: 'TYPEFACES', value: 'Akzidenz-Grotesk & Custom Modular Display Cuts' },
      { label: 'POSTER DIMENSIONS', value: 'Weltformat F4 (895 × 1280 mm)' },
      { label: 'EDITION SIZE', value: 'Limited Run of 300 Stamped Posters' }
    ],
    featured: false
  }
];

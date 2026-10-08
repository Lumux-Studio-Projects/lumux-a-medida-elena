export interface Essay {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  abstract: string;
  content: string[];
}

export const essays: Essay[] = [
  {
    id: '01',
    slug: 'architecture-of-the-grid',
    title: 'THE ARCHITECTURE OF THE GRID',
    subtitle: 'Negative Space as Structural Cadence in Editorial Systems',
    date: 'MARCH 2026',
    readTime: '6 MIN READ',
    category: 'Typographic Theory',
    abstract: 'Negative space in book design is never empty space; it is the deliberate tuning of visual silence, margin tension, and optical equilibrium.',
    content: [
      'In our contemporary sensory landscape, noise is rarely just auditory. The modern editorial canvas is flooded with visual commotion: decorative badges, unnecessary gradients, and layouts screaming for cheap engagement.',
      'When establishing the master typographic grid for the Éditions Silence catalogue, our primary constraint was not column count, but white-space pressure. By employing a 12-column asymmetric grid paired with 48mm unprinted margins on uncoated cotton paper, the eye is granted room to breathe and decelerate.',
      'True minimalism in visual design is not an aesthetic gesture; it is an act of radical cognitive mercy. By eliminating superfluous ornament, the reader’s mind ceases the frantic calculation of the page and finally absorbs the idea.'
    ]
  },
  {
    id: '02',
    slug: 'anti-dashboard',
    title: 'THE ANTI-DASHBOARD',
    subtitle: 'Rethinking High-Density Digital Interfaces Through Swiss Rationalism',
    date: 'JANUARY 2026',
    readTime: '8 MIN READ',
    category: 'Digital Systems',
    abstract: 'Modern software has succumbed to the tyranny of decorative cards, gradients, and micro-charts. Swiss typography offers the antidote.',
    content: [
      'Look at modern SaaS telemetry consoles: dozens of multicolored circular progress indicators, decorative gradient borders, and animated confetti for mundane operations. It treats human attention as an arcade ticket to be captured.',
      'In 1957, Josef Müller-Brockmann codified grid systems not to restrict expression, but to establish mathematical clarity under informational strain. When we built the Aura Computational Console, we banned all decorative containers.',
      'Data is rendered purely through typographic scale, monospaced tabular alignment, and calibrated grayscale values. The result is an interface where an engineer can parse 100,000 metrics in seconds without sensory fatigue.'
    ]
  },
  {
    id: '03',
    slug: 'ink-as-substance',
    title: 'INK AS SUBSTANCE',
    subtitle: 'Halftones, Blind Deboss, and Tactile Memory in Object Design',
    date: 'OCTOBER 2025',
    readTime: '5 MIN READ',
    category: 'Print Materiality',
    abstract: 'A printed sheet is not merely a carrier of pixels transferred to paper; it is a three-dimensional topographic artifact caught between ink and fiber.',
    content: [
      'In digital environments, black is simply the absence of light on an OLED matrix: #000000. In physical printmaking, black is an intensely material, multi-layered alchemy of carbon pigment, linseed varnish, and mechanical impression.',
      'For the Kura Gallery retrospective volumes, we formulated a custom double-pass carbon black ink applied over 170gsm Fedrigoni Tintoretto Ceylon. Under grazing gallery light, the uninked cotton absorbs reflections while the debossed letterforms cast micro-shadows.',
      'This tactile friction between ink density and paper tooth cannot be compressed into a screen. It creates an intimate spatial interaction between the hand, the eye, and the written thought.'
    ]
  },
  {
    id: '04',
    slug: 'permanence-of-print',
    title: 'THE WEIGHT OF PAPER',
    subtitle: 'Why the Physical Monograph Remains the Ultimate Subtractive Medium',
    date: 'AUGUST 2025',
    readTime: '7 MIN READ',
    category: 'Editorial Craft',
    abstract: 'In an era of disposable digital feeds, the tactile friction of paper demands commitment from both author and reader.',
    content: [
      'A web page can be modified in an instant, its layout refactored with a stylesheet update, its history erased. This fluid malleability breeds carelessness in both editing and design.',
      'A book, by contrast, is an indelible commitment. Once carbon ink strikes 150gsm Munken Kristall paper, the decision is irreversible for centuries. The weight of the spine in the hand imposes physical tempo.',
      'When producing the Éditions Silence Monograph, we spent four months calibrating the opacity of black ink against unbleached linen. This permanence is not nostalgic; it is structural discipline.'
    ]
  }
];

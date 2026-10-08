export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  projectSlug?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'kunsthaus',
    quote: 'Elena and her collective do not create decoration; they distill architectural meaning. The Éditions Silence monograph remains the benchmark of subtractive bookmaking in our permanent archive.',
    author: 'Dr. Mathis Gerber',
    role: 'Senior Curator & Head of Publications',
    organization: 'Kunsthaus Zürich',
    projectSlug: 'editions-silence'
  },
  {
    id: 'aura',
    quote: 'In an industry drowning in disposable tech gradients, Elena Vance formulated a monolithic visual identity that commanded respect across the international scientific community from day one.',
    author: 'Kaelen Voss',
    role: 'Co-Founder & CEO',
    organization: 'Aura Intelligence Labs (San Francisco)',
    projectSlug: 'aura-form'
  },
  {
    id: 'kyoto',
    quote: 'Elena approaches space with the stillness of Japanese architectural masters. Her scenography created an emotional resonance that our visitors still write to us about years later.',
    author: 'Akari Takahashi',
    role: 'Director of Scenography',
    organization: 'Kyoto Contemporary Art Pavilion',
    projectSlug: 'kura-gallery'
  },
  {
    id: 'steidl',
    quote: 'A rare practitioner who treats typography as an instrument of thought. Zero ego, absolute rigor, and an uncompromising standard of physical print execution.',
    author: 'Gerhard W. Steidl',
    role: 'Publisher & Master Printer',
    organization: 'Steidl Verlag (Göttingen)',
    projectSlug: 'neue-typografie'
  }
];

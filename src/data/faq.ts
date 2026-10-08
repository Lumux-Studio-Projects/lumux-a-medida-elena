export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What kinds of teams and clients do you work with?',
    answer: 'Mostly cultural institutions, museum foundations, and high-ambition technology founders who understand that design is a discipline of thought, not superficial styling. We work with clients ready to strip away decorative noise in favor of permanence.'
  },
  {
    question: 'Do you work on one-off commissions or ongoing retainers?',
    answer: 'Both. Most engagements begin as a sharply scoped monograph, identity system, or spatial project (4 to 16 weeks) and evolve into strategic atelier advisory if there is ongoing alignment. We do not sell open-ended retainers for the sake of looking busy.'
  },
  {
    question: 'How does the Collective model work in practice?',
    answer: 'Elena Vance personally leads every creative direction and architecture. When a commission requires deep physical bookbinding, computational type design, or complex spatial engineering, we bring in senior specialists from our curated collective. No junior handoffs, no agency bloat.'
  },
  {
    question: 'What does a typical production cadence look like?',
    answer: 'Weekly clarity, never weekly noise. One concise written briefing per week, one working design session, and one decision log readable over a coffee. We respect our clients’ focus and our own maker time.'
  }
];

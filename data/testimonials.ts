export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  companyUrl?: string;
  avatarUrl?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Working with Tanmay on our enterprise workspace overhaul was an incredible experience. He has a rare ability to translate dense stakeholder requirements into clean, elegant UI flows, while always keeping developer feasibility and token consistency at the forefront.",
    name: "Rohan Sharma",
    role: "Senior Product Manager",
    company: "Enterprise Cloud Suite"
  },
  {
    quote: "Tanmay brought fresh creative energy and sharp aesthetic judgment to our product rollout. His UI concepts and digital collateral delivered an immediate 25% boost in customer engagement. He is dedicated, meticulous, and a true team player.",
    name: "Rajesh Nair",
    role: "Brand & Marketing Director",
    company: "Consumer Retail Group"
  },
  {
    quote: "Tanmay's understanding of typography, color theory, and responsive layouts is exceptional. He delivered complex client web layouts on tight deadlines with zero compromise on visual polish.",
    name: "Chetan Patil",
    role: "Creative Director",
    company: "Digital Product Studio"
  }
];

export const SPEAKING_PRESS_ITEMS = [
  {
    title: 'Design Systems in Practice: Bridging Figma and Code',
    event: 'Mumbai UI/UX Meetup 2025',
    type: 'Speaker & Workshop Host',
    date: 'December 2025',
    description: 'Conducted a 2-hour interactive workshop for 80+ designers on tokenizing UI systems and setting up automated developer handoff pipelines.'
  },
  {
    title: 'The Future of AI-Native UI Prototyping',
    event: 'DesignTech India Podcast #14',
    type: 'Podcast Guest',
    date: 'October 2025',
    description: 'Discussed how generative AI and component-first architectures are accelerating design validation for early-stage startups.'
  },
  {
    title: 'Top 10 Emerging Product Designers to Watch',
    event: 'Digital Creators Weekly',
    type: 'Featured Feature',
    date: 'July 2025',
    description: 'Recognized for innovation in enterprise UI simplicity and multi-brand design systems.'
  }
];

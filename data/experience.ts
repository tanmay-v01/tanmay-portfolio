export interface ProjectExperience {
  role: string;
  category: string;
  focus: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  board?: string;
  year: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export const PROJECT_EXPERIENCE: ProjectExperience[] = [
  {
    role: 'Lead UI/UX Designer & Systems Architect',
    category: 'Avaada Safety Platform',
    focus: 'Enterprise Workplace Safety & Industrial IoT',
    period: '2025 — Present',
    description: [
      'Spearheaded end-to-end UX architecture for an industrial safety and incident reporting platform, slashing critical escalation time by 83%.',
      'Architected a 60+ token semantic design system in Figma and built 80+ auto-layout components with complete WCAG 2.1 AA accessibility compliance.',
      'Conducted 12+ contextual user interviews and journey mapping sessions across renewable energy operational sites, translating qualitative findings into high-velocity mobile workflows.',
      'Collaborated closely with engineering squads to guarantee pixel-perfect responsive execution across web dashboards and field mobile applications.'
    ],
    skills: ['Design Systems', 'Figma Variables', 'User Research', 'Enterprise UX', 'Design-to-Code Handoff']
  },
  {
    role: 'UI/UX & Interaction Designer',
    category: 'Perfume POS System',
    focus: 'Touch-First Luxury Retail & Inventory Management',
    period: '2025',
    description: [
      'Designed a touch-optimized retail POS and multi-currency checkout platform for high-end boutique stores, reducing transaction times from 3 minutes to 45 seconds.',
      'Created a rich visual product discovery interface with tactile feedback, split-pane persistent cart states, and real-time inventory synchronization.',
      'Decreased onboarding and training time for new store associates by 70% through intuitive, gesture-friendly UI patterns.'
    ],
    skills: ['Touch POS Design', 'Interaction Design', 'E-commerce & Retail', 'Visual Hierarchy', 'Prototyping']
  },
  {
    role: 'Product & Visual Designer',
    category: 'Qlytic Labs Dashboard',
    focus: 'B2B Analytics & Business Intelligence SaaS',
    period: '2025',
    description: [
      'Engineered an 8-chart visual design system and customizable report builder for mid-market e-commerce business intelligence.',
      'Implemented 3-tier progressive disclosure navigation that cut executive daily decision-making latency by 77%.',
      'Designed interactive tooltip inspection overlays and high-density data tables with flexible sorting, filtering, and export controls.'
    ],
    skills: ['Data Visualization', 'Dashboard UX', 'Progressive Disclosure', 'Chart Systems', 'Figma']
  },
  {
    role: 'UI/UX Designer & Product Designer',
    category: 'Yo Sports Academy CRM',
    focus: 'Sports Academy Management & Multi-Role Operations',
    period: '2025',
    description: [
      'Designed a multi-role web and mobile platform for coaches, parents, and managers across 60+ academy batches, saving 3 hours of daily manual admin work.',
      'Developed a tri-modal attendance tracking system (QR scan, biometric, and manual logs) and GST-compliant automated invoicing workflows.',
      'Achieved a 62% boost in parent satisfaction scores through transparent real-time student progress tracking.'
    ],
    skills: ['Role-Based UX', 'Mobile Ergonomics', 'Operational Workflows', 'Billing UX', 'Responsive Web']
  }
];

export const WORK_EXPERIENCE = PROJECT_EXPERIENCE.map(p => ({
  role: p.role,
  company: p.category,
  location: p.focus,
  period: p.period,
  description: p.description,
  skills: p.skills
}));

export const CAREER_TIMELINE = [
  { year: '2025 — Present', role: 'UI/UX & Product Designer', company: 'Enterprise SaaS & Digital Products', link: '#' },
  { year: '2024 — 2025', role: 'Visual & Digital Designer', company: 'Brand Identity & Web Systems', link: '#' },
  { year: '2023 — 2024', role: 'Digital & UI Designer', company: 'Web Interfaces & Digital Media', link: '#' },
  { year: '2022 — 2023', role: 'Web Design & Prototyping', company: 'Independent Design Projects', link: '#' }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Bachelor of Science (B.Sc.) in Computer Science & Interaction Design',
    institution: 'University of Mumbai',
    board: 'Degree Program • HCI & Software Architecture',
    year: '2021 – 2024'
  },
  {
    degree: 'Human-Computer Interaction (HCI) & Cognitive Ergonomics Specialization',
    institution: 'Interaction Design Foundation (IxDF) & Design Lab',
    board: 'Professional Accreditation',
    year: '2023 – 2024'
  },
  {
    degree: 'Higher Secondary Certificate (H.S.C.) — Science & Technology (PCMB - IT)',
    institution: 'Viva College of Science',
    board: 'Maharashtra State Board',
    year: '2019 – 2021'
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    name: 'UX Master Certified (UXMC) — Interaction Design & Qualitative Research',
    issuer: 'Nielsen Norman Group (NN/g) • Credential ID: UXMC-49281',
    year: 'Gold Standard Credential'
  },
  {
    name: 'Certified Usability Analyst (CUA™)',
    issuer: 'Human Factors International (HFI) • Credential ID: CUA-88314',
    year: 'Perceptual & Usability Science'
  },
  {
    name: 'Enterprise Design Thinking Co-Creator & Systems Practitioner',
    issuer: 'IBM Design Systems',
    year: 'Enterprise Credential'
  },
  {
    name: 'Google UX Design Professional Specialization',
    issuer: 'Google Career Certificates',
    year: 'Professional Specialization'
  },
  {
    name: 'Advanced Multi-Brand Design Systems & Component Governance',
    issuer: 'Memorisely',
    year: 'Design Systems Cohort'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'UI/UX Design & Research',
    items: ['Wireframing', 'User Research', 'Journey Mapping', 'User Flows', 'Information Architecture', 'Usability Testing']
  },
  {
    title: 'Interactive Prototyping',
    items: ['High-Fidelity Prototypes', 'Micro-interactions', 'Screen Flows', 'Iterative User Testing', 'Motion Design']
  },
  {
    title: 'Design Tools',
    items: ['Figma (Auto-layout, Tokens)', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva']
  },
  {
    title: 'Web Technologies',
    items: ['HTML5', 'CSS3 / Modern CSS', 'Responsive Web Design', 'Mobile-First UI', 'JavaScript Basics', 'Bootstrap / Tailwind']
  },
  {
    title: 'Visual & Brand Design',
    items: ['Design Systems', 'Typography & Pairing', 'Visual Hierarchy', 'Color Theory', 'Iconography', 'Packaging Design']
  },
  {
    title: 'Workflow & Strategy',
    items: ['Developer Handoff (Figma Inspect)', 'Agile / Scrum', 'SEO Basics', 'Client Consultation', 'Accessibility (WCAG)']
  }
];

export const PERSONAL_INFO = {
  name: 'Tanmay Vaity',
  title: 'UI/UX Designer • Digital Product & Web Designer',
  location: 'Virar (West), Mumbai MMR, Maharashtra – 401305, India',
  phone: '+91 77570 45382',
  email: 'tanmayvaity7@gmail.com',
  dob: '01 February 2005',
  languages: ['English', 'Hindi', 'Marathi'],
  interests: ['UI/UX Studies & Trends', 'Art & Vector Illustration', 'Football', 'Frontend Prototyping'],
  linkedin: 'https://www.linkedin.com/in/tanmay-vaity-544001265/',
  github: 'https://github.com/tanmayvaity'
};

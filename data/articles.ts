export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  year: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'operating-principles-ai-design',
    title: 'Operating principles for using AI in an effective UI/UX design practice',
    excerpt: 'How to leverage AI as a creative collaborator to boost prototyping speed without lowering the quality bar or sacrificing human intuition.',
    year: '2026',
    date: 'March 2026',
    readTime: '6 min read',
    tags: ['AI Tools', 'Design Practice', 'Workflow'],
    content: [
      "Artificial intelligence is no longer a speculative technology in product design—it is actively shaping our day-to-day tools, from Figma plugins to automated token syncs and LLM-assisted code generation.",
      "The designers who will thrive in this environment are not the ones who treat AI as a complete substitute for critical thought, but those who use it as an amplification engine. Here are four foundational operating principles I use when integrating AI into design workflows.",
      "1. Speed without Craft is Just Faster Slop: Generating 50 wireframes in 10 seconds is meaningless if none of them solve the core human problem. Use AI to explore breadth, but rely on your own aesthetic judgment and empathy for depth.",
      "2. Tokenize Everything Early: AI models understand structured semantic tokens much better than arbitrary visual groups. Defining rigorous variable hierarchies in your design system enables LLMs to generate high-fidelity UI code with zero guesswork.",
      "3. Prototype Latency & Real-World Friction: The biggest mistake in AI UI design is assuming 0ms response times. Always design the intermediate states—skeleton pulse loaders, streaming token cursors, and confidence score indicators.",
      "4. The Human-in-the-Loop Safeguard: Always provide explicit escape hatches, undo buttons, and clear attribution when surfacing AI suggestions."
    ]
  },
  {
    slug: 'building-scalable-design-systems',
    title: 'Building scalable design systems: From Figma tokens to developer handoff',
    excerpt: 'How standardizing design tokens and reusable component libraries eliminated developer guesswork and boosted sprint velocity by 30%.',
    year: '2026',
    date: 'January 2026',
    readTime: '8 min read',
    tags: ['Design Systems', 'Figma', 'Engineering Handoff'],
    content: [
      "Design systems are often misunderstood as mere UI sticker sheets. In reality, a great design system is a shared contract between design and engineering that eliminates redundant decision-making.",
      "When I began standardizing our multi-brand enterprise design system, our primary goal was reducing the friction between Figma mockups and production code.",
      "By structuring tokens across three distinct layers—Global Primitives, Semantic Aliases, and Component Scopes—we created a unified language that allowed developers to inspect any component and immediately know the exact CSS variable name.",
      "The result? A 30% acceleration in feature delivery and a 100% pass rate on WCAG 2.1 AA accessibility contrast audits."
    ]
  },
  {
    slug: 'micro-interactions-and-user-delight',
    title: 'Micro-interactions: Why subtle animations double product engagement',
    excerpt: 'Exploring the psychology of tactile button presses, smooth sheet transitions, and spring physics in modern web applications.',
    year: '2025',
    date: 'November 2025',
    readTime: '5 min read',
    tags: ['Micro-interactions', 'Motion Design', 'UX Psychology'],
    content: [
      "What separates an average SaaS tool from a product that users genuinely love? It's almost never the raw feature count. It's the micro-interactions.",
      "A subtle 120ms spring scale on a button press, a crisp SVG checkmark draw on task completion, or a contextual tooltip with tailored typography communicates that the creators care deeply about craft.",
      "In this article, I break down how we tuned physics curves and avoided 'animation fatigue' to create interfaces that feel responsive, alive, and effortless."
    ]
  },
  {
    slug: 'designing-beyond-beige',
    title: 'Designing beyond beige: Bringing personality back to enterprise software',
    excerpt: 'Why enterprise tools do not need to look cold and sterile, and how cheerful pastel accents create focus and clarity.',
    year: '2025',
    date: 'August 2025',
    readTime: '7 min read',
    tags: ['Visual Design', 'Enterprise UX', 'Color Theory'],
    content: [
      "For years, enterprise B2B software was dominated by cold corporate blues and sterile gray grids. The assumption was that 'serious' business tools had to look boring.",
      "Inspired by modern editorial typography and tactile pastel card palettes, we proved that warm tones (soft canary yellows, mint greens, and lavender accents) actually improve visual scannability and reduce daily cognitive fatigue for support agents."
    ]
  },
  {
    slug: 'secret-weapon-inspiration',
    title: 'My (not so) secret weapon for design inspiration',
    excerpt: 'Why looking at physical packaging, print editorial design, and architectural posters yields far better digital interfaces than copying Dribbble.',
    year: '2024',
    date: 'May 2024',
    readTime: '4 min read',
    tags: ['Inspiration', 'Graphic Design', 'Typography'],
    content: [
      "When digital designers only look at other digital apps for inspiration, the industry converges on homogeneous UI patterns.",
      "During my time designing product packaging and brand identities at Nikowin TradeInd, I learned to draw inspiration from vintage book typography, Swiss poster design, and physical product ergonomics. Bringing these principles into web UI makes digital products feel grounded and timeless."
    ]
  }
];

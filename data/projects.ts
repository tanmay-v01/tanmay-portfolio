export type CaseStudy = any;

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  role: string;
  timeline: string;
  tools: string[];
  deliverables: string[];
  browserImages: string[];   // desktop screenshot paths
  mobileImages: string[];    // mobile screenshot paths
  accentColor: string;       // Hex or CSS color
  accentRgb: string;         // 'r, g, b' for opacity tints
  gradientBg: string;        // Mockup stage canvas gradient
  badgeText: string;         // Category / stage pill badge
  deviceUrl: string;         // Mockup browser address bar URL
  deviceSubBadge: string;    // e.g. 'Web + iOS App'
  secondaryImage?: string;   // Secondary preview screen for multi-view mockups
  nextSlug?: string;
  nextTitle?: string;
  caseStudy: {
    overview: string[];
    problem: string;
    process: {
      heading: string;
      body: string;
    }[];
    brainstorming?: {
      title: string;
      description: string;
      affinityGroups: {
        theme: string;
        color: string;
        tag: string;
        items: string[];
      }[];
      keyTakeaways: string[];
    };
    userFlow?: {
      title: string;
      description: string;
      steps: {
        step: string;
        action: string;
        role: string;
        outcome: string;
      }[];
      comparison?: {
        metric: string;
        before: string;
        after: string;
      }[];
    };
    wireframing?: {
      title: string;
      summary: string;
      concepts: {
        name: string;
        approach: string;
        pros: string;
        cons: string;
        status: 'Selected' | 'Iterated' | 'Discarded';
      }[];
      keyDecisions: {
        area: string;
        decision: string;
        rationale: string;
      }[];
    };
    outcome: {
      summary: string;
      metrics?: { label: string; value: string }[];
    };
  };
}

export const PROJECTS: Project[] = [
  // ────────────────────────────────────────────────────────────────
  // 1. AVAADA — Industrial Safety Management Platform
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'avaada',
    title: 'Avaada Safety Platform',
    subtitle: '// Enterprise-Grade Workplace Safety & Incident Management',
    description:
      'A comprehensive safety management web application empowering industrial teams with real-time incident reporting, hazard tracking, and regulatory compliance workflows.',
    tags: ['Product Design', 'UX Research', 'Design Systems', 'Web App'],
    role: 'Lead UI/UX Designer & Systems Architect',
    timeline: '2025 — Present',
    tools: ['Figma', 'Adobe XD', 'Illustrator', 'HTML/CSS'],
    deliverables: [
      'High-Fidelity Prototype',
      'Design System',
      'Developer Handoff',
      'Mobile-Responsive UI',
    ],
    browserImages: [
      '/images/projects/avaada/desktop/screen-01.png',
      '/images/projects/avaada/desktop/screen-02.png',
      '/images/projects/avaada/desktop/screen-03.png',
      '/images/projects/avaada/desktop/screen-04.png',
      '/images/projects/avaada/desktop/screen-05.png',
      '/images/projects/avaada/desktop/screen-06.png',
      '/images/projects/avaada/desktop/screen-07.png',
      '/images/projects/avaada/desktop/screen-08.png',
    ],
    mobileImages: [
      '/images/projects/avaada/mobile/screen-01.png',
      '/images/projects/avaada/mobile/screen-02.png',
      '/images/projects/avaada/mobile/screen-03.png',
      '/images/projects/avaada/mobile/screen-04.png',
      '/images/projects/avaada/mobile/screen-05.png',
      '/images/projects/avaada/mobile/screen-06.png',
      '/images/projects/avaada/mobile/screen-07.png',
      '/images/projects/avaada/mobile/screen-08.png',
    ],
    accentColor: '#38bdf8',
    accentRgb: '56, 189, 248',
    gradientBg: 'radial-gradient(ellipse at 85% 15%, rgba(56, 189, 248, 0.35), transparent 55%), radial-gradient(circle at 15% 85%, rgba(37, 99, 235, 0.25), transparent 50%), linear-gradient(145deg, #091122 0%, #0f1c38 60%, #16284f 100%)',
    badgeText: 'Enterprise Workplace Safety',
    deviceUrl: 'https://avaada.energy/safety-hub',
    deviceSubBadge: 'Web Dashboard + Mobile App',
    nextSlug: 'perfume',
    nextTitle: 'Perfume POS System',
    caseStudy: {
      overview: [
        'Avaada operates across 40+ renewable energy sites in India, relying on hundreds of field engineers to manage real-time safety incidents. Their legacy system was a fragmented mix of paper forms, WhatsApp groups, and disconnected spreadsheets — creating dangerous delays in incident response.',
        'I was brought in as Lead UI/UX Designer to redesign the entire digital safety platform from ground zero: rethinking authentication, incident reporting, hazard tracking, vendor management, and compliance dashboards for both desktop (operations teams) and mobile (field engineers).',
      ],
      problem:
        'Field engineers needed to report safety incidents in under 2 minutes on-site, but the existing workflow required navigating 6 separate screens, re-entering data 3 times, and waiting for manual supervisory approval — leading to an average 47-minute incident escalation delay.',
      process: [
        {
          heading: 'Discovery & Stakeholder Mapping',
          body: 'Conducted 12 contextual user interviews with field engineers, HSE managers, and compliance officers across 3 Avaada plant sites. Mapped 5 distinct user personas and 8 critical user journeys using FigJam affinity mapping.',
        },
        {
          heading: 'Information Architecture Redesign',
          body: 'Restructured the entire navigation hierarchy — replacing a 6-level nested menu with a flat 3-tier architecture. Created a dual-mode experience: a data-dense desktop dashboard for ops teams and a touch-optimized mobile app for field staff.',
        },
        {
          heading: 'Design System & Component Library',
          body: 'Established 60+ semantic design tokens in Figma (color, spacing, typography) and built 80+ production-ready components with complete auto-layout and interactive states. Reduced design-to-dev handoff time by 40%.',
        },
        {
          heading: 'Usability Testing & Iteration',
          body: 'Ran 3 rounds of moderated usability testing with 8 participants each. Key finding: the incident report form needed to be completable with one hand — led to a radical single-column tap-forward redesign that reduced completion time to 90 seconds.',
        },
      ],
      brainstorming: {
        title: 'Problem Framing, Site Observations & Affinity Mapping',
        description: 'Synthesized 12 on-site contextual interviews and 3 plant walkthroughs into thematic affinity clusters to uncover root causes behind incident reporting friction.',
        affinityGroups: [
          {
            theme: 'Field Operative Constraints',
            color: '#fef3c7',
            tag: 'Field Reality',
            items: [
              'Engineers wear heavy leather safety gloves — 24px dropdowns and tiny radio buttons are unusable',
              'Direct desert sun creates blinding screen glare; light gray UI elements disappear completely',
              'Intermittent 2G/3G signal causes lost form submissions and severe field frustration',
            ],
          },
          {
            theme: 'HSE Compliance Bottlenecks',
            color: '#fee2e2',
            tag: 'Audit Risk',
            items: [
              'Categorization was subjective (engineers confused "Unsafe Act" vs "Near Miss")',
              'Manual supervisory gatekeeping delayed high-voltage escalations by up to 47 minutes',
              'Audit logs required tamper-proof GPS and automated timestamps for legal validity',
            ],
          },
          {
            theme: 'Speed & Interaction Goals',
            color: '#e0f2fe',
            tag: 'UX Targets',
            items: [
              'Target task completion under 90 seconds while standing on active industrial sites',
              'One-handed navigation: all primary actions must sit within the lower 35% thumb zone',
              'Zero-click camera launch with automatic GPS tag and offline synchronization queue',
            ],
          },
          {
            theme: 'Executive Visibility',
            color: '#f3e8ff',
            tag: 'Governance',
            items: [
              'Corporate directors need real-time multi-plant safety scoring without waiting for end-of-month PPTs',
              'Overdue corrective actions (CAPA) need automated visual escalation and SMS alerts',
            ],
          },
        ],
        keyTakeaways: [
          'Desktop for analytical governance, mobile for rapid thumb-driven data capture.',
          'Offline-first architecture is non-negotiable for remote solar/wind farm safety.',
          'Replace freeform text fields with visual image tagging and tap-to-select chips.',
        ],
      },
      userFlow: {
        title: 'Optimized Incident Reporting & Resolution Architecture',
        description: 'Re-engineered the legacy 6-screen fragmented workflow into a streamlined 4-step progressive disclosure pipeline.',
        steps: [
          {
            step: '01',
            action: 'Rapid Trigger & Auto-Context',
            role: 'Field Engineer',
            outcome: 'Instant launch via floating FAB. Auto-captures GPS coordinates, plant zone, and server timestamp.',
          },
          {
            step: '02',
            action: 'Visual Evidence & Severity Chip',
            role: 'Field Engineer',
            outcome: 'Direct in-app camera capture. Single-tap severity classification (Low / Medium / High / Critical).',
          },
          {
            step: '03',
            action: 'Automated Routing Engine',
            role: 'System / Smart Gate',
            outcome: 'Bypasses manual supervisor bottlenecks. High/Critical incidents instantly broadcast to Zonal HSE & Plant Head.',
          },
          {
            step: '04',
            action: 'CAPA Assignment & 1-Click Closure',
            role: 'HSE Manager',
            outcome: 'Assigns corrective action with SLA countdown timer. Field engineer verifies resolution with follow-up photo.',
          },
        ],
        comparison: [
          { metric: 'Workflow Duration', before: '47 Minutes', after: 'Under 8 Minutes' },
          { metric: 'Screens Navigated', before: '6 Screens', after: '1 Unified Flow' },
          { metric: 'Required Inputs', before: '18 Manual Inputs', after: '4 Guided Taps' },
          { metric: 'Offline Reliability', before: '0% (Data Lost)', after: '100% (Background Sync)' },
        ],
      },
      wireframing: {
        title: 'Low-Fi Exploration & Layout Architecture',
        summary: 'Explored 3 distinct layout paradigms in low-fidelity wireframes before building high-fidelity components, validating each with 8 field operatives.',
        concepts: [
          {
            name: 'Concept A: Multi-Step Form Wizard',
            approach: 'Sequential 5-step modal wizard with Next/Previous navigation.',
            pros: 'Clean presentation of individual inputs without vertical scroll.',
            cons: 'High cognitive burden in the field; users lost context and abandoned flow when network hesitated.',
            status: 'Discarded',
          },
          {
            name: 'Concept B: Dense Single-Page Form',
            approach: 'All 18 input fields arranged in collapsible accordions on one page.',
            pros: 'Everything visible in one document; easy to review before submission.',
            cons: 'Overwhelming visual density; required excessive scrolling on mobile screens.',
            status: 'Iterated',
          },
          {
            name: 'Concept C: Progressive Smart Stream (Winner)',
            approach: 'Single-column stream showing 3 essential questions first, with smart defaults and progressive drawer disclosure.',
            pros: 'Achieved 83% faster completion, zero confusion, and 100% thumb-reachability.',
            cons: 'Required robust backend smart-tagging to pre-fill metadata.',
            status: 'Selected',
          },
        ],
        keyDecisions: [
          {
            area: 'Touch Target Sizing',
            decision: 'Increased all interactive buttons to 56px minimum with 12px margins.',
            rationale: 'Accommodates thick industrial safety gloves and eliminates accidental tap errors in field vibrations.',
          },
          {
            area: 'Color Contrast Palette',
            decision: 'WCAG AAA compliant dark and light tokens with vibrant emergency status pigments.',
            rationale: 'Maintains crisp visibility under intense direct sunlight at remote outdoor plants.',
          },
          {
            area: 'Bottom-Anchored Action Drawer',
            decision: 'Pinned primary submission and camera buttons to the bottom 30% viewport.',
            rationale: 'Enables 100% one-handed operation while holding plant railings or inspection equipment.',
          },
        ],
      },
      outcome: {
        summary:
          'The redesigned Avaada platform reduced incident escalation time from 47 minutes to under 8 minutes. Field adoption reached 94% within the first 30 days of rollout, and audit-ready compliance reports that previously took 3 days to compile now generate in a single click.',
        metrics: [
          { label: 'Escalation Time', value: '−83%' },
          { label: 'Field Adoption', value: '94%' },
          { label: 'Report Gen Speed', value: '1-Click' },
          { label: 'Components Built', value: '80+' },
        ],
      },
    },
  },

  // ────────────────────────────────────────────────────────────────
  // 2. PERFUME — Luxury Fragrance POS System
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'perfume',
    title: 'Perfume POS System',
    subtitle: '// Touch-First Retail Point-of-Sale for Luxury Fragrance Boutiques',
    description:
      'An elegant, high-performance point-of-sale and inventory management platform designed for luxury fragrance retailers — enabling fast product discovery, multi-currency transactions, and seamless checkout.',
    tags: ['Desktop UI', 'POS Design', 'Retail UX', 'Touch Interface'],
    role: 'UI/UX Designer & Interaction Designer',
    timeline: '2025',
    tools: ['Figma', 'Adobe Photoshop', 'Illustrator'],
    deliverables: [
      'POS Interface Design',
      'Inventory Module',
      'Checkout Flow',
      'Component Library',
    ],
    browserImages: [
      '/images/projects/perfume/desktop/screen-01.png',
      '/images/projects/perfume/desktop/screen-02.png',
      '/images/projects/perfume/desktop/screen-03.png',
      '/images/projects/perfume/desktop/screen-04.png',
      '/images/projects/perfume/desktop/screen-05.png',
      '/images/projects/perfume/desktop/screen-06.png',
      '/images/projects/perfume/desktop/screen-07.png',
      '/images/projects/perfume/desktop/screen-08.png',
    ],
    mobileImages: [
      '/images/projects/perfume/mobile/screen-01.png',
      '/images/projects/perfume/mobile/screen-02.png',
    ],
    accentColor: '#f59e0b',
    accentRgb: '245, 158, 11',
    gradientBg: 'radial-gradient(ellipse at 85% 15%, rgba(245, 158, 11, 0.32), transparent 55%), radial-gradient(circle at 15% 85%, rgba(217, 119, 6, 0.22), transparent 50%), linear-gradient(145deg, #19140b 0%, #2a1f11 60%, #3a2a16 100%)',
    badgeText: 'Luxury Fragrance Boutique POS',
    deviceUrl: 'https://boutique.perfume.pos/terminal',
    deviceSubBadge: 'Touch POS + Handheld Mobile',
    nextSlug: 'qlytic-labs',
    nextTitle: 'Qlytic Labs Dashboard',
    caseStudy: {
      overview: [
        'A Dubai-based luxury fragrance boutique chain (operating across 6 flagship stores) was using a legacy retail POS that couldn\'t handle multi-currency pricing (AED, INR, USD), lacked visual product thumbnails, and required 11 taps to complete a sale — causing 3–4 minute average checkout delays during peak hours.',
        'I designed a premium, touch-first POS system that transformed the checkout experience: reducing average transaction time to 45 seconds, supporting real-time inventory sync across all stores, and delivering a luxury-grade visual experience that matched the brand\'s premium positioning.',
      ],
      problem:
        'Luxury retail demands speed AND elegance. The existing POS looked and felt like enterprise accounting software — mismatched with the high-end boutique experience and causing visible frustration for both sales staff and waiting customers.',
      process: [
        {
          heading: 'Competitive Landscape Research',
          body: 'Benchmarked 8 leading retail POS systems (Square, Lightspeed, Revel, Shopify POS). Identified a critical gap: none optimized for high-SKU luxury categories with rich visual product cards and multi-currency real-time pricing.',
        },
        {
          heading: 'Workflow Mapping with Sales Staff',
          body: 'Shadowed 6 sales associates across 2 store locations for 3 hours each. Mapped the complete sales journey from product discovery → cart addition → payment → receipt — identifying 7 friction points in the existing workflow.',
        },
        {
          heading: 'Visual Design & Typography',
          body: 'Developed a warm, editorial aesthetic using gold accents, high-contrast photography-led product cards, and clean geometric sans-serif typography. The interface conveys premium quality without sacrificing operational speed.',
        },
        {
          heading: 'Prototype Testing & Speed Optimization',
          body: 'Conducted 2 rounds of time-on-task testing. Iterated the cart sidebar from a modal to a persistent split-pane layout — reducing checkout completion time by 62% compared to the original flow.',
        },
      ],
      brainstorming: {
        title: 'Boutique Workflow Research & Ideation Synthesis',
        description: 'Analyzed 18 hours of store-floor shadowing across flagship Dubai fragrance boutiques to isolate transaction friction and identify high-value customer touchpoints.',
        affinityGroups: [
          {
            theme: 'Boutique Staff Pressures',
            color: '#fef3c7',
            tag: 'Floor Reality',
            items: [
              'During festive rush hours, 11 taps per item created uncomfortable customer waiting queues',
              'Searching 800+ niche fragrance SKUs by text was sluggish without scent-family visual thumbnails',
              'Sales associates had to leave VIP clients alone to check rear stockroom inventory levels',
            ],
          },
          {
            theme: 'Luxury Brand Alignment',
            color: '#fef9c3',
            tag: 'Brand Experience',
            items: [
              'Legacy UI felt like industrial accounting software, clashing with marble boutique aesthetics',
              'Discreet, elegant touch gestures expected rather than noisy clunky barcode beeping',
              'High-end e-receipts must display olfactive pyramid breakdowns (Top, Heart, Base notes)',
            ],
          },
          {
            theme: 'Multi-Currency Complexity',
            color: '#dbeafe',
            tag: 'Payment Friction',
            items: [
              'International tourists paying in USD, AED, EUR, or GBP forced staff to do manual conversion math',
              'Automatic VAT refund / duty-free calculations needed transparent customer-facing itemization',
              'Split-tender capability (cash + international card) was cumbersome in legacy software',
            ],
          },
          {
            theme: 'Handheld Floor Mobility',
            color: '#dcfce7',
            tag: 'Mobile Companion',
            items: [
              'Roaming sales associates needed a handheld smartphone companion to ring sales anywhere in the gallery',
              'Instant cart handoff from mobile floor scanner directly to the main packaging counter terminal',
            ],
          },
        ],
        keyTakeaways: [
          'Split-pane architecture (Catalog Left, Cart Right) is crucial for uninterrupted sales momentum.',
          'Visual thumbnail cards with scent family badges eliminate SKU selection errors.',
          'Mobile handheld companion empowers floor staff to finalize sales right beside perfume consultation tables.',
        ],
      },
      userFlow: {
        title: 'Frictionless Luxury Boutique Checkout Pipeline',
        description: 'Transformed an 11-step fragmented process into a rapid 4-stage fluid interaction pipeline.',
        steps: [
          {
            step: '01',
            action: 'Visual Discovery & Olfactive Filter',
            role: 'Sales Associate',
            outcome: '1-tap selection by scent family (Woody, Oriental, Floral, Fresh) or quick barcode scan.',
          },
          {
            step: '02',
            action: 'Bottle Size & Custom Engraving',
            role: 'Sales Associate',
            outcome: 'Instant variant selection (50ml / 100ml / Extrait) with optional bespoke bottle engraving tag.',
          },
          {
            step: '03',
            action: 'Dynamic Currency & Loyalty Tender',
            role: 'VIP Client / Associate',
            outcome: 'Real-time multi-currency conversion toggle; 1-tap redemption of client membership points.',
          },
          {
            step: '04',
            action: 'Digital Scent Passport Receipt',
            role: 'System / Customer',
            outcome: 'Instant Apple Wallet pass or WhatsApp receipt with full fragrance notes and concierge booking.',
          },
        ],
        comparison: [
          { metric: 'Checkout Duration', before: '3.5 Minutes', after: '45 Seconds' },
          { metric: 'Taps to Complete Sale', before: '11 Taps', after: '3 Taps' },
          { metric: 'SKU Discovery Speed', before: '35 Seconds', after: 'Under 3 Seconds' },
          { metric: 'Currency Calculation', before: 'Manual Spreadsheet', after: 'Instant 1-Tap Toggle' },
        ],
      },
      wireframing: {
        title: 'Low-Fidelity Exploration & Layout Iterations',
        summary: 'Explored and benchmarked 3 structural layout models with store associates to find the optimum balance between product showcase and transaction speed.',
        concepts: [
          {
            name: 'Concept A: Modal Checkout Dialog',
            approach: 'Catalog displayed full-screen; checkout launched inside a floating modal dialog.',
            pros: 'Maximum screen space for product cards.',
            cons: 'Staff were blinded to the active cart when customers asked questions about price discounts.',
            status: 'Discarded',
          },
          {
            name: 'Concept B: Vertical Flow with Drawer',
            approach: 'Product list scrolls vertically; cart hides in a collapsible bottom drawer.',
            pros: 'Familiar e-commerce paradigm on small tablets.',
            cons: 'Unnecessary taps to verify cart totals slowed transaction velocity down.',
            status: 'Iterated',
          },
          {
            name: 'Concept C: Asymmetric Split-Pane Layout (Winner)',
            approach: 'Left 68% dedicated to visual product cards with scent facets; Right 32% permanently shows live cart and checkout CTA.',
            pros: 'Reduced transaction time by 62%; zero screen switches required throughout the entire sale.',
            cons: 'Requires minimum 10.5" tablet viewport for optimal touch comfort.',
            status: 'Selected',
          },
        ],
        keyDecisions: [
          {
            area: 'Cart Persistence',
            decision: 'Permanent right-hand split-pane cart with continuous live tax & discount calculation.',
            rationale: 'Allows sales staff to adjust quantities, apply VIP discounts, and select currencies without leaving the product view.',
          },
          {
            area: 'Luxury Visual System',
            decision: 'Warm obsidian backgrounds with refined gold/amber accent tokens and crisp typography.',
            rationale: 'Creates an upscale ambiance matching high-end boutique interior design.',
          },
          {
            area: 'Mobile Handheld Companion',
            decision: 'Side-by-side companion app for handheld iPhone/scanner devices for roaming associates.',
            rationale: 'Empowers staff to assist VIP customers directly at consultation tables without counter queues.',
          },
        ],
      },
      outcome: {
        summary:
          'The new Perfume POS reduced average checkout time from 3 minutes to 45 seconds. Staff reported a 70% decrease in training time for new hires, and the multi-currency feature eliminated pricing errors that had previously required manual recalculation.',
        metrics: [
          { label: 'Checkout Time', value: '−75%' },
          { label: 'Training Time', value: '−70%' },
          { label: 'Error Rate', value: '≈0%' },
          { label: 'Stores Supported', value: '6' },
        ],
      },
    },
  },

  // ────────────────────────────────────────────────────────────────
  // 3. QLYTIC LABS — Analytics SaaS Dashboard
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'qlytic-labs',
    title: 'Qlytic Labs Dashboard',
    subtitle: '// B2B Analytics SaaS — Data Visualization & Insight Platform',
    description:
      'A comprehensive analytics and business intelligence SaaS dashboard — transforming raw data into clear visual stories with interactive charts, real-time KPIs, and customizable report exports.',
    tags: ['SaaS Design', 'Data Visualization', 'Dashboard UX', 'B2B Product'],
    role: 'UI/UX Designer & Visual Designer',
    timeline: '2025',
    tools: ['Figma', 'Adobe XD', 'Illustrator'],
    deliverables: [
      'Dashboard Interface',
      'Chart Library',
      'Data Tables',
      'Report Builder',
    ],
    browserImages: [
      '/images/projects/qlytic-labs/desktop/screen-01.png',
      '/images/projects/qlytic-labs/desktop/screen-03.png',
      '/images/projects/qlytic-labs/desktop/screen-04.png',
      '/images/projects/qlytic-labs/desktop/screen-05.png',
      '/images/projects/qlytic-labs/desktop/screen-06.png',
      '/images/projects/qlytic-labs/desktop/screen-07.png',
      '/images/projects/qlytic-labs/desktop/screen-08.png',
      '/images/projects/qlytic-labs/desktop/screen-09.png',
    ],
    mobileImages: [],
    accentColor: '#818cf8',
    accentRgb: '129, 140, 248',
    gradientBg: 'radial-gradient(ellipse at 85% 15%, rgba(129, 140, 248, 0.35), transparent 55%), radial-gradient(circle at 15% 85%, rgba(6, 182, 212, 0.22), transparent 50%), linear-gradient(145deg, #0b0e24 0%, #131840 60%, #1d1b54 100%)',
    badgeText: 'B2B Analytics & Intelligence SaaS',
    deviceUrl: 'https://app.qlytic.io/dashboards/executive',
    deviceSubBadge: 'Multi-Screen Analytics Suite',
    secondaryImage: '/images/projects/qlytic-labs/desktop/screen-04.png',
    nextSlug: 'yo-sports',
    nextTitle: 'Yo Sports Academy CRM',
    caseStudy: {
      overview: [
        'Qlytic Labs is a B2B analytics platform serving mid-market retail and e-commerce businesses. Their target users — marketing managers and operations directors — needed to track 50+ business metrics across multiple data sources, but the existing dashboard presented all data in undifferentiated tables that required manual cross-referencing.',
        'I designed a comprehensive analytics experience that transforms data overload into actionable clarity: interactive charts, progressive disclosure layouts, saved view presets, and a one-click report builder for stakeholder presentations.',
      ],
      problem:
        'When every metric looks equally important, nothing feels actionable. The analytics platform had high data density but zero visual hierarchy — users were spending 35+ minutes per day searching for the 3 KPIs that actually drove their decisions.',
      process: [
        {
          heading: 'User Research & Jobs-to-be-Done',
          body: 'Interviewed 9 marketing managers and operations directors. Identified 3 core JTBD: "Show me if I\'m on track today", "Help me find what changed and why", "Give me something I can show my CEO in 5 minutes." Every design decision mapped back to these.',
        },
        {
          heading: 'Information Architecture & Hierarchy',
          body: 'Applied progressive disclosure: top-level dashboard shows 4 headline KPIs → drill-down reveals trend charts → secondary level exposes raw data tables. This 3-tier hierarchy reduced cognitive load while maintaining full data access.',
        },
        {
          heading: 'Chart Design System',
          body: 'Designed 8 standardized chart types (line, bar, donut, heatmap, scatter, table, funnel, spark) with consistent visual grammar, accessible color palettes, and interactive tooltip overlays. All charts adapt to color-blind safe modes.',
        },
        {
          heading: 'Report Builder Flow',
          body: 'Created a drag-and-drop report builder allowing users to assemble presentation-ready PDFs directly from the dashboard. Validated with 6 users — 100% completed a multi-chart report in under 4 minutes on first use.',
        },
      ],
      brainstorming: {
        title: 'Cognitive Load Analysis & Metric Prioritization',
        description: 'Conducted user journey mapping with 9 growth directors and operations leads to dissect analytical decision fatigue and establish a progressive disclosure paradigm.',
        affinityGroups: [
          {
            theme: 'Data Clutter & Overwhelm',
            color: '#fee2e2',
            tag: 'Cognitive Burden',
            items: [
              '50+ raw metrics displayed simultaneously caused severe analysis paralysis',
              'Users spent 35 minutes daily searching for the 3 metrics that actually drove business decisions',
              'Zero anomaly detection: sudden revenue or drop-off spikes were discovered hours too late',
            ],
          },
          {
            theme: 'Executive Storytelling',
            color: '#fef3c7',
            tag: 'Reporting Friction',
            items: [
              'Directors spent every Friday afternoon taking screenshots and pasting charts into Keynote',
              'Exports produced chaotic raw CSV dumps rather than branded, executive-ready presentations',
              'Stakeholders wanted instant answers to "What changed and why?", not raw data dumps',
            ],
          },
          {
            theme: 'Visualization Standards',
            color: '#e0e7ff',
            tag: 'Design System',
            items: [
              'Multiple teams built inconsistent chart styles with uncoordinated color semantics',
              'Red/green signals were inaccessible for color-blind executive board members',
              'Tooltips lacked context: users wanted historical benchmark comparisons on hover',
            ],
          },
          {
            theme: 'Workspace Customization',
            color: '#dcfce7',
            tag: 'Personalization',
            items: [
              'Growth vs Finance vs Ops personas each required completely different default views',
              'Saved view presets needed 1-click sharing across teams with role-based permissions',
            ],
          },
        ],
        keyTakeaways: [
          'Adopt 3-tier progressive disclosure: Top Headline KPIs → Trendlines → Detailed Data Tables.',
          'Unified 8-chart visual design system with strict accessible semantic color tokens.',
          'Built-in 1-click presentation report builder saves 2 hours of manual deck prep every week.',
        ],
      },
      userFlow: {
        title: 'From Anomaly Detection to Executive Report Generation',
        description: 'Replaced an ad-hoc browsing process with an intelligent alert-to-presentation pipeline.',
        steps: [
          {
            step: '01',
            action: 'Smart Anomaly Highlight',
            role: 'Intelligence Engine',
            outcome: 'System identifies statistically significant metric deviations and flags root causes at top of feed.',
          },
          {
            step: '02',
            action: '1-Click Interactive Drilldown',
            role: 'Growth Director',
            outcome: 'Filters cohort dimensions (Geo, Channel, Device) with instant sub-100ms client-side chart re-render.',
          },
          {
            step: '03',
            action: 'Pin to Executive Storyboard',
            role: 'Growth Director',
            outcome: 'Pins annotated chart with custom observation note directly into the weekly executive briefing deck.',
          },
          {
            step: '04',
            action: 'Secure PDF & Live Link Dispatch',
            role: 'System / Stakeholders',
            outcome: 'Generates branded executive PDF and interactive live link with granular viewing access.',
          },
        ],
        comparison: [
          { metric: 'Daily Time to Insight', before: '35 Minutes', after: '8 Minutes' },
          { metric: 'Report Prep Overhead', before: '2.5 Hours / Week', after: '4 Minutes' },
          { metric: 'Anomaly Spotting', before: 'Delayed (Next Day)', after: 'Real-Time (< 5 min)' },
          { metric: 'Chart Consistency', before: '5 Differing Libraries', after: '1 Unified System' },
        ],
      },
      wireframing: {
        title: 'Dashboard Architecture & Layout Exploration',
        summary: 'Designed and prototyped 3 structural layout models, evaluating density, visual hierarchy, and widget responsiveness.',
        concepts: [
          {
            name: 'Concept A: Dense Grid Matrix',
            approach: 'Spreadsheet-style dense grid showing 40+ metric boxes on a single viewport.',
            pros: 'High raw information capacity.',
            cons: 'High cognitive overload; usability test participants scored usability 42/100 (frustrating).',
            status: 'Discarded',
          },
          {
            name: 'Concept B: Freeform Drag-and-Drop Canvas',
            approach: 'Infinite customizable canvas where users position resizable widgets freely.',
            pros: 'High flexibility for technical analysts.',
            cons: 'Messy alignment, complex configuration; took 40+ minutes for new users to setup.',
            status: 'Iterated',
          },
          {
            name: 'Concept C: Guided 3-Tier Progressive Architecture (Winner)',
            approach: 'Curated 4 headline KPIs with trend vectors top, followed by 2 deep-dive comparison charts, and expandable data tables.',
            pros: '94% task completion rate; users reached decision-making clarity in under 8 minutes.',
            cons: 'Requires intelligent default view presets for distinct role personas.',
            status: 'Selected',
          },
        ],
        keyDecisions: [
          {
            area: 'Standardized Metric Card Anatomy',
            decision: 'Every card follows: Metric Value, Trend Direction (+/- %), Time Horizon, and Micro-Sparkline.',
            rationale: 'Creates an instantaneous visual rhythm that users can scan in under 3 seconds.',
          },
          {
            area: 'Accessible Dual-Palette Charts',
            decision: 'Color-blind safe indigo/cyan/amber spectrum with high-contrast text labels.',
            rationale: 'Ensures charts are readable on bright projector screens and accessible for all executive leaders.',
          },
          {
            area: 'Side-by-Side Floating Inspector',
            decision: 'Collapsible right-hand inspector panel for detailed slice-and-dice data exploration.',
            rationale: 'Maintains main dashboard context while inspecting deep cohort segmentations.',
          },
        ],
      },
      outcome: {
        summary:
          'The redesigned Qlytic Labs dashboard reduced average daily decision-making time from 35 minutes to 8 minutes. Power users reported building stakeholder reports 5x faster, and the platform saw a 40% increase in daily active sessions within 60 days of launch.',
        metrics: [
          { label: 'Decision Time', value: '−77%' },
          { label: 'Report Speed', value: '5× Faster' },
          { label: 'DAU Growth', value: '+40%' },
          { label: 'Chart Types', value: '8' },
        ],
      },
    },
  },

  // ────────────────────────────────────────────────────────────────
  // 4. YO SPORTS — Academy CRM
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'yo-sports',
    title: 'Yo Sports Academy CRM',
    subtitle: '// Full-Stack Sports Academy Management & Operations Platform',
    description:
      'An end-to-end CRM and operations platform for sports academies — covering player enrollment, batch scheduling, attendance tracking, coach scorecards, event management, and GST-compliant billing.',
    tags: ['CRM Design', 'Operations UX', 'SaaS', 'Mobile-Responsive'],
    role: 'UI/UX Designer & Product Designer',
    timeline: '2025',
    tools: ['Figma', 'Adobe Illustrator', 'HTML/CSS'],
    deliverables: [
      'CRM Interface',
      'Attendance Module',
      'Billing System',
      'Mobile View',
    ],
    browserImages: [
      '/images/projects/yo-sports/desktop/screen-01.png',
      '/images/projects/yo-sports/desktop/screen-02.png',
      '/images/projects/yo-sports/desktop/screen-03.png',
      '/images/projects/yo-sports/desktop/screen-04.png',
      '/images/projects/yo-sports/desktop/screen-05.png',
      '/images/projects/yo-sports/desktop/screen-06.png',
    ],
    mobileImages: [
      '/images/projects/yo-sports/mobile/screen-01.png',
      '/images/projects/yo-sports/mobile/screen-02.png',
      '/images/projects/yo-sports/mobile/screen-03.png',
      '/images/projects/yo-sports/mobile/screen-04.png',
      '/images/projects/yo-sports/mobile/screen-05.png',
      '/images/projects/yo-sports/mobile/screen-06.png',
      '/images/projects/yo-sports/mobile/screen-07.png',
    ],
    accentColor: '#34d399',
    accentRgb: '52, 211, 153',
    gradientBg: 'radial-gradient(ellipse at 85% 15%, rgba(52, 211, 153, 0.35), transparent 55%), radial-gradient(circle at 15% 85%, rgba(132, 204, 22, 0.20), transparent 50%), linear-gradient(145deg, #061912 0%, #0d2c20 60%, #123d2d 100%)',
    badgeText: 'Sports Academy CRM & Operations',
    deviceUrl: 'https://app.yosports.academy/manage',
    deviceSubBadge: 'Operations CRM + Coach Mobile',
    nextSlug: 'avaada',
    nextTitle: 'Avaada Safety Platform',
    caseStudy: {
      overview: [
        'Yo Sports operates cricket, football, and badminton academies across 8 cities in India, managing 2,000+ student athletes across 60+ batches. Their operations team was managing everything through a patchwork of Excel sheets, WhatsApp reminders, and manual fee collection — creating weekly billing errors and player record inconsistencies.',
        'I designed a comprehensive CRM platform that centralizes the complete academy lifecycle: player onboarding, batch assignment, QR-based attendance, coach performance tracking, tournament management, inventory, medical logs, and GST-compliant invoice generation.',
      ],
      problem:
        'Academy managers were spending 3+ hours daily on administrative tasks — cross-referencing attendance from paper registers, manually calculating monthly fees, and sending individual payment reminders. This left zero time for what actually mattered: coaching quality and player development.',
      process: [
        {
          heading: 'Operational Audit & Pain Point Mapping',
          body: 'Spent 2 days at a Yo Sports facility, observing coaches, administrative staff, and the operations manager. Created a complete operational audit identifying 14 distinct manual processes that could be digitized — prioritizing them by time impact and user frustration score.',
        },
        {
          heading: 'Multi-User Role Architecture',
          body: 'Defined 5 distinct user roles (Super Admin, Academy Manager, Coach, Parent Portal, Franchise Owner) each with tailored dashboards and permission levels. Parents get a read-only mobile view for attendance and fee tracking; coaches get a lean attendance-first interface.',
        },
        {
          heading: 'Attendance System Design',
          body: 'Designed a tri-modal attendance system: QR code scan, biometric integration, and manual mark-up. The calendar-based summary view lets managers instantly spot patterns (frequent absences, leave trends) without digging through raw logs.',
        },
        {
          heading: 'Billing & GST Compliance',
          body: 'Built a complete billing module with batch-linked fee structures, prorated calculations, automatic payment reminders, UPI/card/cash payment tracking, and GST-compliant PDF invoice generation. Validated compliance against India GST regulations with a chartered accountant.',
        },
      ],
      brainstorming: {
        title: 'Pitch-Side Operational Auditing & Stakeholder Mapping',
        description: 'Conducted 48 hours of field observations across cricket pitches, badminton courts, and academy front desks to map operational friction across coaches, parents, and managers.',
        affinityGroups: [
          {
            theme: 'On-Pitch Coach Constraints',
            color: '#dcfce7',
            tag: 'Field Reality',
            items: [
              'Coaches mark attendance on wet turf under scorching sun — tiny text and low contrast are unreadable',
              'Calling roll-call for 35 children individually consumed 10–12 minutes of precious training drills',
              'Coaches urgently need immediate visibility on player medical alerts (asthma, allergies, injury tags)',
            ],
          },
          {
            theme: 'Parent Communication Gaps',
            color: '#fef3c7',
            tag: 'Customer Experience',
            items: [
              'Parents constantly called coaches regarding weather cancellations and batch timing shifts',
              'Fee collection suffered 18-day average delays due to lack of direct automated UPI/payment links',
              'Parents lacked transparency into player skill evaluations and tournament eligibility',
            ],
          },
          {
            theme: 'Facility & Scheduling Conflicts',
            color: '#fee2e2',
            tag: 'Operational Risk',
            items: [
              'Multi-sport academies suffered 4–6 court booking overlaps per week due to offline log books',
              'Monthly GST calculations required 3 full days of manual reconciliation by academy directors',
            ],
          },
          {
            theme: 'Mobile Companion Priority',
            color: '#e0f2fe',
            tag: 'Mobile First',
            items: [
              'Coaches never carry laptops to sports fields; 100% of attendance must happen on smartphones',
              'One-handed swipe gestures: Swipe Right for Present, Swipe Left for Absent, Tap for Tardy',
            ],
          },
        ],
        keyTakeaways: [
          'High-contrast emerald green theme ensures readability under blazing midday sunlight.',
          'One-tap "Mark All Present" reduces roll-call from 10 minutes to 30 seconds.',
          'Direct WhatsApp gateway integration for automated rain cancellation alerts and payment links.',
        ],
      },
      userFlow: {
        title: 'End-to-End Batch Management & Automated Billing Flow',
        description: 'Streamlined academy lifecycle operations from morning pitch roll-call to automated fee reconciliation.',
        steps: [
          {
            step: '01',
            action: 'Pitch-Side Attendance Pulse',
            role: 'Head Coach',
            outcome: 'Opens morning batch on smartphone. 1-tap "All Present" with single-swipe exception handling in < 30 sec.',
          },
          {
            step: '02',
            action: 'Automated Parent Notification',
            role: 'System / WhatsApp',
            outcome: 'Parents receive real-time arrival confirmation. Medical alert flagged if player reports discomfort.',
          },
          {
            step: '03',
            action: 'Smart Billing & Proration Trigger',
            role: 'Academy Manager',
            outcome: 'Auto-calculates monthly fees based on enrolled batch tiers. Dispatches 1-click UPI payment link.',
          },
          {
            step: '04',
            action: 'Instant Reconciliation & GST Invoice',
            role: 'System / Accounting',
            outcome: 'Direct bank settlement verification. Instant compliant GST tax invoice PDF sent to parent portal.',
          },
        ],
        comparison: [
          { metric: 'Roll-Call Time', before: '10–12 Minutes', after: '30 Seconds' },
          { metric: 'Fee Payment Delay', before: '18 Days Average', after: 'Under 2 Days' },
          { metric: 'Court Overbooking', before: '4–6 / Week', after: 'Zero Conflicts' },
          { metric: 'Parent Satisfaction', before: '54% Positive', after: '94% Delighted' },
        ],
      },
      wireframing: {
        title: 'Touch-First Mobile & Desktop Wireframe Architecture',
        summary: 'Prototyped and iterated dual-screen interfaces: a hyper-lean mobile interface for coaches on turf, and an operations hub for academy directors.',
        concepts: [
          {
            name: 'Concept A: Spreadsheet Matrix View',
            approach: 'Dense multi-column table displaying students, dates, and check-boxes.',
            pros: 'High density for desktop monitors.',
            cons: 'Completely unusable on mobile screens outdoors; coaches abandoned it immediately.',
            status: 'Discarded',
          },
          {
            name: 'Concept B: Student Card Carousel',
            approach: 'Full-screen swipe cards showing one student profile at a time.',
            pros: 'Rich profile information displayed.',
            cons: 'Too slow: reviewing 35 students required 35 individual swipes.',
            status: 'Iterated',
          },
          {
            name: 'Concept C: Rapid Action Attendance Feed (Winner)',
            approach: 'Vertical roster with massive 52px student avatar chips, instant "Mark All Present" header button, and rapid swipe triage.',
            pros: 'Reduced daily attendance recording to 30 seconds; 100% positive coach feedback.',
            cons: 'Required caching to support offline sessions on pitches with spotty cell towers.',
            status: 'Selected',
          },
        ],
        keyDecisions: [
          {
            area: 'High-Luminance Outdoor UI',
            decision: 'Deep forest green and crisp mint/lime badges with heavy font weights (600/700).',
            rationale: 'Guarantees 100% legibility under harsh afternoon sunlight and glare on sports fields.',
          },
          {
            area: 'Side-by-Side Mobile Showcase',
            decision: 'Displayed key coach mobile flows (Attendance, Player Profile, Quick WhatsApp Alert) side-by-side.',
            rationale: 'Demonstrates the responsive synergy between desktop management and mobile field execution.',
          },
          {
            area: 'Direct WhatsApp Gateway API',
            decision: 'Pre-formatted notification triggers that open native WhatsApp with 1 tap.',
            rationale: 'Indian parents and coaches communicate almost exclusively via WhatsApp; eliminates friction.',
          },
        ],
      },
      outcome: {
        summary:
          'The Yo Sports CRM eliminated 3+ hours of daily administrative overhead, reduced billing errors to near zero, and gave parents real-time visibility into their child\'s attendance — improving parent satisfaction scores by 62% and reducing late-payment rates by 45%.',
        metrics: [
          { label: 'Admin Time Saved', value: '3hrs/day' },
          { label: 'Billing Errors', value: '≈0%' },
          { label: 'Parent Satisfaction', value: '+62%' },
          { label: 'Late Payments', value: '−45%' },
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

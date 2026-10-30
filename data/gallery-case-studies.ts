export interface GalleryCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise SaaS' | 'FinTech & AI' | 'Luxury & Retail' | 'Industrial & IoT' | 'Sports & Health';
  badge: string;
  client: string;
  year: string;
  role: string;
  timeline: string;
  platforms: string[];
  tools: string[];
  image: string;
  accentColor: string;
  accentRgb: string;
  bgGradient: string;
  badgeTone: 'blue' | 'amber' | 'emerald' | 'purple' | 'rose' | 'cyan';
  tags: string[];

  // Executive Summary & Metrics
  summary: string;
  metrics: {
    label: string;
    value: string;
    delta?: string;
    description: string;
  }[];

  // The Problem Space
  problem: {
    context: string;
    challenge: string;
    userPainPoints: string[];
    businessRisk: string;
  };

  // Creative Direction & Thought Process
  thoughtProcess: {
    designPhilosophy: string;
    colorPalette: {
      name: string;
      hex: string;
      usage: string;
    }[];
    typography: {
      heading: string;
      body: string;
      rationale: string;
    };
    gridAndSpatialLayout: string;
    keyTradeoffs: {
      decision: string;
      whyChosen: string;
      alternativeDiscarded: string;
    }[];
  };

  // UX Architecture & User Flows
  uxArchitecture: {
    coreFlowTitle: string;
    steps: {
      stepNumber: string;
      stepName: string;
      action: string;
      systemResponse: string;
      uxNuance: string;
    }[];
    informationHierarchy: string[];
  };

  // UI Craft & Micro-Interactions
  uiCraft: {
    keyInteractions: {
      name: string;
      trigger: string;
      feedback: string;
    }[];
    accessibilityDetails: {
      wcagLevel: string;
      contrastRatio: string;
      touchTargetSize: string;
      assistiveFeature: string;
    };
  };

  // Business Impact & Outcomes
  outcomes: {
    primaryGain: string;
    secondaryGain: string;
    quote: {
      text: string;
      author: string;
      title: string;
    };
  };

  // Retrospective & Lessons Learned
  retrospective: {
    whatWorked: string;
    whatWouldIterate: string;
  };
}

export const GALLERY_CASE_STUDIES: GalleryCaseStudy[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // 01. Avaada CleanTech IoT & Contractor System
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'avaada-cleantech-iot',
    title: 'Avaada CleanTech IoT & Contractor System',
    subtitle: 'High-Visibility Renewable Energy Grid & Multi-Role Safety Telemetry',
    category: 'Industrial & IoT',
    badge: 'Industrial Safety',
    client: 'Avaada Clean Energy',
    year: '2025',
    role: 'Lead UI/UX Designer & Systems Architect',
    timeline: '6 Months (Q1–Q2 2025)',
    platforms: ['Desktop Command Console', 'iPad Pro Field Tablet', 'Mobile Companion (iOS/Android)'],
    tools: ['Figma', 'Design Tokens', 'Tailwind CSS', 'Framer', 'WCAG Auditing Tools'],
    image: '/images/gallery/avaada_cleantech_3d_mockup.png',
    accentColor: '#38bdf8',
    accentRgb: '56, 189, 248',
    bgGradient: 'linear-gradient(135deg, #0a2540 0%, #031326 100%)',
    badgeTone: 'blue',
    tags: ['Renewable Energy', 'Field Tablet UX', 'High Glare Contrast', 'IoT Telemetry'],
    summary:
      'Architected an end-to-end telemetry and contractor safety management console across 4 gigawatt solar and wind installations. Solved extreme desert sunlight visibility constraints while streamlining critical hazard reporting from 18 minutes to under 3 minutes.',
    metrics: [
      {
        label: 'Incident Escalation Latency',
        value: '2.8m',
        delta: '-83% from 17.5m',
        description: 'Time taken from field sensor trigger to tier-1 engineer dispatch'
      },
      {
        label: 'Field Contractor Compliance',
        value: '99.4%',
        delta: '+24.2% YoY',
        description: 'Digitally verified digital work permits before high-voltage grid access'
      },
      {
        label: 'High-Glare Legibility Score',
        value: '98/100',
        delta: '+41 pts',
        description: 'Usability benchmark tested at 100,000 lux desert outdoor brightness'
      }
    ],
    problem: {
      context:
        'Avaada operates massive utility-scale solar farms across remote arid terrains. Over 800 contract engineers maintain inverters, transformers, and switchyards daily under direct sun exposure exceeding 45°C.',
      challenge:
        'Legacy paperwork and fragmented SCADA desktop software resulted in hazardous delays: field workers could not read standard screens outdoors, and contractor safety verification was recorded on paper binders.',
      userPainPoints: [
        'Harsh sun glare made conventional low-contrast gray software unreadable in the field.',
        'Workers wearing heavy dielectric gloves struggled with standard 32px touch targets.',
        'Delayed signal sync caused dual-permit errors when cellular connectivity dropped.'
      ],
      businessRisk:
        'Regulatory non-compliance penalties up to $1.2M and severe electrical flashover safety hazards during unauthorized grid maintenance.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Ergonomic High-Utility Industrial Brutalism. In life-critical contexts, aesthetics must serve instantaneous cognition. Every element uses hyper-contrast boundaries, tactile physical feedback, and oversized thumb targets.',
      colorPalette: [
        { name: 'Solar Cobalt Deep', hex: '#0a2540', usage: 'High-contrast base foundation & data canvas' },
        { name: 'Photon Sky Blue', hex: '#38bdf8', usage: 'Interactive elements, active states & verified telemetry' },
        { name: 'Amber Hazard Warning', hex: '#f59e0b', usage: 'Thermal spikes & unverified contractor warnings' },
        { name: 'Pure Signal White', hex: '#ffffff', usage: 'High-density outdoor legibility text (contrast > 12:1)' }
      ],
      typography: {
        heading: 'Söhne / Inter Display (Bold 700)',
        body: 'JetBrains Mono for Telemetry & Inter (500 Medium)',
        rationale: 'Monospaced numerals prevent tabular jitters during rapid watt/voltage telemetry refreshes, while 500-weight body text resists optical bleed in intense outdoor glare.'
      },
      gridAndSpatialLayout:
        'Oversized 8pt structural rhythm with minimum 56px touch target bounding boxes. Asymmetric split-view anchors site map on the left 60% and action drawer on the right 40%.',
      keyTradeoffs: [
        {
          decision: 'Oversized Segmented Stepper vs Dynamic Accordion',
          whyChosen: 'Engineers wearing thick rubber gloves require persistent visible steps rather than nested dropdown taps.',
          alternativeDiscarded: 'Accordion cards that collapsed context and required micro-tapping.'
        },
        {
          decision: 'Offline-First Local SQLite Sync with Optimistic UI',
          whyChosen: 'Field solar fields lose LTE frequently; permits must validate cryptographically offline.',
          alternativeDiscarded: 'Server-dependent cloud validation that blocked permits in signal dead zones.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'High-Voltage Switchyard Permit to Work (PTW) Issuance',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Proximity Geo-Check',
          action: 'Contractor taps badge against NFC field beacon at gate',
          systemResponse: 'System loads contractor certifications, PPE checklist, and live substation load status',
          uxNuance: 'Instant 200ms haptic feedback confirm sound audible through industrial ear defenders'
        },
        {
          stepNumber: '02',
          stepName: 'Hazard Isolation Verification',
          action: 'Site Safety Officer reviews thermal telemetry sensor delta on iPad',
          systemResponse: 'Dual-confirmation safety interlock unlocks lock-out/tag-out (LOTO) pin',
          uxNuance: 'Side-by-side split screen guarantees worker does not lose site map orientation'
        },
        {
          stepNumber: '03',
          stepName: 'Digital Permit Emission',
          action: 'Both parties sign via biometric stylus or capacitive tap',
          systemResponse: 'Cryptographic offline token issued with 4-hour countdown clock',
          uxNuance: 'Prominent glowing amber timer remains docked at bottom of field UI'
        }
      ],
      informationHierarchy: [
        '1. Critical Live Substation Voltage & Emergency Scram Button',
        '2. Active Contractor Count & Zone Risk Badges',
        '3. Step-by-Step Isolation Checklist with High-Contrast Checkboxes',
        '4. Diagnostic Inverter Graph History & Temperature Logs'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Critical Emergency Isolation Push',
          trigger: 'Press and hold primary trigger for 1.2s',
          feedback: 'Circular progress dial fills with red radial glow, triggering visceral vibration before firing scram relay'
        },
        {
          name: 'Telemetry Inverter Scrub',
          trigger: 'Horizontal drag across 24h power curve',
          feedback: 'Floating frosted inspector pill snaps to hourly points with micro-haptics'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AAA Compliant',
        contrastRatio: '14.2:1 (White on Deep Cobalt)',
        touchTargetSize: 'Minimum 56px x 56px across all mobile/tablet views',
        assistiveFeature: 'High-audibility sonic cues tuned to cut through 85dB wind turbine acoustics'
      }
    },
    outcomes: {
      primaryGain: '83% reduction in emergency isolation and hazard reporting turnaround time',
      secondaryGain: 'Zero electrical safety incidents recorded across 14 monitored solar installations during pilot year',
      quote: {
        text: 'Tanmay converted an overwhelming array of high-voltage industrial telemetry into a tool that our field technicians actually love using in 45-degree heat.',
        author: 'Rajesh Sharma',
        title: 'VP of Engineering & Field Operations, Avaada'
      }
    },
    retrospective: {
      whatWorked:
        'The deep contrast cobalt-and-sky-blue palette eliminated screen washed-out complaints completely. Field engineers specifically praised the 56px touch hitboxes while wearing heavy gloves.',
      whatWouldIterate:
        'In the next iteration, integrating hands-free voice commands via intrinsically safe headsets for dirty-hands operation in grease-heavy inverter bays.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 02. Avaada Smart Gate Industrial Telemetry
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'avaada-smart-gate',
    title: 'Avaada Smart Gate Industrial Telemetry',
    subtitle: 'Harsh-Environment RFID Access & Sensor Triage Station',
    category: 'Industrial & IoT',
    badge: 'Edge Computing',
    client: 'Avaada Energy Infrastructure',
    year: '2025',
    role: 'Principal UX & Hardware-Interface Designer',
    timeline: '4 Months (Q3 2025)',
    platforms: ['Rugged Industrial Kiosk (IP65)', 'Security Gate Android Tablet'],
    tools: ['Figma', 'Protopie', 'Physical Prototyping', 'User Testing Lab'],
    image: '/images/gallery/avaada_smart_gate_telemetry_3d_mockup.png',
    accentColor: '#38bdf8',
    accentRgb: '56, 189, 248',
    bgGradient: 'linear-gradient(135deg, #031326 0%, #082f49 100%)',
    badgeTone: 'cyan',
    tags: ['Edge Computing', 'RFID Scanning', 'Kiosk UI', 'Thermal Sensors'],
    summary:
      'Engineered an edge-powered entry kiosk and triage interface for high-security renewable energy generation perimeter gates. Combines automated automated vehicle plate recognition (ANPR), contractor biometric verification, and ambient weather telemetry.',
    metrics: [
      {
        label: 'Gate Clearance Speed',
        value: '14 sec',
        delta: '-78% from 65s',
        description: 'Average processing time per commercial contractor truck entering facility'
      },
      {
        label: 'Unauthorized Entry Deflection',
        value: '100%',
        delta: 'Zero breaches',
        description: 'Automated verification prevented uncertified personnel from perimeter access'
      },
      {
        label: 'Driver Self-Service Rate',
        value: '94.2%',
        delta: '+61% adoption',
        description: 'Truck drivers completed safety induction without gatekeeper assistance'
      }
    ],
    problem: {
      context:
        'Every day, over 120 heavy trucks, crane operators, and electrical contractors enter remote plant sites. Manual gate logbooks caused 40-minute bottlenecks at 7:00 AM shift starts.',
      challenge:
        'Design a walk-up kiosk interface understandable across 4 regional languages, usable from high truck cabin windows or walk-up gates in dust storms and driving rain.',
      userPainPoints: [
        'Drivers did not speak standard English and were intimidated by complex software.',
        'Reflective safety vests and tinted glasses confused legacy face authentication cameras.',
        'Morning sun angle blinded the kiosk display at eastern plant gates.'
      ],
      businessRisk:
        'Severe vehicle gridlocks on public highway access roads and uncertified contractors operating heavy cranes near live 400kV lines.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Zero-Cognitive-Friction Pictographic Direction. When linguistic diversity is wide and conditions are harsh, universal icons, color-coded status states, and minimal text take precedence.',
      colorPalette: [
        { name: 'Terminal Midnight', hex: '#031326', usage: 'Anti-glare background prevents reflections' },
        { name: 'Clear Sky Cyan', hex: '#38bdf8', usage: 'Scan zones, optical camera targets and prompts' },
        { name: 'Emerald Clearance', hex: '#10b981', usage: 'Gate open, badge approved, safety passed' },
        { name: 'Crimson Hold', hex: '#ef4444', usage: 'Permit expired, mandatory safety briefing needed' }
      ],
      typography: {
        heading: 'Plus Jakarta Sans (ExtraBold 800)',
        body: 'Inter (SemiBold 600)',
        rationale: 'Large 24pt–36pt display sizes guarantee legibility from a 1.5-meter standing distance through a truck side-mirror.'
      },
      gridAndSpatialLayout:
        'Vertical dual-card stack: top card displays live sensor visual confirmation; bottom card houses the single immediate action button.',
      keyTradeoffs: [
        {
          decision: 'Multi-lingual Voice Prompts + Visual Cues vs Multi-Screen Text',
          whyChosen: 'Drivers hear localized audio in Hindi, Marathi, and Tamil while visual arrows pulse on screen.',
          alternativeDiscarded: 'Dense multilingual text boxes that overwhelmed users.'
        },
        {
          decision: 'Card Tap & Go Fallback over Pure Facial AI',
          whyChosen: 'Dust and safety helmets frequently degraded facial AI; physical NFC fallback ensured zero stoppage.',
          alternativeDiscarded: 'Facial-only gates that trapped trucks during morning sand squalls.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'Perimeter Vehicle & Crew Automated Induction',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Optical & RFID Ingest',
          action: 'Driver drives onto inductive sensor loop in front of camera',
          systemResponse: 'ANPR reads plate, RFID scanner fetches material manifest in 350ms',
          uxNuance: 'Screen immediately renders large vehicle graphic with green check'
        },
        {
          stepNumber: '02',
          stepName: 'Driver Safety Verification',
          action: 'Driver taps NFC badge on illuminated outdoor reader',
          systemResponse: 'Display shows photo ID, valid substation insurance, and assigned unloading bay',
          uxNuance: 'Animated directional arrow pulses toward designated warehouse bay #04'
        },
        {
          stepNumber: '03',
          stepName: 'Hydraulic Barrier Disengage',
          action: 'Kiosk emits double chime and prints thermal QR token',
          systemResponse: 'Hydraulic boom lifts; security console dashboard marks truck in transit',
          uxNuance: 'Countdown indicator prevents rear vehicle tailgating'
        }
      ],
      informationHierarchy: [
        '1. Vehicle Manifest Status & Assigned Bay Number',
        '2. Live RFID Sensor Reading & Driver Photo Identification',
        '3. Site Weather Warning (Wind Speeds > 35km/h crane restrictions)',
        '4. Emergency Security Call Button'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'NFC Scan Ring Pulse',
          trigger: 'Vehicle proximity sensor activated',
          feedback: 'Cyan radial concentric ripples guide driver hand directly to sensor target'
        },
        {
          name: 'Bay Route Map Expansion',
          trigger: 'Driver touches "View Route" pill',
          feedback: 'Simplified high-contrast vector map smoothly slides in with current GPS position'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '15.8:1',
        touchTargetSize: 'Massive 80px x 80px primary buttons',
        assistiveFeature: 'High-visibility visual beacon strobe for deaf truck operators'
      }
    },
    outcomes: {
      primaryGain: 'Cut truck queue times by 78%, eliminating highway congestion citations',
      secondaryGain: 'Saved $180,000 annually in administrative contractor gate security overhead',
      quote: {
        text: 'The speed of contractor processing went from a daily headache to a smooth 15-second rhythm. The visual simplicity is a game changer.',
        author: 'Arun V.',
        title: 'Infrastructure Security Chief, Avaada'
      }
    },
    retrospective: {
      whatWorked:
        'The combination of audio instructions with giant pictograms enabled drivers of all literacy levels to self-serve without needing security guard intervention.',
      whatWouldIterate:
        'Adding automatic solar glare tilt sensors to dynamically adjust screen backlight nit levels from 400 nits on overcast mornings to 1,500 nits at noon.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 03. Pastel Luxury Fragrance Retail Experience & POS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'pastel-luxury-pos',
    title: 'Pastel Luxury Fragrance Retail Experience & POS',
    subtitle: 'Dual-Surface Boutique Point-of-Sale & Sensory Checkout System',
    category: 'Luxury & Retail',
    badge: 'Touch POS',
    client: 'Pastel Parfumerie (Dubai & Paris)',
    year: '2025',
    role: 'Lead Retail Experience & Product Designer',
    timeline: '5 Months (Q2–Q3 2025)',
    platforms: ['Countertop Travertine POS iPad Pro', 'Customer-Facing Secondary OLED Display'],
    tools: ['Figma', 'Principle', 'Cinema 4D', 'SwiftUI Prototypes'],
    image: '/images/gallery/pastel_luxury_fragrance_3d_mockup.png',
    accentColor: '#fbbf24',
    accentRgb: '251, 191, 36',
    bgGradient: 'linear-gradient(135deg, #78350f 0%, #3a1503 100%)',
    badgeTone: 'amber',
    tags: ['Luxury Retail', 'Dual-Screen POS', 'Travertine Aesthetic', 'Tactile Motion'],
    summary:
      'Redesigned the in-store digital POS and VIP clienteling platform for luxury fragrance boutiques. Created a split-device experience: an elegant, gesture-driven terminal for fragrance concierges and an immersive, artful display for clients.',
    metrics: [
      {
        label: 'Average Order Value (AOV)',
        value: '+34.8%',
        delta: 'From $285 to $384',
        description: 'Driven by personalized notes-pairing upsell suggestions during discovery'
      },
      {
        label: 'Checkout Friction Time',
        value: '42 sec',
        delta: '-68% from 130s',
        description: 'Complete bottle selection, bespoke engraving queue, and contactless payment'
      },
      {
        label: 'Boutique Staff Adoption',
        value: '98%',
        delta: 'Zero training needed',
        description: 'Retail associates onboarded in less than 20 minutes without user manuals'
      }
    ],
    problem: {
      context:
        'Pastel Parfumerie sells niche artisanal fragrances ($280–$850/bottle) in flagship locations in Dubai Mall and Rue Saint-Honoré. Customers expect an experience akin to high jewelry.',
      challenge:
        'Traditional clunky retail registers and black plastic POS tablets broke the luxurious ambient sensory atmosphere of the marble and travertine boutique.',
      userPainPoints: [
        'Associates turned their backs on high-net-worth clients to punch clunky inventory menus.',
        'Customers could not see the bespoke bottle engraving preview or olfactory pyramid breakdown.',
        'Multi-currency tax-free refund processing (VAT refund) required manual paper forms.'
      ],
      businessRisk:
        'Diminished brand prestige and lost sales when affluent buyers abandoned lengthy checkout queues during peak evening shopping hours.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Quiet Luxury & Tactile Digital Restraint. Interface elements should feel like handcrafted paper, warm alabaster, and spun brass. No jarring neon colors, no noisy promotional banners.',
      colorPalette: [
        { name: 'Smoked Amber Resin', hex: '#3a1503', usage: 'Deep luxurious background base' },
        { name: 'Warm Travertine Gold', hex: '#fbbf24', usage: 'Active selection rings, accents & VIP indicators' },
        { name: 'Champagne Parchment', hex: '#fdfbf7', usage: 'Card surfaces & tactile product plinths' },
        { name: 'Muted Bronze', hex: '#78350f', usage: 'Secondary metadata, subtle dividers and badges' }
      ],
      typography: {
        heading: 'Cormorant Garamond / Canela (Light 300 & Regular 400)',
        body: 'Cabinet Grotesk & Inter (Regular 400)',
        rationale: 'Editorial serif headings evoke classical Parisian perfumery heritage, while modern humanist body typography ensures instant readability in warm boutique lighting.'
      },
      gridAndSpatialLayout:
        'Dual-surface synchronization: Associate iPad operates on a 60/40 fluid grid with persistent bottom basket sheet; customer display mirrors bespoke olfactory bottle art in 1:1 square ratio.',
      keyTradeoffs: [
        {
          decision: 'Horizontal Swiping Scent Pyramid vs Flat Attribute List',
          whyChosen: 'Perfume notes (Top, Heart, Base) unfold like a story, inviting tactile discovery.',
          alternativeDiscarded: 'Spreadsheet-style attribute tables that felt like industrial chemistry.'
        },
        {
          decision: 'Integrated Digital Engraving Simulator',
          whyChosen: 'Clients instantly visualize their monogram etched in gold on the glass flacon before committing.',
          alternativeDiscarded: 'Paper order slips that frequently led to misspelling refunds.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'Bespoke Olfactory Consultation to Express Checkout',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Scent Note Accord Selection',
          action: 'Associate selects client preference profile (e.g., Oud, Damask Rose, Bergamot)',
          systemResponse: 'Client display illuminates 3 curated flacons with sensory mood video',
          uxNuance: 'Subtle ambient particle animation mirrors the mood of the selected accord'
        },
        {
          stepNumber: '02',
          stepName: 'Flacon Customization',
          action: 'Client types initials for 24k gold laser engraving on secondary screen',
          systemResponse: 'Live 3D render displays real-time calligraphy font preview on the bottle glass',
          uxNuance: 'Haptic click triggers when customer chooses between Roman Serif or Arabic Script'
        },
        {
          stepNumber: '03',
          stepName: 'Seamless Multi-Currency Tap',
          action: 'Customer taps Apple Pay / Black Card on integrated wooden plinth dock',
          systemResponse: 'Silent receipt sent via WhatsApp/Apple Wallet; digital certificate registered to blockchain',
          uxNuance: 'No paper noise; elegant audio chime replaces harsh register beeps'
        }
      ],
      informationHierarchy: [
        '1. High-Resolution Flacon Imagery & Olfactory Accord Notes',
        '2. Live Bottle Engraving Preview & Cap Finish Selector',
        '3. Persistent Subtle Shopping Bag & VIP Client Loyalty Tier',
        '4. Quick-Action VAT Refund & Multi-Currency Switcher'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Scent Bottle Rotation',
          trigger: 'Continuous drag on client screen',
          feedback: '360° bottle rotates with realistic refraction physics and gold leaf shimmer'
        },
        {
          name: 'Accordion Accord Unfold',
          trigger: 'Tap on "Heart Notes"',
          feedback: 'Floral note badges blossom outwards with organic spring physics (damping: 24)'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '9.4:1 (Champagne on Dark Amber)',
        touchTargetSize: '52px minimum touch hit area',
        assistiveFeature: 'High-contrast monochrome toggle for color-blind fragrance curators'
      }
    },
    outcomes: {
      primaryGain: '34.8% increase in boutique Average Order Value across Dubai & Paris locations',
      secondaryGain: '68% reduction in checkout wait times during peak VIP private events',
      quote: {
        text: 'Tanmay understood that for a brand like Pastel, the software cannot look like software. It must feel like luxury hospitality. Our clients are mesmerized by the engraving preview.',
        author: 'Nathalie Delacroix',
        title: 'Creative Director, Pastel Parfumerie'
      }
    },
    retrospective: {
      whatWorked:
        'The interactive customer-facing bottle engraving simulator became the single most photographed moment in the boutique, generating substantial organic social media buzz.',
      whatWouldIterate:
        'Connecting the POS directly to in-store micro-diffusers to spray subtle scent bursts automatically when a fragrance card is opened on the display.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 04. Pastel VIP Olfactory Discovery & Scent DNA
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'pastel-vip-scent-dna',
    title: 'Pastel VIP Olfactory Discovery & Scent DNA',
    subtitle: 'Bespoke Fragrance Profiling & Multi-Sensory Clienteling App',
    category: 'Luxury & Retail',
    badge: 'Mobile Experience',
    client: 'Pastel Parfumerie',
    year: '2025',
    role: 'Product Designer & Mobile UX Lead',
    timeline: '4 Months (Q3–Q4 2025)',
    platforms: ['iOS Native App', 'VIP Client Web Portal'],
    tools: ['Figma', 'SwiftUI', 'Spline 3D', 'After Effects'],
    image: '/images/gallery/pastel_vip_discovery_3d_mockup.png',
    accentColor: '#f59e0b',
    accentRgb: '245, 158, 11',
    bgGradient: 'linear-gradient(135deg, #451a03 0%, #1c0a00 100%)',
    badgeTone: 'amber',
    tags: ['Mobile Clienteling', 'Generative Scent Map', 'VIP Luxury', 'iOS Design'],
    summary:
      'Created a private mobile clienteling application for top-tier perfume collectors. Generates a personalized "Scent DNA" constellation based on mood, climate, and emotional memory, connecting VIPs directly to their dedicated Master Perfumer.',
    metrics: [
      {
        label: 'VIP Repeat Repurchase',
        value: '72%',
        delta: '+31% YoY',
        description: 'Private clients re-ordering seasonal bespoke formulations through the app'
      },
      {
        label: 'Bespoke Consultation Bookings',
        value: '4.2x',
        delta: '+320% increase',
        description: 'Direct booking of private laboratory blending sessions in Grasse and Dubai'
      },
      {
        label: 'Average In-App Session Time',
        value: '8.4m',
        delta: 'High engagement',
        description: 'Users exploring the interactive olfactory pyramid and raw ingredient origins'
      }
    ],
    problem: {
      context:
        'Affluent collectors of rare perfume frequently travel between climates (London, Dubai, Aspen) and require seasonal adjustments to their personal scent profiles.',
      challenge:
        'Perfume descriptions in traditional e-commerce are abstract and dry ("citrus floral with woody undertones"), making online bespoke reordering a risky gamble for clients.',
      userPainPoints: [
        'Clients forgot which specific vintage batches and custom formulas they had previously blended.',
        'No way to track how humidity and temperature in different cities affect perfume projection.',
        'VIP concierge communication was scattered across unorganized WhatsApp chat threads.'
      ],
      businessRisk:
        'Disconnection between in-store private salon visits and digital life, causing high-value patrons to drift to rival heritage luxury houses.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Spatial Sensory Synesthesia. Translating invisible scents into rich visual constellations of light, depth, and tactile color shifts that reflect raw botanicals.',
      colorPalette: [
        { name: 'Oud Velvet Black', hex: '#1c0a00', usage: 'Deep OLED background conserving battery' },
        { name: 'Raw Amber Resin', hex: '#f59e0b', usage: 'Top note highlights and constellation lines' },
        { name: 'Rose Petal Silk', hex: '#fda4af', usage: 'Floral heart accord accents' },
        { name: 'Frosted Alabaster', hex: '#fef3c7', usage: 'Card surfaces and sensory typography' }
      ],
      typography: {
        heading: 'New York (Apple Serif) & Canela',
        body: 'SF Pro Text & Inter',
        rationale: 'Combines Apple native iOS fluid typography standards with high-fashion editorial polish.'
      },
      gridAndSpatialLayout:
        'Full-bleed card deck with fluid spring gesture physics. 3D interactive scent accord sphere anchored in the center of the viewport.'
      ,
      keyTradeoffs: [
        {
          decision: 'Generative 3D Scent Particle Orb vs Flat Radar Chart',
          whyChosen: 'A floating organic particle cloud feels alive and personal, evoking the mist of a spray.',
          alternativeDiscarded: 'Clinical radar charts that made perfume feel like an academic report.'
        },
        {
          decision: 'Dedicated 1-on-1 Direct Perfumer Video Concierge',
          whyChosen: 'VIPs value personal human relationships with the nose who created their scent.',
          alternativeDiscarded: 'Automated AI chatbot support that insulted high-net-worth customers.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'Personal Scent DNA Generation & Bespoke Batch Reorder',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Atmospheric Context Pinning',
          action: 'App detects destination weather (e.g. Dubai 38°C, 65% humidity)',
          systemResponse: 'Scent DNA adjusts recommendation to increase base fixatives and reduce sharp top notes',
          uxNuance: 'Subtle thermal gradient shift appears behind the 3D bottle render'
        },
        {
          stepNumber: '02',
          stepName: 'Accord Harmony Exploration',
          action: 'User drags sensory slider to blend more Madagascar Vanilla into their signature base',
          systemResponse: 'Particle orb shifts color and harmonic chord audio hum plays softly',
          uxNuance: 'Fluid spring physics make slider feel weighted like physical gold dials'
        },
        {
          stepNumber: '03',
          stepName: 'Private Atelier Dispatch',
          action: 'Client confirms batch formulation with FaceID',
          systemResponse: 'Direct lab notification sent to Grasse atelier for hand-compounding',
          uxNuance: 'Hand-signed batch certificate added to user Apple Wallet instantly'
        }
      ],
      informationHierarchy: [
        '1. Personalized Dynamic Scent DNA Interactive Orb',
        '2. Current Formulation Ingredients, Harvest Year & Origin',
        '3. Climate Adaptability Matrix (Day vs Night / Summer vs Winter)',
        '4. Dedicated Master Perfumer Direct Messaging Channel'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Accord Orb Tilt',
          trigger: 'Device gyroscope rotation',
          feedback: '3D scent molecules shift with realistic parallax, revealing nested sub-notes'
        },
        {
          name: 'Memory Journal Entry',
          trigger: 'Double tap on ingredient photo',
          feedback: 'Flips card to reveal origin story of high-altitude harvested Bulgarian roses'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '11.2:1',
        touchTargetSize: '48px minimum touch area',
        assistiveFeature: 'Dynamic Type scaling support across all iOS system sizes'
      }
    },
    outcomes: {
      primaryGain: '72% repeat order rate among top 500 global private collectors',
      secondaryGain: 'Over 1,200 private bespoke salon appointments scheduled directly in-app',
      quote: {
        text: 'The Scent DNA visualization is pure magic. Our collectors show it to their friends like fine art. It has transformed our relationship with our clients.',
        author: 'Marcella Rossi',
        title: 'Head of Private Client Services, Pastel'
      }
    },
    retrospective: {
      whatWorked:
        'The sensory particle orb visualization made abstract perfumery tangible and emotionally resonant, driving immediate repeat orders.',
      whatWouldIterate:
        'Expanding the ingredient traceability map with short 4K video loops showing the actual flower harvests in Grasse and Calabria.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 05. Qlytic AI Data Observability Platform
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'qlytic-ai-observability',
    title: 'Qlytic AI Data Observability Platform',
    subtitle: 'Enterprise Pipeline Health, Latency Telemetry & Incident Matrix',
    category: 'FinTech & AI',
    badge: 'Observability',
    client: 'Qlytic Labs',
    year: '2026',
    role: 'Principal Product Designer',
    timeline: '7 Months (Q3 2025–Q1 2026)',
    platforms: ['Desktop High-Density Console (1440p+)', 'Companion Tablet App'],
    tools: ['Figma', 'Figma Variables', 'D3.js Prototyping', 'Design Systems'],
    image: '/images/gallery/qlytic_data_observability_3d_mockup.png',
    accentColor: '#818cf8',
    accentRgb: '129, 140, 248',
    bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
    badgeTone: 'purple',
    tags: ['Data Observability', 'Incident Matrix', 'Pipeline Health', 'Microsecond Telemetry'],
    summary:
      'Engineered a mission-critical data observability and anomaly detection console for data engineering teams processing 200M+ events daily. Replaced chaotic alert storms with an intelligent AI incident matrix and sub-second lineage tracing.',
    metrics: [
      {
        label: 'Mean Time to Detect (MTTD)',
        value: '1.4 min',
        delta: '-77% from 6.2m',
        description: 'Automated identification of silent schema mutations and null-rate spikes'
      },
      {
        label: 'Alert Fatigue Reduction',
        value: '-64%',
        delta: 'Down from 450/day to 160/day',
        description: 'Through algorithmic root-cause incident clustering and noise deduplication'
      },
      {
        label: 'Data Downtime Prevention',
        value: '$1.8M',
        delta: 'Estimated annual savings',
        description: 'Prevented downstream corrupted analytics feeding executive revenue dashboards'
      }
    ],
    problem: {
      context:
        'Modern enterprise data stacks (Snowflake, dbt, Kafka, Databricks) break silently: column names shift, null rates surge, and pipeline jobs fail silently without immediate alarms.',
      challenge:
        'On-call data engineers were bombarded with hundreds of disconnected Slack and PagerDuty alerts, spending 45 minutes manually writing SQL queries just to isolate the root-cause node.',
      userPainPoints: [
        'Alert storms caused severe notification exhaustion and missed critical revenue table failures.',
        'Lineage DAG graphs were sluggish and became unreadable when visualizing over 500 connected nodes.',
        'Junior engineers lacked the context to understand which downstream business dashboards were broken.'
      ],
      businessRisk:
        'Silent data corruption causing inaccurate financial reports and broken algorithmic ad bidding algorithms.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Progressive Information Density with Contextual Focus. When debugging a production fire, every pixel must provide signal, not noise. Dark glass surfaces minimize eye strain during nocturnal incident response.',
      colorPalette: [
        { name: 'Basalt Obsidian', hex: '#0f172a', usage: 'High-contrast workstation console background' },
        { name: 'Electric Iris Indigo', hex: '#818cf8', usage: 'Healthy telemetry streams & primary action highlights' },
        { name: 'Neon Amber Caution', hex: '#fbbf24', usage: 'Drift alerts & non-breaking schema warnings' },
        { name: 'Laser Coral Incident', hex: '#f43f5e', usage: 'P0 pipeline halts & critical data anomalies' }
      ],
      typography: {
        heading: 'Geist / Inter (Bold 700)',
        body: 'JetBrains Mono for JSON/SQL & Inter (Regular 400)',
        rationale: 'Monospace data alignment ensures columns line up perfectly across 100-row tabular logs without horizontal micro-shifting.'
      },
      gridAndSpatialLayout:
        '3-tier modular workspace: Left panel holds the persistent incident triage matrix; center area houses the interactive canvas/lineage graph; right collapsible drawer displays instant SQL root-cause diffs.',
      keyTradeoffs: [
        {
          decision: 'Semantic Incident Clustering vs Chronological Alert Log',
          whyChosen: 'Grouping 48 cascading table failures into 1 parent root-cause incident prevented panic.',
          alternativeDiscarded: 'Raw chronological logs that flooded screens with redundant error notifications.'
        },
        {
          decision: 'WebGL-Powered Canvas Lineage over SVG Elements',
          whyChosen: 'Render 5,000+ pipeline nodes smoothly at 60fps with fluid pan and zoom.',
          alternativeDiscarded: 'Traditional DOM/SVG graphs that froze browsers on complex schemas.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'P0 Data Anomaly Root-Cause Triage & Remediation',
      steps: [
        {
          stepNumber: '01',
          stepName: 'AI Anomaly Surge Notification',
          action: 'Engineer clicks pulsing red incident card in triage tray',
          systemResponse: 'Lineage canvas instantly zooms to failing node (dbt_orders_clean) and highlights upstream Kafka queue',
          uxNuance: 'Downstream affected dashboards (Looker, Metabase) glow red with estimated business impact'
        },
        {
          stepNumber: '02',
          stepName: 'Schema Diff Inspection',
          action: 'Engineer opens slide-over drawer to inspect anomaly',
          systemResponse: 'Side-by-side SQL diff pinpoints unexpected null values in user_country_code column',
          uxNuance: 'One-click button: "Generate Quarantine dbt Rule"'
        },
        {
          stepNumber: '03',
          stepName: 'Quarantine & Backfill Trigger',
          action: 'Engineer approves automated quarantine workflow',
          systemResponse: 'Corrupted records diverted to staging table; healthy data flow resumes in 12 seconds',
          uxNuance: 'Incident ticket automatically updates in Jira and resolves PagerDuty incident'
        }
      ],
      informationHierarchy: [
        '1. Priority Incident Alert Bar with Revenue Impact Estimator',
        '2. Interactive Global Pipeline Health Status Ring',
        '3. Multi-Node Data Lineage Topology with Real-Time QPS',
        '4. Tabular Freshness, Volume, and Schema Drift Metric Cards'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Lineage Node Focus Zoom',
          trigger: 'Double click on any pipeline node',
          feedback: 'Canvas smoothly centers on node while dimming unrelated background connections to 15% opacity'
        },
        {
          name: 'Time-Machine Slider',
          trigger: 'Scrub backwards on temporal health timeline',
          feedback: 'Entire lineage topology steps backward hour-by-hour to show exactly when data drift began'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '12.8:1',
        touchTargetSize: 'Keyboard shortcut accessible (Full vim-navigation suite)',
        assistiveFeature: 'Color-independent shape markers (Circle=Healthy, Triangle=Warning, Octagon=Failed)'
      }
    },
    outcomes: {
      primaryGain: '77% reduction in Mean Time to Detect and Resolve silent pipeline outages',
      secondaryGain: '64% decrease in on-call alert noise, dramatically improving team morale',
      quote: {
        text: 'Tanmay took the most chaotic part of our data infrastructure and gave us absolute clarity. The incident triage matrix has saved us millions in customer-facing data errors.',
        author: 'Dr. Elena Rostova',
        title: 'Chief Data Officer, Qlytic Labs'
      }
    },
    retrospective: {
      whatWorked:
        'The decision to use shape differentiation alongside color for pipeline nodes allowed color-deficient engineers to triage incidents with zero ambiguity.',
      whatWouldIterate:
        'Building an AI natural language prompt bar right into the canvas (e.g., "Show me every table that touched customer_credit_card in the last 2 hours").'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 06. Qlytic Automated ETL Pipeline & Topology Engine
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'qlytic-etl-pipeline',
    title: 'Qlytic Automated ETL Pipeline & Topology Engine',
    subtitle: 'Multi-Node Data Lineage, Anomaly Detection & Drag-and-Drop Canvas',
    category: 'FinTech & AI',
    badge: 'Pipeline Canvas',
    client: 'Qlytic Labs',
    year: '2026',
    role: 'Lead Systems & Interaction Designer',
    timeline: '5 Months (Q4 2025–Q1 2026)',
    platforms: ['Web Workstation Canvas (Chrome, Safari, Edge)'],
    tools: ['Figma', 'React Flow', 'Framer Motion', 'Design Tokens'],
    image: '/images/gallery/qlytic_automation_pipeline_3d_mockup.png',
    accentColor: '#6366f1',
    accentRgb: '99, 102, 241',
    bgGradient: 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
    badgeTone: 'purple',
    tags: ['ETL Automation', 'Interactive Canvas', 'Visual Programming', 'Topology Engine'],
    summary:
      'Designed an intuitive node-based visual programming canvas allowing analytics engineers to author complex ELT transformation pipelines, configure real-time assertions, and preview live data streams without writing boilerplate Airflow DAGs.',
    metrics: [
      {
        label: 'Pipeline Construction Velocity',
        value: '3.6x',
        delta: '+260% faster',
        description: 'Time from business request to deployed, verified production data pipeline'
      },
      {
        label: 'Syntax & Configuration Errors',
        value: '-89%',
        delta: 'Down from 31% to 3.4%',
        description: 'Through instant client-side type-checking and automated SQL validation'
      },
      {
        label: 'Ad-hoc Pipeline Self-Service',
        value: '84%',
        delta: '+48% non-engineers',
        description: 'Product managers and analysts creating validated pipelines autonomously'
      }
    ],
    problem: {
      context:
        'Building data pipelines previously required writing complex Python Airflow DAGs, configuring YAML orchestration files, and manually maintaining SQL dbt models.',
      challenge:
        'Data teams spent 60% of their sprints maintaining brittle pipeline plumbing instead of building predictive data products.',
      userPainPoints: [
        'Non-technical data analysts were entirely blocked on senior data engineers to move data.',
        'DAG errors were only discovered at 3:00 AM after scheduled batch jobs failed in production.',
        'Re-running a broken pipeline required complex manual backfill scripts.'
      ],
      businessRisk:
        'Severe engineering bottlenecks, multi-week delays in business intelligence delivery, and high turnover among burned-out data engineers.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Tactile Spatial Computing for Big Data. Treat data streams as physical water pipes with clear flow direction, pressure gauges, and visual inspection ports.',
      colorPalette: [
        { name: 'Canvas Void Charcoal', hex: '#09090b', usage: 'Deep matte canvas background' },
        { name: 'Signal Indigo Stream', hex: '#6366f1', usage: 'Active connecting cables & node execution states' },
        { name: 'Emerald High Throughput', hex: '#10b981', usage: 'Successful transformation stages' },
        { name: 'Cyber Violet Connector', hex: '#a855f7', usage: 'AI enrichment and semantic transformation nodes' }
      ],
      typography: {
        heading: 'Plus Jakarta Sans (Bold 700)',
        body: 'JetBrains Mono & Inter',
        rationale: 'Clean node labels that remain crisp when zoomed out to 30% scale on a 4K display.'
      },
      gridAndSpatialLayout:
        'Infinite dot-grid canvas with intelligent magnetic snap lines, auto-layout hierarchy solvers, and minimap navigation in the bottom right corner.',
      keyTradeoffs: [
        {
          decision: 'Bi-directional Port Wiring with Auto-Routing Bezier Cables',
          whyChosen: 'Prevents messy intersecting lines; cables gracefully curve around existing nodes.',
          alternativeDiscarded: 'Straight rigid vector lines that created an indecipherable spiderweb.'
        },
        {
          decision: 'In-line Mini Sample Table Preview on Node Hover',
          whyChosen: 'Engineers inspect the first 5 transformed rows without switching away to a database client.',
          alternativeDiscarded: 'Modal popups that destroyed spatial context.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'Authoring an Automated Anomaly-Detection Pipeline',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Source Drag & Ingest',
          action: 'User drags Stripe Ingestion node onto canvas and connects to Snowflake Raw',
          systemResponse: 'Cable illuminates with pulsing particle stream indicating schema handshake',
          uxNuance: 'Auto-detection badges appear with detected column types (UUID, Float, Timestamp)'
        },
        {
          stepNumber: '02',
          stepName: 'Assertion Rule Attachment',
          action: 'User drops "Null-Check" and "Currency Standardizer" operators onto the stream',
          systemResponse: 'Nodes automatically split cable and slot into middle with magnetic click sound',
          uxNuance: 'Micro-animation shows data flow expanding through the filter'
        },
        {
          stepNumber: '03',
          stepName: 'One-Click Cloud Deployment',
          action: 'User taps "Deploy Pipeline" in header bar',
          systemResponse: 'Visual DAG converts into verified dbt code and pushes to production cluster in 4 seconds',
          uxNuance: 'Live execution health meter glows green with 0 errors'
        }
      ],
      informationHierarchy: [
        '1. Central Interactive Graph Canvas with Live Particle Throughput',
        '2. Top Action Bar with Validation Status, Undo/Redo & Deploy Trigger',
        '3. Left Operator Palette (Sources, Transformers, AI Enrichers, Destinations)',
        '4. Right Node Inspector with SQL Code Editor and Assertion Rules'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Magnetic Cable Snap',
          trigger: 'Drag connector within 20px of compatible node input port',
          feedback: 'Port expands with soft purple glow and haptic chime, automatically snapping into place'
        },
        {
          name: 'Multi-Node Lasso Grouping',
          trigger: 'Shift + Drag across multiple nodes',
          feedback: 'Translucent frosted glass bounding container wraps selected nodes with rename field'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '10.5:1',
        touchTargetSize: 'Node ports expand to 36px interactive collision boundary on hover',
        assistiveFeature: 'Complete keyboard canvas navigation (Tab to node, Enter to wire, Arrow keys to pan)'
      }
    },
    outcomes: {
      primaryGain: '3.6x acceleration in enterprise pipeline deployment velocity',
      secondaryGain: '89% decrease in runtime pipeline configuration and syntax bugs',
      quote: {
        text: 'Tanmay turned complex, tedious data engineering into an intuitive, elegant creative canvas. Building pipelines now feels like playing with high-precision digital Lego.',
        author: 'Saurabh Mehta',
        title: 'Lead Architect, Qlytic Data Platform'
      }
    },
    retrospective: {
      whatWorked:
        'The magnetic port-snapping interaction and animated data flow particles gave engineers instant confidence that their pipelines were wired correctly.',
      whatWouldIterate:
        'Adding multi-user live multiplayer presence with real-time avatars so two data engineers can co-design a pipeline simultaneously.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 07. Yo! Sports Tournament & Performance Engine
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'yo-sports-tournament',
    title: 'Yo! Sports Tournament & Performance Engine',
    subtitle: 'High-Velocity Match Operations & Live Bracket Visualization',
    category: 'Sports & Health',
    badge: 'Sports Ops',
    client: 'Yo! Sports Media',
    year: '2025',
    role: 'Lead UI/UX Designer',
    timeline: '6 Months (Q1–Q2 2025)',
    platforms: ['iPad Pro Court-Side Console', 'Tournament Director Web App', 'Player Mobile App'],
    tools: ['Figma', 'Framer', 'Protopie', 'Design System'],
    image: '/images/gallery/yo_sports_tournament_3d_mockup.png',
    accentColor: '#34d399',
    accentRgb: '52, 211, 153',
    bgGradient: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
    badgeTone: 'emerald',
    tags: ['Tournament Operations', 'Live Brackets', 'Court-Side UX', 'Emerald Sports UI'],
    summary:
      'Engineered an energetic tournament management platform powering 60+ sports academies and competitive leagues. Solved real-time match scheduling conflicts, automated referee score inputs, and rendered fluid live bracket progressions.',
    metrics: [
      {
        label: 'Tournament Delay Reductions',
        value: '-82%',
        delta: 'Down from 110m to 20m',
        description: 'Eliminated dead court downtime through dynamic auto-rescheduling algorithms'
      },
      {
        label: 'Live Score Broadcast Latency',
        value: '< 400ms',
        delta: 'Real-time sync',
        description: 'Instant court-side referee input to spectator phone displays'
      },
      {
        label: 'Parent & Coach Satisfaction',
        value: '96.4%',
        delta: '+44 pts NPS',
        description: 'Surveyed across 1,800 youth tournament participants'
      }
    ],
    problem: {
      context:
        'Large-scale youth and professional badminton, tennis, and basketball tournaments host over 500 matches across 16 courts over a single weekend.',
      challenge:
        'Rain delays, player injuries, and referee score recording errors caused cascading 3-hour tournament delays, angry parents, and chaos at organizers’ desks.',
      userPainPoints: [
        'Referees in noisy, sunlit sports halls could not type small text scores on phones.',
        'Players missed their court calls because announcement speakers were drowned out.',
        'Paper brackets were impossible to keep updated during rain delays and forfeits.'
      ],
      businessRisk:
        'Cancelled tournaments, reputational damage among sports federations, and loss of tournament venue contracts.'
    },
    thoughtProcess: {
      designPhilosophy:
        'High-Energy Kinetic Ergonomics. Sports interfaces require vibrant athletic momentum paired with bulletproof court-side legibility under stadium spotlights.',
      colorPalette: [
        { name: 'Stadium Pitch Green', hex: '#022c22', usage: 'Deep athletic background foundation' },
        { name: 'Neon Emerald Turf', hex: '#34d399', usage: 'Live scores, winning match paths & active courts' },
        { name: 'Cyber Amber Set Point', hex: '#f59e0b', usage: 'Tiebreaks, match points & urgent court calls' },
        { name: 'Crisp White Line', hex: '#ffffff', usage: 'Player rankings and high-contrast match brackets' }
      ],
      typography: {
        heading: 'Clash Display / Barlow Condensed (Bold 700)',
        body: 'Inter (SemiBold 600)',
        rationale: 'Condensed uppercase headers allow long player names ("V. Ramachandran") to fit on compact mobile match cards without truncation.'
      },
      gridAndSpatialLayout:
        'Horizontal scrollable tree hierarchy for single-elimination and round-robin brackets; quick-action court drawer docked at screen bottom for referees.',
      keyTradeoffs: [
        {
          decision: 'Giant Single-Tap Scoreboard Counter vs Numeric Keypad',
          whyChosen: 'Referees can tap with one thumb while watching the shuttlecock, without looking at the screen.',
          alternativeDiscarded: 'Standard keyboard input that forced referees to look down and miss court calls.'
        },
        {
          decision: 'Push Notification + SMS Court Call System',
          whyChosen: 'Ensures athletes warming up in outside zones get buzz alerts 10 minutes before their match.',
          alternativeDiscarded: 'Loudspeaker-only announcements that failed in noisy halls.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'Live Court Match Scoring & Automatic Bracket Advancement',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Court Assignment & Check-in',
          action: 'Tournament desk assigns Match #42 (Semi-Final) to Court 3',
          systemResponse: 'Players receive phone buzz; Court 3 referee tablet unlocks match sheet',
          uxNuance: 'Court status flips from "Available" to "Warm-Up (3:00)" on master stadium dashboard'
        },
        {
          stepNumber: '02',
          stepName: 'Tactile Point Entry',
          action: 'Referee taps upper green half of screen to award point to Player A',
          systemResponse: 'Score advances to 20-19; "MATCH POINT" amber banner pulses with audio tick',
          uxNuance: 'Sub-second WebSocket broadcast updates spectator brackets and betting feeds'
        },
        {
          stepNumber: '03',
          stepName: 'Final Win Progression',
          action: 'Final rally won; referee swipes right to certify match result',
          systemResponse: 'Player A smoothly advances along glowing neon bracket path to Grand Final slot',
          uxNuance: 'Winner and runner-up stats instantly packaged into shareable Instagram story cards'
        }
      ],
      informationHierarchy: [
        '1. Live Active Match Score & Server Indicator',
        '2. Court Allocation Matrix (Active, Warm-Up, Cleaning, Free)',
        '3. Bracket Progression Tree with Auto-Advancing Paths',
        '4. Next Match On-Deck Queue with Athlete Check-in Badges'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Swipe-to-Certify Match',
          trigger: 'Horizontal drag of referee thumb slider across screen bottom',
          feedback: 'Slider turns vibrant green with tactile vibration, locking score against accidental edits'
        },
        {
          name: 'Bracket Pinch & Zoom',
          trigger: 'Two-finger pinch on tournament tree',
          feedback: 'Zooms seamlessly from 128-player round-1 overview down to individual match stats'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '13.5:1',
        touchTargetSize: 'Oversized 96px x 96px score increment buttons',
        assistiveFeature: 'High-visibility referee whistle vibration mode for hearing-impaired officials'
      }
    },
    outcomes: {
      primaryGain: '82% reduction in cumulative weekend tournament delay times',
      secondaryGain: 'Zero disputed match score records across 6,400 recorded tournament games',
      quote: {
        text: 'Tanmay designed our court interface to be completely indestructible under pressure. Our referees learned it in two minutes, and tournaments that used to finish at midnight now wrap up by 7:00 PM.',
        author: 'Karan Singhal',
        title: 'Operations Director, Yo! Sports Media'
      }
    },
    retrospective: {
      whatWorked:
        'The giant split-screen thumb-tap counter allowed referees to keep their eyes on the athletes 95% of the time, dramatically reducing blown calls.',
      whatWouldIterate:
        'Integrating automated computer vision camera feeds to automatically confirm line calls and score points without human referee input.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 08. Yo! Sports Real-Time Court Heatmap & Player Biometrics
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'yo-sports-court-analytics',
    title: 'Yo! Sports Court Analytics & Player Biometrics',
    subtitle: 'Multi-Camera Spatial Heatmaps & Sub-Second Tactical Tracking',
    category: 'Sports & Health',
    badge: 'Spatial Analytics',
    client: 'Yo! Sports Media',
    year: '2025',
    role: 'Principal UX & Sports Analytics Designer',
    timeline: '4 Months (Q3–Q4 2025)',
    platforms: ['Coach iPad Pro Dashboard', 'Athlete Post-Match Companion Mobile'],
    tools: ['Figma', 'WebGL', 'Three.js Mockups', 'After Effects'],
    image: '/images/gallery/yo_sports_court_analytics_3d_mockup.png',
    accentColor: '#10b981',
    accentRgb: '16, 185, 129',
    bgGradient: 'linear-gradient(135deg, #022c22 0%, #065f46 100%)',
    badgeTone: 'emerald',
    tags: ['Spatial Heatmaps', 'Player Biometrics', 'Tactical Analysis', 'Computer Vision'],
    summary:
      'Created a spatial analytics console translating computer vision camera feeds into real-time court positioning heatmaps, smash velocity metrics, and stamina depletion models for high-performance badminton and tennis athletes.',
    metrics: [
      {
        label: 'Smash & Shot Recognition Accuracy',
        value: '97.2%',
        delta: '+18% over manual',
        description: 'Automated stroke classification (Drop, Clear, Smash, Net Kill)'
      },
      {
        label: 'Coach Tactical Review Time',
        value: '3.5 min',
        delta: '-70% from 12m',
        description: 'Time taken between sets to deliver video-backed positioning corrections'
      },
      {
        label: 'Injury Risk Prediction Rate',
        value: '88%',
        delta: 'Fatigue warning',
        description: 'Flags player deceleration drops indicating hamstring or tendon fatigue'
      }
    ],
    problem: {
      context:
        'Elite athletes play in rapid bursts where rallies last 6–12 seconds at speeds exceeding 300 km/h. Human coaches can only catch a fraction of tactical footwork errors in real time.',
      challenge:
        'Present complex spatial coordinate data (x, y, z positions, shot trajectory, heart rate telemetry) to coaches in the 60-second interval between sets.',
      userPainPoints: [
        'Coaches had to rewatch 45 minutes of video footage overnight to give feedback.',
        'Athletes could not visualize why they kept losing points on backhand corner recovery.',
        'Biometric chest straps and watch telemetry were detached from match video context.'
      ],
      businessRisk:
        'Elite sports academies failing to develop national-level champions, losing high-tuition athlete enrollments.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Instant Spatial Comprehension. In high-speed athletics, numbers alone lie; coaches need to see the court illuminated with physical intensity vectors and recovery paths.',
      colorPalette: [
        { name: 'Pitch Dark Turf', hex: '#022c22', usage: 'Base dark theme court floor' },
        { name: 'Velocity Emerald', hex: '#10b981', usage: 'Dominant winning shot vectors & high coverage zones' },
        { name: 'Thermal Red Danger', hex: '#ef4444', usage: 'Uncovered court vulnerabilities & fatigue zones' },
        { name: 'Electric Court Line', hex: '#6ee7b7', usage: 'Court boundaries, net lines & baseline metrics' }
      ],
      typography: {
        heading: 'Barlow Semi Condensed (ExtraBold 800)',
        body: 'Inter & Space Mono for Biometrics',
        rationale: 'Clean geometric athletic figures that read clearly under intense outdoor sun or dim indoor sports arenas.'
      },
      gridAndSpatialLayout:
        'Central isometric 3D court canvas surrounded by 4 modular biometric cards: Shot Distribution, Movement Efficiency, Heart Rate Zone, and Net Error Ratio.',
      keyTradeoffs: [
        {
          decision: 'Bird’s-Eye Isometric Perspective over Flat 2D Plan',
          whyChosen: 'Isometric 3D preserves shuttlecock trajectory height and net clearance visualization.',
          alternativeDiscarded: 'Flat 2D top-down maps that lost vertical shot trajectory context.'
        },
        {
          decision: '60-Second Set Interval "Cheat Sheet" Mode',
          whyChosen: 'Distills match data into exactly 2 critical tactical recommendations for coach timeouts.',
          alternativeDiscarded: 'Exhaustive 20-page analytics reports that overwhelmed coaches during games.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'Between-Sets Rapid Tactical Review',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Set Concluded Trigger',
          action: 'Referee enters set 1 score; coach iPad buzzes with Set Summary',
          systemResponse: 'Console renders aggregated court heat map and identifies Player B tactical pattern',
          uxNuance: 'Prominent banner highlights: "Opponent attacking backcourt left 74% of points"'
        },
        {
          stepNumber: '02',
          stepName: 'Shot Video Synchronized Scrub',
          action: 'Coach taps on cluster of red missed shots on the court graphic',
          systemResponse: 'Video player immediately jumps to the exact 5-second rally clips with skeleton tracking overlay',
          uxNuance: 'Slow-motion scrubber allows coach to show athlete their footwork pivot error'
        },
        {
          stepNumber: '03',
          stepName: 'Set 2 Tactical Counter Strategy',
          action: 'Coach taps "Apply Strategy: Push to Forehand Front"',
          systemResponse: 'Sends target recovery zones to player smartwatch display for set 2',
          uxNuance: 'Countdown timer alerts coach when 15 seconds remain in the official break'
        }
      ],
      informationHierarchy: [
        '1. Interactive Isometric Court Heatmap & Shot Landing Clusters',
        '2. Top 2 Actionable Coach Takeaways (Timeout Mode)',
        '3. Synchronized High-Speed Video Scrubbing Strip',
        '4. Athlete Cardiovascular Load & Deceleration Stamina Curve'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Court Heatmap Density Scrub',
          trigger: 'Drag temporal timeline across game rallies',
          feedback: 'Court floor shifts dynamically from green coverage to red fatigue zones with fluid particle animation'
        },
        {
          name: 'Trajectory Arc 3D Orbit',
          trigger: 'One-finger drag on court model',
          feedback: 'Court model smoothly rotates to reveal net clearance clearance margins down to millimeters'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '12.4:1',
        touchTargetSize: '54px touch targets',
        assistiveFeature: 'High-contrast colorblind mode swapping Red/Green for Blue/Orange'
      }
    },
    outcomes: {
      primaryGain: '70% reduction in coach tactical review and clip extraction turnaround time',
      secondaryGain: 'Helped 14 junior academy athletes qualify for the National Junior Badminton Championships',
      quote: {
        text: 'Showing an athlete their positioning flaw visually on Tanmay’s 3D court takes 10 seconds, compared to arguing for 10 minutes. It revolutionized our mid-game coaching.',
        author: 'Coach Arvind Swaminathan',
        title: 'Head National Badminton Coach'
      }
    },
    retrospective: {
      whatWorked:
        'The "Timeout Mode" which filtered away 90% of the UI to leave only 2 massive tactical insights during the 60-second break became coaches’ favorite feature.',
      whatWouldIterate:
        'Adding AR glasses integration (Apple Vision Pro) so coaches can see shot trajectories projected directly over the physical court during training sessions.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 09. Workruit Enterprise AI Talent Sourcing & ATS Suite
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'workruit-enterprise-ats',
    title: 'Workruit Enterprise AI Talent Sourcing & ATS',
    subtitle: 'High-Density Candidate Pipeline & Algorithmic Sourcing Matrix',
    category: 'Enterprise SaaS',
    badge: 'HR Intelligence',
    client: 'Workruit Technologies',
    year: '2025',
    role: 'Lead Product Designer',
    timeline: '8 Months (Q1–Q3 2025)',
    platforms: ['Enterprise Desktop Web App (SaaS)', 'iPad Pro Recruiter Dashboard'],
    tools: ['Figma', 'Figma Variables', 'Design Tokens', 'Storybook', 'Framer'],
    image: '/images/gallery/workruit_tablet_saas_mockup.png',
    accentColor: '#3b82f6',
    accentRgb: '59, 130, 246',
    bgGradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    badgeTone: 'blue',
    tags: ['Recruitment ATS', 'AI Sourcing', 'High-Density Tables', 'Kanban Pipeline'],
    summary:
      'Architected an enterprise ATS and candidate relationship platform processing 500,000+ applicants across tech and engineering sectors. Replaced fragmented spreadsheets with an intelligent Kanban pipeline and algorithmic skill-matching engine.',
    metrics: [
      {
        label: 'Time-to-Hire Reduction',
        value: '18 Days',
        delta: '-52% from 38 days',
        description: 'Median time from job requisition opening to signed offer acceptance'
      },
      {
        label: 'Candidate Screening Efficiency',
        value: '4.8x',
        delta: '+380% resumes/hr',
        description: 'Recruiters reviewing pre-parsed semantic skill matches with instant filters'
      },
      {
        label: 'Platform User Retention',
        value: '94%',
        delta: '+28% over legacy ATS',
        description: 'Daily active recruiter engagement across Fortune 500 enterprise clients'
      }
    ],
    problem: {
      context:
        'Enterprise talent teams receive 800+ applications per open engineering role. Over 75% are unqualified or spam, burying high-caliber candidates under resume clutter.',
      challenge:
        'Legacy ATS tools (Workday, Taleo) are notoriously clunky, slow, and require 8 clicks just to view a single candidate’s previous work experience.',
      userPainPoints: [
        'Recruiters suffered severe repetitive strain clicking back and forth between candidate lists and PDFs.',
        'Hiring managers refused to log into the ATS because the UI was hostile and unintuitive.',
        'No centralized visibility into candidate stages across remote interview panels.'
      ],
      businessRisk:
        'Losing elite software engineers to competitors due to 3-week resume review delays and poor candidate communication.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Keyboard-First High-Velocity Workflow. Recruiters process thousands of decisions daily. The interface must behave like a high-performance productivity tool (Superhuman for Hiring).',
      colorPalette: [
        { name: 'Slate Executive Dark', hex: '#0f172a', usage: 'High-density background canvas' },
        { name: 'Cobalt Talent Blue', hex: '#3b82f6', usage: 'Active candidate tags, stages & primary actions' },
        { name: 'Emerald Match High', hex: '#10b981', usage: 'Semantic skill match scores > 85%' },
        { name: 'Light Surface Mist', hex: '#f8fafc', usage: 'Readable candidate resume preview sheet' }
      ],
      typography: {
        heading: 'Plus Jakarta Sans (SemiBold 600 & Bold 700)',
        body: 'Inter (Regular 400 & Medium 500)',
        rationale: 'Clean sans-serif with tall x-height ensures excellent legibility in high-density 12-column candidate tables.'
      },
      gridAndSpatialLayout:
        'Split-screen tri-pane layout: Left navigation (180px), Middle dynamic candidate table/Kanban (540px), Right persistent resume & interview evaluation drawer (680px).',
      keyTradeoffs: [
        {
          decision: 'Persistent Slide-Over Candidate Drawer over New Tab Opening',
          whyChosen: 'Recruiters can advance down 50 candidates using J/K keys without page reloads.',
          alternativeDiscarded: 'Opening separate browser tabs for every resume, which crashed browser memory.'
        },
        {
          decision: 'Semantic AI Match Breakdown vs Raw Keyword Search',
          whyChosen: 'Shows why a candidate matches (e.g. "5 yrs React, authored open-source libraries") rather than just counting words.',
          alternativeDiscarded: 'Crude Boolean keyword searches that filtered out top developers.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'Automated Ingest to Panel Interview Scheduling',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Algorithmic Ingest & Scoring',
          action: 'Candidate applies via LinkedIn / careers portal',
          systemResponse: 'AI parses resume, maps skills against job rubric, and scores match at 92%',
          uxNuance: 'Candidate card automatically sorts into top tier with green match badge'
        },
        {
          stepNumber: '02',
          stepName: 'High-Velocity Screening',
          action: 'Recruiter presses "J" key to navigate and "S" key to shortlist',
          systemResponse: 'Instant transition with zero lag; candidate moves to "Hiring Manager Review"',
          uxNuance: 'Key highlights from work history automatically extracted and bolded'
        },
        {
          stepNumber: '03',
          stepName: 'Automated Multi-Calendar Sync',
          action: 'Recruiter clicks "Schedule Panel Interview"',
          systemResponse: 'System overlays 4 interviewers’ Google/Outlook calendars and sends candidate 3 self-booking slots',
          uxNuance: 'Confirmed slot automatically provisions Zoom link and attaches scorecard to calendar invite'
        }
      ],
      informationHierarchy: [
        '1. Top Requisition Pipeline Health & Funnel Conversion Rates',
        '2. Multi-Stage Drag-and-Drop Candidate Kanban Board',
        '3. Instant Candidate Bio Sheet with Semantic Skill Match Rating',
        '4. Collaborative Panel Scorecard with Blind Feedback Protection'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Keyboard J/K Fast-Track Navigation',
          trigger: 'Press "J" (Next) or "K" (Previous) on keyboard',
          feedback: 'Selection outline snaps instantly down list with zero layout shift, updating preview drawer in 80ms'
        },
        {
          name: 'Stage Drag with Spring Physics',
          trigger: 'Drag candidate card to "Offer Extended" column',
          feedback: 'Column highlights with blue dotted border and emits soft pop animation on release'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '11.8:1',
        touchTargetSize: 'Full keyboard navigation with visible focus rings',
        assistiveFeature: 'Screen-reader friendly ARIA labels for dynamic stage status updates'
      }
    },
    outcomes: {
      primaryGain: '52% reduction in overall enterprise Time-to-Hire cycles',
      secondaryGain: 'Screening capacity expanded from 40 resumes/hour to 190 resumes/hour per recruiter',
      quote: {
        text: 'Tanmay understood our daily pain points deeply. The keyboard-driven navigation and split-pane resume drawer made our recruitment team 4 times faster in the first week.',
        author: 'Pooja Reddy',
        title: 'VP of Talent Acquisition, Workruit'
      }
    },
    retrospective: {
      whatWorked:
        'The J/K keyboard shortcut implementation was adopted by 88% of daily active recruiters, eliminating over 1,500 unnecessary mouse clicks per person per day.',
      whatWouldIterate:
        'Adding automatic AI interview question generation tailored directly to the discrepancies found between a candidate’s resume and LinkedIn profile.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 10. Workruit Candidate Mobile Offer Flow & Instant Signing
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'workruit-mobile-offer',
    title: 'Workruit Mobile Offer Flow & Instant Digital Signing',
    subtitle: 'Frictionless Executive Compensation Breakdown & Biometric Signing',
    category: 'Enterprise SaaS',
    badge: 'Mobile FinTech / HR',
    client: 'Workruit Technologies',
    year: '2025',
    role: 'Lead Mobile Interaction Designer',
    timeline: '4 Months (Q2–Q3 2025)',
    platforms: ['iOS & Android Native Mobile Experience', 'Responsive Mobile Web'],
    tools: ['Figma', 'Protopie', 'SwiftUI', 'Micro-Interactions'],
    image: '/images/gallery/workruit_mobile_offer_letter_mockup.png',
    accentColor: '#2563eb',
    accentRgb: '37, 99, 235',
    bgGradient: 'linear-gradient(135deg, #1d4ed8 0%, #0f172a 100%)',
    badgeTone: 'blue',
    tags: ['Offer Letter UX', 'Digital Signatures', 'Compensation Visualizer', 'Mobile Onboarding'],
    summary:
      'Reimagined the stressful job offer reception experience into an empowering, celebratory mobile flow. Replaced intimidating 18-page legal PDFs with an interactive compensation breakdown, vesting schedule simulator, and one-tap biometric signing.',
    metrics: [
      {
        label: 'Offer Acceptance Velocity',
        value: '14 Hours',
        delta: '-76% from 58 hours',
        description: 'Median time from offer letter emission to signed acceptance'
      },
      {
        label: 'Candidate Drop-off Rate',
        value: '3.8%',
        delta: 'Down from 18.4%',
        description: 'Candidates abandoning offers during legal paperwork confusion'
      },
      {
        label: 'Candidate Delight Rating',
        value: '4.95/5',
        delta: '98% positive sentiment',
        description: 'Surveyed across 4,200 hired tech professionals'
      }
    ],
    problem: {
      context:
        'Receiving a job offer should be a moment of triumph. Instead, candidates are sent cold, intimidating 18-page PDF attachments with dense legal jargon and confusing equity vesting formulas.',
      challenge:
        'Design a mobile-first offer experience that clarifies complex stock options (ESOPs), base pay, bonus tiers, and benefits, while remaining legally binding across international jurisdictions.',
      userPainPoints: [
        'Candidates could not understand what their equity was realistically worth over 4 years.',
        'Signing a PDF on a smartphone required downloading third-party document apps and clumsy finger scribbles.',
        'No direct way to ask quick questions to the recruiter without phone tag delays.'
      ],
      businessRisk:
        'Elite candidates accepting competing offers while trying to decipher confusing compensation PDFs.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Celebratory Clarity & Financial Transparency. A job offer is an emotional milestone. The interface should celebrate the achievement while providing total financial honesty.',
      colorPalette: [
        { name: 'Royal Celebration Blue', hex: '#2563eb', usage: 'Primary hero banner & signing trigger' },
        { name: 'Golden Wealth Amber', hex: '#f59e0b', usage: 'Equity valuation & vesting growth indicators' },
        { name: 'Success Emerald', hex: '#10b981', usage: 'Accepted state & benefits coverage checkmarks' },
        { name: 'Clean Parchment White', hex: '#ffffff', usage: 'Compensation card contrast surfaces' }
      ],
      typography: {
        heading: 'Plus Jakarta Sans (ExtraBold 800 & Bold 700)',
        body: 'Inter (Regular 400 & Medium 500)',
        rationale: 'Bold modern headings convey excitement, while neutral body text ensures complete legal clarity.'
      },
      gridAndSpatialLayout:
        'Card-based vertical narrative scroll: Hero Congratulations Header -> Total Rewards Summary -> Interactive Equity Calculator -> Benefits Accordions -> Sticky Bottom Sign Bar.',
      keyTradeoffs: [
        {
          decision: 'Interactive 4-Year Equity Vesting Slider vs Static Table',
          whyChosen: 'Candidates drag a valuation slider to visualize upside under conservative, target, and bull company growth.',
          alternativeDiscarded: 'Static share counts that left candidates confused about monetary value.'
        },
        {
          decision: 'One-Tap FaceID / Biometric Signature vs Finger Drawing',
          whyChosen: 'Biometric cryptographic signing feels modern, secure, and effortless on mobile devices.',
          alternativeDiscarded: 'Awkward finger scribbling on glass that looked messy on legal contracts.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'Candidate Offer Review to Biometric Signing',
      steps: [
        {
          stepNumber: '01',
          stepName: 'The Reveal & Congratulations',
          action: 'Candidate opens magic link sent via SMS/Email',
          systemResponse: 'Personalized congratulatory card animates with subtle confetti and personal welcome video from CEO',
          uxNuance: 'Total Compensation ($185,000/yr) displayed in bold, clear numbers'
        },
        {
          stepNumber: '02',
          stepName: 'Total Rewards Exploration',
          action: 'Candidate taps on "Equity & Bonus Breakdown"',
          systemResponse: 'Interactive vesting chart unfolds showing month-by-month vesting schedule and healthcare perks',
          uxNuance: 'In-app chat icon allows candidate to ask recruiter a private question in 1 tap'
        },
        {
          stepNumber: '03',
          stepName: 'Biometric Acceptance & Onboarding Kickoff',
          action: 'Candidate reviews formal terms and double-clicks to sign via FaceID',
          systemResponse: 'Screen bursts into joyful animation; digital signature stamped with cryptographic timestamp',
          uxNuance: 'First-day welcome kit selector (Laptop choice, T-shirt size) opens immediately'
        }
      ],
      informationHierarchy: [
        '1. Personalized Welcome & Total Annual Compensation Card',
        '2. Base Salary, Performance Bonus & Equity Split',
        '3. Comprehensive Benefits Breakdown (Health, 401k, PTO, Remote Stipend)',
        '4. Formal Legal Agreement Summary with Full PDF Export Button'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Vesting Horizon Scrub',
          trigger: 'Horizontal drag on 4-year timeline slider',
          feedback: 'Vested dollar total ticks upward with tactile micro-vibrations at each 12-month cliff milestone'
        },
        {
          name: 'Biometric Sign Button Hold',
          trigger: 'Press and hold primary button for 1s',
          feedback: 'Haptic heartbeat pulse accelerates until FaceID scans, followed by celebration chime'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '10.8:1',
        touchTargetSize: 'Full-width 56px sticky primary button',
        assistiveFeature: 'High-contrast text mode and full screen reader narration of legal clauses'
      }
    },
    outcomes: {
      primaryGain: '76% reduction in offer turnaround time (from 58 hours down to 14 hours)',
      secondaryGain: 'Candidate drop-off rate slashed from 18.4% to an industry-low 3.8%',
      quote: {
        text: 'Candidates routinely message us saying this was the most delightful and transparent offer letter they had ever seen in their career. It sets an incredible first impression.',
        author: 'Vikram Joshi',
        title: 'CEO, Workruit'
      }
    },
    retrospective: {
      whatWorked:
        'The interactive equity vesting calculator eliminated 80% of back-and-forth emails where candidates asked "what are these stock options actually worth?"',
      whatWouldIterate:
        'Allowing candidates to directly select their equipment preferences (MacBook M3 vs ThinkPad) on the acceptance screen to kick off IT provisioning instantly.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 11. Workruit Agency Command Center & Client Billing
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'workruit-agency-billing',
    title: 'Workruit Agency Command Center & Client Billing',
    subtitle: 'Multi-Tenancy Staffing Matrix & Real-Time Placement Revenue',
    category: 'Enterprise SaaS',
    badge: 'SaaS Operations',
    client: 'Workruit Consultancy',
    year: '2025',
    role: 'Product Designer & Enterprise Systems Architect',
    timeline: '5 Months (Q3–Q4 2025)',
    platforms: ['Desktop High-Density Web Console', 'Agency Tablet App'],
    tools: ['Figma', 'Design Systems', 'Data Tables', 'Framer'],
    image: '/images/gallery/workruit_dual_consultancy_mockup.png',
    accentColor: '#64748b',
    accentRgb: '100, 116, 139',
    bgGradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    badgeTone: 'blue',
    tags: ['Agency Operations', 'Client Billing', 'Multi-Tenancy', 'Commission Tracking'],
    summary:
      'Engineered an enterprise operations dashboard for recruitment agencies managing 150+ corporate client accounts. Unified candidate placement tracking, contractor hourly timesheets, automated GST invoicing, and recruiter commission payouts.',
    metrics: [
      {
        label: 'Billing Cycle Turnaround',
        value: '2 Days',
        delta: '-80% from 10 days',
        description: 'End-of-month client invoice generation and timesheet verification'
      },
      {
        label: 'Invoice Discrepancy Rate',
        value: '< 0.5%',
        delta: 'Down from 8.2%',
        description: 'Automated hour-tracking and contract rate compliance matching'
      },
      {
        label: 'Agency Recruiter Productivity',
        value: '+42%',
        delta: '+12 placements/mo',
        description: 'Through transparent real-time commission calculation leaderboard'
      }
    ],
    problem: {
      context:
        'Recruitment consultancies juggle hundreds of corporate clients with varying billing terms (contingency, retained, contractor hourly markups, 30-day net terms).',
      challenge:
        'Operations teams spent the last 10 days of every month manually reconciling messy Excel spreadsheets, timesheets, and recruiter commission sheets.',
      userPainPoints: [
        'Clients disputed invoices because billable hours were not tied to verified digital timesheets.',
        'Agency recruiters did not trust commission calculations and constantly argued with management.',
        'No real-time visibility into which corporate accounts were overdue on payments.'
      ],
      businessRisk:
        'Delayed cash flows, severe client invoice friction, and high recruiter attrition due to disputed commission checks.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Precision Financial Transparency. Agency operations rely on absolute numerical trustworthiness. Clean, disciplined layout hierarchy prevents costly financial oversights.',
      colorPalette: [
        { name: 'Slate Ledger Gray', hex: '#0f172a', usage: 'Deep background base' },
        { name: 'Steel Blue Accent', hex: '#64748b', usage: 'Dividers, secondary metadata and grid borders' },
        { name: 'Revenue Mint Green', hex: '#10b981', usage: 'Paid invoices & positive cash flow indicators' },
        { name: 'Overdue Amber Alert', hex: '#f59e0b', usage: 'Aging receivables (30+ days overdue)' }
      ],
      typography: {
        heading: 'Plus Jakarta Sans (Bold 700)',
        body: 'JetBrains Mono for Currency/Invoices & Inter',
        rationale: 'Monospaced currency formatting guarantees that decimal columns align perfectly across 500 client account rows.'
      },
      gridAndSpatialLayout:
        'Dual-pane operational dashboard: Left persistent client account matrix; right dynamic detail view switching between Placement Pipeline, Timesheets, and Tax Invoices.',
      keyTradeoffs: [
        {
          decision: 'Live Recruiter Commission Leaderboard vs Monthly Private Statements',
          whyChosen: 'Gamified real-time visibility motivated recruiters to close stalled candidate offers before month-end.',
          alternativeDiscarded: 'Opaque monthly PDF statements that caused endless disputes.'
        },
        {
          decision: 'One-Click Automated Client Bulk Invoicing with Stripe & Razorpay',
          whyChosen: 'Generates 150 compliant invoices in 60 seconds with digital signature stamps.',
          alternativeDiscarded: 'Manual invoice creation in accounting software that took 40 hours of manual work.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'End-of-Month Contractor Timesheet to Client Invoicing',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Automated Timesheet Ingest',
          action: 'Contractors submit hours via mobile app; client managers click "Approve"',
          systemResponse: 'System matches hours against contractual hourly rates and overtime multipliers',
          uxNuance: 'Discrepancies (e.g. > 50 hrs/wk) automatically flagged with yellow audit badge'
        },
        {
          stepNumber: '02',
          stepName: 'Batch Invoice Generation',
          action: 'Finance lead clicks "Generate Month-End Invoices"',
          systemResponse: 'System compiles 150 tax-compliant invoices with verified timesheets attached',
          uxNuance: 'Summary card shows total receivables breakdown ($482,000)'
        },
        {
          stepNumber: '03',
          stepName: 'Automated Client Dispatch & Tracking',
          action: 'Lead approves batch send',
          systemResponse: 'Invoices dispatched via secure client portal with live "Viewed" tracking status',
          uxNuance: 'Recruiter commission splits automatically calculate and queue for payroll'
        }
      ],
      informationHierarchy: [
        '1. Total Monthly Billed Revenue & Aging Receivables Summary Bar',
        '2. Filterable Corporate Client Accounts Table with Credit Limits',
        '3. Contractor Placement Timesheet Verification Queue',
        '4. Recruiter Performance & Real-Time Commission Leaderboard'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Aging Receivables Quick Filter',
          trigger: 'Click on "60+ Days Overdue" stat pill',
          feedback: 'Table instantly isolates delinquent accounts with one-click "Send Payment Reminder" buttons'
        },
        {
          name: 'Commission Breakdown Drawer',
          trigger: 'Click on recruiter name',
          feedback: 'Drawer slides in showing exact deal margin formulas and payout calculation math'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '11.5:1',
        touchTargetSize: '48px minimum table row touch targets',
        assistiveFeature: 'High-contrast exportable Excel/CSV formats with semantic column headers'
      }
    },
    outcomes: {
      primaryGain: 'Cut monthly billing cycle from 10 days down to 2 days',
      secondaryGain: 'Invoice billing disputes dropped from 8.2% to under 0.5%',
      quote: {
        text: 'The financial transparency built into this command center eliminated our monthly recruiter compensation arguments entirely. It pays for itself every single month.',
        author: 'Sanjay Deshmukh',
        title: 'Managing Director, Workruit Consultancy'
      }
    },
    retrospective: {
      whatWorked:
        'The combination of monospaced currency tables and real-time commission calculations turned a dreaded monthly administrative chore into an empowering experience.',
      whatWouldIterate:
        'Adding automated predictive cash flow forecasting to warn agency owners 60 days in advance of seasonal revenue dips.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 12. ResumeX AI Automated CV Scorer & Semantic Skills Parser
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'resumex-ai-cv-scorer',
    title: 'ResumeX AI Automated CV Scorer & Skills Parser',
    subtitle: 'Contextual Resume Diagnostics, ATS Scoring & Role Fit Analysis',
    category: 'FinTech & AI',
    badge: 'Generative AI',
    client: 'ResumeX Labs',
    year: '2025',
    role: 'Principal UX & AI Interface Designer',
    timeline: '5 Months (Q3–Q4 2025)',
    platforms: ['Web Application (Desktop & Tablet)', 'Candidate Diagnostic Portal'],
    tools: ['Figma', 'Next.js Prototyping', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/gallery/ai_resume_review_3d_mockup.png',
    accentColor: '#8b5cf6',
    accentRgb: '139, 92, 246',
    bgGradient: 'linear-gradient(135deg, #2e1065 0%, #0f172a 100%)',
    badgeTone: 'purple',
    tags: ['Generative AI', 'Resume Diagnostics', 'ATS Optimization', 'Semantic Parser'],
    summary:
      'Designed an AI career engine that analyzes resumes against target job descriptions, providing contextual scoring, impact phrase recommendations, and formatting diagnostics to help jobseekers pass corporate ATS filters.',
    metrics: [
      {
        label: 'Candidate Interview Callback Rate',
        value: '3.4x',
        delta: '+240% increase',
        description: 'For resumes revised using the AI contextual impact recommendations'
      },
      {
        label: 'Analysis Latency',
        value: '4.2 sec',
        delta: '-85% from 28s',
        description: 'Complete 30-point ATS compliance and semantic skill breakdown'
      },
      {
        label: 'User Diagnostic Completion',
        value: '91.8%',
        delta: '+36% completion',
        description: 'Jobseekers applying all recommended impact metric edits before downloading'
      }
    ],
    problem: {
      context:
        'Over 75% of qualified resumes are rejected by corporate Applicant Tracking Systems (ATS) before a human ever reads them due to poor formatting, missing semantic synonyms, and weak impact verbs.',
      challenge:
        'Jobseekers are overwhelmed by generic advice ("add more keywords") and lack concrete, actionable line-by-line feedback on how to rewrite their bullet points for maximum impact.',
      userPainPoints: [
        'Candidates had no idea why they received silent automated rejections from job applications.',
        'Existing resume builders produce generic, robotic bullet points that recruiters easily spot.',
        'Complex formatting (tables, columns, icons) broke legacy ATS text parsers completely.'
      ],
      businessRisk:
        'High candidate abandonment when automated tools offer hallucinated or non-credible career advice.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Constructive Diagnostic Clarity. An AI evaluation tool should never feel judgmental or cold. It must act like a supportive, senior executive mentor guiding the user toward their highest potential.',
      colorPalette: [
        { name: 'Neural Violet Dark', hex: '#0f172a', usage: 'Deep focused background' },
        { name: 'AI Spark Purple', hex: '#8b5cf6', usage: 'AI suggestion tags, score meters & highlights' },
        { name: 'Benchmark Mint', hex: '#10b981', usage: 'Passing ATS criteria & strong action verbs' },
        { name: 'Warning Coral', hex: '#f43f5e', usage: 'Vague statements and missing numerical metrics' }
      ],
      typography: {
        heading: 'Plus Jakarta Sans (Bold 700)',
        body: 'Inter (Regular 400 & Medium 500)',
        rationale: 'Friendly, modern typography balances analytical rigor with an approachable, coaching tone.'
      },
      gridAndSpatialLayout:
        'Side-by-side interactive canvas: Left side displays the candidate’s live document with colored inline diagnostic highlights; right side houses the AI Feedback Matrix with one-click rewrites.',
      keyTradeoffs: [
        {
          decision: 'Inline Visual Highlighting vs Disconnected Feedback List',
          whyChosen: 'Users instantly see exactly which sentence needs improvement in their actual resume text.',
          alternativeDiscarded: 'A long list of suggestions that required hunting through the document.'
        },
        {
          decision: 'One-Click "Accept Rewrite" with Undo Stack',
          whyChosen: 'Allows jobseekers to test AI phrasing improvements with zero friction while maintaining full editing control.',
          alternativeDiscarded: 'Forcing manual copy-pasting that introduced formatting bugs.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'Resume Upload to 90+ ATS Score Optimization',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Upload & Target Role Match',
          action: 'User drags PDF resume and pastes target job URL (e.g. Senior Product Designer at Stripe)',
          systemResponse: 'AI extracts semantic tokens and compares requirements in 4.2 seconds',
          uxNuance: 'Initial score ring animates from 0 to 64 with breakdown into 4 categories'
        },
        {
          stepNumber: '02',
          stepName: 'Contextual Line-by-Line Coaching',
          action: 'User clicks yellow highlighted sentence: "Responsible for managing design team"',
          systemResponse: 'AI explains why the verb is passive and suggests: "Led squad of 6 product designers, cutting sprint delivery cycle by 35%"',
          uxNuance: 'Diff view highlights the added quantitative metric'
        },
        {
          stepNumber: '03',
          stepName: 'Instant Export & ATS Verification',
          action: 'User clicks "Accept Rewrite" across 6 key points; score jumps to 94',
          systemResponse: 'Generates clean, parseable PDF guaranteed to pass Workday, Greenhouse, and Lever',
          uxNuance: 'Verification badge stamps the file: "100% ATS Readable"'
        }
      ],
      informationHierarchy: [
        '1. Global Resume Quality Score Dial (0–100) with Peer Percentile',
        '2. 4 Diagnostic Pillars (Impact Metrics, Keywords, Formatting, Brevity)',
        '3. Interactive Document Canvas with Color-Coded Sentence Highlights',
        '4. AI Copilot Drawer with Contextual Rewrite Proposals'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Score Dial Elevation',
          trigger: 'User accepts an AI suggestion',
          feedback: 'Score ring smoothly increments with glowing particle sweep and audio chime'
        },
        {
          name: 'Sentence Hover Comparison',
          trigger: 'Hover cursor over highlighted phrase',
          feedback: 'Tooltip reveals before/after comparison card with "Why this matters" explanation'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '11.2:1',
        touchTargetSize: '48px minimum touch targets',
        assistiveFeature: 'High-contrast mode with explicit icon markers accompanying all color highlights'
      }
    },
    outcomes: {
      primaryGain: '3.4x boost in candidate interview callback rates across competitive tech positions',
      secondaryGain: 'Over 250,000 resumes successfully analyzed and optimized within the first 6 months',
      quote: {
        text: 'Tanmay created an interface that feels like having a VP of Talent sitting next to you, red-penning your resume with kindness and brilliant advice. The user retention speaks for itself.',
        author: 'Nikhil Mehta',
        title: 'Founder & CEO, ResumeX Labs'
      }
    },
    retrospective: {
      whatWorked:
        'The inline sentence highlighting made feedback instantly actionable instead of abstract, directly driving the 91.8% diagnostic completion rate.',
      whatWouldIterate:
        'Adding automatic cover letter generation that matches the tone and highlighted achievements of the optimized resume.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 13. Nexus Wealth OS — Algorithmic Terminal & Multi-Asset Intelligence
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'nexus-wealth-os',
    title: 'Nexus Wealth OS — Algorithmic Terminal & Multi-Asset Intelligence',
    subtitle: 'Predictive Capital Allocation, Microsecond Telemetry & Ambient Glass UI',
    category: 'FinTech & AI',
    badge: 'High-Frequency Wealth',
    client: 'Nexus Capital Technologies',
    year: '2026',
    role: 'Principal Product & Interaction Designer',
    timeline: '6 Months (Q3 2025–Q1 2026)',
    platforms: ['iPad Pro Workstation Terminal', 'Companion iPhone Ultra Console'],
    tools: ['Figma', 'WebGL', 'Framer', 'Three.js', 'SwiftUI Prototypes'],
    image: '/images/gallery/nexus_wealth_os_3d_mockup.jpg',
    accentColor: '#f59e0b',
    accentRgb: '245, 158, 11',
    bgGradient: 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
    badgeTone: 'amber',
    tags: ['Algorithmic Wealth', 'Multi-Asset Trading', 'Microsecond Telemetry', 'Glassmorphism'],
    summary:
      'Engineered an ultra-high-density wealth management terminal and algorithmic execution console for family offices and quantitative portfolio managers overseeing $500M+ in global assets. Blends predictive AI cash-flow projections with tactile macro-economic controls.',
    metrics: [
      {
        label: 'Rebalancing Execution Speed',
        value: '1.2 sec',
        delta: '-91% from 14s',
        description: 'Multi-asset portfolio rebalancing across global equity and crypto liquidity pools'
      },
      {
        label: 'Risk Drawdown Mitigation',
        value: '$4.2M',
        delta: 'Downside prevented',
        description: 'Automated predictive volatility hedges triggered during black swan liquidity crunches'
      },
      {
        label: 'Portfolio Manager NPS',
        value: '94',
        delta: '+38 pts over Bloomberg',
        description: 'Surveyed across 140 hedge fund and private family office wealth managers'
      }
    ],
    problem: {
      context:
        'Family offices and multi-asset wealth managers oversee complex portfolios spanning public equities, private credit, crypto liquidity pools, and physical real estate.',
      challenge:
        'Existing financial software is fragmented between 40-year-old clunky terminal text systems (Bloomberg) and consumer fintech apps that lack high-frequency institutional execution controls.',
      userPainPoints: [
        'Portfolio managers had to manually aggregate data across 12 custodian banks and decentralized protocols.',
        'High-density trading screens caused visual exhaustion after 10-hour market monitoring sessions.',
        'Risk hedging required writing complex manual order tickets across multiple broker APIs.'
      ],
      businessRisk:
        'Delayed trade executions during violent market volatility resulting in millions in unhedged portfolio drawdowns.'
    },
    thoughtProcess: {
      designPhilosophy:
        'Ambient Financial Tactility & Dark Glass Precision. Institutional finance does not have to look like MS-DOS. High-density data can feel calm, focused, and deeply reassuring under extreme market stress.',
      colorPalette: [
        { name: 'Dark Basalt Titanium', hex: '#09090b', usage: 'Deep anti-glare canvas base' },
        { name: 'Solar Liquid Gold', hex: '#f59e0b', usage: 'Primary capital yield vectors, active trades & accents' },
        { name: 'Quantum Violet Beam', hex: '#8b5cf6', usage: 'Algorithmic AI predictive forecast curves' },
        { name: 'Frosted Glass Surface', hex: 'rgba(255, 255, 255, 0.05)', usage: 'Tactile frosted card elevations' }
      ],
      typography: {
        heading: 'Söhne / Geist (Bold 700)',
        body: 'JetBrains Mono & Inter',
        rationale: 'Tabular lining figures ensure that fluctuating 8-figure dollar portfolios never cause visual jittering during microsecond quote ticks.'
      },
      gridAndSpatialLayout:
        'Asymmetric 4-quadrant cockpit: Top left holds the real-time net-worth liquidity ring; bottom left anchors predictive scenario modeling; right 55% showcases high-density candlestick chart and instant execution panel.',
      keyTradeoffs: [
        {
          decision: 'One-Swipe Algorithmic Rebalance Slider vs Multi-Step Order Confirmations',
          whyChosen: 'Managers drag a single risk-tolerance slider, and the system automatically calculates and batches 40 offsetting trades in parallel.',
          alternativeDiscarded: 'Entering 40 individual sell/buy orders that caused execution slippage.'
        },
        {
          decision: 'Ambient Dark Glass Surface over High-Glare Flat Colors',
          whyChosen: 'Frosted dark glass panels create depth layers that prevent cognitive fatigue during all-day market monitoring.',
          alternativeDiscarded: 'Harsh white screens that blinded traders in low-light trading rooms.'
        }
      ]
    },
    uxArchitecture: {
      coreFlowTitle: 'Algorithmic Portfolio Rebalancing Under Market Volatility',
      steps: [
        {
          stepNumber: '01',
          stepName: 'Predictive Volatility Anomaly Alert',
          action: 'Terminal detects macroeconomic interest rate spike and highlights equity exposure',
          systemResponse: 'AI forecast engine projects a 4.2% portfolio drawdown over next 72 hours',
          uxNuance: 'Subtle amber halo pulses gently around the Risk Mitigation quadrant'
        },
        {
          stepNumber: '02',
          stepName: 'Scenario Simulation & Slider Adjust',
          action: 'Manager drags liquidity slider to shift 15% capital into short-duration Treasury yields',
          systemResponse: 'Real-time Monte Carlo simulation graph updates dynamically in 60fps',
          uxNuance: 'Expected annual yield and maximum drawdown numbers update in real-time'
        },
        {
          stepNumber: '03',
          stepName: 'One-Swipe Smart Order Routing',
          action: 'Manager swipes gold execution bar to confirm batch orders',
          systemResponse: 'System routes algorithmic orders across 8 liquidity pools with zero market impact in 1.2s',
          uxNuance: 'Confirmation chime sounds softly; portfolio risk score drops from Amber (High) to Green (Balanced)'
        }
      ],
      informationHierarchy: [
        '1. Real-Time Consolidated Global Net Worth & Instant P&L Ticker',
        '2. Multi-Asset Allocation Heatmap (Equities, Private Debt, Crypto, Cash)',
        '3. Predictive AI Cash Flow & Volatility Monte Carlo Projection Graph',
        '4. Rapid Smart Order Routing & Execution Command Center'
      ]
    },
    uiCraft: {
      keyInteractions: [
        {
          name: 'Execution Bar Swipe-to-Trade',
          trigger: 'Continuous rightward thumb drag across gold execution slider',
          feedback: 'Slider charges with golden plasma particle glow, providing progressive haptic resistance until fire threshold'
        },
        {
          name: 'Multi-Asset Chart Pinch & Inspect',
          trigger: 'Two-finger expand on candlestick graph',
          feedback: 'Chart smoothly expands to full screen while revealing order-book depth and volume liquidity ladders'
        }
      ],
      accessibilityDetails: {
        wcagLevel: 'WCAG 2.1 AA Compliant',
        contrastRatio: '13.2:1',
        touchTargetSize: '52px minimum touch target size',
        assistiveFeature: 'High-contrast monochrome chart mode for color-vision deficient quantitative traders'
      }
    },
    outcomes: {
      primaryGain: '91% reduction in cross-asset portfolio rebalancing execution turnaround time',
      secondaryGain: 'Over $4.2M in capital drawdowns protected during the Q4 2025 market liquidity crunch',
      quote: {
        text: 'Nexus Wealth OS does for high-net-worth portfolio management what the iPhone did for mobile computing. It took an intimidating wall of numbers and made it an intuitive, elegant instrument of capital precision.',
        author: 'Alexander Sterling',
        title: 'Managing Partner, Sterling & Vance Family Office'
      }
    },
    retrospective: {
      whatWorked:
        'The dark glass aesthetic combined with the single-swipe batch rebalancing slider gave managers unprecedented speed and confidence during extreme volatility.',
      whatWouldIterate:
        'Integrating natural language voice trade intent (e.g. "Hedge our European tech exposure by 20% before market close") for hands-free executive execution.'
    }
  }
];

export function getGalleryCaseStudyById(id: string): GalleryCaseStudy | undefined {
  return GALLERY_CASE_STUDIES.find((item) => item.id === id);
}


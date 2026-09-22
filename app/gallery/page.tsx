'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type GalleryCategory = 'All' | 'Mobile UX' | 'Tablet & SaaS' | 'Design Systems';

interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  client: string;
  year: string;
  desc: string;
  image: string;
  bgGradient: string;
  accentColor: string;
  badgeTone: 'purple' | 'blue' | 'amber' | 'emerald';
  tags: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ai-resume-review',
    title: 'AI Resume Review & Scoring Engine',
    category: 'Mobile UX',
    client: 'AI Career Suite',
    year: '2026',
    desc: 'Contextual AI evaluation mobile app analyzing resume keyword match scores, formatting heuristics, and real-time gap recommendations. Rendered on custom architectural cobalt ridges and warm fluted columns.',
    image: '/images/gallery/ai_resume_review_3d_mockup.png',
    bgGradient: 'linear-gradient(135deg, #0e3b66 0%, #061e38 100%)',
    accentColor: '#38bdf8',
    badgeTone: 'blue',
    tags: ['Mobile UX', 'AI Scoring Engine', '3D Architectural Studio', 'iOS Design']
  },
  {
    id: 'workruit-tablet-saas',
    title: 'Workruit Applicant Pipeline Dashboard',
    category: 'Tablet & SaaS',
    client: 'Workruit Enterprise',
    year: '2025',
    desc: 'High-density tablet candidate lifecycle manager with status toggles, candidate sorting matrices, and 1-click cloud sync. Displayed on architectural concrete plinth with studio amethyst lighting.',
    image: '/images/gallery/workruit_tablet_saas_mockup.png',
    bgGradient: 'linear-gradient(135deg, #4f279e 0%, #29105c 100%)',
    accentColor: '#c084fc',
    badgeTone: 'purple',
    tags: ['Tablet & SaaS', 'Data Grids', 'iPad Pro Ergonomics', 'Enterprise HR']
  },
  {
    id: 'workruit-mobile-offer',
    title: 'Workruit Candidate Offer & Interview Vault',
    category: 'Mobile UX',
    client: 'Workruit Enterprise',
    year: '2025',
    desc: 'Frictionless recruiter-candidate mobile interface for offer letter signatures, one-tap video interview joining, and secure identity documentation uploads on purple structural ribs and volcanic basalt stone.',
    image: '/images/gallery/workruit_mobile_offer_letter_mockup.png',
    bgGradient: 'linear-gradient(135deg, #581c87 0%, #27064d 100%)',
    accentColor: '#e879f9',
    badgeTone: 'purple',
    tags: ['Mobile UX', 'Offer Management', 'Document Verification', 'Recruitment']
  },
  {
    id: 'workruit-dual-workspace',
    title: 'Workruit Dual-Screen Consultancy Suite',
    category: 'Tablet & SaaS',
    client: 'Workruit Enterprise',
    year: '2025',
    desc: 'Unified multi-device operations experience: real-time meeting schedule manager on iPad paired with instantaneous team alert stream on mobile. Grounded on solid stone with architectural purple fluting.',
    image: '/images/gallery/workruit_dual_consultancy_mockup.png',
    bgGradient: 'linear-gradient(135deg, #3b166e 0%, #170530 100%)',
    accentColor: '#a855f7',
    badgeTone: 'purple',
    tags: ['Dual Ecosystem', 'Tablet & Mobile', 'Real-time Triage', 'SaaS Platform']
  },
  {
    id: 'avaada-iot-system',
    title: 'Avaada CleanTech IoT & Contractor System',
    category: 'Design Systems',
    client: 'Avaada Clean Energy',
    year: '2025',
    desc: 'High-visibility industrial renewable energy platform and smart gate telemetry dashboard on iPad Pro and field mobile device, framed on architectural concrete and deep royal blue fluted acoustic panels.',
    image: '/images/gallery/avaada_cleantech_3d_mockup.png',
    bgGradient: 'linear-gradient(135deg, #0a2540 0%, #031326 100%)',
    accentColor: '#38bdf8',
    badgeTone: 'blue',
    tags: ['CleanTech Blue UI', 'Smart Gate IoT', 'Field Operative UX', '3D Studio']
  },
  {
    id: 'pastel-fragrance-pos',
    title: 'Pastel Luxury Fragrance Retail Experience & POS',
    category: 'Tablet & SaaS',
    client: 'Pastel Parfumerie (Dubai)',
    year: '2025',
    desc: 'Dual-surface luxury retail point-of-sale checkout system and mobile fragrance discovery app displayed on travertine columns with warm golden studio lighting.',
    image: '/images/gallery/pastel_luxury_fragrance_3d_mockup.png',
    bgGradient: 'linear-gradient(135deg, #78350f 0%, #3a1503 100%)',
    accentColor: '#fbbf24',
    badgeTone: 'amber',
    tags: ['Luxury Retail', 'Touch POS Terminal', 'Travertine Plinth', 'Multi-Device']
  },
  {
    id: 'qlytic-observability',
    title: 'Qlytic AI Data Observability Platform',
    category: 'Tablet & SaaS',
    client: 'Qlytic Labs',
    year: '2026',
    desc: 'Enterprise data pipeline health monitoring, incident triage matrix, and latency telemetry console on high-res workstation display and companion tablet over volcanic basalt rock.',
    image: '/images/gallery/qlytic_data_observability_3d_mockup.png',
    bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
    accentColor: '#818cf8',
    badgeTone: 'blue',
    tags: ['AI Observability', 'Data Pipelines', 'Basalt Studio', 'Workstation UI']
  },
  {
    id: 'yo-sports-platform',
    title: 'Yo! Sports Tournament & Performance Engine',
    category: 'Mobile UX',
    client: 'Yo! Sports Media',
    year: '2025',
    desc: 'Vibrant dual-screen sports tournament operations app featuring live bracket progression and interactive player court heatmaps on dynamic concrete plinth with emerald sports studio panels.',
    image: '/images/gallery/yo_sports_tournament_3d_mockup.png',
    bgGradient: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
    accentColor: '#34d399',
    badgeTone: 'emerald',
    tags: ['Sports Ops', 'Player Analytics', 'Live Brackets', 'Emerald Studio']
  }
];

const CATEGORIES: GalleryCategory[] = ['All', 'Mobile UX', 'Tablet & SaaS', 'Design Systems'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="gallery-page">
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-badge-top">
            <span className="gallery-badge-dot"></span>
            3D Studio Mockups &amp; Design Artifacts
          </div>
          <h1 className="gallery-title">Visual Design &amp; Mockup Gallery</h1>
          <p className="gallery-subtitle">
            A curated showcase of high-fidelity product interfaces, 3D textured studio mockups, multi-platform design systems, and mobile/tablet experiences crafted by Tanmay Vaity.
          </p>

          {/* Category Filter Pills */}
          <div className="gallery-filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
                <span className="filter-count">
                  {cat === 'All'
                    ? GALLERY_ITEMS.length
                    : GALLERY_ITEMS.filter((i) => i.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedItem(item); }}
            >
              {/* Card Media Stage with Customized Relevant Color Backdrop */}
              <div
                className="gallery-media-stage"
                style={{ background: item.bgGradient }}
              >
                <div className="gallery-media-inner">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1024}
                    height={600}
                    className="gallery-image"
                    priority={item.id === 'ai-resume-review' || item.id === 'workruit-tablet-saas'}
                  />
                </div>
                {/* Subtle Hover Action Pill */}
                <div className="gallery-inspect-pill">
                  <span>Inspect Full HD ↗</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="gallery-meta-content">
                <div className="gallery-meta-header">
                  <div>
                    <span className={`gallery-tag-category tag-${item.badgeTone}`}>
                      {item.category}
                    </span>
                    <h3 className="gallery-card-title">{item.title}</h3>
                  </div>
                  <span className="gallery-client-badge">{item.client} &bull; {item.year}</span>
                </div>

                <p className="gallery-card-desc">{item.desc}</p>

                <div className="gallery-tags-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="gallery-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="gallery-footer-cta">
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
              Want to see the complete end-to-end case studies?
            </h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '15px', margin: 0 }}>
              Explore comprehensive research breakdowns, problem framing, UX flows, and business outcomes.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/" className="button primary" style={{ padding: '12px 24px', fontSize: '14px', borderRadius: '8px' }}>
              View Case Studies ↓
            </Link>
            <Link href="/cv" className="button secondary" style={{ padding: '12px 20px', fontSize: '14px', borderRadius: '8px' }}>
              Read Full CV ↗
            </Link>
          </div>
        </div>

      </div>

      {/* Full HD Lightbox / Inspection Modal */}
      {selectedItem && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="gallery-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close Preview"
            >
              ✕
            </button>

            <div className="gallery-modal-stage" style={{ background: selectedItem.bgGradient }}>
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={1600}
                height={900}
                className="gallery-modal-image"
              />
            </div>

            <div className="gallery-modal-info">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <span className={`gallery-tag-category tag-${selectedItem.badgeTone}`}>
                    {selectedItem.category}
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '800', margin: '6px 0 0 0' }}>
                    {selectedItem.title}
                  </h2>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-muted)' }}>
                  {selectedItem.client} &bull; {selectedItem.year}
                </span>
              </div>

              <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--color-muted)', marginBottom: '16px' }}>
                {selectedItem.desc}
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedItem.tags.map((t) => (
                  <span key={t} className="gallery-tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

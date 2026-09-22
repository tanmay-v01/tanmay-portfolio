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
  },
  {
    id: 'avaada-smart-gate',
    title: 'Avaada Smart Gate & Permit-to-Work Telemetry',
    category: 'Mobile UX',
    client: 'Avaada Clean Energy',
    year: '2025',
    desc: 'Contractor safety protocol telemetry and real-time field gate authorization on iPad Pro paired with field inspector mobile smart pass.',
    image: '/images/gallery/avaada_smart_gate_telemetry_3d_mockup.png',
    bgGradient: 'linear-gradient(135deg, #08284d 0%, #031427 100%)',
    accentColor: '#38bdf8',
    badgeTone: 'blue',
    tags: ['Field Operative UX', 'Gate IoT', 'Renewable Safety', 'Mobile Security']
  },
  {
    id: 'pastel-vip-discovery',
    title: 'Pastel VIP Fragrance Discovery & Inventory Stream',
    category: 'Mobile UX',
    client: 'Pastel Parfumerie (Dubai)',
    year: '2025',
    desc: 'Boutique fragrance notes discovery carousel on mobile paired with real-time artisan batch formulation inventory tracker on iPad Pro.',
    image: '/images/gallery/pastel_vip_discovery_3d_mockup.png',
    bgGradient: 'linear-gradient(135deg, #5c2805 0%, #291002 100%)',
    accentColor: '#fbbf24',
    badgeTone: 'amber',
    tags: ['Fragrance Discovery', 'Artisan Inventory', 'Luxury UX', 'VIP Concierge']
  },
  {
    id: 'qlytic-automation-pipeline',
    title: 'Qlytic Automated Test Pipeline & Playwright MCP',
    category: 'Design Systems',
    client: 'Qlytic Labs',
    year: '2026',
    desc: 'Autonomous Playwright MCP testing pipeline dashboard and defect triage matrix on iPad Pro with mobile incident alert stream.',
    image: '/images/gallery/qlytic_automation_pipeline_3d_mockup.png',
    bgGradient: 'linear-gradient(135deg, #2e1065 0%, #170738 100%)',
    accentColor: '#a855f7',
    badgeTone: 'purple',
    tags: ['Playwright MCP', 'Autonomous Testing', 'Quality Engineering', 'Dark Studio']
  },
  {
    id: 'yo-sports-court-analytics',
    title: 'Yo! Sports Live Brackets & Player Court Heatmap',
    category: 'Design Systems',
    client: 'Yo! Sports Media',
    year: '2025',
    desc: 'Interactive tournament draw bracket matrix and high-velocity player court heatmaps on tablet paired with real-time match referee mobile companion.',
    image: '/images/gallery/yo_sports_court_analytics_3d_mockup.png',
    bgGradient: 'linear-gradient(135deg, #065f46 0%, #022c22 100%)',
    accentColor: '#34d399',
    badgeTone: 'emerald',
    tags: ['Court Heatmap', 'Live Brackets', 'Sports Analytics', 'Match Engine']
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

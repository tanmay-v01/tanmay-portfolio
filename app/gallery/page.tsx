'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_CASE_STUDIES, type GalleryCaseStudy } from '@/data/gallery-case-studies';
import GalleryCaseStudyModal from '@/components/GalleryCaseStudyModal';

/* ═══════════════════════════════════════════════════════════════════════════════
   Design Gallery — 13 Curated Ultra-Professional Case Studies
   Crafted by Lead UI/UX & Systems Designer Tanmay Vaity
   ═══════════════════════════════════════════════════════════════════════════════ */

type GalleryFilter =
  | 'All'
  | 'Enterprise SaaS'
  | 'FinTech & AI'
  | 'Luxury & Retail'
  | 'Industrial & IoT'
  | 'Sports & Health';

const FILTER_TABS: GalleryFilter[] = [
  'All',
  'Enterprise SaaS',
  'FinTech & AI',
  'Luxury & Retail',
  'Industrial & IoT',
  'Sports & Health'
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<GalleryCaseStudy | null>(null);

  // Sync hash on initial load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const match = GALLERY_CASE_STUDIES.find((item) => item.id === hashId);
      if (match) {
        setSelectedCaseStudy(match);
      }
    }
  }, []);

  // Filter items
  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') return GALLERY_CASE_STUDIES;
    return GALLERY_CASE_STUDIES.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Tab Counts
  const tabCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: GALLERY_CASE_STUDIES.length
    };
    GALLERY_CASE_STUDIES.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Modal navigation index tracking
  const currentCaseIndex = useMemo(() => {
    if (!selectedCaseStudy) return -1;
    return GALLERY_CASE_STUDIES.findIndex((item) => item.id === selectedCaseStudy.id);
  }, [selectedCaseStudy]);

  const handleOpenCaseStudy = (item: GalleryCaseStudy) => {
    setSelectedCaseStudy(item);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${item.id}`);
    }
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleNavigateCaseStudy = (direction: 'prev' | 'next') => {
    if (currentCaseIndex === -1) return;
    const total = GALLERY_CASE_STUDIES.length;
    let nextIndex = direction === 'next' ? currentCaseIndex + 1 : currentCaseIndex - 1;
    if (nextIndex < 0) nextIndex = total - 1;
    if (nextIndex >= total) nextIndex = 0;

    const nextItem = GALLERY_CASE_STUDIES[nextIndex];
    setSelectedCaseStudy(nextItem);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${nextItem.id}`);
    }
  };

  return (
    <div className="gallery-page">
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>

        {/* ═══ Header ═══ */}
        <div className="gallery-header">
          <div className="gallery-badge-top">
            <span className="gallery-badge-dot" />
            Curated Showcase &bull; 13 In-Depth Case Studies
          </div>
          <h1 className="gallery-title">Design Gallery</h1>
          <p className="gallery-subtitle">
            An ultra-professional portfolio of 13 high-impact product designs, multi-surface tablet consoles, tactile touch terminals, and high-density SaaS platforms. Click any case study to explore the problem framing, creative thought process, UX architecture, micro-interactions, and business outcomes.
          </p>

          {/* Filter Bar */}
          <div className="gallery-filter-bar">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`gallery-filter-btn ${activeFilter === tab ? 'active' : ''}`}
                aria-pressed={activeFilter === tab}
              >
                {tab}
                <span className="filter-count">{tabCounts[tab] || 0}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ═══ 13-Item Curated Gallery Grid ═══ */}
        <div className="gallery-grid">
          {filteredStudies.map((item) => {
            const primaryMetric = item.metrics[0];
            return (
              <article
                key={item.id}
                className="gallery-card"
                onClick={() => handleOpenCaseStudy(item)}
                role="button"
                tabIndex={0}
                aria-label={`Open case study: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenCaseStudy(item);
                  }
                }}
              >
                {/* 3D Studio Mockup Stage */}
                <div className="gallery-media-stage" style={{ background: item.bgGradient }}>
                  <div className="gallery-media-inner">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1024}
                      height={640}
                      loading="lazy"
                      className="gallery-image"
                    />
                  </div>
                  <div className="gallery-inspect-pill">
                    <span>Explore Case Study &amp; Thought Process ↗</span>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="gallery-meta-content">
                  <div className="gallery-meta-header">
                    <div>
                      <span className={`gallery-tag-category tag-${item.badgeTone}`}>
                        {item.category} &bull; {item.badge}
                      </span>
                    </div>
                    <span className="gallery-client-badge">
                      {item.client} &bull; {item.year}
                    </span>
                  </div>

                  <h2 className="gallery-card-title">{item.title}</h2>
                  <p className="gallery-card-subtitle">{item.subtitle}</p>

                  {/* Highlight Metric Badge */}
                  {primaryMetric && (
                    <div className="gallery-kpi-highlight">
                      <span style={{ color: item.accentColor, fontWeight: '800' }}>
                        {primaryMetric.value}
                      </span>
                      <span>&bull;</span>
                      <span>{primaryMetric.label}</span>
                      {primaryMetric.delta && (
                        <span style={{ color: '#059669', fontSize: '11px' }}>
                          ({primaryMetric.delta})
                        </span>
                      )}
                    </div>
                  )}

                  <p className="gallery-card-desc">{item.summary}</p>

                  <div className="gallery-tags-row">
                    {item.tags.map((tag) => (
                      <span key={tag} className="gallery-tag-pill">{tag}</span>
                    ))}
                  </div>

                  <div className="gallery-action-link">
                    <span>Read Case Study &amp; Thought Process</span>
                    <span aria-hidden="true">&rarr;</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ═══ Disclaimer Note ═══ */}
        <div className="gd-disclaimer" style={{ marginTop: '24px', marginBottom: '40px' }}>
          <div className="gd-disclaimer-icon">✦</div>
          <div>
            <strong>Designer Quality Benchmark:</strong> Each of the 13 case studies above represents authentic end-to-end design artifacts architected by Tanmay Vaity, covering enterprise systems design, accessibility (WCAG AA/AAA), touch ergonomics, and multi-device interaction design. Click any project to inspect its detailed thought process, color systems, UX architecture, and business metrics.
          </div>
        </div>

        {/* ═══ Footer CTA ═══ */}
        <div className="gallery-footer-cta">
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
              Want to see featured flagship case studies?
            </h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '15px', margin: 0 }}>
              Explore end-to-end design journeys with interactive screen viewers, user flow charts, and design systems.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/" className="button primary" style={{ padding: '12px 24px', fontSize: '14px', borderRadius: '8px' }}>
              View Featured Projects ↓
            </Link>
            <Link href="/cv" className="button secondary" style={{ padding: '12px 20px', fontSize: '14px', borderRadius: '8px' }}>
              Read Full CV ↗
            </Link>
          </div>
        </div>

      </div>

      {/* ═══ In-Depth Case Study & Thought Process Modal ═══ */}
      <GalleryCaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={handleCloseCaseStudy}
        onNavigate={handleNavigateCaseStudy}
        currentIndex={currentCaseIndex}
        totalCount={GALLERY_CASE_STUDIES.length}
      />
    </div>
  );
}

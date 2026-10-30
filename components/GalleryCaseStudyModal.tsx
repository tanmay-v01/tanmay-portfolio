'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { type GalleryCaseStudy } from '@/data/gallery-case-studies';

interface GalleryCaseStudyModalProps {
  caseStudy: GalleryCaseStudy | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  currentIndex: number;
  totalCount: number;
}

type TabSection = 'overview' | 'problem' | 'thought' | 'ux' | 'craft' | 'outcomes';

export default function GalleryCaseStudyModal({
  caseStudy,
  onClose,
  onNavigate,
  currentIndex,
  totalCount
}: GalleryCaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<TabSection>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Close on Escape, navigate with Left/Right arrows
  useEffect(() => {
    if (!caseStudy) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [caseStudy, onClose, onNavigate]);

  // Reset tab and scroll when case study changes
  useEffect(() => {
    setActiveTab('overview');
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [caseStudy?.id]);

  if (!caseStudy) return null;

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/gallery#${caseStudy.id}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  const scrollToSection = (sectionId: TabSection) => {
    setActiveTab(sectionId);
    const element = document.getElementById(`cs-${sectionId}`);
    if (element && scrollContainerRef.current) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="cs-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cs-modal-title"
    >
      <div
        className="cs-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ═══ Sticky Top Header ═══ */}
        <div className="cs-modal-header">
          <div className="cs-modal-header-left">
            <span className={`cs-badge-category tag-${caseStudy.badgeTone}`}>
              {caseStudy.category} &bull; {caseStudy.badge}
            </span>
            <span className="cs-counter-pill">
              Project {String(currentIndex + 1).padStart(2, '0')} of {String(totalCount).padStart(2, '0')}
            </span>
          </div>

          <div className="cs-modal-header-actions">
            <button
              type="button"
              className="cs-action-btn"
              onClick={handleShare}
              title="Copy link to case study"
              aria-label="Share Case Study"
            >
              {copiedLink ? '✓ Copied Link' : '🔗 Share'}
            </button>

            <div className="cs-nav-arrows">
              <button
                type="button"
                className="cs-arrow-btn"
                onClick={() => onNavigate('prev')}
                title="Previous Case Study (← Arrow Key)"
                aria-label="Previous Case Study"
              >
                ←
              </button>
              <button
                type="button"
                className="cs-arrow-btn"
                onClick={() => onNavigate('next')}
                title="Next Case Study (→ Arrow Key)"
                aria-label="Next Case Study"
              >
                →
              </button>
            </div>

            <button
              type="button"
              className="cs-close-btn"
              onClick={onClose}
              title="Close Case Study (Esc)"
              aria-label="Close Case Study"
            >
              ✕
            </button>
          </div>
        </div>

        {/* ═══ Scrollable Body Container ═══ */}
        <div className="cs-modal-scroll" ref={scrollContainerRef}>

          {/* ═══ Hero Showcase Section ═══ */}
          <div className="cs-hero-stage" style={{ background: caseStudy.bgGradient }}>
            <div className="cs-hero-render-wrap">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={1600}
                height={960}
                priority
                className="cs-hero-image"
              />
            </div>
            <div className="cs-hero-badge-float">
              <span>✦ Ultra-HD 3D Studio Mockup</span>
            </div>
          </div>

          {/* ═══ Meta Ribbon ═══ */}
          <div className="cs-meta-ribbon">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Client / Brand</span>
              <strong className="cs-meta-val">{caseStudy.client}</strong>
            </div>
            <div className="cs-meta-divider" />
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <strong className="cs-meta-val">{caseStudy.role}</strong>
            </div>
            <div className="cs-meta-divider" />
            <div className="cs-meta-item">
              <span className="cs-meta-label">Timeline</span>
              <strong className="cs-meta-val">{caseStudy.timeline}</strong>
            </div>
            <div className="cs-meta-divider" />
            <div className="cs-meta-item">
              <span className="cs-meta-label">Platforms</span>
              <strong className="cs-meta-val">{caseStudy.platforms.join(', ')}</strong>
            </div>
          </div>

          {/* ═══ Sticky Section Navigation Bar ═══ */}
          <div className="cs-tabs-sticky">
            <div className="cs-tabs-track">
              <button
                type="button"
                className={`cs-tab-link ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => scrollToSection('overview')}
              >
                01. Overview &amp; KPIs
              </button>
              <button
                type="button"
                className={`cs-tab-link ${activeTab === 'problem' ? 'active' : ''}`}
                onClick={() => scrollToSection('problem')}
              >
                02. The Problem Space
              </button>
              <button
                type="button"
                className={`cs-tab-link ${activeTab === 'thought' ? 'active' : ''}`}
                onClick={() => scrollToSection('thought')}
              >
                03. Thought Process &amp; Craft
              </button>
              <button
                type="button"
                className={`cs-tab-link ${activeTab === 'ux' ? 'active' : ''}`}
                onClick={() => scrollToSection('ux')}
              >
                04. UX Architecture
              </button>
              <button
                type="button"
                className={`cs-tab-link ${activeTab === 'craft' ? 'active' : ''}`}
                onClick={() => scrollToSection('craft')}
              >
                05. Micro-Interactions &amp; A11y
              </button>
              <button
                type="button"
                className={`cs-tab-link ${activeTab === 'outcomes' ? 'active' : ''}`}
                onClick={() => scrollToSection('outcomes')}
              >
                06. Outcomes &amp; Review
              </button>
            </div>
          </div>

          {/* ═══ Content Sections Container ═══ */}
          <div className="cs-body-content">

            {/* ─── 01. Overview & Impact ─── */}
            <section id="cs-overview" className="cs-section">
              <div className="cs-title-block">
                <span className="cs-kicker">Executive Case Study</span>
                <h1 id="cs-modal-title" className="cs-main-title">{caseStudy.title}</h1>
                <p className="cs-subtitle">{caseStudy.subtitle}</p>
              </div>

              {/* KPI Cards */}
              <div className="cs-kpi-grid">
                {caseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="cs-kpi-card">
                    <div className="cs-kpi-header">
                      <span className="cs-kpi-label">{m.label}</span>
                      {m.delta && <span className="cs-kpi-delta">{m.delta}</span>}
                    </div>
                    <div className="cs-kpi-val" style={{ color: caseStudy.accentColor }}>{m.value}</div>
                    <p className="cs-kpi-desc">{m.description}</p>
                  </div>
                ))}
              </div>

              {/* Strategic Summary */}
              <div className="cs-summary-box">
                <div className="cs-summary-badge">Strategic Overview</div>
                <p className="cs-summary-text">{caseStudy.summary}</p>
                <div className="cs-tags-cluster">
                  {caseStudy.tags.map((tag) => (
                    <span key={tag} className="cs-tag-pill">{tag}</span>
                  ))}
                  {caseStudy.tools.map((tool) => (
                    <span key={tool} className="cs-tool-pill">🛠 {tool}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* ─── 02. The Problem Space ─── */}
            <section id="cs-problem" className="cs-section">
              <div className="cs-section-header">
                <span className="cs-section-num">02</span>
                <div>
                  <h2 className="cs-section-title">The Problem Space &amp; Context</h2>
                  <p className="cs-section-lead">Deconstructing the operational hurdles and user friction points.</p>
                </div>
              </div>

              <div className="cs-problem-intro">
                <div className="cs-text-column">
                  <h3 className="cs-subheading">Operational Context</h3>
                  <p>{caseStudy.problem.context}</p>
                </div>
                <div className="cs-text-column">
                  <h3 className="cs-subheading">The Core Design Challenge</h3>
                  <p>{caseStudy.problem.challenge}</p>
                </div>
              </div>

              <h3 className="cs-subheading" style={{ marginTop: '28px', marginBottom: '14px' }}>
                Key User Pain Points &amp; Cognitive Friction
              </h3>
              <div className="cs-pain-grid">
                {caseStudy.problem.userPainPoints.map((pain, i) => (
                  <div key={i} className="cs-pain-card">
                    <div className="cs-pain-badge">Friction 0{i + 1}</div>
                    <p className="cs-pain-text">{pain}</p>
                  </div>
                ))}
              </div>

              <div className="cs-risk-callout">
                <div className="cs-risk-icon">⚠️</div>
                <div>
                  <strong>High-Stakes Business Risk:</strong> {caseStudy.problem.businessRisk}
                </div>
              </div>
            </section>

            {/* ─── 03. Thought Process & Creative Direction ─── */}
            <section id="cs-thought" className="cs-section">
              <div className="cs-section-header">
                <span className="cs-section-num">03</span>
                <div>
                  <h2 className="cs-section-title">Creative Direction &amp; Thought Process</h2>
                  <p className="cs-section-lead">Balancing aesthetic polish with functional cognitive ergonomics.</p>
                </div>
              </div>

              {/* Design Philosophy Quote */}
              <div className="cs-philosophy-card">
                <div className="cs-quote-mark">“</div>
                <blockquote className="cs-philosophy-quote">
                  {caseStudy.thoughtProcess.designPhilosophy}
                </blockquote>
                <div className="cs-philosophy-author">
                  — Design Philosophy by Tanmay Vaity
                </div>
              </div>

              {/* Color System */}
              <div className="cs-spec-block">
                <h3 className="cs-subheading">Semantic Color System &amp; Visual Contrast</h3>
                <div className="cs-palette-grid">
                  {caseStudy.thoughtProcess.colorPalette.map((c, i) => (
                    <div key={i} className="cs-color-card">
                      <div className="cs-color-preview" style={{ background: c.hex }} />
                      <div className="cs-color-info">
                        <strong className="cs-color-name">{c.name}</strong>
                        <code className="cs-color-hex">{c.hex}</code>
                        <span className="cs-color-role">{c.usage}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography & Spatial Grid */}
              <div className="cs-spec-cols">
                <div className="cs-spec-card">
                  <h4 className="cs-spec-title">Typography Hierarchy</h4>
                  <div className="cs-spec-item">
                    <span className="cs-spec-dim">Headings:</span>
                    <strong>{caseStudy.thoughtProcess.typography.heading}</strong>
                  </div>
                  <div className="cs-spec-item">
                    <span className="cs-spec-dim">Body &amp; Data:</span>
                    <strong>{caseStudy.thoughtProcess.typography.body}</strong>
                  </div>
                  <p className="cs-spec-rationale">{caseStudy.thoughtProcess.typography.rationale}</p>
                </div>

                <div className="cs-spec-card">
                  <h4 className="cs-spec-title">Spatial Grid &amp; Density</h4>
                  <p style={{ fontSize: '14.5px', lineHeight: '1.65', color: '#475569', margin: 0 }}>
                    {caseStudy.thoughtProcess.gridAndSpatialLayout}
                  </p>
                </div>
              </div>

              {/* Key Design Decisions & Tradeoffs */}
              <h3 className="cs-subheading" style={{ marginTop: '32px', marginBottom: '14px' }}>
                Key Design Decisions &amp; Strategic Tradeoffs
              </h3>
              <div className="cs-tradeoffs-list">
                {caseStudy.thoughtProcess.keyTradeoffs.map((t, i) => (
                  <div key={i} className="cs-tradeoff-item">
                    <div className="cs-tradeoff-header">
                      <span className="cs-tradeoff-badge">Decision 0{i + 1}</span>
                      <h4 className="cs-tradeoff-title">{t.decision}</h4>
                    </div>
                    <div className="cs-tradeoff-grid">
                      <div className="cs-tradeoff-col why-chosen">
                        <span className="cs-col-tag chosen-tag">✓ Why Chosen</span>
                        <p>{t.whyChosen}</p>
                      </div>
                      <div className="cs-tradeoff-col discarded">
                        <span className="cs-col-tag discarded-tag">✕ Alternative Discarded</span>
                        <p>{t.alternativeDiscarded}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── 04. UX Architecture & User Flows ─── */}
            <section id="cs-ux" className="cs-section">
              <div className="cs-section-header">
                <span className="cs-section-num">04</span>
                <div>
                  <h2 className="cs-section-title">UX Architecture &amp; User Flows</h2>
                  <p className="cs-section-lead">{caseStudy.uxArchitecture.coreFlowTitle}</p>
                </div>
              </div>

              {/* Step by step flow */}
              <div className="cs-flow-track">
                {caseStudy.uxArchitecture.steps.map((st, i) => (
                  <div key={i} className="cs-flow-card">
                    <div className="cs-flow-node">
                      <span className="cs-flow-step-num">{st.stepNumber}</span>
                    </div>
                    <div className="cs-flow-content">
                      <h4 className="cs-flow-name">{st.stepName}</h4>
                      <div className="cs-flow-action">
                        <span className="cs-flow-role">User Action:</span>
                        <p>{st.action}</p>
                      </div>
                      <div className="cs-flow-response">
                        <span className="cs-flow-role">System Response:</span>
                        <p>{st.systemResponse}</p>
                      </div>
                      <div className="cs-flow-nuance">
                        <span className="cs-nuance-icon">💡</span>
                        <span><em>UX Nuance:</em> {st.uxNuance}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Information Hierarchy */}
              <div className="cs-hierarchy-box">
                <h4 className="cs-subheading">Structured Information Hierarchy</h4>
                <ul className="cs-hierarchy-list">
                  {caseStudy.uxArchitecture.informationHierarchy.map((item, i) => (
                    <li key={i} className="cs-hierarchy-item">{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ─── 05. UI Craft, Micro-Interactions & A11y ─── */}
            <section id="cs-craft" className="cs-section">
              <div className="cs-section-header">
                <span className="cs-section-num">05</span>
                <div>
                  <h2 className="cs-section-title">UI Craft, Micro-Interactions &amp; Accessibility</h2>
                  <p className="cs-section-lead">Tactile feedback mechanics and universal accessibility compliance.</p>
                </div>
              </div>

              {/* Micro-Interactions */}
              <div className="cs-interactions-grid">
                {caseStudy.uiCraft.keyInteractions.map((inter, i) => (
                  <div key={i} className="cs-interaction-card">
                    <div className="cs-inter-badge">Interaction 0{i + 1}</div>
                    <h4 className="cs-inter-name">{inter.name}</h4>
                    <div className="cs-inter-field">
                      <span className="cs-inter-label">Trigger:</span>
                      <code>{inter.trigger}</code>
                    </div>
                    <div className="cs-inter-field">
                      <span className="cs-inter-label">Haptic / Visual Feedback:</span>
                      <p>{inter.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Accessibility Matrix */}
              <div className="cs-a11y-container">
                <h3 className="cs-subheading" style={{ marginBottom: '14px' }}>
                  Accessibility &amp; Inclusivity Audit (WCAG)
                </h3>
                <div className="cs-a11y-grid">
                  <div className="cs-a11y-item">
                    <span className="cs-a11y-title">Standard Level</span>
                    <strong className="cs-a11y-val">{caseStudy.uiCraft.accessibilityDetails.wcagLevel}</strong>
                  </div>
                  <div className="cs-a11y-item">
                    <span className="cs-a11y-title">Text Contrast Ratio</span>
                    <strong className="cs-a11y-val">{caseStudy.uiCraft.accessibilityDetails.contrastRatio}</strong>
                  </div>
                  <div className="cs-a11y-item">
                    <span className="cs-a11y-title">Minimum Touch Hitbox</span>
                    <strong className="cs-a11y-val">{caseStudy.uiCraft.accessibilityDetails.touchTargetSize}</strong>
                  </div>
                  <div className="cs-a11y-item">
                    <span className="cs-a11y-title">Assistive Feature</span>
                    <strong className="cs-a11y-val" style={{ fontSize: '13px' }}>
                      {caseStudy.uiCraft.accessibilityDetails.assistiveFeature}
                    </strong>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── 06. Outcomes, Voice & Retrospective ─── */}
            <section id="cs-outcomes" className="cs-section" style={{ borderBottom: 'none' }}>
              <div className="cs-section-header">
                <span className="cs-section-num">06</span>
                <div>
                  <h2 className="cs-section-title">Measurable Outcomes &amp; Retrospective</h2>
                  <p className="cs-section-lead">Business validation, stakeholder testimony, and future iterations.</p>
                </div>
              </div>

              {/* Gains */}
              <div className="cs-gains-row">
                <div className="cs-gain-box primary">
                  <span className="cs-gain-badge">Primary Business Impact</span>
                  <p className="cs-gain-text">{caseStudy.outcomes.primaryGain}</p>
                </div>
                <div className="cs-gain-box secondary">
                  <span className="cs-gain-badge">Secondary Operational Gain</span>
                  <p className="cs-gain-text">{caseStudy.outcomes.secondaryGain}</p>
                </div>
              </div>

              {/* Stakeholder Quote */}
              <div className="cs-testimonial-card">
                <p className="cs-testimonial-quote">“{caseStudy.outcomes.quote.text}”</p>
                <div className="cs-testimonial-person">
                  <div className="cs-person-avatar">
                    {caseStudy.outcomes.quote.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <strong className="cs-person-name">{caseStudy.outcomes.quote.author}</strong>
                    <span className="cs-person-role">{caseStudy.outcomes.quote.title}</span>
                  </div>
                </div>
              </div>

              {/* Retrospective */}
              <div className="cs-retrospective-grid">
                <div className="cs-retro-card success">
                  <h4 className="cs-retro-title">✓ What Worked Exceptionally Well</h4>
                  <p>{caseStudy.retrospective.whatWorked}</p>
                </div>
                <div className="cs-retro-card next">
                  <h4 className="cs-retro-title">↗ Next Iteration Roadmap (v2.0)</h4>
                  <p>{caseStudy.retrospective.whatWouldIterate}</p>
                </div>
              </div>
            </section>

          </div>

          {/* ═══ Footer Project Navigation ═══ */}
          <div className="cs-modal-footer">
            <div className="cs-footer-nav-buttons">
              <button
                type="button"
                className="cs-nav-project-btn"
                onClick={() => onNavigate('prev')}
              >
                <span>← Previous Project</span>
              </button>
              <button
                type="button"
                className="cs-back-top-btn"
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                ↑ Top of Case Study
              </button>
              <button
                type="button"
                className="cs-nav-project-btn"
                onClick={() => onNavigate('next')}
              >
                <span>Next Project →</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


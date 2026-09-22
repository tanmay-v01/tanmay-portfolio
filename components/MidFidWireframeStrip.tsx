'use client';

import React from 'react';

interface WireframeStripProps {
  accentColor?: string;
}

export default function MidFidWireframeStrip({ accentColor = '#f59e0b' }: WireframeStripProps) {
  return (
    <section className="case-section wireframes-strip-section" aria-labelledby="wireframes-strip-heading">
      {/* Top Header Row matching user's Image 4 */}
      <div className="wireframe-strip-header">
        <div className="wireframe-strip-meta">
          <span
            className="wireframe-strip-label"
            id="wireframes-strip-heading"
            style={{ color: accentColor }}
          >
            MID-FIDELITY WIREFRAMES
          </span>
          <p className="wireframe-strip-desc">
            With mid-fidelity wireframes, I can concentrate on the layout and hierarchy without
            being distracted by aesthetic details. This stage is crucial for obtaining feedback
            and making modifications before moving forward.
          </p>
        </div>
      </div>

      {/* Wireframe Gallery Card */}
      <div className="wireframe-strip-card">
        <div className="wireframe-strip-scroll">
          {/* Screen 1: Home / Feed */}
          <div className="wireframe-phone-screen">
            <div className="wf-status-bar">
              <span>9:41</span>
              <span className="wf-bar-dots">● ●</span>
            </div>
            <div className="wf-header">
              <div className="wf-title-line" />
              <div className="wf-search-box" />
            </div>
            <div className="wf-active-card">
              <div className="wf-badge-line" />
              <div className="wf-text-line wide" />
              <div className="wf-text-line half" />
            </div>
            <div className="wf-row-cards">
              <div className="wf-mini-card">
                <div className="wf-img-placeholder" />
                <div className="wf-text-line short" />
              </div>
              <div className="wf-mini-card">
                <div className="wf-img-placeholder" />
                <div className="wf-text-line short" />
              </div>
            </div>
            <div className="wf-pills-row">
              <span className="wf-pill active" />
              <span className="wf-pill" />
              <span className="wf-pill" />
            </div>
            <div className="wf-list-items">
              <div className="wf-list-row">
                <div className="wf-img-box" />
                <div className="wf-lines-col">
                  <div className="wf-text-line" />
                  <div className="wf-text-line short" />
                </div>
              </div>
              <div className="wf-list-row">
                <div className="wf-img-box" />
                <div className="wf-lines-col">
                  <div className="wf-text-line" />
                  <div className="wf-text-line short" />
                </div>
              </div>
            </div>
            <div className="wf-bottom-nav">
              <span className="wf-nav-icon" />
              <span className="wf-nav-icon active" />
              <span className="wf-nav-icon" />
              <span className="wf-nav-icon" />
            </div>
          </div>

          {/* Screen 2: Course / Detail Overview */}
          <div className="wireframe-phone-screen">
            <div className="wf-status-bar">
              <span>9:41</span>
              <span className="wf-bar-dots">● ●</span>
            </div>
            <div className="wf-top-nav-bar">
              <span className="wf-back-arrow">←</span>
              <div className="wf-title-line short" />
              <span className="wf-bookmark-icon">□</span>
            </div>
            <div className="wf-video-placeholder">
              <div className="wf-x-cross">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="wf-x-svg">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="#cbd5e1" strokeWidth="1" />
                </svg>
                <div className="wf-play-circle">▶</div>
              </div>
            </div>
            <div className="wf-detail-meta">
              <div className="wf-text-line wide bold" />
              <div className="wf-rating-line">
                <span className="wf-star-dot">★</span>
                <span className="wf-text-line mini" />
              </div>
              <div className="wf-para-skeleton">
                <div className="wf-text-line" />
                <div className="wf-text-line wide" />
                <div className="wf-text-line half" />
              </div>
            </div>
            <div className="wf-tabs-row">
              <span className="wf-tab active">Overview</span>
              <span className="wf-tab">Lessons</span>
              <span className="wf-tab">Reviews</span>
            </div>
            <div className="wf-module-card">
              <div className="wf-bullet-num">1</div>
              <div className="wf-lines-col">
                <div className="wf-text-line" />
                <div className="wf-text-line short" />
              </div>
            </div>
            <div className="wf-module-card">
              <div className="wf-bullet-num">2</div>
              <div className="wf-lines-col">
                <div className="wf-text-line" />
                <div className="wf-text-line short" />
              </div>
            </div>
          </div>

          {/* Screen 3: Interactive Lesson Checklist */}
          <div className="wireframe-phone-screen">
            <div className="wf-status-bar">
              <span>9:41</span>
              <span className="wf-bar-dots">● ●</span>
            </div>
            <div className="wf-top-nav-bar">
              <span className="wf-back-arrow">←</span>
              <div className="wf-title-line short" />
              <span className="wf-bookmark-icon">□</span>
            </div>
            <div className="wf-stepper-track">
              <div className="wf-step-node active">
                <div className="wf-step-circle" />
                <div className="wf-text-line mini" />
              </div>
              <div className="wf-step-connector" />
              <div className="wf-step-node">
                <div className="wf-step-circle" />
                <div className="wf-text-line mini" />
              </div>
              <div className="wf-step-connector" />
              <div className="wf-step-node">
                <div className="wf-step-circle" />
                <div className="wf-text-line mini" />
              </div>
            </div>
            <div className="wf-checklist-box">
              <div className="wf-check-row">
                <span className="wf-checkbox checked">✓</span>
                <div className="wf-text-line" />
              </div>
              <div className="wf-check-row">
                <span className="wf-checkbox checked">✓</span>
                <div className="wf-text-line" />
              </div>
              <div className="wf-check-row">
                <span className="wf-checkbox">□</span>
                <div className="wf-text-line half" />
              </div>
            </div>
            <div className="wf-exercise-card">
              <div className="wf-exercise-header">
                <div className="wf-tag-skeleton" />
                <div className="wf-text-line short" />
              </div>
              <div className="wf-input-box" />
            </div>
            <div className="wf-btn-cta">Continue</div>
          </div>

          {/* Screen 4: Space Organization / Form Flow */}
          <div className="wireframe-phone-screen">
            <div className="wf-status-bar">
              <span>9:41</span>
              <span className="wf-bar-dots">● ●</span>
            </div>
            <div className="wf-top-nav-bar">
              <span className="wf-back-arrow">←</span>
              <div className="wf-title-line" />
            </div>
            <div className="wf-quote-box">
              <div className="wf-text-line" />
              <div className="wf-text-line half" />
            </div>
            <div className="wf-banner-x">
              <div className="wf-x-cross">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="wf-x-svg">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="#cbd5e1" strokeWidth="1" />
                </svg>
              </div>
            </div>
            <div className="wf-card-block">
              <div className="wf-text-line bold" />
              <div className="wf-text-line wide" />
              <div className="wf-text-line" />
            </div>
            <div className="wf-card-block">
              <div className="wf-text-line bold" />
              <div className="wf-text-line wide" />
              <div className="wf-text-line" />
            </div>
            <div className="wf-btn-cta">Save Step</div>
          </div>

          {/* Screen 5: Inspection / Review Complete */}
          <div className="wireframe-phone-screen">
            <div className="wf-status-bar">
              <span>9:41</span>
              <span className="wf-bar-dots">● ●</span>
            </div>
            <div className="wf-top-nav-bar">
              <span className="wf-back-arrow">✕</span>
              <div className="wf-title-line short" />
            </div>
            <div className="wf-success-badge">
              <div className="wf-success-icon">✓</div>
              <div className="wf-text-line wide bold" />
              <div className="wf-text-line half" />
            </div>
            <div className="wf-summary-card">
              <div className="wf-summary-row">
                <span className="wf-text-line mini" />
                <span className="wf-text-line mini bold" />
              </div>
              <div className="wf-summary-row">
                <span className="wf-text-line mini" />
                <span className="wf-text-line mini bold" />
              </div>
              <div className="wf-summary-row">
                <span className="wf-text-line mini" />
                <span className="wf-text-line mini bold" />
              </div>
            </div>
            <div className="wf-btn-cta">View Summary Report</div>
          </div>
        </div>
      </div>
    </section>
  );
}

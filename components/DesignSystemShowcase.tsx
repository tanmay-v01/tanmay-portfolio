'use client';

import React from 'react';
import type { Project } from '@/data/projects';

interface DesignSystemProps {
  project: Project;
}

interface ProjectDesignSystemData {
  palette: { hex: string; border?: boolean }[];
  primaryBtn: { label: string; bg: string; text: string };
  secondaryBtn: { label: string; border: string; text: string };
  typography: {
    fontName: string;
    sample: string;
  };
}

export default function DesignSystemShowcase({ project }: DesignSystemProps) {
  const data = getProjectDesignTokens(project.slug);

  return (
    <section className="case-section design-system-section" aria-labelledby="design-system-heading">
      <div className="case-section-header-block">
        <p className="case-section-label" id="design-system-heading">Design System</p>
        <h2 className="case-section-title">Design System &amp; UI Foundation</h2>
        <p className="case-section-desc">
          Core visual tokens extracted directly from production interfaces — ensuring accessible contrast, consistent typography hierarchy, and unified visual rhythm.
        </p>
      </div>

      <div className="design-system-card">
        <div className="design-system-grid">
          {/* ── Left Column: Color Palette & Buttons ── */}
          <div className="ds-left-col">
            {/* Color Palette */}
            <div className="ds-sub-section">
              <h3 className="ds-block-title">Color Palette</h3>
              <div className="ds-swatches-grid">
                {data.palette.map((c, i) => (
                  <div key={i} className="ds-swatch-item">
                    <div
                      className="ds-swatch-circle"
                      style={{
                        backgroundColor: c.hex,
                        border: c.border ? '1.5px solid #e2e8f0' : 'none',
                      }}
                    />
                    <span className="ds-swatch-code">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="ds-sub-section ds-buttons-section">
              <h3 className="ds-block-title">Buttons</h3>
              <div className="ds-buttons-stack">
                <button
                  type="button"
                  className="ds-btn-primary"
                  style={{
                    backgroundColor: data.primaryBtn.bg,
                    color: data.primaryBtn.text,
                  }}
                >
                  {data.primaryBtn.label}
                </button>
                <button
                  type="button"
                  className="ds-btn-secondary"
                  style={{
                    borderColor: data.secondaryBtn.border,
                    color: data.secondaryBtn.text,
                  }}
                >
                  {data.secondaryBtn.label}
                </button>
              </div>
            </div>
          </div>

          {/* ── Right Column: Typography Scale & Rationale ── */}
          <div className="ds-right-col">
            <div className="ds-sub-section">
              <h3 className="ds-block-title">Typography</h3>
              <div className="ds-type-scale">
                <div className="ds-type-row">
                  <span className="ds-type-spec ds-h1">{data.typography.fontName} – 48px</span>
                  <span className="ds-type-tag">H1 HEADING</span>
                </div>
                <div className="ds-type-row">
                  <span className="ds-type-spec ds-h2">{data.typography.fontName} – 36px</span>
                  <span className="ds-type-tag">H2 SECTION</span>
                </div>
                <div className="ds-type-row">
                  <span className="ds-type-spec ds-body1">{data.typography.fontName} – 24px</span>
                  <span className="ds-type-tag">BODY 1 / SUBHEAD</span>
                </div>
                <div className="ds-type-row">
                  <span className="ds-type-spec ds-body2">{data.typography.fontName} – 16px</span>
                  <span className="ds-type-tag">BODY 2 / PARAGRAPH</span>
                </div>
              </div>

              <p className="ds-type-sample">
                {data.typography.sample}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Tokens accurately fetched from real screenshot pixels across desktop and mobile screens
 */
function getProjectDesignTokens(slug: string): ProjectDesignSystemData {
  switch (slug) {
    case 'perfume':
      return {
        palette: [
          { hex: '#D97706' },
          { hex: '#FDE68A' },
          { hex: '#92400E' },
          { hex: '#FEF3C7' },
          { hex: '#FCFAF7', border: true },
        ],
        primaryBtn: {
          label: 'Primary Action',
          bg: '#D97706',
          text: '#FFFFFF',
        },
        secondaryBtn: {
          label: 'Secondary Action',
          border: '#D97706',
          text: '#D97706',
        },
        typography: {
          fontName: 'League Spartan & Serif',
          sample:
            'Every component is constructed on a 4px layout grid with high contrast typography, accessible states, and unified visual rhythm across all interactive touchpoints.',
        },
      };

    case 'yo-sports':
      return {
        palette: [
          { hex: '#1E473F' },
          { hex: '#EA580C' },
          { hex: '#228858' },
          { hex: '#EAB308' },
          { hex: '#F8FAFC', border: true },
        ],
        primaryBtn: {
          label: 'Primary Action',
          bg: '#EA580C',
          text: '#FFFFFF',
        },
        secondaryBtn: {
          label: 'Secondary Action',
          border: '#EA580C',
          text: '#EA580C',
        },
        typography: {
          fontName: 'League Spartan & Sans',
          sample:
            'Every component is constructed on a 4px layout grid with high contrast typography, accessible states, and unified visual rhythm across all interactive touchpoints.',
        },
      };

    case 'qlytic-labs':
      return {
        palette: [
          { hex: '#EA4820' },
          { hex: '#3880F0' },
          { hex: '#20C860' },
          { hex: '#F04040' },
          { hex: '#F8FAFC', border: true },
        ],
        primaryBtn: {
          label: 'Primary Action',
          bg: '#EA4820',
          text: '#FFFFFF',
        },
        secondaryBtn: {
          label: 'Secondary Action',
          border: '#EA4820',
          text: '#EA4820',
        },
        typography: {
          fontName: 'League Spartan & Sans',
          sample:
            'Every component is constructed on a 4px layout grid with high contrast typography, accessible states, and unified visual rhythm across all interactive touchpoints.',
        },
      };

    case 'avaada':
    default:
      return {
        palette: [
          { hex: '#244B9C' },
          { hex: '#1976D2' },
          { hex: '#10B981' },
          { hex: '#EF4444' },
          { hex: '#F0F4F8', border: true },
        ],
        primaryBtn: {
          label: 'Primary Action',
          bg: '#244B9C',
          text: '#FFFFFF',
        },
        secondaryBtn: {
          label: 'Secondary Action',
          border: '#244B9C',
          text: '#244B9C',
        },
        typography: {
          fontName: 'League Spartan & Sans',
          sample:
            'Every component is constructed on a 4px layout grid with high contrast typography, accessible states, and unified visual rhythm across all interactive touchpoints.',
        },
      };
  }
}


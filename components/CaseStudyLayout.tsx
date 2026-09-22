import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DualMockup, BrowserMockup, DeviceMockup } from '@/components/DeviceMockup';
import DesignProcessDiagram from '@/components/DesignProcessDiagram';
import DesignSystemShowcase from '@/components/DesignSystemShowcase';
import MidFidWireframeStrip from '@/components/MidFidWireframeStrip';
import type { Project } from '@/data/projects';

interface CaseStudyLayoutProps {
  project: Project;
}

export default function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <article
      className="case-study-page"
      style={{
        ['--project-accent' as any]: project.accentColor,
        ['--project-accent-rgb' as any]: project.accentRgb,
      }}
    >
      {/* ── Editorial Header ── */}
      <header className="case-header">
        <div className="case-header-inner">
          <Link href="/" className="case-back-link">
            <span className="back-arrow">←</span> Back to selected work
          </Link>

          <div className="case-header-content">
            <div className="case-badge-pill">
              <span className="case-badge-dot" />
              <span className="case-badge-text">{project.badgeText}</span>
            </div>

            <h1 className="case-title">{project.title}</h1>
            <p className="case-subtitle">
              <span className="slash">//</span> {project.subtitle.replace('//', '').trim()}
            </p>

            <p className="case-lead-desc">{project.description}</p>
          </div>

          {/* Metadata Card */}
          <div className="case-meta-card">
            <div className="case-meta-item">
              <span className="case-meta-label">Role</span>
              <span className="case-meta-value">{project.role}</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-label">Timeline</span>
              <span className="case-meta-value">{project.timeline}</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-label">Tools</span>
              <span className="case-meta-value">{project.tools.join(', ')}</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-label">Deliverables</span>
              <span className="case-meta-value">{project.deliverables.join(', ')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero Mockup Showcase Stage ── */}
      <div className="case-hero-stage-wrap">
        <div className="case-hero-stage-container">
          <DualMockup
            browserSrc={project.browserImages[0]}
            phoneSrc={project.mobileImages[0]}
            secondarySrc={project.secondaryImage}
            alt={`${project.title} hero showcase`}
            accentColor={project.accentColor}
            accentRgb={project.accentRgb}
            gradientBg={project.gradientBg}
            badgeText={project.badgeText}
            deviceUrl={project.deviceUrl}
            deviceSubBadge={project.deviceSubBadge}
          />
        </div>
      </div>

      {/* ── Case Study Body ── */}
      <div className="case-body">

        {/* Overview Section */}
        <section className="case-section" aria-labelledby="overview-heading">
          <p className="case-section-label" id="overview-heading">Overview</p>
          <div className="case-overview-text">
            {project.caseStudy.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* ── Feature Interface Showcase (Above Problem Statement) ── */}
        {project.browserImages[1] && (
          <div className="case-feature-mockup-block">
            <div className="case-feature-mockup-frame">
              <BrowserMockup
                src={project.browserImages[1]}
                alt={`${project.title} — core workflow interface`}
                url={`${project.deviceUrl}/workflow`}
              />
            </div>
            <div className="case-feature-caption">
              <span className="caption-tag">Primary Workflow</span>
              <span className="caption-text">{project.title} &bull; Operational Interface &amp; Workflow Architecture</span>
            </div>
          </div>
        )}

        {/* Problem Statement */}
        <section className="case-section" aria-labelledby="problem-heading">
          <p className="case-section-label" id="problem-heading">Problem Statement</p>
          <div className="case-callout">
            <p>&ldquo;{project.caseStudy.problem}&rdquo;</p>
          </div>
        </section>

        {/* ── The Design Process Infographic ── */}
        <DesignProcessDiagram />

        {/* ── 1. Brainstorming & Research Discovery ── */}
        {project.caseStudy.brainstorming && (
          <section className="case-section" aria-labelledby="brainstorming-heading">
            <div className="case-section-header-block">
              <p className="case-section-label" id="brainstorming-heading">Brainstorming &amp; Discovery</p>
              <h2 className="case-section-title">{project.caseStudy.brainstorming.title}</h2>
              <p className="case-section-desc">{project.caseStudy.brainstorming.description}</p>
            </div>

            {/* Affinity Mapping Sticky Grid */}
            <div className="affinity-board-grid">
              {project.caseStudy.brainstorming.affinityGroups.map((group, idx) => {
                const tone = ['emerald', 'amber', 'rose', 'blue'][idx % 4];
                return (
                  <div
                    key={idx}
                    className={`insight-card card-${tone}`}
                  >
                    <div className="insight-header">
                      <span className="insight-pill">{group.tag}</span>
                      <span className="insight-index">0{idx + 1}</span>
                    </div>
                    <h3 className="insight-title">{group.theme}</h3>
                    <ul className="insight-list">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="insight-item">
                          <span className="insight-dot" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Key Takeaways */}
            {project.caseStudy.brainstorming.keyTakeaways && (
              <div className="brainstorm-takeaways-card">
                <div className="takeaways-header">
                  <span className="takeaways-badge">Core Hypotheses &amp; Principles</span>
                </div>
                <div className="takeaways-grid">
                  {project.caseStudy.brainstorming.keyTakeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="takeaway-item">
                      <span className="takeaway-num">0{tIdx + 1}</span>
                      <p className="takeaway-text">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ── 2. Information Architecture & User Flow ── */}
        {project.caseStudy.userFlow && (
          <section className="case-section" aria-labelledby="userflow-heading">
            <div className="case-section-header-block">
              <p className="case-section-label" id="userflow-heading">Information Architecture</p>
              <h2 className="case-section-title">{project.caseStudy.userFlow.title}</h2>
              <p className="case-section-desc">{project.caseStudy.userFlow.description}</p>
            </div>

            {/* Step-by-Step Interactive Workflow */}
            <div className="flow-steps-grid">
              {project.caseStudy.userFlow.steps.map((st, sIdx) => (
                <div key={sIdx} className="flow-step-card">
                  <div className="flow-step-top">
                    <span className="flow-step-num">{st.step}</span>
                    <span className="flow-step-role">{st.role}</span>
                  </div>
                  <h3 className="flow-step-action">{st.action}</h3>
                  <p className="flow-step-outcome">{st.outcome}</p>
                </div>
              ))}
            </div>

            {/* Before vs After Impact Metric Matrix */}
            {project.caseStudy.userFlow.comparison && (
              <div className="flow-comparison-wrap">
                <h3 className="comparison-title">Workflow Efficiency Delta (Before vs. After)</h3>
                <div className="comparison-grid">
                  {project.caseStudy.userFlow.comparison.map((c, cIdx) => (
                    <div key={cIdx} className="comparison-card">
                      <span className="comparison-metric-name">{c.metric}</span>
                      <div className="comparison-values">
                        <div className="comparison-before">
                          <span className="comp-label">Legacy</span>
                          <span className="comp-val strike">{c.before}</span>
                        </div>
                        <span className="comp-arrow">→</span>
                        <div className="comparison-after">
                          <span className="comp-label">Redesigned</span>
                          <span className="comp-val highlight">{c.after}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ── 3. Wireframing & Low-Fidelity Exploration ── */}
        {project.caseStudy.wireframing && (
          <section className="case-section" aria-labelledby="wireframing-heading">
            <div className="case-section-header-block">
              <p className="case-section-label" id="wireframing-heading">Wireframing &amp; Exploration</p>
              <h2 className="case-section-title">{project.caseStudy.wireframing.title}</h2>
              <p className="case-section-desc">{project.caseStudy.wireframing.summary}</p>
            </div>

            {/* Concept Exploration Cards */}
            <div className="concepts-grid">
              {project.caseStudy.wireframing.concepts.map((concept, cIdx) => (
                <div
                  key={cIdx}
                  className={`concept-card concept-status-${concept.status.toLowerCase()}`}
                >
                  <div className="concept-header">
                    <span className={`concept-status-pill status-${concept.status.toLowerCase()}`}>
                      {concept.status}
                    </span>
                    <h3 className="concept-title">{concept.name}</h3>
                  </div>
                  <p className="concept-approach">{concept.approach}</p>
                  <div className="concept-pros-cons">
                    <div className="pros-block">
                      <span className="pro-label">✓ Pros:</span>
                      <span className="pro-text">{concept.pros}</span>
                    </div>
                    <div className="cons-block">
                      <span className="con-label">✗ Trade-off:</span>
                      <span className="con-text">{concept.cons}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Architectural Decisions */}
            {project.caseStudy.wireframing.keyDecisions && (
              <div className="decisions-container">
                <h3 className="decisions-title">Key Architectural Design Decisions</h3>
                <div className="decisions-grid">
                  {project.caseStudy.wireframing.keyDecisions.map((dec, dIdx) => (
                    <div key={dIdx} className="decision-card">
                      <span className="decision-area">{dec.area}</span>
                      <h4 className="decision-header">{dec.decision}</h4>
                      <p className="decision-rationale">{dec.rationale}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ── Mid-Fidelity Wireframes Strip ── */}
        <MidFidWireframeStrip accentColor={project.accentColor} />

        {/* ── Design System & UI Foundation ── */}
        <DesignSystemShowcase project={project} />

        {/* Design Process */}
        <section className="case-section" aria-labelledby="process-heading">
          <p className="case-section-label" id="process-heading">Design Process</p>
          <div className="case-process-list">
            {project.caseStudy.process.map((step, i) => (
              <div key={i} className="case-process-item">
                <div className="process-header">
                  <span className="process-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="process-heading">{step.heading}</h2>
                </div>
                <p className="process-body">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screens & Wireframes Gallery */}
        {project.browserImages.length > 2 && (
          <section className="case-section" aria-labelledby="screens-heading">
            <p className="case-section-label" id="screens-heading">Screens &amp; Interface Layouts</p>
            <div className="case-screen-cards-grid">
              {project.browserImages.slice(2, 6).map((src, i) => (
                <div key={i} className="case-screen-card">
                  <div className="screen-card-header">
                    <span className="screen-dot" />
                    <span className="screen-dot" />
                    <span className="screen-dot" />
                    <span className="screen-tag">View {i + 1}</span>
                  </div>
                  <div className="screen-card-media">
                    <Image
                      src={src}
                      alt={`${project.title} — screen ${i + 3}`}
                      width={720}
                      height={450}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 4. Mobile Experience Showcase (SIDE BY SIDE) ── */}
        {project.mobileImages.length > 0 && (
          <section className="case-section case-mobile-section" aria-labelledby="mobile-heading">
            <div className="case-section-header-block">
              <div className="mobile-header-row">
                <p className="case-section-label" id="mobile-heading">Mobile Experience</p>
                <span className="mobile-count-pill">{project.mobileImages.length} Responsive Screens</span>
              </div>
              <h2 className="case-section-title">Field &amp; Handheld Touch Interface</h2>
              <p className="case-section-desc">
                Designed for one-handed operation, rapid touch triage, and high-contrast outdoor visibility. Side-by-side view demonstrates primary workflows and contextual menus.
              </p>
            </div>

            {/* Side-by-Side 4 Mobile Mockups (Clean, simple, no background) */}
            <div className="case-mobile-stage">
              <div className="case-mobile-row">
                {project.mobileImages.slice(0, 4).map((src, i) => (
                  <div key={`m-${i}`} className="case-mobile-col">
                    <div className="case-mobile-device-box">
                      <DeviceMockup
                        type="iphone"
                        src={src}
                        alt={`${project.title} — mobile screen ${i + 1}`}
                      />
                    </div>
                    <div className="case-mobile-caption">
                      <span className="case-mobile-screen-num">Screen 0{i + 1}</span>
                      <span className="case-mobile-screen-title">
                        {i === 0
                          ? 'Dashboard & Daily Pulse'
                          : i === 1
                          ? 'Quick Action & Slide Menu'
                          : i === 2
                          ? 'Detailed Inspection Form'
                          : 'Operational Settings'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* High-Fidelity Desktop Mockup Gallery */}
        {project.browserImages.length > 6 && (
          <section className="case-section" aria-labelledby="mockups-heading">
            <p className="case-section-label" id="mockups-heading">High-Fidelity Desktop Modules</p>
            <div className="case-mockup-showcase">
              {project.browserImages.slice(6).map((src, i) => (
                <div key={i} className="case-mockup-desktop-item">
                  <BrowserMockup
                    src={src}
                    alt={`${project.title} — final screen ${i + 7}`}
                    url={`${project.deviceUrl}/screen-${i + 7}`}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outcome & Impact */}
        <section className="case-section" aria-labelledby="outcome-heading">
          <p className="case-section-label" id="outcome-heading">Outcome &amp; Impact</p>
          <p className="outcome-summary">{project.caseStudy.outcome.summary}</p>

          {project.caseStudy.outcome.metrics && (
            <div className="case-metrics-grid">
              {project.caseStudy.outcome.metrics.map((m) => (
                <div key={m.label} className="metric-card">
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* ── Next / Prev Navigation ── */}
      <footer className="case-nav-row">
        <Link href="/" className="case-nav-link">
          <span className="nav-direction">← Back</span>
          <span className="nav-title">All Projects</span>
        </Link>
        {project.nextSlug && (
          <Link href={`/case-studies/${project.nextSlug}`} className="case-nav-link next">
            <span className="nav-direction">Next Project →</span>
            <span className="nav-title">{project.nextTitle}</span>
          </Link>
        )}
      </footer>
    </article>
  );
}

import React from 'react';
import Link from 'next/link';
import AiPromoCard from '@/components/AiPromoCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import { FEATURED_CASE_STUDIES, SECONDARY_PROJECTS } from '@/data/projects';

export default function WorkPage() {
  return (
    <div className="content-container">
      {/* Page Title */}
      <section className="hero-lead-box">
        <h1 className="page-title">
          Work <span className="lead-emoji">✨</span>
        </h1>
        <p className="lead">
          Selected case studies covering product design, enterprise design systems, data visualization, and rapid AI-assisted prototyping.
        </p>
      </section>

      {/* AI Promo Card */}
      <AiPromoCard />

      {/* Featured Studies Grid */}
      <section className="studies-grid">
        <div className="case-study-two-col">
          <CaseStudyCard study={FEATURED_CASE_STUDIES[0]} />
          <CaseStudyCard study={FEATURED_CASE_STUDIES[1]} />
        </div>

        <CaseStudyCard study={FEATURED_CASE_STUDIES[2]} />

        <div className="case-study-two-col">
          <CaseStudyCard study={FEATURED_CASE_STUDIES[3]} />
          <CaseStudyCard study={FEATURED_CASE_STUDIES[4]} />
        </div>
      </section>

      {/* Secondary & Client Projects Blockout */}
      <section className="blockout-section">
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '8px' }}>
            Additional Projects &amp; Explorations
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
            Curated client projects, mobile apps, graphic design campaigns, and UX design sprints.
          </p>
        </div>

        <ol className="secondary-projects-list">
          {SECONDARY_PROJECTS.map((project) => (
            <li key={project.id} className="secondary-project-item">
              <Link href={`/work/${project.slug}`} title={project.title}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <strong className="title">{project.title}</strong>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)' }}>{project.year}</span>
                </div>
                <p>{project.description}</p>
                <span style={{ display: 'inline-block', marginTop: '8px', fontSize: '11px', background: 'rgba(0,0,0,0.04)', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                  {project.tag}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

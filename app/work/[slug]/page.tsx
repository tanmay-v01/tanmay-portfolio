import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FEATURED_CASE_STUDIES, SECONDARY_PROJECTS } from '@/data/projects';
import ProjectMockup from '@/components/ProjectMockup';
import Colophon from '@/components/Colophon';
import NextProject from '@/components/NextProject';
import AnchorHeading from '@/components/AnchorNav';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const featuredParams = FEATURED_CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
  const secondaryParams = SECONDARY_PROJECTS.map((proj) => ({
    slug: proj.slug,
  }));
  return [...featuredParams, ...secondaryParams];
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = FEATURED_CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    // Check if it's a secondary project
    const sec = SECONDARY_PROJECTS.find((p) => p.slug === slug);
    if (!sec) {
      notFound();
    }

    return (
      <div className="content-container">
        <div style={{ marginBottom: '24px' }}>
          <Link href="/work" style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--accent-purple)' }}>
            &larr; Back to all work
          </Link>
        </div>
        <h1 className="page-title">{sec.title}</h1>
        <div className="breakout">
          <p><strong>Overview:</strong> {sec.description}</p>
        </div>
        <p className="lead">
          This project was executed during {sec.year} focusing on {sec.tag}.
          It involved user journey wireframing, high-fidelity UI design in Figma, and cross-functional handoff.
        </p>
        <ProjectMockup type="ai-design-workflow" />
        <NextProject slug="enterprise-inbox" title="Enterprise Workspace & Inbox Experience" colorScheme="yellow" />
      </div>
    );
  }

  return (
    <div className="content-container">
      {/* Breadcrumb Navigation */}
      <div style={{ marginBottom: '28px' }}>
        <Link href="/work" style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--accent-purple)', textDecoration: 'none' }}>
          &larr; Back to all work
        </Link>
      </div>

      {/* Case Study Title */}
      <h1 className="page-title">{study.title}</h1>

      {/* Summary Breakout Box */}
      <div className="breakout">
        <h3>Summary</h3>
        <p>{study.summary}</p>
      </div>

      {/* Overview Paragraphs */}
      {study.overview.map((paragraph, index) => (
        <p key={index} className={index === 0 ? 'lead' : ''}>
          {paragraph}
        </p>
      ))}

      {/* Key Impact Metrics Grid */}
      <div className="project-metrics-grid">
        {study.metrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Interactive Project UI Mockup */}
      <ProjectMockup type={study.id as any} />

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '48px 0 36px 0' }} />

      {/* Section 1: The Core Challenge */}
      <AnchorHeading id="challenge" title="The Core Challenge" emoji="🎯" />
      {study.challenge.map((pt, i) => (
        <p key={i}>{pt}</p>
      ))}

      {/* Section 2: Solution & Architecture */}
      <AnchorHeading id="solution" title="Solution & Ergonomics" emoji="💡" />
      {study.solution.map((pt, i) => (
        <p key={i}>{pt}</p>
      ))}

      {/* Section 3: Design System & Tokens */}
      <AnchorHeading id="design-system" title="Design Tokens & Component Craft" emoji="📐" />
      <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '24px' }}>
        {study.designSystemPoints.map((pt, i) => (
          <li key={i} style={{ marginBottom: '8px', lineHeight: '24px' }}>{pt}</li>
        ))}
      </ul>

      {/* Collapsible Colophon */}
      <Colophon study={study} />

      {/* Next Project Bottom Navigation */}
      <NextProject
        slug={study.nextProjectSlug}
        title={study.nextProjectTitle}
        colorScheme={study.nextProjectColor}
      />
    </div>
  );
}

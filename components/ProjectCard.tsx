'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { DualMockup } from '@/components/DeviceMockup';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const padded = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={cardRef}
      className={`project-card${visible ? ' visible' : ''}${!isEven ? ' reverse-layout' : ''}`}
      id={`project-${project.slug}`}
      style={{
        ['--project-accent' as any]: project.accentColor,
        ['--project-accent-rgb' as any]: project.accentRgb,
      }}
    >
      <div className="project-card-inner">
        {/* ── Visual Stage Column ── */}
        <div className="project-visual-col">
          <Link
            href={`/case-studies/${project.slug}`}
            className="project-stage-link"
            aria-label={`View ${project.title} case study`}
          >
            <DualMockup
              browserSrc={project.browserImages[0]}
              phoneSrc={project.mobileImages[0]}
              secondarySrc={project.secondaryImage}
              alt={project.title}
              accentColor={project.accentColor}
              accentRgb={project.accentRgb}
              gradientBg={project.gradientBg}
              badgeText={project.badgeText}
              deviceUrl={project.deviceUrl}
              deviceSubBadge={project.deviceSubBadge}
            />
          </Link>
        </div>

        {/* ── Editorial Content Column ── */}
        <div className="project-text-col">
          <div className="project-meta-pill-row">
            <span className="project-num-pill">{padded} / 04</span>
            <span className="project-category-label">{project.badgeText}</span>
          </div>

          <h2 className="project-title">
            <Link href={`/case-studies/${project.slug}`} className="project-title-link">
              {project.title}
            </Link>
          </h2>

          <p className="project-subtitle">
            <span className="slash">//</span>
            {project.subtitle.replace('//', '').trim()}
          </p>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="project-cta-wrap">
            <Link
              href={`/case-studies/${project.slug}`}
              className="project-cta-btn"
              id={`project-cta-${project.slug}`}
            >
              <span>Explore Case Study</span>
              <span className="arrow-circle" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

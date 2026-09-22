'use client';

import React from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/data/projects';
import ProjectMockup from './ProjectMockup';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`case-card ${study.colorScheme}`}
      title={study.subtitle}
    >
      <div className="thumb">
        <div style={{ width: '100%', transform: 'scale(0.95)', transformOrigin: 'top center' }}>
          <ProjectMockup type={study.id as any} />
        </div>
      </div>

      <div className="description">
        <p className="title">{study.title}</p>
        <p className="desc">{study.subtitle}</p>
        <p className="link">
          <span>View Case Study &rarr;</span>
        </p>
      </div>
    </Link>
  );
}

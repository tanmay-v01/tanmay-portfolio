'use client';

import React from 'react';
import { CaseStudy } from '@/data/projects';

interface ColophonProps {
  study: CaseStudy;
}

export default function Colophon({ study }: ColophonProps) {
  return (
    <details className="bts" open>
      <summary>Behind the work</summary>
      <div className="bts-content">
        <dl className="colophon-grid">
          <div>
            <dt>Role</dt>
            <dd>{study.role}</dd>
          </div>
          <div>
            <dt>Company</dt>
            <dd>{study.company}</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{study.date} ({study.duration})</dd>
          </div>
          <div>
            <dt>Discipline</dt>
            <dd>{study.category}</dd>
          </div>
        </dl>

        {study.team && study.team.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <dt style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)', marginBottom: '8px' }}>Project Collaborators</dt>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {study.team.map((member: any) => (
                <div key={member.name} style={{ fontSize: '13px', background: 'rgba(0,0,0,0.03)', padding: '6px 12px', borderRadius: '6px' }}>
                  <strong>{member.role}:</strong> {member.name}
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>What I wanted to show you&hellip;</h4>
            <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--text-muted)', margin: 0 }}>
              {study.takeaways.whatIWantedToShow}
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>What I learned&hellip;</h4>
            <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--text-muted)', margin: 0 }}>
              {study.takeaways.whatILearned}
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}

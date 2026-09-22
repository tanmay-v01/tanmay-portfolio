import React from 'react';
import Link from 'next/link';
import { SPEAKING_PRESS_ITEMS } from '@/data/testimonials';

export default function PressPage() {
  return (
    <div className="content-container">
      {/* Header */}
      <section className="hero-lead-box">
        <h1 className="page-title">
          Speaking, Press &amp; Recognition <span className="lead-emoji">🎙️</span>
        </h1>
        <p className="lead">
          Workshops, community mentoring, design talks, and public discussions about UI/UX design systems and modern web prototyping.
        </p>
      </section>

      {/* Press items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', margin: '40px 0' }}>
        {SPEAKING_PRESS_ITEMS.map((item) => (
          <div
            key={item.title}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '28px 32px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>
                {item.type} &bull; {item.event}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                {item.date}
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--text-main)', marginBottom: '8px' }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '24px', color: 'var(--text-muted)', margin: 0 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Speaking Inquiry Breakout */}
      <div className="breakout" style={{ marginTop: '50px' }}>
        <h3>Want me to speak or run a workshop?</h3>
        <p style={{ marginBottom: '16px' }}>
          I love sharing actionable insights on Figma design systems, developer handoff practices, and rapid prototyping with design teams and student communities.
        </p>
        <a href="mailto:tanmayvaity7@gmail.com" className="btn-primary">
          Get in Touch &rarr;
        </a>
      </div>
    </div>
  );
}

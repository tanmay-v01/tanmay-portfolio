import React from 'react';
import Link from 'next/link';
import AnchorHeading from '@/components/AnchorNav';
import {
  WORK_EXPERIENCE,
  CAREER_TIMELINE,
  EDUCATION_LIST,
  CERTIFICATIONS_LIST,
  SKILL_CATEGORIES,
  PERSONAL_INFO
} from '@/data/experience';
import { TESTIMONIALS } from '@/data/testimonials';

export default function CVPage() {
  return (
    <div className="cv-page" style={{ paddingTop: 'calc(68px + 48px)', paddingBottom: '120px', minHeight: '100vh', background: 'radial-gradient(circle 900px at 50% 0px, rgba(245, 243, 255, 0.35) 0%, rgba(240, 249, 255, 0.25) 45%, transparent 80%)' }}>
      <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Group */}
        <div className="cv-header-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', paddingBottom: '24px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(52, 199, 89, 0.1)', border: '1px solid rgba(52, 199, 89, 0.25)', borderRadius: '100px', marginBottom: '12px', fontSize: '11px', fontWeight: '700', color: '#1b7a38', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34c759', display: 'inline-block' }}></span>
              Available for Senior UI/UX &amp; Product Roles
            </div>
            <h1 className="page-title" style={{ marginBottom: '6px', fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: '800' }}>{PERSONAL_INFO.name}</h1>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: '600', color: 'var(--accent-purple)', margin: 0 }}>
              Lead UI/UX Designer &bull; Scalable Design Systems &bull; Enterprise SaaS
            </p>
            <span style={{ fontSize: '13px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              Virar (West), Mumbai MMR, Maharashtra &bull; 3+ Years Proven Industry Experience
            </span>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignSelf: 'center' }}>
            <a
              href="/Tanmay_Vaity_Resume.pdf"
              download="Tanmay_Vaity_UI_UX_Designer_Resume.pdf"
              className="button primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                fontSize: '13px',
                fontWeight: '700',
                textDecoration: 'none',
                borderRadius: '8px'
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PDF Resume
            </a>
            <a
              href="/resume-print.html"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 18px',
                fontSize: '13px',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '8px'
              }}
            >
              Printable View ↗
            </a>
          </div>
        </div>

        {/* Impact Metric Ribbon (Updated to 15+ Products Shipped) */}
        <div className="cv-impact-ribbon" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '14px',
          margin: '16px 0 36px 0'
        }}>
          <div style={{ background: 'var(--pastel-blue-bg)', border: '1px solid var(--pastel-blue-border)', borderRadius: '12px', padding: '16px 18px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dim)', display: 'block' }}>Proven Portfolio</span>
            <strong style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', display: 'block', margin: '4px 0 2px' }}>15+ Products</strong>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Enterprise SaaS, IoT, POS, CRM shipped</span>
          </div>

          <div style={{ background: 'var(--pastel-purple-bg)', border: '1px solid var(--pastel-purple-border)', borderRadius: '12px', padding: '16px 18px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dim)', display: 'block' }}>Speed &amp; Triage</span>
            <strong style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', display: 'block', margin: '4px 0 2px' }}>83% Latency Cut</strong>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Field workflows reduced from 12s to 2s</span>
          </div>

          <div style={{ background: 'var(--pastel-green-bg)', border: '1px solid var(--pastel-green-border)', borderRadius: '12px', padding: '16px 18px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dim)', display: 'block' }}>Design Tokens</span>
            <strong style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', display: 'block', margin: '4px 0 2px' }}>60+ Semantic Tokens</strong>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Standardized across 100+ screens</span>
          </div>

          <div style={{ background: 'rgba(255, 149, 0, 0.08)', border: '1px solid rgba(255, 149, 0, 0.25)', borderRadius: '12px', padding: '16px 18px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dim)', display: 'block' }}>Global Credentials</span>
            <strong style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', display: 'block', margin: '4px 0 2px' }}>NN/g &amp; HFI CUA™</strong>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Top usability accreditations</span>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px 32px',
          padding: '16px 20px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '10px',
          marginBottom: '40px',
          fontSize: '13px'
        }}>
          <div>
            <span style={{ color: 'var(--text-dim)', marginRight: '6px' }}>Email:</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>
              {PERSONAL_INFO.email}
            </a>
          </div>
          <div>
            <span style={{ color: 'var(--text-dim)', marginRight: '6px' }}>Phone:</span>
            <a href={`tel:${PERSONAL_INFO.phone}`} style={{ color: 'var(--text-main)', fontWeight: '500' }}>
              {PERSONAL_INFO.phone}
            </a>
          </div>
          <div>
            <span style={{ color: 'var(--text-dim)', marginRight: '6px' }}>Location:</span>
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <div>
            <span style={{ color: 'var(--text-dim)', marginRight: '6px' }}>LinkedIn:</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>
              linkedin.com/in/tanmay-vaity-544001265
            </a>
          </div>
        </div>

        {/* 1. Professional Summary */}
        <div style={{ marginBottom: '48px' }}>
          <AnchorHeading id="intro" title="Professional Summary" emoji="👋🏼" />
          <p className="lead" style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--text-main)', margin: '14px 0 10px 0' }}>
            Innovative, systems-driven <strong>Senior UI/UX Designer</strong> with 3+ years of experience designing scalable digital products, enterprise SaaS dashboards, and high-conversion mobile applications.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--color-muted)', margin: 0 }}>
            Proven expertise in quantitative usability testing, tokenized design systems in Figma, accessibility governance (WCAG 2.1 AA), and seamless engineering handoffs. Experienced in turning complex telemetry and fragmented business requirements into clean, thumb-friendly interfaces that drive operational efficiency.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '40px 0' }} />

        {/* 2. Core Skills & Tools */}
        <div style={{ marginBottom: '48px' }}>
          <AnchorHeading id="skills" title="Core Skills &amp; Tools" emoji="🛠️" />
          <div className="cv-skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', margin: '20px 0 0 0' }}>
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '18px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '12px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '6px' }}>
                  {cat.title}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0, padding: 0 }}>
                  {cat.items.map((item) => (
                    <li key={item} style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '40px 0' }} />

        {/* 3. Education & Certifications */}
        <div style={{ marginBottom: '48px' }}>
          <AnchorHeading id="education" title="Education &amp; Executive Certifications" emoji="🎓" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', margin: '20px 0 0 0' }}>
            {/* Certifications */}
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '22px' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: '700', marginBottom: '14px', color: 'var(--text-main)' }}>
                Executive Certifications &amp; Accreditations
              </h4>
              {CERTIFICATIONS_LIST.map((cert) => (
                <div key={cert.name} style={{ marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                  <strong style={{ fontSize: '13px', display: 'block', color: 'var(--text-main)' }}>{cert.name}</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>{cert.issuer}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{cert.year}</span>
                </div>
              ))}
            </div>

            {/* Academic Education */}
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '22px' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: '700', marginBottom: '14px', color: 'var(--text-main)' }}>
                Academic Education
              </h4>
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.degree} style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                  <strong style={{ fontSize: '13px', display: 'block', color: 'var(--text-main)' }}>{edu.degree}</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>{edu.institution}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{edu.board} &bull; {edu.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '40px 0' }} />

        {/* 4. Career Overview Table */}
        <div style={{ marginBottom: '48px' }}>
          <AnchorHeading id="career" title="Career At A Glance" emoji="📊" />
          <ul style={{ listStyle: 'none', margin: '20px 0 0 0', padding: 0, border: '1px solid var(--border-subtle)', borderRadius: '12px', overflow: 'hidden' }}>
            {CAREER_TIMELINE.map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  padding: '14px 20px',
                  borderBottom: i === CAREER_TIMELINE.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                  background: i % 2 === 0 ? 'var(--bg-page)' : 'rgba(0,0,0,0.01)',
                  fontSize: '14px'
                }}
              >
                <span style={{ width: '130px', fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', fontWeight: 'bold' }}>
                  {item.year}
                </span>
                <span style={{ flex: 1, color: 'var(--text-main)' }}>
                  <strong>{item.role}</strong> &mdash; {item.company}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '40px 0' }} />

        {/* 5. Testimonials ("Nice Words") */}
        <div style={{ marginBottom: '48px' }}>
          <AnchorHeading id="references" title="Nice Words" emoji="💬" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', margin: '20px 0 0 0' }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{ background: 'var(--card-yellow-bg)', border: '1px solid var(--card-yellow-border)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ fontSize: '13px', lineHeight: '20px', fontStyle: 'italic', marginBottom: '14px' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text-main)' }}>{t.name}</strong>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{t.role}, {t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '40px 0' }} />

        {/* 6. Featured Products & Deliverables (Moved to the VERY LAST, kept clean, simple, and minimal) */}
        <div style={{ marginBottom: '40px' }}>
          <AnchorHeading id="experience" title="Featured Products &amp; Deliverables" emoji="✨" />
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '8px 0 24px 0' }}>
            Key product initiatives shipped across enterprise IoT, luxury retail POS, executive business intelligence, and sports operations:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {WORK_EXPERIENCE.map((job) => (
              <div
                key={job.company}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '22px 24px',
                  transition: 'border-color 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700' }}>
                    {job.role} <span style={{ color: 'var(--text-dim)', margin: '0 6px' }}>&bull;</span> <span style={{ color: 'var(--accent-purple)' }}>{job.company}</span>
                  </h4>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                    {job.period} &bull; {job.location}
                  </span>
                </div>

                <ul style={{ margin: '12px 0 16px 20px', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {job.description.map((bullet, idx) => (
                    <li key={idx} style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--color-text)' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {job.skills.map((skill) => (
                    <span key={skill} className="skill-pill" style={{ fontSize: '11px', padding: '3px 9px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

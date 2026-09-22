import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Tanmay Vaity',
  description:
    'Tanmay Vaity is a UI/UX Designer and Digital Product Builder based in Mumbai, India, specializing in enterprise SaaS, design systems, and responsive product interfaces.',
};

const CAPABILITIES = [
  {
    num: '01',
    title: 'Design Systems & UI Architecture',
    desc: 'Structuring scalable Figma variable libraries, semantic design tokens, WCAG 2.1 AA accessible contrast scales, and auto-layout component kits that bridge design directly to front-end code.',
    tags: ['Figma Variables', 'Token Systems', 'WCAG AA', 'Component Kits'],
  },
  {
    num: '02',
    title: 'Enterprise & SaaS Dashboards',
    desc: 'Transforming high-density operational workflows, IoT telemetry, and multi-tier analytics into clear, actionable interfaces with intuitive progressive disclosure and fast decision pathways.',
    tags: ['Information Architecture', 'Data Visualization', 'Workflow Optimization'],
  },
  {
    num: '03',
    title: 'Mobile & Responsive Product UX',
    desc: 'Designing thumb-friendly, touch-optimized mobile interfaces for iOS and Android, focusing on rapid one-handed data entry, offline sync resilience, and micro-interaction responsiveness.',
    tags: ['Touch Ergonomics', 'iOS & Android', 'Micro-Interactions'],
  },
  {
    num: '04',
    title: 'User Research & Usability Testing',
    desc: 'Uncovering latent customer pain points through contextual user interviews, heuristic evaluations, FigJam journey mapping, and iterative task-completion usability benchmarking.',
    tags: ['User Interviews', 'Journey Mapping', 'Usability Audits'],
  },
];

const SKILLS = [
  { icon: '✦', label: 'Figma (Variables & Auto-Layout)', tone: 'purple' },
  { icon: '✦', label: 'Design Systems', tone: 'blue' },
  { icon: '✦', label: 'Interactive Prototyping', tone: 'emerald' },
  { icon: '✦', label: 'Adobe XD', tone: 'amber' },
  { icon: '✦', label: 'Photoshop', tone: 'blue' },
  { icon: '✦', label: 'Illustrator', tone: 'amber' },
  { icon: '✦', label: 'User Research', tone: 'emerald' },
  { icon: '✦', label: 'Wireframing', tone: 'purple' },
  { icon: '✦', label: 'Usability Testing', tone: 'emerald' },
  { icon: '✦', label: 'HTML5 & CSS3', tone: 'amber' },
  { icon: '✦', label: 'JavaScript', tone: 'blue' },
  { icon: '✦', label: 'Responsive Design', tone: 'purple' },
  { icon: '✦', label: 'Information Architecture', tone: 'blue' },
  { icon: '✦', label: 'Developer Handoff', tone: 'emerald' },
  { icon: '✦', label: 'Agile & Sprint Delivery', tone: 'amber' },
  { icon: '✦', label: 'Accessibility (a11y)', tone: 'purple' },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Science (B.Sc.) in Computer Science & Interaction Design',
    school: 'University of Mumbai',
    year: '2021 — 2024 • Focus on HCI, Systems Architecture & Usability Engineering',
  },
  {
    degree: 'Postgraduate Specialization in Human-Computer Interaction (HCI)',
    school: 'Interaction Design Foundation (IxDF) & Design Lab',
    year: '2023 — 2024 • Cognitive Ergonomics, Perceptual UI Psychology & Information Architecture',
  },
  {
    degree: 'Foundational Sciences (PCMB & Applied IT)',
    school: 'Viva College of Science',
    year: '2019 — 2021 • Mathematics, Computer Science & Applied Logic Systems',
  },
];

const CERTIFICATIONS = [
  {
    degree: 'UX Master Certified (UXMC) — Interaction Design & Research',
    school: 'Nielsen Norman Group (NN/g)',
    year: 'Credential ID: UXMC-49281 • Industry Gold Standard for UX Architecture',
  },
  {
    degree: 'Certified Usability Analyst (CUA™)',
    school: 'Human Factors International (HFI)',
    year: 'Credential ID: CUA-88314 • Institutional User-Centered Analysis & Perceptual Science',
  },
  {
    degree: 'Enterprise Design Thinking Co-Creator & Systems Practitioner',
    school: 'IBM Design Systems',
    year: 'Enterprise Credential • Scaled Design Systems & Human-Centered Strategy',
  },
  {
    degree: 'Google UX Design Professional Specialization',
    school: 'Google Career Certificates',
    year: 'Google Certified • End-to-End Design Sprints & WCAG 2.2 Accessibility',
  },
  {
    degree: 'Advanced Multi-Brand Design Systems & Component Governance',
    school: 'Memorisely',
    year: 'Executive Cohort • Design Tokens, Multi-Platform Governance & Engineering Handoff',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">

        {/* Hero */}
        <div className="about-hero-grid">
          <div>
            <h1 className="about-heading">
              <span className="about-word-designer">Designer.</span><br />
              <span className="about-word-builder">Builder.</span><br />
              <span className="about-word-solver">Problem Solver.</span>
            </h1>
            <div className="about-body">
              <p>
                I&apos;m <strong>Tanmay Vaity</strong> — a UI/UX Designer and Digital Product
                Builder based in Mumbai. I design intuitive, high-impact digital
                experiences at the intersection of deep user empathy, systematic
                thinking, and visual craft.
              </p>
              <p>
                Across enterprise SaaS, industrial safety tech, luxury retail, and sports
                management platforms, I believe that great design isn&apos;t about aesthetics
                alone — it&apos;s about solving real human problems with clarity, speed, and elegance.
              </p>
              <p>
                When I&apos;m not designing, you&apos;ll find me analyzing modern interaction patterns,
                sketching UI ideas, playing football, or exploring the bleeding edge of creative technology.
              </p>
            </div>
          </div>

          <div className="about-avatar-column">
            <div className="about-avatar-stage">
              {/* Dynamic Speech Bubble */}
              <div className="about-speech-bubble" aria-label="Status: Available for product roles">
                <span className="about-speech-dot" aria-hidden="true" />
                <span>It&apos;s me! 👋 UI/UX &amp; Systems Designer</span>
              </div>

              {/* Animated Avatar Card */}
              <div className="about-avatar-card">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/videos/about_avatar.webp"
                  className="about-avatar-video"
                  aria-label="Tanmay Vaity — Animated UI/UX designer waving, smiling and pointing toward his portfolio"
                >
                  <source src="/videos/about_avatar.webm" type="video/webm" />
                  <source src="/videos/about_avatar.mp4" type="video/mp4" />
                </video>
                <div className="about-avatar-ground-shadow" aria-hidden="true" />
              </div>

              {/* Action Buttons */}
              <div className="about-avatar-actions">
                <a
                  href="/Tanmay_Vaity_Resume.pdf"
                  download
                  className="btn-primary about-resume-btn"
                  id="about-download-resume"
                >
                  Download Resume ↓
                </a>
                <Link
                  href="/gallery"
                  className="btn-ghost about-gallery-btn"
                  id="about-explore-gallery"
                >
                  Explore Works ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="about-section">
          <p className="about-section-label">Design Disciplines &amp; Capabilities</p>
          <div className="capabilities-grid">
            {CAPABILITIES.map((cap) => (
              <div key={cap.num} className="capability-card">
                <span className="capability-num">{cap.num}</span>
                <h3 className="capability-title">{cap.title}</h3>
                <p className="capability-desc">{cap.desc}</p>
                <div className="capability-tags">
                  {cap.tags.map((t) => (
                    <span key={t} className="capability-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="about-section">
          <p className="about-section-label">Core Skills &amp; Tools</p>
          <div className="skills-grid">
            {SKILLS.map(({ icon, label, tone }) => (
              <div key={label} className={`skill-item tone-${tone}`}>
                <span className="skill-icon">{icon}</span>
                <span className="skill-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="about-section">
          <p className="about-section-label">Academic Education</p>
          <div className="education-grid">
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="edu-card">
                <div className="edu-badge-row">
                  <span className="edu-issuer-tag">{edu.school}</span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-year">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="about-section">
          <p className="about-section-label">Executive Certifications &amp; Accreditations</p>
          <div className="education-grid">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.degree} className="edu-card cert-card">
                <div className="edu-badge-row">
                  <span className="edu-issuer-tag cert-tag">{cert.school}</span>
                </div>
                <h3 className="edu-degree">{cert.degree}</h3>
                <p className="edu-year">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="about-section" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Want to work together?
          </p>
          <Link href="/contact" className="btn-primary" id="about-contact-cta">
            Get In Touch →
          </Link>
        </div>

      </div>
    </div>
  );
}

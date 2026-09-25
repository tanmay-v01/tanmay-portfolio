'use client';

import React from 'react';
import Link from 'next/link';
import useTypingEffect from '@/hooks/useTypingEffect';

export default function Hero() {
  const { displayText, currentColor, currentKey } = useTypingEffect();

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-grid">
        {/* ── Text Column ── */}
        <div className="hero-text-col">
          <p className="hero-label">UI/UX Designer &amp; Frontend Developer</p>

          <h1 className="hero-heading">
            I&apos;m Tanmay —<br />
            a UI/UX Designer <span className="hero-loves-wrap">who loves to</span>{' '}
            <span className="hero-typing-inline" aria-live="polite">
              <span
                className={`hero-typing-word hero-word-${currentKey}`}
                style={{ color: currentColor }}
              >
                {displayText}
              </span>
              <span
                className="typing-cursor"
                style={{ backgroundColor: currentColor }}
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="hero-bio">
            I craft intuitive, high-impact digital products — from complex enterprise
            dashboards to polished consumer applications. Specializing in systematic
            UX research, scalable multi-brand design systems, and pixel-perfect
            prototyping, I ship web and mobile experiences that users and engineering
            teams love.
          </p>

          <div className="hero-cta-row">
            <Link href="#work" className="btn-primary" id="hero-view-work-btn">
              View My Work ↓
            </Link>
            <a
              href="/Tanmay_Vaity_UI_UX_Designer_Resume.pdf"
              download="Tanmay_Vaity_UI_UX_Designer_Resume.pdf"
              className="btn-ghost"
              id="hero-download-resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* ── Animated Avatar Hero Column ── */}
        <div className="hero-image-col">
          <div className="hero-avatar-stage">
            <div className="hero-avatar-card">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/videos/hero_avatar.webp"
                className="hero-avatar-video"
                aria-label="Tanmay Vaity — Animated UI/UX Designer character walking, whistling and designing"
              >
                <source src="/videos/hero_avatar.webm" type="video/webm" />
                <source src="/videos/hero_avatar.mp4" type="video/mp4" />
              </video>
              <div className="hero-avatar-ground-shadow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

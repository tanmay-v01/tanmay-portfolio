'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function AiPromoCard() {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    'Creating beauty...',
    'Generating design tokens...',
    'Synthesizing auto-layouts...',
    'Calibrating WCAG contrast...',
    'Refining micro-interactions...'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [steps.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <Link
      ref={cardRef}
      href="/work/ai-design-workflow"
      className="ai-promo-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="How building design systems and rapid prototyping led to AI workflows that boost speed without lowering the quality bar."
    >
      <div className="columns">
        {/* Left Feature Showcase Canvas */}
        <div className="feature">
          <div className="canvas-grid-bg"></div>

          {/* Interactive Dynamic UI Canvas inside promo */}
          <div className="feature-inner-content">
            <div className="thinking-badge" aria-hidden="true">
              <span className="thinking-dot"></span>
              <span className="thinking-text">{steps[activeStep]}</span>
            </div>

            {/* Visual Token Blocks Floating in Feature Box */}
            <div className="floating-ui-tokens">
              <div className="token-pill color-pill">
                <span className="color-swatch purple"></span>
                <code>$brand-violet: #4700D8</code>
              </div>
              <div className="token-pill radius-pill">
                <span>📐 Auto-Layout: 8px Grid</span>
              </div>
              <div className="token-pill comp-pill">
                <span>⚡ &lt;SmartButton variant=&quot;glow&quot; /&gt;</span>
              </div>
            </div>
          </div>

          {/* Tanmay's Cursor (Collaborating on Canvas) */}
          <div
            className="figma-cursor tanmay-cursor"
            style={{
              transform: isHovered
                ? `translate3d(${mousePos.x * 0.12 + 20}px, ${mousePos.y * 0.12 + 40}px, 0) rotate(-2deg)`
                : 'translate3d(40px, 120px, 0)'
            }}
          >
            <svg className="cursor-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2L20 10L12 13L9 21L4 2Z" fill="#56F09E" stroke="#163824" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span className="cursor-tag tanmay-tag">Tanmay (Lead)</span>
          </div>

          {/* AI / Claude's Cursor (Collaborating in Real-time) */}
          <div
            className="figma-cursor ai-cursor"
            style={{
              transform: isHovered
                ? `translate3d(${-mousePos.x * 0.08 + 180}px, ${-mousePos.y * 0.08 + 200}px, 0) rotate(3deg)`
                : 'translate3d(180px, 190px, 0)'
            }}
          >
            <svg className="cursor-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2L20 10L12 13L9 21L4 2Z" fill="#00E5FF" stroke="#063238" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span className="cursor-tag ai-tag">Claude / AI</span>
          </div>
        </div>

        {/* Right Intro Copy */}
        <div className="intro">
          <p className="title">Building the AI tooling for human creativity.</p>
          <p className="desc">
            I&rsquo;ve spent years standardizing design systems, interactive prototypes, and cross-functional developer handoff.
            Now I&rsquo;m combining these foundations with generative intelligence to collapse the distance between Figma concepts and production code.
          </p>
          <p className="view-cta">
            <span>Explore Case Study &rarr;</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

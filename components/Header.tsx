'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ThemeToggle from './ThemeToggle';
import Navigation from './Navigation';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const logoSvgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!logoSvgRef.current) return;
    const paths = logoSvgRef.current.querySelectorAll('path');
    if (!paths.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    paths.forEach((path) => {
      try {
        const length = path.getTotalLength();
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = prefersReducedMotion ? '0' : String(length);
      } catch (e) {
        console.error(e);
      }
    });

    if (!prefersReducedMotion) {
      const tl = gsap.timeline({ delay: 0.15 });
      paths.forEach((path) => {
        let length = 60;
        try {
          length = path.getTotalLength();
        } catch (e) {
          console.error(e);
        }
        const duration = Math.max(0.3, Math.min(0.85, length / 120));
        tl.to(path, {
          strokeDashoffset: 0,
          duration: duration,
          ease: 'power3.out'
        });
      });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setNavOpen(false);
      }
      if (e.shiftKey && (e.key === 'N' || e.key === 'n')) {
        window.location.href = '/cv';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="home-logo-link" title="Tanmay Vaity - Home">
            <svg
              ref={logoSvgRef}
              className="home-logo-svg"
              viewBox="0 0 240 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Tanmay Vaity Signature Logo"
            >
              {/* T & loop */}
              <path
                d="M15 16 C35 12, 60 14, 75 18 M45 15 C42 28, 40 45, 38 52 C37 55, 34 56, 32 50 C28 42, 38 34, 48 38"
                stroke="currentColor"
                strokeWidth="4"
              />
              {/* a */}
              <path
                d="M62 42 C56 36, 54 48, 60 52 C65 54, 70 48, 70 38 C70 46, 72 52, 75 52"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              {/* n */}
              <path
                d="M84 38 C84 46, 84 52, 84 52 M84 42 C88 36, 96 36, 98 44 C98 48, 98 52, 100 52"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              {/* m */}
              <path
                d="M108 38 C108 48, 108 52, 108 52 M108 42 C112 36, 118 36, 120 44 C124 36, 130 36, 132 44 C132 48, 132 52, 134 52"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              {/* a */}
              <path
                d="M144 42 C138 36, 136 48, 142 52 C147 54, 152 48, 152 38 C152 46, 154 52, 157 52"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              {/* y & swoosh */}
              <path
                d="M165 38 C167 44, 169 48, 172 52 M179 38 C176 46, 168 58, 162 66 C156 74, 148 70, 160 62 C180 50, 215 42, 235 40"
                stroke="currentColor"
                strokeWidth="3.5"
              />
            </svg>
          </Link>

          <div className="header-controls">
            <ThemeToggle />
            <button
              onClick={() => setNavOpen(true)}
              className="menu-trigger-btn"
              title="Open Navigation Menu (or press Shift+N for CV)"
              aria-label="Open Navigation Menu"
            >
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>

      <Navigation isOpen={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}

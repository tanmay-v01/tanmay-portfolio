import React from 'react';
import Image from 'next/image';

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
}

/** High-fidelity macOS Dark Glass Browser Mockup */
export function BrowserMockup({ src, alt, url = 'https://workspace.internal/app', className = '' }: BrowserMockupProps) {
  return (
    <div className={`mockup-browser-shell ${className}`}>
      {/* Chrome bar */}
      <div className="mockup-browser-bar" aria-hidden="true">
        <div className="browser-dots">
          <span className="browser-dot red" />
          <span className="browser-dot yellow" />
          <span className="browser-dot green" />
        </div>

        <div className="browser-nav-icons">
          <span className="browser-nav-arrow">‹</span>
          <span className="browser-nav-arrow">›</span>
        </div>

        <div className="browser-url-bar">
          <span className="browser-ssl-lock">🔒</span>
          <span className="browser-url-text">{url}</span>
          <span className="browser-refresh-icon">↻</span>
        </div>

        <div className="browser-action-dots">
          <span className="browser-mini-tab"></span>
        </div>
      </div>

      {/* Screen viewport */}
      <div className="mockup-browser-screen">
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div className="mockup-screen-glare" aria-hidden="true" />
      </div>
    </div>
  );
}

interface IphoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

/** Titanium finish iPhone 16 Pro mockup with Dynamic Island and status bar */
export function IphoneMockup({ src, alt, className = '' }: IphoneMockupProps) {
  return (
    <div className={`mockup-iphone-shell ${className}`}>
      {/* Speaker / Dynamic Island */}
      <div className="mockup-iphone-dynamic-island" aria-hidden="true">
        <div className="island-camera" />
        <div className="island-sensor" />
      </div>

      {/* Screen */}
      <div className="mockup-iphone-screen">
        {/* Subtle status bar */}
        <div className="iphone-status-bar" aria-hidden="true">
          <span className="status-time">9:41</span>
          <div className="status-icons">
            <span className="status-signal">●●●</span>
            <span className="status-wifi">5G</span>
            <span className="status-battery">■</span>
          </div>
        </div>

        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />

        {/* Home swipe indicator */}
        <div className="iphone-home-indicator" aria-hidden="true" />
      </div>
    </div>
  );
}

interface FloatingPreviewProps {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}

/** Floating secondary card for desktop-centric projects */
export function FloatingPreview({ src, alt, label = 'Detail View', className = '' }: FloatingPreviewProps) {
  return (
    <div className={`mockup-floating-card ${className}`}>
      <div className="floating-card-header">
        <div className="floating-dots">
          <span className="floating-dot" />
          <span className="floating-dot" />
          <span className="floating-dot" />
        </div>
        <span className="floating-label">{label}</span>
      </div>
      <div className="floating-card-screen">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
        />
      </div>
    </div>
  );
}

export interface DualMockupProps {
  browserSrc: string;
  phoneSrc?: string;
  secondarySrc?: string;
  alt: string;
  accentColor?: string;
  accentRgb?: string;
  gradientBg?: string;
  badgeText?: string;
  deviceUrl?: string;
  deviceSubBadge?: string;
}

/**
 * Enhanced Project Stage Canvas:
 * Features a rich colored backdrop stage, contextual badges, high-fidelity browser frame,
 * and overlapping iPhone / floating detail preview with realistic depth and hover float effects.
 */
export function DualMockup({
  browserSrc,
  phoneSrc,
  secondarySrc,
  alt,
  accentColor = '#38bdf8',
  accentRgb = '56, 189, 248',
  gradientBg,
  badgeText,
  deviceUrl = 'https://portfolio.tanmayvaity.com',
  deviceSubBadge = 'Web + Mobile Experience',
}: DualMockupProps) {
  const stageBackground = gradientBg || `radial-gradient(ellipse at 85% 15%, rgba(${accentRgb}, 0.35), transparent 55%), linear-gradient(145deg, #0b1122 0%, #152244 100%)`;

  return (
    <div
      className="mockup-stage-canvas"
      style={{
        background: stageBackground,
        ['--project-accent' as any]: accentColor,
        ['--project-accent-rgb' as any]: accentRgb,
      }}
    >
      {/* Ambient glowing spotlight behind devices */}
      <div className="stage-ambient-glow" aria-hidden="true" />

      {/* Stage Header Badges */}
      <div className="stage-header-bar">
        {badgeText && (
          <div className="stage-badge-pill">
            <span className="stage-badge-dot" />
            <span className="stage-badge-text">{badgeText}</span>
          </div>
        )}
        {deviceSubBadge && (
          <div className="stage-device-pill">
            <span>{deviceSubBadge}</span>
          </div>
        )}
      </div>

      {/* Stage Device Showcase */}
      <div className="stage-devices-wrap">
        {/* Main Desktop Browser Frame */}
        <div className="stage-browser-layer">
          <BrowserMockup
            src={browserSrc}
            alt={`${alt} — desktop screen`}
            url={deviceUrl}
          />
        </div>

        {/* Overlapping Mobile Frame */}
        {phoneSrc ? (
          <div className="stage-phone-layer">
            <IphoneMockup
              src={phoneSrc}
              alt={`${alt} — mobile screen`}
            />
          </div>
        ) : secondarySrc ? (
          /* Floating Secondary Screen for Desktop-Centric Projects */
          <div className="stage-floating-layer">
            <FloatingPreview
              src={secondarySrc}
              alt={`${alt} — detailed screen`}
              label="Interactive Report"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

interface GenericDeviceMockupProps {
  type?: 'browser' | 'iphone';
  src: string;
  alt: string;
  url?: string;
  className?: string;
}

export function DeviceMockup({ type = 'browser', src, alt, url, className = '' }: GenericDeviceMockupProps) {
  if (type === 'iphone') {
    return <IphoneMockup src={src} alt={alt} className={className} />;
  }
  return <BrowserMockup src={src} alt={alt} url={url} className={className} />;
}


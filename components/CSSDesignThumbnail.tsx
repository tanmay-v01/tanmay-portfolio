'use client';

import React from 'react';

interface DesignConfig {
  headline?: string;
  subtext?: string;
  layout: 'centered' | 'split' | 'diagonal' | 'grid' | 'stacked' | 'asymmetric' | 'overlay';
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor?: string;
  fontStyle: 'serif' | 'sans' | 'mono' | 'display' | 'handwritten';
  pattern?: 'dots' | 'lines' | 'circles' | 'grid' | 'waves' | 'none' | 'triangles' | 'crosses';
  mood: 'dark' | 'light' | 'vibrant' | 'muted' | 'neon';
}

interface CSSDesignThumbnailProps {
  designType: 'poster' | 'brand' | 'social' | 'packaging' | 'editorial' | 'mockup';
  config: DesignConfig;
  title: string;
}

function getPatternSVG(pattern: string, color: string, opacity: number = 0.15): string {
  const c = encodeURIComponent(color);
  switch (pattern) {
    case 'dots':
      return `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1.5' fill='${c}' opacity='${opacity}'/%3E%3C/svg%3E")`;
    case 'lines':
      return `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='40' x2='40' y2='0' stroke='${c}' stroke-width='0.5' opacity='${opacity}'/%3E%3C/svg%3E")`;
    case 'circles':
      return `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='${c}' stroke-width='0.5' opacity='${opacity}'/%3E%3C/svg%3E")`;
    case 'grid':
      return `url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0H0v30' fill='none' stroke='${c}' stroke-width='0.3' opacity='${opacity}'/%3E%3C/svg%3E")`;
    case 'waves':
      return `url("data:image/svg+xml,%3Csvg width='60' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q15 0 30 10 Q45 20 60 10' fill='none' stroke='${c}' stroke-width='0.6' opacity='${opacity}'/%3E%3C/svg%3E")`;
    case 'triangles':
      return `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='20,5 35,35 5,35' fill='none' stroke='${c}' stroke-width='0.5' opacity='${opacity}'/%3E%3C/svg%3E")`;
    case 'crosses':
      return `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 4v16M4 12h16' stroke='${c}' stroke-width='0.5' opacity='${opacity}'/%3E%3C/svg%3E")`;
    default:
      return 'none';
  }
}

function getFontFamily(fontStyle: string): string {
  switch (fontStyle) {
    case 'serif': return "'Georgia', 'Times New Roman', serif";
    case 'mono': return "'Courier New', 'SF Mono', monospace";
    case 'display': return "'League Spartan', 'Impact', sans-serif";
    case 'handwritten': return "'Georgia', cursive, serif";
    default: return "'DM Sans', 'Helvetica Neue', sans-serif";
  }
}

export default function CSSDesignThumbnail({ designType, config, title }: CSSDesignThumbnailProps) {
  const { headline, subtext, layout, primaryColor, secondaryColor, tertiaryColor, fontStyle, pattern, mood } = config;

  const bgColor = mood === 'dark' || mood === 'neon' ? '#0a0a0a' : mood === 'light' ? '#fafaf9' : mood === 'muted' ? '#f0ebe3' : '#ffffff';
  const textColor = mood === 'dark' || mood === 'neon' ? '#ffffff' : '#111111';
  const patternBg = pattern && pattern !== 'none' ? getPatternSVG(pattern, mood === 'dark' || mood === 'neon' ? '#ffffff' : '#000000', 0.08) : 'none';
  const font = getFontFamily(fontStyle);

  const baseStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    backgroundColor: bgColor,
    backgroundImage: patternBg,
    fontFamily: font,
    color: textColor,
  };

  // Render different layouts
  if (layout === 'centered') {
    return (
      <div style={{ ...baseStyle, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10%' }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute', top: '-20%', right: '-15%',
          width: '60%', height: '60%', borderRadius: '50%',
          background: `radial-gradient(circle, ${primaryColor}22, transparent 70%)`,
        }} />
        {designType === 'brand' && (
          <div style={{
            width: '56px', height: '56px', borderRadius: '14px', marginBottom: '16px',
            background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '22px', fontWeight: 800, color: '#fff',
            boxShadow: `0 8px 24px ${primaryColor}44`,
          }}>
            {(headline || title).charAt(0)}
          </div>
        )}
        {headline && (
          <div style={{
            fontSize: fontStyle === 'display' ? '28px' : '22px',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1,
            color: primaryColor, marginBottom: '8px', position: 'relative',
          }}>
            {headline}
          </div>
        )}
        {subtext && (
          <div style={{
            fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase' as const, opacity: 0.6, marginTop: '4px',
          }}>
            {subtext}
          </div>
        )}
        {/* Bottom accent line */}
        <div style={{
          position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)',
          width: '40px', height: '3px', borderRadius: '2px',
          background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
        }} />
      </div>
    );
  }

  if (layout === 'split') {
    return (
      <div style={{ ...baseStyle, flexDirection: 'row' }}>
        {/* Left panel */}
        <div style={{
          width: '45%', height: '100%',
          background: `linear-gradient(180deg, ${primaryColor}, ${secondaryColor})`,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '20px 16px',
        }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.4)', marginBottom: '10px',
          }} />
          <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
            {subtext || 'Design Project'}
          </div>
        </div>
        {/* Right content */}
        <div style={{
          width: '55%', height: '100%', padding: '24px 20px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          {headline && (
            <div style={{
              fontSize: '20px', fontWeight: 800, lineHeight: 1.15,
              letterSpacing: '-0.03em', marginBottom: '10px',
            }}>
              {headline}
            </div>
          )}
          {/* Mock content lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ height: '3px', width: '100%', borderRadius: '2px', background: `${textColor}15` }} />
            <div style={{ height: '3px', width: '75%', borderRadius: '2px', background: `${textColor}10` }} />
            <div style={{ height: '3px', width: '85%', borderRadius: '2px', background: `${textColor}08` }} />
          </div>
          {/* Accent dot */}
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: primaryColor, marginTop: '14px',
          }} />
        </div>
      </div>
    );
  }

  if (layout === 'diagonal') {
    return (
      <div style={{ ...baseStyle, alignItems: 'center', justifyContent: 'center' }}>
        {/* Diagonal slash */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor} 48%, transparent 48%, transparent 52%, ${secondaryColor} 52%, ${secondaryColor} 100%)`,
          opacity: 0.12,
        }} />
        {/* Large rotated type */}
        {headline && (
          <div style={{
            fontSize: '42px', fontWeight: 900, lineHeight: 0.85,
            letterSpacing: '-0.06em', transform: 'rotate(-8deg)',
            color: primaryColor, textAlign: 'center',
            textShadow: mood === 'dark' ? `0 0 40px ${primaryColor}55` : 'none',
            position: 'relative',
          }}>
            {headline}
          </div>
        )}
        {subtext && (
          <div style={{
            position: 'absolute', bottom: '12%', right: '8%',
            fontSize: '8px', fontWeight: 600, letterSpacing: '0.18em',
            textTransform: 'uppercase' as const, color: secondaryColor, opacity: 0.8,
          }}>
            {subtext}
          </div>
        )}
        {/* Corner accent */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          width: '20px', height: '20px',
          borderTop: `2px solid ${primaryColor}`,
          borderLeft: `2px solid ${primaryColor}`,
          opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute', bottom: '14px', right: '14px',
          width: '20px', height: '20px',
          borderBottom: `2px solid ${secondaryColor}`,
          borderRight: `2px solid ${secondaryColor}`,
          opacity: 0.5,
        }} />
      </div>
    );
  }

  if (layout === 'grid') {
    const gridItems = (headline || 'ABCD').split('').slice(0, 4);
    return (
      <div style={{ ...baseStyle, flexDirection: 'column', padding: '14px' }}>
        {/* Title bar */}
        <div style={{
          fontSize: '8px', fontWeight: 700, letterSpacing: '0.14em',
          textTransform: 'uppercase' as const, marginBottom: '10px',
          color: primaryColor, padding: '0 4px',
        }}>
          {subtext || title}
        </div>
        {/* 2x2 grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '6px', flex: 1,
        }}>
          {gridItems.map((char, i) => (
            <div key={i} style={{
              background: i % 2 === 0
                ? `linear-gradient(135deg, ${primaryColor}18, ${primaryColor}08)`
                : `linear-gradient(135deg, ${secondaryColor}15, ${secondaryColor}06)`,
              borderRadius: '8px',
              border: `1px solid ${primaryColor}15`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: designType === 'editorial' ? '11px' : '24px',
              fontWeight: 800, color: primaryColor, opacity: 0.85,
            }}>
              {designType === 'editorial' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', padding: '8px' }}>
                  <div style={{ height: '2px', width: '80%', background: `${primaryColor}20`, borderRadius: '1px' }} />
                  <div style={{ height: '2px', width: '60%', background: `${primaryColor}14`, borderRadius: '1px' }} />
                  <div style={{ height: '2px', width: '70%', background: `${primaryColor}10`, borderRadius: '1px' }} />
                </div>
              ) : char}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (layout === 'stacked') {
    return (
      <div style={{ ...baseStyle, flexDirection: 'column', justifyContent: 'center', padding: '10% 12%' }}>
        {/* Top decorative element */}
        <div style={{
          width: '100%', height: '4px', borderRadius: '2px',
          background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, ${tertiaryColor || primaryColor})`,
          marginBottom: '18px',
        }} />
        {headline && (
          <div style={{
            fontSize: '20px', fontWeight: 800, lineHeight: 1.2,
            letterSpacing: '-0.03em', marginBottom: '8px',
          }}>
            {headline}
          </div>
        )}
        {subtext && (
          <div style={{
            fontSize: '9px', fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase' as const, opacity: 0.5, marginBottom: '16px',
          }}>
            {subtext}
          </div>
        )}
        {/* Mock stacked elements */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{
              height: '28px', borderRadius: '6px',
              background: `linear-gradient(90deg, ${primaryColor}${12 + i * 4}, transparent)`,
              border: `1px solid ${primaryColor}10`,
            }} />
          ))}
        </div>
        {/* Bottom wave accent */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '30px',
          background: `linear-gradient(0deg, ${primaryColor}08, transparent)`,
        }} />
      </div>
    );
  }

  if (layout === 'asymmetric') {
    return (
      <div style={{ ...baseStyle, padding: '14px' }}>
        {/* Large accent shape */}
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-5%',
          width: '55%', height: '65%',
          borderRadius: '24px', transform: 'rotate(12deg)',
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
          opacity: 0.15,
        }} />
        {/* Small floating shapes */}
        <div style={{
          position: 'absolute', top: '15%', right: '20%',
          width: '18px', height: '18px', borderRadius: '50%',
          background: secondaryColor, opacity: 0.3,
        }} />
        <div style={{
          position: 'absolute', top: '35%', right: '12%',
          width: '10px', height: '10px', borderRadius: '3px',
          background: primaryColor, opacity: 0.2, transform: 'rotate(45deg)',
        }} />
        {/* Content positioned asymmetrically */}
        <div style={{
          position: 'absolute', bottom: '15%', left: '8%',
          maxWidth: '70%',
        }}>
          {headline && (
            <div style={{
              fontSize: '24px', fontWeight: 900, lineHeight: 1.05,
              letterSpacing: '-0.04em', color: primaryColor, marginBottom: '6px',
            }}>
              {headline}
            </div>
          )}
          {subtext && (
            <div style={{
              fontSize: '8px', fontWeight: 600, letterSpacing: '0.15em',
              textTransform: 'uppercase' as const, opacity: 0.5,
            }}>
              {subtext}
            </div>
          )}
        </div>
        {/* Top-left label */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          fontSize: '7px', fontWeight: 700, letterSpacing: '0.18em',
          textTransform: 'uppercase' as const, opacity: 0.35,
        }}>
          {designType === 'packaging' ? '◆ Packaging' : '◆ Design'}
        </div>
      </div>
    );
  }

  if (layout === 'overlay') {
    return (
      <div style={{
        ...baseStyle, alignItems: 'center', justifyContent: 'center',
        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
      }}>
        {/* Pattern overlay */}
        {patternBg !== 'none' && (
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: getPatternSVG(pattern || 'none', '#ffffff', 0.12),
            backgroundRepeat: 'repeat',
          }} />
        )}
        {/* Large background text */}
        <div style={{
          position: 'absolute', fontSize: '80px', fontWeight: 900,
          opacity: 0.06, letterSpacing: '-0.06em', color: '#ffffff',
          lineHeight: 0.9, textAlign: 'center',
        }}>
          {(headline || title).substring(0, 6)}
        </div>
        {/* Foreground content */}
        <div style={{
          position: 'relative', textAlign: 'center',
          padding: '20px', color: '#ffffff',
        }}>
          {headline && (
            <div style={{
              fontSize: '26px', fontWeight: 800, lineHeight: 1.1,
              letterSpacing: '-0.03em', marginBottom: '8px',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}>
              {headline}
            </div>
          )}
          {subtext && (
            <div style={{
              fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em',
              textTransform: 'uppercase' as const, opacity: 0.8,
            }}>
              {subtext}
            </div>
          )}
        </div>
        {/* Corner accents */}
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          width: '24px', height: '24px',
          borderTop: '2px solid rgba(255,255,255,0.4)',
          borderLeft: '2px solid rgba(255,255,255,0.4)',
        }} />
        <div style={{
          position: 'absolute', bottom: '12px', right: '12px',
          width: '24px', height: '24px',
          borderBottom: '2px solid rgba(255,255,255,0.4)',
          borderRight: '2px solid rgba(255,255,255,0.4)',
        }} />
      </div>
    );
  }

  // Fallback: simple centered
  return (
    <div style={{ ...baseStyle, alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10%' }}>
      <div style={{ fontSize: '20px', fontWeight: 800, color: primaryColor }}>{headline || title}</div>
    </div>
  );
}


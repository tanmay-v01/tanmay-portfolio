'use client';

import React, { useState } from 'react';
import HandwrittenLogo from '@/components/HandwrittenLogo';

export default function SocialCardsPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  return (
    <div style={{ padding: '40px 20px', background: theme === 'dark' ? '#090d16' : '#f1f5f9', minHeight: '100vh', color: theme === 'dark' ? '#fff' : '#0f172a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 800 }}>LinkedIn Visual Card Templates</h1>
            <p style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>Minimal, clean, structured UI post cards with Tanmay Vaity handwritten watermark</p>
          </div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              border: '1px solid currentColor',
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Switch to {theme === 'dark' ? 'Light Theme ☀️' : 'Dark Theme 🌙'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
          
          {/* ── CARD TEMPLATE 1: UI Spatial Math ── */}
          <div style={{
            aspectRatio: '4 / 5',
            background: theme === 'dark' ? '#0b1120' : '#ffffff',
            border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '20px', background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '20px' }}>
                UI Micro-Rule #01
              </div>

              <h2 style={{ fontSize: '24px', fontWeight: 800, lineHeight: 1.3, marginBottom: '24px' }}>
                The Container Padding Formula: Internal &lt; External
              </h2>

              {/* Visual Demo Box */}
              <div style={{ background: theme === 'dark' ? '#161e31' : '#f8fafc', padding: '20px', borderRadius: '14px', border: theme === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid #cbd5e1', marginBottom: '20px' }}>
                <div style={{ background: theme === 'dark' ? '#222f49' : '#e2e8f0', padding: '12px', borderRadius: '8px', fontSize: '13px', color: '#94a3b8', marginBottom: '10px' }}>
                  ❌ <strong>Bad:</strong> Padding (24px) = External Gap (24px)
                </div>
                <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '12px', borderRadius: '8px', fontSize: '13px', color: '#34d399' }}>
                  ✅ <strong>Good:</strong> Internal Padding (12px) &lt; External Margin (24px)
                </div>
              </div>
            </div>

            {/* Signature Watermark Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' }}>
              <div>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', fontWeight: 600 }}>Designed by</p>
                <HandwrittenLogo />
              </div>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>@tanmayvaity &bull; Product Designer</span>
            </div>
          </div>

          {/* ── CARD TEMPLATE 2: AI UX Comparison ── */}
          <div style={{
            aspectRatio: '4 / 5',
            background: theme === 'dark' ? '#0b1120' : '#ffffff',
            border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
          }}>
            <div>
              <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '20px', background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '20px' }}>
                AI Interface Design
              </div>

              <h2 style={{ fontSize: '24px', fontWeight: 800, lineHeight: 1.3, marginBottom: '24px' }}>
                Deterministic UI vs. Probabilistic AI UX
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '14px', borderRadius: '12px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 800, color: '#f87171', textTransform: 'uppercase', marginBottom: '6px' }}>Traditional UX</p>
                  <p style={{ fontSize: '12px', lineHeight: 1.5, color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>Input A always equals Output B. Fixed states.</p>
                </div>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '14px', borderRadius: '12px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 800, color: '#34d399', textTransform: 'uppercase', marginBottom: '6px' }}>AI UX</p>
                  <p style={{ fontSize: '12px', lineHeight: 1.5, color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>Probabilistic outputs. Inline edits &amp; regen needed.</p>
                </div>
              </div>
            </div>

            {/* Watermark Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' }}>
              <div>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', fontWeight: 600 }}>Designed by</p>
                <HandwrittenLogo />
              </div>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>@tanmayvaity &bull; Product Designer</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

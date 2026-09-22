'use client';

import React, { useState } from 'react';

interface ProjectMockupProps {
  type: 'enterprise-inbox' | 'climate-analytics' | 'core-design-system' | 'creative-branding' | 'ai-design-workflow';
  aspectRatio?: string;
}

export default function ProjectMockup({ type }: ProjectMockupProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (type === 'enterprise-inbox') {
    return (
      <div className="mockup-container">
        <div className="mockup-header-bar">
          <span className="mockup-dot red"></span>
          <span className="mockup-dot yellow"></span>
          <span className="mockup-dot green"></span>
          <div className="mockup-url-bar">https://app.apex-inbox.internal/triage</div>
        </div>
        <div className="mockup-body" style={{ background: '#0e131f', color: '#fff', padding: '20px' }}>
          {/* 3-Pane Inbox UI */}
          <div style={{ display: 'grid', gridTemplateColumns: '220px 280px 1fr', gap: '16px', minHeight: '340px' }}>
            {/* Sidebar */}
            <div style={{ background: '#161c2e', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#ffe66e', color: '#161c2e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
                <span style={{ fontWeight: '600', fontSize: '13px' }}>Apex Support</span>
              </div>
              {['🔥 Priority Inbox (12)', '💬 Live Chats (4)', '⚡ AI Copilot Queue (8)', '📦 Resolved Today (142)'].map((folder, i) => (
                <div key={folder} onClick={() => setActiveTab(i)} style={{ padding: '8px 12px', borderRadius: '8px', background: activeTab === i ? '#4700D8' : 'transparent', fontSize: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{folder}</span>
                </div>
              ))}
            </div>

            {/* Ticket List */}
            <div style={{ background: '#161c2e', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#8c9ba5', fontWeight: 'bold', padding: '4px 6px' }}>Incoming Threads</div>
              {[
                { name: 'Sarah Jenkins', subj: 'SSO Authentication failure on staging', time: '2m', tag: 'High', color: '#ff5f56' },
                { name: 'Marcus Sterling', subj: 'Design token export mismatch', time: '14m', tag: 'UI Bug', color: '#ffe66e' },
                { name: 'Elena Rostova', subj: 'Billing webhook retry policy', time: '1h', tag: 'Question', color: '#27c93f' },
              ].map((item, idx) => (
                <div key={item.name} style={{ background: idx === 0 ? '#222b45' : '#121724', border: idx === 0 ? '1px solid #4700D8' : '1px solid transparent', borderRadius: '8px', padding: '10px', fontSize: '12px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '600' }}>{item.name}</span>
                    <span style={{ color: '#8c9ba5', fontSize: '10px' }}>{item.time}</span>
                  </div>
                  <div style={{ color: '#c5d1e0', fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '6px' }}>{item.subj}</div>
                  <span style={{ background: item.color, color: '#161c2e', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 'bold' }}>{item.tag}</span>
                </div>
              ))}
            </div>

            {/* Conversation View */}
            <div style={{ background: '#161c2e', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #28334e', paddingBottom: '10px', marginBottom: '12px' }}>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 'bold' }}>SSO Authentication failure on staging</h4>
                    <span style={{ fontSize: '11px', color: '#8c9ba5' }}>Customer: Acme Enterprise &bull; Assigned to: Tanmay V.</span>
                  </div>
                  <span style={{ background: 'rgba(71,0,216,0.3)', border: '1px solid #4700D8', color: '#c9bdeb', padding: '4px 10px', borderRadius: '12px', fontSize: '11px' }}>AI Summary Ready</span>
                </div>

                {/* AI Summary Box */}
                <div style={{ background: 'rgba(0, 255, 204, 0.08)', border: '1px solid rgba(0, 255, 204, 0.25)', borderRadius: '8px', padding: '10px 14px', marginBottom: '12px', fontSize: '11px', color: '#00ffcc' }}>
                  ⚡ <strong>AI Copilot Summary:</strong> Okta SAML certificate expired on customer staging environment. Suggested action: Send certificate rotation guide.
                </div>

                {/* Message Bubble */}
                <div style={{ background: '#222b45', borderRadius: '8px', padding: '12px', fontSize: '12px', lineHeight: '18px' }}>
                  <p style={{ margin: 0, color: '#e2e8f0' }}>&ldquo;We upgraded our Okta instance this morning and our developers are receiving a 403 Forbidden token response when logging into the staging dashboard.&rdquo;</p>
                </div>
              </div>

              {/* Quick Reply Bar */}
              <div style={{ background: '#121724', borderRadius: '8px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                <span style={{ color: '#8c9ba5', fontSize: '11px' }}>Write a reply or type &lsquo;/&rsquo; for AI actions...</span>
                <button style={{ background: '#4700D8', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>Send &crarr;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'climate-analytics') {
    return (
      <div className="mockup-container">
        <div className="mockup-header-bar">
          <span className="mockup-dot red"></span>
          <span className="mockup-dot yellow"></span>
          <span className="mockup-dot green"></span>
          <div className="mockup-url-bar">https://app.carbon-ethics.io/analytics</div>
        </div>
        <div className="mockup-body" style={{ background: '#13111c', color: '#fff', padding: '24px' }}>
          {/* Dashboard Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Scope 1, 2 &amp; 3 GHG Emissions</h3>
              <p style={{ fontSize: '12px', color: '#9d94c2', margin: 0 }}>Real-time sensor telemetry &amp; supply chain supplier audits</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ background: '#2b1c16', border: '1px solid #c45d3e', color: '#ff8c69', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '600' }}>Target: -40% by 2030</span>
              <span style={{ background: '#4700D8', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '600' }}>Export Audit Report</span>
            </div>
          </div>

          {/* KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
            {[
              { label: 'Total Carbon Equivalent', val: '4,218 tCO₂e', change: '-12.4% vs last quarter', positive: true },
              { label: 'Scope 3 Supply Chain', val: '2,940 tCO₂e', change: '84% supplier coverage', positive: true },
              { label: 'Renewable Power Ratio', val: '68.2%', change: '+15% solar transition', positive: true },
            ].map((kpi) => (
              <div key={kpi.label} style={{ background: '#1e1a2e', border: '1px solid #332b4d', borderRadius: '10px', padding: '14px' }}>
                <span style={{ fontSize: '11px', color: '#9d94c2', display: 'block', marginBottom: '4px' }}>{kpi.label}</span>
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', display: 'block', marginBottom: '4px' }}>{kpi.val}</span>
                <span style={{ fontSize: '10px', color: '#00ffcc', fontWeight: '600' }}>{kpi.change}</span>
              </div>
            ))}
          </div>

          {/* Visual Chart Bars */}
          <div style={{ background: '#1e1a2e', borderRadius: '10px', padding: '16px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#c9bdeb', display: 'block', marginBottom: '14px' }}>Monthly Carbon Intensity by Business Unit</span>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '120px', paddingBottom: '10px', borderBottom: '1px solid #332b4d' }}>
              {[
                { month: 'Jan', h1: 65, h2: 40 },
                { month: 'Feb', h1: 58, h2: 35 },
                { month: 'Mar', h1: 50, h2: 30 },
                { month: 'Apr', h1: 45, h2: 28 },
                { month: 'May', h1: 40, h2: 22 },
                { month: 'Jun', h1: 34, h2: 18 },
              ].map((bar) => (
                <div key={bar.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '100%', display: 'flex', gap: '4px', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <div style={{ width: '12px', height: `${bar.h1}px`, background: '#c45d3e', borderRadius: '3px' }} title="Logistics" />
                    <div style={{ width: '12px', height: `${bar.h2}px`, background: '#4700D8', borderRadius: '3px' }} title="Manufacturing" />
                  </div>
                  <span style={{ fontSize: '10px', color: '#9d94c2' }}>{bar.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'core-design-system') {
    return (
      <div className="mockup-container">
        <div className="mockup-header-bar">
          <span className="mockup-dot red"></span>
          <span className="mockup-dot yellow"></span>
          <span className="mockup-dot green"></span>
          <div className="mockup-url-bar">https://ds.core-tokens.internal/tokens/primitives</div>
        </div>
        <div className="mockup-body" style={{ background: '#120b24', color: '#fff', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Design Tokens &amp; Component Anatomy</h3>
              <p style={{ fontSize: '12px', color: '#b3a7d6', margin: 0 }}>Automated Figma variable synchronization pipeline</p>
            </div>
            <span style={{ background: '#4700D8', color: '#fff', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>v3.4.0 (Live)</span>
          </div>

          {/* Color Tokens Palette Preview */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '20px' }}>
            {[
              { name: 'Purple / 600', hex: '#4700D8', token: '$color.brand.primary' },
              { name: 'Canary / 400', hex: '#ffe66e', token: '$color.brand.accent' },
              { name: 'Mint / 500', hex: '#27ae60', token: '$color.feedback.success' },
              { name: 'Rose / 500', hex: '#F10086', token: '$color.brand.magenta' },
              { name: 'Midnight / 900', hex: '#231955', token: '$color.surface.dark' },
            ].map((col) => (
              <div key={col.token} style={{ background: '#1c1338', border: '1px solid #332363', borderRadius: '8px', padding: '10px' }}>
                <div style={{ height: '36px', background: col.hex, borderRadius: '4px', marginBottom: '8px' }} />
                <span style={{ fontSize: '11px', fontWeight: 'bold', display: 'block' }}>{col.name}</span>
                <code style={{ fontSize: '9px', color: '#b3a7d6', display: 'block', fontFamily: 'var(--font-mono)' }}>{col.token}</code>
              </div>
            ))}
          </div>

          {/* Interactive Button States Preview */}
          <div style={{ background: '#1c1338', borderRadius: '8px', padding: '16px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button style={{ background: '#4700D8', color: '#fff', border: 'none', padding: '8px 18px', borderRadius: '20px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>Primary Solid</button>
            <button style={{ background: '#ffe66e', color: '#120b24', border: 'none', padding: '8px 18px', borderRadius: '20px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>Accent Warm</button>
            <button style={{ background: 'transparent', color: '#ECDBBA', border: '1px solid #ECDBBA', padding: '8px 18px', borderRadius: '20px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>Ghost Outline</button>
            <span style={{ fontSize: '11px', color: '#00ffcc', fontFamily: 'var(--font-mono)', marginLeft: 'auto' }}>✓ WCAG 2.1 AAA Passed (14.2:1 contrast)</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback / AI & Brand
  return (
    <div className="mockup-container">
      <div className="mockup-header-bar">
        <span className="mockup-dot red"></span>
        <span className="mockup-dot yellow"></span>
        <span className="mockup-dot green"></span>
        <div className="mockup-url-bar">https://tanmayvaity.design/case-study</div>
      </div>
      <div className="mockup-body" style={{ background: '#141026', color: '#ECDBBA', padding: '32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>✨</div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: '#fff', marginBottom: '8px' }}>High-Fidelity Interactive Prototype</h4>
          <p style={{ fontSize: '13px', color: '#b3a7d6', lineHeight: '22px', marginBottom: '16px' }}>
            Pixel-perfect component hierarchies, auto-layout constraints, and micro-interaction states designed in Figma &amp; Adobe Creative Suite.
          </p>
          <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ background: '#4700D8', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '11px' }}>Figma Auto-Layout 5.0</span>
            <span style={{ background: '#F10086', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '11px' }}>Design Tokens</span>
            <span style={{ background: '#27ae60', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '11px' }}>TypeScript / React</span>
          </div>
        </div>
      </div>
    </div>
  );
}

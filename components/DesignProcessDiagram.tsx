'use client';

import React from 'react';

const PROCESS_STEPS = [
  { name: 'Empathize', bg: '#e8f7e5', text: '#2d6a2e', offset: 'top' },
  { name: 'Define',    bg: '#ffebe3', text: '#8a3c26', offset: 'bottom' },
  { name: 'Ideate',    bg: '#f1ecfb', text: '#543685', offset: 'top' },
  { name: 'Prototype', bg: '#fef8d3', text: '#7c651e', offset: 'bottom' },
  { name: 'Test',      bg: '#e2f0fb', text: '#255d85', offset: 'top' },
];

export default function DesignProcessDiagram() {
  return (
    <section className="case-section design-process-section" aria-label="The Design Process">
      <div className="design-process-header">
        <h2 className="design-process-title">The Design Process</h2>
      </div>

      <div className="design-process-wrapper">
        {/* Desktop Zig-Zag View */}
        <div className="design-process-track" aria-hidden="true">
          <svg className="process-connecting-svg" viewBox="0 0 800 140" fill="none" preserveAspectRatio="none">
            {/* Stepped dashed line connecting nodes */}
            <path
              d="M 80 50 L 240 100 L 400 50 L 560 100 L 720 50"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
          </svg>

          <div className="process-nodes-row">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.name}
                className={`process-node-col node-offset-${step.offset}`}
              >
                <div
                  className="process-circle-node"
                  style={{ backgroundColor: step.bg, color: step.text }}
                >
                  <span className="process-circle-label">{step.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Linear Step View */}
        <div className="design-process-mobile">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.name} className="process-mobile-item">
              <div
                className="process-mobile-circle"
                style={{ backgroundColor: step.bg, color: step.text }}
              >
                <span className="process-mobile-num">0{idx + 1}</span>
              </div>
              <span className="process-mobile-label">{step.name}</span>
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="process-mobile-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

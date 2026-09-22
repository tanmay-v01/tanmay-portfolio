'use client';

import React, { useState } from 'react';

interface HandwrittenLogoProps {
  className?: string;
}

export default function HandwrittenLogo({ className = '' }: HandwrittenLogoProps) {
  const [animKey, setAnimKey] = useState(0);

  const handleMouseEnter = () => {
    // Replay slow child scribble animation on hover
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div
      className={`handwritten-logo-wrapper ${className}`}
      onMouseEnter={handleMouseEnter}
      title="Tanmay Vaity"
    >
      <svg
        key={animKey}
        className="handwritten-logo-svg child-scribble-svg"
        viewBox="0 0 230 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tanmay Vaity"
        role="img"
      >
        <title>Tanmay Vaity</title>
        <defs>
          {/* Continuous zero-gap flowing wave mask that reveals text like a child scribbling */}
          <mask id={`scribble-mask-${animKey}`}>
            {/* Background block for full clean coverage */}
            <path
              d="M -15,22 Q 25,8 65,24 Q 105,36 145,18 Q 185,8 225,24 L 265,22"
              stroke="white"
              strokeWidth="54"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="scribble-mask-path"
            />
          </mask>
        </defs>

        {/* The Childlike Scribble Signature: Tanmay Vaity */}
        <g mask={`url(#scribble-mask-${animKey})`}>
          <text
            x="4"
            y="32"
            className="child-scribble-text"
          >
            Tanmay Vaity
          </text>
        </g>
      </svg>
    </div>
  );
}

'use client';

import React from 'react';

interface AnchorHeadingProps {
  id: string;
  title: string;
  emoji?: string;
  level?: 'h2' | 'h3';
}

export default function AnchorHeading({ id, title, emoji, level = 'h2' }: AnchorHeadingProps) {
  const Tag = level;
  return (
    <Tag id={id} className="section-heading" style={{ display: 'flex', alignItems: 'center', gap: '8px', scrollMarginTop: '100px' }}>
      <span>{title}</span>
      {emoji && <span aria-hidden="true">{emoji}</span>}
      <a
        href={`#${id}`}
        title={`Direct link to ${title}`}
        style={{
          fontSize: '14px',
          opacity: 0.4,
          marginLeft: '4px',
          textDecoration: 'none',
          fontFamily: 'var(--font-mono)'
        }}
        className="anchor-link"
      >
        #
      </a>
    </Tag>
  );
}

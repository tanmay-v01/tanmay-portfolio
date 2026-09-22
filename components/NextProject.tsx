'use client';

import React from 'react';
import Link from 'next/link';

interface NextProjectProps {
  slug?: string;
  title?: string;
  colorScheme?: 'yellow' | 'clay' | 'purple' | 'green' | 'blue' | 'pink';
}

export default function NextProject({
  slug = 'enterprise-inbox',
  title = 'Enterprise Workspace & Inbox Experience',
  colorScheme = 'yellow'
}: NextProjectProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className={`next-project-card ${colorScheme}`}
      title={`View next case study: ${title}`}
    >
      <strong className="label">Next Project &rarr;</strong>
      <h3 className="title">{title}</h3>
    </Link>
  );
}

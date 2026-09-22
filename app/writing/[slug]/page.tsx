import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/data/articles';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleReaderPage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="content-container">
      <div style={{ marginBottom: '28px' }}>
        <Link href="/writing" style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--accent-purple)', textDecoration: 'none' }}>
          &larr; Back to all notes
        </Link>
      </div>

      <h1 className="page-title">{article.title}</h1>

      <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '32px' }}>
        <span>{article.date}</span>
        <span>&bull;</span>
        <span>{article.readTime}</span>
        <span>&bull;</span>
        <span>{article.tags.join(', ')}</span>
      </div>

      <div style={{ fontSize: '16px', lineHeight: '30px' }}>
        {article.content.map((para, i) => (
          <p key={i} className={i === 0 ? 'lead' : ''}>
            {para}
          </p>
        ))}
      </div>

      <div className="breakout" style={{ marginTop: '50px' }}>
        <h3>Share &amp; Discuss</h3>
        <p>
          Have thoughts or questions on this topic? Reach out on{' '}
          <a href="https://linkedin.com/in/tanmayvaity" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-purple)', fontWeight: 'bold' }}>
            LinkedIn
          </a>{' '}
          or drop me an email at{' '}
          <a href="mailto:tanmayvaity7@gmail.com" style={{ color: 'var(--accent-purple)', fontWeight: 'bold' }}>
            tanmayvaity7@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
}

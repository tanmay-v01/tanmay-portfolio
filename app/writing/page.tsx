'use client';

import React from 'react';
import Link from 'next/link';
import { ARTICLES } from '@/data/articles';

export default function WritingPage() {
  const years = Array.from(new Set(ARTICLES.map((a) => a.year))).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="content-container">
      {/* Title */}
      <section className="hero-lead-box">
        <h1 className="page-title">
          Design Notes &amp; Writing <span className="lead-emoji">✏️</span>
        </h1>
        <p className="lead">
          Thoughts on UI/UX ergonomics, design tokens, AI-assisted workflows, and building digital products people genuinely love.
        </p>
      </section>

      {/* Year-grouped Articles */}
      <section style={{ margin: '40px 0' }}>
        {years.map((year) => {
          const yearArticles = ARTICLES.filter((a) => a.year === year);
          return (
            <div key={year} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', color: 'var(--accent-purple)', marginBottom: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
                {year}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {yearArticles.map((article) => (
                  <article key={article.slug} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <Link
                      href={`/writing/${article.slug}`}
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '18px',
                        fontWeight: '700',
                        color: 'var(--text-main)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                      className="article-link-title"
                    >
                      <span>&rarr; {article.title}</span>
                    </Link>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, paddingLeft: '24px' }}>
                      {article.excerpt}
                    </p>
                    <div style={{ paddingLeft: '24px', display: 'flex', gap: '12px', fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      <span>{article.date}</span>
                      <span>&bull;</span>
                      <span>{article.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Newsletter Subscribe Breakout Box */}
      <div className="breakout" style={{ marginTop: '60px' }}>
        <h3>Subscribe to Design Notes</h3>
        <p style={{ marginBottom: '16px' }}>
          Get occasional dispatches on UI/UX design, Figma tricks, and front-end prototyping directly in your inbox. Zero spam, unsubscribe anytime.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); }} style={{ display: 'flex', gap: '10px', maxWidth: '460px' }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex: 1,
              padding: '10px 16px',
              borderRadius: 'var(--radius-round)',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-page)',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-body)',
              fontSize: '14px'
            }}
            required
          />
          <button type="submit" className="btn-primary" style={{ padding: '10px 24px' }}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

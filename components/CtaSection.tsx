import React from 'react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="cta-banner-section" aria-label="Call to action">
      <div className="cta-banner-container">
        <h2 className="cta-banner-title">Want to work together?</h2>
        <Link href="/contact" className="btn-primary cta-banner-btn" id="cta-get-in-touch-btn">
          Get In Touch →
        </Link>
      </div>
    </section>
  );
}

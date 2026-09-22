import React from 'react';
import Link from 'next/link';
import HandwrittenLogo from '@/components/HandwrittenLogo';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        {/* Left: Email */}
        <div className="footer-email">
          <a href="mailto:tanmayvaity7@gmail.com" aria-label="Email Tanmay Vaity">
            tanmayvaity7@gmail.com
          </a>
        </div>

        {/* Center: Logo */}
        <div className="footer-logo" aria-label="Tanmay Vaity">
          <HandwrittenLogo className="footer-handwritten-logo" />
        </div>

        {/* Right: Social Links */}
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/tanmay-vaity-544001265/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Tanmay Vaity. Designed &amp; built with care.
      </p>
    </footer>
  );
}

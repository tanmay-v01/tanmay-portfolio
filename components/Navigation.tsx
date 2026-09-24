'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '/', emoji: '🎤' },
  { label: 'Work', href: '/work', emoji: '✨' },
  { label: 'Writing', href: '/writing', emoji: '✏️' },
  { label: 'About', href: '/about', emoji: '💅🏼' },
  { label: 'Press', href: '/press', emoji: '🎙️' },
];

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  return (
    <div className={`nav-overlay ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
      <button
        onClick={onClose}
        className="nav-close-btn"
        aria-label="Close navigation"
      >
        <X size={18} />
        <span>Close</span>
      </button>

      <nav>
        <ul className="nav-links-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="nav-link-item">
              <Link href={item.href} onClick={onClose}>
                <span className="nav-emoji" aria-hidden="true">{item.emoji}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-footer-hint">
        <span>Press <kbd>ESC</kbd> to close &bull; <kbd>Shift + N</kbd> for CV</span>
      </div>
    </div>
  );
}

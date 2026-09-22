'use client';

import type { Metadata } from 'next';
import React, { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    // Replace with your actual form submission endpoint (Formspree, etc.)
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="contact-page">
      <h1 className="contact-heading">
        Let&apos;s work<br />together.
      </h1>
      <p className="contact-sub">
        Got a project in mind, a design challenge to solve, or just want to say hello?
        My inbox is always open.
      </p>

      {status === 'sent' ? (
        <div style={{ padding: '32px', background: '#f5f5f5', borderRadius: '8px', maxWidth: '560px' }}>
          <p style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>Message sent! ✓</p>
          <p style={{ color: '#666' }}>
            Thanks for reaching out — I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className="form-input"
              placeholder="Your full name"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-subject">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              className="form-input"
              placeholder="What&apos;s this about?"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="form-textarea"
              placeholder="Tell me about your project, timeline, and goals..."
              required
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            id="contact-submit-btn"
            disabled={status === 'sending'}
            style={{ alignSelf: 'flex-start' }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>

          {status === 'error' && (
            <p style={{ color: '#c00', fontSize: '14px' }}>
              Something went wrong. Please email me directly at tanmayvaity7@gmail.com
            </p>
          )}
        </form>
      )}

      {/* Direct contact links */}
      <div style={{ marginTop: '64px', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <div>
          <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '8px' }}>
            Email
          </p>
          <a href="mailto:tanmayvaity7@gmail.com" className="btn-ghost">
            tanmayvaity7@gmail.com
          </a>
        </div>
        <div>
          <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '8px' }}>
            LinkedIn
          </p>
          <a
            href="https://linkedin.com/in/tanmayvaity"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            linkedin.com/in/tanmayvaity
          </a>
        </div>
      </div>
    </div>
  );
}

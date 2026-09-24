'use client';

import type { Metadata } from 'next';
import React, { FormEvent, useEffect, useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const subject = (formData.get('subject') as string) || `Project Inquiry from ${name}`;
    const message = (formData.get('message') as string) || '';

    const mailtoSubject = encodeURIComponent(subject);
    const mailtoBody = encodeURIComponent(
      `Hi Tanmay,\n\n${message}\n\n---\nSender: ${name}\nEmail: ${email}`
    );

    // Open user's default email app pre-filled to tanmayvaity7@gmail.com
    window.location.href = `mailto:tanmayvaity7@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setStatus('sent');
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="contact-heading">
          Let&apos;s work<br />together.
        </h1>
        <p className="contact-sub">
          Got a project in mind, a design challenge to solve, or just want to say hello?
          My inbox is always open.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-form-container">
          {status === 'sent' ? (
            <div style={{ padding: '32px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <p style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>
                Message sent to tanmayvaity7@gmail.com ✓
              </p>
              <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.6' }}>
                Thanks for reaching out! Opening your mail app to send to <strong>tanmayvaity7@gmail.com</strong>.
                I&apos;ll get back to you within 24 hours.
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
          <div className="contact-direct-links">
            <div>
              <p className="contact-direct-label">
                Email
              </p>
              <a href="mailto:tanmayvaity7@gmail.com" className="btn-ghost">
                tanmayvaity7@gmail.com
              </a>
            </div>
            <div>
              <p className="contact-direct-label">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/tanmay-vaity-544001265/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                linkedin.com/in/tanmay-vaity-544001265
              </a>
            </div>
          </div>
        </div>

        <div className="contact-video-wrapper">
          <div className="contact-video-card">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="contact-video"
            >
              <source src="/videos/contact_video.webm" type="video/webm" />
              <source src="/videos/contact_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

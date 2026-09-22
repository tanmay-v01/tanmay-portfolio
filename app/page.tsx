import React from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/data/projects';

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      <hr className="section-divider" />

      {/* ── Work Section ── */}
      <section className="work-section" id="work" aria-label="Selected work">
        <div className="work-section-header">
          <p className="work-section-title">Selected Work</p>
          <a href="/work" className="view-all-link">
            All projects →
          </a>
        </div>

        {/* Alternating project cards */}
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </section>
    </>
  );
}

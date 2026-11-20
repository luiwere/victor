import React, { useState } from 'react';
import { portfolioProjects } from '../data/portfolioData';

export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeFilter);

  const handleInquireProject = (project) => {
    const text = encodeURIComponent(
      `Hello Victor, I saw your project "${project.title}" (${project.categoryLabel}) on your website and would like more information or a similar service.`
    );
    window.open(`https://wa.me/254758286766?text=${text}`, '_blank');
  };

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interactive Gallery</span>
          <h2 className="section-title">Showcase of Work & Installations</h2>
          <p className="section-desc">
            Explore recent projects spanning thick cardboard moisture-free drum deployments across Kenya, 
            custom ink sessions, and precision engineering fabrications.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="filter-tabs-wrapper">
          <button
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Works ({portfolioProjects.length})
          </button>
          <button
            className={`filter-tab ${activeFilter === 'drums' ? 'active' : ''}`}
            onClick={() => setActiveFilter('drums')}
          >
            🌾 Drums
          </button>
          <button
            className={`filter-tab ${activeFilter === 'tattoo' ? 'active' : ''}`}
            onClick={() => setActiveFilter('tattoo')}
          >
            ✒️ Tattoo Artistry
          </button>
          <button
            className={`filter-tab ${activeFilter === 'engineering' ? 'active' : ''}`}
            onClick={() => setActiveFilter('engineering')}
          >
            ⚙️ Mechanical Engineering
          </button>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="portfolio-card"
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="portfolio-img-box">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className={`portfolio-cat-badge ${project.category}`}>
                  {project.categoryLabel}
                </span>
              </div>

              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <div className="portfolio-subtitle">{project.subtitle}</div>
                <p className="portfolio-desc">{project.description}</p>

                <div className="portfolio-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx}>#{tag}</span>
                  ))}
                </div>

                <div className="portfolio-footer-row">
                  <span className="portfolio-specs-text">{project.specs}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInquireProject(project);
                    }}
                    className="btn-inquire-project"
                  >
                    Inquire <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Detail Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="portfolio-img-box" style={{ maxHeight: '350px' }}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <span className={`portfolio-cat-badge ${selectedProject.category}`}>
                  {selectedProject.categoryLabel}
                </span>
              </div>

              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.4rem' }}>
                  {selectedProject.title}
                </h3>
                <div style={{ color: 'var(--accent-amber)', fontWeight: 600, marginBottom: '1rem' }}>
                  {selectedProject.subtitle}
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {selectedProject.description}
                </p>

                <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                  <strong style={{ display: 'block', color: '#fff', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                    Technical Specifications:
                  </strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {selectedProject.specs}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => handleInquireProject(selectedProject)}
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <span>💬</span> Inquire via WhatsApp (0758286766)
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

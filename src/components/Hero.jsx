import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-pill-badge">
            <span className="pulse-dot"></span>
            <span>Active & Accepting Inquiries Across Kenya</span>
          </div>

          <h1 className="hero-title">
            Precision Engineering. <br />
            <span className="gradient-text">Artistic Mastery.</span> <br />
            Grain Preservation.
          </h1>

          <p className="hero-subtitle">
            Welcome to the official portfolio and commercial hub of <strong>Victor Too</strong>. 
            Blending technical rigor with artisanal craft — offering thick cardboard drums with metal rings 
            that keep grains 100% free from moisture, custom sterile tattoo artistry, and finishing up formal 
            qualifications in Mechanical Engineering.
          </p>

          <div className="hero-specialty-tags">
            <a href="#/drums" className="spec-tag drums">
              <span>🌾</span> Cardboard Drums with Metal Rings
            </a>
            <a href="#/tattoo" className="spec-tag tattoo">
              <span>✒️</span> Custom Tattoo Artistry
            </a>
            <a href="#/engineering" className="spec-tag eng">
              <span>⚙️</span> Mechanical Engineering (Final Year)
            </a>
          </div>

          <div className="hero-cta-group">
            <a href="#/drums" className="btn-primary" style={{ background: 'var(--accent-green)', color: '#000' }}>
              <span>🌾</span> Explore Drums Page
            </a>
            <a 
              href="https://wa.me/254758286766?text=Hi%20Victor,%20I'm%20interested%20in%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              <span>💬</span> Chat on WhatsApp
            </a>
          </div>

          <div className="hero-trust-bar">
            <div className="trust-item">
              <strong>100%</strong>
              <span>Moisture & Pest Free</span>
            </div>
            <div className="trust-item">
              <strong>Hospital-Grade</strong>
              <span>Tattoo Hygiene</span>
            </div>
            <div className="trust-item">
              <strong>Eng. Standards</strong>
              <span>CAD & Fabrication</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-card">
            <div className="hero-visual-img-wrap">
              <img 
                src="assets/images/drums.jpeg" 
                alt="Victor Too - Thick Cardboard Grain Storage Drums with Metal Rings" 
              />
            </div>
            <div className="hero-card-floating-badge">
              <div className="badge-info">
                <h4>Victor Too</h4>
                <p>Eldoret / Rift Valley / Nationwide Logistics</p>
              </div>
              <span className="id-chip">Verified ID: 41702892</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

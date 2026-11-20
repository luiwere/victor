import React from 'react';

export default function PillarEngineering() {
  return (
    <section id="engineering" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag cyan">Technical Foundation</span>
          <h2 className="section-title">Mechanical Engineering</h2>
          <p className="section-desc">
            Bridging theoretical physics, material thermodynamics, and hands-on workshop fabrication. 
            Currently completing formal Mechanical Engineering qualifications.
          </p>
        </div>

        <div className="engineering-grid">
          <div className="engineering-content">
            <div className="status-callout">
              <span>🎓</span> In Final Stage of Mechanical Engineering Degree
            </div>

            <h3>Engineering Rigor in Every Project</h3>
            <p>
              Victor's engineering training is the foundation that ties his diverse crafts together. 
              Whether analyzing the thermal insulation and seal integrity of moisture-free cardboard grain drums reinforced with steel rings, 
              tuning the frequency and damping of tattoo rotary motors, or fabricating custom metal equipment, 
              everything is grounded in mathematics, structural physics, and material science.
            </p>

            <div className="skills-metric-grid">
              <div className="metric-box">
                <h5>3D CAD & Finite Analysis</h5>
                <p>Computer-aided design in SolidWorks & AutoCAD for part modeling, assembly, and load simulation.</p>
              </div>
              <div className="metric-box">
                <h5>Structural Welding & Metalwork</h5>
                <p>Proficient in SMAW, MIG/TIG welding, custom brackets, jigs, and reinforced frames.</p>
              </div>
              <div className="metric-box">
                <h5>Machinery Diagnostics</h5>
                <p>Troubleshooting mechanical drive trains, hydraulic systems, gearboxes, and pumps.</p>
              </div>
              <div className="metric-box">
                <h5>Material Selection & Tolerances</h5>
                <p>Deep understanding of polymer oxidation, food-grade barrier seals, and metallurgy.</p>
              </div>
            </div>

            <div className="hero-cta-group" style={{ marginBottom: 0 }}>
              <a 
                href="#quote" 
                className="btn-primary"
                style={{ background: 'linear-gradient(135deg, var(--accent-cyan), #0284c7)', color: '#000' }}
              >
                <span>⚙️</span> Inquire About Engineering Project
              </a>
              <a 
                href="mailto:erictoo04@gmail.com?subject=Engineering%20Fabrication%20Consultation" 
                className="btn-secondary"
              >
                Email Technical Specs
              </a>
            </div>
          </div>

          <div className="engineering-visual">
            <img 
              src="assets/images/engineer.jpeg" 
              alt="Victor Too - Mechanical Engineering Workstation & CAD Design" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

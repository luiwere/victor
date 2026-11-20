import React, { useState } from 'react';

export default function EngineeringPage() {
  const [projectType, setProjectType] = useState('3D CAD Modeling & Drafting');
  const [timeline, setTimeline] = useState('Standard (1 - 2 weeks)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [specs, setSpecs] = useState('');

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    let message = `*MECHANICAL ENGINEERING INQUIRY*\n`;
    message += `👤 Name: ${name || 'Client'}\n`;
    message += `📞 Phone: ${phone || 'Not provided'}\n`;
    message += `──────────────────\n`;
    message += `⚙️ *Scope:* ${projectType}\n`;
    message += `⏱️ *Timeline:* ${timeline}\n`;
    if (specs) {
      message += `📐 *Technical Details / Tolerances:* ${specs}\n`;
    }
    message += `──────────────────\n`;
    message += `Sent from Victor Too's official Mechanical Engineering page.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/254758286766?text=${encoded}`, '_blank');
  };

  const engineeringCapabilities = [
    {
      icon: "📐",
      title: "3D CAD Modeling & Blueprints",
      desc: "Parametric 3D part design, full mechanical assemblies, bill of materials (BOM), tolerance stack-up analysis, and production-ready manufacturing drawings in SolidWorks and AutoCAD."
    },
    {
      icon: "⚡",
      title: "Structural Metal Fabrication",
      desc: "Precision cutting, bending, and structural welding utilizing Shielded Metal Arc Welding (SMAW), TIG, and MIG processes for custom brackets, machine frames, and load-bearing fixtures."
    },
    {
      icon: "🔧",
      title: "Machinery Diagnostics & Repair",
      desc: "Troubleshooting mechanical powertrain components, gearboxes, bearing wear, shaft misalignments, hydraulic pumps, and preventative maintenance for agricultural/industrial equipment."
    },
    {
      icon: "🔬",
      title: "Moisture-Proofing & Structural Sealing",
      desc: "Applied thermodynamics and thermal insulation analysis. Engineered the galvanized steel rim chimes and lever-clamp locking mechanisms for thick cardboard drums that keep grains completely free from moisture."
    }
  ];

  const caseStudies = [
    {
      title: "High-Torque Reduction Planetary Gearbox",
      category: "CAD Design & Prototyping",
      desc: "Designed full 3D CAD model with simulated gear tooth stress, bearing load calculations, and tolerance fitting for a heavy torque reduction transmission.",
      specs: "Material: Carbon steel & Phosphor bronze | Tolerance: ±0.02 mm | Efficiency: 96%",
      image: "assets/images/engineer.jpeg"
    },
    {
      title: "Custom Workshop Heavy-Duty Welding Jigs",
      category: "Fabrication & Welding",
      desc: "Engineered and welded rigid structural alignment jigs to eliminate thermal distortion during batch metal frame fabrication.",
      specs: "Welding: SMAW / TIG multi-pass | High-tensile structural steel | Anti-spatter primer",
      image: "assets/images/engineer.jpeg"
    },
    {
      title: "Cardboard Drum Steel Ring & Lever Clamp Mechanism",
      category: "Product Engineering",
      desc: "Designed and stress-tested the galvanized quick-locking lever ring mechanism and rolled steel chimes that reinforce thick cardboard drums for moisture-free grain storage.",
      specs: "Material: Rolled galvanized steel chimes & lever-action clamp band | Heavy hoop strength",
      image: "assets/images/drums.jpeg"
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="#/">Home</a> <span>/</span> <span>Mechanical Engineering</span>
          </div>
          <div className="page-hero-grid">
            <div>
              <span className="section-tag cyan">Technical Foundation & Practice</span>
              <h1 className="page-hero-title">
                Mechanical Engineering <br />
                <span style={{ color: 'var(--accent-cyan)' }}>CAD, Fabrication & Diagnostics</span>
              </h1>
              <p className="page-hero-subtitle">
                Bridging mechanical engineering theory with practical workshop craftsmanship. 
                Currently in the final stage of completing formal Mechanical Engineering qualifications — 
                delivering mathematically sound, structurally robust industrial solutions.
              </p>

              <div className="hero-cta-group">
                <a 
                  href="#engineering-inquiry" 
                  className="btn-primary" 
                  style={{ background: 'linear-gradient(135deg, var(--accent-cyan), #0284c7)', color: '#000' }}
                >
                  <span>⚙️</span> Inquire About Engineering Project
                </a>
                <a href="#capabilities" className="btn-secondary">
                  <span>📐</span> View Capabilities
                </a>
              </div>
            </div>

            <div className="page-hero-visual">
              <img 
                src="assets/images/engineer.jpeg" 
                alt="Mechanical Engineering Workstation with CAD monitor and tools" 
              />
              <div className="visual-caption-badge">
                <span>⚙️ Final-Year Mechanical Engineering • CAD / SolidWorks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic & Professional Status Banner */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="credentials-banner" style={{ borderColor: 'var(--border-cyan)' }}>
            <div className="cred-left">
              <span className="cred-shield" style={{ color: 'var(--accent-cyan)' }}>🎓</span>
              <div className="cred-text">
                <h4>Academic & Technical Qualifications in Final Stretch</h4>
                <p>
                  Finishing up university qualifications in Mechanical Engineering with coursework covering 
                  Solid Mechanics, Fluid Dynamics, Materials Science, Thermodynamics, and Computer-Aided Manufacturing (CAM).
                </p>
              </div>
            </div>
            <div className="cred-right">
              <div className="id-badge-large" style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>
                VERIFIED ID: 41702892
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag cyan">Technical Competencies</span>
            <h2 className="section-title">Core Engineering Capabilities</h2>
            <p className="section-desc">
              From initial sketch and 3D simulation to precision metal fabrication and field machinery troubleshooting.
            </p>
          </div>

          <div className="grain-features-grid">
            {engineeringCapabilities.map((cap, idx) => (
              <div key={idx} className="benefit-card" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
                <div className="benefit-icon" style={{ background: 'rgba(6, 182, 212, 0.12)', color: 'var(--accent-cyan)', borderColor: 'rgba(6, 182, 212, 0.3)' }}>
                  {cap.icon}
                </div>
                <h4>{cap.title}</h4>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Case Studies */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag cyan">Applied Engineering</span>
            <h2 className="section-title">Project Case Studies & Prototyping</h2>
            <p className="section-desc">
              Highlights of mechanical engineering design, simulation, and fabrication projects.
            </p>
          </div>

          <div className="drums-catalog-grid">
            {caseStudies.map((project, idx) => (
              <div key={idx} className="drum-card" style={{ borderColor: 'rgba(6, 182, 212, 0.25)' }}>
                <div className="drum-badge-top" style={{ color: '#38bdf8', borderColor: 'rgba(6, 182, 212, 0.3)', background: 'rgba(6, 182, 212, 0.12)' }}>
                  {project.category}
                </div>
                <h3 className="drum-title" style={{ marginTop: '1rem', fontSize: '1.25rem' }}>{project.title}</h3>
                <p className="drum-best-for" style={{ minHeight: 'auto', marginBottom: '1rem' }}>{project.desc}</p>
                
                <div style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '1.25rem', aspectRatio: '16/10' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>Specs:</strong>
                  {project.specs}
                </div>

                <button
                  onClick={() => {
                    const text = encodeURIComponent(`Hi Victor, I saw your engineering project "${project.title}" and would like to discuss a similar technical requirement.`);
                    window.open(`https://wa.me/254758286766?text=${text}`, '_blank');
                  }}
                  className="btn-whatsapp-order"
                  style={{ background: 'linear-gradient(135deg, var(--accent-cyan), #0284c7)', color: '#000' }}
                >
                  <span>⚙️</span> Inquire About This Solution
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Consultation Form */}
      <section id="engineering-inquiry" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag cyan">Work With Victor</span>
            <h2 className="section-title">Request Technical Consultation & Fabrication</h2>
            <p className="section-desc">
              Have mechanical drawings, machine parts requiring fabrication, or technical problem solving needed?
            </p>
          </div>

          <div className="quote-builder-card">
            <form onSubmit={handleInquirySubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label>Project Scope / Service *</label>
                  <select 
                    className="form-select" 
                    value={projectType} 
                    onChange={(e) => setProjectType(e.target.value)}
                  >
                    <option value="3D CAD Modeling & Drafting">3D CAD Modeling & Drafting (SolidWorks / AutoCAD)</option>
                    <option value="Structural Metal Fabrication & Welding">Structural Metal Fabrication & Welding</option>
                    <option value="Machinery Diagnostics & Repair">Machinery Diagnostics & Troubleshooting</option>
                    <option value="Custom Mechanical Prototype Development">Custom Mechanical Prototype Development</option>
                    <option value="Cardboard Drum Reinforcement & Sealing">Cardboard Drum Reinforcement & Sealing</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Desired Timeline *</label>
                  <select 
                    className="form-select" 
                    value={timeline} 
                    onChange={(e) => setTimeline(e.target.value)}
                  >
                    <option value="Urgent (< 3 days)">Urgent (under 3 days)</option>
                    <option value="Standard (1 - 2 weeks)">Standard (1 - 2 weeks)</option>
                    <option value="Flexible / Multi-Phase">Flexible / Multi-Phase Development</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Eng. Kipchumba" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Your Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="e.g. 07XXXXXXXX" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Technical Details, Dimensions or Specifications</label>
                <textarea 
                  className="form-textarea" 
                  rows="3" 
                  placeholder="Specify material types, torque requirements, tolerances, or attach link to blueprints..."
                  value={specs} 
                  onChange={(e) => setSpecs(e.target.value)}
                ></textarea>
              </div>

              <div className="form-actions-row">
                <button 
                  type="submit" 
                  className="btn-send-whatsapp"
                  style={{ background: 'linear-gradient(135deg, var(--accent-cyan), #0284c7)', color: '#000' }}
                >
                  <span>⚙️</span> Send Inquiry via WhatsApp (0758286766)
                </button>
                <a 
                  href="mailto:erictoo04@gmail.com?subject=Mechanical%20Engineering%20Technical%20Consultation"
                  className="btn-send-email"
                  style={{ textAlign: 'center' }}
                >
                  <span>✉️</span> Email Blueprints (erictoo04@gmail.com)
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

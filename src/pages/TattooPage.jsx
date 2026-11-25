import React, { useState } from 'react';

export default function TattooPage() {
  const [style, setStyle] = useState('Fine-Line / Micro Realism');
  const [placement, setPlacement] = useState('Forearm / Wrist');
  const [size, setSize] = useState('Medium (4-6 inches)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTattooImage, setSelectedTattooImage] = useState(null);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    let message = `*TATTOO CONSULTATION / BOOKING REQUEST*\n`;
    message += `👤 Client Name: ${name || 'Prospective Client'}\n`;
    message += `📞 Phone: ${phone || 'Not provided'}\n`;
    message += `──────────────────\n`;
    message += `✒️ *Style:* ${style}\n`;
    message += `📍 *Placement:* ${placement}\n`;
    message += `📏 *Estimated Size:* ${size}\n`;
    if (description) {
      message += `💡 *Design Concept / Idea:* ${description}\n`;
    }
    message += `──────────────────\n`;
    message += `Sent from Victor Too's official Tattoo Studio page.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/254758286766?text=${encoded}`, '_blank');
  };

  const tattooStyles = [
    {
      title: "Fine-Line & Botanical",
      badge: "Signature Craft",
      desc: "Delicate single-needle and 3RL micro-linework. Perfect for delicate florals, minimalist geometry, and subtle, elegant anatomy placements.",
      image: "assets/images/tatoo.jpeg"
    },
    {
      title: "Sacred Geometry & Mandalas",
      badge: "Engineering Precision",
      desc: "Mathematical symmetry and concentric circular patterns executed with surgical accuracy and uniform line weights that never bleed together.",
      image: "assets/images/tatoo.jpeg"
    },
    {
      title: "Black & Grey Realism",
      badge: "Deep Contrast",
      desc: "Rich stipple gradients, portraits, statues, and dynamic animal designs built with layered greywash tones that age smoothly into healed perfection.",
      image: "assets/images/tatoo.jpeg"
    },
    {
      title: "Custom Script & Lettering",
      badge: "Bespoke Typography",
      desc: "Handcrafted calligraphic scripts, gothic lettering, and meaningful quotes designed to follow the natural contour of muscle groups.",
      image: "assets/images/tatoo.jpeg"
    },
    {
      title: "Cover-Ups & Restorations",
      badge: "Transformation",
      desc: "Strategic restructuring of old, faded, or regretful tattoos using calculated dark saturation and organic flow to give skin a fresh beginning.",
      image: "assets/images/tatoo.jpeg"
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="#/">Home</a> <span>/</span> <span>Tattoo Art Studio</span>
          </div>
          <div className="page-hero-grid">
            <div>
              <span className="section-tag" style={{ color: '#ec4899' }}>Bespoke Tattoo Studio</span>
              <h1 className="page-hero-title">
                Artistry Meets <br />
                <span style={{ color: '#ec4899' }}>Surgical Precision</span>
              </h1>
              <p className="page-hero-subtitle">
                Welcome to Victor Too's private tattoo studio. Transforming concepts into 
                permanent wearable art with engineering-level hand stability, custom stencil drafting, 
                and uncompromising hospital-grade sterilization protocols.
              </p>

              <div className="hero-social-links-row" style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://www.instagram.com/captainniccure?hvrq=cXk3bjljNGo4MWE3" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill-btn"
                  style={{ background: 'linear-gradient(135deg, #e1306c, #833ab4)', padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
                >
                  <span>📸</span> Follow on Instagram: @captainniccure
                </a>
                <a 
                  href="https://www.tiktok.com/@captain.icur" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill-btn tiktok"
                  style={{ background: '#000', border: '1px solid #00f2fe', color: '#00f2fe', padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
                >
                  <span>🎵</span> Watch on TikTok: @captain.icur
                </a>
              </div>

              <div className="hero-cta-group">
                <a 
                  href="#book-tattoo" 
                  className="btn-primary" 
                  style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)', color: '#fff' }}
                >
                  <span>✒️</span> Book Tattoo Consultation
                </a>
                <a href="#styles" className="btn-secondary">
                  <span>🎨</span> Explore Art Styles
                </a>
              </div>
            </div>

            <div className="page-hero-visual">
              <img 
                src="assets/images/tatoo.jpeg" 
                alt="Victor Too Tattoo Workstation and Sketches" 
              />
              <div className="visual-caption-badge">
                <span>✒️ Hospital-Grade Hygiene • Bishop Rotary Pen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sterile Clinical Hygiene Standards */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: '#ec4899' }}>Health & Safety First</span>
            <h2 className="section-title">Clinical Hygiene & Sterilization Standard</h2>
            <p className="section-desc">
              Your safety is sacred. Every setup in Victor Too's studio adheres to stringent cross-contamination controls.
            </p>
          </div>

          <div className="grain-features-grid">
            <div className="benefit-card">
              <div className="benefit-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899', borderColor: 'rgba(236, 72, 153, 0.3)' }}>
                🏥
              </div>
              <h4>100% Single-Use Cartridges</h4>
              <p>Each needle cartridge is individual blister-packed, pre-sterilized via Ethylene Oxide (EO) gas, and opened only in your direct presence.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899', borderColor: 'rgba(236, 72, 153, 0.3)' }}>
                🛡️
              </div>
              <h4>Hospital-Grade Biocides</h4>
              <p>All work surfaces, armrests, and trays are disinfected before and after every appointment using certified hospital-grade biocides.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899', borderColor: 'rgba(236, 72, 153, 0.3)' }}>
                🌱
              </div>
              <h4>Certified Vegan Organic Inks</h4>
              <p>We use top-tier inks (Dynamic, Eternal) formulated without heavy metal impurities or toxic carriers, ensuring safe healing and lasting vibrancy.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899', borderColor: 'rgba(236, 72, 153, 0.3)' }}>
                ✨
              </div>
              <h4>Full Barrier Film Wrap</h4>
              <p>Clip cords, power supplies, wash bottles, and rotary pens are sleeved in disposable barrier films, eliminating cross-contact risks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Journey */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: '#ec4899' }}>How It Works</span>
            <h2 className="section-title">The Tattoo Experience</h2>
            <p className="section-desc">
              From first concept to healed masterpiece — transparent, comfortable, and professional.
            </p>
          </div>

          <div className="steps-timeline-grid">
            <div className="step-card">
              <div className="step-number" style={{ background: '#ec4899' }}>1</div>
              <h4>Design Consultation</h4>
              <p>Discuss your references, placement, size, and meaning. Victor reviews anatomy flow and drafts custom ideas.</p>
            </div>
            <div className="step-card">
              <div className="step-number" style={{ background: '#ec4899' }}>2</div>
              <h4>Stencil Placement & Fit</h4>
              <p>The thermal stencil is placed on your skin and checked in natural standing posture to ensure perfect symmetry and alignment.</p>
            </div>
            <div className="step-card">
              <div className="step-number" style={{ background: '#ec4899' }}>3</div>
              <h4>The Inking Session</h4>
              <p>Executed with gentle hand technique, calibrated stroke depth, and soothing sterile antibacterial green soap wipes.</p>
            </div>
            <div className="step-card">
              <div className="step-number" style={{ background: '#ec4899' }}>4</div>
              <h4>Second-Skin Bandaging</h4>
              <p>We apply breathable, waterproof dermal adhesive film (second-skin) that protects your fresh tattoo from germs and friction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Aftercare Guide */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: '#ec4899' }}>Preserve Your Ink</span>
            <h2 className="section-title">Tattoo Aftercare Guide</h2>
            <p className="section-desc">
              Great tattoos are 50% inking precision and 50% diligent healing. Follow these golden rules:
            </p>
          </div>

          <div className="comparison-cards-row">
            <div className="solution-box" style={{ borderColor: 'rgba(236, 72, 153, 0.3)', background: 'rgba(236, 72, 153, 0.05)' }}>
              <h3 style={{ color: '#f472b6', marginBottom: '1rem' }}>
                Days 1 to 4: The Healing Seal
              </h3>
              <ul className="styled-list">
                <li><strong>Keep Film On:</strong> Leave the medical second-skin bandage on for 3 to 4 days unless it leaks or peels off.</li>
                <li><strong>Gentle Wash:</strong> Remove film under lukewarm running water. Wash with fragrance-free antibacterial soap using fingertips only.</li>
                <li><strong>Pat Dry:</strong> Gently pat dry with a clean paper towel. Never rub with a bath towel.</li>
                <li><strong>Thin Moisturizer:</strong> Apply a tiny pea-sized drop of fragrance-free lotion (e.g. Bepanthen, CeraVe, or coconut butter). Do not suffocate the skin.</li>
              </ul>
            </div>

            <div className="problem-box" style={{ borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              <h3 style={{ color: '#fbbf24', marginBottom: '1rem' }}>
                Days 5 to 21: The Peeling Phase & Rules
              </h3>
              <ul className="styled-list">
                <li><strong>NO Scratching or Picking:</strong> The tattoo will flake like a sunburn. Let scabs fall off naturally to prevent ink fallout.</li>
                <li><strong>NO Submerging in Water:</strong> Quick showers only. Avoid swimming pools, lakes, jacuzzis, and soaking bathtubs for 3 full weeks.</li>
                <li><strong>NO Direct Sun Exposure:</strong> Keep the healing tattoo shaded. Once healed, always apply SPF 50 sunscreen to maintain lifetime contrast.</li>
                <li><strong>Wear Loose Clothing:</strong> Prevent tight fabric friction against the healing artwork.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tattoo Samples Showcase */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: '#ec4899' }}>Tattoo Art Samples</span>
            <h2 className="section-title">Tattoo Artwork Samples</h2>
            <p className="section-desc">
              Explore Victor Too's tattoo artwork samples showcasing fine-line botanicals, sacred geometry, black & grey realism, and custom lettering. Click any image to view full screen.
            </p>
          </div>

          <div className="samples-grid">
            {[
              { num: 1, title: "Tattoo Sample 01", desc: "Delicate fine-line botanical piece with single-needle precision, showcasing natural floral linework and subtle shading.", file: "tattoo01.jpeg" },
              { num: 2, title: "Tattoo Sample 02", desc: "Sacred geometry mandala with mathematical symmetry and uniform line weights, executed with surgical accuracy.", file: "tattoo02.jpeg" },
              { num: 3, title: "Tattoo Sample 03", desc: "Black & grey realism piece featuring rich stipple gradients and layered greywash tones for deep contrast.", file: "tattoo03.jpeg" }
            ].map((sample) => (
              <div key={sample.num} className="sample-card" onClick={() => setSelectedTattooImage(`assets/images/${sample.file}`)}>
                <div className="sample-img-wrap">
                  <img 
                    src={`assets/images/${sample.file}`} 
                    alt={sample.title}
                    loading="lazy"
                  />
                  <span className="sample-badge" style={{ color: '#f472b6', borderColor: 'rgba(236, 72, 153, 0.4)', background: 'rgba(236, 72, 153, 0.15)' }}>Sample {sample.num}</span>
                </div>
                <div className="sample-info">
                  <h4>{sample.title}</h4>
                  <p>{sample.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Tattoo Image Modal */}
      {selectedTattooImage && (
        <div className="sample-modal-overlay" onClick={() => setSelectedTattooImage(null)}>
          <div className="sample-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="sample-modal-close" onClick={() => setSelectedTattooImage(null)} aria-label="Close full-screen view">✕</button>
            <img src={selectedTattooImage} alt="Tattoo Sample Full Screen" />
          </div>
        </div>
      )}

      {/* Dedicated Booking Builder */}
      <section id="book-tattoo" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: '#ec4899' }}>Reserve Your Session</span>
            <h2 className="section-title">Book a Tattoo Consultation</h2>
            <p className="section-desc">
              Share your placement and design vision. Victor will review your request and get back with consultation dates.
            </p>
          </div>

          <div className="quote-builder-card">
            <form onSubmit={handleBookingSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label>Tattoo Style *</label>
                  <select 
                    className="form-select" 
                    value={style} 
                    onChange={(e) => setStyle(e.target.value)}
                  >
                    <option value="Fine-Line / Micro Realism">Fine-Line / Botanical Micro Realism</option>
                    <option value="Sacred Geometry & Mandalas">Sacred Geometry & Mandalas</option>
                    <option value="Black & Grey Realism">Black & Grey Realism & Shading</option>
                    <option value="Custom Lettering & Calligraphy">Custom Script & Calligraphy</option>
                    <option value="Cover-Up / Rework">Cover-Up of Old Tattoo</option>
                    <option value="Custom Concept Consultation">Custom Concept Discussion</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Body Placement *</label>
                  <select 
                    className="form-select" 
                    value={placement} 
                    onChange={(e) => setPlacement(e.target.value)}
                  >
                    <option value="Forearm / Wrist">Forearm / Wrist</option>
                    <option value="Upper Arm / Bicep / Shoulder">Upper Arm / Shoulder / Bicep</option>
                    <option value="Full Sleeve">Full Arm Sleeve</option>
                    <option value="Back / Shoulder Blade">Back / Shoulder Blade</option>
                    <option value="Chest / Ribs">Chest / Ribs</option>
                    <option value="Leg / Calf / Ankle / Thigh">Leg / Calf / Thigh / Ankle</option>
                    <option value="Neck / Behind Ear">Neck / Behind Ear</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Estimated Size *</label>
                  <select 
                    className="form-select" 
                    value={size} 
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option value="Small (<3 inches)">Small (under 3 inches) - Quick 1-hr session</option>
                    <option value="Medium (4-6 inches)">Medium (4 to 6 inches) - 2-3 hours</option>
                    <option value="Large (7-10 inches)">Large (7 to 10 inches) - Half day session</option>
                    <option value="Full Day / Multi-Session">Full Day / Multi-Session Project</option>
                  </select>
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
                <label>Your Full Name *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Victor Too / Alex" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Design Concept, Reference Ideas or Meaning</label>
                <textarea 
                  className="form-textarea" 
                  rows="3" 
                  placeholder="Describe what you want drawn, reference images you have on Instagram, or if this is a cover-up..."
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-actions-row">
                <button 
                  type="submit" 
                  className="btn-send-whatsapp"
                  style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)', color: '#fff' }}
                >
                  <span>✒️</span> Send Booking Request via WhatsApp (0758286766)
                </button>
                <a 
                  href="https://www.instagram.com/captainniccure?hvrq=cXk3bjljNGo4MWE3" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-send-email"
                  style={{ textAlign: 'center' }}
                >
                  <span>📸</span> DM on Instagram (@captainniccure)
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

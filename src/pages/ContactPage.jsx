import React, { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    let text = `*DIRECT CONTACT INQUIRY - VICTOR TOO*\n`;
    text += `👤 Name: ${name || 'Prospective Client'}\n`;
    text += `📞 Phone: ${phone || 'Not provided'}\n`;
    if (email) text += `✉️ Email: ${email}\n`;
    text += `📌 Subject: ${subject}\n`;
    if (message) text += `💬 Message: ${message}\n`;
    text += `──────────────────\n`;
    text += `Sent from Victor Too's Contact Page.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/254758286766?text=${encoded}`, '_blank');
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(`[Website Inquiry] ${subject} - ${name || 'Client'}`);
    let body = `Hello Victor,\n\nName: ${name || 'N/A'}\nPhone: ${phone || 'N/A'}\nEmail: ${email || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}\n\nBest regards,\n${name || 'Client'}`;
    const encodedBody = encodeURIComponent(body);
    window.open(`mailto:erictoo04@gmail.com?subject=${mailSubject}&body=${encodedBody}`, '_blank');
  };

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="#/">Home</a> <span>/</span> <span>Contact & Verification</span>
          </div>
          <div className="page-hero-grid">
            <div>
              <span className="section-tag">Direct Communication</span>
              <h1 className="page-hero-title">
                Get in Touch with <br />
                <span className="gradient-text">Victor Too</span>
              </h1>
              <p className="page-hero-subtitle">
                Whether you need moisture-proof grain storage drums delivered across Kenya, 
                want to reserve a custom sterile tattoo session, or wish to consult on a mechanical 
                engineering or fabrication design, reach out directly.
              </p>
              <div className="hero-cta-group">
                <a 
                  href="https://wa.me/254758286766?text=Hello%20Victor,%20I'm%20contacting%20you%20via%20your%20website." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                  style={{ background: '#10b981', color: '#000' }}
                >
                  <span>💬</span> WhatsApp: 0758286766
                </a>
                <a href="tel:0758286766" className="btn-secondary">
                  <span>📞</span> Call: 0758286766
                </a>
              </div>
            </div>

            <div className="page-hero-visual">
              <div className="credentials-banner" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1.25rem', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🛡️</span>
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.2rem' }}>Verified Professional Identity</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Government of Kenya Verified Citizen & Practitioner</p>
                  </div>
                </div>
                <div className="id-badge-large" style={{ fontSize: '1.2rem', padding: '0.8rem 1.5rem', width: '100%', textAlign: 'center' }}>
                  NATIONAL ID: 41702892
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                  Transacting with confidence. Guarantees authenticity, prompt delivery of grain drums, 
                  and adherence to commercial and hygiene contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Cards */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct Lines</span>
            <h2 className="section-title">Official Communication Channels</h2>
            <p className="section-desc">
              All direct communication is handled personally by Victor Too.
            </p>
          </div>

          <div className="contact-cards-grid">
            <a href="tel:0758286766" className="contact-card">
              <div className="contact-card-icon phone">📞</div>
              <h4>Direct Phone Call</h4>
              <p>For urgent orders, delivery confirmations & inquiries</p>
              <div className="card-action-text">0758286766</div>
            </a>

            <a 
              href="https://wa.me/254758286766?text=Hello%20Victor,%20I'm%20contacting%20you%20via%20your%20website." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-card-icon whatsapp">💬</div>
              <h4>WhatsApp Chat</h4>
              <p>Fast messaging, photo references, orders & location sharing</p>
              <div className="card-action-text" style={{ color: '#34d399' }}>+254 758 286 766</div>
            </a>

            <a href="mailto:erictoo04@gmail.com?subject=Website%20Inquiry%20for%20Victor%20Too" className="contact-card">
              <div className="contact-card-icon email">✉️</div>
              <h4>Official Email</h4>
              <p>For CAD blueprints, formal quotations & proposals</p>
              <div className="card-action-text" style={{ color: '#60a5fa' }}>erictoo04@gmail.com</div>
            </a>

            <a 
              href="https://www.instagram.com/fluffy_lizz?xtok=OGtzN3VpY3BoMnpy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-card-icon social">📸</div>
              <h4>Instagram Profile</h4>
              <p>Portfolio reels, live ink sessions & flash releases</p>
              <div className="card-action-text" style={{ color: '#f472b6' }}>@fluffy_lizz</div>
            </a>

            <a 
              href="https://www.tiktok.com/@captain.icur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-card-icon" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>🎵</div>
              <h4>TikTok Channel</h4>
              <p>Workshops, mechanical designs & creative process</p>
              <div className="card-action-text" style={{ color: '#38bdf8' }}>@captain.icur</div>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Message Form */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct Inquiry Form</span>
            <h2 className="section-title">Send a Message or Request</h2>
            <p className="section-desc">
              Fill out this form and choose whether to dispatch your message via WhatsApp or Email.
            </p>
          </div>

          <div className="quote-builder-card">
            <form onSubmit={handleSendWhatsApp}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Victor / Alex" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Phone / WhatsApp Number *</label>
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

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Email Address (Optional)</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="your.email@example.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>

                <div className="form-group">
                  <label>Inquiry Topic / Service *</label>
                  <select 
                    className="form-select" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="Cardboard Grain Drums Order">Cardboard Grain Drums Order (Thick Cardboard with Metal Rings)</option>
                    <option value="Tattoo Session Booking">Tattoo Session Booking / Consultation</option>
                    <option value="Mechanical Engineering CAD & Fabrication">Mechanical Engineering CAD & Fabrication</option>
                    <option value="Bulk Farm Supply Partnership">Bulk Farm Supply / Cooperative Partnership</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Your Message or Project Details *</label>
                <textarea 
                  className="form-textarea" 
                  rows="4" 
                  placeholder="Share details about what you need, your town/county, or any specific questions..."
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="form-actions-row">
                <button type="submit" className="btn-send-whatsapp">
                  <span>💬</span> Send to WhatsApp (0758286766)
                </button>
                <button type="button" onClick={handleSendEmail} className="btn-send-email">
                  <span>✉️</span> Send to Email (erictoo04@gmail.com)
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

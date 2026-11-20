import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Lines</span>
          <h2 className="section-title">Get in Touch with Victor Too</h2>
          <p className="section-desc">
            Ready to order moisture-proof grain storage drums, discuss a custom tattoo piece, 
            or review engineering blueprints? Reach out directly via phone, WhatsApp, or socials.
          </p>
        </div>

        <div className="contact-cards-grid">
          {/* Phone Card */}
          <a href="tel:0758286766" className="contact-card">
            <div className="contact-card-icon phone">📞</div>
            <h4>Call Directly</h4>
            <p>Immediate phone inquiry for urgent orders & discussions</p>
            <div className="card-action-text">0758286766</div>
          </a>

          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/254758286766?text=Hello%20Victor,%20I'm%20contacting%20you%20via%20your%20website." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
          >
            <div className="contact-card-icon whatsapp">💬</div>
            <h4>WhatsApp Chat</h4>
            <p>Instant messaging, photo sharing & fast quotations</p>
            <div className="card-action-text" style={{ color: '#34d399' }}>+254 758 286 766</div>
          </a>

          {/* Email Card */}
          <a href="mailto:erictoo04@gmail.com?subject=Website%20Inquiry%20for%20Victor%20Too" className="contact-card">
            <div className="contact-card-icon email">✉️</div>
            <h4>Email Inquiry</h4>
            <p>For technical drawings, formal quotations & proposals</p>
            <div className="card-action-text" style={{ color: '#60a5fa' }}>erictoo04@gmail.com</div>
          </a>

          {/* Instagram Card */}
          <a 
            href="https://www.instagram.com/fluffy_lizz?xtok=OGtzN3VpY3BoMnpy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
          >
            <div className="contact-card-icon social">📸</div>
            <h4>Instagram Reels</h4>
            <p>Tattoo portfolio, flash drops & live inking sessions</p>
            <div className="card-action-text" style={{ color: '#f472b6' }}>@fluffy_lizz</div>
          </a>

          {/* TikTok Card */}
          <a 
            href="https://www.tiktok.com/@captain.icur" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
          >
            <div className="contact-card-icon" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>🎵</div>
            <h4>TikTok Channel</h4>
            <p>Artistic process, behind-the-scenes & workshops</p>
            <div className="card-action-text" style={{ color: '#38bdf8' }}>@captain.icur</div>
          </a>
        </div>

        {/* Verified Credential & Registration Strip */}
        <div className="credentials-banner">
          <div className="cred-left">
            <span className="cred-shield">🛡️</span>
            <div className="cred-text">
              <h4>Official Verification & Accountability</h4>
              <p>
                Transacting with confidence. Victor Too is a registered professional operating in Kenya, 
                guaranteeing high standard delivery of agricultural storage drums and sterile tattoo services.
              </p>
            </div>
          </div>
          <div className="cred-right">
            <div className="id-badge-large">
              NATIONAL ID: 41702892
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

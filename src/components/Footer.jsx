import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Victor Too</h3>
            <p>
              Tattoo Artist • Moisture-Proof Cardboard Drums with Metal Rings • Finishing Mechanical Engineering. 
              Engineering precision and creative artistry serving clients nationwide across Kenya.
            </p>
            <div className="footer-social-row">
              <a 
                href="https://www.instagram.com/fluffy_lizz?xtok=OGtzN3VpY3BoMnpy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                title="Instagram (@fluffy_lizz)"
              >
                📸
              </a>
              <a 
                href="https://www.tiktok.com/@captain.icur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                title="TikTok (@captain.icur)"
              >
                🎵
              </a>
              <a 
                href="https://wa.me/254758286766" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                title="WhatsApp (0758286766)"
              >
                💬
              </a>
              <a 
                href="mailto:erictoo04@gmail.com" 
                className="footer-social-link"
                title="Email (erictoo04@gmail.com)"
              >
                ✉️
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Dedicated Pages</h5>
            <ul>
              <li><a href="#/">Home Overview</a></li>
              <li><a href="#/drums">Drums Page</a></li>
              <li><a href="#/tattoo">Tattoo Art Studio Page</a></li>
              <li><a href="#/engineering">Mechanical Engineering Page</a></li>
              <li><a href="#/contact">Contact & Credentials Page</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Direct Contact</h5>
            <ul>
              <li><a href="tel:0758286766">Phone: 0758286766</a></li>
              <li><a href="https://wa.me/254758286766">WhatsApp: +254 758 286 766</a></li>
              <li><a href="mailto:erictoo04@gmail.com">erictoo04@gmail.com</a></li>
              <li><span style={{ color: 'var(--accent-amber)', fontSize: '0.85rem', fontWeight: 600 }}>National ID: 41702892</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Victor Too. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Crafted with React & Modern Web Standards</span>
            <span>•</span>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ color: 'var(--accent-amber)', fontWeight: 600, cursor: 'pointer' }}>
              Back to Top ↑
            </a>
          </p>
        </div>
      </div>

      {/* Floating Instant WhatsApp Button */}
      <a 
        href="https://wa.me/254758286766?text=Hi%20Victor,%20I'm%20contacting%20you%20via%20your%20website." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-btn"
        aria-label="Direct WhatsApp Chat"
        title="Chat with Victor Too on WhatsApp"
      >
        💬
      </a>
    </footer>
  );
}

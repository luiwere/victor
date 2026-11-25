import React from 'react';

export default function PillarTattoo() {
  return (
    <section id="tattoo" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" style={{ color: '#ec4899' }}>Artistic Discipline</span>
          <h2 className="section-title">Custom Tattoo Artistry & Studio</h2>
          <p className="section-desc">
            Translating personal stories, sacred geometry, and anatomy-conscious blackwork into permanent masterpieces. 
            Executed with engineering-level hand stability and uncompromising hygiene protocols.
          </p>
        </div>

        <div className="tattoo-showcase-grid">
          <div className="tattoo-image-container">
            <img 
              src="assets/images/tatoo.jpeg" 
              alt="Victor Too Tattoo Art Studio & Equipment" 
            />
            <div className="tattoo-social-overlay">
              <a 
                href="https://www.instagram.com/captainniccure?hvrq=cXk3bjljNGo4MWE3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-pill-btn"
              >
                <span>📸</span> IG @captainniccure
              </a>
              <a 
                href="https://www.tiktok.com/@captain.icur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-pill-btn tiktok"
              >
                <span>🎵</span> TikTok @captain.icur
              </a>
            </div>
          </div>

          <div className="tattoo-content-col">
            <h3>Wearable Art Built on Precision & Safety</h3>
            <p>
              Every tattoo is more than just ink — it is a collaborative design process. 
              Whether you are looking for micro fine-line botanicals, full-contrast black & grey realism, 
              intricate lettering, or transformative cover-ups, Victor crafts stencils customized to flow 
              organically with your body's natural contours.
            </p>

            <div className="tattoo-highlights-list">
              <div className="tattoo-highlight-item">
                <strong>🏥 Sterile Clinical Hygiene</strong>
                <span>100% single-use EO-sterilized membrane cartridges, medical barriers, and hospital-grade biocides.</span>
              </div>
              <div className="tattoo-highlight-item">
                <strong>📐 Geometric & Line Symmetry</strong>
                <span>Calculated line weights and stipple gradients that age gracefully over years without blowing out.</span>
              </div>
              <div className="tattoo-highlight-item">
                <strong>✨ Custom Stencils & Cover-ups</strong>
                <span>Specialized in redesigning old faded work into dynamic, vibrant new concepts.</span>
              </div>
              <div className="tattoo-highlight-item">
                <strong>💧 Premium Aftercare Support</strong>
                <span>Comprehensive healing walkthrough, dermal second-skin bandages, and follow-up guidance.</span>
              </div>
            </div>

            <div className="hero-cta-group" style={{ marginBottom: 0 }}>
              <a 
                href="https://wa.me/254758286766?text=Hi%20Victor,%20I'd%20like%20to%20consult%20about%20a%20tattoo%20design%20and%20booking." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)', color: '#fff' }}
              >
                <span>✒️</span> Book Tattoo Consultation
              </a>
              <a 
                href="https://www.instagram.com/captainniccure?hvrq=cXk3bjljNGo4MWE3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                View Instagram Reels
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

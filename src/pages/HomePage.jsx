import React from 'react';
import Hero from '../components/Hero';
import PortfolioFilter from '../components/PortfolioFilter';
import QuoteCalculator from '../components/QuoteCalculator';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="home-page-view">
      <Hero />

      {/* The 3 Core Portals Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Dedicated Specialized Portals</span>
            <h2 className="section-title">Explore Victor Too's Three Disciplines</h2>
            <p className="section-desc">
              Each discipline is operated with deep focus, certified tools, and dedicated service standards. 
              Click into any portal to view in-depth details, specifications, and direct ordering.
            </p>
          </div>

          <div className="portal-cards-grid">
            {/* Portal 1: Drums */}
            <div className="portal-card drum-portal">
              <div className="portal-img-wrap">
                <img 
                  src="assets/images/drums.jpeg" 
                  alt="Thick Cardboard Drums with Metal Rings" 
                />
                <span className="portal-badge green">Moisture-Proof Storage</span>
              </div>
              <div className="portal-body">
                <h3>Drums Page</h3>
                <p>
                  Thick cardboard drums reinforced with galvanized metal rings, primarily used to store grains 
                  because they keep them 100% free from moisture, internal sweating, and mold.
                </p>
                <div className="portal-highlights">
                  <span>🛡️ Zero Sweating</span>
                  <span>⚙️ Galvanized Rings</span>
                  <span>🚚 Nationwide Delivery</span>
                </div>
                <a href="#/drums" className="btn-portal-action green">
                  Explore Drums Page <span>→</span>
                </a>
              </div>
            </div>

            {/* Portal 2: Tattoo Artistry */}
            <div className="portal-card tattoo-portal">
              <div className="portal-img-wrap">
                <img 
                  src="assets/images/tatoo.jpeg" 
                  alt="Tattoo Studio & Art Equipment" 
                />
                <span className="portal-badge pink">Artisan Studio</span>
              </div>
              <div className="portal-body">
                <h3>Custom Tattoo Artistry & Studio</h3>
                <p>
                  Wearable art tailored to human anatomy. Specializing in fine-line botanicals, 
                  sacred geometry, black & grey realism, lettering, and cover-ups with clinical sterilization.
                </p>
                <div className="portal-highlights">
                  <span>📸 IG: @captainniccure</span>
                  <span>🎵 TikTok: @captain.icur</span>
                  <span>🏥 100% Sterile</span>
                </div>
                <a href="#/tattoo" className="btn-portal-action pink">
                  Explore Tattoo Studio Page <span>→</span>
                </a>
              </div>
            </div>

            {/* Portal 3: Mechanical Engineering */}
            <div className="portal-card eng-portal">
              <div className="portal-img-wrap">
                <img 
                  src="assets/images/engineer.jpeg" 
                  alt="Mechanical Engineering CAD & Workshop" 
                />
                <span className="portal-badge cyan">Technical Foundation</span>
              </div>
              <div className="portal-body">
                <h3>Mechanical Engineering & Fabrication</h3>
                <p>
                  Finishing up qualifications in Mechanical Engineering. Delivering precision 
                  3D CAD drafting in SolidWorks, structural metal fabrication, welding jigs, and machinery repair.
                </p>
                <div className="portal-highlights">
                  <span>📐 3D CAD SolidWorks</span>
                  <span>⚡ Structural Welding</span>
                  <span>🎓 Final-Year Degree</span>
                </div>
                <a href="#/engineering" className="btn-portal-action cyan">
                  Explore Engineering Page <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Filter (3 unique works, no duplicates) */}
      <PortfolioFilter />

      {/* Quick Universal Quote Calculator */}
      <QuoteCalculator />

      {/* Direct Contact & Verification Section */}
      <ContactSection />
    </div>
  );
}

import React from 'react';
import { drumSpecs, grainBenefits } from '../data/drumSpecs';

export default function PillarDrums() {
  const handleOrderClick = (drum) => {
    const text = encodeURIComponent(
      `Hello Victor, I want to order the ${drum.name} (${drum.volume}, capacity ${drum.capacityKg}). Please send pricing and delivery details.`
    );
    window.open(`https://wa.me/254758286766?text=${text}`, '_blank');
  };

  return (
    <section id="drums" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag green">Core Commercial Offering</span>
          <h2 className="section-title">Moisture-Proof Grain Storage Drums</h2>
          <p className="section-desc">
            Safeguard your valuable harvest from dampness, aflatoxin mold, and destructive weevils. 
            Engineered with thick multi-wall kraft cardboard that prevents internal condensation sweating, 
            reinforced by galvanized metal chimes and lever-action clamp locking rings.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grain-features-grid">
          {grainBenefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                {index === 0 && '🛡️'}
                {index === 1 && '🚫'}
                {index === 2 && '📈'}
                {index === 3 && '🌱'}
              </div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Catalog of Drum Sizes */}
        <div className="drums-catalog-grid">
          {drumSpecs.map((drum) => (
            <div 
              key={drum.id} 
              className={`drum-card ${drum.isFeatured ? 'featured' : ''}`}
            >
              {drum.tag && <div className="drum-badge-top">{drum.tag}</div>}
              
              <div className="drum-capacity-highlight">
                {drum.volume}
                <span> / {drum.capacityKg}</span>
              </div>
              <h3 className="drum-title">{drum.name}</h3>
              <p className="drum-best-for">{drum.bestFor}</p>

              <ul className="drum-features-list">
                {drum.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="drum-grains-tags">
                {drum.popularGrains.map((grain, gIdx) => (
                  <span key={gIdx}>#{grain}</span>
                ))}
              </div>

              <button 
                onClick={() => handleOrderClick(drum)} 
                className="btn-whatsapp-order"
              >
                <span>💬</span> Order on WhatsApp (0758286766)
              </button>
            </div>
          ))}
        </div>

        {/* Scientific Guarantee Banner */}
        <div className="credentials-banner">
          <div className="cred-left">
            <span className="cred-shield">🔬</span>
            <div className="cred-text">
              <h4>Moisture-Proof Thermal Insulation Guarantee</h4>
              <p>
                Thick kraft cardboard acts as a natural thermal insulator that eliminates internal condensation sweating,
                keeping grains safely below 13% critical moisture without requiring hazardous dusting chemicals like Actellic.
              </p>
            </div>
          </div>
          <div className="cred-right">
            <a 
              href="https://wa.me/254758286766?text=Hi%20Victor,%20I%20need%20bulk%20grain%20storage%20drums%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request Bulk Farm Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

export default function DrumsPage() {
  const [quantity, setQuantity] = useState(2);
  const [grainType, setGrainType] = useState('Maize / Corn');
  const [location, setLocation] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    let message = `*CARDBOARD DRUMS WITH METAL RINGS ORDER / INQUIRY*\n`;
    message += `👤 Name: ${customerName || 'Farmer / Client'}\n`;
    message += `📞 Phone: ${customerPhone || 'Not provided'}\n`;
    message += `──────────────────\n`;
    message += `📦 *Item:* Thick Cardboard Drums with Metal Rings\n`;
    message += `🔢 *Quantity:* ${quantity} Units\n`;
    message += `🌾 *Stored Grain:* ${grainType}\n`;
    message += `📍 *Delivery Town/County:* ${location || 'To be confirmed'}\n`;
    if (notes) {
      message += `📝 *Notes/Requirements:* ${notes}\n`;
    }
    message += `──────────────────\n`;
    message += `Sent from Victor Too's Drums Page.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/254758286766?text=${encoded}`, '_blank');
  };

  return (
    <div className="page-wrapper">
      {/* Page Header / Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="#/">Home</a> <span>/</span> <span>Drums</span>
          </div>
          <div className="page-hero-grid">
            <div>
              <span className="section-tag green">Moisture-Proof Storage</span>
              <h1 className="page-hero-title">
                Drums Page
              </h1>
              <p className="page-hero-subtitle">
                Thick cardboard drums reinforced with sturdy galvanized metal rings, primarily used 
                to store grains because they keep them completely free from moisture. 
                Unlike plastic or steel containers that sweat and produce condensation when temperatures swing, 
                heavy-duty multi-ply cardboard acts as a natural thermal insulator that keeps maize, beans, 
                and wheat dry, sweet, and mold-free.
              </p>
              <div className="hero-cta-group">
                <a href="#order-drums" className="btn-primary" style={{ background: 'var(--accent-green)', color: '#000' }}>
                  <span>🛒</span> Order Drums on WhatsApp
                </a>
                <a href="#why-cardboard" className="btn-secondary">
                  <span>🛡️</span> Why Cardboard with Metal Rings
                </a>
              </div>
            </div>
            <div className="page-hero-visual">
              <img 
                src="assets/images/drums.jpeg" 
                alt="Thick Cardboard Grain Storage Drums with Galvanized Metal Rings" 
              />
              <div className="visual-caption-badge">
                <span>🌾 Thick Cardboard • Galvanized Metal Rings • 100% Moisture Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Moisture Problem vs Cardboard Drum Solution */}
      <section id="why-cardboard" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Thermal Physics & Moisture Control</span>
            <h2 className="section-title">Why Thick Cardboard with Metal Rings Protects Grain from Moisture</h2>
            <p className="section-desc">
              In Kenya's agricultural regions, day-and-night temperature swings cause moisture to ruin stored harvest. 
              Here is why thick cardboard drums with metal rings are the premier choice for moisture-free storage:
            </p>
          </div>

          <div className="comparison-cards-row">
            <div className="problem-box">
              <h3 style={{ color: '#ef4444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>⚠️</span> Why Plastic Drums & Sacks Fail
              </h3>
              <ul className="styled-list">
                <li><strong>Internal Sweating & Condensation:</strong> Plastic and metallic walls heat up in hot afternoons and chill rapidly at night, creating moisture droplets (condensation) that drip onto the grain.</li>
                <li><strong>Aflatoxin & Mold Outbreaks:</strong> Condensation leads to damp grain clusters, triggering toxic mold and rendering maize unsafe for consumption.</li>
                <li><strong>Rodent Chew-Through:</strong> Conventional woven gunny bags offer zero defense against rodents and pests.</li>
                <li><strong>Hazardous Pesticide Dusting:</strong> Ordinary storage requires continuous dusting with chemical pesticides to fight off weevils.</li>
              </ul>
            </div>

            <div className="solution-box">
              <h3 style={{ color: '#34d399', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🛡️</span> The Thick Cardboard + Metal Ring Solution
              </h3>
              <ul className="styled-list">
                <li><strong>Natural Thermal Insulation (Zero Sweating):</strong> Thick, multi-wall compressed cardboard buffers heat and cold. Internal temperature stays steady, totally eliminating condensation sweating.</li>
                <li><strong>Moisture Buffering:</strong> The dense kraft fibre structure breathes micro-humidity out while locking damp ambient air out, maintaining grain safely below 13% critical moisture.</li>
                <li><strong>Galvanized Steel Rings on Top & Base:</strong> Rolled steel chimes give the drum exceptional hoop strength, rim durability, and prevent rodent bite-through.</li>
                <li><strong>Lever-Action Metal Clamp Locking Ring:</strong> Seals the lid firmly shut, locking out humidity, ambient air, dust, and insects.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Overview (Without capacities) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag green">Engineered Design</span>
            <h2 className="section-title">Key Advantages for Grain Storage</h2>
            <p className="section-desc">
              Every drum is built to heavy-duty standards for farmers, seed collectors, and grain merchants.
            </p>
          </div>

          <div className="grain-features-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h4>Zero Moisture Sweating</h4>
              <p>Thick cardboard does not sweat like plastic or metal. Temperature remains uniform inside, preventing moisture droplets from dripping on grain.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">⚙️</div>
              <h4>Galvanized Metal Rings</h4>
              <p>Top rim and bottom base are reinforced with heavy-duty galvanized steel chimes for maximum structural rigidity and rim protection during rolling.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h4>Lever-Action Metal Clamp</h4>
              <p>Fitted with a strong metal clamp band that snaps tightly over the lid to keep moisture, ambient humidity, and weevils out.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h4>Chemical-Free Preservation</h4>
              <p>Keep your maize, wheat, and beans 100% natural and pesticide-free for eating, selling, or planting without dangerous dusting powders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Drum Samples Showcase */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag green">Decorative & Promotional Drums</span>
            <h2 className="section-title">Drum Samples & Advertisement Displays</h2>
            <p className="section-desc">
              Explore Victor Too's decorative cardboard drum displays with galvanized metal rings. These samples are crafted for advertisement, aesthetic presentation, and brand showcasing — combining visual appeal with the structural integrity of real moisture-proof drum engineering.
            </p>
          </div>

          <div className="samples-grid">
            {[
              { num: 1, title: "Drum Sample 01", desc: "Elegant decorative drum display with polished galvanized metal rings, ideal for storefront advertisement and brand elevation." },
              { num: 2, title: "Drum Sample 02", desc: "Close-up of ornamental rolled metal rim reinforcement combining aesthetic finish with durable structural design." },
              { num: 3, title: "Drum Sample 03", desc: "Showcase drum featuring lever-action metal clamp ring, presented as a premium advertisement piece for grain storage solutions." },
              { num: 4, title: "Drum Sample 04", desc: "Stackable decorative drum configuration demonstrating visual impact and space-efficient promotional display." },
              { num: 5, title: "Drum Sample 05", desc: "Warehouse advertisement display with branded cardboard drums on wooden pallets, capturing client attention at trade events." },
              { num: 6, title: "Drum Sample 06", desc: "Complete decorative drum system with lid, metal clamp, and galvanized rims — built for both visual presentation and functional grain preservation." }
            ].map((sample) => (
              <div key={sample.num} className="sample-card" onClick={() => setSelectedImage(`assets/images/drum0${sample.num}.jpeg`)}>
                <div className="sample-img-wrap">
                  <img 
                    src={`assets/images/drum0${sample.num}.jpeg`} 
                    alt={sample.title}
                    loading="lazy"
                  />
                  <span className="sample-badge">Sample {sample.num}</span>
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

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div className="sample-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="sample-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="sample-modal-close" onClick={() => setSelectedImage(null)} aria-label="Close full-screen view">✕</button>
            <img src={selectedImage} alt="Drum Sample Full Screen" />
          </div>
        </div>
      )}

      {/* 5-Step Grain Preservation Protocol */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag green">Best Practices</span>
            <h2 className="section-title">5-Step Moisture-Free Storage Protocol</h2>
            <p className="section-desc">
              Follow Victor Too's storage protocol to maximize the shelf life of your grain:
            </p>
          </div>

          <div className="steps-timeline-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h4>Sun Dry Below 13% Moisture</h4>
              <p>Thoroughly sun-dry your maize, beans, or wheat on clean tarpaulins until properly cured and hard.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h4>Winnow & Clean</h4>
              <p>Thoroughly winnow to eliminate dust, chaff, broken kernels, and weed seeds before storing.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h4>Fill the Cardboard Drum</h4>
              <p>Pour grain into the clean, dry drum. Gently tap the sides to settle the grain and maximize density.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h4>Lock the Metal Clamp Ring</h4>
              <p>Place the lid over the top steel chime and clamp the metal locking band shut with the lever.</p>
            </div>
            <div className="step-card">
              <div className="step-number">5</div>
              <h4>Store Elevated in a Shaded Room</h4>
              <p>Place the drums on wooden pallets or planks in a cool, ventilated, dry room away from damp floors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Delivery */}
      <section className="section section-alt">
        <div className="container">
          <div className="credentials-banner">
            <div className="cred-left">
              <span className="cred-shield">🚚</span>
              <div className="cred-text">
                <h4>Nationwide Delivery Across Kenya</h4>
                <p>
                  Delivering thick cardboard drums with metal rings directly to farms, cooperatives, and homes 
                  in Eldoret, Kitale, Nakuru, Nairobi, Bungoma, Kakamega, Nandi, and countrywide via reliable courier transit.
                </p>
              </div>
            </div>
            <div className="cred-right">
              <a 
                href="https://wa.me/254758286766?text=Hi%20Victor,%20what%20are%20the%20delivery%20rates%20for%20cardboard%20grain%20drums%20to%20my%20town?" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Inquire Delivery to Your Town
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Order Builder (No capacities dropdown) */}
      <section id="order-drums" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag green">Direct Order</span>
            <h2 className="section-title">Order Cardboard Grain Storage Drums</h2>
            <p className="section-desc">
              Send your order directly to Victor Too on WhatsApp for instant confirmation and delivery scheduling.
            </p>
          </div>

          <div className="quote-builder-card">
            <form onSubmit={handleOrderSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label>Quantity of Drums Needed *</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    min="1" 
                    max="1000" 
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Type of Grain to Store</label>
                  <select 
                    className="form-select" 
                    value={grainType} 
                    onChange={(e) => setGrainType(e.target.value)}
                  >
                    <option value="Shelled Maize / Corn">Shelled Maize / Corn</option>
                    <option value="Dry Beans & Pulses">Dry Beans & Pulses</option>
                    <option value="Wheat">Wheat</option>
                    <option value="Sorghum & Millet">Sorghum & Millet</option>
                    <option value="Paddy Rice">Paddy Rice</option>
                    <option value="Certified Seeds">Certified Crop & Vegetable Seeds</option>
                    <option value="Animal Feed">Animal & Poultry Feeds</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g., Kipchumba" 
                    value={customerName} 
                    onChange={(e) => setCustomerName(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Your Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="e.g., 07XXXXXXXX" 
                    value={customerPhone} 
                    onChange={(e) => setCustomerPhone(e.target.value)} 
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Delivery Town / Sub-County *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g., Eldoret, Kitale, Nakuru, Nairobi, Webuye..." 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Special Instructions or Quantities</label>
                <textarea 
                  className="form-textarea" 
                  rows="3" 
                  placeholder="Tell Victor about your harvest timing, specific requirements, or delivery directions..."
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              <div className="form-actions-row">
                <button type="submit" className="btn-send-whatsapp">
                  <span>💬</span> Submit Order via WhatsApp (0758286766)
                </button>
                <a href="tel:0758286766" className="btn-send-email" style={{ textAlign: 'center' }}>
                  <span>📞</span> Call Victor Directly: 0758286766
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Common Questions About Cardboard Grain Drums</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <h4>Why are thick cardboard drums better for grain than plastic drums?</h4>
              <p>Plastic drums conduct heat quickly during the day and drop rapidly in temperature at night. This causes humidity to condense into water droplets on the inner plastic walls (sweating), which soaks the grain and produces lethal aflatoxins. Thick cardboard is a natural thermal insulator that eliminates internal condensation, keeping the grain completely moisture-free.</p>
            </div>
            <div className="faq-card">
              <h4>What is the purpose of the metal rings?</h4>
              <p>The rolled galvanized steel chimes on the top and bottom rims protect the edges and give the cardboard drum immense hoop strength. The lever clamp ring firmly compresses the lid, ensuring a tight seal that keeps out damp air and pests.</p>
            </div>
            <div className="faq-card">
              <h4>Can rodents chew through the cardboard drums?</h4>
              <p>The dense, multi-ply compressed kraft cardboard is extremely tough and smooth. Reinforced by steel rims and stored elevated on wooden pallets, rats and mice cannot get a chewing purchase on the drum.</p>
            </div>
            <div className="faq-card">
              <h4>How long can grain safely be preserved in these drums?</h4>
              <p>When grain is sun-dried below 13% moisture and sealed with the metal clamp ring, it remains fresh, sweet, and mold-free for 12 to 24+ months without requiring chemical pesticide dusts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

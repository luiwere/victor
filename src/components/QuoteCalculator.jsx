import React, { useState } from 'react';

export default function QuoteCalculator() {
  const [service, setService] = useState('drums'); // 'drums' | 'tattoo' | 'engineering'

  // Drum specific states
  const [drumQty, setDrumQty] = useState(2);
  const [grainType, setGrainType] = useState('Maize / Corn');
  const [deliveryLocation, setDeliveryLocation] = useState('');

  // Tattoo specific states
  const [tattooStyle, setTattooStyle] = useState('Fine-Line / Micro');
  const [placement, setPlacement] = useState('Forearm');
  const [tattooSize, setTattooSize] = useState('Medium (4-6 inches)');

  // Engineering specific states
  const [engType, setEngType] = useState('CAD 3D Modeling');
  const [timeline, setTimeline] = useState('Standard (1-2 weeks)');

  // Common states
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Form submission handler: WhatsApp
  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    let message = `*NEW INQUIRY VIA WEBSITE - VICTOR TOO*\n`;
    message += `👤 Name: ${customerName || 'Prospective Client'}\n`;
    message += `📞 Phone: ${customerPhone || 'Not provided'}\n`;
    message += `──────────────────\n`;

    if (service === 'drums') {
      message += `📦 *Item: Thick Cardboard Drums with Metal Rings*\n`;
      message += `• Quantity: ${drumQty} Units\n`;
      message += `• Target Grain: ${grainType}\n`;
      message += `• Delivery Area: ${deliveryLocation || 'To be confirmed'}\n`;
    } else if (service === 'tattoo') {
      message += `✒️ *Service: Tattoo Session / Design*\n`;
      message += `• Style: ${tattooStyle}\n`;
      message += `• Placement: ${placement}\n`;
      message += `• Approximate Size: ${tattooSize}\n`;
    } else {
      message += `⚙️ *Service: Mechanical Engineering / Fabrication*\n`;
      message += `• Project Type: ${engType}\n`;
      message += `• Timeline: ${timeline}\n`;
    }

    if (notes) {
      message += `📝 Notes/Specifications: ${notes}\n`;
    }
    message += `──────────────────\n`;
    message += `Sent from Victor Too's official web application.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/254758286766?text=${encoded}`, '_blank');
  };

  // Form submission handler: Email
  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry: ${service.toUpperCase()} - ${customerName || 'Website Visitor'}`
    );
    let body = `Hello Victor,\n\nI would like to request a quote / consultation for your services:\n\n`;
    body += `Name: ${customerName || 'N/A'}\n`;
    body += `Phone: ${customerPhone || 'N/A'}\n`;
    body += `Service: ${service}\n`;

    if (service === 'drums') {
      body += `Item: Thick Cardboard Drums with Metal Rings\nQuantity: ${drumQty}\nStored Grain: ${grainType}\nLocation: ${deliveryLocation}\n`;
    } else if (service === 'tattoo') {
      body += `Style: ${tattooStyle}\nBody Placement: ${placement}\nSize: ${tattooSize}\n`;
    } else {
      body += `Engineering Scope: ${engType}\nTimeline: ${timeline}\n`;
    }

    if (notes) {
      body += `\nAdditional Details:\n${notes}\n`;
    }

    body += `\nPlease reply with pricing and availability.\n\nBest regards,\n${customerName || 'Client'}`;
    const encodedBody = encodeURIComponent(body);

    window.open(`mailto:erictoo04@gmail.com?subject=${subject}&body=${encodedBody}`, '_blank');
  };

  return (
    <section id="quote" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Instant Quote & Order</span>
          <h2 className="section-title">Project & Order Builder</h2>
          <p className="section-desc">
            Order thick cardboard drums with metal rings, book a tattoo consultation, 
            or submit mechanical engineering specifications. Send directly to Victor on WhatsApp or Email.
          </p>
        </div>

        <div className="quote-builder-card">
          {/* Service Selector Tabs */}
          <div className="builder-service-selector">
            <button
              type="button"
              className={`service-choice-btn ${service === 'drums' ? 'active' : ''}`}
              onClick={() => setService('drums')}
            >
              <span className="choice-icon">🌾</span>
              <span className="choice-name">Drums</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Cardboard with metal rings</span>
            </button>

            <button
              type="button"
              className={`service-choice-btn ${service === 'tattoo' ? 'active' : ''}`}
              onClick={() => setService('tattoo')}
            >
              <span className="choice-icon">✒️</span>
              <span className="choice-name">Tattoo Session</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Custom ink & cover-ups</span>
            </button>

            <button
              type="button"
              className={`service-choice-btn ${service === 'engineering' ? 'active' : ''}`}
              onClick={() => setService('engineering')}
            >
              <span className="choice-icon">⚙️</span>
              <span className="choice-name">Mechanical Engineering</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CAD, welding & fabrication</span>
            </button>
          </div>

          <form onSubmit={handleSendWhatsApp}>
            {/* Conditional Service Fields */}
            {service === 'drums' && (
              <div style={{ marginBottom: '1.5rem', background: 'rgba(16, 185, 129, 0.05)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Quantity of Drums Needed *</label>
                    <input 
                      type="number" 
                      className="form-input" 
                      min="1" 
                      max="500" 
                      value={drumQty} 
                      onChange={(e) => setDrumQty(e.target.value)} 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Crops / Grains to Store</label>
                    <select 
                      className="form-select" 
                      value={grainType} 
                      onChange={(e) => setGrainType(e.target.value)}
                    >
                      <option value="Maize / Corn (Shelled)">Maize / Corn (Shelled)</option>
                      <option value="Dry Beans / Pulses">Dry Beans & Pulses</option>
                      <option value="Wheat">Wheat</option>
                      <option value="Sorghum / Millet">Sorghum & Millet</option>
                      <option value="Paddy Rice">Rice</option>
                      <option value="Vegetable Seeds">Certified seeds</option>
                      <option value="Poultry / Animal Feed">Animal & Poultry feed</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Delivery Town / County</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Eldoret, Kitale, Nakuru, Nairobi..." 
                    value={deliveryLocation} 
                    onChange={(e) => setDeliveryLocation(e.target.value)} 
                  />
                </div>
              </div>
            )}

            {service === 'tattoo' && (
              <div style={{ marginBottom: '1.5rem', background: 'rgba(236, 72, 153, 0.05)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Preferred Tattoo Style</label>
                    <select 
                      className="form-select" 
                      value={tattooStyle} 
                      onChange={(e) => setTattooStyle(e.target.value)}
                    >
                      <option value="Fine-Line / Micro Art">Fine-Line / Micro Realism</option>
                      <option value="Black & Grey Realism">Black & Grey Realism / Shading</option>
                      <option value="Geometric & Mandala">Sacred Geometry & Mandalas</option>
                      <option value="Script / Lettering / Quotes">Custom Lettering & Calligraphy</option>
                      <option value="Old Tattoo Cover-Up">Cover-Up of Old/Faded Tattoo</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Body Placement</label>
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
                      <option value="Leg / Calf / Ankle">Leg / Calf / Thigh</option>
                      <option value="Neck / Collarbone">Neck / Collarbone</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Estimated Size</label>
                  <select 
                    className="form-select" 
                    value={tattooSize} 
                    onChange={(e) => setTattooSize(e.target.value)}
                  >
                    <option value="Small (<3 inches)">Small (under 3 inches) - Quick session</option>
                    <option value="Medium (4-6 inches)">Medium (4 to 6 inches) - 2-3 hours</option>
                    <option value="Large (7-10 inches)">Large (7 to 10 inches) - Half day</option>
                    <option value="Multi-session / Full Sleeve">Multi-session / Full Sleeve Project</option>
                  </select>
                </div>
              </div>
            )}

            {service === 'engineering' && (
              <div style={{ marginBottom: '1.5rem', background: 'rgba(6, 182, 212, 0.05)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Engineering Scope</label>
                    <select 
                      className="form-select" 
                      value={engType} 
                      onChange={(e) => setEngType(e.target.value)}
                    >
                      <option value="3D CAD Design & Modeling">3D CAD Modeling (SolidWorks / AutoCAD)</option>
                      <option value="Structural Metal Fabrication & Welding">Structural Metal Fabrication & Welding</option>
                      <option value="Machinery Diagnostics & Repair">Machinery Diagnostic & Repair</option>
                      <option value="Custom Mechanical Prototype">Custom Mechanical Prototype Design</option>
                      <option value="Academic Collaboration">Engineering Consultation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Estimated Project Timeline</label>
                    <select 
                      className="form-select" 
                      value={timeline} 
                      onChange={(e) => setTimeline(e.target.value)}
                    >
                      <option value="Urgent (< 3 days)">Urgent (under 3 days)</option>
                      <option value="Standard (1-2 weeks)">Standard (1 - 2 weeks)</option>
                      <option value="Flexible / Multi-stage">Flexible / Multi-stage Development</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Customer Details */}
            <div className="form-grid-2">
              <div className="form-group">
                <label>Your Name *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Victor Too / John Doe" 
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
                  placeholder="e.g. 07XXXXXXXX" 
                  value={customerPhone} 
                  onChange={(e) => setCustomerPhone(e.target.value)} 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Additional Notes or Custom Specifications</label>
              <textarea 
                className="form-textarea" 
                rows="3" 
                placeholder="Share any special instructions, reference ideas, or specific dimensions..."
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="form-actions-row">
              <button type="submit" className="btn-send-whatsapp">
                <span>💬</span> Send Order via WhatsApp (0758286766)
              </button>
              <button type="button" onClick={handleSendEmail} className="btn-send-email">
                <span>✉️</span> Send via Email (erictoo04@gmail.com)
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

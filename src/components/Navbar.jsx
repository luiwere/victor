import React, { useState } from 'react';

export default function Navbar({ currentRoute = '#/' }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { href: '#/', label: 'Home' },
    { href: '#/drums', label: 'Drums' },
    { href: '#/tattoo', label: 'Tattoo Art' },
    { href: '#/engineering', label: 'Engineering' },
    { href: '#/contact', label: 'Contact' },
  ];

  const isActive = (href) => {
    if (href === '#/') {
      return currentRoute === '#/' || currentRoute === '' || currentRoute === '#/home';
    }
    return currentRoute.startsWith(href);
  };

  return (
    <nav className={`navbar ${mobileOpen ? 'mobile-menu-open' : ''}`}>
      <div className="container nav-container">
        <a href="#/" className="brand-logo" onClick={() => setMobileOpen(false)}>
          <div className="logo-badge">VT</div>
          <div className="brand-text">
            <h1>Victor Too</h1>
            <span>Artisan • Engineer • Drums</span>
          </div>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={isActive(link.href) ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="https://wa.me/254758286766?text=Hello%20Victor,%20I'm%20visiting%20your%20website%20and%20would%20like%20to%20make%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-sm"
          >
            <span>💬</span> WhatsApp (0758286766)
          </a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobile}
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}

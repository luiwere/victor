# Victor Too — Official React Website

A stylish, modern, high-converting React website for **Victor Too**, spotlighting his three core disciplines:
1. **Grain Storage Drums**: Heavy-duty hermetic, airtight drums protecting maize, wheat, and beans 100% free from moisture, dampness, mold, and weevils.
2. **Tattoo Artistry**: Custom fine-line, realism, cover-up ink sessions executed with sterile clinical standards.
3. **Mechanical Engineering**: In the final stage of finishing his Mechanical Engineering degree (CAD modeling, structural fabrication, precision diagnostics).

---

## 📞 Integrated Contact & Verified Credentials

- **Phone**: `0758286766` (`+254 758 286 766`)
- **WhatsApp**: [Direct WhatsApp Chat](https://wa.me/254758286766)
- **Email**: `erictoo04@gmail.com`
- **National ID / Verified Identifier**: `41702892`
- **Instagram**: [@fluffy_lizz](https://www.instagram.com/fluffy_lizz?xtok=OGtzN3VpY3BoMnpy)
- **TikTok**: [@captain.icur](https://www.tiktok.com/@captain.icur)

---

## 🚀 How to Run the Website

### Option 1: Instant In-Browser Preview (Zero Setup)
Simply open `index.html` directly in Google Chrome, Microsoft Edge, Firefox, or Safari, or run a lightweight local server:
```bash
python3 -m http.server 3000
```
Then visit: `http://localhost:3000`

### Option 2: Full Vite + React Developer Environment
```bash
# Install dependencies
npm install

# Start Vite live-reload dev server
npm run dev

# Build optimized production bundle
npm run build
```

---

## 📁 Project Architecture

```
├── index.html                   # Main web entry point with SEO schemas & React mount
├── package.json                 # Modern React 18 & Vite configuration
├── vite.config.js               # Vite bundler settings
├── README.md                    # Project documentation & run guide
├── assets/
│   └── images/
│       ├── grain_storage_drums.jpg  # Realistic commercial photo of moisture-free drums
│       ├── tattoo_art_studio.jpg    # Photo of tattoo studio equipment & flash art
│       └── mech_engineering.jpg     # Photo of mechanical engineering CAD workshop
└── src/
    ├── main.jsx                 # React root render
    ├── App.jsx                  # Main application composition
    ├── styles/
    │   └── app.css              # Custom dark-industrial luxury stylesheet & responsive grid
    ├── components/
    │   ├── Navbar.jsx           # Sticky navigation with mobile menu & WhatsApp CTA
    │   ├── Hero.jsx             # Hero section with dynamic headline & badges
    │   ├── PillarDrums.jsx      # Grain storage drums showcase & benefit cards
    │   ├── PillarTattoo.jsx     # Tattoo studio showcase & live social links
    │   ├── PillarEngineering.jsx# Mechanical engineering status & CAD capabilities
    │   ├── PortfolioFilter.jsx  # Interactive filterable gallery with lightbox modal
    │   ├── QuoteCalculator.jsx  # Dynamic quote/order builder with WhatsApp & Email dispatch
    │   ├── ContactSection.jsx   # Actionable contact cards (Call, WhatsApp, Email, Socials)
    │   └── Footer.jsx           # Navigation, credentials, copyright & floating WhatsApp button
    └── data/
        ├── drumSpecs.js         # Grain drum capacities (60L, 120L, 210L) & hermetic benefits
        └── portfolioData.js     # Showcase projects & client testimonials
```

---

## 🌟 Key Features
- **Dynamic WhatsApp Message Generator**: Pre-formats full order specs (drum sizes, quantities, grain types, tattoo preferences, delivery town) into a clean, ready-to-send WhatsApp message.
- **Direct Phone Dialing & Emailing**: Clickable `tel:` and `mailto:` links with pre-filled subjects.
- **Hermetic Drum Calculator**: Allows farmers and buyers to select exact capacity needed for their harvest.
- **Responsive Dark Theme**: Mobile-first responsive layout with obsidian slate surfaces and warm forge amber accents.
- **Search Engine Optimization (SEO)**: OpenGraph and Schema.org `Person` JSON-LD structured data.

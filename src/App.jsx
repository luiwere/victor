import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DrumsPage from './pages/DrumsPage';
import TattooPage from './pages/TattooPage';
import EngineeringPage from './pages/EngineeringPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || '#/';
      setRoute(currentHash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    // Normalise route string (strip query params or sub-anchors if any)
    const cleanRoute = route.split('?')[0];

    if (cleanRoute.startsWith('#/drums')) {
      return <DrumsPage />;
    }
    if (cleanRoute.startsWith('#/tattoo')) {
      return <TattooPage />;
    }
    if (cleanRoute.startsWith('#/engineering')) {
      return <EngineeringPage />;
    }
    if (cleanRoute.startsWith('#/contact')) {
      return <ContactPage />;
    }
    // Default fallback is HomePage
    return <HomePage />;
  };

  return (
    <div className="app-root">
      <Navbar currentRoute={route} />
      <main id="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

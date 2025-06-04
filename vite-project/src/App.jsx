import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import IngredientsSection from './components/IngredientsSection/IngredientsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="pageWrapper"> {/* Esta clase está definida en index.css */}
      <Header />
      <main>
        <HeroSection />
        <IngredientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
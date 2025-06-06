import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import IngredientsSection from './components/IngredientsSection/IngredientsSection';
import PricingSection from './components/PricingSection/PricingSection'; // <-- 1. Importa el nuevo componente
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="pageWrapper">
      <Header />
      <main>
        <HeroSection />
        <IngredientsSection />
        <PricingSection /> {/* <-- 2. Añade la sección aquí */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
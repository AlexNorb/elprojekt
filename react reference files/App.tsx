import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import MobileActionBar from './components/MobileActionBar';
import { Service } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'service'>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setCurrentView('service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (target: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      // Allow state to update before scrolling
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.querySelector(target);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-elblue selection:text-white">
      <Navbar 
        onNavigate={handleNavigate} 
        isHome={currentView === 'home'} 
      />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services onServiceClick={handleServiceClick} />
            <About />
            <Reviews />
            <FAQ />
            <Contact />
            <MobileActionBar onQuoteClick={() => handleNavigate('#contact')} />
          </>
        ) : (
          selectedService && (
            <ServiceDetail 
              service={selectedService} 
              onBack={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onContact={() => handleNavigate('#contact')}
            />
          )
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
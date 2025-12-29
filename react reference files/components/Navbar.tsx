import React, { useState, useEffect, useRef } from 'react';
import { NavItem } from '../types';
import { MenuIcon, XMarkIcon, BoltIcon } from './Icons';

const navItems: NavItem[] = [
  { label: 'Start', href: '#home' },
  { label: 'Tjänster', href: '#services' },
  { label: 'Om Oss', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
];

interface NavbarProps {
  onNavigate: (target: string) => void;
  isHome: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the very top or if mobile menu is open
      if (currentScrollY < 10 || isOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Determine direction
      if (currentScrollY > lastScrollY.current) {
        // Scrolling Down -> Hide
        setIsVisible(false);
      } else {
        // Scrolling Up -> Show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setIsOpen(false);
  };

  // Base styles
  const navBaseClasses = 'fixed w-full z-50 transition-transform duration-300 ease-in-out bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-3';
  // Transform logic
  const transformClasses = isVisible ? 'translate-y-0' : '-translate-y-full';
  
  const textClasses = 'text-slate-600 hover:text-elblue';
  
  // Logo colors fixed to elblue
  const logoClasses = 'text-elblue';
  const logoBgClasses = 'bg-elblue text-white';
  
  // Button always blue
  const buttonClasses = 'bg-elblue text-white hover:bg-elblue-600';

  return (
    <nav className={`${navBaseClasses} ${transformClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex-shrink-0 flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-md flex items-center justify-center shadow-lg transition-colors ${logoBgClasses}`}>
              <BoltIcon className="w-6 h-6" />
            </div>
            <span className={`font-display font-bold text-2xl tracking-tight transition-colors ${logoClasses}`}>
              ELPROJEKT
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-sans text-sm font-medium transition-colors duration-200 uppercase tracking-wide ${textClasses}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-6 py-2.5 rounded-md font-display font-medium text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 ${buttonClasses}`}
            >
              Begär Offert
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-elblue"
            >
              <span className="sr-only">Öppna meny</span>
              {isOpen ? <XMarkIcon className="block h-8 w-8" /> : <MenuIcon className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xl top-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-4 rounded-md text-base font-medium text-slate-700 hover:text-elblue hover:bg-elblue-50 font-display"
              >
                {item.label}
              </a>
            ))}
             <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block w-full text-center mt-4 bg-elblue text-white px-3 py-4 rounded-md text-base font-bold font-display"
              >
                BEGÄR OFFERT
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
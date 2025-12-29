import React from 'react';
import { BoltIcon } from './Icons';

interface FooterProps {
  onNavigate: (target: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <BoltIcon className="text-elorange w-6 h-6" />
               <span className="font-display font-bold text-xl tracking-tight">ELPROJEKT</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Din partner för säkra och moderna elinstallationer. Vi säkrar framtiden med teknik.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              Verksamma i:<br/>
              Tjörn • Stenungsund • Uddevalla • Kungälv
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Tjänster</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-elorange transition-colors">Smarta Hem & Plejd</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-elorange transition-colors">Laddbox (Zaptec/Easee)</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-elorange transition-colors">Renovering Kök & Badrum</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-elorange transition-colors">Byte av Elcentral</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Företag</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-elorange transition-colors">Om oss</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-elorange transition-colors">Karriär</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-elorange transition-colors">Integritetspolicy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Storgatan 12</li>
              <li>111 22 Stockholm</li>
              <li className="pt-2 text-white font-medium">08-123 45 67</li>
              <li>info@elprojekt.se</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} ELPROJEKT AB. Alla rättigheter reserverade.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-slate-800 rounded-md flex items-center justify-center hover:bg-elblue cursor-pointer transition-colors">
                <span className="font-display font-bold text-xs">Fb</span>
             </div>
             <div className="w-8 h-8 bg-slate-800 rounded-md flex items-center justify-center hover:bg-elblue cursor-pointer transition-colors">
                <span className="font-display font-bold text-xs">In</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
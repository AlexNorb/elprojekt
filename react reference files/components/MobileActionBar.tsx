import React, { useState, useEffect } from 'react';
import { PhoneIcon, ChatBubbleOvalLeftIcon } from './Icons';

interface MobileActionBarProps {
  onQuoteClick: () => void;
}

const MobileActionBar: React.FC<MobileActionBarProps> = ({ onQuoteClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe-area animate-fade-in-up">
      <div className="bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3 pb-5">
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={onQuoteClick}
            className="flex flex-col items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-md transition-colors active:scale-95"
          >
            <ChatBubbleOvalLeftIcon className="w-6 h-6 mb-1 text-elblue" />
            <span className="text-xs font-bold font-display uppercase tracking-wide">Begär Offert</span>
          </button>
          
          <a 
            href="tel:081234567"
            className="flex flex-col items-center justify-center bg-elblue hover:bg-elblue-600 text-white py-3 rounded-md transition-colors shadow-lg shadow-elblue/30 active:scale-95"
          >
            <PhoneIcon className="w-6 h-6 mb-1" />
            <span className="text-xs font-bold font-display uppercase tracking-wide">Ring Direkt</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileActionBar;
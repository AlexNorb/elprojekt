import React from 'react';
import { ArrowRightIcon, BoltIcon } from './Icons';

interface HeroProps {
  onNavigate: (target: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Modern Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Updated gradient to use more blue (brand color) instead of just black/slate */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-elblue-900/80 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="w-2 h-2 rounded-full bg-elorange mr-3 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-white/90 font-sans">
                Verksam på Tjörn, i Stenungsund & Kungälv
              </span>
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl font-display leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Framtidens El. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-elblue-100 to-white">Personligt levererad.</span>
            </h1>
            
            <p className="mt-8 text-lg text-slate-200 leading-relaxed font-sans max-w-lg mx-auto lg:mx-0 border-l-2 border-elorange pl-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              ELPROJEKT utför allt från nybyggnation och renovering till smarta laddboxar. Din personliga elektriker i Tjörn, Stenungsund, Uddevalla och Kungälv.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-elblue font-display rounded-md hover:bg-elblue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-elblue shadow-[0_0_20px_rgba(0,60,166,0.5)] hover:shadow-[0_0_30px_rgba(0,60,166,0.7)]"
              >
                Kontakta mig
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-medium rounded-md text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 md:text-lg transition-all duration-300"
              >
                Våra Tjänster
              </a>
            </div>
          </div>

          {/* Abstract Tech Visual */}
          <div className="mt-20 lg:mt-0 lg:col-span-5 relative hidden lg:block animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
             <div className="relative rounded-lg bg-gradient-to-br from-elblue/50 to-transparent p-1 shadow-2xl backdrop-blur-sm border border-white/10 animate-float">
                <div className="bg-slate-900/80 rounded-lg p-8 h-[450px] flex flex-col justify-between relative overflow-hidden">
                   
                   <div className="absolute top-0 right-0 p-6">
                     <BoltIcon className="text-elorange w-12 h-12 opacity-80" />
                   </div>

                   <div className="space-y-6 mt-12 relative z-10">
                      {/* Simulated Dashboard UI */}
                      <div className="bg-white/5 rounded-md p-4 border border-white/5">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-slate-400 font-mono">PROJECT_STATUS</span>
                          <span className="text-xs text-green-400 font-mono">ON_TRACK</span>
                        </div>
                        <div className="h-16 flex items-end space-x-1">
                           {[40, 70, 45, 90, 60, 80, 50, 95].map((h, i) => (
                             <div key={i} className="flex-1 bg-elblue-400 opacity-80 rounded-sm transition-all duration-500 hover:opacity-100" style={{ height: `${h}%` }}></div>
                           ))}
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-md p-4 border border-white/5 flex items-center justify-between">
                         <div>
                           <div className="text-xs text-slate-400 font-mono mb-1">DIRECT_LINE</div>
                           <div className="text-white font-display text-lg">CONNECTED</div>
                         </div>
                         <div className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                         </div>
                      </div>
                   </div>

                   <div className="relative z-10 mt-auto">
                      <h3 className="text-white font-display text-2xl font-bold mb-1">Trygg Partner</h3>
                      <p className="text-slate-400 text-sm">Vi tar ansvar hela vägen.</p>
                   </div>
                </div>
             </div>
             
             {/* Glow effects */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-elblue rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse-slow"></div>
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-elorange rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse-slow"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
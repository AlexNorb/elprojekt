import React, { useRef, useEffect, useState } from 'react';
import { Service } from '../types';
import { HomeModernIcon, BoltIcon, CpuChipIcon, BatteryIcon } from './Icons';

const services: Service[] = [
  {
    id: 1,
    title: 'Smarta Hem & Styrning',
    description: 'Vi integrerar belysning, värme och säkerhet. Plejd, KNX och Wiser för ett uppkopplat hem.',
    icon: <HomeModernIcon className="w-8 h-8" />,
    longDescription: 'Ett smart hem handlar inte bara om bekvämlighet, det handlar om energieffektivitet och säkerhet. Vi installerar system som KNX, Plejd och Wiser som låter dig styra hela ditt hem från fickan. Tänd belysningen automatiskt när solen går ner, eller sänk värmen när ingen är hemma.',
    features: ['App-styrning', 'Röststyrning', 'Energiövervakning', 'Automatiska scenarier'],
    image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Laddboxar & Elbil',
    description: 'Installation av Zaptec och Easee. Säkra laddboxar med lastbalansering för hem och BRF.',
    icon: <BatteryIcon className="w-8 h-8" />,
    longDescription: 'Att ladda bilen hemma ska vara säkert och effektivt. Vi är experter på laddboxar från marknadsledande Zaptec och Easee. Vi installerar lastbalansering som skyddar din huvudsäkring och ser till att laddningen sker när elen är som billigast (om du har timpris).',
    features: ['Zaptec & Easee', 'Lastbalansering', 'Skatteavdrag (Grön teknik)', 'Statistik & Rapporter'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Renovering & Nybyggnation',
    description: 'Kompletta elinstallationer för kök, badrum och nyproduktion. Vi ordnar ritningar.',
    icon: <BoltIcon className="w-8 h-8" />,
    longDescription: 'Ska du renovera köket eller bygga nytt hus? Vi hjälper till med allt från planering och ritningar till slutbesiktning. Vi har stor erfarenhet av badrumsrenovering med golvvärme och moderna belysningslösningar. Vi arbetar tätt ihop med snickare för ett sömlöst resultat.',
    features: ['Golvvärme & Belysning', 'Köksrenovering', 'Elritningar', 'Nyinstallation'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Service & Elcentral',
    description: 'Byte av elcentral till automatsäkringar, felsökning och utökning av befintlig anläggning.',
    icon: <CpuChipIcon className="w-8 h-8" />,
    longDescription: 'Gamla elinstallationer kan utgöra en brandfara. Vi utför besiktningar och byter ut gamla proppskåp mot moderna normcentraler med jordfelsbrytare. Vi hjälper även till med felsökning och mindre servicejobb i hela vårt upptagningsområde.',
    features: ['Byte av elcentral', 'Jordfelsbrytare', 'Felsökning', 'Snabba åtgärder'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80'
  },
];

interface ServicesProps {
  onServiceClick: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-white relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-elorange font-bold tracking-wide uppercase text-sm mb-2 font-display">
            Våra Expertisområden
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl font-display">
            Tekniska lösningar för moderna behov
          </h3>
          <p className="mt-4 text-xl text-slate-500 font-sans">
            Från installation av laddbox till totalrenovering. Vi arbetar i hela regionen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group relative bg-slate-50 rounded-lg p-8 transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2 border border-slate-100 hover:border-elblue/20 flex flex-col cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => onServiceClick(service)}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="transform scale-150 text-elblue">
                    {service.icon}
                </div>
              </div>

              <div className="w-14 h-14 rounded-md bg-white border border-slate-200 flex items-center justify-center text-elblue mb-6 shadow-sm group-hover:scale-110 group-hover:border-elblue group-hover:bg-elblue group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">
                {service.title}
              </h4>
              
              <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200">
                 <span className="text-sm font-semibold text-elblue group-hover:text-elorange transition-colors flex items-center">
                    Läs mer <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                 </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Service } from '../types';
import { ArrowRightIcon, CheckBadgeIcon } from './Icons';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onContact: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onContact }) => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-slate-500 hover:text-elblue transition-colors font-medium text-sm uppercase tracking-wide"
        >
          <span className="mr-2">←</span> Tillbaka till startsidan
        </button>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-slate-100">
          {/* Header Image */}
          <div className="relative h-64 md:h-96">
            <img 
              src={service.image || "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80"} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
               <div className="inline-flex items-center px-3 py-1 rounded-sm bg-elorange text-white text-xs font-bold uppercase tracking-wider mb-4">
                  Tjänst
               </div>
               <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{service.title}</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-slate-100">
            
            {/* Main Content */}
            <div className="col-span-2 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">Om tjänsten</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {service.longDescription || service.description}
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">Vad vi erbjuder</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features ? service.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-50 rounded-md border border-slate-100">
                    <CheckBadgeIcon className="w-6 h-6 text-elblue mr-3 flex-shrink-0" />
                    <span className="font-medium text-slate-700">{feature}</span>
                  </div>
                )) : (
                  <p className="text-slate-500">Kontakta oss för detaljerad specifikation.</p>
                )}
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="col-span-1 p-8 md:p-12 bg-slate-50/50">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Intresserad?</h3>
                <p className="text-slate-500 mb-8">
                  Vi hjälper dig från planering till färdig installation. Begär en kostnadsfri offert idag.
                </p>

                <div className="space-y-4">
                  <button
                    onClick={onContact}
                    className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-elblue hover:bg-elblue-600 transition-all transform hover:-translate-y-1"
                  >
                    Begär Offert
                    <ArrowRightIcon className="ml-2 w-5 h-5" />
                  </button>
                  <button
                    onClick={onContact}
                    className="w-full flex items-center justify-center px-6 py-4 border border-slate-300 rounded-md text-base font-bold text-slate-700 bg-white hover:bg-slate-50 transition-all"
                  >
                    Ring oss: 08-123 45 67
                  </button>
                </div>

                <div className="mt-12 p-6 bg-elblue-50 rounded-lg border border-elblue-100">
                  <h4 className="font-bold text-elblue mb-2">ROT-avdrag / Grön Teknik</h4>
                  <p className="text-sm text-elblue-800">
                    På denna tjänst kan du ofta utnyttja skatteavdrag på upp till 50% av arbetskostnaden eller materialet (Grön Teknik). Vi sköter all administration.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
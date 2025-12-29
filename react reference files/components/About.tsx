import React from 'react';
import { CheckBadgeIcon, BoltIcon } from './Icons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-elblue-50 relative overflow-hidden text-slate-900">
      {/* Background decoration - Lighter and subtler */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-60 -top-24 -left-24"></div>
          <div className="absolute w-[300px] h-[300px] bg-elblue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 bottom-0 right-0"></div>
          <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-elorange font-bold tracking-wide uppercase text-sm mb-2 font-display">
            Om ELPROJEKT
          </h2>
          <h3 className="text-3xl font-extrabold sm:text-4xl font-display mb-6 text-slate-900">
            Personligt engagemang.<br/>Professionell kraft.
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            ELPROJEKT är ett modernt elinstallationsföretag med en enkel filosofi: 
            Teknik ska funka, och hantverkare ska vara lätta att nå.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: The Founder / Personal Touch */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white shadow-xl shadow-elblue/5 border border-slate-100 p-8 rounded-lg relative mt-6">
              {/* Profile Image - keeping rounded-full as it is standard for avatars */}
              <div className="absolute -top-10 -right-6 md:-right-10 w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100">
                 <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                   alt="Din Elektriker" 
                   className="w-full h-full object-cover"
                 />
              </div>
              
              <h4 className="text-2xl font-bold font-display mb-4 text-slate-900">Din elektriker</h4>
              <p className="text-slate-600 mb-6 leading-relaxed pr-8">
                Jag driver ELPROJEKT med målsättningen att vara den elektriker jag själv hade velat anlita. 
                När du kontaktar oss hamnar du inte i en växel, utan du pratar direkt med den som ansvarar för ditt projekt.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Oavsett om du är privatperson som vill säkra villan, eller ett företag som behöver en pålitlig underentreprenör, 
                så garanterar jag korta beslutsvägar och personligt ansvarstagande från start till mål.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center bg-elblue-50 px-4 py-2 rounded-md border border-elblue-100 text-elblue-900">
                  <CheckBadgeIcon className="h-5 w-5 text-elorange mr-2" />
                  <span className="text-sm font-medium">Auktoriserad</span>
                </div>
                <div className="flex items-center bg-elblue-50 px-4 py-2 rounded-md border border-elblue-100 text-elblue-900">
                  <CheckBadgeIcon className="h-5 w-5 text-elorange mr-2" />
                  <span className="text-sm font-medium">Ansvarsförsäkrad</span>
                </div>
                <div className="flex items-center bg-elblue-50 px-4 py-2 rounded-md border border-elblue-100 text-elblue-900">
                  <CheckBadgeIcon className="h-5 w-5 text-elorange mr-2" />
                  <span className="text-sm font-medium">Personlig kontakt</span>
                </div>
              </div>
            </div>

            {/* B2B / Subcontractor Context */}
            <div className="pl-4 border-l-2 border-elorange">
              <h5 className="font-bold font-display text-lg mb-2 text-slate-900">Till andra byggföretag</h5>
              <p className="text-slate-600 text-sm">
                Söker ni en flexibel samarbetspartner? Vi är vana att arbeta som underentreprenör i större projekt och förstår vikten av att hålla tidsplaner och kommunicera med andra yrkesgrupper på bygget.
              </p>
            </div>
          </div>

          {/* Right Column: Strategic Partnership - Kept dark/blue for contrast */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-elblue to-elblue-600 text-white shadow-xl shadow-elblue/20 rounded-lg p-8 border border-white/10 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <BoltIcon className="w-32 h-32 text-white" />
              </div>

              <h4 className="text-xl font-bold font-display mb-2 text-elorange relative z-10">Starka tillsammans</h4>
              <h3 className="text-2xl font-bold font-display mb-6 relative z-10">En del av Byggprojekt</h3>
              
              <p className="text-blue-100 text-sm mb-6 leading-relaxed flex-grow relative z-10">
                ELPROJEKT är en stolt partner och del av nätverket kring <a href="https://byggprojekt.se/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline decoration-elorange">Byggprojekt.se</a>.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="bg-white/10 p-4 rounded-md border border-white/20 backdrop-blur-sm">
                  <h5 className="font-bold text-white text-sm mb-1">För privatkund & BRF</h5>
                  <p className="text-blue-100 text-xs">
                    Ska du renovera köket eller bygga ut? Genom vårt nära samarbete med Byggprojekt kan vi erbjuda helhetslösningar där snickare, målare och elektriker samordnas sömlöst.
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-md border border-white/20 backdrop-blur-sm">
                  <h5 className="font-bold text-white text-sm mb-1">Fristående aktör</h5>
                  <p className="text-blue-100 text-xs">
                    Även om vi har starka band till Byggprojekt, arbetar vi dagligen som oberoende elektriker åt andra byggbolag, fastighetsägare och privatpersoner.
                  </p>
                </div>
              </div>

              <a 
                href="https://byggprojekt.se/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-white hover:text-elorange transition-colors relative z-10"
              >
                Läs mer om Byggprojekt <span className="ml-2">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
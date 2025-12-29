import React from 'react';
import { StarIcon, CheckBadgeIcon } from './Icons';

const reviews = [
  {
    name: "Anders P.",
    location: "Stenungsund",
    text: "Installerade laddbox och drog ny el till garaget. Otroligt proffsigt bemötande från första kontakt till färdigt jobb. Kändes tryggt att ha en elektriker som var lätt att nå.",
    stars: 5,
  },
  {
    name: "Maria Lindberg",
    location: "Tjörn",
    text: "Anlitade ELPROJEKT för köksrenovering. Bra samarbete med snickarna och snygga lösningar för belysningen som jag inte tänkt på själv. Rekommenderas varmt!",
    stars: 5,
  },
  {
    name: "BRF Strandkanten",
    location: "Uddevalla",
    text: "Vi bytte ut belysningen i trapphusen till LED med rörelsevakt. Snabbt jobb och fakturan stämde exakt med offerten. En pålitlig partner.",
    stars: 5,
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-elblue-100 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-elorange/10 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-elorange font-bold tracking-wide uppercase text-sm mb-2 font-display">
            Kundomdömen
          </h2>
          <h3 className="text-3xl font-extrabold sm:text-4xl font-display text-slate-900">
            Lokalt förtroende
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:border-elblue/30 transition-colors shadow-sm"
            >
              <div className="flex space-x-1 text-elorange mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                <div>
                  <div className="font-bold text-slate-900 font-display">{review.name}</div>
                  <div className="text-xs text-slate-500">{review.location}</div>
                </div>
                <div className="flex items-center text-elblue text-xs font-medium bg-elblue-50 px-2 py-1 rounded-md border border-elblue-100">
                  <CheckBadgeIcon className="w-3 h-3 mr-1" />
                  Verifierad
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
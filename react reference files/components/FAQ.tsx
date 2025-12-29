import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Vad är ROT/Grön teknik?",
    answer: "ROT-avdrag ger privatpersoner 30% skattereduktion på arbetskostnaden vid elinstallationer i hemmet. Grön teknik är ett skatteavdrag på upp till 50% för installation av laddboxar och solceller (inklusive batterilagring). Vi sköter all administration direkt på fakturan så du slipper krångel."
  },
  {
    question: "Hur lång är garantin på era jobb?",
    answer: "Vi lämnar alltid minst 2 års garanti på utfört arbete och material enligt konsumenttjänstlagen. För specifika produkter som solceller och laddboxar gäller ofta längre produktgarantier från tillverkaren, ofta upp till 10-25 år."
  },
  {
    question: "Hur bokar jag en offert?",
    answer: "Enklast är att använda formuläret här på hemsidan under 'Kontakt'. Du kan också ringa oss direkt. För mindre jobb kan vi ofta ge ett pris direkt, medan större projekt kräver ett kostnadsfritt hembesök för att vi ska kunna ge en exakt offert."
  },
  {
    question: "Utför ni jobb åt både privatpersoner och företag?",
    answer: "Ja, absolut! Vi arbetar med allt från små servicejobb i lägenheter till stora entreprenader för bostadsrättsföreningar och kontor. Inget jobb är för litet eller för stort för oss."
  },
  {
    question: "Kan ni hjälpa till med smarta hem-lösningar?",
    answer: "Definitivt. Vi är specialister på smarta hem-system som Plejd, KNX och Wiser. Vi kan hjälpa dig att styra allt från belysning till värme direkt i mobilen."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-elorange font-bold tracking-wide uppercase text-sm mb-2 font-display">
            Vanliga Frågor
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl font-display">
            Du undrar, vi svarar.
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-100 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg bg-slate-50 border-elblue/20' : 'bg-white hover:border-elblue/30'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-display font-bold text-lg transition-colors ${openIndex === index ? 'text-elblue' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-elblue' : 'text-slate-400'}`}>
                  <ChevronDownIcon className="w-6 h-6" />
                </span>
              </button>
              
              <div 
                className={`px-6 text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="leading-relaxed border-t border-slate-200/50 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
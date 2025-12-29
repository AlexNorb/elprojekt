import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon } from './Icons';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'Allmänt',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    alert(`Tack ${formData.name}! Jag återkommer till dig inom kort.`);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-elorange font-bold tracking-wide uppercase text-sm mb-2 font-display">
            Kontakta Oss
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl font-display">
            Hör av dig direkt
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Vi erbjuder ofta fasta priser på installationer som laddboxar och elcentraler. Behöver du ritningar till ditt nya hus eller renovering hjälper vi till med det också.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 sm:p-12 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 font-display mb-1">
                  Namn
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md border-gray-300 bg-slate-50 border p-3 focus:border-elblue focus:ring-elblue sm:text-sm outline-none transition-all"
                  placeholder="Förnamn Efternamn"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 font-display mb-1">
                    E-post
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-md border-gray-300 bg-slate-50 border p-3 focus:border-elblue focus:ring-elblue sm:text-sm outline-none transition-all"
                    placeholder="din@email.se"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 font-display mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block w-full rounded-md border-gray-300 bg-slate-50 border p-3 focus:border-elblue focus:ring-elblue sm:text-sm outline-none transition-all"
                    placeholder="070-123 45 67"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 font-display mb-1">
                  Ärende
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="block w-full rounded-md border-gray-300 bg-slate-50 border p-3 focus:border-elblue focus:ring-elblue sm:text-sm outline-none transition-all"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option>Allmän förfrågan</option>
                  <option>Offertförfrågan - Installation</option>
                  <option>Service & Felsökning</option>
                  <option>Laddbox / Elbil</option>
                  <option>Ritningar & Planering</option>
                  <option>För Företag / B2B</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 font-display mb-1">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-gray-300 bg-slate-50 border p-3 focus:border-elblue focus:ring-elblue sm:text-sm outline-none transition-all"
                  placeholder="Beskriv vad du behöver hjälp med..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-6 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-elorange hover:bg-elorange-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-elorange transition-all duration-200 transform hover:-translate-y-1 font-display uppercase tracking-wider"
                >
                  Skicka Förfrågan
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
             <div>
                <h4 className="text-2xl font-bold font-display text-slate-900 mb-4">Inga jobb är för små.</h4>
                <p className="text-slate-600 text-lg">
                   Jag erbjuder kostnadsfria offerter och kommer gärna ut och tittar på plats i Tjörn, Stenungsund och omnejd för att diskutera lösningar.
                </p>
             </div>

             <div className="space-y-6">
                <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border border-slate-100 hover:border-elblue transition-colors group">
                   <div className="flex-shrink-0 bg-elblue-50 p-4 rounded-full group-hover:bg-elblue group-hover:text-white text-elblue transition-colors">
                      <PhoneIcon className="h-6 w-6" />
                   </div>
                   <div className="ml-5">
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Ring mig</p>
                      <p className="text-xl font-bold text-slate-900 font-display">08-123 45 67</p>
                   </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border border-slate-100 hover:border-elblue transition-colors group">
                   <div className="flex-shrink-0 bg-elblue-50 p-4 rounded-full group-hover:bg-elblue group-hover:text-white text-elblue transition-colors">
                      <EnvelopeIcon className="h-6 w-6" />
                   </div>
                   <div className="ml-5">
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Maila mig</p>
                      <p className="text-xl font-bold text-slate-900 font-display">info@elprojekt.se</p>
                   </div>
                </div>
             </div>

             <div className="mt-8 p-6 bg-elblue rounded-lg text-white">
                <h5 className="font-display font-bold text-lg mb-2">Samarbete & B2B</h5>
                <p className="text-elblue-100 text-sm mb-4">
                  Söker ni underentreprenör? Jag är van att samarbeta i både små och stora projekt.
                </p>
                <div className="text-xs font-mono bg-elblue-600/50 p-2 rounded inline-block">
                   F-Skatt • Ansvarsförsäkring • ID06
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
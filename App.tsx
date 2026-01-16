import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import { SERVICES, SCHEDULE, PROMOS } from './constants';
import OfferPage from './pages/OfferPage';
import RulesPage from './pages/RulesPage';
import PrivacyPage from './pages/PrivacyPage';
import ZonesPage from './pages/ZonesPage';
import SchedulePage from './pages/SchedulePage';
import TeamPage from './pages/TeamPage';
import BusinessPage from './pages/BusinessPage';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Listen for custom event to open form from ZonesPage
  useEffect(() => {
    const handleOpenForm = () => {
      setIsFormOpen(true);
    };
    window.addEventListener('openContactForm', handleOpenForm);
    return () => window.removeEventListener('openContactForm', handleOpenForm);
  }, []);

  useEffect(() => {
    // Get route from hash
    const hash = window.location.hash.slice(1);
    setCurrentRoute(hash);

    // Scroll to top on initial load if hash route
    if (hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      setCurrentRoute(newHash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Render document pages based on route
  if (currentRoute === 'offer') {
    return (
      <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
        <Navbar />
        <OfferPage />
        <Footer />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  }

  if (currentRoute === 'rules') {
    return (
      <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
        <Navbar />
        <RulesPage />
        <Footer />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  }

  if (currentRoute === 'privacy') {
    return (
      <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
        <Navbar />
        <PrivacyPage />
        <Footer />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  }

  if (currentRoute === 'zones') {
    return (
      <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
        <Navbar />
        <ZonesPage />
        <Footer />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  }

  if (currentRoute === 'schedule') {
    return (
      <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
        <Navbar />
        <SchedulePage />
        <Footer />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  }

  if (currentRoute === 'team') {
    return (
      <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
        <Navbar />
        <TeamPage />
        <Footer />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  }

  if (currentRoute === 'business') {
    return (
      <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
        <Navbar />
        <BusinessPage />
        <Footer />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  }
  
  return (
    <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
      <Navbar />
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      
      <main className="relative z-10">
        
        {/* Wrapper for Hero overlap transition to prevent white corners */}
        <div className="bg-[#1A262A]">
            <Hero onOpenForm={() => setIsFormOpen(true)} />
            
            {/* SECTION: SPACES (Light) - with gradient background */}
            <section id="zones" className="py-24 md:py-32 px-6 md:px-12 relative rounded-[40px] md:rounded-[60px] -mt-10 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] z-30" style={{ background: 'linear-gradient(to bottom, #1A262A 0%, #1A262A 50%, #F2F5F6 50%, #F2F5F6 100%)' }}>
              <div className="relative bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-16">
              <div className="max-w-[1440px] mx-auto">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 border-b border-[#1A262A]/10 pb-8 gap-6">
                    <h2 className="font-syne text-5xl md:text-8xl font-bold uppercase text-[#1A262A] leading-[0.9] break-words">
                      ТЕРРИТОРИЯ <br/> <span className="text-[#1A262A]/20">СИЛЫ</span>
                    </h2>
                    <span className="text-[#1A262A] text-xs md:text-sm tracking-widest uppercase font-bold whitespace-nowrap bg-[#D4F058] px-3 py-1 rounded-full">
                      5000 КВАДРАТНЫХ МЕТРОВ
                    </span>
                 </div>

                 <div className="space-y-6">
                   {SERVICES.map((s, i) => (
                      <div 
                        key={s.id} 
                        className="group relative bg-[#F2F5F6] rounded-[32px] overflow-hidden hover:bg-[#D4F058] transition-colors duration-500 cursor-pointer shadow-sm hover:shadow-xl"
                        onClick={() => {
                          window.location.hash = 'zones';
                          setTimeout(() => {
                            const floorIndex = s.floorIndex !== undefined ? s.floorIndex + 1 : (i === 0 ? 2 : i === 1 ? 4 : 1);
                            const element = document.querySelector(`[data-floor="${floorIndex}"]`);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }, 500);
                        }}
                      >
                         <div className="flex flex-col md:flex-row h-auto min-h-[300px]">
                            {/* Image Side */}
                            <div className="w-full md:w-1/3 h-[250px] md:h-auto relative overflow-hidden">
                               <img 
                                  src={s.image} 
                                  alt={s.title}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                               />
                            </div>
                            
                            {/* Content Side */}
                            <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-between text-[#1A262A]">
                               <div className="flex justify-between items-start mb-6 md:mb-0">
                                  <span className="text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60">0{i+1}</span>
                                  <div className="w-12 h-12 rounded-full border border-[#1A262A]/20 flex items-center justify-center group-hover:bg-[#1A262A] group-hover:text-[#D4F058] group-hover:border-[#1A262A] transition-all shrink-0 ml-4">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                  </div>
                               </div>
                               
                               <div>
                                  <h3 className="font-syne text-3xl md:text-5xl font-bold uppercase mb-4 leading-none">{s.title}</h3>
                                  <p className="opacity-60 text-base md:text-lg max-w-xl leading-relaxed">{s.desc}</p>
                               </div>
                            </div>
                         </div>
                      </div>
                   ))}
                 </div>
              </div>
              </div>
            </section>
        </div>

        {/* SECTION: CARDS (Light) */}
        <section id="flow" className="py-24 md:py-32 px-6 md:px-12 bg-[#F2F5F6]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase text-center mb-16 md:mb-20 text-[#1A262A]">
                   КЛУБНЫЕ <span className="text-[#2F4249]/30">КАРТЫ</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {PROMOS.map((p, i) => (
                        <div key={i} className={`p-8 md:p-14 rounded-[40px] flex flex-col justify-between min-h-[350px] transition-transform duration-500 hover:scale-[0.99] shadow-lg ${i === 1 ? 'bg-[#D4F058] text-[#1A262A]' : 'bg-white text-[#1A262A]'}`}>
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                   <span className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest ${i === 1 ? 'bg-[#1A262A]/10' : 'bg-[#F2F5F6]'}`}>{p.badge}</span>
                                   {i === 1 && <span className="text-xl">★</span>}
                                </div>
                                <h3 className="font-syne text-3xl md:text-5xl font-bold uppercase leading-[0.9] mb-6 md:mb-8">{p.title}</h3>
                                <p className="opacity-60 text-base md:text-lg max-w-sm">{p.desc}</p>
                            </div>
                            
                            <button 
                              onClick={() => setIsFormOpen(true)}
                              className={`mt-10 w-full py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${i === 1 ? 'bg-[#1A262A] text-white hover:bg-white hover:text-[#1A262A]' : 'bg-[#1A262A] text-white hover:bg-[#D4F058] hover:text-[#1A262A]'}`}
                            >
                                Оформить карту
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* SECTION: SCHEDULE (Contrast Dark Block) */}
        <section className="py-24 bg-[#1A262A] text-white px-6 md:px-12 rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20 shadow-2xl">
             <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <h2 className="font-syne text-5xl md:text-8xl font-bold uppercase leading-none">
                       РИТМ <br/> <span className="text-[#D4F058]">КЛУБА</span>
                    </h2>
                    <p className="max-w-md text-white/60 font-medium text-sm md:text-base">
                       Актуальное расписание групповых программ. Более 50 направлений для твоего развития.
                    </p>
                </div>

                <div className="divide-y divide-white/10">
                   {SCHEDULE.map((item, i) => (
                      <div key={i} className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between group hover:bg-[#D4F058] hover:text-[#1A262A] hover:px-8 transition-all duration-300 rounded-3xl -mx-4 md:-mx-8 px-4 cursor-pointer">
                         <div className="flex items-start md:items-center gap-6 md:gap-12 mb-4 md:mb-0">
                            <span className="font-syne text-3xl md:text-5xl font-bold text-white/20 group-hover:text-[#1A262A] transition-colors whitespace-nowrap">{item.time}</span>
                            <div>
                               <h3 className="font-bold text-lg md:text-xl uppercase tracking-tight">{item.name}</h3>
                               <p className="text-[10px] md:text-xs font-bold text-white/40 group-hover:text-[#1A262A]/60 uppercase tracking-widest mt-1">{item.coach}</p>
                            </div>
                         </div>
                         <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-4">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40 bg-white/10 group-hover:bg-[#1A262A]/10 px-3 py-1 rounded-full">{item.spots}</span>
                            <div className="w-8 h-8 rounded-full bg-white text-[#1A262A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
        </section>

        {/* SECTION: JOIN (Light Form) */}
        <section id="join" className="py-24 px-6 md:px-12 flex items-center justify-center bg-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-4">
             <div className="w-full max-w-2xl text-center">
                 <span className="text-[#1A262A]/40 font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Стань частью комьюнити</span>
                 <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase text-[#1A262A] mb-12 md:mb-16 leading-tight">
                    НАЧНИ СВОЙ <br/> ПУТЬ
                 </h2>
                 
                 <button 
                   onClick={() => setIsFormOpen(true)}
                   className="w-full py-6 bg-[#1A262A] text-white rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#D4F058] hover:text-[#1A262A] transition-colors shadow-lg"
                 >
                    Записаться на экскурсию
                 </button>
             </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;
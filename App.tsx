import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import SEOHead from './components/SEOHead';
import { SERVICES, SCHEDULE, PROMOS } from './constants';
import OfferPage from './pages/OfferPage';
import RulesPage from './pages/RulesPage';
import PrivacyPage from './pages/PrivacyPage';
import ZonesPage from './pages/ZonesPage';
import SchedulePage from './pages/SchedulePage';
import TeamPage from './pages/TeamPage';
import BusinessPage from './pages/BusinessPage';
import NotFoundPage from './pages/NotFoundPage';
import SubmittedPage from './pages/SubmittedPage';

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
    // Get route from pathname (without hash)
    const getRouteFromPath = () => {
      const path = window.location.pathname.replace(/^\//, ''); // Remove leading slash
      return path || '';
    };

    const route = getRouteFromPath();
    const validRoutes = ['offer', 'rules', 'privacy', 'zones', 'schedule', 'team', 'business', 'submitted', ''];
    
    // If route is not empty and not valid, show 404
    if (route && !validRoutes.includes(route)) {
      setCurrentRoute('404');
    } else {
      setCurrentRoute(route);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Listen for popstate (back/forward buttons)
    const handlePopState = () => {
      const newRoute = getRouteFromPath();
      if (newRoute && !validRoutes.includes(newRoute)) {
        setCurrentRoute('404');
      } else {
        setCurrentRoute(newRoute);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Helper function to navigate without hash
  const navigate = (route: string) => {
    const path = route ? `/${route}` : '/';
    window.history.pushState({}, '', path);
    const validRoutes = ['offer', 'rules', 'privacy', 'zones', 'schedule', 'team', 'business', 'submitted', ''];
    if (route && !validRoutes.includes(route)) {
      setCurrentRoute('404');
    } else {
      setCurrentRoute(route);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render document pages based on route
  if (currentRoute === 'offer') {
    return (
      <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
        <SEOHead 
          title="Публичная оферта - PANOVALIFE"
          description="Публичная оферта фитнес-клуба PANOVALIFE. Договор оказания услуг."
          canonical="https://panovalife.ru/offer"
        />
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
        <SEOHead 
          title="Правила посещения - PANOVALIFE"
          description="Правила посещения фитнес-клуба PANOVALIFE. Регламент пользования услугами клуба."
          canonical="https://panovalife.ru/rules"
        />
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
        <SEOHead 
          title="Политика конфиденциальности - PANOVALIFE"
          description="Политика конфиденциальности фитнес-клуба PANOVALIFE. Защита персональных данных."
          canonical="https://panovalife.ru/privacy"
        />
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
        <SEOHead 
          title="Пространства клуба - PANOVALIFE | 5 этажей, 5000 м²"
          description="Пространства фитнес-клуба PANOVALIFE: бассейн 24м, тренажерный зал, групповые программы, йога, единоборства, детский клуб, SPA зона."
          canonical="https://panovalife.ru/zones"
        />
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
        <SEOHead 
          title="Расписание занятий - PANOVALIFE | 50+ направлений"
          description="Расписание групповых программ фитнес-клуба PANOVALIFE. Актуальное расписание занятий на неделю вперед."
          canonical="https://panovalife.ru/schedule"
        />
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
        <SEOHead 
          title="Команда тренеров - PANOVALIFE"
          description="Профессиональная команда тренеров фитнес-клуба PANOVALIFE. Опытные инструкторы и наставники."
          canonical="https://panovalife.ru/team"
        />
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
        <SEOHead 
          title="Корпоративные программы - PANOVALIFE | Бизнесу"
          description="Корпоративные программы фитнес-клуба PANOVALIFE для бизнеса. Специальные условия для компаний."
          canonical="https://panovalife.ru/business"
        />
        <Navbar />
        <BusinessPage />
        <Footer />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  }

  if (currentRoute === 'submitted') {
    return (
      <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
        <SEOHead 
          title="Спасибо за заявку - PANOVALIFE"
          description="Спасибо за заявку в фитнес-клуб PANOVALIFE. Наш менеджер свяжется с вами в ближайшее время."
          canonical="https://panovalife.ru/submitted"
        />
        <Navbar />
        <SubmittedPage />
        <Footer />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  }

  if (currentRoute === '404') {
    return (
      <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
        <SEOHead 
          title="Страница не найдена - PANOVALIFE | 404"
          description="Страница не найдена. Вернитесь на главную страницу фитнес-клуба PANOVALIFE."
          canonical="https://panovalife.ru/404"
        />
        <Navbar />
        <NotFoundPage />
        <Footer />
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  }
  
  return (
    <div className="bg-[#F2F5F6] min-h-screen selection:bg-[#D4F058] selection:text-[#1A262A] overflow-x-hidden">
      <SEOHead />
      <Navbar />
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      
      <main className="relative z-10">
        
        {/* Wrapper for Hero overlap transition to prevent white corners */}
        <div className="bg-[#1A262A]" style={{ background: 'linear-gradient(to bottom, #1A262A 0%, #1A262A 50%, #F2F5F6 50%, #F2F5F6 100%)' }}>
            <Hero onOpenForm={() => setIsFormOpen(true)} />
            
            {/* SECTION: SPACES (Light) */}
            <section id="zones" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px] -mt-8 sm:-mt-10 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] z-30">
              <div className="max-w-[1440px] mx-auto">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 border-b border-[#1A262A]/10 pb-6 sm:pb-7 md:pb-8 gap-4 sm:gap-5 md:gap-6">
                    <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold uppercase text-[#1A262A] leading-[0.9] break-words">
                      ТЕРРИТОРИЯ <br/> <span className="text-[#1A262A]/20">СИЛЫ</span>
                    </h2>
                    <span className="text-[#1A262A] text-[10px] sm:text-xs md:text-sm tracking-widest uppercase font-bold whitespace-nowrap bg-[#D4F058] px-2 sm:px-3 py-1 rounded-full">
                      5000 КВАДРАТНЫХ МЕТРОВ
                    </span>
                 </div>

                 <div className="space-y-4 sm:space-y-5 md:space-y-6">
                   {SERVICES.map((s, i) => (
                      <div 
                        key={s.id} 
                        className="group relative bg-[#F2F5F6] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden hover:bg-[#D4F058] transition-colors duration-500 cursor-pointer shadow-sm hover:shadow-xl"
                        onClick={() => {
                          if (s.id === 'aqua') {
                            // Аква зона → /zones (2 этаж)
                            navigate('zones');
                            setTimeout(() => {
                              const element = document.querySelector('[data-floor="2"]');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }, 500);
                          } else if (s.id === 'gym') {
                            // Силовой зал → /zones (4 этаж)
                            navigate('zones');
                            setTimeout(() => {
                              const element = document.querySelector('[data-floor="4"]');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }, 500);
                          } else if (s.id === 'groups') {
                            // Групповые программы → /zones (3 этаж)
                            navigate('zones');
                            setTimeout(() => {
                              const element = document.querySelector('[data-floor="3"]');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }, 500);
                          }
                        }}
                      >
                         <div className="flex flex-col md:flex-row h-auto min-h-[250px] sm:min-h-[280px] md:min-h-[300px]">
                            {/* Image Side */}
                            <div className="w-full md:w-1/3 h-[200px] sm:h-[220px] md:h-[250px] lg:h-auto relative overflow-hidden">
                               <img 
                                  src={s.image} 
                                  alt={s.title}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                               />
                            </div>
                            
                            {/* Content Side */}
                            <div className="w-full md:w-2/3 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between text-[#1A262A]">
                               <div className="flex justify-between items-start mb-4 sm:mb-5 md:mb-6 lg:mb-0">
                                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60">0{i+1}</span>
                                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-[#1A262A]/20 flex items-center justify-center group-hover:bg-[#1A262A] group-hover:text-[#D4F058] group-hover:border-[#1A262A] transition-all shrink-0 ml-3 sm:ml-4">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                  </div>
                               </div>
                               
                               <div>
                                  <h3 className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-3 sm:mb-4 leading-none">{s.title}</h3>
                                  <p className="opacity-60 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">{s.desc}</p>
                               </div>
                            </div>
                         </div>
                      </div>
                   ))}
                 </div>
              </div>
            </section>

            {/* SECTION: YOGA SCHOOL */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#1A262A] text-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px] mx-2 sm:mx-3 md:mx-4 mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20 shadow-2xl">
              <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                  <div className="flex-1 w-full">
                    <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mb-4 sm:mb-5 md:mb-6 leading-[0.9]">
                      ЛУЧШАЯ <br/> <span className="text-[#D4F058]">ШКОЛА ЙОГИ</span> <br/> В РЕГИОНЕ
                    </h2>
                    <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
                      Профессиональные инструкторы с многолетним опытом. Традиционные и современные направления йоги. Просторные залы с естественным освещением и специальным покрытием. Групповые и индивидуальные занятия для всех уровней подготовки.
                    </p>
                  </div>
                  <div className="flex-1 w-full md:w-auto flex justify-center md:justify-end mt-6 md:mt-0">
                    <div className="w-full max-w-md h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-[#D4F058]/10 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] flex items-center justify-center border border-[#D4F058]/20">
                      <svg className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-[#D4F058]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3C10.34 3 9 4.34 9 6C9 7.66 10.34 9 12 9C13.66 9 15 7.66 15 6C15 4.34 13.66 3 12 3Z"/>
                        <path d="M6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C7.66 15 9 13.66 9 12C9 10.34 7.66 9 6 9Z"/>
                        <path d="M18 9C16.34 9 15 10.34 15 12C15 13.66 16.34 15 18 15C19.66 15 21 13.66 21 12C21 10.34 19.66 9 18 9Z"/>
                        <path d="M12 15C10.34 15 9 16.34 9 18C9 19.66 10.34 21 12 21C13.66 21 15 19.66 15 18C15 16.34 13.66 15 12 15Z"/>
                        <circle cx="12" cy="12" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>

        {/* SECTION: CARDS (Light) */}
        <section id="flow" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F2F5F6]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 text-[#1A262A]">
                   КЛУБНЫЕ <span className="text-[#2F4249]/30">КАРТЫ</span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    {PROMOS.map((p, i) => (
                        <div 
                          key={i} 
                          className={`p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] flex flex-col justify-between min-h-[320px] sm:min-h-[340px] md:min-h-[350px] transition-transform duration-500 hover:scale-[0.99] shadow-lg cursor-pointer ${i === 1 ? 'bg-[#D4F058] text-[#1A262A]' : 'bg-white text-[#1A262A]'}`}
                          onClick={(e) => {
                            // Если клик не на кнопке, открываем модалку
                            if ((e.target as HTMLElement).closest('button') === null) {
                              setIsFormOpen(true);
                            }
                          }}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6 sm:mb-7 md:mb-8">
                                   <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] uppercase font-bold tracking-widest ${i === 1 ? 'bg-[#1A262A]/10' : i === 2 ? 'bg-[#1A262A] text-white' : 'bg-[#F2F5F6]'}`}>{p.badge}</span>
                                   {i === 1 && <span className="text-lg sm:text-xl">★</span>}
                                </div>
                                <h3 className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-[0.9] mb-4 sm:mb-5 md:mb-6 lg:mb-8">{p.title}</h3>
                                <p className="opacity-60 text-sm sm:text-base md:text-lg max-w-sm">{p.desc}</p>
                            </div>
                            
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsFormOpen(true);
                              }}
                              className={`mt-6 sm:mt-8 md:mt-10 w-full py-4 sm:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all ${i === 1 ? 'bg-[#1A262A] text-white hover:bg-white hover:text-[#1A262A]' : i === 2 ? 'bg-[#D4F058] text-[#1A262A] hover:bg-[#1A262A] hover:text-white' : 'bg-[#1A262A] text-white hover:bg-[#D4F058] hover:text-[#1A262A]'}`}
                            >
                                Оформить карту
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* SECTION: SCHEDULE (Contrast Dark Block) */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#1A262A] text-white px-4 sm:px-6 md:px-8 lg:px-12 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px] mx-2 sm:mx-3 md:mx-4 mb-12 sm:mb-16 md:mb-20 shadow-2xl">
             <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 md:mb-14 lg:mb-16 gap-6 md:gap-8">
                    <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold uppercase leading-none">
                       РИТМ <br/> <span className="text-[#D4F058]">КЛУБА</span>
                    </h2>
                    <p className="max-w-md text-white/60 font-medium text-xs sm:text-sm md:text-base">
                       Актуальное расписание групповых программ. Более 50 направлений для твоего развития.
                    </p>
                </div>

                <div className="divide-y divide-white/10">
                   {SCHEDULE.map((item, i) => (
                      <div key={i} className="py-4 sm:py-6 md:py-8 lg:py-10 flex flex-col md:flex-row md:items-center justify-between group hover:bg-[#D4F058] hover:text-[#1A262A] hover:px-4 sm:hover:px-6 md:hover:px-8 transition-all duration-300 rounded-2xl sm:rounded-3xl -mx-2 sm:-mx-4 md:-mx-8 px-2 sm:px-4 cursor-pointer">
                         <div className="flex items-start md:items-center gap-4 sm:gap-5 md:gap-6 lg:gap-12 mb-3 sm:mb-4 md:mb-0">
                            <span className="font-syne text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white/20 group-hover:text-[#1A262A] transition-colors whitespace-nowrap">{item.time}</span>
                            <div>
                               <h3 className="font-bold text-base sm:text-lg md:text-xl uppercase tracking-tight">{item.name}</h3>
                               <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white/40 group-hover:text-[#1A262A]/60 uppercase tracking-widest mt-1">{item.coach}</p>
                            </div>
                         </div>
                         <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-3 sm:gap-4">
                            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40 bg-white/10 group-hover:bg-[#1A262A]/10 px-2 sm:px-3 py-1 rounded-full">{item.spots}</span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#1A262A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                               <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
        </section>

        {/* SECTION: JOIN (Light Form) */}
        <section id="join" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px] mx-2 sm:mx-3 md:mx-4 mb-4">
             <div className="w-full max-w-2xl text-center">
                 <span className="text-[#1A262A]/40 font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-6 sm:mb-8 block">Стань частью комьюнити</span>
                 <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase text-[#1A262A] mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 leading-tight">
                    НАЧНИ СВОЙ <br/> ПУТЬ
                 </h2>
                 
                 <button 
                   onClick={() => setIsFormOpen(true)}
                   className="w-full py-4 sm:py-5 md:py-6 bg-[#1A262A] text-white rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm hover:bg-[#D4F058] hover:text-[#1A262A] transition-colors shadow-lg"
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
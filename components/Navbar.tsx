import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  // Check for light theme on light pages
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.body.getAttribute('data-theme');
      setIsLightTheme(theme === 'light');
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    
    return () => observer.disconnect();
  }, []);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { id: 'zones', label: 'Пространства', route: '' },
    { id: 'schedule', label: 'Расписание', route: 'schedule' },
    { id: 'team', label: 'Команда', route: 'team' },
    { id: 'business', label: 'Бизнесу', route: 'business' }
  ];

  // Dark theme for light pages
  const useDarkTheme = isLightTheme || scrolled;
  const textColorClass = useDarkTheme ? 'text-[#1A262A]' : 'text-white';
  const navBgClass = useDarkTheme ? 'bg-white/95 backdrop-blur-md border-[#1A262A]/10 shadow-sm' : 'bg-[#2F4249]/40 border-white/5';
  const navTextClass = useDarkTheme ? 'text-[#1A262A]/70 hover:text-[#1A262A]' : 'text-white/80 hover:text-[#1A262A]';

  return (
    <>
      {/* --- NAVBAR CONTAINER --- */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${useDarkTheme ? 'py-4 border-b border-[#1A262A]/10' : 'py-6'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className={`flex items-center gap-4 relative z-50 transition-opacity duration-300 hover:opacity-80`}>
               <img 
                  src={Logo} 
                  alt="PANOVA LIFE" 
                  className={`h-8 md:h-12 w-auto ${useDarkTheme ? 'brightness-0' : 'brightness-0 invert'}`}
               />
            </a>

            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center gap-1 backdrop-blur-xl border rounded-full p-1.5 transition-all duration-300 ${navBgClass}`}>
                {menuItems.map((item) => (
                   <a 
                     key={item.id}
                     href={item.route ? `#${item.route}` : `#${item.id}`}
                     onClick={(e) => {
                       if (item.route) {
                         e.preventDefault();
                         window.location.hash = item.route;
                       } else if (item.id === 'main') {
                         e.preventDefault();
                         window.location.hash = '';
                         window.scrollTo({ top: 0, behavior: 'smooth' });
                       } else {
                         const target = document.querySelector(`#${item.id}`);
                         if (target) {
                           e.preventDefault();
                           target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                           window.scrollTo({ top: 0, behavior: 'smooth' });
                         }
                       }
                     }}
                     className={`px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#D4F058] ${navTextClass}`}
                   >
                     {item.label}
                   </a>
                ))}
            </nav>

            {/* Right Actions & Burger Toggle */}
            <div className="flex items-center gap-6 relative z-50">
               <a href="tel:+74212903062" className={`hidden md:block text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#D4F058] ${textColorClass}`}>
                 +7 (4212) 90-30-62
               </a>
               
               {/* Burger Button */}
               <button 
                 onClick={() => setIsMenuOpen(!isMenuOpen)}
                 className={`md:hidden w-12 h-12 rounded-full border flex items-center justify-center transition-colors hover:bg-[#D4F058] hover:text-[#1A262A] ${useDarkTheme ? 'bg-[#F2F5F6] border-[#1A262A]/10 text-[#1A262A]' : 'bg-[#2F4249] border-white/10 text-white'}`}
               >
                  {isMenuOpen ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                  )}
               </button>
            </div>
        </div>
      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-[#D4F058] rounded-full blur-[120px] opacity-10"></div>
          </div>
          
          <nav className="flex flex-col items-center gap-8 relative z-10">
              {menuItems.map((item, i) => (
                  <a 
                    key={item.id}
                    href={item.route ? `#${item.route}` : `#${item.id}`}
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      if (item.route) {
                        e.preventDefault();
                        window.location.hash = item.route;
                      } else if (item.id === 'main') {
                        e.preventDefault();
                        window.location.hash = '';
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        const target = document.querySelector(`#${item.id}`);
                        if (target) {
                          e.preventDefault();
                          setTimeout(() => {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }, 300);
                        }
                      }
                    }}
                    className="font-syne text-5xl font-bold uppercase text-[#1A262A] hover:text-[#D4F058] transition-colors"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {item.label}
                  </a>
              ))}
          </nav>

          <div className="mt-16 flex flex-col items-center gap-4 relative z-10">
             <a href="tel:+74212903062" className="text-xl text-[#1A262A] font-bold tracking-widest hover:text-[#D4F058] transition-colors">+7 (4212) 90-30-62</a>
             <span className="text-[#1A262A]/40 text-xs uppercase tracking-[0.2em]">Хабаровск, Ким Ю Чена 7а</span>
          </div>
      </div>
    </>
  );
};

export default Navbar;
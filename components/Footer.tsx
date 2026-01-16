import React from 'react';
import TipaLogo from '../assets/tipa-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 text-center bg-[#F2F5F6] px-4">
      <div className="font-bold text-[10px] text-[#1A262A]/30 uppercase tracking-[0.5em] mb-8">
        Panovalife Premium Fitness
      </div>
      <h1 className="font-syne font-bold text-[12vw] leading-none text-[#1A262A]/5 select-none pointer-events-none">
        PANOVA
      </h1>
      <div className="mt-8 space-y-6">
        {/* Контакты */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-xs font-bold uppercase text-[#1A262A]/50 tracking-widest">
          <a href="tel:+74212903062" className="hover:text-[#1A262A] transition-colors">+7 (4212) 90-30-62</a>
          <a href="https://wa.me/79098047979" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A262A] transition-colors">WhatsApp</a>
          <a href="mailto:sales@panova.ru" className="hover:text-[#1A262A] transition-colors">sales@panova.ru</a>
        </div>
        
        {/* Социальные сети */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-xs font-bold uppercase text-[#1A262A]/50 tracking-widest">
          <a href="https://www.instagram.com/panovalife.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A262A] transition-colors">Instagram</a>
          <a href="https://t.me/panovalife" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A262A] transition-colors">Telegram</a>
          <a href="https://vk.com/panovalifekhv" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A262A] transition-colors">VKontakte</a>
          <a href="https://youtu.be/xm-BYEFYK9o" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A262A] transition-colors">YouTube</a>
        </div>
        
        {/* Документы */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-xs font-bold uppercase text-[#1A262A]/50 tracking-widest">
          <a href="#offer" className="hover:text-[#1A262A] transition-colors">Оферта</a>
          <a href="#rules" className="hover:text-[#1A262A] transition-colors">Правила посещения</a>
          <a href="#privacy" className="hover:text-[#1A262A] transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-[#1A262A]/10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        <span className="text-xs text-[#1A262A] font-medium uppercase">DESIGNED BY</span>
        <a 
          href="https://tipa.uz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <img 
            src={TipaLogo} 
            alt="Tipa.uz" 
            className="h-8 md:h-10 w-auto"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
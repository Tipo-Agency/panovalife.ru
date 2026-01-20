import React from 'react';
import TipaLogo from '../assets/tipa-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 text-center bg-[#F2F5F6] px-4">
      <div className="font-bold text-[10px] text-[#1A262A]/30 uppercase tracking-[0.5em] mb-8">
        Panovalife Premium Fitness
      </div>
      <h1 className="font-syne font-bold text-[12vw] leading-none text-[#1A262A]/5 select-none pointer-events-none">
        PANOVALIFE
      </h1>
      <div className="mt-8 space-y-6">
        {/* Контакты */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-xs font-bold uppercase text-[#1A262A]/50 tracking-widest">
          <a href="tel:+74212479079" className="hover:text-[#1A262A] transition-colors">+7 (4212) 47-90-79</a>
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
          <a 
            href="/offer" 
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/offer');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="hover:text-[#1A262A] transition-colors"
          >
            Оферта
          </a>
          <a 
            href="/rules" 
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/rules');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="hover:text-[#1A262A] transition-colors"
          >
            Правила посещения
          </a>
          <a 
            href="/privacy" 
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/privacy');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="hover:text-[#1A262A] transition-colors"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
      
          <div className="mt-12 pt-8 border-t border-[#1A262A]/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
              {/* Left side - Legal info in columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full md:flex-1">
                {/* Column 1 */}
                <div className="text-xs text-[#1A262A]/60 leading-relaxed space-y-1">
                  <div className="font-bold text-[#1A262A]">ИП Донских С.Г.</div>
                  <div>680030 г. Хабаровск, ул. Ленина 45-25</div>
                  <div>ИНН 272104237135</div>
                </div>
                {/* Column 2 */}
                <div className="text-xs text-[#1A262A]/60 leading-relaxed space-y-1">
                  <div>КПП 272101001</div>
                  <div>ОГРНИП 304272103400040</div>
                  <div className="mt-4">ФИЛИАЛ "ХАБАРОВСКИЙ" АО "АЛЬФА-БАНК"</div>
                </div>
                {/* Column 3 */}
                <div className="text-xs text-[#1A262A]/60 leading-relaxed space-y-1">
                  <div>Р/счет: 40802810920000003733</div>
                  <div>К/счет: 30101810800000000770</div>
                  <div>БИК: 040813770</div>
                </div>
              </div>
              
              {/* Right side - Designed by */}
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-3 md:gap-4 md:ml-8 shrink-0 mt-4 md:mt-0">
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
                    className="h-6 md:h-7 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
    </footer>
  );
};

export default Footer;
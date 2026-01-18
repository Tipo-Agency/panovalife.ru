import React, { useEffect } from 'react';

const BusinessPage: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, []);

  const benefits = [
    { title: 'КОРПОРАТИВНЫЕ АБОНЕМЕНТЫ', desc: 'Специальные условия для компаний от 10 сотрудников' },
    { title: 'КОРПОРАТИВНЫЕ ТРЕНИРОВКИ', desc: 'Выездные занятия и мероприятия в вашем офисе' },
    { title: 'КЛУБНЫЕ СОБЫТИЯ', desc: 'Организация корпоративных мероприятий и тимбилдингов' },
    { title: 'ЗДОРОВЬЕ СОТРУДНИКОВ', desc: 'Программы wellness и мотивации для вашей команды' }
  ];

  return (
    <div className="bg-[#F2F5F6] min-h-screen">
      {/* Wrapper for Hero overlap transition */}
      <div className="bg-[#1A262A]" style={{ background: 'linear-gradient(to bottom, #1A262A 0%, #1A262A 50%, #F2F5F6 50%, #F2F5F6 100%)' }}>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#1A262A] text-white pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-14 md:mb-16 gap-6 md:gap-8">
            <h1 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold uppercase leading-[0.9]">
              БИЗНЕС <br/> <span className="text-[#D4F058]">КЛИЕНТАМ</span>
            </h1>
            <p className="max-w-md text-white/60 font-medium text-sm sm:text-base md:text-lg">
              Инвестируйте в здоровье своей команды. Специальные условия для компаний и корпоративные программы.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid - overlapping with hero */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px] -mt-8 sm:-mt-10 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] z-30 mb-12 md:mb-16 lg:mb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 hover:bg-[#D4F058] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl group"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1A262A]/20 group-hover:text-[#1A262A]/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-[#1A262A]/20 flex items-center justify-center group-hover:bg-[#1A262A] group-hover:text-[#D4F058] group-hover:border-[#1A262A] transition-all">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#1A262A] mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#1A262A]/70 text-sm sm:text-base md:text-lg leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-[#1A262A] text-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase mb-8">
            НАЧНИТЕ С <span className="text-[#D4F058]">БЕСПЛАТНОЙ</span> КОНСУЛЬТАЦИИ
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Свяжитесь с нашим отделом корпоративных продаж и узнайте о специальных условиях для вашей компании
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+74212903062"
              className="px-10 py-5 bg-[#D4F058] text-[#1A262A] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white transition-colors"
            >
              +7 (4212) 90-30-62
            </a>
            <button
              onClick={() => {
                const event = new CustomEvent('openContactForm');
                window.dispatchEvent(event);
              }}
              className="px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-colors"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-12 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase text-[#1A262A] mb-16 text-center">
            ПРЕИМУЩЕСТВА <span className="text-[#1A262A]/20">КОРПОРАТИВНОГО</span> ЧЛЕНСТВА
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Гибкая система оплаты', desc: 'Выберите удобный формат: разовые платежи или подписка' },
              { title: 'Персональный менеджер', desc: 'Дедиicated менеджер для решения всех вопросов' },
              { title: 'Аналитика посещений', desc: 'Отчеты об использовании абонементов сотрудниками' },
              { title: 'Индивидуальные программы', desc: 'Разработка программ под задачи вашей компании' },
              { title: 'Корпоративные мероприятия', desc: 'Организация тимбилдингов и спортивных событий' },
              { title: 'Привилегии для сотрудников', desc: 'Специальные цены на дополнительные услуги' }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[32px] p-8 hover:bg-[#D4F058] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl group"
              >
                <div className="text-4xl font-syne font-bold text-[#1A262A]/20 group-hover:text-[#1A262A]/40 mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-syne text-xl md:text-2xl font-bold uppercase text-[#1A262A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#1A262A]/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;

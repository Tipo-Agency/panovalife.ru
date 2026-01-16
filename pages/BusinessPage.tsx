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
    <div className="bg-[#F2F5F6] min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1A262A] text-white -mt-32 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h1 className="font-syne text-5xl md:text-8xl font-bold uppercase leading-[0.9]">
              БИЗНЕСУ <br/> <span className="text-[#D4F058]">КЛИЕНТАМ</span>
            </h1>
            <p className="max-w-md text-white/60 font-medium text-base md:text-lg">
              Инвестируйте в здоровье своей команды. Специальные условия для компаний и корпоративные программы.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 px-6 md:px-12 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[40px] p-10 md:p-16 hover:bg-[#D4F058] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-syne font-bold text-[#1A262A]/20 group-hover:text-[#1A262A]/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-14 h-14 rounded-full border-2 border-[#1A262A]/20 flex items-center justify-center group-hover:bg-[#1A262A] group-hover:text-[#D4F058] group-hover:border-[#1A262A] transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="font-syne text-3xl md:text-4xl font-bold uppercase text-[#1A262A] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#1A262A]/70 text-lg leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <a 
              href="mailto:sales@panova.ru"
              className="px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-colors"
            >
              sales@panova.ru
            </a>
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
              { icon: '📊', title: 'Гибкая система оплаты', desc: 'Выберите удобный формат: разовые платежи или подписка' },
              { icon: '👥', title: 'Персональный менеджер', desc: 'Дедиicated менеджер для решения всех вопросов' },
              { icon: '📈', title: 'Аналитика посещений', desc: 'Отчеты об использовании абонементов сотрудниками' },
              { icon: '🎯', title: 'Индивидуальные программы', desc: 'Разработка программ под задачи вашей компании' },
              { icon: '💼', title: 'Корпоративные мероприятия', desc: 'Организация тимбилдингов и спортивных событий' },
              { icon: '🏆', title: 'Привилегии для сотрудников', desc: 'Специальные цены на дополнительные услуги' }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[32px] p-8 hover:bg-[#D4F058] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
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

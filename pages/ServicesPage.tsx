import React, { useEffect } from 'react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, []);

  return (
    <div className="bg-[#F2F5F6] min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1A262A] text-white -mt-32 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h1 className="font-syne text-5xl md:text-8xl font-bold uppercase leading-[0.9]">
              НАШИ <br/> <span className="text-[#D4F058]">УСЛУГИ</span>
            </h1>
            <p className="max-w-md text-white/60 font-medium text-base md:text-lg">
              5000 м² пространства для трансформации. Профессиональное оборудование и индивидуальный подход.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="space-y-6">
            {SERVICES.map((s, i) => (
              <div key={s.id} className="group relative bg-white rounded-[40px] md:rounded-[60px] overflow-hidden hover:bg-[#D4F058] transition-colors duration-500 cursor-pointer shadow-lg hover:shadow-2xl">
                <div className="flex flex-col md:flex-row h-auto min-h-[400px]">
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
                    <img 
                      src={s.image} 
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                    />
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-[#1A262A]">
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60">0{i+1}</span>
                      <div className="w-14 h-14 rounded-full border-2 border-[#1A262A]/20 flex items-center justify-center group-hover:bg-[#1A262A] group-hover:text-[#D4F058] group-hover:border-[#1A262A] transition-all shrink-0 ml-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                    </div>
                    
                    <h2 className="font-syne text-4xl md:text-6xl font-bold uppercase mb-6 leading-none">{s.title}</h2>
                    <p className="opacity-70 text-lg md:text-xl max-w-xl leading-relaxed mb-8">{s.desc}</p>
                    
                    <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                      <span>Подробнее</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-6 md:px-12 bg-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase text-[#1A262A] mb-16 text-center">
            ДОПОЛНИТЕЛЬНЫЕ <span className="text-[#1A262A]/20">УСЛУГИ</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'SPA-КОМПЛЕКС', desc: 'Сауна, хамам, массажные кабинеты для восстановления после тренировок' },
              { title: 'ПЕРСОНАЛЬНЫЕ ТРЕНИРОВКИ', desc: 'Индивидуальные программы с профессиональными тренерами' },
              { title: 'ФИТНЕС-БАР', desc: 'Правильное питание и спортивное питание от наших партнеров' }
            ].map((service, i) => (
              <div key={i} className="bg-[#F2F5F6] rounded-[32px] p-8 hover:bg-[#D4F058] transition-colors duration-300">
                <div className="text-4xl font-syne font-bold text-[#1A262A] mb-4">{i + 1}</div>
                <h3 className="font-syne text-2xl md:text-3xl font-bold uppercase text-[#1A262A] mb-4">{service.title}</h3>
                <p className="text-[#1A262A]/60 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

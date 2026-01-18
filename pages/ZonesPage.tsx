import React, { useEffect } from 'react';

const ZonesPage: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, []);

  const floors = [
    {
      floor: '1 ЭТАЖ',
      image: '/Panova-9.jpg',
      zones: [
        { title: 'ДЕТСКИЙ КЛУБ', desc: 'Специально оборудованная зона для детей с безопасным инвентарем и профессиональными инструкторами' },
        { title: 'ЙОГА', desc: 'Просторный зал для йоги и медитации с натуральным освещением и специальным покрытием' },
        { title: 'ГРУППОВЫЕ НАПРАВЛЕНИЯ', desc: 'Зал для групповых занятий с современным оборудованием для различных фитнес-программ' }
      ]
    },
    {
      floor: '2 ЭТАЖ',
      image: '/Panova-3.jpg',
      zones: [
        { title: 'АКВА ЗОНА', desc: 'Зона водных процедур с комфортной температурой и расслабляющей атмосферой' },
        { title: 'БАССЕЙН', desc: 'Бассейн 24 метра с озонированной водой. Пять дорожек для комфортного плавания' },
        { title: 'САУНА', desc: 'Финская сауна для восстановления и релаксации после тренировок' },
        { title: 'ДЕТСКИЙ БАССЕЙН', desc: 'Неглубокий бассейн для детей с безопасным оборудованием и постоянным присмотром' },
        { title: 'ДЖАКУЗИ', desc: 'Гидромассажная ванна для снятия напряжения и восстановления мышц' }
      ]
    },
    {
      floor: '3 ЭТАЖ',
      image: '/Panova-2.jpg',
      zones: [
        { title: 'КАРДИОЗОНА', desc: 'Профессиональные кардиотренажеры: беговые дорожки, эллипсы, велотренажеры и гребные тренажеры' },
        { title: 'ГРУППОВЫЕ ПРОГРАММЫ', desc: 'Современные залы для групповых занятий: HIIT, функциональный тренинг, танцы' }
      ]
    },
    {
      floor: '4 ЭТАЖ',
      image: '/Panova-2.jpg',
      zones: [
        { title: 'ТРЕНАЖЕРНЫЙ ЗАЛ', desc: '700м² лучшего "железа" от Life Fitness и Hammer. Профессиональное оборудование для достижения профессиональных целей' }
      ]
    },
    {
      floor: '5 ЭТАЖ',
      image: '/1637467043_03.jpg',
      zones: [
        { title: 'ЗАЛЫ ГРУППОВЫХ ПРОГРАММ', desc: 'Специализированные залы для различных групповых направлений' },
        { title: 'ЙОГА', desc: 'Дополнительный зал для йоги и пилатеса с видом на город' },
        { title: 'ЕДИНОБОРСТВА', desc: 'Зал для боевых искусств с профессиональным покрытием и оборудованием' }
      ]
    }
  ];

  const services = [
    { title: 'ПЕРСОНАЛЬНЫЕ ТРЕНИРОВКИ', desc: 'Индивидуальные программы с профессиональными тренерами' },
    { title: 'SPA-КОМПЛЕКС', desc: 'Сауна, хамам, массажные кабинеты для восстановления после тренировок' },
    { title: 'ФИТНЕС-БАР', desc: 'Правильное питание и спортивное питание от наших партнеров' },
    { title: 'МЕДИЦИНСКИЙ КАБИНЕТ', desc: 'Консультации и медицинское сопровождение' },
    { title: 'ПАРКОВКА', desc: 'Бесплатная парковка для членов клуба' }
  ];

  const cards = [
    { title: 'СТАНДАРТ', desc: 'Базовый доступ ко всем зонам клуба и групповым программам. Идеальный выбор для регулярных тренировок.' },
    { title: 'БИЗНЕС', desc: 'Расширенный доступ с дополнительными услугами и приоритетной записью на занятия. Для активных членов клуба.' },
    { title: 'VIP', desc: 'Максимальный уровень с персональным менеджером и эксклюзивными услугами. Премиальный опыт в каждом посещении.' }
  ];

  return (
    <div className="bg-[#F2F5F6] min-h-screen">
      {/* Wrapper for Hero overlap transition */}
      <div className="bg-[#1A262A]" style={{ background: 'linear-gradient(to bottom, #1A262A 0%, #1A262A 50%, #F2F5F6 50%, #F2F5F6 100%)' }}>
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1A262A] text-white pt-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h1 className="font-syne text-5xl md:text-8xl font-bold uppercase leading-[0.9]">
              ПРОСТРАНСТВА <br/> <span className="text-[#D4F058]">КЛУБА</span>
            </h1>
            <p className="max-w-md text-white/60 font-medium text-base md:text-lg">
              5000 м² на 5 этажах. Каждая зона спроектирована для максимального комфорта и результата.
            </p>
          </div>
        </div>
      </section>

      {/* Floors - overlapping with hero */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative bg-white rounded-[40px] md:rounded-[60px] -mt-10 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] z-30 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="space-y-12">
            {floors.map((floor, floorIndex) => (
              <div key={floorIndex} data-floor={floorIndex + 1} className="bg-white rounded-[40px] md:rounded-[60px] overflow-hidden shadow-xl">
                {/* Floor Image */}
                <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                  <img 
                    src={floor.image} 
                    alt={floor.floor}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <h2 className="absolute bottom-8 left-8 md:left-16 font-syne text-3xl md:text-5xl font-bold uppercase text-white">
                    {floor.floor}
                  </h2>
                </div>
                <div className="p-8 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {floor.zones.map((zone, zoneIndex) => (
                    <div 
                      key={zoneIndex}
                      className="bg-[#F2F5F6] rounded-[32px] p-6 hover:bg-[#D4F058] transition-colors duration-300 cursor-pointer group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60">
                          {String(zoneIndex + 1).padStart(2, '0')}
                        </span>
                        <div className="w-10 h-10 rounded-full border border-[#1A262A]/20 flex items-center justify-center group-hover:bg-[#1A262A] group-hover:text-[#D4F058] group-hover:border-[#1A262A] transition-all">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-syne text-xl md:text-2xl font-bold uppercase text-[#1A262A] mb-3">
                        {zone.title}
                      </h3>
                      <p className="text-[#1A262A]/60 leading-relaxed text-sm">
                        {zone.desc}
                      </p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga School Section */}
      <section className="py-24 px-6 md:px-12 bg-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20 shadow-xl">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase mb-6 leading-[0.9] text-[#1A262A]">
                ЛУЧШАЯ <br/> <span className="text-[#D4F058]">ШКОЛА ЙОГИ</span> <br/> В РЕГИОНЕ
              </h2>
              <p className="text-[#1A262A]/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                Профессиональные инструкторы с многолетним опытом. Традиционные и современные направления йоги. Просторные залы с естественным освещением и специальным покрытием. Групповые и индивидуальные занятия для всех уровней подготовки.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-full max-w-md h-[300px] md:h-[400px] bg-[#D4F058]/10 rounded-[40px] flex items-center justify-center border border-[#D4F058]/20">
                <span className="text-6xl md:text-8xl font-syne font-bold text-[#D4F058]/30">☯</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 bg-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase text-[#1A262A] mb-16 text-center">
            ДОПОЛНИТЕЛЬНЫЕ <span className="text-[#1A262A]/20">УСЛУГИ</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div 
                key={i}
                className="bg-[#F2F5F6] rounded-[32px] p-8 hover:bg-[#D4F058] transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl font-syne font-bold text-[#1A262A]/20 group-hover:text-[#1A262A]/40 mb-4">
                  {i + 1}
                </div>
                <h3 className="font-syne text-xl md:text-2xl font-bold uppercase text-[#1A262A] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#1A262A]/60 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-24 px-6 md:px-12 bg-[#1A262A] text-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase mb-16 text-center">
            КЛУБНЫЕ <span className="text-[#D4F058]">КАРТЫ</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <div 
                key={i}
                className={`bg-white rounded-[40px] p-10 md:p-14 flex flex-col justify-between min-h-[400px] transition-transform duration-500 hover:scale-[0.99] shadow-lg ${
                  i === 1 ? 'bg-[#D4F058] text-[#1A262A]' : 'bg-white text-[#1A262A]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest ${
                      i === 1 ? 'bg-[#1A262A]/10' : i === 2 ? 'bg-[#1A262A] text-white' : 'bg-[#F2F5F6]'
                    }`}>
                      {card.title}
                    </span>
                    {i === 1 && <span className="text-xl">★</span>}
                  </div>
                  <h3 className="font-syne text-3xl md:text-5xl font-bold uppercase leading-[0.9] mb-6 md:mb-8">
                    {card.title}
                  </h3>
                  <p className={`${i === 1 ? 'opacity-80' : 'opacity-60'} text-base md:text-lg max-w-sm`}>
                    {card.desc}
                  </p>
                </div>
                
                <button 
                  className={`mt-10 w-full py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${
                    i === 1 
                      ? 'bg-[#1A262A] text-white hover:bg-[#D4F058] hover:text-[#1A262A]' 
                      : 'bg-[#1A262A] text-white hover:bg-[#D4F058] hover:text-[#1A262A]'
                  }`}
                  onClick={() => {
                    const event = new CustomEvent('openContactForm');
                    window.dispatchEvent(event);
                  }}
                >
                  Оформить карту
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZonesPage;

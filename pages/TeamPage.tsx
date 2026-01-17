import React, { useEffect } from 'react';

const TeamPage: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, []);

  const trainers = [
    { name: 'АННА ИВАНОВА', role: 'ЙОГА И ПИЛАТЕС', experience: '12 лет', image: '/1637467036_01.jpg' },
    { name: 'ДМИТРИЙ СИДОРОВ', role: 'БОКС / PRO', experience: '15 лет', image: '/Panova-9.jpg' },
    { name: 'МАРИЯ ПЕТРОВА', role: 'ПИЛАТЕС', experience: '10 лет', image: '/1637467043_03.jpg' },
    { name: 'ЕЛЕНА СМИРНОВА', role: 'HIIT / ФУНКЦИОНАЛ', experience: '8 лет', image: '/orig.jpeg' },
    { name: 'СЕРГЕЙ КОЗЛОВ', role: 'СИЛОВОЙ ТРЕНИНГ', experience: '20 лет', image: '/Panova-2.jpg' },
    { name: 'ОЛЬГА НОВИКОВА', role: 'АКВААЭРОБИКА', experience: '7 лет', image: '/Panova-3.jpg' }
  ];

  return (
    <div className="bg-[#F2F5F6] min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1A262A] text-white pt-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h1 className="font-syne text-5xl md:text-8xl font-bold uppercase leading-[0.9]">
              НАША <br/> <span className="text-[#D4F058]">КОМАНДА</span>
            </h1>
            <p className="max-w-md text-white/60 font-medium text-base md:text-lg">
              50+ профессиональных тренеров с опытом от 5 до 20 лет. Индивидуальный подход к каждому клиенту.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid - overlapping with hero */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative bg-white rounded-[40px] md:rounded-[60px] -mt-10 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] z-30 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-[40px] overflow-hidden hover:bg-[#D4F058] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#1A262A] text-white flex items-center justify-center font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {i + 1}
                  </div>
                </div>
                <div className="p-8 text-[#1A262A]">
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest opacity-60">
                    {trainer.role}
                  </div>
                  <h3 className="font-syne text-2xl md:text-3xl font-bold uppercase mb-3">
                    {trainer.name}
                  </h3>
                  <p className="text-sm opacity-70 mb-4">Опыт работы: {trainer.experience}</p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                    <span>Профиль</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 bg-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Тренеров' },
              { number: '500+', label: 'Клиентов' },
              { number: '15', label: 'Лет опыта' },
              { number: '24/7', label: 'Поддержка' }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-[#F2F5F6] rounded-[32px] hover:bg-[#D4F058] transition-colors duration-300">
                <div className="font-syne text-5xl md:text-6xl font-bold text-[#1A262A] mb-2">
                  {stat.number}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#1A262A]/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-[#1A262A] text-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase mb-8">
            ГОТОВЫ <span className="text-[#D4F058]">НАЧАТЬ?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Запишитесь на тест-драйв и познакомьтесь с нашей командой профессионалов
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => {
                const event = new CustomEvent('openContactForm');
                window.dispatchEvent(event);
              }}
              className="px-10 py-5 bg-[#D4F058] text-[#1A262A] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white transition-colors"
            >
              Записаться на тест-драйв
            </button>
            <a
              href="tel:+74212903062"
              className="px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-colors"
            >
              +7 (4212) 90-30-62
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;

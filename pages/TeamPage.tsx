import React, { useEffect } from 'react';

const TeamPage: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, []);

  const trainers = [
    { name: 'АННА ИВАНОВА', role: 'ЙОГА И ПИЛАТЕС', experience: '12 лет', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800' },
    { name: 'ДМИТРИЙ СИДОРОВ', role: 'БОКС / PRO', experience: '15 лет', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800' },
    { name: 'МАРИЯ ПЕТРОВА', role: 'ПИЛАТЕС', experience: '10 лет', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800' },
    { name: 'ЕЛЕНА СМИРНОВА', role: 'HIIT / ФУНКЦИОНАЛ', experience: '8 лет', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800' },
    { name: 'СЕРГЕЙ КОЗЛОВ', role: 'СИЛОВОЙ ТРЕНИНГ', experience: '20 лет', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800' },
    { name: 'ОЛЬГА НОВИКОВА', role: 'АКВААЭРОБИКА', experience: '7 лет', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <div className="bg-[#F2F5F6] min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1A262A] text-white -mt-32 mb-20">
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

      {/* Trainers Grid */}
      <section className="py-12 px-6 md:px-12 mb-20">
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
    </div>
  );
};

export default TeamPage;

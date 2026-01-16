import React, { useEffect } from 'react';
import { SCHEDULE } from '../constants';

const SchedulePage: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, []);

  const days = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА', 'ВОСКРЕСЕНЬЕ'];
  
  return (
    <div className="bg-[#F2F5F6] min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1A262A] text-white -mt-32 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h1 className="font-syne text-5xl md:text-8xl font-bold uppercase leading-[0.9]">
              РАСПИСАНИЕ <br/> <span className="text-[#D4F058]">ЗАНЯТИЙ</span>
            </h1>
            <p className="max-w-md text-white/60 font-medium text-base md:text-lg">
              Более 50 направлений для твоего развития. Актуальное расписание групповых программ.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-12 px-6 md:px-12 mb-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Filter Days */}
          <div className="flex flex-wrap gap-4 mb-12">
            {days.map((day, i) => (
              <button
                key={i}
                className={`px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${
                  i === 0 
                    ? 'bg-[#1A262A] text-white' 
                    : 'bg-white text-[#1A262A] hover:bg-[#D4F058]'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule List */}
          <div className="bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-12 shadow-xl">
            <div className="divide-y divide-[#1A262A]/10">
              {SCHEDULE.map((item, i) => (
                <div 
                  key={i} 
                  className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between group hover:bg-[#D4F058] hover:text-[#1A262A] hover:px-8 transition-all duration-300 rounded-3xl -mx-4 md:-mx-8 px-4 cursor-pointer"
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-12 mb-4 md:mb-0">
                    <span className="font-syne text-3xl md:text-5xl font-bold text-[#1A262A]/20 group-hover:text-[#1A262A] transition-colors whitespace-nowrap">
                      {item.time}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg md:text-xl uppercase tracking-tight text-[#1A262A] mb-1">
                        {item.name}
                      </h3>
                      <p className="text-[10px] md:text-xs font-bold text-[#1A262A]/40 group-hover:text-[#1A262A]/60 uppercase tracking-widest">
                        {item.coach}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-4">
                    <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      item.spots.includes('НЕТ') 
                        ? 'bg-red-100 text-red-600 group-hover:bg-red-200' 
                        : 'bg-[#F2F5F6] group-hover:bg-[#1A262A]/10'
                    }`}>
                      {item.spots}
                    </span>
                    <button className="px-6 py-2 bg-[#1A262A] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#D4F058] hover:text-[#1A262A] transition-colors opacity-0 group-hover:opacity-100">
                      Записаться
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Categories */}
      <section className="py-24 px-6 md:px-12 bg-[#1A262A] text-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase mb-16 text-center">
            НАПРАВЛЕНИЯ <span className="text-[#D4F058]">ТРЕНИРОВОК</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Функциональный тренинг',
              'Йога и пилатес',
              'Боевые искусства',
              'Кардио программы',
              'Силовые тренировки',
              'Растяжка и мобильность',
              'Аквааэробика',
              'Танцевальные программы'
            ].map((category, i) => (
              <div 
                key={i} 
                className="bg-white/5 rounded-[24px] p-6 hover:bg-[#D4F058] hover:text-[#1A262A] transition-all duration-300 cursor-pointer border border-white/10 hover:border-[#D4F058]"
              >
                <div className="text-3xl font-syne font-bold mb-2">{i + 1}</div>
                <h3 className="font-bold text-lg uppercase">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;

import React, { useEffect, useState } from 'react';
import { SCHEDULE } from '../constants';

const SchedulePage: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, []);

  const days = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА', 'ВОСКРЕСЕНЬЕ'];
  
  // Get current week number
  const getCurrentWeekNumber = () => {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const currentWeek = getCurrentWeekNumber();
  const weekOptions = Array.from({ length: 4 }, (_, i) => currentWeek + i);
  
  // Get dates for week navigation
  const getWeekDates = (weekOffset: number) => {
    const today = new Date();
    const currentDay = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - currentDay + 1 + (weekOffset * 7));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    return { monday, sunday };
  };

  const currentWeekDates = getWeekDates(selectedWeek);
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
  };

  const handleWeekChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && selectedWeek > 0) {
      setSelectedWeek(selectedWeek - 1);
    } else if (direction === 'next' && selectedWeek < 3) {
      setSelectedWeek(selectedWeek + 1);
    }
  };
  
  return (
    <div className="bg-[#F2F5F6] min-h-screen">
      {/* Wrapper for Hero overlap transition */}
      <div className="bg-[#1A262A]" style={{ background: 'linear-gradient(to bottom, #1A262A 0%, #1A262A 50%, #F2F5F6 50%, #F2F5F6 100%)' }}>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#1A262A] text-white pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-14 md:mb-16 gap-6 md:gap-8">
            <h1 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold uppercase leading-[0.9]">
              РАСПИСАНИЕ <br/> <span className="text-[#D4F058]">ЗАНЯТИЙ</span>
            </h1>
            <p className="max-w-md text-white/60 font-medium text-sm sm:text-base md:text-lg">
              Более 50 направлений для твоего развития. Актуальное расписание групповых программ.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Table - overlapping with hero */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px] -mt-8 sm:-mt-10 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] z-30 mb-12 md:mb-16 lg:mb-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Week Selector with arrows */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => handleWeekChange('prev')}
                disabled={selectedWeek === 0}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedWeek === 0
                    ? 'border-[#1A262A]/20 text-[#1A262A]/20 cursor-not-allowed'
                    : 'border-[#1A262A] text-[#1A262A] hover:bg-[#D4F058] hover:border-[#D4F058]'
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="px-6 py-3 bg-[#1A262A] text-white rounded-full font-bold text-sm">
                {selectedWeek === 0 ? 'Текущая неделя' : `${formatDate(currentWeekDates.monday)} - ${formatDate(currentWeekDates.sunday)}`}
              </div>
              <button
                onClick={() => handleWeekChange('next')}
                disabled={selectedWeek === 3}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedWeek === 3
                    ? 'border-[#1A262A]/20 text-[#1A262A]/20 cursor-not-allowed'
                    : 'border-[#1A262A] text-[#1A262A] hover:bg-[#D4F058] hover:border-[#D4F058]'
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Filter Days */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
            {days.map((day, i) => (
              <button
                key={i}
                onClick={() => setSelectedDay(i)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-[11px] md:text-xs transition-all ${
                  selectedDay === i 
                    ? 'bg-[#1A262A] text-white' 
                    : 'bg-white text-[#1A262A] hover:bg-[#D4F058] border border-[#1A262A]/10'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule List */}
          <div className="bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-xl">
            <div className="divide-y divide-[#1A262A]/10">
              {SCHEDULE.map((item, i) => (
                <div 
                  key={i} 
                  className="py-4 sm:py-6 md:py-8 lg:py-10 flex flex-col md:flex-row md:items-center justify-between group hover:bg-[#D4F058] hover:text-[#1A262A] hover:px-4 sm:hover:px-6 md:hover:px-8 transition-all duration-300 rounded-2xl sm:rounded-3xl -mx-2 sm:-mx-4 md:-mx-8 px-2 sm:px-4 cursor-pointer"
                >
                  <div className="flex items-start md:items-center gap-4 sm:gap-5 md:gap-6 lg:gap-12 mb-3 sm:mb-4 md:mb-0">
                    <span className="font-syne text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A262A]/20 group-hover:text-[#1A262A] transition-colors whitespace-nowrap">
                      {item.time}
                    </span>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg md:text-xl uppercase tracking-tight text-[#1A262A] mb-1">
                        {item.name}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#1A262A]/40 group-hover:text-[#1A262A]/60 uppercase tracking-widest">
                        {item.coach}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-3 sm:gap-4">
                    <span className={`text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full ${
                      item.spots.includes('НЕТ') 
                        ? 'bg-red-100 text-red-600 group-hover:bg-red-200' 
                        : 'bg-[#F2F5F6] group-hover:bg-[#1A262A]/10'
                    }`}>
                      {item.spots}
                    </span>
                    <button className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 bg-[#1A262A] text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A262A] transition-colors opacity-0 group-hover:opacity-100">
                      Записаться
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Schedule Categories */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#1A262A] text-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px] mx-2 sm:mx-3 md:mx-4 mb-12 md:mb-16 lg:mb-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mb-10 sm:mb-12 md:mb-14 lg:mb-16 text-center">
            НАПРАВЛЕНИЯ <span className="text-[#D4F058]">ТРЕНИРОВОК</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
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

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-[#1A262A] text-white rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 mb-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-syne text-4xl md:text-7xl font-bold uppercase mb-8">
            НАЧНИТЕ <span className="text-[#D4F058]">СЕГОДНЯ</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Запишитесь на занятие или получите бесплатную консультацию
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => {
                const event = new CustomEvent('openContactForm');
                window.dispatchEvent(event);
              }}
              className="px-10 py-5 bg-[#D4F058] text-[#1A262A] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white transition-colors"
            >
              Записаться на занятие
            </button>
            <a
              href="tel:+74212479079"
              className="px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-colors"
            >
              +7 (4212) 47-90-79
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;

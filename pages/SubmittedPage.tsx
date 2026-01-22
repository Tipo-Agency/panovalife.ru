import React from 'react';

const SubmittedPage: React.FC = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
      <div className="max-w-2xl w-full bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-2xl px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 text-center">
        <span className="text-[#1A262A]/40 font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 sm:mb-5 block">
          Спасибо за заявку
        </span>
        <h1 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#1A262A] mb-4 sm:mb-5 leading-tight">
          Заявка отправлена
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#1A262A]/70 mb-8 sm:mb-10 leading-relaxed">
          Мы получили вашу заявку и свяжемся с вами в ближайшее время, чтобы уточнить детали и подобрать
          оптимальный формат тренировок.
        </p>
        <button
          onClick={() => {
            // Navigate to home page - use direct location change for reliability
            window.location.href = '/';
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#1A262A] text-white rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#D4F058] hover:text-[#1A262A] transition-colors"
        >
          На главную
        </button>
      </div>
    </main>
  );
};

export default SubmittedPage;


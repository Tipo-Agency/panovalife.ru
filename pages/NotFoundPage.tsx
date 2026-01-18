import React, { useEffect } from 'react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, []);

  return (
    <div className="bg-[#F2F5F6] min-h-screen">
      {/* Wrapper for Hero overlap transition */}
      <div className="bg-[#1A262A]" style={{ background: 'linear-gradient(to bottom, #1A262A 0%, #1A262A 50%, #F2F5F6 50%, #F2F5F6 100%)' }}>
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1A262A] text-white pt-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h1 className="font-syne text-5xl md:text-8xl font-bold uppercase leading-[0.9]">
              404 <br/> <span className="text-[#D4F058]">СТРАНИЦА НЕ НАЙДЕНА</span>
            </h1>
            <p className="max-w-md text-white/60 font-medium text-base md:text-lg">
              К сожалению, запрашиваемая страница не существует. Вернитесь на главную или воспользуйтесь меню навигации.
            </p>
          </div>
        </div>
      </section>

      {/* Content - overlapping with hero */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative bg-white rounded-[40px] md:rounded-[60px] -mt-10 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] z-30 mb-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <div className="mb-12">
            <div className="text-9xl md:text-[12rem] font-syne font-bold text-[#1A262A]/10 mb-8">404</div>
            <h2 className="font-syne text-4xl md:text-6xl font-bold uppercase text-[#1A262A] mb-6">
              Страница не найдена
            </h2>
            <p className="text-[#1A262A]/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Возможно, страница была удалена или перемещена. Проверьте адрес или вернитесь на главную страницу.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => {
                window.location.hash = '';
                window.location.reload();
              }}
              className="px-10 py-5 bg-[#1A262A] text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#D4F058] hover:text-[#1A262A] transition-colors"
            >
              На главную
            </button>
            <button
              onClick={() => window.history.back()}
              className="px-10 py-5 border-2 border-[#1A262A]/20 text-[#1A262A] rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#D4F058] hover:border-[#D4F058] transition-colors"
            >
              Назад
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default NotFoundPage;

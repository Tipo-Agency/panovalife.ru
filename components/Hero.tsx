import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="main" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1A262A]">
      
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-r from-[#1A262A]/90 via-[#1A262A]/40 to-[#1A262A]/20 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#1A262A] via-transparent to-[#1A262A]/60 z-10"></div>
         <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-80"
         >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-out-with-battle-ropes-at-the-gym-22876-large.mp4" type="video/mp4" />
         </video>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-[1600px] px-6 md:px-12 flex flex-col justify-center h-full pt-20">
         
         <div className="mb-6 md:mb-8 flex items-center gap-4 animate-float">
            <span className="px-3 py-1 bg-[#D4F058] text-[#1A262A] text-[10px] font-black uppercase tracking-widest rounded-full">Premium</span>
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">Хабаровск</span>
         </div>

         <h1 className="font-syne font-extrabold text-[12vw] md:text-[8rem] leading-[0.9] text-white uppercase max-w-5xl drop-shadow-2xl break-words">
            Твоя форма <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Твои правила</span>
         </h1>

         <p className="mt-6 md:mt-8 text-base md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed">
            5000 м² пространства для трансформации. <br className="hidden md:block"/>
            Бассейн 24м, Technogym, SPA и закрытое комьюнити.
         </p>

         <div className="mt-10 md:mt-12 flex flex-col md:flex-row gap-4 md:gap-6 items-start w-full md:w-auto">
            <button className="w-full md:w-auto group relative px-10 py-5 bg-[#D4F058] text-[#1A262A] font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:bg-white rounded-full">
               <span className="relative z-10 flex items-center justify-center gap-3">
                  Записаться на тест-драйв
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
               </span>
            </button>
            
            <button className="w-full md:w-auto px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all backdrop-blur-sm rounded-full">
               Смотреть видео тура
            </button>
         </div>

         {/* Stats moved here */}
         <div className="mt-16 pt-8 flex flex-wrap gap-12 md:gap-24 w-full md:w-auto">
             <div>
                <span className="block text-3xl font-syne font-bold text-white">24<span className="text-[#D4F058] text-lg">/7</span></span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">Режим работы</span>
             </div>
             <div>
                <span className="block text-3xl font-syne font-bold text-white">50<span className="text-[#D4F058] text-lg">+</span></span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">Тренеров</span>
             </div>
             <div>
                <span className="block text-3xl font-syne font-bold text-white">SPA</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">Комплекс</span>
             </div>
         </div>

      </div>
    </section>
  );
};

export default Hero;
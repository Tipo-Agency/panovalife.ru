import React from 'react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section id="main" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1A262A] py-20 md:py-0">

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row justify-between items-center min-h-[calc(100vh-120px)] lg:h-screen pt-20 lg:pt-0">
         
         {/* Left Side - Text Content */}
         <div className="flex flex-col justify-center w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="font-syne font-extrabold text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] leading-[0.9] text-white uppercase max-w-5xl drop-shadow-2xl break-words">
               Твоя форма <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Твои правила</span>
            </h1>

            <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 font-light max-w-2xl leading-relaxed">
               5000 м² пространства для трансформации. <br className="hidden md:block"/>
               Бассейн 24м, Life Fitness и Hammer, SPA и закрытое комьюнити.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-stretch sm:items-start w-full sm:w-auto">
               <button 
                 onClick={onOpenForm}
                 className="w-full sm:w-auto group relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-[#D4F058] text-[#1A262A] font-bold uppercase tracking-widest text-[10px] sm:text-xs overflow-hidden transition-all hover:bg-white rounded-full"
               >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                     Записаться на тест-драйв
                     <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
               </button>
               
               <a 
                 href="https://youtu.be/xm-BYEFYK9o"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-white/10 transition-all backdrop-blur-sm rounded-full text-center"
               >
                  Смотреть видео тура
               </a>
            </div>
         </div>

         {/* Right Side - Image */}
         <div className="hidden lg:flex w-full lg:w-1/2 h-full items-center justify-end pr-8 xl:pr-12 2xl:pr-24 relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg xl:max-w-xl h-[60vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-[90vh] max-h-[600px] xl:max-h-[700px] 2xl:max-h-[800px] flex items-center justify-center">
               <img 
                  src="/hero-trainer.png" 
                  alt="Fitness Trainer"
                  className="relative z-10 w-full h-full object-contain"
                  style={{ 
                     filter: 'drop-shadow(0 0 80px rgba(212, 240, 88, 0.5)) drop-shadow(0 0 40px rgba(212, 240, 88, 0.3))',
                     WebkitFilter: 'drop-shadow(0 0 80px rgba(212, 240, 88, 0.5)) drop-shadow(0 0 40px rgba(212, 240, 88, 0.3))'
                  }}
               />
            </div>
         </div>

      </div>
    </section>
  );
};

export default Hero;

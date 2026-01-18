import React from 'react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section id="main" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1A262A]">

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1600px] px-6 md:px-12 flex flex-row justify-between items-center h-full pt-20">
         
         {/* Left Side - Text Content */}
         <div className="flex flex-col justify-center h-full w-full md:w-1/2">
            <h1 className="font-syne font-extrabold text-[10vw] md:text-[6rem] leading-[0.9] text-white uppercase max-w-5xl drop-shadow-2xl break-words">
               Твоя форма <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Твои правила</span>
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed">
               5000 м² пространства для трансформации. <br className="hidden md:block"/>
               Бассейн 24м, Life Fitness и Hammer, SPA и закрытое комьюнити.
            </p>

            <div className="mt-10 md:mt-12 flex flex-col md:flex-row gap-4 md:gap-6 items-start w-full md:w-auto">
               <button 
                 onClick={onOpenForm}
                 className="w-full md:w-auto group relative px-10 py-5 bg-[#D4F058] text-[#1A262A] font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:bg-white rounded-full"
               >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                     Записаться на тест-драйв
                     <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
               </button>
               
               <a 
                 href="https://youtu.be/xm-BYEFYK9o"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full md:w-auto px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all backdrop-blur-sm rounded-full text-center"
               >
                  Смотреть видео тура
               </a>
            </div>
         </div>

         {/* Right Side - Image */}
         <div className="hidden md:flex w-1/2 h-full items-center justify-end pr-12 lg:pr-24 relative">
            <div className="relative w-full max-w-xl h-[90vh] max-h-[800px] flex items-center justify-center">
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

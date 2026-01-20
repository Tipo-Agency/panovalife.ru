import React, { useState } from 'react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  return (
    <>
      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xm-BYEFYK9o?autoplay=1"
              title="Video tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

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
               
               <button
                 onClick={() => setIsVideoOpen(true)}
                 className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-white/10 transition-all backdrop-blur-sm rounded-full text-center"
               >
                  Смотреть видео тура
               </button>
            </div>
         </div>

         {/* Right Side - Image (Desktop) */}
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

         {/* Mobile Background Image */}
         <div className="lg:hidden absolute inset-0 z-0 overflow-hidden">
            <img 
               src="/hero-trainer.png" 
               alt="Fitness Trainer"
               className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-[#1A262A]/60"></div>
         </div>

      </div>
    </section>
    </>
  );
};

export default Hero;

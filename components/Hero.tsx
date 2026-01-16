import React from 'react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
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
               Бассейн 24м, Technogym, SPA и закрытое комьюнити.
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

            {/* Stats */}
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

         {/* Right Side - Image with Geometric Elements */}
         <div className="hidden md:flex w-1/2 h-full items-center justify-end pr-12 lg:pr-24 relative">
            <div className="relative w-full max-w-xl h-[90vh] max-h-[800px] flex items-center justify-center">
               
               {/* Geometric Background Shapes */}
               <div className="absolute inset-0 pointer-events-none">
                  {/* Large glowing circles */}
                  <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4F058]/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#D4F058]/5 rounded-full blur-3xl"></div>
                  
                  {/* Triangles */}
                  <div className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[200px] border-b-[#D4F058]/5 rotate-45 blur-2xl opacity-50"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[150px] border-t-[#D4F058]/5 -rotate-45 blur-2xl opacity-50"></div>
                  
                  {/* Geometric rectangles */}
                  <div className="absolute top-1/4 right-1/3 w-32 h-32 border-4 border-[#D4F058]/30 rotate-45 rounded-lg opacity-60"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-3 border-[#D4F058]/20 rotate-12 rounded-lg opacity-40"></div>
                  
                  {/* Circles */}
                  <div className="absolute top-1/2 left-1/4 w-40 h-40 border-2 border-[#D4F058]/20 rounded-full"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border-2 border-[#D4F058]/15 rounded-full"></div>
                  
                  {/* Grid lines */}
                  <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4F058]/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F058]/10 to-transparent"></div>
               </div>

               {/* Image Container with Glow and Shadow */}
               <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {/* Shadow/Glow behind image */}
                  <div className="absolute inset-0 bg-[#D4F058]/20 blur-3xl rounded-full transform scale-150 opacity-50"></div>
                  
                  {/* Image */}
                  <img 
                     src="/hero-trainer.png" 
                     alt="Fitness Trainer"
                     className="relative z-10 w-full h-full object-contain"
                     style={{ 
                        filter: 'drop-shadow(0 0 80px rgba(212, 240, 88, 0.5)) drop-shadow(0 0 40px rgba(212, 240, 88, 0.3))',
                        WebkitFilter: 'drop-shadow(0 0 80px rgba(212, 240, 88, 0.5)) drop-shadow(0 0 40px rgba(212, 240, 88, 0.3))'
                     }}
                  />
                  
                  {/* Additional glow layers */}
                  <div className="absolute inset-0 bg-[#D4F058]/15 blur-2xl -z-10 rounded-full"></div>
                  <div className="absolute inset-0 bg-[#D4F058]/10 blur-xl -z-20 rounded-full"></div>
               </div>

               {/* Floating small elements */}
               <div className="absolute top-10 right-10 w-4 h-4 bg-[#D4F058] rounded-full animate-ping opacity-75 z-20"></div>
               <div className="absolute bottom-20 left-10 w-3 h-3 bg-[#D4F058]/60 rounded-full z-20"></div>
               <div className="absolute top-1/3 right-5 w-2 h-2 bg-[#D4F058]/80 rounded-full z-20"></div>
               <div className="absolute bottom-1/3 left-5 w-2 h-2 bg-[#D4F058]/70 rounded-full z-20"></div>
            </div>
         </div>

      </div>
    </section>
  );
};

export default Hero;

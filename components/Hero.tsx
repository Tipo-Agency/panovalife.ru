import React from 'react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section id="main" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1A262A]">
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         {/* Gradient Overlays */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#1A262A] via-[#2F4249] to-[#1A262A]"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#1A262A] via-transparent to-transparent"></div>
         
         {/* Geometric Shapes - Circles */}
         <div className="absolute top-20 right-10 w-96 h-96 bg-[#D4F058]/10 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#D4F058]/5 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#D4F058]/5 rounded-full blur-3xl"></div>
         
         {/* Geometric Shapes - Triangles */}
         <div className="absolute top-1/4 right-1/4 w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[200px] border-b-[#D4F058]/5 rotate-45 blur-2xl opacity-50"></div>
         <div className="absolute bottom-1/4 left-1/4 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[150px] border-t-[#D4F058]/5 -rotate-45 blur-2xl opacity-50"></div>
         
         {/* Grid Pattern */}
         <div className="absolute inset-0 opacity-[0.03]" style={{
           backgroundImage: `linear-gradient(#D4F058 1px, transparent 1px), linear-gradient(90deg, #D4F058 1px, transparent 1px)`,
           backgroundSize: '50px 50px'
         }}></div>
         
         {/* Additional geometric lines */}
         <div className="absolute top-1/3 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-[#D4F058]/10 to-transparent"></div>
         <div className="absolute bottom-1/3 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-[#D4F058]/10 to-transparent"></div>
      </div>
      
      {/* Hero Image Container */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-full z-10 flex items-center justify-end pr-6 md:pr-12 lg:pr-24 pointer-events-none">
        <div className="relative w-full max-w-xl lg:max-w-2xl aspect-[3/4] h-[90vh] max-h-[800px]">
          {/* Shadow Layer - Glow effect */}
          <div className="absolute inset-0 bg-[#D4F058]/20 blur-3xl rounded-full transform scale-150 opacity-50"></div>
          
          {/* Geometric Decorations Around Image */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-[#D4F058]/30 rotate-45 rounded-lg opacity-60 hidden md:block"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#D4F058]/10 rounded-full blur-xl hidden md:block"></div>
          <div className="absolute top-1/4 -left-20 w-40 h-40 border-2 border-[#D4F058]/20 rounded-full hidden lg:block"></div>
          
          {/* Image with shadow and glow */}
          <div className="relative w-full h-full drop-shadow-2xl">
            <img 
              src="/hero-trainer.png" 
              alt="Fitness Trainer"
              className="w-full h-full object-contain"
              style={{ 
                filter: 'drop-shadow(0 0 80px rgba(212, 240, 88, 0.4)) drop-shadow(0 0 40px rgba(212, 240, 88, 0.2))',
                WebkitFilter: 'drop-shadow(0 0 80px rgba(212, 240, 88, 0.4)) drop-shadow(0 0 40px rgba(212, 240, 88, 0.2))'
              }}
            />
            
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-[#D4F058]/20 blur-3xl -z-10"></div>
          </div>
          
          {/* Floating geometric elements */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-[#D4F058] rounded-full animate-ping opacity-75"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#D4F058]/60 rounded-full"></div>
          <div className="absolute top-1/3 right-5 w-2 h-2 bg-[#D4F058]/80 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-[1600px] px-6 md:px-12 flex flex-col justify-center h-full pt-20 md:w-1/2">
         
         <h1 className="font-syne font-extrabold text-[10vw] md:text-[6rem] leading-[0.9] text-white uppercase max-w-5xl drop-shadow-2xl break-words relative z-10">
            Твоя форма <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Твои правила</span>
         </h1>

         <p className="mt-6 md:mt-8 text-base md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed relative z-10">
            5000 м² пространства для трансформации. <br className="hidden md:block"/>
            Бассейн 24м, Technogym, SPA и закрытое комьюнити.
         </p>

         <div className="mt-10 md:mt-12 flex flex-col md:flex-row gap-4 md:gap-6 items-start w-full md:w-auto relative z-10">
            <button 
              onClick={onOpenForm}
              className="w-full md:w-auto group relative px-10 py-5 bg-[#D4F058] text-[#1A262A] font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:bg-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#D4F058]/50"
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
         <div className="mt-16 pt-8 flex flex-wrap gap-12 md:gap-24 w-full md:w-auto relative z-10">
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

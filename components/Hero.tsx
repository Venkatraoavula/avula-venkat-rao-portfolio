import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero: React.FC = () => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-950 scroll-mt-20">
      
      {/* Wave Motion Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Deep Gradient Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950/40"></div>
        
        {/* Wave Container */}
        <div className="absolute bottom-0 left-0 w-full h-[30vh] md:h-[50vh] overflow-hidden">
          
          {/* Back Wave (Slowest) */}
          <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-slow opacity-20">
             <svg viewBox="0 0 2880 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-900 fill-current">
                <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1440,176C1536,171,1632,213,1728,229.3C1824,245,1920,235,2016,213.3C2112,192,2208,160,2304,149.3C2400,139,2496,149,2592,160C2688,171,2784,181,2832,186.7L2880,192L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1440,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
          </div>

          {/* Middle Wave (Medium Speed) */}
          <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-medium opacity-30">
             <svg viewBox="0 0 2880 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-900 fill-current">
                <path d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,170.7C672,160,768,192,864,197.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1440,138.7C1536,139,1632,149,1728,170.7C1824,192,1920,224,2016,218.7C2112,213,2208,171,2304,138.7C2400,107,2496,85,2592,106.7C2688,128,2784,192,2832,224L2880,256L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1440,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
          </div>

          {/* Front Wave (Fastest) */}
          <div className="absolute -bottom-2 left-0 w-[200%] h-full animate-wave-fast opacity-10">
             <svg viewBox="0 0 2880 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-500 fill-current">
                <path d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,218.7C672,213,768,235,864,245.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1440,165.3C1536,160,1632,192,1728,213.3C1824,235,1920,245,2016,229.3C2112,213,2208,171,2304,165.3C2400,160,2496,192,2592,208C2688,224,2784,224,2832,224L2880,224L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1440,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for immediate joining
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight drop-shadow-sm">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-gradient-x">{RESUME_DATA.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed font-light">
              {RESUME_DATA.title}
            </p>
            
            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {RESUME_DATA.about}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects"
                onClick={(e) => handleScroll(e, '#projects')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 cursor-pointer group border border-transparent hover:border-blue-400"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-medium hover:bg-slate-800/50 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer hover:border-slate-500"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center lg:justify-start gap-8 text-slate-500 border-t border-slate-800/50 pt-8">
               {/* Stats */}
               <div className="text-center lg:text-left">
                 <p className="text-3xl font-bold text-white">9.0</p>
                 <p className="text-sm uppercase tracking-wider text-slate-400">CGPA</p>
               </div>
               <div className="h-8 w-px bg-slate-800"></div>
               <div className="text-center lg:text-left">
                 <p className="text-3xl font-bold text-white">4+</p>
                 <p className="text-sm uppercase tracking-wider text-slate-400">Projects</p>
               </div>
               <div className="h-8 w-px bg-slate-800"></div>
               <div className="text-center lg:text-left">
                 <p className="text-3xl font-bold text-white">3</p>
                 <p className="text-sm uppercase tracking-wider text-slate-400">Domains</p>
               </div>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex-1 relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
               {/* Gradient Background Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 rounded-full opacity-40 blur-3xl animate-pulse-slow"></div>

               {/* Profile Image Container */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                     {/* Animated Border Ring */}
                     <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 animate-spin-slow" style={{backgroundClip: 'padding-box'}}></div>

                     {/* Inner Border */}
                     <div className="absolute inset-1 rounded-full border-2 border-slate-800"></div>

                     {/* Image */}
                     <img
                        src="/profile.png"
                        alt="Avula Venkat Rao"
                        className="absolute inset-2 rounded-full object-cover w-full h-full shadow-2xl shadow-blue-900/50"
                     />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
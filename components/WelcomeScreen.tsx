import React, { useEffect, useState } from 'react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out sequence
    const timer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Complete animation and unmount
    const cleanup = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 transition-opacity duration-1000 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        <div className="mb-8 overflow-hidden">
          <p className="text-blue-400 text-lg md:text-xl font-medium tracking-[0.3em] mb-4 uppercase animate-slide-up" style={{animationDelay: '0.2s'}}>
            Portfolio
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight animate-slide-up leading-tight drop-shadow-lg">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Venkatrao's</span> World
          </h1>
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full animate-width-expand shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
      </div>
      
      {/* Wave Overlay Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle glowing center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        
        {/* Bottom Waves */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-30">
          <div className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-fast">
             <svg viewBox="0 0 2880 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600 fill-current">
                <path d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,234.7C672,224,768,224,864,234.7C960,245,1056,267,1152,261.3C1248,256,1344,224,1440,213.3C1536,203,1632,213,1728,229.3C1824,245,1920,267,2016,266.7C2112,267,2208,245,2304,229.3C2400,213,2496,203,2592,208C2688,213,2784,235,2832,245.3L2880,256L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1440,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
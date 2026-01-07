
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations
  const bgPos = scrollY * 0.15;
  const midPos = scrollY * 0.3;
  const forePos = scrollY * 0.45;
  const contentFade = Math.max(0, 1 - scrollY / 600);

  return (
    <section ref={heroRef} className="relative h-[120vh] w-full overflow-hidden flex items-center justify-center bg-slate-950">
      
      {/* Layer 1: Background (Scenic Landscape) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1614728263952-84ea206f9c45?auto=format&fit=crop&q=80&w=2000')`,
          transform: `translateY(${bgPos}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950"></div>
      </div>

      {/* Layer 2: Midground (Floating Elements) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-60"
        style={{
          transform: `translateY(${midPos}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-fuchsia-500/20 blur-3xl animate-pulse delay-700"></div>
        {/* Floating "Grid" Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      {/* Layer 3: Foreground (Character Art) */}
      <div 
        className="absolute bottom-0 right-0 z-20 h-full w-full md:w-3/4 pointer-events-none"
        style={{
          transform: `translateY(${forePos}px)`,
        }}
      >
        {/* Mock Character Silhouette/Image with Glow */}
        <div className="absolute bottom-0 right-0 h-[90%] w-full flex items-end justify-end overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000" 
            alt="Anime Character" 
            className="h-full object-contain object-bottom drop-shadow-[0_0_50px_rgba(34,211,238,0.4)]"
          />
        </div>
      </div>

      {/* Floating Particles/Elements */}
      <div className="absolute inset-0 z-25 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white rounded-full animate-float opacity-30"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
      </div>

      {/* Content Overlay */}
      <div 
        className="relative z-30 max-w-7xl mx-auto px-6 w-full pt-20"
        style={{ opacity: contentFade }}
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Entering Zenith Sector
          </div>
          <h1 className="text-6xl md:text-8xl font-black heading-font leading-tight tracking-tighter text-white mb-6 uppercase">
            Rewrite the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Digital Soul</span>
          </h1>
          <p className="text-xl text-slate-300 font-light mb-10 leading-relaxed max-w-lg">
            Immerse yourself in a world where neon ghosts drift through high-rise monoliths. 
            Join the resistance and reclaim the future of the Megalopolis.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-4 bg-cyan-500 text-slate-950 font-black rounded-lg hover:bg-cyan-400 transition-colors shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              SYNC CORE
            </button>
            <button className="px-10 py-4 glass border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              EXPLORE LORE
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-cyan-400/50">Scroll Down</span>
        <ChevronDown className="text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;

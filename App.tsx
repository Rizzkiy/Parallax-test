
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import GeminiAssistant from './components/GeminiAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Parallax Hero Section */}
        <Hero />
        
        {/* Glassmorphism Feature Cards */}
        <InfoSection />

        {/* Character/Gallery Teaser */}
        <section id="characters" className="py-24 bg-slate-950 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-black heading-font text-white mb-6 uppercase leading-tight">
                  Meet the <br /><span className="text-cyan-400">Mainframes</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  The citizens of Zenith are more than just flesh and blood. They are the synthesis of biological will and silicon power. Discover the heroes leading the charge against the corporate hegemony.
                </p>
                <div className="space-y-6">
                  {[
                    { name: 'Kaelith', role: 'Stealth Op', color: 'cyan' },
                    { name: 'Vector', role: 'Pilot', color: 'fuchsia' },
                    { name: 'Synapse', role: 'Oracle', color: 'indigo' }
                  ].map((char, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className={`w-12 h-1 bg-${char.color}-500 transition-all group-hover:w-20`}></div>
                      <span className="text-white font-bold uppercase tracking-widest">{char.name}</span>
                      <span className="text-slate-600 text-xs font-mono">— {char.role}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 glass">
                   <img 
                    src="https://picsum.photos/seed/cybercharacter/1200/1500" 
                    alt="Cyberpunk Character Profile" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                   <div className="absolute bottom-10 left-10">
                     <p className="text-cyan-400 font-mono text-sm mb-2">OPERATIVE_ID: 0X99F</p>
                     <p className="text-white font-black text-3xl uppercase heading-font">Kaelith Voidrunner</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gemini Lore Assistant Section */}
        <GeminiAssistant />

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-cyan-600/5"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black heading-font text-white mb-8 uppercase tracking-tighter">
              Ready to <span className="text-fuchsia-500 italic">Interface?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
              The neural link is open. Your transformation begins today. Join the community and shape the future of Zenith.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-white text-slate-950 font-black rounded-full hover:bg-cyan-400 transition-all uppercase tracking-widest shadow-xl shadow-white/10">
                Join Discord
              </button>
              <button className="w-full sm:w-auto px-12 py-5 glass border border-white/10 text-white font-black rounded-full hover:bg-white/5 transition-all uppercase tracking-widest">
                Newsletter
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

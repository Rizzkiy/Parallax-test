
import React from 'react';
import { Github, Twitter, Instagram, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Cpu size={28} className="text-cyan-400" />
            <span className="heading-font text-3xl font-black text-white">ZENITH</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
            The future isn't written; it's coded. Join the collective and define the next iteration of our digital existence. 
            Available on all major neural networks.
          </p>
          <div className="flex gap-4">
            {[Github, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Manifesto</a></li>
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Sector Maps</a></li>
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Net-Runner Gear</a></li>
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Archive Logs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">System Status</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
              <span className="text-slate-400 text-sm">Central Core: Stable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-75"></div>
              <span className="text-slate-400 text-sm">Net Mesh: 99.9%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse delay-150"></div>
              <span className="text-slate-400 text-sm">New Hack Detected</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">
          © 2025 Zenith Cybernetic Industries. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-600 text-xs font-mono uppercase hover:text-cyan-500 transition-colors">Privacy Protocal</a>
          <a href="#" className="text-slate-600 text-xs font-mono uppercase hover:text-cyan-500 transition-colors">Terms of Sync</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

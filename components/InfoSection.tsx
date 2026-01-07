
import React from 'react';
import { Shield, Zap, Target, Database } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Neural Firewall",
    desc: "Advanced encryption for your consciousness while diving into the deep web."
  },
  {
    icon: Zap,
    title: "Voltage Blades",
    desc: "Plasma-infused combat systems designed for the urban ronin."
  },
  {
    icon: Target,
    title: "Optical Link",
    desc: "Enhanced tactical awareness with 360-degree digital synthesis."
  },
  {
    icon: Database,
    title: "Ghost Storage",
    desc: "Seamless memory synchronization across distributed node networks."
  }
];

const InfoSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black heading-font text-white mb-4 uppercase tracking-tight">
            System <span className="text-fuchsia-500">Modules</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-2xl group hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg">
                <f.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

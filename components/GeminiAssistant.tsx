
import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiLoreResponse } from '../services/geminiService';
import { LoreMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<LoreMessage[]>([
    { role: 'model', text: 'Connection established. Welcome to the Zenith Lore Terminal. Ask me about our world, characters, or technology.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const response = await getGeminiLoreResponse(userText);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="lore" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          {/* Header */}
          <div className="bg-slate-950/80 px-8 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs font-mono text-slate-500 ml-4">ZENITH_LORE_OS v3.2</span>
            </div>
            <Terminal size={18} className="text-cyan-500" />
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="h-[450px] overflow-y-auto p-8 flex flex-col gap-6 scrollbar-hide bg-slate-950/40"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-lg ${
                  m.role === 'user' ? 'bg-fuchsia-600' : 'bg-cyan-600'
                }`}>
                  {m.role === 'user' ? <User size={20} className="text-white" /> : <Bot size={20} className="text-white" />}
                </div>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  m.role === 'user' 
                    ? 'bg-fuchsia-500/10 text-fuchsia-100 rounded-tr-none' 
                    : 'bg-cyan-500/10 text-cyan-50 text-left rounded-tl-none border border-cyan-500/10'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center animate-pulse">
                  <Bot size={20} className="text-white" />
                </div>
                <div className="bg-cyan-500/10 p-4 rounded-2xl rounded-tl-none border border-cyan-500/10 flex items-center gap-2">
                  <Loader2 size={16} className="text-cyan-400 animate-spin" />
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-tighter">Decrypting Data Stream...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-6 bg-slate-950/80 border-t border-white/10">
            <div className="relative flex items-center gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Query the Archive..."
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono placeholder:text-slate-600"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="p-4 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition-all disabled:opacity-50 shadow-lg shadow-cyan-900/20"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-8 text-center text-slate-500 text-xs uppercase tracking-widest font-bold">
          Powered by Gemini 3 Core | Neural Encryption Active
        </div>
      </div>
    </section>
  );
};

export default GeminiAssistant;

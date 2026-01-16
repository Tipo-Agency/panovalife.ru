import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../constants';
import { fitnessAssistant } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Добро пожаловать в PanovaLife. Чем могу быть полезен?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const msg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setIsTyping(true);
    const response = await fitnessAssistant(msg);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsTyping(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[60] w-14 h-14 bg-[#2F4249] rounded-full flex items-center justify-center text-white border border-white/10 shadow-2xl hover:scale-110 transition-transform hover:bg-[#D4F058] hover:text-[#1A262A] group"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg h-[600px] bg-[#1A262A] border border-white/10 rounded-3xl flex flex-col overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#2F4249]">
              <div className="flex flex-col">
                 <span className="font-syne font-bold text-white uppercase tracking-wider">Concierge</span>
                 <span className="text-[10px] text-white/40 uppercase tracking-widest">AI Support</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-[#1A262A]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-[#D4F058] text-[#1A262A] rounded-tr-none font-bold' 
                      : 'bg-[#2F4249] text-white rounded-tl-none border border-white/5'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-[#2F4249] px-4 py-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                   </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-[#2F4249] border-t border-white/5">
              <div className="relative flex items-center bg-[#1A262A] rounded-full px-4 py-2 border border-white/10 focus-within:border-[#D4F058] transition-colors">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Напишите сообщение..."
                  className="w-full bg-transparent text-white text-sm py-2 focus:outline-none placeholder:text-white/20"
                  autoFocus
                />
                <button 
                    onClick={handleSend}
                    className="ml-2 w-8 h-8 rounded-full bg-[#D4F058] flex items-center justify-center text-[#1A262A] hover:scale-105 transition-transform"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
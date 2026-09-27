import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  Bot,
  User,
  ShieldAlert,
  Copy,
  Check,
  ChevronDown,
  Minimize2,
  Maximize2,
  HeartHandshake
} from 'lucide-react';
import { AIMessage } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface AIWellnessAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrainingModal?: () => void;
}

export const AIWellnessAssistantModal: React.FC<AIWellnessAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenTrainingModal
}) => {
  const { isNepali } = useLanguage();
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: 'msg-welcome',
      role: 'assistant',
      content: isNepali
        ? 'नमस्ते! म पाइला नेपाल वेलनेस सेन्टरको एआई सहयोगी हुँ। म तपाईंलाई मनोसामाजिक कल्याण, ६-महिने परामर्श तालिम (७८० घण्टा), तनाव व्यवस्थापनका उपायहरू वा विपद् पूर्वतयारी सम्बन्धी जानकारी दिन सक्छु। आज म कसरी सहयोग गर्न सक्छु?'
        : 'Namaste! I am the Paila Nepal AI Wellness Navigator. I can assist you with information about our psychosocial support services, 6-Month (780 Hours) Counselling Training, grounding techniques, or disaster preparedness. How may I support you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const starterQuestions = isNepali
    ? [
        '६-महिने मनोसामाजिक परामर्श तालिमबारे बताउनुहोस्',
        'अत्यधिक तनाव हुँदा शान्त हुने उपाय के हुन्?',
        'मनोवैज्ञानिक प्राथमिक उपचार (PFA) भनेको के हो?',
        'घरमा आपतकालीन झोला (Go-Bag) कसरी तयार गर्ने?'
      ]
    : [
        'What is included in the 6-Month Counselling Course?',
        'Can you guide me through a calming exercise for anxiety?',
        'What are the core steps of Psychological First Aid (PFA)?',
        'How do I build an earthquake Go-Bag for Kathmandu?'
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMsg: AIMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/wellness-navigator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          userQuery: query,
          language: isNepali ? 'ne' : 'en'
        })
      });

      if (!res.ok) {
        throw new Error('Server returned an error');
      }

      const data = await res.json();
      const botMsg: AIMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: data.reply || (isNepali ? 'माफ गर्नुहोस्, केही समस्या आयो।' : 'Sorry, something went wrong.'),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: AIMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: isNepali
          ? 'पाइला नेपाल: अहिले सम्पर्क हुन सकेन। कृपया सिधै हाम्रो फोन +९७७-९८६३४३७६७९ मा सम्पर्क गर्नुहोस् वा आपतकालीन संकटका लागि राष्ट्रिय मानसिक स्वास्थ्य हेल्पलाइन ११६६ मा डायल गर्नुहोस्।'
          : 'Paila Nepal Navigator: Connection was interrupted. You can connect with our team directly at +977-9863437679, or call the 24/7 National Mental Health Helpline at 1166 for immediate crisis support.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'msg-welcome',
        role: 'assistant',
        content: isNepali
          ? 'नमस्ते! म पाइला नेपाल वेलनेस सेन्टरको एआई सहयोगी हुँ। आज म तपाईंलाई कसरी सहयोग गर्न सक्छु?'
          : 'Namaste! I am the Paila Nepal AI Wellness Navigator. How may I support you today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[88vh] max-h-[720px] animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#1457A6] via-[#104787] to-[#008C4A] text-white px-5 py-3.5 flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shadow-inner">
              <Sparkles className="w-5 h-5 text-[#55E59C]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-black tracking-tight text-white">
                  {isNepali ? "पाइला एआई सहयोगी" : "Paila AI Wellness Navigator"}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold text-slate-100">
                  Gemini 3.8
                </span>
              </div>
              <p className="text-[11px] text-slate-200">
                {isNepali ? "मनोसामाजिक कल्याण तथा परामर्श मार्गदर्शक" : "Psychosocial Support & Guidance"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleReset}
              className="p-1.5 text-slate-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              title={isNepali ? "नयाँ कुराकानी सुरु गर्नुहोस्" : "Reset chat"}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Emergency Crisis Ribbon */}
        <div className="bg-rose-50 border-b border-rose-200 px-4 py-2 flex items-center justify-between text-[11px] text-rose-800 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span>
              {isNepali
                ? "आपतकालीन संकटमा राष्ट्रिय हेल्पलाइन ११६६ मा निःशुल्क फोन गर्नुहोस्।"
                : "In acute crisis or self-harm thoughts, please call 1166 (National Helpline) immediately."}
            </span>
          </div>
          <span className="font-bold text-rose-700 hidden sm:inline">24/7 Toll-Free</span>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/70">
          {messages.map((m) => {
            const isUser = m.role === 'user';
            return (
              <div
                key={m.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1457A6] to-[#008C4A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs relative group ${
                    isUser
                      ? 'bg-[#1457A6] text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                  }`}
                >
                  <div className="whitespace-pre-line space-y-2">
                    {m.content}
                  </div>

                  <div
                    className={`pt-2 flex items-center justify-between text-[10px] ${
                      isUser ? 'text-blue-200' : 'text-slate-400'
                    }`}
                  >
                    <span>{m.timestamp}</span>
                    {!isUser && (
                      <button
                        onClick={() => handleCopy(m.id, m.content)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                        title="Copy message"
                      >
                        {copiedId === m.id ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1457A6] to-[#008C4A] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-4 border border-slate-200 shadow-xs flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1457A6] animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-[#008C4A] animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-[#55B8E8] animate-bounce [animation-delay:0.4s]" />
                <span className="text-xs text-slate-500 ml-1">
                  {isNepali ? "पाइला एआई सोच्दैछ..." : "Paila AI is generating guidance..."}
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Starter Chips Bar */}
        {messages.length <= 3 && !isLoading && (
          <div className="px-4 py-2 bg-slate-100/90 border-t border-slate-200 flex flex-wrap gap-1.5 shrink-0">
            <span className="text-[10px] uppercase font-bold text-slate-500 w-full mb-0.5">
              {isNepali ? "सुझाव गरिएका प्रश्नहरू:" : "Suggested Inquiries:"}
            </span>
            {starterQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-medium transition-all text-left cursor-pointer hover:border-[#1457A6]/30 hover:text-[#1457A6]"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input Form */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isNepali
                  ? "तपाईंको प्रश्न लेख्नुहोस् (जस्तै: ७८० घण्टे तालिम, तनाव व्यवस्थापन)..."
                  : "Type your query (e.g. 780h course, stress relief, PFA steps)..."
              }
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C4A] text-xs sm:text-sm text-slate-800 bg-white"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-4 py-2.5 bg-[#008C4A] hover:bg-[#00733c] disabled:opacity-50 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs shrink-0"
            >
              <span>{isNepali ? "पठाउनुहोस्" : "Send"}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400">
            <span>
              {isNepali
                ? "शैक्षिक तथा मनोसामाजिक जानकारी प्रयोजनका लागि मात्र"
                : "Informational & educational tool grounded in Paila Nepal principles"}
            </span>
            {onOpenTrainingModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenTrainingModal();
                }}
                className="text-[#1457A6] font-semibold hover:underline cursor-pointer"
              >
                {isNepali ? "६-महिने तालिम भर्ना" : "Counselling Cohort Info"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

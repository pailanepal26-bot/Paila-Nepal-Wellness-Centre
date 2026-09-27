import React from 'react';
import { Sparkles, MessageSquareHeart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FloatingAIAssistantButtonProps {
  onClick: () => void;
}

export const FloatingAIAssistantButton: React.FC<FloatingAIAssistantButtonProps> = ({ onClick }) => {
  const { isNepali } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-40 print:hidden">
      <button
        onClick={onClick}
        aria-label="Open Paila AI Wellness Assistant"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-[#1457A6] via-[#104787] to-[#008C4A] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-white/20"
      >
        {/* Animated pulse badge */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55E59C] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#55E59C]"></span>
        </span>

        <Sparkles className="w-4 h-4 text-[#55E59C] group-hover:rotate-12 transition-transform" />

        <div className="flex flex-col text-left">
          <span className="text-xs font-bold leading-tight">
            {isNepali ? "पाइला एआई" : "Ask Paila AI"}
          </span>
          <span className="text-[10px] text-slate-200 leading-tight">
            {isNepali ? "वेलनेस सहयोगी" : "Wellness Guide"}
          </span>
        </div>
      </button>
    </div>
  );
};

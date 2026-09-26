import React from 'react';
import { X, Printer, BookOpen, Clock, Tag, Share2, CheckCircle2 } from 'lucide-react';
import { ResourceItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ResourceViewerModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceViewerModal: React.FC<ResourceViewerModalProps> = ({ resource, onClose }) => {
  const { isNepali } = useLanguage();

  if (!resource) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 shrink-0 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="font-semibold uppercase tracking-wider">
                {isNepali ? resource.categoryNe : resource.category}
              </span>
              <span>·</span>
              <span className="text-slate-300 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {resource.readTime}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white leading-snug">
              {isNepali ? resource.titleNe : resource.title}
            </h2>
            <p className="text-xs text-slate-300">
              Paila Nepal Wellness Centre · Educational Resource
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
          {/* Key Takeaways */}
          <div className="p-4 bg-[#e6f7ef] rounded-xl border border-[#008C4A]/20 space-y-2">
            <h3 className="font-bold text-[#008C4A] text-xs uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Core Takeaways & Practice Points</span>
            </h3>
            <ul className="space-y-1 text-xs text-slate-700">
              {resource.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#008C4A] font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Content */}
          <div className="space-y-6">
            {resource.content.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-1">
                  {sec.heading}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>

          {/* Educational Disclaimer */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
            <p className="font-semibold text-slate-700 mb-0.5">Educational Purpose Notice:</p>
            <p>
              This publication is provided for community awareness, psychoeducation, and disaster preparedness. It is not intended as a substitute for professional mental health diagnosis, clinical consultation, or emergency services.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 shrink-0 flex items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{isNepali ? "गाइड छाप्नुहोस् / PDF सेभ गर्नुहोस्" : "Print Guide / Save as PDF"}</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg transition-colors cursor-pointer"
          >
            {isNepali ? "बन्द गर्नुहोस्" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { AlertCircle, X, PhoneCall, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const EmergencyBanner: React.FC = () => {
  const { t, isNepali } = useLanguage();
  const [dismissed, setDismissed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  if (dismissed) {
    return (
      <div className="bg-slate-100 border-b border-slate-200 py-1 px-4 text-xs text-slate-600 flex justify-between items-center">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#1457A6]" />
          <span>{isNepali ? "आपत्कालीन सूचना:" : "Notice:"} {isNepali ? "यो वेबसाइटले आकस्मिक चिकित्सा सेवाको विकल्प दिँदैन।" : "Non-emergency psychosocial & educational support."}</span>
        </span>
        <button
          onClick={() => setDismissed(false)}
          className="text-[#1457A6] hover:underline font-medium ml-2 cursor-pointer"
        >
          {isNepali ? "पूर्ण सूचना हेर्नुहोस्" : "View Full Disclaimer"}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#ebf3fc] border-b border-[#55B8E8]/30 text-[#263238] transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-start sm:items-center justify-between gap-3 text-xs sm:text-[13px] leading-relaxed">
          <div className="flex items-start gap-2.5 flex-1">
            <span className="shrink-0 mt-0.5 text-[#1457A6]" aria-hidden="true">
              <AlertCircle className="w-4 h-4" />
            </span>
            <div className="space-y-0.5">
              <p className="font-medium text-[#1457A6]">
                {isNepali ? "महत्वपूर्ण सूचना तथा कार्यक्षेत्र सीमा" : "Important Scope & Emergency Notice"}
              </p>
              <p className="text-slate-700">
                {t.emergencyDisclaimer}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
            <button
              onClick={() => setDismissed(true)}
              className="p-1 text-slate-500 hover:text-slate-800 rounded transition-colors"
              aria-label="Dismiss banner"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

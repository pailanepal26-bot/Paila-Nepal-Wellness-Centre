import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageSquare,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';

interface FAQPageProps {
  onOpenSupportModal: () => void;
  onNavigate: (tab: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenSupportModal, onNavigate }) => {
  const { isNepali } = useLanguage();
  const { faqs } = useAdmin();

  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-5']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const q = faq.question.toLowerCase() + ' ' + (faq.questionNe || '').toLowerCase();
    const a = faq.answer.toLowerCase() + ' ' + (faq.answerNe || '').toLowerCase();
    return q.includes(searchQuery.toLowerCase()) || a.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 pb-24">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
          {isNepali ? "जिज्ञासा र स्पष्टीकरण" : "Common Questions & Inquiries"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? "प्रायः सोधिने प्रश्नहरू" : "Frequently Asked Questions"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "हाम्रा सेवाहरू, ६-महिने मनोसामाजिक परामर्श तालिम, OJT, स्वयंसेवा र साझेदारी सम्बन्धी सम्पूर्ण जानकारी।"
            : "Clear, transparent answers about our psychosocial counselling scope, 6-month training curriculum, OJT hours, partnership protocols, and community resilience."}
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isNepali ? "प्रश्न खोज्नुहोस्..." : "Search questions or keywords..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C4A] bg-white text-xs sm:text-sm text-slate-800"
            />
          </div>
        </div>
      </section>

      {/* 2. Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-sm">
            No matching questions found.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {isNepali ? faq.questionNe : faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#e6f7ef] text-[#008C4A]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    <p>{isNepali ? faq.answerNe : faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* 3. Still have questions banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#ebf3fc] border border-[#1457A6]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 text-base sm:text-lg">
              {isNepali ? "थप कुनै जिज्ञासा छ?" : "Still have questions?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Our team is happy to assist with detailed training syllabi, service inquiries, or community visits.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#1457A6] hover:bg-[#0f4280] rounded-xl transition-colors shrink-0 cursor-pointer shadow-xs"
          >
            {isNepali ? "हामीलाई सम्पर्क गर्नुहोस्" : "Contact Centre Directly"}
          </button>
        </div>
      </section>
    </div>
  );
};

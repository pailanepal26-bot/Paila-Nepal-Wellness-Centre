import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send, BellRing, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';

interface NewsletterSectionProps {
  variant?: 'card' | 'banner' | 'compact';
  defaultTopic?: string;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  variant = 'card',
  defaultTopic
}) => {
  const { isNepali } = useLanguage();
  const { addSubscriber } = useAdmin();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    defaultTopic ? [defaultTopic] : ['Mental Health Guides', 'Training Cohorts']
  );
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const interestOptions = [
    { id: 'Mental Health Guides', en: 'Mental Health Guides', ne: 'मानसिक स्वास्थ्य निर्देशिका' },
    { id: 'Training Cohorts', en: 'Counselling Training Cohorts', ne: 'परामर्श तालिम भर्ना' },
    { id: 'Disaster Resilience', en: 'Disaster Go-Bag & Drills', ne: 'विपद् पूर्वतयारी तथा अभ्यास' },
    { id: 'Community Workshops', en: 'Free Community Workshops', ne: 'निःशुल्क सामुदायिक कार्यशाला' },
    { id: 'Safe Schools', en: 'Safe School Initiatives', ne: 'सुरक्षित विद्यालय अभियान' }
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage(isNepali ? 'कृपया मान्य इमेल ठेगाना लेख्नुहोस्।' : 'Please enter a valid email address.');
      return;
    }

    const res = addSubscriber(email, name, selectedInterests);
    if (res.success) {
      setStatus('success');
      setMessage(isNepali ? 'सफलतापूर्वक दर्ता भयो! पाइला नेपालका नवीनतम बुलेटिन तपाईंको इमेलमा पठाइनेछ।' : 'Subscribed successfully! You will receive our latest wellness bulletins and training alerts.');
    } else {
      setStatus('error');
      setMessage(res.message);
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
        variant === 'banner'
          ? 'bg-gradient-to-br from-[#1457A6] via-[#104787] to-[#0A2E5C] text-white p-8 sm:p-12 border border-[#1457A6]/30 shadow-xl'
          : variant === 'compact'
          ? 'bg-[#ebf3fc] p-6 rounded-2xl border border-[#1457A6]/20'
          : 'bg-gradient-to-br from-[#1457A6] via-[#0f4a8e] to-[#093566] text-white p-8 sm:p-14 shadow-2xl border border-white/10'
      }`}
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#008C4A]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#55B8E8]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {status === 'success' ? (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/20 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#008C4A]/20 border border-[#008C4A]/40 text-[#55E59C] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {isNepali ? "पाइला परिवारमा स्वागत छ!" : "Welcome to the Paila Community!"}
            </h3>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
              {message}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#55E59C]" />
                {isNepali ? "गोपनीयता सुरक्षित" : "Zero spam guarantee"}
              </span>
              <button
                onClick={handleReset}
                className="px-5 py-2 text-xs font-bold text-white bg-white/20 hover:bg-white/30 rounded-xl transition-colors cursor-pointer"
              >
                {isNepali ? "अर्को इमेल दर्ता गर्नुहोस्" : "Subscribe another email"}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-xs font-semibold text-[#55B8E8] border border-white/10">
                <BellRing className="w-3.5 h-3.5" />
                <span>{isNepali ? "सामुदायिक बुलेटिन" : "Paila Wellness Dispatch"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                {isNepali
                  ? "मानसिक स्वास्थ्य र विपद् पूर्वतयारीका ताजा सामग्री तपाईंको इनबक्समा"
                  : "Stay Informed on Mental Health, Training & Disaster Readiness"}
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                {isNepali
                  ? "६-महिने परामर्श तालिमका नयाँ समूह, निःशुल्क सामुदायिक कार्यशाला, सुरक्षित विद्यालय कार्यक्रम र आपतकालीन गाईडहरूको प्रत्यक्ष अपडेट प्राप्त गर्नुहोस्।"
                  : "Join hundreds of community advocates, social workers, and teachers receiving our curated monthly articles, upcoming cohort announcements, and crisis intervention resources."}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#55E59C]" />
                  <span>{isNepali ? "निःशुल्क ज्ञान बाँडफाँड" : "100% Free & Community-First"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#55B8E8]" />
                  <span>{isNepali ? "कुनै पनि बेला हटाउन सकिने" : "One-Click Unsubscribe"}</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/20 shadow-lg space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                    {isNepali ? "तपाईंको नाम (ऐच्छिक)" : "Your Name (Optional)"}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isNepali ? "जस्तै: अनिता श्रेष्ठ" : "e.g., Anjali Sharma"}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/25 text-white placeholder-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#55B8E8] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                    {isNepali ? "इमेल ठेगाना *" : "Email Address *"}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={isNepali ? "तपाईंको@email.com" : "you@example.com"}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/15 border border-white/25 text-white placeholder-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#55B8E8] transition-all"
                    />
                  </div>
                </div>

                {/* Topic selection chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                    {isNepali ? "रुचिका विषयहरू छान्नुहोस्:" : "Topics You Care About:"}
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {interestOptions.map((opt) => {
                      const selected = selectedInterests.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => toggleInterest(opt.id)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer border ${
                            selected
                              ? 'bg-white text-[#1457A6] border-white shadow-xs font-bold'
                              : 'bg-white/10 text-slate-200 border-white/20 hover:bg-white/20'
                          }`}
                        >
                          {selected ? '✓ ' : '+ '}
                          {isNepali ? opt.ne : opt.en}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-xs text-rose-300 bg-rose-950/40 p-2.5 rounded-lg border border-rose-500/30">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-[#008C4A] hover:bg-[#00733c] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isNepali ? "बुलेटिन सदस्यता लिनुहोस्" : "Subscribe to Updates"}</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

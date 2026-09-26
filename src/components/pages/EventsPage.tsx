import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Tag, Search, Filter, CheckCircle, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';
import { PailaEvent } from '../../types';

interface EventsPageProps {
  onRegisterEvent: (event: PailaEvent) => void;
  onOpenTrainingModal: () => void;
  onNavigate: (tab: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  onRegisterEvent,
  onOpenTrainingModal,
  onNavigate
}) => {
  const { isNepali } = useLanguage();
  const { events } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: isNepali ? 'सबै गतिविधिहरू' : 'All Activities' },
    { id: 'workshop', label: isNepali ? 'कार्यशालाहरू' : 'Workshops' },
    { id: 'school-program', label: isNepali ? 'विद्यालय कार्यक्रम' : 'School Programs' },
    { id: 'drill', label: isNepali ? 'विपद् पूर्वअभ्यास' : 'Disaster Drills' },
    { id: 'training', label: isNepali ? 'तालिम अभिमुखीकरण' : 'Training Sessions' },
    { id: 'community', label: isNepali ? 'सामुदायिक समूह' : 'Community Care' },
  ];

  const filteredEvents = events.filter((ev) => {
    const matchesCategory = selectedCategory === 'all' || ev.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      ev.title.toLowerCase().includes(q) ||
      ev.titleNe.toLowerCase().includes(q) ||
      ev.description.toLowerCase().includes(q) ||
      ev.location.toLowerCase().includes(q) ||
      ev.locationNe.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 pb-24">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1457A6]">
          {isNepali ? "सामुदायिक गतिविधि तथा कार्यशाला" : "Community Events & Workshops"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? "गतिविधिहरू, कार्यशाला तथा तालिम सत्रहरू" : "Upcoming Workshops & Community Initiatives"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "पाइला नेपाल वेलनेस सेन्टरद्वारा आयोजित समुदाय-स्तरीय मनोवैज्ञानिक प्राथमिक उपचार (PFA), विद्यालय मानसिक स्वास्थ्य, विपद् पूर्वतयारी अभ्यास तथा मनोसामाजिक तालिममा सहभागी हुनुहोस्।"
            : "Participate in grassroots psychosocial first aid orientations, safe school mental health workshops, neighborhood disaster drills, and professional counseling information sessions."}
        </p>
      </section>

      {/* 2. Filters & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 text-xs font-semibold">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1457A6] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isNepali ? "गतिविधि खोज्नुहोस्..." : "Search events, location..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
            />
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-semibold text-slate-700">
              {isNepali ? "कुनै गतिविधि भेटिएन।" : "No matching events found."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#1457A6] hover:underline cursor-pointer"
            >
              {isNepali ? "सबै गतिविधिहरू देखाउनुहोस्" : "Reset filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((ev) => (
              <div
                key={ev.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Badge Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#ebf3fc] text-[#1457A6] border border-[#1457A6]/20">
                      {isNepali ? ev.categoryNe : ev.category}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {isNepali ? "आवेदन खुला छ" : "Registration Open"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {isNepali ? ev.titleNe : ev.title}
                  </h3>

                  {/* Date, Time & Location Specs */}
                  <div className="space-y-2 text-xs text-slate-600 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#008C4A] shrink-0" />
                      <span className="font-semibold text-slate-800">
                        {isNepali ? ev.dateNe : ev.date}
                      </span>
                    </div>

                    {ev.time && (
                      <div className="flex items-center gap-2 text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{isNepali ? ev.timeNe : ev.time}</span>
                      </div>
                    )}

                    <div className="flex items-start gap-2 text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-[#1457A6] shrink-0 mt-0.5" />
                      <span>{isNepali ? ev.locationNe : ev.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isNepali ? ev.descriptionNe : ev.description}
                  </p>

                  {/* Target Audience */}
                  {ev.audience && (
                    <div className="pt-1 text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700">
                        {isNepali ? "लक्षित सहभागी: " : "Audience: "}
                      </span>
                      <span>{isNepali ? ev.audienceNe : ev.audience}</span>
                    </div>
                  )}
                </div>

                {/* Footer / CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-[11px]">
                    <span className="font-bold text-[#008C4A] block">
                      {isNepali ? ev.feeNoteNe : ev.feeNote}
                    </span>
                    <span className="text-slate-400">
                      {isNepali ? ev.capacityNe : ev.capacity}
                    </span>
                  </div>

                  <button
                    onClick={() => onRegisterEvent(ev)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
                  >
                    <span>{isNepali ? "दर्ता गर्नुहोस्" : "Register Now"}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Partner / Request a Workshop Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1457A6] to-[#008C4A] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-white/80">
              {isNepali ? "संस्थागत सहकार्य" : "Institutional Collaboration"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              {isNepali
                ? "तपाईंको विद्यालय वा समुदायमा कार्यशाला सञ्चालन गर्न चाहनुहुन्छ?"
                : "Host a Workshop in Your School or Community?"}
            </h2>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl">
              {isNepali
                ? "हामी विद्यालय, समुदाय, स्थानीय वडा र सामाजिक संस्थाहरूसँग मिलेर अनुकूलित मानसिक स्वास्थ्य तथा विपद् पूर्वतयारी सत्रहरू सञ्चालन गर्दछौं।"
                : "We partner with schools, colleges, municipalities, and local youth organizations across Nepal to conduct tailored PFA, life skills, and preparedness camps."}
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            {isNepali ? "हामीसँग सम्पर्क गर्नुहोस्" : "Inquire for Partnership"}
          </button>
        </div>
      </section>
    </div>
  );
};

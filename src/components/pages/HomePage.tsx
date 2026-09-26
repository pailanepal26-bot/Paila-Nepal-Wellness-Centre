import React from 'react';
import {
  HeartHandshake,
  Shield,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Brain,
  Users,
  AlertTriangle,
  Compass,
  CheckCircle,
  FileText,
  LifeBuoy,
  UserCheck,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';
import { flagshipPrograms, featuredTraining } from '../../data/initialData';
import { LeadershipCard } from '../common/LeadershipCard';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenSupportModal: () => void;
  onOpenTrainingModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenSupportModal,
  onOpenTrainingModal,
}) => {
  const { t, isNepali } = useLanguage();
  const { settings, events, leadership } = useAdmin();

  const resilientProgram = flagshipPrograms[0];
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#ebf3fc] via-[#F5FAF8] to-[#F5FAF8] pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Soft abstract graphic background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#008C4A]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#1457A6]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Unboxed subtle kicker (Zero-pill discipline) */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#1457A6]">
                <span>PAILA NEPAL WELLNESS CENTRE</span>
                <span aria-hidden="true">·</span>
                <span className="font-['Noto_Sans_Devanagari',sans-serif]">पाइला नेपाल वेलनेस सेन्टर</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700">{t.registeredAt}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#263238] tracking-tight leading-[1.15]">
                {isNepali ? (
                  <>
                    <span className="text-[#008C4A]">स्वस्थ मन।</span>{' '}
                    <span className="text-[#1457A6]">पूर्वतयारीयुक्त समुदाय।</span>{' '}
                    <span className="text-[#263238]">उत्थानशील नेपाल।</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#008C4A]">Healthy Mind.</span>{' '}
                    <span className="text-[#1457A6]">Prepared Community.</span>{' '}
                    <span className="text-[#263238]">Resilient Nepal.</span>
                  </>
                )}
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t.heroSubtext}
              </p>

              {/* Secondary Visual Message */}
              <div className="p-3.5 bg-white/80 backdrop-blur-xs rounded-xl border border-slate-200/80 shadow-xs max-w-xl">
                <p className="text-xs sm:text-sm font-semibold text-[#1457A6] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#008C4A]" />
                  <span>{t.heroBadgeText}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenSupportModal}
                  className="px-6 py-3.5 text-sm font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>{t.cta.getSupport}</span>
                </button>

                <button
                  onClick={() => onNavigate('programs')}
                  className="px-6 py-3.5 text-sm font-bold text-[#1457A6] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.cta.explorePrograms}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#008C4A]" />
                <span>
                  {isNepali
                    ? "गोप्य, मर्यादित तथा प्रमाण-आधारित मनोसामाजिक सेवा"
                    : "Confidential, ethical & evidence-informed psychosocial practice"}
                </span>
              </div>
            </div>

            {/* Right Visual Column: Conceptual Community & Wellness Dashboard */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-100 space-y-5">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#e6f7ef] text-[#008C4A] flex items-center justify-center font-bold">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Resilience Integration</h3>
                      <p className="text-[11px] text-slate-500">Mind • Community • Preparedness</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#008C4A] bg-[#e6f7ef] px-2.5 py-1 rounded-md">
                    2026 Model
                  </span>
                </div>

                {/* 4 Connected Spheres */}
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#ebf3fc] text-[#1457A6] flex items-center justify-center">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">Psychosocial Support</p>
                        <p className="text-[11px] text-slate-500">Individual & family emotional care</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-semibold">Active</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#e6f7ef] text-[#008C4A] flex items-center justify-center">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">Disaster Preparedness</p>
                        <p className="text-[11px] text-slate-500">Risk awareness & emergency plans</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-semibold">4 Stages</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#eef8fd] text-[#55B8E8] flex items-center justify-center">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">6-Month Training</p>
                        <p className="text-[11px] text-slate-500">780 Hours · 160 OJT</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-blue-600 font-semibold">Enrolling</span>
                  </div>
                </div>

                {/* Core Philosophy Quote Block */}
                <div className="p-4 bg-gradient-to-r from-[#008C4A]/10 to-[#1457A6]/10 rounded-2xl border border-[#008C4A]/20">
                  <p className="text-xs font-semibold text-slate-800 italic leading-snug">
                    “Healthy people and psychologically resilient communities are better prepared to face crises and disasters.”
                  </p>
                </div>

                {/* Quick Action Button inside visual */}
                <button
                  onClick={() => onNavigate('about')}
                  className="w-full py-2.5 text-xs font-bold text-[#1457A6] bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Learn About Our Methodology</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & 4 FEATURE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
            {isNepali ? "परिचय तथा उद्देश्य" : "Introduction & Purpose"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#263238] tracking-tight">
            {t.intro.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.intro.content}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Mental Wellbeing */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#e6f7ef] text-[#008C4A] flex items-center justify-center font-bold">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {t.intro.card1Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.intro.card1Desc}
            </p>
            <button
              onClick={() => onNavigate('mental-health')}
              className="text-xs font-semibold text-[#008C4A] hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer"
            >
              <span>{isNepali ? "थप जान्नुहोस्" : "Learn More"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Community Resilience */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#ebf3fc] text-[#1457A6] flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {t.intro.card2Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.intro.card2Desc}
            </p>
            <button
              onClick={() => onNavigate('programs')}
              className="text-xs font-semibold text-[#1457A6] hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer"
            >
              <span>{isNepali ? "कार्यक्रमहरू हेर्नुहोस्" : "Explore Programs"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Training & Capacity Building */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {t.intro.card3Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.intro.card3Desc}
            </p>
            <button
              onClick={() => onNavigate('training')}
              className="text-xs font-semibold text-amber-700 hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer"
            >
              <span>{isNepali ? "तालिम विवरण" : "View Training"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Disaster Preparedness */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1457A6] flex items-center justify-center font-bold">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {t.intro.card4Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.intro.card4Desc}
            </p>
            <button
              onClick={() => onNavigate('disaster-management')}
              className="text-xs font-semibold text-[#1457A6] hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer"
            >
              <span>{isNepali ? "४ चरणहरू हेर्नुहोस्" : "See 4 Stages"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Highlighted Banner Message */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#008C4A] to-[#1457A6] text-white shadow-md">
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <p className="text-lg sm:text-2xl font-bold tracking-tight leading-snug">
              {t.intro.messageBox}
            </p>
            <p className="text-xs sm:text-sm text-white/80">
              Paila Nepal Wellness Centre connects mental health, psychosocial wellbeing, and disaster resilience across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP PROGRAM SPOTLIGHT: PAILA RESILIENT COMMUNITY PROGRAM */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
                {isNepali ? "प्रमुख कार्यक्रम" : "Flagship Initiative"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#263238] tracking-tight">
                {isNepali ? resilientProgram.titleNe : resilientProgram.title}
              </h2>
              <p className="text-sm font-semibold text-[#1457A6]">
                “{isNepali ? resilientProgram.taglineNe : resilientProgram.tagline}”
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isNepali ? resilientProgram.descriptionNe : resilientProgram.description}
              </p>
            </div>
            <button
              onClick={() => onNavigate('programs')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#1457A6] hover:bg-[#0f4280] rounded-xl transition-colors shrink-0 cursor-pointer shadow-xs"
            >
              {isNepali ? "कार्यक्रम विस्तृत हेर्नुहोस्" : "Explore All Programs"}
            </button>
          </div>

          {/* Five Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {resilientProgram.pillars?.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-[#F5FAF8] p-5 rounded-2xl border border-slate-200/80 space-y-3 relative group hover:border-[#008C4A]/40 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#008C4A] text-white text-xs font-black flex items-center justify-center">
                  0{pillar.number}
                </div>
                <h3 className="font-bold text-sm text-slate-900 leading-snug">
                  {isNepali ? pillar.titleNe : pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isNepali ? pillar.descriptionNe : pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED TRAINING: 6-MONTH PSYCHOSOCIAL COUNSELLING TRAINING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#ebf3fc] to-white rounded-3xl p-6 sm:p-10 border border-[#1457A6]/20 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1457A6]">
                {isNepali ? "व्यावसायिक क्षमता विकास तालिम" : "Featured Professional Training"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238]">
                {isNepali ? featuredTraining.titleNe : featuredTraining.title}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#008C4A]">
                {isNepali ? featuredTraining.subtitleNe : featuredTraining.subtitle}
              </p>
              <p className="text-xs text-slate-500 italic">
                {isNepali ? featuredTraining.disclaimerNe : featuredTraining.disclaimer}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTrainingModal}
                className="px-6 py-3 text-xs font-bold text-white bg-[#1457A6] hover:bg-[#0f4280] rounded-xl shadow-sm transition-all cursor-pointer"
              >
                {t.cta.applyEnquire}
              </button>
              <button
                onClick={() => onNavigate('training')}
                className="px-5 py-3 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all cursor-pointer"
              >
                {isNepali ? "पूर्ण पाठ्यक्रम हेर्नुहोस्" : "View Full Syllabus"}
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 border-t border-slate-200">
            <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-center">
              <span className="text-xs text-slate-500 block">Duration</span>
              <span className="font-extrabold text-[#1457A6] text-base sm:text-lg">6 Months</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-center">
              <span className="text-xs text-slate-500 block">Total Curriculum</span>
              <span className="font-extrabold text-[#008C4A] text-base sm:text-lg">780 Hours</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-center">
              <span className="text-xs text-slate-500 block">Supervised Practice</span>
              <span className="font-extrabold text-amber-600 text-base sm:text-lg">160 Hours OJT</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-center">
              <span className="text-xs text-slate-500 block">Learning Framework</span>
              <span className="font-extrabold text-slate-700 text-xs sm:text-sm">Theory + Prac + OJT</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. UPCOMING WORKSHOPS & COMMUNITY EVENTS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1457A6]">
              {isNepali ? "सामुदायिक गतिविधिहरू" : "Community Engagements"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238]">
              {isNepali ? "आगामी कार्यशाला तथा तालिम सत्रहरू" : "Upcoming Workshops & Sessions"}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('events')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1457A6] hover:underline cursor-pointer"
          >
            <span>{isNepali ? "सबै गतिविधिहरू हेर्नुहोस् →" : "View All Activities & Register →"}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((ev) => (
            <div
              key={ev.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#ebf3fc] text-[#1457A6]">
                    {isNepali ? ev.categoryNe : ev.category}
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                    {isNepali ? "दर्ता खुला" : "Open"}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 leading-snug line-clamp-2">
                  {isNepali ? ev.titleNe : ev.title}
                </h3>
                <div className="text-[11px] text-slate-500 space-y-1">
                  <p className="flex items-center gap-1.5 font-medium text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-[#008C4A]" />
                    <span>{isNepali ? ev.dateNe : ev.date}</span>
                  </p>
                  <p className="flex items-center gap-1.5 line-clamp-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{isNepali ? ev.locationNe : ev.location}</span>
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#008C4A]">
                  {isNepali ? ev.feeNoteNe : ev.feeNote}
                </span>
                <button
                  onClick={() => onNavigate('events')}
                  className="px-3 py-1.5 text-xs font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg transition-colors cursor-pointer"
                >
                  {isNepali ? "विवरण / दर्ता" : "Register"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LEADERSHIP TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
            {isNepali ? "नेतृत्व तथा विज्ञ टोली" : "Organization Leadership"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#263238] tracking-tight">
            {isNepali ? "हाम्रो नेतृत्व टोली" : "Leadership Team"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {isNepali
              ? "व्यावसायिक तथा शैक्षिक विवरण संस्थाद्वारा प्रदान गरिए अनुसार।"
              : "Professional and academic details provided by the organization."}
          </p>
        </div>

        {/* Two profile cards of equal importance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leadership.map((member) => (
            <LeadershipCard
              key={member.id}
              member={member}
              onContactClick={() => onNavigate('contact')}
            />
          ))}
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#263238] rounded-3xl p-8 sm:p-14 text-white text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#008C4A]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1457A6]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t.finalCta.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.finalCta.text}
            </p>

            {/* 4 Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
              <button
                onClick={onOpenSupportModal}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl shadow-sm transition-all cursor-pointer"
              >
                {t.cta.getSupport}
              </button>

              <button
                onClick={onOpenTrainingModal}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#1457A6] hover:bg-[#0f4280] rounded-xl shadow-sm transition-all cursor-pointer"
              >
                {isNepali ? "तालिममा जोडिनुहोस्" : "Join Training"}
              </button>

              <button
                onClick={() => onNavigate('get-involved')}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all cursor-pointer"
              >
                {t.cta.partnerWithUs}
              </button>

              <button
                onClick={() => onNavigate('get-involved')}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all cursor-pointer"
              >
                {t.cta.becomeVolunteer}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

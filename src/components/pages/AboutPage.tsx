import React from 'react';
import {
  Heart,
  Briefcase,
  UserCheck,
  Lock,
  Users2,
  Scale,
  Smile,
  ShieldAlert,
  BookOpen,
  CheckCircle,
  Eye,
  Target,
  Sparkles,
  Compass,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';
import { LeadershipCard } from '../common/LeadershipCard';

interface AboutPageProps {
  onNavigate: (tab: string) => void;
  onOpenSupportModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenSupportModal }) => {
  const { t, isNepali } = useLanguage();
  const { leadership } = useAdmin();

  const focusAreas = [
    { en: 'Mental health and psychosocial wellbeing', ne: 'मानसिक स्वास्थ्य तथा मनोसामाजिक कल्याण' },
    { en: 'Counselling and supportive interventions', ne: 'परामर्श तथा सहयोगी हस्तक्षेप' },
    { en: 'Child and adolescent wellbeing', ne: 'बालबालिका तथा किशोरकिशोरी कल्याण' },
    { en: 'Family support & strengthening', ne: 'पारिवारिक सहयोग तथा सुदृढीकरण' },
    { en: 'Mental health awareness & psychoeducation', ne: 'मानसिक स्वास्थ्य सचेतना र मनोशिक्षा' },
    { en: 'Psychological First Aid (PFA)', ne: 'मनोवैज्ञानिक प्राथमिक उपचार (PFA)' },
    { en: 'Trauma-informed support', ne: 'ट्रमा-सूचित सहयोग' },
    { en: 'Training and professional development', ne: 'तालिम तथा व्यावसायिक विकास' },
    { en: 'Disaster preparedness & contingency', ne: 'विपद् पूर्वतयारी तथा कार्ययोजना' },
    { en: 'Disaster Risk Reduction (DRR)', ne: 'विपद् जोखिम न्यूनीकरण (DRR)' },
    { en: 'Emergency psychosocial response', ne: 'आपत्कालीन मनोसामाजिक प्रतिकार्य' },
    { en: 'Community resilience & cohesion', ne: 'सामुदायिक उत्थानशीलता' },
    { en: 'Volunteer mobilization & development', ne: 'स्वयंसेवक विकास तथा परिचालन' },
    { en: 'Research, monitoring and learning', ne: 'अनुसन्धान, अनुगमन तथा सिकाइ' },
  ];

  const valuesList = [
    {
      icon: Heart,
      title: t.values.compassion,
      desc: t.values.compassionDesc,
      color: 'text-rose-600 bg-rose-50'
    },
    {
      icon: Briefcase,
      title: t.values.professionalism,
      desc: t.values.professionalismDesc,
      color: 'text-[#1457A6] bg-[#ebf3fc]'
    },
    {
      icon: UserCheck,
      title: t.values.respect,
      desc: t.values.respectDesc,
      color: 'text-[#008C4A] bg-[#e6f7ef]'
    },
    {
      icon: Lock,
      title: t.values.confidentiality,
      desc: t.values.confidentialityDesc,
      color: 'text-amber-600 bg-amber-50'
    },
    {
      icon: Users2,
      title: t.values.inclusion,
      desc: t.values.inclusionDesc,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: Scale,
      title: t.values.integrity,
      desc: t.values.integrityDesc,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      icon: Smile,
      title: t.values.communityParticipation,
      desc: t.values.communityParticipationDesc,
      color: 'text-cyan-600 bg-cyan-50'
    },
    {
      icon: ShieldAlert,
      title: t.values.resilience,
      desc: t.values.resilienceDesc,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: BookOpen,
      title: t.values.continuousLearning,
      desc: t.values.continuousLearningDesc,
      color: 'text-teal-600 bg-teal-50'
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 pb-24">
      {/* 1. Header / Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
            {isNepali ? "हाम्रो पृष्ठभूमि तथा परिचय" : "About Our Organization"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
            {isNepali ? "पाइला नेपाल वेलनेस सेन्टरको बारेमा" : "About Paila Nepal Wellness Centre"}
          </h1>
          <p className="text-sm font-semibold text-[#1457A6]">
            “{t.primaryTagline}”
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
            {isNepali
              ? "पाइला नेपाल वेलनेस सेन्टर मानसिक स्वास्थ्य, मनोसामाजिक सहयोग, तालिम र विपद् उत्थानशीलताको महत्वपूर्ण संगममा कार्यरत नेपाल-आधारित कल्याणकारी तथा समुदाय-केन्द्रित संस्था हो।"
              : "Paila Nepal Wellness Centre is a Nepal-based wellness and community-focused organization working at the intersection of mental health, psychosocial support, training and disaster resilience."}
          </p>
        </div>
      </section>

      {/* 2. Philosophy & Intersection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {isNepali ? "हाम्रो एकीकृत दृष्टिकोण" : "Our Integrated Philosophy"}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {isNepali
                ? "हाम्रो दृष्टिकोणले स्वीकार गर्दछ कि मनोवैज्ञानिक कल्याण स्वस्थ व्यक्ति, सुरक्षित परिवार र उत्थानशील समुदायको अभिन्न अङ्ग हो। स्वस्थ नागरिक र मनोवैज्ञानिक रूपमा उत्थानशील समुदायहरू संकट र विपद्हरूको सामना गर्न अझ सक्षम हुन्छन्।"
                : "Our approach recognizes that psychological wellbeing is an important part of healthy individuals, families and resilient communities. Healthy people and psychologically resilient communities are better prepared to face crises, disasters, and life adversities."}
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {isNepali
                ? "हामी परामर्श, सीपमूलक तालिम, सामुदायिक पूर्वतयारी र अनुसन्धान मार्फत मानवीय क्षमतालाई सुदृढ पार्ने कार्यमा अग्रसर छौं।"
                : "Through direct psychosocial support, practical training, community preparedness simulations, and capacity development, we help build long-term communal self-reliance."}
            </p>
          </div>

          {/* Quick Notice regarding official scope */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <p className="font-semibold text-slate-800 mb-0.5">Professional Scope Notice:</p>
            <p>
              {t.servicesDisclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-gradient-to-br from-[#e6f7ef] to-white rounded-3xl p-8 border border-[#008C4A]/20 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#008C4A] text-white flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">
                {isNepali ? "हाम्रो दीर्घकालीन सोच (Vision)" : "Our Vision"}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#008C4A] leading-relaxed">
                “{isNepali
                  ? "एक मानसिक रूपमा स्वस्थ, पूर्वतयारीयुक्त र उत्थानशील नेपाल जहाँ व्यक्ति, परिवार र समुदायहरूसँग प्रतिकूलताको सामना गर्न र समुन्नत हुन आवश्यक ज्ञान, सीप र सहयोग उपलब्ध होस्।"
                  : "A mentally healthy, prepared and resilient Nepal where individuals, families and communities have the knowledge, skills and support needed to thrive and respond to adversity."}”
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-[#ebf3fc] to-white rounded-3xl p-8 border border-[#1457A6]/20 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1457A6] text-white flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">
                {isNepali ? "हाम्रो ध्येय (Mission)" : "Our Mission"}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#1457A6] leading-relaxed">
                “{isNepali
                  ? "व्यावसायिक सेवा, शिक्षा, तालिम, सचेतना र समुदायमा आधारित पहलहरू मार्फत मानसिक कल्याण प्रवर्द्धन गर्ने, मनोसामाजिक सहयोग सुदृढ गर्ने, सामुदायिक क्षमता विकास गर्ने र विपद् पूर्वतयारी तथा उत्थानशीलतामा योगदान पुर्‍याउने।"
                  : "To promote mental wellbeing, strengthen psychosocial support, develop community capacity and contribute to disaster preparedness and resilience through professional services, education, training, awareness and community-based initiatives."}”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values (9 Values Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
            {isNepali ? "हाम्रा निर्देशक सिद्धान्तहरू" : "Guiding Principles"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238]">
            {isNepali ? "हाम्रा आधारभूत मूल्य मान्यताहरू (Core Values)" : "Our Core Values"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesList.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${val.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. 14 Focus Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5FAF8] rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
              {isNepali ? "कार्यक्षेत्रहरू" : "Strategic Focus"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238]">
              {isNepali ? "हाम्रा प्रमुख कार्यक्षेत्रहरू (१४ क्षेत्रहरू)" : "Our Core Focus Areas (14 Areas)"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-[#e6f7ef] text-[#008C4A] text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  {isNepali ? area.ne : area.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
            {isNepali ? "संस्थागत नेतृत्व" : "Leadership"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238]">
            {isNepali ? "हाम्रो नेतृत्व टोली" : "Leadership Team"}
          </h2>
          <p className="text-xs text-slate-500 italic">
            {t.leadershipDisclaimer}
          </p>
        </div>

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
    </div>
  );
};

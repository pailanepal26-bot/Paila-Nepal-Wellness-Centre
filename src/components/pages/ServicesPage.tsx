import React, { useState } from 'react';
import {
  Brain,
  Baby,
  GraduationCap,
  Shield,
  HeartHandshake,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Filter
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { initialServices } from '../../data/initialData';
import { ServiceItem } from '../../types';

interface ServicesPageProps {
  onOpenSupportModal: (type?: string) => void;
  onOpenTrainingModal: () => void;
  onNavigate: (tab: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenSupportModal,
  onOpenTrainingModal,
  onNavigate
}) => {
  const { t, isNepali } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: isNepali ? 'सबै सेवाहरू' : 'All Services' },
    { id: 'mental-health', label: isNepali ? '१. मानसिक स्वास्थ्य तथा मनोसामाजिक' : '1. Mental Health & Psychosocial' },
    { id: 'child-family', label: isNepali ? '२. बालबालिका तथा परिवार कल्याण' : '2. Child, Adolescent & Family' },
    { id: 'training', label: isNepali ? '३. तालिम तथा क्षमता विकास' : '3. Training & Capacity' },
    { id: 'disaster', label: isNepali ? '४. विपद् व्यवस्थापन र उत्थानशीलता' : '4. Disaster Management' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? initialServices
    : initialServices.filter(s => s.category === selectedCategory);

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 pb-24">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
          {isNepali ? "हाम्रा व्यावसायिक सेवाहरू" : "Professional Offerings"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? "सेवाहरू तथा कार्यक्रमहरू" : "Our Services"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "मानसिक स्वास्थ्य, मनोसामाजिक कल्याण, बाल तथा पारिवारिक सहयोग, तालिम र विपद् उत्थानशीलताका चार मुख्य क्षेत्रमा सेवाहरू।"
            : "Compassionate, structured and evidence-informed support across mental health, child & family wellbeing, professional training, and disaster resilience."}
        </p>
      </section>

      {/* 2. Mandatory Scope & Emergency Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 bg-amber-50/90 border border-amber-200/90 rounded-2xl flex items-start gap-3 text-slate-800 text-xs sm:text-sm leading-relaxed">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-amber-900">
              {isNepali ? "व्यावसायिक कार्यक्षेत्र सम्बन्धी जानकारी:" : "Service & Medical Disclaimer:"}
            </p>
            <p>{t.servicesDisclaimer}</p>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs (Zero-pill compliant segmented control) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#008C4A]">
                    {service.category.replace('-', ' ')}
                  </span>
                  <span className="text-slate-400">Paila Nepal</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1457A6] transition-colors leading-snug">
                  {isNepali ? service.titleNe : service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isNepali ? service.descriptionNe : service.description}
                </p>

                {/* Key Points */}
                <div className="space-y-1 pt-2 border-t border-slate-100">
                  {(isNepali ? service.keyPointsNe : service.keyPoints).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#008C4A] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {service.category === 'training' ? (
                  <button
                    onClick={onOpenTrainingModal}
                    className="w-full py-2 px-3 text-xs font-bold text-[#1457A6] bg-[#ebf3fc] hover:bg-[#dce9f8] rounded-xl transition-colors text-center cursor-pointer"
                  >
                    {isNepali ? "तालिम विवरण तथा सोधपुछ" : "Inquire Training"}
                  </button>
                ) : (
                  <button
                    onClick={() => onOpenSupportModal(service.title)}
                    className="w-full py-2 px-3 text-xs font-bold text-[#008C4A] bg-[#e6f7ef] hover:bg-[#d5f1e3] rounded-xl transition-colors text-center cursor-pointer"
                  >
                    {isNepali ? "सहयोग / सोधपुछ अनुरोध" : "Request Support / Inquiry"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Additional 4 Comprehensive Category Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#263238] rounded-3xl p-8 sm:p-12 text-white space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Integrated Resilience Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Connecting Clinical Scope with Grassroots Preparedness
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We work in schools, community wards, and family networks across Nepal, ensuring people are equipped with both emotional coping abilities and practical emergency safety skills.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('disaster-management')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl transition-colors cursor-pointer"
            >
              Explore Disaster Management Model
            </button>
            <button
              onClick={() => onNavigate('training')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#1457A6] hover:bg-[#0f4280] rounded-xl transition-colors cursor-pointer"
            >
              6-Month Psychosocial Counselling Course
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

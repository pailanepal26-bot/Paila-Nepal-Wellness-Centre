import React, { useState } from 'react';
import {
  Sparkles,
  School,
  HeartHandshake,
  Users,
  Shield,
  LifeBuoy,
  BookOpen,
  CheckCircle,
  FileText,
  Search,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { flagshipPrograms } from '../../data/initialData';

interface ProgramsPageProps {
  onOpenSupportModal: () => void;
  onOpenTrainingModal: () => void;
  onNavigate: (tab: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  onOpenSupportModal,
  onOpenTrainingModal,
  onNavigate,
}) => {
  const { isNepali } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: isNepali ? 'सबै कार्यक्रमहरू' : 'All Programs' },
    { id: 'community', label: isNepali ? 'सामुदायिक कार्यक्रम' : 'Community Programs' },
    { id: 'mental-health', label: isNepali ? 'मानसिक स्वास्थ्य तथा विद्यालय' : 'Mental Health & School' },
    { id: 'disaster', label: isNepali ? 'विपद् प्रतिकार्य' : 'Disaster Programs' },
    { id: 'training', label: isNepali ? 'स्वयंसेवक तथा तालिम' : 'Volunteer & Training' },
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? flagshipPrograms
    : flagshipPrograms.filter(p => p.category === selectedCategory);

  const researchAreas = [
    { en: 'Mental Health in Diverse Communities', ne: 'विविध समुदायहरूमा मानसिक स्वास्थ्य' },
    { en: 'Psychosocial Wellbeing & Coping Patterns', ne: 'मनोसामाजिक कल्याण र सामना गर्ने शैलीहरू' },
    { en: 'Community Resilience Frameworks in Nepal', ne: 'नेपालमा सामुदायिक उत्थानशीलताको ढाँचा' },
    { en: 'Disaster Psychosocial Response Mechanisms', ne: 'विपद् मनोसामाजिक प्रतिकार्य संयन्त्रहरू' },
    { en: 'Child & Adolescent Emotional Development', ne: 'बालबालिका तथा किशोरकिशोरीको भावनात्मक विकास' },
    { en: 'Disaster Preparedness & Risk Perception', ne: 'विपद् पूर्वतयारी र जोखिमको बुझाइ' },
    { en: 'Training Effectiveness & Knowledge Transfer', ne: 'तालिमको प्रभावकारिता र ज्ञान हस्तान्तरण' },
    { en: 'Community Program Learning & Impact Evaluation', ne: 'सामुदायिक कार्यक्रम सिकाइ तथा प्रभाव मूल्यांकन' },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 pb-24">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
          {isNepali ? "पहल तथा कार्यक्रम पोर्टफोलियो" : "Program Portfolio"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? "हाम्रा मुख्य कार्यक्रमहरू" : "Programs & Initiatives"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "समुदाय, विद्यालय र परिवारहरूमा मानसिक स्वास्थ्य र विपद् पूर्वतयारीलाई सुदृढ बनाउने हाम्रा व्यवस्थित कार्यक्रमहरू।"
            : "Transformative, evidence-informed initiatives designed to foster healthy minds, prepared schools, protected children, and resilient communities."}
        </p>
      </section>

      {/* 2. Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-3xl mx-auto border border-slate-200">
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

      {/* 3. Program Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-6"
            >
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#008C4A] uppercase tracking-wider">
                    <span>Program Category</span>
                    <span>·</span>
                    <span className="text-[#1457A6]">{program.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {isNepali ? program.titleNe : program.title}
                  </h2>
                  {program.tagline && (
                    <p className="text-xs sm:text-sm font-semibold text-[#1457A6]">
                      “{isNepali ? program.taglineNe : program.tagline}”
                    </p>
                  )}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                    {isNepali ? program.descriptionNe : program.description}
                  </p>
                </div>

                <div className="shrink-0 flex sm:flex-col gap-2">
                  <button
                    onClick={() => onNavigate('get-involved')}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl transition-colors cursor-pointer"
                  >
                    Partner on This
                  </button>
                </div>
              </div>

              {/* 5 Pillars (if Paila Resilient Community) */}
              {program.pillars && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {isNepali ? "पाँच स्तम्भहरू (5 Pillars)" : "The Five Core Operational Pillars"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {program.pillars.map((pillar) => (
                      <div
                        key={pillar.number}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1"
                      >
                        <span className="w-6 h-6 rounded-md bg-[#008C4A] text-white text-[11px] font-bold flex items-center justify-center">
                          0{pillar.number}
                        </span>
                        <h4 className="font-bold text-xs text-slate-900 mt-2">
                          {isNepali ? pillar.titleNe : pillar.title}
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          {isNepali ? pillar.descriptionNe : pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Focus Points List */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {isNepali ? "मुख्य कार्यक्षेत्रहरू" : "Key Program Elements"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {(isNepali ? program.focusNe : program.focus).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#1457A6] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Research & Learning Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#ebf3fc] rounded-3xl p-6 sm:p-10 border border-[#1457A6]/20 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1457A6]">
              {isNepali ? "अनुसन्धान, अनुगमन तथा सिकाइ" : "Research, Monitoring & Learning"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {isNepali ? "अनुसन्धान तथा प्रमाणमा आधारित सिकाइ" : "Evidence-Informed Research & Learning"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isNepali
                ? "हाम्रो कार्यविधि प्रमाण-आधारित ज्ञान र निरन्तर सिकाइमा आधारित छ। हामी समुदायको आवश्यकता, तालिमको प्रभावकारिता र मानसिक स्वास्थ्य प्रवर्द्धनमा व्यवस्थित अध्ययनलाई महत्व दिन्छौं।"
                : "Continuous learning and reflective practice underpin all our activities. We systematically evaluate program outcomes, volunteer efficacy, and community psychosocial resilience."}
            </p>
          </div>

          {/* Research Areas Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {isNepali ? "प्राथमिकता प्राप्त अनुसन्धान क्षेत्रहरू" : "Organizational Research Themes"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {researchAreas.map((res, i) => (
                <div
                  key={i}
                  className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs space-y-1"
                >
                  <span className="text-[10px] font-bold text-[#1457A6]">Area 0{i + 1}</span>
                  <p className="text-xs font-semibold text-slate-800">
                    {isNepali ? res.ne : res.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Integrity Notice (Mandatory per prompt) */}
          <div className="p-4 bg-white/90 rounded-2xl border border-slate-200 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Research Transparency & Integrity Policy:</p>
            <p>
              Paila Nepal Wellness Centre adheres strictly to ethical research standards. We do not display fabricated statistics or unverified whitepapers. Future research publications, monitoring studies, and peer-reviewed outputs will be archived in this portal as official findings are formalized.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

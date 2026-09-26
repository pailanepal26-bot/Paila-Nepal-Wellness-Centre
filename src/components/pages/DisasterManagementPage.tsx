import React, { useState } from 'react';
import {
  ShieldAlert,
  Flame,
  LifeBuoy,
  RefreshCw,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { disasterFourStages } from '../../data/initialData';
import { DisasterReadinessTool } from '../tools/DisasterReadinessTool';

interface DisasterManagementPageProps {
  onOpenTrainingModal: () => void;
  onNavigate: (tab: string) => void;
}

export const DisasterManagementPage: React.FC<DisasterManagementPageProps> = ({
  onOpenTrainingModal,
  onNavigate
}) => {
  const { isNepali } = useLanguage();
  const [activeStage, setActiveStage] = useState<number>(1);

  const selectedStageData = disasterFourStages.find(s => s.number === activeStage) || disasterFourStages[0];

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 pb-24">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1457A6]">
          {isNepali ? "विपद् व्यवस्थापन तथा उत्थानशीलता" : "Disaster Risk Reduction & Psychosocial Care"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali
            ? "पूर्वतयारीयुक्त समुदाय। प्रभावकारी प्रतिकार्य। बलियो उत्थानशीलता।"
            : "Prepared Communities. Stronger Responses. Greater Resilience."}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          {isNepali
            ? "नेपाल भूकम्प, बाढी र पहिरो जस्ता प्राकृतिक विपद्हरूको उच्च जोखिममा रहेको देश हो। पाइला नेपाल वेलनेस सेन्टरले भौतिक राहत मात्र होइन, संकटको समयमा मानसिक स्थिरता र समुदायको पूर्वतयारीलाई सशक्त बनाउन चार-चरणीय मोडेलमा काम गर्दछ।"
            : "Nepal faces persistent geological and climate vulnerabilities. Paila Nepal Wellness Centre bridges physical disaster risk reduction with psychosocial readiness through a comprehensive four-stage operational model."}
        </p>

        {/* Core Philosophy Box */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-[#008C4A]/10 to-[#1457A6]/10 border border-[#008C4A]/20">
          <p className="text-xs sm:text-sm font-bold text-slate-800 italic">
            “Healthy people and psychologically resilient communities are better prepared to face crises and disasters.”
          </p>
        </div>
      </section>

      {/* 2. Four Stages Interactive Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {isNepali ? "विपद् व्यवस्थापनका चार चरणहरू" : "The 4 Stages of Disaster Resilience"}
            </h2>
            <p className="text-xs text-slate-500">
              Click each stage to explore operational action points and psychosocial interventions.
            </p>
          </div>
        </div>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {disasterFourStages.map((stage) => {
            const isActive = activeStage === stage.number;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStage(stage.number)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#1457A6] shadow-md ring-2 ring-[#1457A6]/20'
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center ${
                      isActive ? 'bg-[#1457A6] text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    0{stage.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    Phase {stage.number}
                  </span>
                </div>
                <h3 className={`font-bold text-sm ${isActive ? 'text-[#1457A6]' : 'text-slate-800'}`}>
                  {isNepali ? stage.stageNe : stage.stage}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  {isNepali ? stage.taglineNe : stage.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
                Stage 0{selectedStageData.number} Focus
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {isNepali ? selectedStageData.stageNe : selectedStageData.stage}
              </h3>
              <p className="text-sm font-medium text-slate-600">
                {isNepali ? selectedStageData.taglineNe : selectedStageData.tagline}
              </p>
            </div>
            <button
              onClick={() => onNavigate('resources')}
              className="px-4 py-2 text-xs font-semibold text-[#1457A6] bg-[#ebf3fc] hover:bg-[#dce9f8] rounded-xl transition-colors cursor-pointer shrink-0"
            >
              {isNepali ? "विपद् स्रोत सामग्री हेर्नुहोस्" : "Browse Disaster Resources"}
            </button>
          </div>

          {/* Action List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(isNepali ? selectedStageData.itemsNe : selectedStageData.items).map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-[#008C4A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-xs sm:text-sm">
                    {item}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Community-level execution & field coordination
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5. Interactive Household Disaster Go-Bag & Readiness Builder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DisasterReadinessTool />
      </section>

      {/* 3. Community Drills, Schools & Frontline Responders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#e6f7ef] text-[#008C4A] flex items-center justify-center font-bold">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Community Emergency Drills
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Facilitating practical earthquake simulation, evacuation path mapping, and assembly area orientations at neighborhood and ward levels.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#ebf3fc] text-[#1457A6] flex items-center justify-center font-bold">
              <LifeBuoy className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Rapid PFA Deployment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mobilizing compassionate psychological first aiders immediately following emergencies to provide emotional grounding and basic linkage.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Responder Care & Burnout
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Safeguarding frontline relief workers, volunteers, and municipal teams from secondary trauma, compassion fatigue, and physical exhaustion.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA: Train in Disaster Psychosocial Response */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1457A6] to-[#008C4A] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Interested in Disaster PFA or Preparedness Training?
            </h2>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl">
              We train schools, community volunteers, local leaders, and organizations across Nepal in structured Psychological First Aid and risk management.
            </p>
          </div>
          <button
            onClick={onOpenTrainingModal}
            className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            Inquire for Training / Workshop
          </button>
        </div>
      </section>
    </div>
  );
};

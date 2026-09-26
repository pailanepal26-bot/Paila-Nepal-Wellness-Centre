import React from 'react';
import {
  GraduationCap,
  Clock,
  BookOpen,
  Award,
  CheckCircle,
  FileText,
  AlertCircle,
  Briefcase,
  Users,
  Download,
  ArrowRight,
  Printer
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';
import { featuredTraining } from '../../data/initialData';

interface TrainingPageProps {
  onOpenTrainingModal: () => void;
  onOpenProspectus: () => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onOpenTrainingModal, onOpenProspectus }) => {
  const { isNepali } = useLanguage();
  const { settings } = useAdmin();

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 pb-24">
      {/* 1. Header / Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1457A6]">
          {isNepali ? "व्यावसायिक तालिम तथा क्षमता विकास" : "Capacity Development & Training"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? featuredTraining.titleNe : featuredTraining.title}
        </h1>
        <p className="text-sm sm:text-base font-semibold text-[#008C4A]">
          {isNepali ? featuredTraining.subtitleNe : featuredTraining.subtitle}
        </p>
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "मनोसामाजिक सहयोग, परामर्श सीप र सामुदायिक सहजीकरणमा सैद्धान्तिक, प्रयोगात्मक र कार्यस्थल अभ्यास (OJT) सहितको गहन व्यावसायिक तालिम।"
            : "A structured, competency-based course designed to equip aspiring counselors, social workers, and educators with rigorous helping skills and ethical practice."}
        </p>

        {/* Live Admin Batch Stripe */}
        <div className="max-w-xl mx-auto p-3 bg-[#ebf3fc] border border-[#1457A6]/20 rounded-xl text-xs text-[#1457A6] flex items-center justify-between gap-4">
          <div className="text-left">
            <span className="font-bold block">
              {isNepali ? settings.nextTrainingBatchNe : settings.nextTrainingBatchEn}
            </span>
            <span className="text-slate-600 text-[11px]">
              {isNepali ? settings.trainingFeeNoteNe : settings.trainingFeeNoteEn}
            </span>
          </div>
          <button
            onClick={onOpenTrainingModal}
            className="px-3.5 py-1.5 bg-[#1457A6] text-white font-bold rounded-lg text-xs hover:bg-[#0f4280] transition-colors cursor-pointer shrink-0"
          >
            {isNepali ? "आवेदन / सोधपुछ" : "Apply / Enquire"}
          </button>
        </div>
      </section>

      {/* 2. Key Course Metrics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center shadow-xs">
            <Clock className="w-6 h-6 text-[#1457A6] mx-auto mb-2" />
            <span className="text-xs text-slate-500 uppercase tracking-wider block">Duration</span>
            <span className="text-xl sm:text-2xl font-black text-[#1457A6]">6 Months</span>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center shadow-xs">
            <BookOpen className="w-6 h-6 text-[#008C4A] mx-auto mb-2" />
            <span className="text-xs text-slate-500 uppercase tracking-wider block">Total Hours</span>
            <span className="text-xl sm:text-2xl font-black text-[#008C4A]">780 Hours</span>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center shadow-xs">
            <Award className="w-6 h-6 text-amber-600 mx-auto mb-2" />
            <span className="text-xs text-slate-500 uppercase tracking-wider block">Field Practice</span>
            <span className="text-xl sm:text-2xl font-black text-amber-600">160 Hrs OJT</span>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center shadow-xs">
            <Briefcase className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <span className="text-xs text-slate-500 uppercase tracking-wider block">Learning Model</span>
            <span className="text-xs sm:text-sm font-black text-indigo-700 block mt-1">Theory+Prac+OJT</span>
          </div>
        </div>
      </section>

      {/* 3. Mandatory Regulatory Scope Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 bg-slate-100 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-start gap-3 leading-relaxed">
          <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-slate-800">
              Institutional & Regulatory Clarification:
            </p>
            <p>{isNepali ? featuredTraining.disclaimerNe : featuredTraining.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* 4. Complete 16 Curriculum Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {isNepali ? "पाठ्यक्रमका १६ प्रमुख मोड्युलहरू" : "16 Comprehensive Curriculum Modules"}
            </h2>
            <p className="text-xs text-slate-500">
              Based on the CTEVT Psychosocial Counselor Curriculum standards.
            </p>
          </div>
          <button
            onClick={onOpenProspectus}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#1457A6] bg-[#ebf3fc] border border-[#1457A6]/20 rounded-xl hover:bg-[#dce9f8] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isNepali ? "विस्तृत पाठ्यक्रम पुस्तिका हेर्नुहोस्" : "View Full Course Prospectus"}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredTraining.curriculumTopics.map((topic, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-[#1457A6]/50 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="w-7 h-7 rounded-lg bg-[#ebf3fc] text-[#1457A6] text-xs font-bold flex items-center justify-center">
                  0{i + 1}
                </span>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                  {isNepali ? topic.titleNe : topic.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {isNepali ? topic.descriptionNe : topic.description}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                <span>Module {i + 1}</span>
                <span>Core Competency</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Who Can Join & Potential Engagement Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Target Participants */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#008C4A]" />
              <span>{isNepali ? "को-को सहभागी हुन सक्छन्?" : "Who Can Join the Training"}</span>
            </h3>
            <p className="text-xs text-slate-500 italic">
              {isNepali
                ? "योग्यता र भर्नाका आवश्यकताहरू सम्बन्धित संस्थागत र कानुनी व्यवस्था अनुसार हुन सक्छन्।"
                : "Eligibility and admission requirements may be subject to applicable institutional and regulatory requirements."}
            </p>
            <div className="space-y-2 pt-2">
              {(isNepali ? featuredTraining.targetParticipantsNe : featuredTraining.targetParticipants).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#008C4A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Potential Engagement Areas */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#1457A6]" />
              <span>{isNepali ? "सम्भावित कार्यक्षेत्रहरू" : "Potential Engagement Areas"}</span>
            </h3>
            <p className="text-xs text-slate-500 italic">
              {isNepali
                ? "यी क्षेत्रहरू सिकाइ सीप उपयोगका सम्भावित उदाहरण हुन्। यस तालिमले रोजगारी वा पदस्थापनाको ग्यारेन्टी गर्दैन।"
                : "Informational examples of field application. Paila Nepal does not guarantee employment or placement."}
            </p>
            <div className="space-y-2 pt-2">
              {(isNepali ? featuredTraining.engagementAreasNe : featuredTraining.engagementAreas).map((area, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#1457A6] shrink-0 mt-0.5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Training CTA Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1457A6] via-[#008C4A] to-[#1457A6] rounded-3xl p-8 sm:p-12 text-white text-center space-y-5 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            {isNepali ? "मनोसामाजिक सहयोगको यात्रा सुरु गर्नुहोस्" : "Start Your Journey in Psychosocial Support"}
          </h2>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto leading-relaxed">
            {isNepali
              ? "आफ्नो सीप अभिवृद्धि गर्न र समुदायलाई मद्दत पुर्‍याउन आगामी ब्याचको जानकारी लिनुहोस्।"
              : "Inquire about upcoming session timings, admission prerequisites, and curriculum guidance."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenTrainingModal}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              {isNepali ? "आवेदन / सोधपुछ फारम" : "Apply / Enquire"}
            </button>
            <button
              onClick={onOpenProspectus}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-white/20 hover:bg-white/30 border border-white/40 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isNepali ? "पाठ्यक्रम विवरण (Prospectus) हेर्नुहोस्" : "Download Course Prospectus"}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

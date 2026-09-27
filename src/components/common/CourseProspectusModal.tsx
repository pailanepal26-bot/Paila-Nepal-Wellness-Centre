import React, { useRef } from 'react';
import { X, Printer, Download, GraduationCap, CheckCircle, Clock, BookOpen, Award, FileText, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';
import { featuredTraining } from '../../data/initialData';
import { Logo } from './Logo';

interface CourseProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApplyModal: () => void;
}

export const CourseProspectusModal: React.FC<CourseProspectusModalProps> = ({
  isOpen,
  onClose,
  onOpenApplyModal
}) => {
  const { isNepali } = useLanguage();
  const { settings } = useAdmin();
  const printAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const content = `
================================================================================
PAILA NEPAL WELLNESS CENTRE (पाइला नेपाल वेलनेस सेन्टर)
COURSE PROSPECTUS & SYLLABUS OVERVIEW
================================================================================
Program Title: 6-Month Psychosocial Counselling Training
Curriculum Basis: Based on the CTEVT Psychosocial Counselor Curriculum
Duration: 6 Months | Total: 780 Hours | Field Practice: Supervised Practicum
Learning Model: Theory + Practical + Supervised Field Practicum

ORGANIZATION CONTACT & LOCATION:
Location: KC Bhawan, Nearby Lama Petrol Pump, Jorpati, Kathmandu, Nepal
Phone: ${settings.contactPhone1} / ${settings.contactPhone2}
Email: ${settings.contactEmail}

ADMISSION PREREQUISITES & ELIGIBILITY:
${featuredTraining.targetParticipants.map((p, idx) => `  ${idx + 1}. ${p}`).join('\n')}

CURRICULUM MODULES (16 CORE MODULES):
${featuredTraining.curriculumTopics.map((t, idx) => `  Module 0${idx + 1}: ${t.title}\n  - Competency: ${t.description}`).join('\n\n')}

EVALUATION CRITERIA:
- Formative Assessment & Internal Practical Demonstration: 40%
- Supervised Field Placement & Practicum Evaluation: 20%
- Comprehensive Summative Written & Viva Examination: 40%
- Mandatory Attendance Requirement: Minimum 80%

INSTITUTIONAL & REGULATORY NOTICE:
Eligibility and admission requirements may be subject to applicable institutional and regulatory requirements. This course is based on the CTEVT Psychosocial Counselor curriculum. Paila Nepal Wellness Centre presents this curriculum for capacity development; completion does not guarantee employment or institutional placement.
================================================================================
    `.trim();

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Paila_Nepal_Psychosocial_Counselling_Training_Prospectus.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:rounded-none">
        {/* Top Control Bar (Hidden during print) */}
        <div className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-[#55B8E8]" />
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Official Course Document
              </span>
              <h3 className="text-sm font-bold text-white">
                {isNepali ? "६-महिने मनोसामाजिक परामर्श तालिम पुस्तिका" : "6-Month Psychosocial Counselling Prospectus"}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Download syllabus document"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download Text</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close prospectus"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Prospectus Body (Printable Container) */}
        <div ref={printAreaRef} className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-800 bg-white print:p-8 print:space-y-6">
          {/* Header Letterhead */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Logo size="lg" />
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#008C4A]">
                  Capacity Development & Academic Division
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Paila Nepal Wellness Centre
                </h1>
                <p className="text-xs text-slate-600 font-medium font-['Noto_Sans_Devanagari',sans-serif]">
                  पाइला नेपाल वेलनेस सेन्टर • काठमाडौं, नेपाल
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-1 sm:text-right border-l-2 sm:border-l-0 sm:border-r-2 border-slate-200 pl-3 sm:pl-0 sm:pr-3">
              <p className="flex items-center sm:justify-end gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#1457A6]" />
                <span>KC Bhawan, Nearby Lama Petrol Pump, Jorpati</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#008C4A]" />
                <span>{settings.contactPhone1} / {settings.contactPhone2}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{settings.contactEmail}</span>
              </p>
            </div>
          </div>

          {/* Title Banner */}
          <div className="bg-[#ebf3fc] border border-[#1457A6]/20 rounded-2xl p-6 text-center space-y-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#1457A6] bg-white px-3 py-1 rounded-full border border-[#1457A6]/30 inline-block">
              Course Code: PNWC-PCC-780 • Professional Certificate
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              6-Month Psychosocial Counselling Training
            </h2>
            <p className="text-sm font-semibold text-[#008C4A]">
              Based on the CTEVT Psychosocial Counselor Curriculum
            </p>
            <p className="text-xs text-slate-600 max-w-2xl mx-auto italic">
              "Equipping frontline caregivers, educators, and counseling aspirants with competencies in active listening, empathy, crisis de-escalation, and community resilience."
            </p>
          </div>

          {/* Specifications Table */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Course Duration</span>
              <span className="text-base sm:text-lg font-black text-slate-900">6 Months</span>
              <span className="text-[10px] text-slate-500 block">Structured Cohort</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Instruction Hours</span>
              <span className="text-base sm:text-lg font-black text-[#1457A6]">780 Hours</span>
              <span className="text-[10px] text-slate-500 block">Theory & Practical</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Field Practice</span>
              <span className="text-base sm:text-lg font-black text-[#008C4A]">Supervised Practicum</span>
              <span className="text-[10px] text-slate-500 block">Supervised Fieldwork</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Delivery Mode</span>
              <span className="text-base sm:text-lg font-black text-slate-900">In-Person + Field</span>
              <span className="text-[10px] text-slate-500 block">Experiential Labs</span>
            </div>
          </div>

          {/* Target Participants & Eligibility */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#008C4A]" />
              <span>Target Participants & Eligibility Criteria</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
              {featuredTraining.targetParticipants.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="w-4 h-4 rounded-full bg-[#008C4A]/10 text-[#008C4A] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* All 16 Curriculum Modules Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1457A6]" />
                <span>Core Curriculum Modules (16 Modules / 780 Hours)</span>
              </h3>
              <span className="text-[11px] text-slate-500 font-medium">
                CTEVT Curriculum Standards
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {featuredTraining.curriculumTopics.map((topic, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#ebf3fc] text-[#1457A6]">
                      Module 0{idx + 1}
                    </span>
                    <span className="text-[10px] text-slate-400">Core Helping Competency</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs">
                    {topic.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment & Certification Scheme */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Assessment & Qualification Scheme</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">Internal Practical (40%)</span>
                <p className="text-[11px] text-slate-600">
                  Continuous role-play observations, case conceptualizations, peer counseling sessions, and reflective learning journals.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">Supervised Practicum (20%)</span>
                <p className="text-[11px] text-slate-600">
                  Field placement in partner schools, health posts, or community centers evaluated by on-site mentors.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">Comprehensive Exam (40%)</span>
                <p className="text-[11px] text-slate-600">
                  Final theoretical evaluation, oral viva voce, and ethical dilemma examination. Minimum passing grade: 60%.
                </p>
              </div>
            </div>
          </div>

          {/* Regulatory Notice & Ethics Disclaimer */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Regulatory and Institutional Clarification</span>
            </div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              {featuredTraining.disclaimer}
            </p>
            <p className="text-[11px] text-amber-800 leading-relaxed font-['Noto_Sans_Devanagari',sans-serif]">
              {featuredTraining.disclaimerNe}
            </p>
          </div>

          {/* Footer Sign-off (Official Document style) */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <p className="font-bold text-slate-700">Paila Nepal Wellness Centre</p>
              <p className="text-[11px]">Kathmandu, Nepal • Established 2026</p>
            </div>
            <div className="text-[11px] sm:text-right">
              <p>Document Ref: PNWC-SYLLABUS-2026/V1</p>
              <p>Healthy Mind • Prepared Community • Resilient Nepal</p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar (Hidden during print) */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 print:hidden">
          <div className="text-xs text-slate-600">
            <span className="font-bold text-slate-800">
              {settings.nextTrainingBatchEn}
            </span>
            <span className="mx-2 text-slate-300">|</span>
            <span>{settings.trainingFeeNoteEn}</span>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApplyModal();
              }}
              className="flex-1 sm:flex-initial px-5 py-2 text-xs font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Apply for This Training
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

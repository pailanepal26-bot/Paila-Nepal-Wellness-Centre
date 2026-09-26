import React, { useState } from 'react';
import { X, GraduationCap, Clock, Award, BookOpen, Printer, CheckCircle, FileText, Download } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';
import { featuredTraining } from '../../data/initialData';

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProspectus?: () => void;
}

export const TrainingModal: React.FC<TrainingModalProps> = ({ isOpen, onClose, onOpenProspectus }) => {
  const { isNepali } = useLanguage();
  const { settings } = useAdmin();
  const [activeTab, setActiveTab] = useState<'enquire' | 'overview'>('enquire');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualification: '+2 / Intermediate',
    background: 'Psychology / Social Work',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handlePrintBrochure = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1457A6] to-[#008C4A] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-white/20">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold">
                {isNepali ? featuredTraining.titleNe : featuredTraining.title}
              </h2>
              <p className="text-xs text-white/90">
                {isNepali ? featuredTraining.subtitleNe : featuredTraining.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('enquire')}
            className={`flex-1 py-3 px-4 text-center transition-colors cursor-pointer ${
              activeTab === 'enquire'
                ? 'bg-white text-[#1457A6] border-b-2 border-[#1457A6]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isNepali ? "भर्ना सोधपुछ / आवेदन" : "Course Inquiry & Application"}
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-3 px-4 text-center transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-white text-[#008C4A] border-b-2 border-[#008C4A]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isNepali ? "पाठ्यक्रम मुख्य बुँदाहरू" : "Curriculum & Details"}
          </button>
        </div>

        {/* Overview Tab Content */}
        {activeTab === 'overview' && (
          <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto text-xs sm:text-sm">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-[#ebf3fc] rounded-xl text-center">
                <span className="text-[11px] text-slate-500 block">Duration</span>
                <span className="font-bold text-[#1457A6] text-sm sm:text-base">6 Months</span>
              </div>
              <div className="p-3 bg-[#e6f7ef] rounded-xl text-center">
                <span className="text-[11px] text-slate-500 block">Total Training</span>
                <span className="font-bold text-[#008C4A] text-sm sm:text-base">780 Hours</span>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl text-center">
                <span className="text-[11px] text-slate-500 block">Field Practice</span>
                <span className="font-bold text-amber-700 text-sm sm:text-base">160 Hrs OJT</span>
              </div>
              <div className="p-3 bg-indigo-50 rounded-xl text-center">
                <span className="text-[11px] text-slate-500 block">Learning Model</span>
                <span className="font-bold text-indigo-700 text-xs sm:text-xs">Theory+Prac+OJT</span>
              </div>
            </div>

            {/* Curriculum Breakdown */}
            <div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">
                {isNepali ? "मुख्य पाठ्यक्रम विषयहरू (१६ मोड्युलहरू)" : "Core Curriculum Topics (16 Modules)"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {featuredTraining.curriculumTopics.map((topic, i) => (
                  <div key={i} className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
                    <p className="font-semibold text-slate-800">
                      {i + 1}. {isNepali ? topic.titleNe : topic.title}
                    </p>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      {isNepali ? topic.descriptionNe : topic.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Participants */}
            <div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">
                {isNepali ? "को सहभागी हुन सक्छन्?" : "Who Can Join?"}
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs">
                {(isNepali ? featuredTraining.targetParticipantsNe : featuredTraining.targetParticipants).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Regulatory Disclaimer */}
            <div className="p-3.5 bg-slate-100 rounded-xl text-slate-600 text-xs border border-slate-200 space-y-1">
              <p className="font-semibold text-slate-700">Official Notice & Scope:</p>
              <p>{isNepali ? featuredTraining.disclaimerNe : featuredTraining.disclaimer}</p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {onOpenProspectus && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenProspectus();
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1457A6] bg-[#ebf3fc] hover:bg-[#dce9f8] rounded-xl transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isNepali ? "पूर्ण पुस्तिका (Prospectus)" : "Download Full Prospectus"}</span>
                  </button>
                )}
                <button
                  onClick={handlePrintBrochure}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{isNepali ? "छाप्नुहोस्" : "Print"}</span>
                </button>
              </div>

              <button
                onClick={() => setActiveTab('enquire')}
                className="px-5 py-2 text-xs font-bold text-white bg-[#1457A6] hover:bg-[#0f4280] rounded-xl transition-colors cursor-pointer"
              >
                {isNepali ? "अहिले सोधपुछ गर्नुहोस्" : "Inquire for Next Batch"}
              </button>
            </div>
          </div>
        )}

        {/* Enquire Tab Content */}
        {activeTab === 'enquire' && (
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {isNepali ? "सोधपुछ सफलतापूर्वक पठाइयो" : "Inquiry Submitted Successfully"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  {isNepali
                    ? "हाम्रो प्रशिक्षण संयोजकले आगामी समूह, मिति र भर्ना प्रक्रिया बारे चाँडै जानकारी गराउनुहुनेछ।"
                    : "Our training coordinator will contact you with batch dates, schedules, and enrollment details."}
                </p>
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 max-w-sm mx-auto border border-slate-100 text-left">
                  <p className="font-semibold text-slate-700">Direct Office Contact:</p>
                  <p>Phone: {settings.contactPhone1} / {settings.contactPhone2}</p>
                  <p>Email: {settings.contactEmail}</p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg cursor-pointer"
                >
                  {isNepali ? "सम्पन्न" : "Close"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="p-3 bg-[#ebf3fc] rounded-xl text-xs text-[#1457A6] border border-[#1457A6]/20">
                  <p className="font-semibold">
                    {isNepali ? settings.nextTrainingBatchNe : settings.nextTrainingBatchEn}
                  </p>
                  <p className="text-slate-600 mt-0.5">
                    {isNepali ? settings.trainingFeeNoteNe : settings.trainingFeeNoteEn}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      {isNepali ? "पूरा नाम *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Thapa"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      {isNepali ? "सम्पर्क फोन / ह्वाट्सएप *" : "Phone / WhatsApp *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98XXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      {isNepali ? "इमेल ठेगाना" : "Email Address"}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      {isNepali ? "शैक्षिक योग्यता" : "Academic Qualification"}
                    </label>
                    <select
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6] bg-white"
                    >
                      <option value="+2 / Intermediate">+2 / Intermediate</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Other">Other Certificate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    {isNepali ? "तपाईंको पृष्ठभूमि / पेशा" : "Current Background / Profession"}
                  </label>
                  <select
                    value={formData.background}
                    onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6] bg-white"
                  >
                    <option value="Psychology / Social Work">Psychology / Social Work Student</option>
                    <option value="School Teacher / Educator">School Teacher / Educator</option>
                    <option value="Health Worker / Medical Professional">Health Worker / Medical Field</option>
                    <option value="Community Worker / NGO Practitioner">Community Worker / Social Field</option>
                    <option value="Disaster / Emergency Volunteer">Disaster / Emergency Volunteer</option>
                    <option value="General Professional / Career Changer">General Professional / Interested Citizen</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    {isNepali ? "कुनै प्रश्न वा जिज्ञासा?" : "Any specific questions or schedule preference?"}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isNepali ? "थप जिज्ञासा यहाँ लेख्नुहोस्..." : "Inquire about batch schedules, syllabus details, or payment terms..."}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActiveTab('overview')}
                    className="text-xs text-[#1457A6] hover:underline font-medium cursor-pointer"
                  >
                    {isNepali ? "पाठ्यक्रम मोड्युलहरू हेर्नुहोस् →" : "View Course Modules & Hours →"}
                  </button>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                    >
                      {isNepali ? "रद्द" : "Cancel"}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-semibold text-white bg-[#1457A6] hover:bg-[#0f4280] rounded-lg shadow-sm cursor-pointer"
                    >
                      {isNepali ? "सोधपुछ पठाउनुहोस्" : "Submit Inquiry"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

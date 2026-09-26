import React, { useState } from 'react';
import { User, GraduationCap, Award, Mail, Phone, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { LeadershipMember } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface LeadershipCardProps {
  member: LeadershipMember;
  onContactClick: () => void;
}

export const LeadershipCard: React.FC<LeadershipCardProps> = ({ member, onContactClick }) => {
  const { isNepali } = useLanguage();
  const [showDetailModal, setShowDetailModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
        {/* Subtle accent corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#008C4A]/10 to-transparent rounded-bl-full pointer-events-none" />

        <div className="space-y-4">
          {/* Header & Avatar Motif */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1457A6] to-[#008C4A] text-white flex items-center justify-center shrink-0 shadow-sm font-bold text-xl">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>

            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
                  {isNepali ? member.roleNe : member.role}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-[11px] text-slate-500 font-medium">Verified Profile</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1457A6] transition-colors">
                {isNepali ? member.nameNe : member.name}
              </h3>
              <p className="text-xs font-semibold text-[#1457A6]">
                {isNepali ? member.titlesNe.join(' / ') : member.titles.join(' / ')}
              </p>
            </div>
          </div>

          {/* Additional Professional Titles if available */}
          {member.additionalTitles && (
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                Professional Designations
              </span>
              <p className="font-medium text-slate-800">
                {isNepali && member.additionalTitlesNe ? member.additionalTitlesNe : member.additionalTitles}
              </p>
            </div>
          )}

          {/* Academic Background */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#008C4A]" />
              <span>{isNepali ? "शैक्षिक तथा व्यावसायिक पृष्ठभूमि" : "Academic & Professional Background"}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {(isNepali ? member.academicBackgroundNe : member.academicBackground).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#008C4A] font-bold mt-0.5">•</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Short Bio */}
          <p className="text-xs text-slate-600 leading-relaxed pt-1">
            {isNepali ? member.bioNe : member.bio}
          </p>

          {/* Mandatory notice */}
          <div className="pt-2 text-[11px] text-slate-400 italic border-t border-slate-100">
            {isNepali ? member.noticeNe : member.notice}
          </div>
        </div>

        {/* Buttons: [View Profile] [Contact] */}
        <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-3">
          <button
            onClick={() => setShowDetailModal(true)}
            className="flex-1 py-2 px-3 text-xs font-semibold text-[#1457A6] bg-[#ebf3fc] hover:bg-[#dce9f8] rounded-lg transition-colors text-center cursor-pointer"
          >
            {isNepali ? "विवरण हेर्नुहोस्" : "View Profile"}
          </button>
          <button
            onClick={onContactClick}
            className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg transition-colors text-center cursor-pointer shadow-xs"
          >
            {isNepali ? "सम्पर्क गर्नुहोस्" : "Contact"}
          </button>
        </div>
      </div>

      {/* Profile Detail Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-gradient-to-r from-[#1457A6] to-[#008C4A] text-white p-6 flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
                  {isNepali ? member.roleNe : member.role}
                </span>
                <h3 className="text-2xl font-bold">
                  {isNepali ? member.nameNe : member.name}
                </h3>
                <p className="text-xs text-white/90">
                  {isNepali ? member.titlesNe.join(' • ') : member.titles.join(' • ')}
                </p>
              </div>
              <button
                onClick={() => setShowDetailModal(false)}
                className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-700">
              {member.additionalTitles && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                    Professional Designations
                  </span>
                  <p className="font-semibold text-slate-800">
                    {isNepali && member.additionalTitlesNe ? member.additionalTitlesNe : member.additionalTitles}
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  {isNepali ? "शैक्षिक तथा व्यावसायिक योग्यताहरू" : "Verified Academic & Professional Credentials"}
                </h4>
                <div className="space-y-1.5">
                  {(isNepali ? member.academicBackgroundNe : member.academicBackground).map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-[#008C4A] shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Professional Focus
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {isNepali ? member.bioNe : member.bio}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 italic">
                {isNepali ? member.noticeNe : member.notice}
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    onContactClick();
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg cursor-pointer"
                >
                  Contact Centre
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

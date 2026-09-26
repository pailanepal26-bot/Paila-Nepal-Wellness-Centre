import React, { useState } from 'react';
import { X, Shield, Lock, FileText, Scale, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export type LegalTab = 'privacy' | 'terms' | 'ethics' | 'confidentiality' | 'disclaimer';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialTab = 'privacy' }) => {
  const { isNepali } = useLanguage();
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-emerald-400" />
            <div>
              <h2 className="text-base font-bold">
                Paila Nepal Wellness Centre – Policies & Ethical Governance
              </h2>
              <p className="text-xs text-slate-400">
                Registered at 2026 · Kathmandu, Nepal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-3 px-4 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-white text-[#008C4A] border-b-2 border-[#008C4A]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3 px-4 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white text-[#008C4A] border-b-2 border-[#008C4A]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Terms of Use
          </button>
          <button
            onClick={() => setActiveTab('ethics')}
            className={`py-3 px-4 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'ethics'
                ? 'bg-white text-[#008C4A] border-b-2 border-[#008C4A]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Ethical Practice
          </button>
          <button
            onClick={() => setActiveTab('confidentiality')}
            className={`py-3 px-4 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'confidentiality'
                ? 'bg-white text-[#008C4A] border-b-2 border-[#008C4A]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Confidentiality
          </button>
          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`py-3 px-4 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'disclaimer'
                ? 'bg-white text-[#008C4A] border-b-2 border-[#008C4A]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Official Disclaimer
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">Privacy Policy</h3>
              <p>
                Paila Nepal Wellness Centre (पाइला नेपाल वेलनेस सेन्टर) is firmly committed to safeguarding the privacy and confidentiality of individuals interacting with our organization, website, and services.
              </p>
              <h4 className="font-semibold text-slate-900">1. Information Collection & Minimal Data Principle</h4>
              <p>
                We do not collect sensitive clinical mental-health records or diagnostic details through online general forms. When you submit an inquiry or support request, we collect only necessary contact details (such as your name, phone number, email address, and preferred contact time) required to respond to your communication.
              </p>
              <h4 className="font-semibold text-slate-900">2. Confidential Handling of Information</h4>
              <p>
                Information submitted through this website is handled with strict confidentiality in accordance with professional ethical codes and organizational policies. We do not sell, rent, or trade your personal information with external commercial entities.
              </p>
              <h4 className="font-semibold text-slate-900">3. Inquiries & Data Rights</h4>
              <p>
                You may contact us at <span className="font-semibold text-[#1457A6]">pailanepal26@gmail.com</span> at any time to verify, update, or request the deletion of your general contact inquiry records.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">Terms of Use</h3>
              <p>
                By accessing and utilizing the website of Paila Nepal Wellness Centre, you agree to these Terms of Use.
              </p>
              <h4 className="font-semibold text-slate-900">1. Educational & Non-Emergency Scope</h4>
              <p>
                Content presented on this website is for general educational, psychosocial awareness, and community resilience purposes only. The website does not provide automated clinical diagnosis, crisis intervention hotline services, or immediate emergency dispatch.
              </p>
              <h4 className="font-semibold text-slate-900">2. Service Scope & Availability</h4>
              <p>
                Counselling, psychosocial support, and training services are subject to professional scope, organizational capacity, schedule availability, and relevant ethical regulations.
              </p>
              <h4 className="font-semibold text-slate-900">3. Integrity of Claims</h4>
              <p>
                All informational content and educational materials reflect evidence-informed practices. Paila Nepal Wellness Centre makes no unauthorized commercial warranties.
              </p>
            </div>
          )}

          {activeTab === 'ethics' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">Ethical Practice Standards</h3>
              <p>
                Our team operates within strict ethical guidelines rooted in psychological and psychosocial helping frameworks:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong className="text-slate-900">Dignity & Non-Discrimination:</strong> We uphold unconditional positive regard, cultural sensitivity, and respect for every individual regardless of ethnicity, gender, caste, religion, or background.
                </li>
                <li>
                  <strong className="text-slate-900">Competence & Scope of Practice:</strong> Professionals and trainers practice strictly within their verifiable academic qualifications, competencies, and ethical boundaries. Referrals are initiated whenever specialized clinical or medical intervention is required.
                </li>
                <li>
                  <strong className="text-slate-900">Client Autonomy & Informed Consent:</strong> Clients and trainees are active decision-makers in their journey. Participation in counselling and training is voluntary with clear understanding of processes.
                </li>
                <li>
                  <strong className="text-slate-900">Zero Commercial Exploitation:</strong> Paila Nepal Wellness Centre does not exploit vulnerabilities for commercial gain, sensationalize trauma, or misrepresent outcomes.
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'confidentiality' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">Confidentiality Protocol</h3>
              <p>
                Confidentiality is the cornerstone of psychological and psychosocial support:
              </p>
              <p>
                All information shared during one-on-one sessions, support conversations, and supervisory practice is held in strict professional trust.
              </p>
              <h4 className="font-semibold text-slate-900">Ethical & Legal Exceptions to Confidentiality</h4>
              <p>
                In alignment with worldwide ethical standards and Nepalese legal responsibilities, confidentiality may only be broken under the following critical circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                <li>There is imminent and serious danger of self-harm or loss of life.</li>
                <li>There is imminent risk of harm or violence toward another person.</li>
                <li>There is active disclosure of child abuse, neglect, or harm to a vulnerable minor.</li>
                <li>A binding order of law is issued by an authorized court of jurisdiction.</li>
              </ul>
              <p className="text-xs text-slate-500 italic mt-2">
                Even in such instances, disclosures are made strictly to relevant safety authorities and limited solely to what is essential to preserve safety.
              </p>
            </div>
          )}

          {activeTab === 'disclaimer' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">Official Organizational Disclaimer</h3>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2 text-slate-800">
                <p className="font-semibold text-amber-900 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>Important Boundary & Scope Notice</span>
                </p>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Paila Nepal Wellness Centre provides information, psychosocial support and related services within its professional scope. Website content does not replace emergency medical, psychiatric or other urgent services. In an emergency or situation of immediate danger, contact the appropriate local emergency or health service.
                </p>
              </div>

              <h4 className="font-semibold text-slate-900">Institutional & Training Disclaimers</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Curriculum Reference:</strong> The 6-Month Psychosocial Counselling Training is based on the CTEVT Psychosocial Counselor Curriculum. Paila Nepal Wellness Centre does not state or imply CTEVT affiliation, approval, or licensing unless officially authorized.
                </li>
                <li>
                  <strong>No Employment Guarantee:</strong> Training programs are designed for knowledge acquisition and practical capacity development; completion does not guarantee employment, institutional placement, or civil service appointment.
                </li>
                <li>
                  <strong>Accreditation & Approvals:</strong> Paila Nepal Wellness Centre does not invent or claim unverified government approvals, CTEVT affiliations, donor endorsements, or clinical hospital status.
                </li>
                <li>
                  <strong>Verified Leadership:</strong> All professional titles and academic credentials for Sunil Lama (Founder) and Sharada Sunuwar (Co-Founder) are presented exactly as provided by the organization.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg transition-colors cursor-pointer"
          >
            {isNepali ? "बुझेँ / बन्द गर्नुहोस्" : "Understood / Close"}
          </button>
        </div>
      </div>
    </div>
  );
};

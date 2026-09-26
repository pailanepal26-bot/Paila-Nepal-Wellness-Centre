import React, { useState } from 'react';
import {
  Heart,
  Users,
  Handshake,
  GraduationCap,
  CheckCircle,
  Building,
  School,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface GetInvolvedPageProps {
  onOpenTrainingModal: () => void;
}

export const GetInvolvedPage: React.FC<GetInvolvedPageProps> = ({ onOpenTrainingModal }) => {
  const { isNepali } = useLanguage();
  const [activeTab, setActiveTab] = useState<'volunteer' | 'partner' | 'train'>('volunteer');

  // Volunteer form state
  const [volData, setVolData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    interest: 'Psychological First Aid & Community Readiness',
    availability: 'Weekends / Occasional campaigns',
    consent: false,
  });
  const [volSuccess, setVolSuccess] = useState(false);

  // Partner form state
  const [partnerData, setPartnerData] = useState({
    orgName: '',
    contactPerson: '',
    email: '',
    phone: '',
    orgType: 'School / Academic Institution',
    scope: '',
    consent: false,
  });
  const [partnerSuccess, setPartnerSuccess] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volData.name || !volData.phone || !volData.consent) return;
    setVolSuccess(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerData.orgName || !partnerData.contactPerson || !partnerData.consent) return;
    setPartnerSuccess(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 pb-24">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
          {isNepali ? "सामुदायिक सहकार्य तथा सहभागिता" : "Community Collaboration"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? "हामीसँग जोडिनुहोस्" : "Get Involved With Paila Nepal"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "स्वस्थ मन र उत्थानशील समुदाय निर्माणमा तपाईंको सीप, समय वा संस्थागत सहकार्यले ठूलो परिवर्तन ल्याउन सक्छ।"
            : "Support healthier, safer, and more resilient communities across Nepal. Whether as an active volunteer, institutional partner, or enrolled learner, your participation creates meaningful impact."}
        </p>
      </section>

      {/* 2. Three Pathway Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pathway 1 */}
          <button
            onClick={() => setActiveTab('volunteer')}
            className={`p-6 rounded-3xl text-left border transition-all cursor-pointer ${
              activeTab === 'volunteer'
                ? 'bg-white border-[#008C4A] shadow-md ring-2 ring-[#008C4A]/20'
                : 'bg-slate-50 border-slate-200 hover:bg-white'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-[#e6f7ef] text-[#008C4A] flex items-center justify-center font-bold mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">
              {isNepali ? "स्वयंसेवक बन्नुहोस्" : "Become a Volunteer"}
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {isNepali
                ? "“स्वस्थ र थप उत्थानशील समुदायलाई सहयोग गर्नुहोस्।”"
                : "“Support healthier and more resilient communities through outreach and PFA.”"}
            </p>
          </button>

          {/* Pathway 2 */}
          <button
            onClick={() => setActiveTab('partner')}
            className={`p-6 rounded-3xl text-left border transition-all cursor-pointer ${
              activeTab === 'partner'
                ? 'bg-white border-[#1457A6] shadow-md ring-2 ring-[#1457A6]/20'
                : 'bg-slate-50 border-slate-200 hover:bg-white'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-[#ebf3fc] text-[#1457A6] flex items-center justify-center font-bold mb-4">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">
              {isNepali ? "हामीसँग साझेदारी गर्नुहोस्" : "Partner With Us"}
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              For schools, community groups, academic institutions, and development partners.
            </p>
          </button>

          {/* Pathway 3 */}
          <button
            onClick={() => setActiveTab('train')}
            className={`p-6 rounded-3xl text-left border transition-all cursor-pointer ${
              activeTab === 'train'
                ? 'bg-white border-amber-600 shadow-md ring-2 ring-amber-600/20'
                : 'bg-slate-50 border-slate-200 hover:bg-white'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">
              {isNepali ? "हामीसँग तालिम लिनुहोस्" : "Train With Us"}
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              For students, professionals, teachers, social workers, and community responders.
            </p>
          </button>
        </div>
      </section>

      {/* 3. Detailed Interactive Content per selected tab */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Volunteer Tab */}
        {activeTab === 'volunteer' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
                Volunteer Mobilization
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                {isNepali ? "स्वयंसेवक आवेदन फारम" : "Community Volunteer Expression of Interest"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Our volunteers receive orientation on empathetic communication, Psychological First Aid (PFA), and community disaster risk awareness.
              </p>
            </div>

            {volSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {isNepali ? "आवेदन प्राप्त भयो" : "Volunteer Interest Registered"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for your generous dedication. Our volunteer coordinator will connect with you ahead of the upcoming orientation session.
                </p>
                <button
                  onClick={() => setVolSuccess(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#008C4A] bg-[#e6f7ef] rounded-lg mt-2 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={volData.name}
                      onChange={(e) => setVolData({ ...volData, name: e.target.value })}
                      placeholder="e.g. Bipin Shrestha"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Phone Number / WhatsApp *</label>
                    <input
                      type="text"
                      required
                      value={volData.phone}
                      onChange={(e) => setVolData({ ...volData, phone: e.target.value })}
                      placeholder="98XXXXXXXX"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={volData.email}
                      onChange={(e) => setVolData({ ...volData, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Current Location / Ward</label>
                    <input
                      type="text"
                      value={volData.location}
                      onChange={(e) => setVolData({ ...volData, location: e.target.value })}
                      placeholder="e.g. Jorpati / Kathmandu / Other District"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Primary Area of Interest</label>
                  <select
                    value={volData.interest}
                    onChange={(e) => setVolData({ ...volData, interest: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] bg-white text-slate-800"
                  >
                    <option value="Psychological First Aid & Community Readiness">Psychological First Aid (PFA) & Crises</option>
                    <option value="Community Awareness Campaigns">Community Mental Health Awareness Campaigns</option>
                    <option value="School Mental Health & Child Support">School Mental Health & Child Activities</option>
                    <option value="Disaster Preparedness Simulations">Disaster Preparedness Drills & Simulations</option>
                    <option value="Logistics, Event & Administrative Support">Event Coordination & Communication</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      required
                      checked={volData.consent}
                      onChange={(e) => setVolData({ ...volData, consent: e.target.checked })}
                      className="mt-0.5 rounded text-[#008C4A] focus:ring-[#008C4A]"
                    />
                    <span>
                      I agree to the organization's privacy and volunteer communication terms.
                    </span>
                  </label>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Submit Volunteer Interest
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Partner Tab */}
        {activeTab === 'partner' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1457A6]">
                Institutional Partnership
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                {isNepali ? "संस्थागत साझेदारी सोधपुछ" : "Partnership Inquiry"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                We collaborate with schools, colleges, health facilities, municipal wards, and development partners on mental health programs and disaster drills.
              </p>
            </div>

            {partnerSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-blue-100 text-[#1457A6] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {isNepali ? "साझेदारी विवरण प्राप्त भयो" : "Partnership Inquiry Submitted"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for proposing collaboration. Our leadership team will review the scope and schedule an introductory dialogue.
                </p>
                <button
                  onClick={() => setPartnerSuccess(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#1457A6] bg-[#ebf3fc] rounded-lg mt-2 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Organization / School Name *</label>
                    <input
                      type="text"
                      required
                      value={partnerData.orgName}
                      onChange={(e) => setPartnerData({ ...partnerData, orgName: e.target.value })}
                      placeholder="e.g. Kathmandu Secondary School"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1457A6] text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Contact Person & Designation *</label>
                    <input
                      type="text"
                      required
                      value={partnerData.contactPerson}
                      onChange={(e) => setPartnerData({ ...partnerData, contactPerson: e.target.value })}
                      placeholder="e.g. Sita Karki, Principal"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1457A6] text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      value={partnerData.email}
                      onChange={(e) => setPartnerData({ ...partnerData, email: e.target.value })}
                      placeholder="info@org.org.np"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1457A6] text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="text"
                      required
                      value={partnerData.phone}
                      onChange={(e) => setPartnerData({ ...partnerData, phone: e.target.value })}
                      placeholder="98XXXXXXXX / 01XXXXXXX"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1457A6] text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Organization Category</label>
                  <select
                    value={partnerData.orgType}
                    onChange={(e) => setPartnerData({ ...partnerData, orgType: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1457A6] bg-white text-slate-800"
                  >
                    <option value="School / Academic Institution">School / College / Academic Institution</option>
                    <option value="Community Organization / Ward Committee">Community Organization / Ward Committee</option>
                    <option value="Healthcare / Wellness Provider">Healthcare / Clinic / Rehabilitation</option>
                    <option value="Local Development Partner / NGO">Local Development Partner / Civil Society</option>
                    <option value="Other">Other Organization</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Proposed Scope of Collaboration</label>
                  <textarea
                    rows={3}
                    value={partnerData.scope}
                    onChange={(e) => setPartnerData({ ...partnerData, scope: e.target.value })}
                    placeholder="Briefly describe the desired program, workshop, or community initiative..."
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1457A6] text-slate-800"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      required
                      checked={partnerData.consent}
                      onChange={(e) => setPartnerData({ ...partnerData, consent: e.target.checked })}
                      className="mt-0.5 rounded text-[#1457A6] focus:ring-[#1457A6]"
                    />
                    <span>
                      I agree to organizational communication and privacy guidelines.
                    </span>
                  </label>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1457A6] hover:bg-[#0f4280] rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Submit Partnership Proposal
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Train With Us Tab */}
        {activeTab === 'train' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mx-auto">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900">
                Train With Paila Nepal Wellness Centre
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you are a student of psychology or social work, a teacher enhancing emotional support for pupils, or a frontline worker seeking crisis preparedness skills, our training courses provide hands-on competence.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto space-y-1 text-left">
              <p className="font-bold text-slate-800">Featured Course:</p>
              <p className="font-semibold text-[#1457A6]">6-Month Psychosocial Counselling Training</p>
              <p className="text-[11px] text-slate-500">780 Hours total · 160 Hours OJT · CTEVT Curriculum based</p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrainingModal}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Inquire or Apply for Next Batch
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

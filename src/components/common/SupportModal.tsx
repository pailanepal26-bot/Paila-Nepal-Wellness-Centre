import React, { useState } from 'react';
import { X, HeartHandshake, AlertTriangle, Phone, Mail, Calendar, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSupportType?: string;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  defaultSupportType = 'Individual Counselling',
}) => {
  const { t, isNepali } = useLanguage();
  const { settings } = useAdmin();

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    preferredMethod: 'Phone Call',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    supportType: defaultSupportType,
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.consent) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      contact: '',
      preferredMethod: 'Phone Call',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      supportType: 'Individual Counselling',
      consent: false,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#008C4A] to-[#1457A6] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-white/20 text-white">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">
                {isNepali ? "सहयोग तथा परामर्श अनुरोध" : "Request Support & Information"}
              </h2>
              <p className="text-xs text-white/80">
                Paila Nepal Wellness Centre · Confidential & Professional
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

        {/* Emergency Safeguard Warning */}
        <div className="bg-[#fff9db] border-b border-[#ffe066] p-4 text-xs text-[#5c3e04] flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-amber-900">
              {isNepali ? "आपत्कालीन सूचना (Emergency Notice):" : "Emergency Disclaimer & Non-Medical Notice:"}
            </p>
            <p className="leading-relaxed">
              {isNepali
                ? "कृपया यस फारम मार्फत आपत्कालीन चिकित्सा वा आत्महत्या सम्बन्धी जानकारी नपठाउनुहोस्। यदि तपाईं वा कोही तत्काल जोखिममा हुनुहुन्छ भने, तुरुन्त नजिकको स्वास्थ्य संस्था वा आपत्कालीन सेवामा सम्पर्क गर्नुहोस्।"
                : "Please do not submit emergency medical or life-threatening information through this form. If you or someone else is in immediate danger or requires urgent medical assistance, contact the appropriate local emergency or health service."}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">
              {isNepali ? "अनुरोध प्राप्त भयो" : "Request Received"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              {isNepali
                ? "हाम्रो टोलीले तपाईंको गोपनीयताको पूर्ण सम्मान गर्दै प्रदान गरिएको सम्पर्क माध्यम मार्फत सम्पर्क गर्नेछ।"
                : "Thank you for reaching out. Our team will review your request confidentially and connect with you using your preferred contact method."}
            </p>
            <div className="pt-2 p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1 text-left max-w-sm mx-auto border border-slate-100">
              <p className="font-semibold text-slate-700">Need faster response during office hours?</p>
              <p>Call or WhatsApp us directly at: <span className="font-bold text-[#1457A6]">{settings.contactPhone1}</span></p>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 text-sm font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg transition-colors cursor-pointer"
            >
              {isNepali ? "बन्द गर्नुहोस्" : "Done"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block font-medium text-slate-700 mb-1">
                {isNepali ? "तपाईंको पूरा नाम *" : "Full Name *"}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={isNepali ? "नाम लेख्नुहोस्" : "e.g., Anjali Sharma"}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C4A] focus:border-transparent text-slate-800"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">
                {isNepali ? "सम्पर्क नम्बर वा इमेल *" : "Phone Number or Email *"}
              </label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder={isNepali ? "फोन वा इमेल" : "e.g., 98XXXXXXXX or email@domain.com"}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C4A] focus:border-transparent text-slate-800"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  {isNepali ? "रुचाइएको सम्पर्क माध्यम" : "Preferred Contact Method"}
                </label>
                <select
                  value={formData.preferredMethod}
                  onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C4A] text-slate-800 bg-white"
                >
                  <option value="Phone Call">Phone Call</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Viber">Viber</option>
                  <option value="Email">Email</option>
                  <option value="In-person Visit">In-person Visit (Kathmandu)</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  {isNepali ? "सहयोगको प्रकार" : "Type of Support"}
                </label>
                <select
                  value={formData.supportType}
                  onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C4A] text-slate-800 bg-white"
                >
                  <option value="Individual Counselling">Individual Counselling</option>
                  <option value="Family Counselling">Family Counselling</option>
                  <option value="Child & Adolescent Support">Child & Adolescent Support</option>
                  <option value="Stress & Emotional Wellbeing">Stress & Emotional Wellbeing</option>
                  <option value="Grief & Loss Support">Grief & Loss Support</option>
                  <option value="Psychological First Aid">Psychological First Aid</option>
                  <option value="General Inquiry">General Psychosocial Inquiry</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  {isNepali ? "अनुकूल मिति (ऐच्छिक)" : "Preferred Date (Optional)"}
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C4A] text-slate-800 bg-white"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  {isNepali ? "अनुकूल समय (ऐच्छिक)" : "Preferred Time (Optional)"}
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C4A] text-slate-800 bg-white"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Consent check */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded border-slate-300 text-[#008C4A] focus:ring-[#008C4A]"
                />
                <span>
                  {isNepali
                    ? "म संस्थाको गोपनीयता र सञ्चार सर्तहरूमा सहमत छु। (हामी व्यक्तिगत मानसिक स्वास्थ्य विवरण फारम मार्फत संकलन गर्दैनौं।)"
                    : "I agree to the organization's privacy and communication terms. (We do not collect unnecessary sensitive mental health details through online forms.)"}
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                {t.cta.close}
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg shadow-sm transition-all cursor-pointer"
              >
                {isNepali ? "अनुरोध पठाउनुहोस्" : "Submit Request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

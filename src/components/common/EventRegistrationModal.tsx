import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle, Clock, Users, Send, AlertCircle } from 'lucide-react';
import { PailaEvent } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface EventRegistrationModalProps {
  event: PailaEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventRegistrationModal: React.FC<EventRegistrationModalProps> = ({
  event,
  isOpen,
  onClose
}) => {
  const { isNepali } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [mode, setMode] = useState<'in-person' | 'online'>('in-person');
  const [specialNote, setSpecialNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setOrganization('');
    setSpecialNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#1457A6] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">
              {isNepali ? "सहभागिता दर्ता" : "Event Participation Registration"}
            </span>
            <h3 className="text-base font-bold line-clamp-1">
              {isNepali ? event.titleNe : event.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 bg-emerald-100 text-[#008C4A] rounded-2xl flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-slate-900">
                {isNepali ? "दर्ता सफल भयो!" : "Registration Confirmed!"}
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                {isNepali
                  ? "तपाईंको सहभागिता अनुरोध प्राप्त भएको छ। कार्यक्रम विवरण र समय सम्बन्धी जानकारी तपाईंको फोन/इमेलमा पठाइनेछ।"
                  : "Thank you for registering. Our team has recorded your details and will send session confirmations and logistics prior to the event."}
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-2">
              <div className="flex items-center justify-between font-semibold text-slate-800 border-b border-slate-200 pb-1.5">
                <span>{isNepali ? "सहभागीको नाम:" : "Participant:"}</span>
                <span>{fullName}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>{isNepali ? "मिति:" : "Date:"}</span>
                <span>{isNepali ? event.dateNe : event.date}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>{isNepali ? "स्थान:" : "Venue:"}</span>
                <span>{isNepali ? event.locationNe : event.location}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>{isNepali ? "सहभागिता माध्यम:" : "Mode:"}</span>
                <span className="capitalize font-semibold text-[#1457A6]">{mode}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 bg-[#008C4A] hover:bg-[#00723b] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              {isNepali ? "सम्पन्न भयो" : "Done"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
            {/* Event Summary Box */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="w-3.5 h-3.5 text-[#1457A6]" />
                <span>{isNepali ? event.dateNe : event.date} ({isNepali ? event.timeNe : event.time})</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-[#008C4A]" />
                <span>{isNepali ? event.locationNe : event.location}</span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-[11px]">
                <span className="text-slate-500 font-medium">
                  {isNepali ? event.capacityNe : event.capacity}
                </span>
                <span className="text-[#008C4A] font-bold">
                  {isNepali ? event.feeNoteNe : event.feeNote}
                </span>
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isNepali ? "पूरा नाम *" : "Full Name *"}
              </label>
              <input
                type="text"
                required
                placeholder={isNepali ? "तपाईंको नाम" : "Your full name"}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isNepali ? "सम्पर्क नम्बर / ह्वाट्सएप *" : "Phone / WhatsApp *"}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+977-98..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isNepali ? "इमेल ठेगाना" : "Email Address"}
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isNepali ? "विद्यालय / संस्था / पेशा" : "Institution / School / Organization"}
              </label>
              <input
                type="text"
                placeholder={isNepali ? "उदा: शिक्षक, विद्यार्थी, स्वयंसेवक" : "e.g. Teacher, Student, Social Worker"}
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full p-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isNepali ? "सहभागिता माध्यम" : "Preferred Attendance Mode"}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMode('in-person')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-center cursor-pointer transition-colors ${
                    mode === 'in-person'
                      ? 'border-[#008C4A] bg-[#e6f7ef] text-[#008C4A]'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {isNepali ? "प्रत्यक्ष (In-Person) जोरपाटी" : "In-Person (Jorpati)"}
                </button>
                <button
                  type="button"
                  onClick={() => setMode('online')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-center cursor-pointer transition-colors ${
                    mode === 'online'
                      ? 'border-[#1457A6] bg-[#ebf3fc] text-[#1457A6]'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {isNepali ? "अनलाइन (यदि उपलब्ध भए)" : "Online / Hybrid"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isNepali ? "थप प्रश्न वा जानकारी (ऐच्छिक)" : "Questions / Special Requirements (Optional)"}
              </label>
              <textarea
                rows={2}
                placeholder={isNepali ? "कुनै विशेष आवश्यकता वा जिज्ञासा..." : "Any questions for the facilitators..."}
                value={specialNote}
                onChange={(e) => setSpecialNote(e.target.value)}
                className="w-full p-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
              >
                {isNepali ? "रद्द गर्नुहोस्" : "Cancel"}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isNepali ? "दर्ता गर्नुहोस्" : "Confirm Registration"}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

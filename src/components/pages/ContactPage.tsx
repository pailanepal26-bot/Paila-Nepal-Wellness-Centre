import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  ExternalLink,
  MessageCircle,
  PhoneCall,
  CheckCircle,
  AlertCircle,
  Compass,
  Navigation
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';

export const ContactPage: React.FC = () => {
  const { t, isNepali } = useLanguage();
  const { settings } = useAdmin();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    reason: 'General Inquiry',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.consent) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      reason: 'General Inquiry',
      message: '',
      consent: false,
    });
  };

  const cleanPhone1 = settings.contactPhone1.replace(/[^0-9]/g, '');
  const cleanPhone2 = settings.contactPhone2.replace(/[^0-9]/g, '');

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 pb-24">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
          {isNepali ? "हामीसँग सम्पर्क राख्नुहोस्" : "Reach Our Team"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? "सम्पर्क तथा कार्यालय विवरण" : "Contact Paila Nepal"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "हाम्रो कार्यालय जोरपाटी, काठमाडौंमा अवस्थित छ। कुनै पनि सोधपुछ, परामर्श वा सहकार्यका लागि सम्पर्क गर्नुहोस्।"
            : "Have a question about our psychosocial services, 6-month counselling training, disaster resilience programs, or partnership? Connect with us directly."}
        </p>
      </section>

      {/* 2. Direct Contact Buttons & Details Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* Call Button */}
          <a
            href={`tel:${settings.contactPhone1}`}
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#008C4A] shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center justify-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#e6f7ef] text-[#008C4A] flex items-center justify-center group-hover:scale-105 transition-transform">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-slate-800 block">Call Now</span>
              <span className="text-[11px] text-slate-500 font-mono">{settings.contactPhone1}</span>
            </div>
          </a>

          {/* Email Button */}
          <a
            href={`mailto:${settings.contactEmail}`}
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#1457A6] shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center justify-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#ebf3fc] text-[#1457A6] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-slate-800 block">Email Us</span>
              <span className="text-[11px] text-slate-500 truncate max-w-[120px] block mx-auto">
                {settings.contactEmail}
              </span>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${cleanPhone1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-600 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center justify-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-slate-800 block">WhatsApp</span>
              <span className="text-[11px] text-emerald-700 font-mono">Chat Online</span>
            </div>
          </a>

          {/* Viber Button */}
          <a
            href={`viber://chat?number=${cleanPhone2}`}
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-purple-600 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center justify-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-slate-800 block">Viber</span>
              <span className="text-[11px] text-purple-700 font-mono">{settings.contactPhone2}</span>
            </div>
          </a>

          {/* Facebook Button */}
          <a
            href={settings.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-600 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center justify-center gap-2 group cursor-pointer col-span-2 sm:col-span-1"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1457A6] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Facebook className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-slate-800 block">Facebook</span>
              <span className="text-[11px] text-[#1457A6]">Official Page</span>
            </div>
          </a>
        </div>
      </section>

      {/* 3. Main Form & Location Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {isNepali ? "सन्देश पठाउनुहोस्" : "Send Us a Message"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Please use this form for general inquiries, training details, or organizational collaboration.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {isNepali ? "सन्देश सफलतापूर्वक पठाइयो" : "Message Sent Successfully"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out to Paila Nepal Wellness Centre. Our administrative team will review your message and reply promptly.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-5 py-2 text-xs font-semibold text-[#008C4A] bg-[#e6f7ef] rounded-lg cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      {isNepali ? "तपाईंको नाम *" : "Your Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Adhikari"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      {isNepali ? "इमेल ठेगाना *" : "Email Address *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      {isNepali ? "सम्पर्क फोन / ह्वाट्सएप" : "Phone / WhatsApp"}
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98XXXXXXXX"
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      {isNepali ? "सम्पर्कको कारण *" : "Reason for Contact *"}
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] bg-white text-slate-800"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Counselling / Support">Counselling / Support</option>
                      <option value="Training">Training (6-Month Course)</option>
                      <option value="Partnership">Partnership (School / Org)</option>
                      <option value="Volunteer">Volunteer Mobilization</option>
                      <option value="Disaster Preparedness">Disaster Preparedness</option>
                      <option value="Community Program">Community Program</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    {isNepali ? "विषय" : "Subject"}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief subject of inquiry..."
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] text-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    {isNepali ? "सन्देश *" : "Message *"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isNepali
                        ? "आफ्नो सन्देश यहाँ लेख्नुहोस्..."
                        : "Type your message or inquiry here..."
                    }
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#008C4A] text-slate-800"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Note: Please do not submit confidential psychiatric or emergency crisis details through this general contact form.
                  </p>
                </div>

                <div>
                  <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded text-[#008C4A] focus:ring-[#008C4A]"
                    />
                    <span>
                      “I agree to the organization's privacy and communication terms.”
                    </span>
                  </label>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    {isNepali ? "सन्देश पठाउनुहोस्" : "Submit Message"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location & Map Placeholder Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#1457A6]" />
                <span>Physical Location</span>
              </h3>

              <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                <p className="font-bold text-slate-900">Paila Nepal Wellness Centre</p>
                <p className="font-['Noto_Sans_Devanagari',sans-serif] text-slate-600">
                  पाइला नेपाल वेलनेस सेन्टर
                </p>
                <p className="pt-1">{isNepali ? settings.addressNe : settings.addressEn}</p>
                <p className="text-slate-500 text-xs">Jorpati, Gokarneshwor Municipality, Kathmandu, Nepal</p>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                <p className="font-semibold text-slate-800">Landmarks & Directions:</p>
                <p>• Located in KC Bhawan, directly nearby Lama Petrol Pump.</p>
                <p>• Accessible via main Jorpati-Sundarijal road corridor.</p>
              </div>
            </div>

            {/* Configurable Interactive Map Placeholder (Per Prompt: "Do not invent a Google Maps URL. Instead, create a map placeholder that can be configured later.") */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-0">
              <div className="bg-[#1457A6] text-white p-3.5 flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#55B8E8]" />
                  <span>Kathmandu Valley Map Guide</span>
                </div>
                <span className="text-[11px] text-white/80">Jorpati Corridor</span>
              </div>

              <div className="relative h-64 bg-slate-100 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Visual map motif vector */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-15"
                  viewBox="0 0 400 300"
                  fill="none"
                  stroke="#1457A6"
                  strokeWidth="1.5"
                >
                  <path d="M10 50 Q 80 80, 150 40 T 300 90 T 390 60" />
                  <path d="M30 180 Q 120 150, 220 220 T 370 190" />
                  <path d="M180 10 L 180 290" strokeDasharray="4 4" />
                  <path d="M50 250 L 350 250" />
                  <circle cx="210" cy="140" r="40" fill="#008C4A" fillOpacity="0.08" />
                </svg>

                <div className="relative z-10 space-y-2">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center justify-center mx-auto text-[#008C4A]">
                    <Navigation className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">KC Bhawan, Jorpati</h4>
                    <p className="text-xs text-slate-500">Nearby Lama Petrol Pump, Kathmandu</p>
                  </div>
                  <div className="pt-1">
                    <span className="inline-block px-3 py-1 rounded-md bg-[#ebf3fc] text-[#1457A6] font-semibold text-[11px] border border-[#1457A6]/20">
                      Map Integration Placeholder
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 text-[11px] text-slate-500 border-t border-slate-200 text-center">
                Detailed coordinates and embedded iframe can be configured in the admin dashboard.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

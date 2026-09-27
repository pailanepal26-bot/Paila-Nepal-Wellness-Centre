import React from 'react';
import { Phone, Mail, MapPin, Facebook, ExternalLink, ShieldCheck, Heart, Lock, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage, SUPPORTED_LANGUAGES } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';

interface FooterProps {
  onNavClick: (tab: string) => void;
  onOpenLegalModal: (tab: 'privacy' | 'terms' | 'ethics' | 'confidentiality' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenLegalModal }) => {
  const { t, language, setLanguage, isNepali } = useLanguage();
  const { settings, openAdminModal } = useAdmin();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1f2937] text-slate-300 pt-16 pb-10 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700">
          {/* Column 1: Brand & Taglines */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" size="lg" />
            <p className="text-sm text-slate-300 leading-relaxed mt-2">
              {t.footer.aboutSummary}
            </p>
            <div className="space-y-1 pt-2">
              <p className="text-xs font-semibold text-[#55B8E8] tracking-wide">
                “{t.primaryTagline}”
              </p>
              <p className="text-xs text-slate-400 italic">
                “{t.secondaryTagline}”
              </p>
            </div>
            <div className="pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {t.registeredAt}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('mental-health')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.mentalHealth}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('disaster-management')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.disasterManagement}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('training')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.training}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('programs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.programs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('events')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.events}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('resources')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.resources}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('get-involved')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.getInvolved}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#55B8E8] shrink-0 mt-0.5" />
                <span>{isNepali ? settings.addressNe : settings.addressEn}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="space-y-0.5">
                  <a
                    href={`tel:${settings.contactPhone1}`}
                    className="block hover:text-white transition-colors"
                  >
                    {settings.contactPhone1}
                  </a>
                  <a
                    href={`tel:${settings.contactPhone2}`}
                    className="block hover:text-white transition-colors"
                  >
                    {settings.contactPhone2}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#55B8E8] shrink-0" />
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {settings.contactEmail}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs text-slate-400 font-medium">WhatsApp / Viber Available</p>
            </div>
          </div>

          {/* Column 4: Social & Ethics */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t.footer.connect}
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-[#1457A6] text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Paila Nepal Wellness Centre Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-4 border-t border-slate-700 space-y-2">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Language / भाषा
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {SUPPORTED_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2 py-1 rounded text-xs transition-colors flex items-center gap-1 cursor-pointer ${
                      language === l.code
                        ? 'bg-[#008C4A] text-white font-bold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.nativeName}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700 space-y-2">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Ethical Practice
              </h4>
              <p className="text-xs text-slate-400 leading-normal">
                Strict confidentiality, duty of care, and evidence-informed community resilience.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© 2026 Paila Nepal Wellness Centre. {t.footer.allRightsReserved}</span>
            <span className="hidden sm:inline">|</span>
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <button
              onClick={() => onOpenLegalModal('ethics')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Ethical Practice
            </button>
            <button
              onClick={() => onOpenLegalModal('confidentiality')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Confidentiality
            </button>
            <button
              onClick={() => onOpenLegalModal('disclaimer')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openAdminModal}
              className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              title="Content Management System"
            >
              CMS Admin
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, HeartHandshake, GraduationCap, Globe, Shield, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenSupportModal: () => void;
  onOpenTrainingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenSupportModal,
  onOpenTrainingModal,
}) => {
  const { t, language, setLanguage, isNepali } = useLanguage();
  const { settings, openAdminModal } = useAdmin();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'mental-health', label: t.nav.mentalHealth },
    { id: 'disaster-management', label: t.nav.disasterManagement },
    { id: 'training', label: t.nav.training },
    { id: 'programs', label: t.nav.programs },
    { id: 'events', label: t.nav.events },
    { id: 'resources', label: t.nav.resources },
    { id: 'get-involved', label: t.nav.getInvolved },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* Top Admin / Announcement Bar if active */}
      {settings.announcementActive && (
        <div className="bg-gradient-to-r from-[#1457A6] via-[#008C4A] to-[#1457A6] text-white text-xs py-1.5 px-4 text-center">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex-1 text-center font-medium truncate">
              {isNepali ? settings.announcementTextNe : settings.announcementTextEn}
            </div>
            <div className="hidden md:flex items-center gap-4 text-[11px] shrink-0 font-medium">
              <a
                href={`tel:${settings.contactPhone1}`}
                className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100"
              >
                <Phone className="w-3 h-3" />
                <span>{settings.contactPhone1}</span>
              </a>
              <button
                onClick={openAdminModal}
                className="opacity-75 hover:opacity-100 underline cursor-pointer text-[10px]"
                title="Admin Control System"
              >
                Admin Panel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div
        className={`bg-white/95 backdrop-blur-md border-b transition-all ${
          isScrolled ? 'border-slate-200 shadow-sm py-2' : 'border-slate-100 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008C4A] rounded-lg p-0.5"
            >
              <Logo size="md" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-700">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative py-1.5 transition-colors cursor-pointer text-[13px] ${
                      isActive
                        ? 'text-[#008C4A] font-bold'
                        : 'text-slate-600 hover:text-[#1457A6]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#008C4A] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Actions: CTAs + Language Switcher */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50 text-xs font-semibold">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                    language === 'en'
                      ? 'bg-white text-[#1457A6] shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('ne')}
                  className={`px-2 py-1 rounded transition-colors font-['Noto_Sans_Devanagari',sans-serif] cursor-pointer ${
                    language === 'ne'
                      ? 'bg-white text-[#008C4A] shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  aria-label="Switch to Nepali"
                >
                  नेपाली
                </button>
              </div>

              {/* Secondary CTA: Join Our Training */}
              <button
                onClick={onOpenTrainingModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1457A6] bg-[#ebf3fc] hover:bg-[#dce9f8] border border-[#1457A6]/20 rounded-lg transition-colors cursor-pointer"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{t.cta.joinTraining}</span>
              </button>

              {/* Primary CTA: Get Support */}
              <button
                onClick={onOpenSupportModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] shadow-sm hover:shadow rounded-lg transition-all cursor-pointer"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>{t.cta.getSupport}</span>
              </button>
            </div>

            {/* Mobile Hamburger & Language switcher */}
            <div className="flex items-center gap-2 xl:hidden">
              {/* Mobile language switch */}
              <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50 text-[11px] font-semibold">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-1.5 py-0.5 rounded ${
                    language === 'en' ? 'bg-white text-[#1457A6] shadow-xs' : 'text-slate-500'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('ne')}
                  className={`px-1.5 py-0.5 rounded font-['Noto_Sans_Devanagari',sans-serif] ${
                    language === 'ne' ? 'bg-white text-[#008C4A] shadow-xs' : 'text-slate-500'
                  }`}
                >
                  ने
                </button>
              </div>

              {/* Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#e6f7ef] text-[#008C4A] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#008C4A]" />}
                </button>
              );
            })}
          </div>

          {/* Mobile CTAs */}
          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupportModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg shadow-sm"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{t.cta.getSupport}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrainingModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-[#1457A6] bg-[#ebf3fc] hover:bg-[#dce9f8] border border-[#1457A6]/20 rounded-lg"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.cta.joinTraining}</span>
            </button>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Paila Nepal Wellness Centre</p>
            <p>Jorpati, Kathmandu, Nepal</p>
            <p className="flex items-center gap-2 text-[#1457A6]">
              <Phone className="w-3.5 h-3.5" />
              <a href={`tel:${settings.contactPhone1}`}>{settings.contactPhone1}</a>
              <span>/</span>
              <a href={`tel:${settings.contactPhone2}`}>{settings.contactPhone2}</a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

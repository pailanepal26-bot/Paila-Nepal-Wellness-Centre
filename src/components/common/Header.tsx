import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, HeartHandshake, GraduationCap, Globe, ChevronDown, Check } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage, SUPPORTED_LANGUAGES } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';
import { Language } from '../../types';

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
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

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
                    className={`relative py-1 cursor-pointer transition-colors duration-200 text-xs 2xl:text-sm ${
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

            {/* Actions: CTAs + Language Dropdown */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Multilingual Selector Dropdown */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
                  aria-expanded={isLangDropdownOpen}
                  aria-haspopup="listbox"
                  title="Change language"
                >
                  <Globe className="w-3.5 h-3.5 text-[#008C4A]" />
                  <span className="text-base leading-none">{currentLangObj.flag}</span>
                  <span className="font-medium">{currentLangObj.shortLabel}</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                      Select Language
                    </div>
                    <div className="max-h-72 overflow-y-auto py-1">
                      {SUPPORTED_LANGUAGES.map((langOpt) => {
                        const isSelected = language === langOpt.code;
                        return (
                          <button
                            key={langOpt.code}
                            type="button"
                            onClick={() => {
                              setLanguage(langOpt.code);
                              setIsLangDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#e6f7ef] text-[#008C4A] font-semibold'
                                : 'text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-base leading-none">{langOpt.flag}</span>
                              <span>{langOpt.nativeName}</span>
                              <span className="text-[10px] text-slate-400">({langOpt.name})</span>
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#008C4A]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Secondary CTA: Join Our Training */}
              <button
                onClick={onOpenTrainingModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1457A6] bg-[#ebf3fc] hover:bg-[#dce9f8] border border-[#1457A6]/20 rounded-lg transition-colors cursor-pointer"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{t.cta.joinTraining}</span>
              </button>

              {/* Primary CTA: Get Support */}
              <button
                onClick={onOpenSupportModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] shadow-sm hover:shadow rounded-lg transition-all cursor-pointer"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>{t.cta.getSupport}</span>
              </button>
            </div>

            {/* Mobile Language + Hamburger */}
            <div className="flex items-center gap-2 xl:hidden">
              {/* Mobile Quick Language Toggle */}
              <button
                onClick={() => {
                  const codes: Language[] = ['en', 'ne', 'zh', 'ja', 'ru', 'de', 'fr'];
                  const nextIdx = (codes.indexOf(language) + 1) % codes.length;
                  setLanguage(codes[nextIdx]);
                }}
                className="flex items-center gap-1 px-2 py-1 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700"
                title="Tap to switch language"
              >
                <span className="text-sm leading-none">{currentLangObj.flag}</span>
                <span>{currentLangObj.shortLabel}</span>
              </button>

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
          {/* Mobile Language Switcher Selector Grid */}
          <div className="mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
              <Globe className="w-3.5 h-3.5 text-[#008C4A]" />
              <span>Language / भाषा:</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {SUPPORTED_LANGUAGES.map((l) => {
                const isSelected = language === l.code;
                return (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                    }}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border text-left transition-colors ${
                      isSelected
                        ? 'border-[#008C4A] bg-[#e6f7ef] text-[#008C4A] font-bold'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-base leading-none">{l.flag}</span>
                    <span className="truncate">{l.nativeName}</span>
                  </button>
                );
              })}
            </div>
          </div>

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

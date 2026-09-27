import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  shortLabel: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', shortLabel: 'EN', flag: '🇬🇧' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', shortLabel: 'ने', flag: '🇳🇵' },
  { code: 'zh', name: 'Chinese', nativeName: '中文 (简体)', shortLabel: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', shortLabel: '日', flag: '🇯🇵' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', shortLabel: 'РУ', flag: '🇷🇺' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', shortLabel: 'DE', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', shortLabel: 'FR', flag: '🇫🇷' },
];

const VALID_CODES = new Set<Language>(['en', 'ne', 'zh', 'ja', 'ru', 'de', 'fr']);

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.en;
  isNepali: boolean;
  supportedLanguages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('paila_lang') as Language;
      return (saved && VALID_CODES.has(saved)) ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('paila_lang', lang);
    } catch {
      // ignore in restricted environments
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    const list: Language[] = ['en', 'ne', 'zh', 'ja', 'ru', 'de', 'fr'];
    const nextIdx = (list.indexOf(language) + 1) % list.length;
    setLanguage(list[nextIdx]);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = translations[language] || translations.en;
  const isNepali = language === 'ne';

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      toggleLanguage,
      t,
      isNepali,
      supportedLanguages: SUPPORTED_LANGUAGES,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

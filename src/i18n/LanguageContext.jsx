import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('el-lang');
      if (saved === 'en' || saved === 'ne') return saved;
    } catch {}
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('el-lang', lang);
    } catch {}
    document.documentElement.setAttribute('lang', lang === 'ne' ? 'ne' : 'en');
  }, [lang]);

  const toggle = () => setLang((p) => (p === 'en' ? 'ne' : 'en'));

  const value = {
    lang,
    setLang,
    toggle,
    t: translations[lang] || translations.en,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback if used outside a provider.
    return {
      lang: 'en',
      setLang: () => {},
      toggle: () => {},
      t: translations.en,
    };
  }
  return ctx;
}

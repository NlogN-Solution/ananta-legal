import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { whatsappUrl } from '../lib/whatsapp';

export default function Navbar({ theme, toggleTheme, menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, lang, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap navbar">
        <Link className="logo" to="/" aria-label="Ananta Legal home">
          <img className="logo-mark" src="/logo.png" alt="" width="38" height="38" loading="eager" decoding="async" />
          <span><b>Ananta</b> <span>{t.nav.brandSoft}</span></span>
        </Link>

        <nav className="navlinks">
          <Link to="/about" className={isActive('/about')}>{t.nav.about}</Link>
          <Link to="/practice-areas" className={isActive('/practice-areas')}>{t.nav.practice}</Link>
          <Link to="/our-story" className={isActive('/our-story')}>{t.nav.story}</Link>
          <Link to="/blog" className={isActive('/blog')}>{t.nav.blog}</Link>
          <Link to="/contact" className={isActive('/contact')}>{t.nav.contact}</Link>
        </nav>

        <div className="nav-right">
          <button
            className="lang-toggle mono"
            onClick={toggle}
            aria-label={`Switch language to ${t.nav.langName}`}
            title={`Switch language to ${t.nav.langName}`}
          >
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
            <span className="lang-sep">/</span>
            <span className={lang === 'ne' ? 'on' : ''}>ने</span>
          </button>
          <button
            className="toggle"
            id="toggle"
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
          >
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
            </svg>
            <svg className="moon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
            </svg>
          </button>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn btn-primary">
            {t.nav.book} <span className="arr">↗</span>
          </a>
          <button
            className="hamburger"
            id="hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

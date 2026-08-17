import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { whatsappUrl } from '../lib/whatsapp';

export default function MobileMenu({ open, onClose }) {
  const { t } = useLang();
  return (
    <div className={`mobile-menu${open ? ' open' : ''}`} id="mobileMenu">
      <Link to="/about" onClick={onClose}>{t.nav.about}</Link>
      <Link to="/practice-areas" onClick={onClose}>{t.nav.practice}</Link>
      <Link to="/our-story" onClick={onClose}>{t.nav.story}</Link>
      <Link to="/blog" onClick={onClose}>{t.nav.blog}</Link>
      <Link to="/contact" onClick={onClose}>{t.nav.contact}</Link>
      <Link to="/guide" onClick={onClose}>{t.nav.guide}</Link>
      <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn btn-primary" onClick={onClose}>{t.nav.book} ↗</a>
    </div>
  );
}

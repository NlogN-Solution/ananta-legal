import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link className="logo" to="/">
              <img className="logo-mark" src="/logo.png" alt="" width="40" height="40" loading="lazy" decoding="async" />
              <span><b>{f.brandA}</b> {f.brandB}</span>
            </Link>
            <p>{f.tagline}</p>
          </div>
          <div className="foot-col">
            <h5>{f.navigate}</h5>
            <Link to="/about">{t.nav.about}</Link>
            <Link to="/practice-areas">{t.nav.practice}</Link>
            <Link to="/our-story">{t.nav.story}</Link>
            <Link to="/blog">{t.nav.blog}</Link>
            <Link to="/guide">{t.nav.guide}</Link>
            <Link to="/contact">{t.nav.contact}</Link>
          </div>
          <div className="foot-col">
            <h5>{f.getInTouch}</h5>
            <a href="mailto:anantalegal9@gmail.com">anantalegal9@gmail.com</a>
            <a href="tel:+9779806051559">+9779806051559</a>
            <p>{f.address}</p>
            <p>{f.hours}</p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{f.copyright}</span>
          <span className="disc">{f.disclaimer}</span>
        </div>
      </div>
    </footer>
  );
}

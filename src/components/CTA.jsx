import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function CTA() {
  const { t } = useLang();
  const c = t.cta;

  return (
    <section id="contact-cta" className="cta">
      <div className="wrap reveal">
        <h2>{c.h1}<br />{c.h2}</h2>
        <p>{c.p}</p>
        <div className="row">
          <Link to="/contact" className="btn btn-light">
            {c.btn} <span className="arr">↗</span>
          </Link>
          <a href={`mailto:${c.mailto}`} className="mailto">
            {c.mailto}
          </a>
        </div>
      </div>
    </section>
  );
}

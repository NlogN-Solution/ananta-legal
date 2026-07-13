import React from 'react';
import { Link } from 'react-router-dom';
import LadyJustice from './LadyJustice';
import { useLang } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow mono">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', color: 'var(--olive)' }}>
              <path d="M12 22V2M5 7h14M5 7L3 13h4L5 7zm14 0l-2 6h4l-2-6z" />
            </svg>
            {h.badge}
          </span>
          <h1>
            <span className="l"><span>{h.l1}</span></span>
            <span className="l"><span>{h.l2}</span></span>
            <span className="l"><span>{h.l3}<em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>.</em></span></span>
          </h1>
          <p className="hero-sub">
            {h.subPre}<span className="mark">{h.subMark}</span>{h.subPost}
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">
              {h.cta1} <span className="arr">↗</span>
            </Link>
            <Link to="/practice-areas" className="btn btn-ghost">{h.cta2}</Link>
          </div>
          <div className="trust mono">
            <span><span className="s">✶</span> {h.trust1}</span>
            <span><span className="s">✶</span> {h.trust2}</span>
            <span><span className="s">✶</span> {h.trust3}</span>
          </div>
        </div>

        <div className="hero-figure">
          <LadyJustice />

          {/* clause sticker — floats like a sticky note on a case file */}
          <div className="clause">
            <span className="pin"></span>
            <div className="tag mono">{h.clauseTag}</div>
            <p>
              {h.clausePre}<span className="edit">{h.clauseEdit}</span>{' '}
              <span className="ins">{h.clauseIns}</span>{h.clausePost}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

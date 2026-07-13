import React from 'react';
import CTA from '../components/CTA';
import DeckLayout from '../components/DeckLayout';
import { useLang } from '../i18n/LanguageContext';

const CRED_ICONS = [
  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />,
  <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
  <path d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" />,
  <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c3.5 3 5.5 7 5.5 10S15.5 19 12 22C8.5 19 6.5 15 6.5 12S8.5 5 12 2z" /></>,
];

export default function AboutPage() {
  const { t } = useLang();
  const a = t.about;

  const Intro = (
    <section className="page-header about-hero">
      <div className="wrap">
        <div className="sec-label mono"><span className="ln"></span> {a.label}</div>
        <h1>{a.h1}<span style={{ color: 'var(--lime)' }}>.</span></h1>
        <p className="sub">{a.sub}</p>
      </div>
    </section>
  );

  const Bio = (
    <section>
      <div className="wrap">
        <div className="about-content reveal">
          <div className="about-portrait">
            <div style={{
              width: '100%', height: '100%',
              background: 'linear-gradient(145deg, var(--olive), var(--lime))',
              display: 'grid', placeItems: 'center',
              fontFamily: '"Bricolage Grotesque"', fontSize: '4rem', fontWeight: 800,
              color: 'var(--bg)', opacity: 0.9,
            }}>
              S
            </div>
            <div className="badge">
              <div className="name">{a.badgeName}</div>
              <div className="title">{a.badgeTitle}</div>
            </div>
          </div>

          <div className="about-bio">
            <h2>{a.bioHead}</h2>
            {a.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="credentials">
              {a.credentials.map((c, i) => (
                <div className="credential" key={i}>
                  <svg className="cred-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {CRED_ICONS[i]}
                  </svg>
                  <h4>{c.h}</h4>
                  <p>{c.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Values = (
    <section className="approach">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label mono"><span className="ln"></span> {a.valuesLabel}</div>
          <h2 className="sec-head">{a.valuesHead}<span style={{ color: 'var(--olive)' }}>.</span></h2>
        </div>
        <div className="values-grid">
          {a.values.map((v, i) => (
            <div className="value-card reveal" key={i}>
              <div className="val-num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const PAGES = [
    { id: 'about-intro', label: a.labels.intro, node: Intro },
    { id: 'about-bio', label: a.labels.bio, node: Bio },
    { id: 'about-values', label: a.labels.values, node: Values },
    { id: 'about-cta', label: t.deck.labels.contact, node: <CTA /> },
  ];

  return <DeckLayout pages={PAGES} />;
}

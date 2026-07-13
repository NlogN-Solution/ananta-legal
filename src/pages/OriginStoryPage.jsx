import React from 'react';
import CTA from '../components/CTA';
import DeckLayout from '../components/DeckLayout';
import { useLang } from '../i18n/LanguageContext';

export default function OriginStoryPage() {
  const { t } = useLang();
  const o = t.origin;

  const Intro = (
    <section className="page-header">
      <div className="wrap">
        <div className="sec-label mono"><span className="ln"></span> {o.label}</div>
        <h1>{o.h1}<span style={{ color: 'var(--lime)' }}>.</span></h1>
        <p className="sub">{o.sub}</p>
      </div>
    </section>
  );

  const Journey = (
    <section>
      <div className="wrap">
        <div className="reveal">
          <h2>{o.journeyHead}</h2>
          <div className="origin-timeline">
            {o.journey.map((j, i) => (
              <div className="origin-block" key={i}>
                <div className="origin-year">{j.year}</div>
                <h3>{j.h}</h3>
                <p>{j.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const Why = (
    <section className="why-section">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label mono"><span className="ln"></span> {o.whyLabel}</div>
          <h2 className="sec-head">{o.whyHead}</h2>
        </div>
        <div className="why-grid">
          {o.why.map((w, i) => (
            <div className="why-card reveal" key={i}>
              <div className="why-emoji">{w.emoji}</div>
              <h3>{w.h}</h3>
              <p>{w.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Motivation = (
    <section>
      <div className="wrap">
        <div className="reveal">
          <h2>{o.motivationHead}</h2>
          <div className="motivation-text">
            <p>{o.motivation1}</p>
            <div className="pull-quote">{o.motivationQuote}</div>
            <p>{o.motivation2}</p>
          </div>
        </div>
      </div>
    </section>
  );

  const PAGES = [
    { id: 'origin-intro', label: o.labels.intro, node: Intro },
    { id: 'origin-journey', label: o.labels.journey, node: Journey },
    { id: 'origin-why', label: o.labels.why, node: Why },
    { id: 'origin-motivation', label: o.labels.motivation, node: Motivation },
    { id: 'origin-cta', label: t.deck.labels.contact, node: <CTA /> },
  ];

  return <DeckLayout pages={PAGES} />;
}

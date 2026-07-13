import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import DeckLayout from '../components/DeckLayout';
import { useLang } from '../i18n/LanguageContext';

// Non-translatable metadata (slug + icon) by index.
const META = [
  { slug: 'company-formation', num: '01', icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /> },
  { slug: 'contracts', num: '02', icon: <path d="M14 3v5h5M14 3l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zM9 13l2 2 4-4" /> },
  { slug: 'fundraising-investment', num: '03', icon: <path d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" /> },
  { slug: 'intellectual-property', num: '04', icon: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /> },
  { slug: 'compliance-governance', num: '05', icon: <path d="M9 11l3 3 8-8M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9" /> },
  { slug: 'exits-disputes', num: '06', icon: <path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" /> },
];

export default function PracticeAreasPage() {
  const { t } = useLang();
  const pa = t.practiceAreas;

  const Intro = (
    <section className="page-header">
      <div className="wrap">
        <div className="sec-label mono"><span className="ln"></span> {pa.label}</div>
        <h1>{pa.h1}<span style={{ color: 'var(--lime)' }}>.</span></h1>
        <p className="sub">{pa.sub}</p>
      </div>
    </section>
  );

  const Grid = (
    <section>
      <div className="wrap">
        <div className="practice-grid">
          {META.map((m, idx) => {
            const p = pa.items[idx];
            return (
              <Link to={`/practice-areas/${m.slug}`} key={m.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="practice-card reveal">
                  <div className="pc-top">
                    <span className="pc-num">{m.num}</span>
                    <svg className="pc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      {m.icon}
                    </svg>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul className="pc-features">
                    {p.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <span className="pc-link">
                    {pa.learnMore} <span className="arr">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );

  const PAGES = [
    { id: 'pa-intro', label: pa.labels.intro, node: Intro },
    { id: 'pa-grid', label: pa.labels.grid, node: Grid },
    { id: 'pa-cta', label: t.deck.labels.contact, node: <CTA /> },
  ];

  return <DeckLayout pages={PAGES} />;
}

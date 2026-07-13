import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CTA from '../components/CTA';
import DeckLayout from '../components/DeckLayout';
import { useLang } from '../i18n/LanguageContext';

export default function PracticeDetailPage() {
  const { slug } = useParams();
  const { t } = useLang();
  const pd = t.practiceDetail;
  const detail = pd.details[slug];

  if (!detail) {
    const NotFound = (
      <section className="page-header">
        <div className="wrap">
          <h1>{pd.notFound}</h1>
          <p className="sub">
            <Link to="/practice-areas" style={{ color: 'var(--olive)' }}>{pd.back}</Link>
          </p>
        </div>
      </section>
    );
    return <DeckLayout pages={[{ id: 'pd-404', label: pd.notFound, node: NotFound }]} />;
  }

  const Intro = (
    <section className="page-header">
      <div className="wrap">
        <div className="sec-label mono">
          <span className="ln"></span>
          <Link to="/practice-areas" style={{ color: 'var(--olive)' }}>{pd.breadcrumb}</Link> / {detail.title}
        </div>
        <h1>{detail.title}<span style={{ color: 'var(--lime)' }}>.</span></h1>
        <p className="sub">{detail.tagline}</p>
        <p style={{ fontSize: '1.15rem', color: 'var(--ink)', fontWeight: 500, marginTop: '1.4rem', maxWidth: '52ch' }}>
          {detail.intro}
        </p>
      </div>
    </section>
  );

  const pages = [{ id: 'pd-intro', label: detail.title, node: Intro }];

  detail.sections.forEach((sec, i) => {
    pages.push({
      id: `pd-sec-${i}`,
      label: sec.heading,
      node: (
        <section className="practice-detail">
          <div className="wrap">
            <div className="pd-content reveal">
              <h2>{sec.heading}</h2>
              {sec.items && (
                <ul>
                  {sec.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {sec.text && <p>{sec.text}</p>}
            </div>
          </div>
        </section>
      ),
    });
  });

  if (detail.stats) {
    pages.push({
      id: 'pd-stats',
      label: pd.statsLabel,
      node: (
        <section className="practice-detail">
          <div className="wrap">
            <div className="pd-sidebar reveal">
              {detail.stats.map((s, i) => (
                <div className="pd-stat" key={i}>
                  <div className="n">{s.n}</div>
                  <div className="k">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    });
  }

  pages.push({ id: 'pd-cta', label: t.deck.labels.contact, node: <CTA /> });

  return <DeckLayout pages={pages} />;
}

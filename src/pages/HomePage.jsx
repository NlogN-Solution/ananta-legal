import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Approach from '../components/Approach';
import Process from '../components/Process';
import Stories from '../components/Stories';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import DeckLayout from '../components/DeckLayout';
import { useLang } from '../i18n/LanguageContext';

/* The marquee gets its own "divider" spread so it reads as a deliberate
   chapter break rather than a stray strip. */
function MarqueeDivider() {
  const { t } = useLang();
  return (
    <div className="deck-divider deck-fill">
      <div className="sec-label mono">
        <span className="ln" /> {t.divider.label}
      </div>
      <h2 className="deck-divider__head">
        {t.divider.head}
        <span style={{ color: 'var(--olive)' }}>.</span>
      </h2>
      <Marquee />
    </div>
  );
}

export default function HomePage() {
  const { t } = useLang();
  const L = t.deck.labels;

  const PAGES = [
    { id: 'intro', label: L.intro, node: <Hero /> },
    { id: 'practice', label: L.practice, node: <MarqueeDivider /> },
    { id: 'services', label: L.services, node: <Services /> },
    { id: 'approach', label: L.approach, node: <Approach /> },
    { id: 'process', label: L.process, node: <Process /> },
    { id: 'stories', label: L.stories, node: <Stories /> },
    { id: 'faq', label: L.faq, node: <FAQ /> },
    { id: 'contact', label: L.contact, node: <CTA /> },
  ];

  return <DeckLayout pages={PAGES} />;
}

import React, { useState, useEffect, useLayoutEffect } from 'react';
import BookDeck from './BookDeck';
import Footer from './Footer';
import useReveal from '../hooks/useReveal';
import { useLang } from '../i18n/LanguageContext';

/**
 * DeckLayout — shared responsive shell that turns a list of spreads into a
 * horizontal "book" on desktop/tablet (>=768px) and a clean vertical stack
 * on phones. A footer / colophon spread is appended automatically.
 *
 * props:
 *   pages:  [{ id, label, node }]
 *   footer: include the colophon/footer spread (default true)
 */
export default function DeckLayout({ pages, footer = true }) {
  const [isDeck, setIsDeck] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : true
  );
  const [navH, setNavH] = useState(72);
  const stackRef = useReveal(); // drives scroll-reveal on the mobile stack
  const { t } = useLang();

  useLayoutEffect(() => {
    const measure = () => {
      setIsDeck(window.innerWidth >= 768);
      const nav = document.getElementById('nav');
      if (nav) setNavH(nav.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Lock body scroll only while the horizontal deck owns the viewport.
  useEffect(() => {
    if (!isDeck) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isDeck]);

  const allPages = footer
    ? [...pages, { id: 'colophon', label: t.deck.labels.colophon, node: <Footer /> }]
    : pages;

  if (!isDeck) {
    return (
      <div className="mobile-stack" ref={stackRef}>
        {allPages.map((p) => (
          <React.Fragment key={p.id}>{p.node}</React.Fragment>
        ))}
      </div>
    );
  }

  return <BookDeck pages={allPages} navH={navH} />;
}

import { useState, useRef, useCallback, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

/**
 * BookDeck — full-viewport horizontal panel navigator.
 *
 * Replaces the old card-in-a-desk layout with seamless full-screen panels.
 * Each section fills the entire viewport. Vertical scroll is captured and
 * translated into smooth horizontal panel transitions with crossfade + slide
 * animations. No card borders, no clipping — each section's own content and
 * background are fully visible edge-to-edge.
 *
 * Navigation: wheel/scroll, keyboard arrows, dot nav, touch swipe.
 */
export default function BookDeck({ pages, navH = 72 }) {
  const count = pages.length;
  const { t } = useLang();

  const [activeIndex, setActiveIndex] = useState(0);
  const [hintGone, setHintGone] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  const idxRef = useRef(0);
  const reducedRef = useRef(false);

  // Navigate to a specific panel index.
  const navTo = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(count - 1, index));
      if (clamped === idxRef.current || isAnimating) return;

      setIsAnimating(true);
      setHintGone(true);

      const prev = idxRef.current;
      idxRef.current = clamped;
      setActiveIndex(clamped);

      // Allow CSS transitions to complete before accepting the next nav.
      const duration = reducedRef.current ? 50 : 620;
      setTimeout(() => setIsAnimating(false), duration);
    },
    [count, isAnimating]
  );

  // Honour prefers-reduced-motion.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedRef.current = mq.matches;
    const on = () => { reducedRef.current = mq.matches; };
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  // ---- Wheel: vertical scroll → panel transition ----
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let acc = 0;
    let decayTimer = 0;
    let cooldown = false;

    const onWheel = (e) => {
      // Let native horizontal swipes pass through.
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Respect a panel's own vertical scroll, but only with real overflow.
      const scroller = e
        .composedPath()
        .find((n) => n.classList && n.classList.contains('deck-panel__inner'));
      
      if (scroller) {
        const overflow = scroller.scrollHeight - scroller.clientHeight;
        if (overflow > 10) {
          const atTop = scroller.scrollTop <= 0;
          const atBottom = Math.ceil(scroller.scrollTop) >= overflow - 1;
          
          if (e.deltaY > 0 && !atBottom) return; // allow scrolling down
          if (e.deltaY < 0 && !atTop) return;    // allow scrolling up
        }
      }

      // We own this gesture — prevent page scroll.
      e.preventDefault();

      const unit = e.deltaMode === 1 ? 16 : 1;
      acc += e.deltaY * unit;
      clearTimeout(decayTimer);
      decayTimer = setTimeout(() => { acc = 0; }, 200);

      if (cooldown) return;

      const THRESHOLD = 30;
      if (Math.abs(acc) >= THRESHOLD) {
        const dir = acc > 0 ? 1 : -1;
        acc = 0;
        navTo(idxRef.current + dir);
        cooldown = true;
        setTimeout(() => { cooldown = false; }, 500);
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      clearTimeout(decayTimer);
    };
  }, [navTo]);

  // ---- Touch swipe support ----
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0, startY = 0, tracking = false;

    const onStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      tracking = true;
    };
    const onEnd = (e) => {
      if (!tracking) return;
      tracking = false;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      // Only count horizontal swipes.
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        navTo(idxRef.current + (dx < 0 ? 1 : -1));
      }
    };

    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchend', onEnd);
    };
  }, [navTo]);

  // ---- Keyboard navigation ----
  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable) return;
      switch (e.key) {
        case 'ArrowRight': case 'PageDown': case 'ArrowDown':
          e.preventDefault(); navTo(idxRef.current + 1); break;
        case 'ArrowLeft': case 'PageUp': case 'ArrowUp':
          e.preventDefault(); navTo(idxRef.current - 1); break;
        case 'Home':
          e.preventDefault(); navTo(0); break;
        case 'End':
          e.preventDefault(); navTo(count - 1); break;
        default: break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count, navTo]);

  const chapterNo = String(activeIndex + 1).padStart(2, '0');
  const totalNo = String(count).padStart(2, '0');

  return (
    <div
      className="deck"
      style={{ height: `calc(100dvh - ${navH}px)` }}
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Ananta Legal — page through our practice"
    >
      {/* top progress bar */}
      <div className="deck-progress" aria-hidden="true">
        <span
          className="deck-progress__bar"
          style={{ transform: `scaleX(${(activeIndex + 1) / count})` }}
        />
      </div>

      {/* live announcement for screen readers */}
      <p className="sr-only" aria-live="polite">
        Page {activeIndex + 1} of {count}: {pages[activeIndex]?.label}
      </p>

      {/* stacked panels — only the active one is visible */}
      <div className="deck-stage">
        {pages.map((current, i) => {
          const offset = i - activeIndex;
          let panelClass = 'deck-panel';
          if (i === activeIndex) panelClass += ' is-active';
          else if (offset < 0) panelClass += ' is-prev';
          else panelClass += ' is-next';

          return (
            <div
              className={panelClass}
              key={current.id}
              data-index={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${current.label}`}
              aria-hidden={i !== activeIndex}
            >
              <div className="deck-panel__inner">
                {current.node}
              </div>
            </div>
          );
        })}
      </div>

      {/* bottom nav rail */}
      <div className="deck-rail">
        <div className="deck-dots" role="tablist" aria-label="Pages">
          {pages.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              className={`deck-dot${i === activeIndex ? ' is-active' : ''}`}
              aria-selected={i === activeIndex}
              aria-current={i === activeIndex ? 'true' : undefined}
              aria-label={`Go to ${p.label}`}
              onClick={() => navTo(i)}
            >
              <span className="deck-dot__pip" />
              <span className="deck-dot__name">{p.label}</span>
            </button>
          ))}
        </div>
        <div className="deck-counter mono" aria-hidden="true">
          <span className="deck-counter__cur">{chapterNo}</span>
          <span className="deck-counter__sep">/</span>
          <span className="deck-counter__tot">{totalNo}</span>
        </div>
      </div>

      {/* one-time hint */}
      <div
        className={`deck-hint mono${hintGone ? ' is-gone' : ''}`}
        aria-hidden="true"
      >
        <span className="deck-hint__keys">{t.deck.hintKeys}</span>
        {t.deck.hintTail}
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, staggerContainer, scaleIn } from '../animation/variants';
import { useHeroMonogram } from '../animation/gsapHooks';
import { whatsappUrl } from '../lib/whatsapp';

/* Shield-check, scale and clock — matched to the three real differentiators
   (track record / flat fees / response time), not generic trust icons. */
const FEATURE_ICONS = [
  <><path d="M12 3c2 1.4 4.5 2 7 2v6c0 5-3 7.6-7 9-4-1.4-7-4-7-9V5c2.5 0 5-.6 7-2z" /><path d="m9 12 2 2 4-4" /></>,
  <><path d="M12 3v18M7 21h10" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /><path d="M4 8l3.2 6.2a3.2 3.2 0 006 0L16 8" /></>,
  <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.3 2" /></>,
];

/* Notary-seal ticks ringing the monogram — cardinal marks a touch longer,
   like the engraved rim of an advocate's embossing seal. */
const SEAL_TICKS = Array.from({ length: 24 }, (_, i) => {
  const angle = (i * 15 * Math.PI) / 180;
  const major = i % 6 === 0;
  const rOuter = major ? 184 : 176;
  return {
    key: i,
    major,
    x1: 190 + 168 * Math.cos(angle),
    y1: 200 + 168 * Math.sin(angle),
    x2: 190 + rOuter * Math.cos(angle),
    y2: 200 + rOuter * Math.sin(angle),
  };
});

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const prefersReducedMotion = useReducedMotion();
  const v = (variant) => (prefersReducedMotion ? undefined : variant);
  const monogramRef = useHeroMonogram();

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="wrap hero-grid">
        <motion.div
          className="hero-copy"
          variants={v(staggerContainer)}
          initial="hidden"
          animate="show"
        >
          <motion.span className="eyebrow mono" variants={v(fadeUp)}>
            {h.badge}
            <i className="eyebrow-ln" aria-hidden="true" />
          </motion.span>

          <motion.h1 variants={v(fadeUp)}>
            <span className="hl-line">{h.hlLine1}</span>{' '}
            <span className="hl-line accent">{h.hlLine2}</span>
          </motion.h1>

          <motion.p className="hero-sub" variants={v(fadeUp)}>{h.sub}</motion.p>

          <motion.div className="hero-cta" variants={v(fadeUp)}>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn btn-primary">
              {h.cta1} <span className="arr">↗</span>
            </a>
            <Link to="/practice-areas" className="btn btn-ghost btn-ghost-gold">
              {h.cta2} <span className="arr">↗</span>
            </Link>
          </motion.div>

          <motion.ul className="hero-features" variants={v(fadeUp)}>
            {h.features.map((f, i) => (
              <li key={i}>
                <span className="hf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {FEATURE_ICONS[i]}
                  </svg>
                </span>
                <span className="hf-label">{f.l1}<br />{f.l2}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          ref={monogramRef}
          className="hero-figure"
          variants={v(scaleIn)}
          initial="hidden"
          animate="show"
          aria-hidden="true"
        >
          <svg className="hf-watermark" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v18M7 21h10" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
            <path d="M4 8l3.2 6.2a3.2 3.2 0 006 0L16 8" />
          </svg>

          <svg className="hf-ring" viewBox="0 0 400 400" fill="none" aria-hidden="true">
            <circle className="hf-ring-circle" cx="190" cy="200" r="168" stroke="var(--gold)" strokeOpacity=".55" />
            {SEAL_TICKS.map((t) => (
              <line
                key={t.key}
                className={`hf-tick${t.major ? ' hf-tick-major' : ''}`}
                x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
                stroke="var(--gold)" strokeOpacity={t.major ? .6 : .3} strokeWidth={t.major ? 1.6 : 1}
              />
            ))}
            <circle className="hf-dot" cx="190" cy="32" r="4" fill="var(--gold)" />
            <circle className="hf-dot" cx="24" cy="240" r="3" fill="var(--gold)" />
          </svg>

          <div className="hf-column">
            <span></span><span></span><span></span><span></span><span></span>
          </div>

          <div className="hf-monogram">
            <span className="hf-a">A</span>
            <span className="hf-l">L</span>
            <i className="hf-impact" aria-hidden="true" />
          </div>

          <div className="hf-baselines"><span></span><span></span></div>

          <div className="hf-text">
            <i className="hf-rule" aria-hidden="true" />
            <p className="hf-words">
              {h.panelWords.map((w) => <span className="hf-word" key={w}>{w}</span>)}
            </p>
            <p className="hf-brand">{h.panelBrand}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

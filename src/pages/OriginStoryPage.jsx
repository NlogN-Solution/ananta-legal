import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CTA from '../components/CTA';
import DeckLayout from '../components/DeckLayout';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, scaleIn, staggerContainer } from '../animation/variants';

export default function OriginStoryPage() {
  const { t } = useLang();
  const prefersReducedMotion = useReducedMotion();
  const o = t.origin;
  const timelineImages = [
    '/2024-the-seed.jpeg',
    '/2025-the-experiment.jpeg',
    '/2026-today.jpeg',
  ];

  const Intro = (
    <section className="page-header origin-hero">
      <div className="wrap">
        <div className="origin-hero-grid">
          <motion.div
            className="origin-hero-copy"
            variants={prefersReducedMotion ? undefined : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="sec-label mono">{o.label}</div>
            <h1>{o.h1}<span style={{ color: 'var(--lime)' }}>.</span></h1>
            <p className="sub">{o.sub}</p>
          </motion.div>

          <motion.div
            className="origin-hero-image"
            variants={prefersReducedMotion ? undefined : scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img
              src="/ananta-existence.jpeg"
              alt="Documentary-style portrait representing why Ananta Legal exists"
              loading="eager"
              decoding="sync"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );

  const Journey = (
    <section>
      <div className="wrap">
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>{o.journeyHead}</h2>
          <div className="origin-timeline">
            {o.journey.map((j, i) => {
              const isReversed = i % 2 === 1;
              const altText =
                i === 0
                  ? 'Black and white documentary image for the seed stage of Ananta Legal'
                  : i === 1
                  ? 'Black and white documentary image for the experiment stage of Ananta Legal'
                  : 'Black and white documentary image for Ananta Legal today';

              return (
                <div className={`origin-block ${isReversed ? 'reverse' : ''}`} key={i}>
                  <motion.div
                    className="origin-copy"
                    variants={prefersReducedMotion ? undefined : fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <div className="origin-year">{j.year}</div>
                    <h3>{j.h}</h3>
                    <p>{j.p}</p>
                  </motion.div>

                  <motion.div
                    className="origin-image"
                    variants={prefersReducedMotion ? undefined : scaleIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <img
                      src={timelineImages[i]}
                      alt={altText}
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );

  const Why = (
    <section className="why-section">
      <div className="wrap">
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="sec-label mono">{o.whyLabel}</div>
          <h2 className="sec-head">{o.whyHead}</h2>
        </motion.div>
        <motion.div
          className="why-grid"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {o.why.map((w, i) => (
            <motion.div className="why-card" key={i} variants={prefersReducedMotion ? undefined : fadeUp}>
              <div className="why-emoji">{w.emoji}</div>
              <h3>{w.h}</h3>
              <p>{w.p}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  const Motivation = (
    <section>
      <div className="wrap">
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>{o.motivationHead}</h2>
          <div className="motivation-text">
            <p>{o.motivation1}</p>
            <div className="pull-quote">{o.motivationQuote}</div>
            <p>{o.motivation2}</p>
          </div>
        </motion.div>
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

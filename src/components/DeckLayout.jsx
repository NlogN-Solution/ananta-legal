import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Footer from './Footer';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, staggerContainer } from '../animation/variants';

/**
 * DeckLayout — shared responsive vertical page stack with smooth scroll
 * triggered animations for every route.
 *
 * props:
 *   pages:  [{ id, label, node }]
 *   footer: include the colophon/footer spread (default true)
 */
export default function DeckLayout({ pages, footer = true }) {
  const { t } = useLang();
  const prefersReducedMotion = useReducedMotion();

  const allPages = footer
    ? [...pages, { id: 'colophon', label: t.deck.labels.colophon, node: <Footer /> }]
    : pages;

  return (
    <motion.div
      className="page-stack"
      variants={prefersReducedMotion ? undefined : staggerContainer}
      initial="hidden"
      animate="show"
    >
      {allPages.map((page) => (
        <motion.div
          key={page.id}
          className="page-panel"
          variants={prefersReducedMotion ? undefined : fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {page.node}
        </motion.div>
      ))}
    </motion.div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '../animation/variants';
import { useCardLift } from '../animation/gsapHooks';

export default function ServiceCard({ num, title, desc, icon, slug, index = 0, learnMore = 'Learn more' }) {
  const prefersReducedMotion = useReducedMotion();
  const liftRef = useCardLift();

  return (
    <motion.article
      className="card"
      ref={liftRef}
      variants={prefersReducedMotion ? undefined : fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
    >
      <div className="card-head">
        <span className="num mono">{num}</span>
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {icon}
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      {slug && (
        <Link to={`/practice-areas/${slug}`} className="card-link">
          {learnMore} <span className="arr">→</span>
        </Link>
      )}
    </motion.article>
  );
}

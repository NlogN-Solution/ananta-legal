import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ServiceCard({ num, title, desc, icon, slug, image, index = 0, learnMore = 'Learn more' }) {
  // Generate a distinct abstract pattern per index
  const getPattern = (idx) => {
    const patterns = [
      <circle cx="90" cy="10" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.1" />,
      <rect x="50" y="-10" width="60" height="60" rx="8" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(15 80 20)" opacity="0.1" />,
      <path d="M40 80 L80 10 L120 80 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.1" />,
      <path d="M60 20 Q100 -20 120 40 T60 80 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.1" />,
      <polygon points="50,10 90,30 80,80 40,60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.1" />,
      <path d="M40 40 A30 30 0 1 1 100 40 A30 30 0 1 1 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" opacity="0.1" />
    ];
    return patterns[idx % patterns.length];
  };

  return (
    <motion.article 
      className="card"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      {image && <div className="card-visual" aria-hidden="true" style={{ backgroundImage: `url(${image})` }} />}
      <svg className="card-bg-pattern" viewBox="0 0 120 100" aria-hidden="true">
        {getPattern(index)}
      </svg>
      <span className="num">{num}</span>
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        {icon}
      </svg>
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

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

export default function Stories() {
  const { t } = useLang();
  const s = t.stories;

  return (
    <section id="stories" className="stories">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label mono"><span className="ln"></span> {s.label}</div>
          <h2 className="sec-head">
            {s.head}<span style={{ color: 'var(--olive)' }}>.</span>
          </h2>
        </div>
        <div className="q-grid">
          {s.quotes.map((q, i) => (
            <motion.figure
              className="quote"
              key={i}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
            >
              <div className="mk">&ldquo;</div>
              <p>{q.text}</p>
              <figcaption className="who">
                <span className="av">{q.name.slice(0, 2)}</span>
                <span>
                  <b>{q.name}</b>
                  <span>{q.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

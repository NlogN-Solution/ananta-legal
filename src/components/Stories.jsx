import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, staggerContainer } from '../animation/variants';
import { useLineReveal } from '../animation/gsapHooks';

export default function Stories() {
  const { t } = useLang();
  const s = t.stories;
  const prefersReducedMotion = useReducedMotion();
  const headRef = useLineReveal();

  return (
    <motion.section
      id="stories"
      className="stories"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="wrap">
        <motion.div variants={prefersReducedMotion ? undefined : staggerContainer}>
          <motion.div className="sec-label mono" variants={prefersReducedMotion ? undefined : fadeUp}>
            {s.label}
          </motion.div>
          <h2 className="sec-head" ref={headRef}>
            {s.head}<span style={{ color: 'var(--olive)' }}>.</span>
          </h2>
        </motion.div>
        <motion.div className="q-grid" variants={prefersReducedMotion ? undefined : staggerContainer}>
          {s.quotes.map((q, i) => (
            <motion.figure
              className="quote"
              key={i}
              variants={prefersReducedMotion ? undefined : fadeUp}
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
        </motion.div>
      </div>
    </motion.section>
  );
}

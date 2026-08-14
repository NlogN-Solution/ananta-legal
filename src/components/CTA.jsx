import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, staggerContainer } from '../animation/variants';
import { useLineReveal } from '../animation/gsapHooks';

export default function CTA() {
  const { t } = useLang();
  const c = t.cta;
  const prefersReducedMotion = useReducedMotion();
  const headRef = useLineReveal();

  return (
    <motion.section
      id="contact-cta"
      className="cta"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <motion.div className="wrap" variants={prefersReducedMotion ? undefined : staggerContainer}>
        <h2 ref={headRef}>
          {c.h1}
          <br />
          {c.h2}
        </h2>
        <motion.p variants={prefersReducedMotion ? undefined : fadeUp}>{c.p}</motion.p>
        <motion.div className="row" variants={prefersReducedMotion ? undefined : fadeUp}>
          <Link to="/contact" className="btn btn-light">
            {c.btn} <span className="arr">↗</span>
          </Link>
          <a href={`mailto:${c.mailto}`} className="mailto">
            {c.mailto}
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

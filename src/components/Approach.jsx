import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, staggerContainer } from '../animation/variants';
import { useCountUp, useLineReveal } from '../animation/gsapHooks';

function Stat({ n, k, reduced }) {
  const numRef = useCountUp(n);
  return (
    <motion.div className="stat" variants={reduced ? undefined : fadeUp}>
      <div className="n" ref={numRef}>{n}</div>
      <div className="k">{k}</div>
    </motion.div>
  );
}

export default function Approach() {
  const { t } = useLang();
  const a = t.approach;
  const prefersReducedMotion = useReducedMotion();
  const leadRef = useLineReveal();

  return (
    <motion.section
      id="approach"
      className="approach"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="wrap">
        <motion.div variants={prefersReducedMotion ? undefined : staggerContainer}>
          <motion.div className="sec-label mono" variants={prefersReducedMotion ? undefined : fadeUp}>
            {a.label}
          </motion.div>
          <p className="lead" ref={leadRef}>
            {a.leadPre}<span className="mark">{a.leadMark}</span>{a.leadPost}
          </p>
        </motion.div>

        <motion.div
          className="stats approach-panel"
          variants={prefersReducedMotion ? undefined : staggerContainer}
        >
          {a.stats.map((stat, i) => (
            <Stat key={i} n={stat.n} k={stat.k} reduced={prefersReducedMotion} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

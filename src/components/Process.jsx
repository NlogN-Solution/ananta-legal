import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, staggerContainer } from '../animation/variants';
import { useLineReveal } from '../animation/gsapHooks';

export default function Process() {
  const { t } = useLang();
  const p = t.process;
  const prefersReducedMotion = useReducedMotion();
  const headRef = useLineReveal();

  return (
    <motion.section
      id="process"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="wrap">
        <motion.div variants={prefersReducedMotion ? undefined : staggerContainer}>
          <motion.div className="sec-label mono" variants={prefersReducedMotion ? undefined : fadeUp}>
            {p.label}
          </motion.div>
          <h2 className="sec-head" ref={headRef}>{p.head}</h2>
        </motion.div>
        <motion.div className="process-timeline" variants={prefersReducedMotion ? undefined : staggerContainer}>
          <motion.svg className="pt-line" viewBox="0 0 100 2" preserveAspectRatio="none" variants={prefersReducedMotion ? undefined : fadeUp}>
            <line x1="0" y1="1" x2="100" y2="1" stroke="var(--line-2)" strokeWidth="2" strokeDasharray="4 4" />
          </motion.svg>
          <div className="steps">
            {p.steps.map((step, i) => (
              <motion.div className="step" key={i} variants={prefersReducedMotion ? undefined : fadeUp}>
                <div className="pt-node">
                  <div className="pt-dot"></div>
                </div>
                <div className="sn mono">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

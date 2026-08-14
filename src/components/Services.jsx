import { motion, useReducedMotion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, staggerContainer } from '../animation/variants';
import { useLineReveal } from '../animation/gsapHooks';

const META = [
  { num: '01', icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />, slug: 'company-formation' },
  { num: '02', icon: <path d="M14 3v5h5M14 3l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zM9 13l2 2 4-4" />, slug: 'contracts' },
  { num: '03', icon: <path d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" />, slug: 'fundraising-investment' },
  { num: '04', icon: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />, slug: 'intellectual-property' },
  { num: '05', icon: <path d="M9 11l3 3 8-8M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9" />, slug: 'compliance-governance' },
  { num: '06', icon: <path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" />, slug: 'exits-disputes' },
];

export default function Services() {
  const { t } = useLang();
  const s = t.services;
  const prefersReducedMotion = useReducedMotion();
  const headRef = useLineReveal();

  return (
    <motion.section
      id="services"
      className="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="wrap">
        <motion.div
          className="section-header"
          variants={prefersReducedMotion ? undefined : staggerContainer}
        >
          <motion.div className="sec-label mono" variants={prefersReducedMotion ? undefined : fadeUp}>
            {s.label}
          </motion.div>
          <h2 className="sec-head" ref={headRef}>
            {s.head}<span style={{ color: 'var(--olive)' }}>.</span>
          </h2>
          <motion.p className="sec-intro" variants={prefersReducedMotion ? undefined : fadeUp}>
            {s.intro}
          </motion.p>
        </motion.div>

        <motion.div
          className="svc-grid"
          variants={prefersReducedMotion ? undefined : staggerContainer}
        >
          {META.map((m, idx) => (
            <ServiceCard
              key={m.num}
              num={m.num}
              icon={m.icon}
              slug={m.slug}
              title={s.items[idx].title}
              desc={s.items[idx].desc}
              learnMore={s.learnMore}
              index={idx}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

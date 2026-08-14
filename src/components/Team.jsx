import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, staggerContainer } from '../animation/variants';
import { useLineReveal } from '../animation/gsapHooks';

export default function Team() {
  const { t } = useLang();
  const s = t.team;
  const members = t.about.team;
  const prefersReducedMotion = useReducedMotion();
  const headRef = useLineReveal();

  return (
    <motion.section
      id="team"
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
            {s.sub}
          </motion.p>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={prefersReducedMotion ? undefined : staggerContainer}
        >
          {members.map((member, i) => (
            <motion.div className="team-card" key={i} variants={prefersReducedMotion ? undefined : fadeUp}>
              <div className="team-photo">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-card-copy">
                <h3>{member.name}</h3>
                <p className="team-role">{member.title}</p>
                <div className="team-divider" />
                <p className="team-cred">{member.degree}<br />{member.focus}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

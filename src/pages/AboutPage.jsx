import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CTA from '../components/CTA';
import DeckLayout from '../components/DeckLayout';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, staggerContainer } from '../animation/variants';

const CRED_ICONS = [
  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />,
  <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
  <path d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" />,
  <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c3.5 3 5.5 7 5.5 10S15.5 19 12 22C8.5 19 6.5 15 6.5 12S8.5 5 12 2z" /></>,
];

export default function AboutPage() {
  const { t } = useLang();
  const a = t.about;
  const prefersReducedMotion = useReducedMotion();

  const Intro = (
    <section className="page-header about-hero">
      <div className="wrap">
        <div className="sec-label mono">{a.label}</div>
        <h1>{a.h1}<span style={{ color: 'var(--lime)' }}>.</span></h1>
        <p className="sub">{a.sub}</p>
      </div>
    </section>
  );

  const Team = (
    <section>
      <div className="wrap">
        <motion.div
          className="team-intro-grid"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div variants={prefersReducedMotion ? undefined : fadeUp}>
            <div className="sec-label mono">{a.label}</div>
            <h2 className="sec-head">{a.teamIntro}<span style={{ color: 'var(--olive)' }}>.</span></h2>
          </motion.div>
          <motion.div className="team-image" variants={prefersReducedMotion ? undefined : fadeUp}>
            <img
              src="/meet-our-team.webp"
              alt="Ananta Legal founders and team members working together for founders"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="team-grid"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {a.team.map((member, i) => (
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
    </section>
  );

  const Bio = (
    <section>
      <div className="wrap">
        <motion.div
          className="about-content"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div className="about-portrait" variants={prefersReducedMotion ? undefined : fadeUp}>
            <img
              src="/tog-1.png"
              alt="Founding advocates of Ananta Legal who speak founder, not legalese"
              className="w-full h-full object-cover object-center scale-[0.85]"

            />
          </motion.div>

          <motion.div className="about-bio" variants={prefersReducedMotion ? undefined : fadeUp}>
            <h2>{a.bioHead}</h2>
            {a.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="credentials">
              {a.credentials.map((c, i) => (
                <div className="credential" key={i}>
                  <svg className="cred-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {CRED_ICONS[i]}
                  </svg>
                  <h4>{c.h}</h4>
                  <p>{c.p}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  const Values = (
    <section className="approach">
      <div className="wrap">
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div variants={prefersReducedMotion ? undefined : fadeUp}>
            <div className="sec-label mono">{a.valuesLabel}</div>
            <h2 className="sec-head">{a.valuesHead}<span style={{ color: 'var(--olive)' }}>.</span></h2>
          </motion.div>
          <motion.div className="values-grid" variants={prefersReducedMotion ? undefined : staggerContainer}>
            {a.values.map((v, i) => (
              <motion.div className="value-card" key={i} variants={prefersReducedMotion ? undefined : fadeUp}>
                <div className="val-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  const PAGES = [
    { id: 'about-intro', label: a.labels.intro, node: Intro },
    { id: 'about-team', label: a.labels.team, node: Team },
    { id: 'about-bio', label: a.labels.bio, node: Bio },
    { id: 'about-values', label: a.labels.values, node: Values },
    { id: 'about-cta', label: t.deck.labels.contact, node: <CTA /> },
  ];

  return <DeckLayout pages={PAGES} />;
}

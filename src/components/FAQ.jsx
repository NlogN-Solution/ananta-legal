import React, { useState, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { fadeUp, staggerContainer } from '../animation/variants';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const ansRef = useRef(null);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <motion.div className={`faq${open ? ' open' : ''}`} variants={fadeUp}>
      <button aria-expanded={open} onClick={toggle}>
        <span>{question}</span>
        <span className="pm">+</span>
      </button>
      <div
        className="ans"
        ref={ansRef}
        style={{ maxHeight: open ? `${ansRef.current?.scrollHeight}px` : 0 }}
      >
        <p>{answer}</p>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useLang();
  const f = t.faq;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="faq"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="wrap">
        <motion.div variants={prefersReducedMotion ? undefined : staggerContainer}>
          <motion.div className="sec-label mono" variants={prefersReducedMotion ? undefined : fadeUp}>
            {f.label}
          </motion.div>
          <motion.h2 className="sec-head" variants={prefersReducedMotion ? undefined : fadeUp}>
            {f.head}
          </motion.h2>
        </motion.div>
        <motion.div className="faq-list" variants={prefersReducedMotion ? undefined : staggerContainer}>
          {f.items.map((faq, i) => (
            <FAQItem key={`${faq.q}-${i}`} question={faq.q} answer={faq.a} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

import React, { useState, useRef, useCallback } from 'react';
import { useLang } from '../i18n/LanguageContext';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const ansRef = useRef(null);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className={`faq${open ? ' open' : ''}`}>
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
    </div>
  );
}

export default function FAQ() {
  const { t } = useLang();
  const f = t.faq;

  return (
    <section id="faq">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label mono"><span className="ln"></span> {f.label}</div>
          <h2 className="sec-head">{f.head}</h2>
        </div>
        <div className="faq-list reveal">
          {f.items.map((faq, i) => (
            <FAQItem key={`${faq.q}-${i}`} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

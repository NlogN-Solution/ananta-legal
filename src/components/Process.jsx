import React from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function Process() {
  const { t } = useLang();
  const p = t.process;

  return (
    <section id="process">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label mono"><span className="ln"></span> {p.label}</div>
          <h2 className="sec-head">{p.head}</h2>
        </div>
        <div className="process-timeline reveal">
          <svg className="pt-line" viewBox="0 0 100 2" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="100" y2="1" stroke="var(--line-2)" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
          <div className="steps">
            {p.steps.map((step, i) => (
              <div className="step" key={i}>
                <div className="pt-node">
                  <div className="pt-dot"></div>
                </div>
                <div className="sn mono">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

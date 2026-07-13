import React from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function Approach() {
  const { t } = useLang();
  const a = t.approach;

  return (
    <section id="approach" className="approach">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label mono"><span className="ln"></span> {a.label}</div>
          <p className="lead">
            {a.leadPre}<span className="edit">{a.leadEdit}</span>{' '}
            <span className="ins">{a.leadIns}</span>{a.leadMid}
            <span className="mark">{a.leadMark}</span>{a.leadPost}
          </p>
        </div>
        <div className="stats reveal">
          {a.stats.map((stat, i) => (
            <div className="stat" key={i}>
              <div className="n">{stat.n}</div>
              <div className="k">{stat.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

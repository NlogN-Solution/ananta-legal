import React, { useEffect, useRef } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function Marquee() {
  const trackRef = useRef(null);
  const { t } = useLang();
  const items = t.marquee;

  useEffect(() => {
    // Rebuild the seamless loop whenever the language (item list) changes.
    const track = trackRef.current;
    if (track && track.firstElementChild) {
      // remove any previously appended clone
      while (track.children.length > 1) {
        track.removeChild(track.lastElementChild);
      }
      const clone = track.firstElementChild.cloneNode(true);
      track.appendChild(clone);
    }
  }, [items]);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="track" ref={trackRef}>
        <div className="item">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <span className="star">✶</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

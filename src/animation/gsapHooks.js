import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Counts a stat up to its final value when it scrolls into view.
 * Values arrive as display strings ('200', '72h', 'Rs.0', '२००+'), so we
 * animate only the ASCII digit run and keep whatever wraps it. Strings
 * without ASCII digits (Devanagari numerals) are left untouched.
 */
export function useCountUp(value) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = String(value).match(/^(\D*)(\d[\d,]*)(.*)$/s);
    if (!match || reduced()) {
      el.textContent = value;
      return;
    }

    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ''));
    const counter = { n: 0 };

    const tween = gsap.to(counter, {
      n: target,
      duration: 1.4,
      ease: 'power2.out',
      paused: true,
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(counter.n)}${suffix}`;
      },
    });

    el.textContent = `${prefix}0${suffix}`;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => tween.play(),
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [value]);

  return ref;
}

/**
 * Line-mask wipe for section headings — each text line sits behind an
 * overflow-clip mask and rises into place on scroll, staggered line by
 * line. This is the "text display" layer; the section around the heading
 * keeps animating in via the existing framer-motion fadeUp/stagger, so the
 * two systems own different things instead of double-animating the same
 * element. Re-splits safely on resize (font/line reflow) without replaying
 * the reveal once it's already run.
 */
export function useLineReveal() {
  const ref = useRef(null);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced()) return;

    const split = SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        if (played.current) {
          gsap.set(self.lines, { yPercent: 0, opacity: 1 });
          return;
        }
        gsap.set(self.lines, { yPercent: 110, opacity: 0 });
        return gsap.to(self.lines, {
          yPercent: 0,
          opacity: 1,
          duration: .9,
          stagger: .08,
          ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onComplete: () => { played.current = true; },
        });
      },
    });

    return () => split.revert();
  }, []);

  return ref;
}

/**
 * Very small pointer-follow lift for cards — a few pixels of translation,
 * no rotation. Enough to feel responsive, not enough to read as a gimmick.
 */
export function useCardLift() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || window.matchMedia('(hover: none)').matches) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      xTo(((e.clientX - r.left) / r.width - 0.5) * 6);
      yTo(((e.clientY - r.top) / r.height - 0.5) * 6 - 4);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      gsap.killTweensOf(el);
    };
  }, []);

  return ref;
}

/**
 * Hero monogram — the A/L seal on the right of the hero. Draws the ring and
 * notary ticks like a seal being cut, wipes the "A" in, then stamps the
 * gold "L" down with an impact ripple (the wax-seal beat a law firm mark
 * should have). Once settled, the seal turns very slowly and drifts a few
 * px with the pointer for depth. Skipped entirely under reduced motion —
 * the CSS default state (fully visible, no transform) is left standing.
 */
export function useHeroMonogram() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || reduced()) return;

    const ringSvg = root.querySelector('.hf-ring');
    const ringCircle = root.querySelector('.hf-ring-circle');
    const ticks = root.querySelectorAll('.hf-tick');
    const dots = root.querySelectorAll('.hf-dot');
    const flutes = root.querySelectorAll('.hf-column span');
    const a = root.querySelector('.hf-a');
    const l = root.querySelector('.hf-l');
    const impact = root.querySelector('.hf-impact');
    const watermark = root.querySelector('.hf-watermark');
    const baselines = root.querySelectorAll('.hf-baselines span');
    const textBits = root.querySelectorAll('.hf-rule, .hf-word, .hf-brand');
    if (!ringCircle || !a || !l) return;

    const circumference = 2 * Math.PI * ringCircle.r.baseVal.value;

    gsap.set(ringCircle, { strokeDasharray: circumference, strokeDashoffset: circumference });
    gsap.set(ticks, { scale: 0, transformOrigin: '50% 50%' });
    gsap.set(dots, { scale: 0, transformOrigin: '50% 50%' });
    gsap.set(flutes, { scaleY: 0, transformOrigin: 'top' });
    gsap.set(watermark, { opacity: 0, scale: .9, transformOrigin: '50% 50%' });
    gsap.set(a, { clipPath: 'inset(0 100% 0 0)', opacity: 0 });
    gsap.set(l, { scale: .55, opacity: 0, y: -18, transformOrigin: '50% 100%' });
    gsap.set(impact, { scale: .4, opacity: 0, transformOrigin: '50% 50%' });
    gsap.set(baselines, { scaleX: 0, transformOrigin: 'left' });
    gsap.set(textBits, { opacity: 0, y: 10 });

    const tl = gsap.timeline({ delay: .25, defaults: { ease: 'power3.out' } });
    tl.to(ringCircle, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' })
      .to(watermark, { opacity: .07, scale: 1, duration: 1, ease: 'power2.out' }, '-=1.2')
      .to(ticks, { scale: 1, duration: .5, ease: 'back.out(3)', stagger: .035 }, '-=.9')
      .to(flutes, { scaleY: 1, duration: .5, stagger: .06 }, '-=.7')
      .to(a, { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: .85, ease: 'power4.out' }, '-=.6')
      .to(dots, { scale: 1, duration: .5, ease: 'back.out(3)', stagger: .18 }, '-=.5')
      .to(l, { scale: 1, opacity: 1, y: 0, duration: .6, ease: 'back.out(2.2)' }, '-=.15')
      .to(impact, { scale: 1.7, opacity: .55, duration: .3, ease: 'power2.out' }, '<')
      .to(impact, { opacity: 0, duration: .5, ease: 'power1.out' }, '>-.05')
      .to(baselines, { scaleX: 1, duration: .55, stagger: .12 }, '-=.9')
      .to(textBits, { opacity: 1, y: 0, duration: .55, stagger: .07 }, '-=.5');

    const spin = gsap.to(ringSvg, {
      rotate: 360, duration: 160, repeat: -1, ease: 'none',
      transformOrigin: '50% 50%', paused: true,
    });
    const pulse = gsap.to(dots, {
      opacity: .35, duration: 1.9, repeat: -1, yoyo: true,
      ease: 'sine.inOut', stagger: .35, paused: true,
    });
    tl.call(() => { spin.play(); pulse.play(); });

    const isFine = typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let onMove, onLeave;
    if (isFine) {
      const ringX = gsap.quickTo(ringSvg, 'x', { duration: .7, ease: 'power3.out' });
      const ringY = gsap.quickTo(ringSvg, 'y', { duration: .7, ease: 'power3.out' });
      const monoX = gsap.quickTo(a.parentElement, 'x', { duration: .55, ease: 'power3.out' });
      const monoY = gsap.quickTo(a.parentElement, 'y', { duration: .55, ease: 'power3.out' });
      const textX = gsap.quickTo(root.querySelector('.hf-text'), 'x', { duration: .8, ease: 'power3.out' });

      onMove = (e) => {
        const r = root.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        ringX(px * 8); ringY(py * 8);
        monoX(px * 16); monoY(py * 12);
        textX(px * -6);
      };
      onLeave = () => { ringX(0); ringY(0); monoX(0); monoY(0); textX(0); };
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerleave', onLeave);
    }

    // click-to-reseal: tap the mark and it stamps itself again
    const reseal = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    reseal
      .to(l, { scale: .92, y: -6, duration: .12, ease: 'power2.in' })
      .set(impact, { scale: .4, opacity: 0 })
      .to(l, { scale: 1, y: 0, duration: .5, ease: 'back.out(2.6)' })
      .to(impact, { scale: 1.7, opacity: .55, duration: .3, ease: 'power2.out' }, '<')
      .to(impact, { opacity: 0, duration: .5, ease: 'power1.out' }, '>-.05')
      .to(ticks, { scale: 1.15, duration: .25, ease: 'power2.out', stagger: { each: .01, from: 'center' } }, '<')
      .to(ticks, { scale: 1, duration: .35, ease: 'power2.inOut', stagger: { each: .01, from: 'center' } }, '>-.1');

    const monogram = root.querySelector('.hf-monogram');
    const onClick = () => { if (reseal.isActive()) return; reseal.restart(); };
    monogram?.addEventListener('click', onClick);

    return () => {
      tl.kill();
      spin.kill();
      pulse.kill();
      reseal.kill();
      monogram?.removeEventListener('click', onClick);
      if (isFine) {
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerleave', onLeave);
      }
      gsap.killTweensOf([ringSvg, ringCircle, ticks, dots, flutes, a, l, impact, watermark, baselines]);
    };
  }, []);

  return ref;
}

/**
 * Soft parallax for editorial imagery — the image drifts a little slower
 * than the page as its container passes through the viewport.
 */
export function useParallax(strength = 40) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;

    const tween = gsap.fromTo(
      el,
      { yPercent: -strength / 10 },
      {
        yPercent: strength / 10,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [strength]);

  return ref;
}

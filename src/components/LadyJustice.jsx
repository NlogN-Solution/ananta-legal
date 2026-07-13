import React from 'react';

/**
 * Lady Justice — an elegant, symmetric line illustration for the hero.
 * Blindfolded, robed, holding the scales of balance aloft.
 * Themeable via CSS custom properties (olive / lime / line tokens).
 */
export default function LadyJustice() {
  return (
    <svg
      className="lj"
      viewBox="0 0 360 470"
      role="img"
      aria-label="Illustration of Lady Justice holding the scales of balance"
    >
      <defs>
        <linearGradient id="ljHalo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--lime)" stopOpacity="0.30" />
          <stop offset="60%" stopColor="var(--lime)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="var(--lime)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ljRobe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--olive)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--olive)" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* halo */}
      <circle cx="180" cy="190" r="158" fill="url(#ljHalo)" />
      <circle
        cx="180"
        cy="190"
        r="150"
        fill="none"
        stroke="var(--line-2)"
        strokeWidth="1"
        strokeDasharray="2 7"
        opacity="0.7"
      />

      <g
        fill="none"
        stroke="var(--olive)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* pedestal */}
        <path d="M118 432 h124" strokeWidth="3" />
        <path d="M132 432 v-10 h96 v10" />

        {/* robe */}
        <path
          d="M180 214
             C168 214 160 222 156 236
             L120 420 h120 L204 236
             C200 222 192 214 180 214 Z"
          fill="url(#ljRobe)"
        />
        {/* robe folds */}
        <path d="M180 232 V414" opacity="0.5" />
        <path d="M162 300 L150 414" opacity="0.4" />
        <path d="M198 300 L210 414" opacity="0.4" />

        {/* neck + head */}
        <path d="M180 214 v-12" />
        <circle cx="180" cy="178" r="25" />

        {/* blindfold */}
        <path
          d="M156 176 h48"
          stroke="var(--olive)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path d="M204 174 l16 -7 M204 182 l15 4" strokeWidth="2" />

        {/* raised arms holding the beam */}
        <path d="M160 222 L74 132" />
        <path d="M200 222 L286 132" />

        {/* the balance — gently sways */}
        <g className="lj-balance">
          {/* beam + fulcrum post */}
          <path d="M74 132 H286" strokeWidth="3" />
          <path d="M180 132 v-22" />
          {/* left pan */}
          <path d="M74 132 l-12 40 M74 132 l12 40" strokeWidth="1.8" />
          <path d="M48 172 a26 9 0 0 0 52 0" />
          {/* right pan */}
          <path d="M286 132 l-12 40 M286 132 l12 40" strokeWidth="1.8" />
          <path d="M260 172 a26 9 0 0 0 52 0" />
        </g>
      </g>

      {/* accents */}
      <circle cx="180" cy="108" r="5.5" fill="var(--lime)" />
      <circle cx="180" cy="132" r="4" fill="var(--olive)" />
      <g fill="var(--lime)">
        <path d="M300 70 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z" opacity="0.85" />
        <path d="M58 96 l2.2 5 5 2.2 -5 2.2 -2.2 5 -2.2 -5 -5 -2.2 5 -2.2 z" opacity="0.7" />
      </g>
    </svg>
  );
}

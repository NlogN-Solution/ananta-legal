import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

/**
 * ChatWidget — a lightweight support chat with PRE-MADE responses (no AI).
 *
 * The user taps a popular question or types freely; we keyword-match the input
 * against the FAQ set in translations and reply with the canned answer, falling
 * back to a "book a call" nudge. Fully bilingual via the language context.
 */
function matchAnswer(input, faqs) {
  const text = input.toLowerCase().trim();
  if (!text) return null;

  // Exact / near-exact match on a suggested question first.
  const exact = faqs.find((f) => f.q.toLowerCase() === text);
  if (exact) return exact.a;

  // Otherwise score by keyword hits and take the strongest match.
  let best = null;
  let bestScore = 0;
  for (const f of faqs) {
    let score = 0;
    for (const kw of f.keywords || []) {
      if (text.includes(kw.toLowerCase())) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = f;
    }
  }
  return best ? best.a : null;
}

export default function ChatWidget() {
  const { t } = useLang();
  const c = t.chat;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => [{ from: 'bot', text: c.greeting }]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimer = useRef(null);

  // Keep the latest message in view + focus the input when opened.
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => () => clearTimeout(typingTimer.current), []);

  const respond = (text) => {
    const query = text.trim();
    if (!query) return;
    setMessages((m) => [...m, { from: 'user', text: query }]);
    setDraft('');
    setTyping(true);
    clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      const answer = matchAnswer(query, c.faqs) || c.fallback;
      setTyping(false);
      setMessages((m) => [...m, { from: 'bot', text: answer }]);
    }, 650);
  };

  const reset = () => {
    clearTimeout(typingTimer.current);
    setTyping(false);
    setMessages([{ from: 'bot', text: c.greeting }]);
    setDraft('');
  };

  // Show suggestion chips until the user has asked something.
  const askedSomething = messages.some((m) => m.from === 'user');

  return (
    <>
      <button
        className={`chat-fab${open ? ' is-open' : ''}`}
        aria-label={open ? c.close : c.launch}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="chat-fab__icon" aria-hidden="true">
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
            </svg>
          )}
        </span>
        {!open && <span className="chat-fab__label">{c.launch}</span>}
      </button>

      <AnimatePresence>
        {open && (
          <motion.aside
            className="chat-panel"
            role="dialog"
            aria-label={c.title}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="chat-head">
              <img className="chat-head__mark" src="/logo.png" alt="" width="34" height="34" />
              <div className="chat-head__text">
                <strong>{c.title}</strong>
                <span>{c.subtitle}</span>
              </div>
              <button className="chat-head__btn" onClick={reset} title={c.reset} aria-label={c.reset}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" />
                </svg>
              </button>
              <button className="chat-head__btn" onClick={() => setOpen(false)} title={c.close} aria-label={c.close}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </header>

            <div className="chat-body" ref={bodyRef}>
              {messages.map((m, i) => (
                <div key={i} className={`chat-msg chat-msg--${m.from}`}>
                  {m.text}
                </div>
              ))}

              {typing && (
                <div className="chat-msg chat-msg--bot chat-typing" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
              )}

              {!askedSomething && !typing && (
                <div className="chat-chips">
                  <p className="chat-chips__label mono">{c.pickPrompt}</p>
                  {c.faqs.map((f, i) => (
                    <button key={i} className="chat-chip" onClick={() => respond(f.q)}>
                      {f.q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="chat-foot">
              <Link to="/contact" className="chat-book" onClick={() => setOpen(false)}>
                {c.bookCta} <span className="arr">↗</span>
              </Link>
              <form
                className="chat-input"
                onSubmit={(e) => {
                  e.preventDefault();
                  respond(draft);
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={c.placeholder}
                  aria-label={c.placeholder}
                />
                <button type="submit" aria-label={c.send} disabled={!draft.trim()}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
              <p className="chat-disclaimer">{c.disclaimer}</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

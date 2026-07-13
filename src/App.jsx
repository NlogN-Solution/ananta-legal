import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import ChatWidget from './components/ChatWidget';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import PracticeDetailPage from './pages/PracticeDetailPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
// Heavy (bundles the TinyMCE editor) — load only on the editor routes.
const BlogEditorPage = lazy(() => import('./pages/BlogEditorPage'));
import OriginStoryPage from './pages/OriginStoryPage';
import LeadMagnetPage from './pages/LeadMagnetPage';

function ScrollToTop({ pathname }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Every route renders as a horizontal deck that owns the viewport and
  // includes its own colophon/footer spread (via DeckLayout).
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={prefersReduced ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/practice-areas" element={<PracticeAreasPage />} />
          <Route path="/practice-areas/:slug" element={<PracticeDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/blog/new"
            element={
              <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
                <BlogEditorPage />
              </Suspense>
            }
          />
          <Route
            path="/blog/edit/:slug"
            element={
              <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
                <BlogEditorPage />
              </Suspense>
            }
          />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/our-story" element={<OriginStoryPage />} />
          <Route path="/guide" element={<LeadMagnetPage />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return (
        localStorage.getItem('el-theme') ||
        (window.matchMedia('(prefers-color-scheme:dark)').matches
          ? 'dark'
          : 'light')
      );
    } catch {
      return 'light';
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('el-theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <ScrollToTop pathname={location.pathname} />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <span id="top"></span>
      <AnimatedRoutes />
      <ChatWidget />
    </>
  );
}

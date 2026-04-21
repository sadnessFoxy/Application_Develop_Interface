import { useState } from 'react';
import IntroModal from './components/IntroModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  // 'login' | 'signup' | null
  const [authStep, setAuthStep] = useState(null);

  return (
    <div className="page" id="page-home">
      {/* ── Background hero image — full brightness ── */}
      <div className="hero-bg" aria-hidden="true" />

      {/* ── Navbar ── */}
      <Navbar onLoginClick={() => setAuthStep('login')} />

      {/* ── Intro modal — every page load ── */}
      {showIntro && (
        <>
          <div className="page-overlay" />
          <IntroModal onClose={() => setShowIntro(false)} />
        </>
      )}

      {/* ── Login modal ── */}
      {authStep === 'login' && (
        <LoginModal
          onClose={() => setAuthStep(null)}
          onContinue={() => setAuthStep('signup')}
        />
      )}

      {/* ── Sign-up modal ── */}
      {authStep === 'signup' && (
        <SignupModal
          onClose={() => setAuthStep(null)}
          onLoginBack={() => setAuthStep('login')}
        />
      )}
    </div>
  );
}

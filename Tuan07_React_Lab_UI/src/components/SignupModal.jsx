import { useState } from 'react';
import './SignupModal.css';

export default function SignupModal({ onClose, onLoginBack }) {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div className="signup-backdrop" onClick={onClose} aria-hidden="true" />

      {/* Modal */}
      <div
        className="signup-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-title"
      >
        {/* Close */}
        <button
          className="signup-close-btn"
          onClick={onClose}
          aria-label="Close"
          id="btn-close-signup"
        >
          ✕
        </button>

        <h2 className="signup-title" id="signup-title">Sign up</h2>

        {/* First name + Last name */}
        <div className="signup-row">
          <div className="signup-field">
            <label className="signup-label" htmlFor="signup-firstname">First name</label>
            <input
              id="signup-firstname"
              type="text"
              className="signup-input"
              placeholder="Input first name"
            />
          </div>
          <div className="signup-field">
            <label className="signup-label" htmlFor="signup-lastname">Last name</label>
            <input
              id="signup-lastname"
              type="text"
              className="signup-input"
              placeholder="Input last name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="signup-field full">
          <label className="signup-label" htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            className="signup-input"
            placeholder="example.email@gmail.com"
          />
        </div>

        {/* Password */}
        <div className="signup-field full">
          <label className="signup-label" htmlFor="signup-password">Password</label>
          <div className="signup-password-wrap">
            <input
              id="signup-password"
              type={showPassword ? 'text' : 'password'}
              className="signup-input password-input"
              placeholder="Enter at least 8+ characters"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9095A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9095A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Checkbox */}
        <label className="signup-agree" htmlFor="signup-agree-checkbox">
          <input
            id="signup-agree-checkbox"
            type="checkbox"
            className="signup-checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span>
            By signing up, I agree with the{' '}
            <a href="#" className="signup-link">Terms of Use</a>
            {' & '}
            <a href="#" className="signup-link">Privacy Policy</a>
          </span>
        </label>

        {/* Sign up button */}
        <button
          className="signup-btn"
          id="btn-signup-submit"
          disabled={!agreed}
        >
          Sign up
        </button>

        {/* Already have account */}
        <p className="signup-login-link">
          Already have an account?{' '}
          <button
            type="button"
            className="signup-link-btn"
            onClick={onLoginBack}
            id="btn-back-to-login"
          >
            Log in
          </button>
        </p>

        {/* OR divider */}
        <div className="signup-divider">
          <span className="signup-divider-line" />
          <span className="signup-divider-text">OR</span>
          <span className="signup-divider-line" />
        </div>

        {/* Social buttons — circles */}
        <div className="signup-socials">
          <button className="social-circle google" id="btn-signup-google" aria-label="Sign up with Google">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#fff"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#fff"/>
              <path d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A9.003 9.003 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#fff"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#fff"/>
            </svg>
          </button>

          <button className="social-circle facebook" id="btn-signup-facebook" aria-label="Sign up with Facebook">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
              <path d="M18 9a9 9 0 10-10.406 8.892V11.61H5.309V9h2.285V7.017c0-2.254 1.343-3.5 3.4-3.5.984 0 2.014.176 2.014.176v2.213h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.61H10.406V17.89A9.002 9.002 0 0018 9z" fill="#fff"/>
            </svg>
          </button>

          <button className="social-circle apple" id="btn-signup-apple" aria-label="Sign up with Apple">
            <svg width="20" height="20" viewBox="0 0 814 1000" fill="none">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.5c-43.5-79.5-78.5-196.8-78.5-308.2 0-182.2 118.6-278.4 235.4-278.4 61.8 0 113.2 40.8 151.8 40.8 36.8 0 95.8-42.8 165.2-42.8 26.5 0 108.2 2.6 168.5 80.1zm-230.3-123.5c-30.8-37.2-54.5-88.6-54.5-140 0-7.1.6-14.3 1.9-20.1 52.5 2 114.7 35.2 152.6 78.5 30.8 34.5 56.5 85.9 56.5 138.9 0 6.5-.6 13.1-1.9 18.9-5.2.6-10.4 1.3-16.3 1.3-47.5 0-106.4-31.5-138.3-77.5z" fill="#fff"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

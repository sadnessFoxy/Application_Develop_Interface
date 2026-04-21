import './LoginModal.css';

export default function LoginModal({ onClose, onContinue }) {
  return (
    <>
      {/* Backdrop */}
      <div className="login-backdrop" onClick={onClose} aria-hidden="true" />

      {/* Modal */}
      <div
        className="login-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
      >
        {/* ── Left image panel ── */}
        <div className="login-image-panel">
          <img
            src="/login_panel.png"
            alt="Delicious cooking"
            className="login-image"
          />
          {/* Quote overlay */}
          <div className="login-image-quote">
            <p>"Embrace the art of cooking, where flavors come alive!"</p>
          </div>
        </div>

        {/* ── Right form panel ── */}
        <div className="login-form-panel">
          {/* Close button */}
          <button
            className="login-close-btn"
            onClick={onClose}
            aria-label="Close login"
            id="btn-close-login"
          >
            ✕
          </button>

          <h2 className="login-title" id="login-title">Login</h2>
          <p className="login-subtitle">Enter your email to log in.</p>

          {/* Email input */}
          <input
            id="login-email-input"
            type="email"
            className="login-input"
            placeholder="Enter your email"
            autoComplete="email"
          />

          {/* Continue button */}
          <button className="login-btn-continue" id="btn-login-continue" onClick={onContinue}>
            Continue
          </button>

          {/* OR divider */}
          <div className="login-divider">
            <span className="login-divider-line" />
            <span className="login-divider-text">OR</span>
            <span className="login-divider-line" />
          </div>

          {/* Terms */}
          <p className="login-terms">
            By continuing, you agree to the updated{' '}
            <a href="#" className="login-terms-link">Terms of Sale</a>,{' '}
            <a href="#" className="login-terms-link">Terms of Service</a>, and{' '}
            <a href="#" className="login-terms-link">Privacy Policy</a>.
          </p>

          {/* Social buttons */}
          <button className="login-btn-social" id="btn-login-google">
            <span className="social-icon">
              {/* Google G */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A9.003 9.003 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
            </span>
            Continue with Google
          </button>

          <button className="login-btn-social" id="btn-login-facebook">
            <span className="social-icon">
              {/* Facebook f */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M18 9a9 9 0 10-10.406 8.892V11.61H5.309V9h2.285V7.017c0-2.254 1.343-3.5 3.4-3.5.984 0 2.014.176 2.014.176v2.213h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.61H10.406V17.89A9.002 9.002 0 0018 9z" fill="#1877F2"/>
              </svg>
            </span>
            Continue with Facebook
          </button>

          <button className="login-btn-social" id="btn-login-apple">
            <span className="social-icon">
              {/* Apple */}
              <svg width="18" height="18" viewBox="0 0 814 1000" fill="none">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.5c-43.5-79.5-78.5-196.8-78.5-308.2 0-182.2 118.6-278.4 235.4-278.4 61.8 0 113.2 40.8 151.8 40.8 36.8 0 95.8-42.8 165.2-42.8 26.5 0 108.2 2.6 168.5 80.1zm-230.3-123.5c-30.8-37.2-54.5-88.6-54.5-140 0-7.1.6-14.3 1.9-20.1 52.5 2 114.7 35.2 152.6 78.5 30.8 34.5 56.5 85.9 56.5 138.9 0 6.5-.6 13.1-1.9 18.9-5.2.6-10.4 1.3-16.3 1.3-47.5 0-106.4-31.5-138.3-77.5z" fill="#000"/>
              </svg>
            </span>
            Continue with Apple
          </button>
        </div>
      </div>
    </>
  );
}

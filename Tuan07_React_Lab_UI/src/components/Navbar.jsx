import './Navbar.css';

const NAV_LINKS = [
  { label: 'What to cook', href: '#' },
  { label: 'Recipes',      href: '#' },
  { label: 'Ingredients',  href: '#' },
  { label: 'Occasions',    href: '#' },
  { label: 'About Us',     href: '#' },
];

export default function Navbar({ onLoginClick }) {
  return (
    <header className="navbar" role="banner">
      {/* ── Logo ── */}
      <a href="/" className="navbar-logo" aria-label="Chefify home">
        <span className="logo-icon" aria-hidden="true">
          {/* Chef hat SVG */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="6" fill="#F44B87"/>
            <path d="M9 19h10v1.5a1 1 0 01-1 1H10a1 1 0 01-1-1V19z" fill="white"/>
            <path d="M14 7a4 4 0 00-4 4c0 .74.2 1.43.56 2H10a1 1 0 000 2h8a1 1 0 000-2h-.56A4 4 0 0014 7z" fill="white"/>
          </svg>
        </span>
        <span className="logo-text">Chefify</span>
      </a>

      {/* ── Search ── */}
      <div className="navbar-search">
        <span className="search-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="#9095A0" strokeWidth="1.5"/>
            <path d="M11 11l3 3" stroke="#9095A0" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
        <input
          id="navbar-search-input"
          type="search"
          className="search-input"
          placeholder="What would you like to cook?"
          aria-label="Search recipes"
        />
      </div>

      {/* ── Nav links ── */}
      <nav className="navbar-links" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>

      {/* ── Actions ── */}
      <div className="navbar-actions">
        <button className="btn-login" id="btn-navbar-login" onClick={onLoginClick}>Login</button>
        <button className="btn-subscribe" id="btn-navbar-subscribe">Subscribe</button>
      </div>
    </header>
  );
}

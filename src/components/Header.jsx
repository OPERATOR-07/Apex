import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <Link to="/">
            <img
              src="/statics/Logos/Apex1.PNG"
              alt="Apex Healthcare"
            />
          </Link>
        </div>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <ul className="nav-list">
            <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/our-services" onClick={() => setMenuOpen(false)}>OUR SERVICES</NavLink></li>
            <li><NavLink to="/our-networks" onClick={() => setMenuOpen(false)}>OUR NETWORKS</NavLink></li>
            <li><NavLink to="/reach-us" onClick={() => setMenuOpen(false)}>REACH US</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions hide-mobile">
          <a
            href="https://api.whatsapp.com/send/?phone=971526675595&text&type=phone_number&app_absent=0"
            className="btn-icon whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -850 1000 1000">
              <path d="M1000 -362.9c0 269 -219.8 487.1 -490.9 487.1 -86.1 -0 -166.9 -22 -237.3 -60.6L0 150l88.6 -261.4C43.9 -184.8 18.2 -270.9 18.2 -362.9 18.2 -631.9 238 -850 509.1 -850 780.2 -850 1000 -631.9 1000 -362.9zM509.1 -772.5C281.5 -772.5 96.4 -588.8 96.4 -362.9c0 89.6 29.2 172.6 78.6 240.1L123.4 29.3 282 -21.1c65.2 42.8 143.3 67.8 227.1 67.8 227.6 -0 412.7 -183.7 412.7 -409.5S736.7 -772.5 509.1 -772.5zM757 -250.7c-3 -5 -11.1 -8 -23.1 -13.9 -12 -6 -71.2 -34.9 -82.2 -38.8 -11.1 -4 -19.1 -6 -27.1 6s-31.1 38.8 -38.1 46.8 -14 9 -26.1 3c-12 -6 -50.8 -18.6 -96.8 -59.3 -35.8 -31.7 -59.9 -70.7 -66.9 -82.7s-0.7 -18.5 5.3 -24.4c5.4 -5.4 12 -13.9 18.1 -20.9s8 -12 12 -19.9 2 -14.9 -1 -20.9c-3 -6 -27.1 -64.7 -37.1 -88.6 -10 -23.9 -20 -19.9 -27.1 -19.9 -7 -0 -15 -1 -23.1 -1 -8 -0 -21.1 3 -32.1 14.9s-42.1 40.9 -42.1 99.6c0 58.8 43.1 115.5 49.1 123.5S401.9 -214.8 524.3 -167s122.4 31.8 144.4 29.9c22 -2 71.2 -28.9 81.2 -56.8s10 -51.8 7.1 -56.8z"/>
            </svg>
          </a>
          <a href="tel:0566406646" className="btn-icon phone-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -384 384 384">
              <path d="M363 -117c12 -0 21 9 21 21v75c0 12 -9 21 -21 21c-201 -0 -363 -162 -363 -363c0 -12 9 -21 21 -21h75c12 -0 21 9 21 21c0 27 4 52 13 77c2 7 0 16 -5 21l-47 47c31 61 80 110 141 141l47 -47c5 -6 14 -7 21 -5c23 7 49 12 76 12z"/>
            </svg>
          </a>
        </div>

        <button
          className={`menu-trigger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="menu-trigger-box">
            <div className="menu-trigger-inner"></div>
          </div>
        </button>
      </div>
    </header>
  );
}

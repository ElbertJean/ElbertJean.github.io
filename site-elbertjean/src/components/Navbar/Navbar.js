import React from 'react';
import { navLinksData } from '../../data/navLinks';
import './Navbar.css';

function Navbar({ activeSection, menuOpen, setMenuOpen }) {
  return (
    <div className={`navbar-container pixel-box ${menuOpen ? 'menu-open' : ''}`}>
      <nav className="navbar">
        <a href="#inicio" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          ELBERT JEAN
        </a>
        <button
          className="btn-pixel menu-toggle-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'CLOSE MENU' : 'OPEN MENU'}
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinksData.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

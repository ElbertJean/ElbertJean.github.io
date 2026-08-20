import React from 'react';
import { navLinksData } from '../../data/navLinks';
import { NavbarProps } from '../../types';
import './MobileNavbar.css';

const MobileNavbar: React.FC<NavbarProps> = ({ activeSection, menuOpen, setMenuOpen }) => {
  return (
    <header className="mobile-header">
      <div className="mobile-header-bar">
        <button
          type="button"
          className="mobile-header-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? 'CLOSE MENU' : 'OPEN MENU'}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-header-drawer">
          <ul className="mobile-nav-list">
            {navLinksData.map((link) => (
              <li key={link.id} className="mobile-nav-item">
                <a
                  href={`#${link.id}`}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileNavbar;

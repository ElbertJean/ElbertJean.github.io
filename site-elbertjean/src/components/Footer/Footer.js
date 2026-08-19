import React from 'react';
import { socialLinksData } from '../../data/socialLinks';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">GAME OVER</div>
      <div className="footer-socials">
        {socialLinksData.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target={social.isExternal ? '_blank' : '_self'}
            rel={social.isExternal ? 'noopener noreferrer' : undefined}
            className="social-link"
          >
            {social.label}
          </a>
        ))}
      </div>
      <div className="footer-copyright">
        © 2026 ELBERT JEAN. PRESS START TO COOP.
      </div>
    </footer>
  );
}

export default Footer;

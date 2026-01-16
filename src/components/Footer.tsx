import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Join The Frequency Newsletter</h3>
        <p>Stay updated on new "Waves" of projections.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="your.email@dimension.net" />
          <button type="submit">Tune In</button>
        </form>
      </div>
      <p>&copy; {new Date().getFullYear()} Flumb Gumbo Dimensional Anchors Inc.</p>
    </footer>
  );
};

export default Footer;

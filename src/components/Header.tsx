import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="phase-space-gradient">
      <div className="header-content">
        <h1 className="logo">Flumb Gumbo</h1>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <ul onClick={() => setMenuOpen(false)}>
            <li><NavLink to="/">Projection Zone</NavLink></li>
            <li><NavLink to="/lab">The Lab</NavLink></li>
            <li><NavLink to="/gallery">Specimen Gallery</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
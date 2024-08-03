import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <nav>
      <Link to="/" className="title" onClick={toggleMenu}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMS2V5wahpDrd1Cu0A5ujl6hSM8wZyATJprw&s" alt="Website Logo" className="logo" /> Real Estate
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
        </li>
        <li>
          <Link to="/properties" onClick={toggleMenu}>Properties</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

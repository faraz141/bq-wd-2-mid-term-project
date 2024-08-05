import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMS2V5wahpDrd1Cu0A5ujl6hSM8wZyATJprw&s" alt="Homzen Logo" className="footer-logo" />
          <p>
            Specializes in providing high-class tours for those in need. 
            <a href="mailto:themesflat@gmail.com">Contact Us</a>
          </p>
          <address>
            <p>101 E 129th St, East Chicago, IN 46312, US</p>
            <p>1-333-345-6868</p>
            <p><a href="mailto:themesflat@gmail.com">themesflat@gmail.com</a></p>
          </address>
        </div>
        <div className="footer-middle">
          <div className="footer-categories">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/properties">Pricing Plans</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-company">
            <h4>Our Company</h4>
            <ul>
              <li><Link to="/properties">Property For Sale</Link></li>
              <li><Link to="/properties">Property For Rent</Link></li>
              <li><Link to="/properties">Property For Buy</Link></li>
              <li><Link to="/about">Our Agents</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Your Weekly/Monthly Dose of Knowledge and Inspiration</p>
            <form>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footer-social">
            <h4>Follow Us:</h4>
            <div className="social-icons">
              <a href="/"><i className="fab fa-facebook-f"></i></a>
              <a href="/"><i className="fab fa-linkedin-in"></i></a>
              <a href="/"><i className="fab fa-twitter"></i></a>
              <a href="/"><i className="fab fa-pinterest"></i></a>
              <a href="/"><i className="fab fa-instagram"></i></a>
              <a href="/"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy;2024 Homzen. All Rights Reserved.</p>
        <ul>
          <li><Link to="/">Terms Of Services</Link></li>
          <li><Link to="/">Privacy Policy</Link></li>
          <li><Link to="/">Cookie Policy</Link></li>
        </ul>
        <a href="/" className="scroll-top"><i className="fas fa-arrow-up"></i></a>
      </div>
    </footer>
  );
};

export default Footer;

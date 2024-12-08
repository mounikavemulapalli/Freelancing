import React from 'react';
import logo from '../../assets/logo.png'; 
import twitterIcon from '../../assets/twitter.png'; 
import linkedinIcon from '../../assets/link.png'; 
import telegramIcon from '../../assets/tele.png'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Loop of Infinity" className="logo-image" />
        </div>
        <div className="footer-links">
          <div className="company-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#anti-money-laundering">Anti-Money Laundering</a></li>
              <li><a href="#terms-and-services">Terms and Services</a></li>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
            </ul>
          </div>
          <div className="support-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social-media">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy;2023 Loop of Infinity. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

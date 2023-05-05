import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-box">
        <img src="/images/logo-white.png" alt="Logo" className="footer-logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer-navigation">
            <ul className="footer-list">
              <li className="footer-item"><a href="/home" className="footer-link">Home</a></li>
              <li className="footer-item"><a href="/project" className="footer-link">Projects</a></li>
              <li className="footer-item"><a href="/home" className="footer-link">About Me</a></li>
              <li className="footer-item"><a href="/footer" className="footer-link">Contact Me</a></li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="footer-social-media">
            <ul className="footer-list">
              <li className="footer-item"><a href="#" className="footer-link"><i className="fab fa-linkedin"></i></a></li>
              <li className="footer-item"><a href="#" className="footer-link"><i className="fab fa-github"></i></a></li>
              <li className="footer-item"><a href="#" className="footer-link"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

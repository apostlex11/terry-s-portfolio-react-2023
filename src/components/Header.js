import React from 'react';
import '../styles/header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="header-text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Terry's Portfolio</span>
          <span className="heading-primary-sub">Welcome!</span>
        </h1>
        <a href="#" className="btn btn-white btn-animated">Learn more</a>
      </div>
    </header>
  );
};

export default Header;
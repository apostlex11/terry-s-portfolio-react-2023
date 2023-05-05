import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Welcome</span>
          <span className="heading-primary-sub">to my website</span>
        </h1>
        <p>
            I'm a full stack web developer with a business background. Growing
            up in Los Angeles business was always an interest of mine.
            Studying business, I came to an epiphany Developing or Engineering 
            would beneficial for my videlicet future.
        </p>
      </div>
    </section>
  );
};

export default Home;

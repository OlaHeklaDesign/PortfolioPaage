import React, { useEffect, useRef } from 'react';
import './HeroWhite.css';
import hero_photo from '../Assets/hero_photo.png';

const Hero = () => {

  return (
    <div className="hero">
      <div className="hero-white">
        <div className="hero-white-left-box">
          <img src={hero_photo} />
        </div>
        <div className="hero-white-right-box">
          <p>
          Hi there! I'm Ola Kowalczyk, an enthusiastic front-end developer. I specialize in <span>HTML, CSS, JavaScript, and React</span>, gaining experience through both learning and practical application. <br /><br /> Beyond traditional development, I've explored the no-code arena, successfully creating responsive websites with <span>Webflow</span> and mobile apps using <span>Bubble.io</span>. <br /><br /> I'm also interested in design and use tools like <span>Figma</span> to craft aesthetic user interfaces.
          </p>
          <div className="hero-blures">
            <div className="hero-blur-purple"></div>
            <div className="hero-blur-red"></div>
            <div className="hero-blur-yellow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


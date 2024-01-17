import React, { useEffect, useRef } from 'react';
import './Hero.css';
import arrow_hero_icon from '../Assets/hero-button-arrow.svg';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current.innerText;
      const words = text.split(' ');
  
      textRef.current.innerHTML = words
        .map((word, wordIndex) => {
          const chars = word.split('');
  
          return chars
            .map((char, charIndex) => (
              `<span style="transform: rotate(${((wordIndex + charIndex / chars.length) / words.length) * 360}deg)">${char}</span>`
            ))
            .join('');
        })
        .join('<span>&nbsp;</span>') +'<span>&nbsp;</span>';
    }
  }, []);
  

  return (
    <div className="hero">
      <div className="left-text-box">
        <h1>Ola Kowalczyk</h1>
        <div className="hero-text-linetwo">
          <div className="line-hero"></div>
          <h1>Frontend Developer</h1>
        </div>
      </div>
      <div className="hero-button">
        <div className="hero-button-textbox">
          <p ref={textRef}>NAPISZ DO MNIE • NAPISZ DO MNIE • NAPISZ DO MNIE •</p>
        </div>
        <div className="hero-button-circle">
          <img src={arrow_hero_icon} alt="arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;


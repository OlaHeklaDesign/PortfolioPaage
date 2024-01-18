import React from 'react';
import HeroBlack from '../Components/HeroBlack/HeroBlack';
import HeroWhite from '../Components/HeroWhite/HeroWhite';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="black-bg">
        <HeroBlack />
      </div>
      <div className="white-stripe-bg">
        <HeroWhite />
      </div>
      <div className="white-bg">
        <Projects/>
      </div>
      <div className="black-bg">
        <Skills/>
      </div>
    </div>
  )
}

export default Homepage;
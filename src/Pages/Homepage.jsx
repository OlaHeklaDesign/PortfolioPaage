import React from 'react';
import HeroBlack from '../Components/HeroBlack/HeroBlack';
import HeroWhite from '../Components/HeroWhite/HeroWhite';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';
import LoopStripe from '../Components/LoopStripe/LoopStripe';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';

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
      <div className="black-bg skills-cont">
        <Skills/>
      </div>
      <div className="white-bg">
        <LoopStripe/>
        <About/>
      </div>
      <div className="red-bg">
        <Contact/>
      </div>
    </div>
  )
}

export default Homepage;
import React from 'react';
import './About.css';
import about_img from '../Assets/about_img.png';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <h2>About me</h2>
        <p>
        Hi there! I'm Ola Kowalczyk, actively seeking my first opportunity as a Front-end Developer. Over the past few months, I've been intensively honing my coding skills, and now I feel ready to take on a professional challenge.
        <br/>
        <br/>
        My journey into the world of website building began long ago when I started constructing sites on WordPress. Gradually advancing my skills, I delved into designing interfaces using Figma and deepened my knowledge of UI. Venturing into no-code development, I discovered that to unlock boundless possibilities, I needed to embrace the art of programming. The choice was clear—I aspired to dive into Web development, starting with HTML, CSS, then JS, and eventually mastering React.
        <br/>
        <br/>
        I am a diligent, passionate, and organized individual, prepared for new challenges. Beyond technical skills, my experiences in interface design and no-code development bring an innovative perspective to application development. I am determined to bring creativity and professionalism to a new team, offering not only technical expertise but also a fresh outlook on design
        </p>
      </div>
      <div className="about-right">
        <img src={about_img} alt="" />
      </div>
    </div>
  )
}

export default About;
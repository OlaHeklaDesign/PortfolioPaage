import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

const Skills = () => {

  /*const initialPositionsRef = useRef({
    skillBox1: 0,
    skillBox2: 0,
    skillBox3: 0,
    skillBox4: 0,
    skillBox5: 0,
  });

  console.log(`initial: ${initialPositionsRef.skillBox5}`);

  useEffect(() => {
    const skillBox1Element = document.querySelector('.skill-box1');
    const skillBox2Element = document.querySelector('.skill-box2');
    const skillBox3Element = document.querySelector('.skill-box3');
    const skillBox4Element = document.querySelector('.skill-box4');
    const skillBox5Element = document.querySelector('.skill-box5');

    const initialPositions = {
      skillBox1: Math.round(skillBox1Element.getBoundingClientRect().y),
      skillBox2: Math.round(skillBox2Element.getBoundingClientRect().y),
      skillBox3: Math.round(skillBox3Element.getBoundingClientRect().y),
      skillBox4: Math.round(skillBox4Element.getBoundingClientRect().y),
      skillBox5: Math.round(skillBox5Element.getBoundingClientRect().y),
    };

    initialPositionsRef.current = initialPositions;

    let currentTransformSkillBox2 = 0;
    let currentTransformSkillBox3 = 0;
    let currentTransformSkillBox4 = 0;
    let currentTransformSkillBox5 = 0;

    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollPosition = window.scrollY; // pozycja uytkownika

      const skillsContainerElement = document.querySelector('.skills');
      const skillsContainerTop = skillsContainerElement.getBoundingClientRect().y; //pozycja sekcji skills
      const skillsContainerBottom = skillsContainerElement.getBoundingClientRect().bottom; //pozycja sekcji skills od dołu okna
      const containerHeight = (skillsContainerElement.clientHeight)/4; // wysokość sekcji skills

      const skillBox1Element = document.querySelector('.skill-box1');
      const skillBox1Top = Math.round(skillBox1Element.getBoundingClientRect().y); // pozycja 1 boxa

      const skillBox2Element = document.querySelector('.skill-box2');
      const skillBox2Top = Math.round(skillBox2Element.getBoundingClientRect().y); // pozycja 2 boxa

      const skillBox3Element = document.querySelector('.skill-box3');
      const skillBox3Top = Math.round(skillBox3Element.getBoundingClientRect().y); // pozycja 3 boxa

      const skillBox4Element = document.querySelector('.skill-box4');
      const skillBox4Top = Math.round(skillBox4Element.getBoundingClientRect().y); // pozycja 4 boxa

      const skillBox5Element = document.querySelector('.skill-box5');
      const skillBox5Top = Math.round(skillBox5Element.getBoundingClientRect().y); // pozycja 5 boxa

      const scrollPercentage = (scrollPosition - skillsContainerTop) / containerHeight; // wartość przesuwania
      console.log(`bottomskilsl ${skillsContainerBottom}`);

      if (skillsContainerElement) {
        console.log(`scroll Position ${scrollPosition}`);
        console.log(`skillsContainerTop ${skillsContainerTop}`);
        console.log(`skillBox1 ${skillBox1Top}`);
        console.log(`skillBox2 ${skillBox2Top}`);
        console.log(`skillBox3 ${skillBox3Top}`);
        console.log(`skillBox4 ${skillBox4Top}`);
        console.log(`skillBox5 ${skillBox5Top}`);
        console.log(`Section Height ${containerHeight}`);
        console.log(`Scroll Percentage ${scrollPercentage}`);

      }

    if (scrollPosition > lastScrollTop) {

      if(skillBox1Top + 60 < skillBox2Top && skillsContainerTop <= 0) {
        console.log(`Before: transform ${window.getComputedStyle(skillBox2Element).transform}`);
        let currentTransform2 = window.getComputedStyle(skillBox3Element).transform;
        skillBox2Element.style.transform = `translateY(-${scrollPercentage * 400}px)`;
        let matrixValues = currentTransform2.match(/matrix\(([^)]+)\)/)[1].split(', ');
        let transformY = parseFloat(matrixValues[5]);
        currentTransformSkillBox2 = transformY;
        console.log(`After: transform ${currentTransformSkillBox2}`);
      }

      if(skillBox1Top + 80 < skillBox3Top && skillsContainerTop <= 0) {
        console.log(`Before3: transform ${window.getComputedStyle(skillBox2Element).transform}`);
        let currentTransform3 = window.getComputedStyle(skillBox3Element).transform;
        skillBox3Element.style.transform = `translateY(-${scrollPercentage * 400}px)`;
        let matrixValues = currentTransform3.match(/matrix\(([^)]+)\)/)[1].split(', ');
        let transformY = parseFloat(matrixValues[5]);
        currentTransformSkillBox3 = transformY;
        console.log(`After3: transform ${currentTransformSkillBox3}`);
      }

      if(skillBox1Top + 120 < skillBox4Top && skillsContainerTop <= 0) {
        let currentTransform4 = window.getComputedStyle(skillBox4Element).transform;
        skillBox4Element.style.transform = `translateY(-${scrollPercentage * 500}px)`;
        let matrixValues = currentTransform4.match(/matrix\(([^)]+)\)/)[1].split(', ');
        let transformY = parseFloat(matrixValues[5]);
        currentTransformSkillBox4 = transformY;
      }
      if(skillBox1Top + 160 < skillBox5Top && skillsContainerTop <= 0) {
        let currentTransform5 = window.getComputedStyle(skillBox5Element).transform;
        skillBox5Element.style.transform = `translateY(-${scrollPercentage * 500}px)`;
        let matrixValues = currentTransform5.match(/matrix\(([^)]+)\)/)[1].split(', ');
        let transformY = parseFloat(matrixValues[5]);
        currentTransformSkillBox5 = transformY;
      }
      }

      else if (scrollPosition < lastScrollTop && skillsContainerBottom < window.innerHeight && skillsContainerTop <= 0) {
        console.log('scrolling up');
        console.log(`initial5 ${initialPositionsRef.current.skillBox5}`)
        if(skillBox1Top + 60 > skillBox2Top && skillsContainerTop <= 0) {
          skillBox2Element.style.transform = `translateY(${-currentTransformSkillBox2}px)`;
        }
  
        if(skillBox1Top + 80 > skillBox3Top && skillsContainerTop <= 0) {
          skillBox3Element.style.transform = `translateY(${-currentTransformSkillBox3}px)`;
        }
  
        if(skillBox1Top + 120 > skillBox4Top && skillsContainerTop <= 0) {
          skillBox4Element.style.transform = `translateY(${-currentTransformSkillBox4}px)`;
        }
        if(skillBox1Top + 160 > skillBox5Top && skillsContainerTop <= 0) {
          skillBox5Element.style.transform = `translateY${-currentTransformSkillBox5}px)`;
        }
        
      }
      lastScrollTop = scrollPosition;
    };



    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);*/

  return (
    <div className="skills" id='skills'>
     <div className="skills-left">
      <h2>My skillset</h2>
      <p>Passionate about web development, I showcase proficiency in HTML, CSS, SASS, JavaScript, Angular, UI Design, and no-code tools. Committed to continuous learning, my evolving skill set reflects my dedication to staying at the forefront of web technologies and design trends.</p>
      <a href="#projects">
        <button>SEE ME PROJECTS</button>
      </a>
     </div>
     <div className="skills-right">
      <div className="skill-box skill-box1">
        <h4>1.</h4>
        <div>
          <h4>HTML, CSS</h4>
          <p>I craft responsive and visually appealing websites, leveraging my skills in HTML/CSS.</p>
        </div>
      </div>
      <div className="skill-box skill-box2">
        <h4>2.</h4>
        <div>
          <h4>JavaScript</h4>
          <p>With JavaScript, I breathe life into my projects, creating interactive and dynamic elements.</p>
        </div>
      </div>
      <div className="skill-box skill-box3">
        <h4>3.</h4>
        <div>
          <h4>React</h4>
          <p>Even though I'm just learning React, I can already see its potential. I'm leveraging components and gradually exploring its new functionalities.</p>
        </div>
      </div>
      <div className="skill-box skill-box4">
        <h4>4.</h4>
        <div>
          <h4>UI Design</h4>
          <p>I use Figma and Adobe XD Design to craft aesthetic and functional projects.</p>
        </div>
      </div>
      <div className="skill-box skill-box5">
        <h4>5.</h4>
        <div>
          <h4>No-code</h4>
          <p>I leverage no-code tools, utilizing platforms like Webflow, Bubble.io, and Wordpress for rapid and efficient project creation.</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Skills
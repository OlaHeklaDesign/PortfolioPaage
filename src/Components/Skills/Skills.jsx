import React from 'react';
import './Skills.css';


const Skills = () => {
  return (
    <div className="skills">
     <div className="skills-left">
      <h2>My skillset</h2>
      <p>Passionate about web development, I showcase proficiency in HTML, CSS, SASS, JavaScript, Angular, UI Design, and no-code tools. Committed to continuous learning, my evolving skill set reflects my dedication to staying at the forefront of web technologies and design trends.</p>
      <button>SEE ME PROJECTS</button>
     </div>
     <div className="skills-right">
      <div className="skill-box">
        <h4>1.</h4>
        <div>
          <h4>HTML, CSS</h4>
          <p>I craft responsive and visually appealing websites, leveraging my skills in HTML/CSS.</p>
        </div>
      </div>
      <div className="skill-box">
        <h4>2.</h4>
        <div>
          <h4>JavaScript</h4>
          <p>With JavaScript, I breathe life into my projects, creating interactive and dynamic elements.</p>
        </div>
      </div>
      <div className="skill-box">
        <h4>3.</h4>
        <div>
          <h4>React</h4>
          <p>Even though I'm just learning React, I can already see its potential. I'm leveraging components and gradually exploring its new functionalities.</p>
        </div>
      </div>
      <div className="skill-box">
        <h4>4.</h4>
        <div>
          <h4>UI Design</h4>
          <p>I use Figma and Adobe XD Design to craft aesthetic and functional projects.</p>
        </div>
      </div>
      <div className="skill-box">
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

export default Skills;
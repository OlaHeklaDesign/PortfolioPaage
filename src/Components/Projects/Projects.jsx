import React from 'react';
import './Projects.css';
import beauty_img from '../Assets/beauty-small.png';
import pizza_img from '../Assets/pizzeria-small.png';
import html_icon from '../Assets/html.png';
import css_icon from "../Assets/css.png";
import js_icon from '../Assets/js.png';


const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects showcase</h2>
      <div className="projects-grid">
        <div className="project_beauty">
        <div className="project-hover">
            <h3>Website for Beauty Salon</h3>
            <div className="logos">
              <img src={html_icon} alt="html icon" />
              <img src={css_icon} alt="css icon" />
              <img src={js_icon} alt="js icon" />
            </div>
            <button>CASE STUDY</button>
          </div>
          <img src={beauty_img} alt="" />
        </div>
        <div className="project-pizza">
            <div className="project-hover">
              <h3>Website for Pizzeria</h3>
              <div className="logos">
                <img src={html_icon} alt="html icon" />
                <img src={css_icon} alt="css icon" />
                <img src={js_icon} alt="js icon" />
              </div>
              <button>CASE STUDY</button>
            </div>
          <img src={pizza_img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Projects;
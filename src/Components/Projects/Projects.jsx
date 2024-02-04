import React from 'react';
import './Projects.css';
import beauty_img from '../Assets/beauty-small.png';
import pizza_img from '../Assets/pizzeria-small.png';
import portfolio_img from '../Assets/portfolio-img.png';
import agency_img from '../Assets/agency-img.png';
import html_icon from '../Assets/html.png';
import css_icon from "../Assets/css.png";
import js_icon from '../Assets/js.png';


const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects showcase</h2>
      <div className="projects-grid">
        <div className="project_beauty projects_project">
        <div className="project-hover">
            <h3>Website for Beauty Salon</h3>
            <div className="logos">
                <p className='html'>#html</p>
                <p className='css'>#css</p>
                <p className='javascript'>#javascript</p>
            </div>
            <div className='project-buttons'>
              <a href="https://olahekladesign.github.io/LandingBeauty/">
                <button>GO TO WEBSITE</button>
              </a>
              <a href="https://github.com/OlaHeklaDesign/LandingBeauty">
                <button>GITHUB</button>
              </a>
            </div>
          </div>
          <img src={beauty_img} alt="" className='project_img'/>
        </div>
        <div className="project-pizza projects_project">
            <div className="project-hover">
              <h3>Website for Pizzeria</h3>
              <div className="logos">
              <p className='html'>#html</p>
                <p className='css'>#css</p>
                <p className='javascript'>#javascript</p>
              </div>
              <div className='project-buttons'>
                <a href="https://olahekladesign.github.io/LandingPizzeria/">
                  <button>GO TO WEBSITE</button>
                </a>
                <a href="https://github.com/OlaHeklaDesign/LandingPizzeria">
                  <button>GITHUB</button>
                </a>
            </div>
            </div>
          <img src={pizza_img} alt="" className='project_img' />
        </div>
        <div className="project-agency projects_project">
            <div className="project-hover">
              <h3>Website for Agency</h3>
              <div className="logos">
              <p className='html'>#html</p>
                <p className='css'>#css</p>
                <p className='javascript'>#javascript</p>
                <p className='react'>#react</p>
              </div>
              <div className='project-buttons'>
                <a href="https://olahekladesign.github.io/meastate/">
                  <button>GO TO WEBSITE</button>
                </a>
                <a href="https://github.com/OlaHeklaDesign/meastate">
                  <button>GITHUB</button>
                </a>
            </div>
            </div>
          <img src={agency_img} alt="" className='project_img' />
        </div>
        <div className="project-portfolio projects_project">
            <div className="project-hover">
              <h3>My Portfolio Website</h3>
              <div className="logos">
                <p className='html'>#html</p>
                <p className='css'>#css</p>
                <p className='javascript'>#javascript</p>
                <p className='react'>#react</p>
              </div>
              <div className='project-buttons'>
                <button>GO TO WEBSITE</button>
                <a href="https://github.com/OlaHeklaDesign/PortfolioPaage">
                  <button>GITHUB</button>
                </a>
            </div>
            </div>
          <img src={portfolio_img} alt="" className='project_img' />
        </div>
      </div>
    </div>
  )
}

export default Projects;
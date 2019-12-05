import React from 'react';
import './projects.scss';
import page from '../data/page.gif';

const Process = () => (
    <svg
    xmlns="https://www.w3.org/2000/svg"
    width="150"
    height="150"
    version="1.1"
    viewBox="0 0 64 64"
  >
    <path
      fill="none"
      fillOpacity="1"
      fillRule="evenodd"
      stroke="#000"
      strokeDasharray="none"
      strokeLinejoin="round"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.6"
      d="M69.816 74.07a5.303 5.303 0 00-1.01.421 1.662 1.662 0 01-.263 2.005 1.662 1.662 0 01-1.95.293 5.317 5.317 0 00-.334.837 1.662 1.662 0 011.049 1.544 1.662 1.662 0 01-1.045 1.542c.126.413.298.805.514 1.17a1.662 1.662 0 011.718.393 1.662 1.662 0 01.423 1.626c.316.164.65.3 1 .399a1.662 1.662 0 011.49-.933 1.662 1.662 0 011.482.908c.338-.101.662-.233.968-.396a1.662 1.662 0 01.417-1.652 1.662 1.662 0 011.704-.4 5.3 5.3 0 00.484-1.114 1.662 1.662 0 01-1.049-1.543 1.662 1.662 0 011.049-1.545 5.297 5.297 0 00-.304-.778 1.662 1.662 0 01-1.932-.304 1.662 1.662 0 01-.255-2.02 5.317 5.317 0 00-.978-.426 1.662 1.662 0 01-1.585 1.163 1.662 1.662 0 01-1.593-1.19zm1.545 3.494a1.606 1.606 0 011.606 1.606 1.606 1.606 0 01-1.606 1.606 1.606 1.606 0 01-1.606-1.606 1.606 1.606 0 011.606-1.606z"
      transform="matrix(4.12188 0 0 4.12188 -262.142 -294.328) matrix(.30699 0 0 .30699 61.537 69.346) matrix(4.12188 0 0 4.12188 -262.142 -294.328)"
    ></path>
  </svg>
);

const Projects = () => (
    <section>
        <article  className="projects-section">
            <header>
                <Process/>
                <h1> My projects</h1>
            </header>
            <span>--------------------------------------------------------------------------</span>
            <div className='projects-container'>     
                <div className='project-container'>
                    <h2 className="projects-description">Photographers Portfolio made with GatsbyJS</h2>
                    <a href='https://modest-booth-9a4178.netlify.com/' target="_blank" rel="noopener noreferrer"><img alt="Gif showing landing page of my other project" src={page} /></a>
                    <br/>
                    <button><a href='https://modest-booth-9a4178.netlify.com/' target="_blank" rel="noopener noreferrer">Live on Netlify</a></button>
                    <p>Lorem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum</p>
                </div>
                <div className='project-container'>
                    <h2 className='projects-description'>React Native BookApp</h2>
                    <a href='https://www.w3schools.com/tags/tag_a.asp'><img alt="Gif showing the UX design"src='https://raw.githubusercontent.com/albinoplant/BookApp/master/toreadme.gif'></img></a>
                    <br/>
                    <button><a href='https://www.w3schools.com/tags/tag_a.asp' target="_blank" rel="noopener noreferrer" >Github</a></button>
                    <p>Lorem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum</p>
                </div>
            </div>      
        </article>
        <article>
            
        </article>
    </section>
    );
export default Projects;
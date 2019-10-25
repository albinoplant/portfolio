import React from 'react';
import page from '../data/page.gif';

const Projects = () => (
    <section>
        <article  className="projects-section">
            <h1>These are my works</h1>
            <div className='projects-container'>
                <h2 className="projects-description">Photographers Portfolio made with GatsbyJS</h2>
                <a href='https://modest-booth-9a4178.netlify.com/' target="_blank"><img alt="" src={page} /></a>
                <br/>
                <button><a href='https://modest-booth-9a4178.netlify.com/' target="_blank">Live on Netlify</a></button>
                <p>Lorem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum</p>
            </div>
        </article>
        <article>
            
        </article>
    </section>
    );
export default Projects;
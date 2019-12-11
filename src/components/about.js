import React from 'react';
import Contact from './contact';
import portrait from '../graphics/portrait.JPG'

import './about.scss'



const About = () => (
    <section className="about-section">
        <header>
            <h1>About me</h1>
        </header>
        <article className="about-article">
            <div className="container">
                <p>Hello! My name is Mateusz Małecki. I study Information Technology at The West Pomeranian University
                    of Technology in Szczecin. From the moment I started learning web technologies, I'm getting more and more curious.
                    I care about the visual design of the project as much as a solid and planned programming but as I progress the love for clever code writing grows. 
                </p>
                <img alt="Portrait of me" src={portrait}></img>
            </div>
            <Contact/>
        </article>


    </section>
);
export default About;
import React from 'react';
import Contact from './contact'

import './about.scss'



const About = () => (
    <section className="about-section">
        <header>
            <h1>About me</h1>
        </header>
        <span>--------------------------------------------------------------------</span>
        <article className="about-article">
            <p>Hello! My name is Mateusz Małecki. I study Information Technology at The West Pomeranian University
                of Technology in Szczecin. From the moment I started learning web technologies, I'm getting more and more curious.
                I care about the visual design of the project but as I progressed, the love for clever code writing grows. 
            </p>
            <Contact/>
        </article>


    </section>
);
export default About;
import React from 'react';
import { Link } from 'react-router-dom';


const About = () => (
    <section className="about-section">
        <article className="about-article">
            <header>
                <h1>About me</h1>
            </header>
            <span>--------------------------------------------------------------------</span>
            <p>Actual info ksjdflskdjfslkdjfsdlkfj</p>
            <p>here github</p>
            <p>here mail</p>
            <p>here phone number</p>
        </article>
        <Link to="/">BACK</Link>

    </section>
);
export default About;
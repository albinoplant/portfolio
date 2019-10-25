import React from 'react';
import { Link } from 'react-router-dom';


const About = () => (
    <section className="about-section">
        <article className="about-article">
            <header>More info about me</header>
            <p>Actual info ksjdflskdjfslkdjfsdlkfj</p>
            <p>here github</p>
            <p>here mail</p>
            <p>here phone number</p>
        </article>
        <Link to="/">BACK</Link>

    </section>
);
export default About;
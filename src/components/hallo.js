import React from 'react';
import HiCloud from '../data/hi-cloud';
import cv from '../data/cv_eng.pdf'

const BottomBorder = () =>(
<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3f50b5" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,106.7C480,96,600,96,720,117.3C840,139,960,181,1080,208C1200,235,1320,245,1380,250.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
);

const Hallo = () => (
    <section>
        <article className='hi-section'> 
            <HiCloud/>
            <h1>My name is <span>Mateusz Małecki</span></h1>
            <p>I am looking for a first job as a junior web developer</p>
            <p>in Szczecin, Poland</p>
            <button className='download'><a style={{textDecoration:'none', }} href={cv} download>Download CV</a></button>
            <button>Contact Me</button>
        </article>
        <BottomBorder/>
    </section>
);
export default Hallo;
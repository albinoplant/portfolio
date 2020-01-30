import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Project = ({link,title,imgAlt,img,button,description}) => {

    return(
        <div className='project-container'>
                    <h2 className="projects-description">{title}</h2>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage 
                            alt={imgAlt} 
                            src={require(`../graphics/${img}`)}
                            effect="blur"
                        />
                    </a>
                    <br/>
                    <p>{description}</p>
                    <a className="button-link" href={link} target="_blank" rel="noopener noreferrer"><button>{button}</button></a>
                </div>
    );
}
export default Project;
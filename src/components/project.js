import React from 'react';

const Project = ({link,title,imgAlt,img,button,description}) => {
    return(
        <div className='project-container'>
                    <h2 className="projects-description">{title}</h2>
                    <a href={link} target="_blank" rel="noopener noreferrer"><img alt={imgAlt} src={require(`../graphics/${img}`)} /></a>
                    <br/>
                    <p>{description}</p>
                    <a class="button-link" href={link} target="_blank" rel="noopener noreferrer"><button>{button}</button></a>
                </div>
    );
}
export default Project;
import React from 'react';
import Project from './project';
import projects from '../projects.json';

const ProjectsList = () => (
    projects.map((item, i) => {
    return(
        <Project
            key={i} 
            link={item.link}
            title={item.title}
            img={item.img}
            imgAlt={item.imgAlt}
            button={item.button}
            description={item.description}
        />
    );
}));
export default ProjectsList;
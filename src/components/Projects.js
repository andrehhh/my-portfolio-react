import React from 'react'

import Project from './Project';
import data from './data/data.json';

const projectList = data.projects.map(item =>
        <Project image={item.image} name={item.name} description={item.description} link={item.link} />
    );

const Projects = () => {
    return (
        <div className="projects" id="projects-section">
            <div className="projects-container container">
                <h1>Projects</h1>
                    <ul>
                        { projectList }
                    </ul>
                <p><a href="#">View Complete Projects in Github &#62;</a></p>
            </div>
        </div>
    )
}

export default Projects

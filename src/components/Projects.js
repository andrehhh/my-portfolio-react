import React from 'react'

import Project from './Project';
import data from './data/data.json';

import waterSedimentation from '../images/AirAndSoundPollutionScreenshot.png';
import airAndSoundPolltuion from '../images/AirAndSoundPollutionScreenshot.png';
import myPortfolio from '../images/MyPortfolioScreenshot.png';

const imageList = [waterSedimentation, airAndSoundPolltuion, myPortfolio];

const projectList = data.projects.map(item =>
        <Project image={imageList[item.imgLink]} name={item.name} description={item.description} link={item.link} />
    );

const Projects = () => {
    return (
        <div className="projects" id="projects-section">
            <div className="projects-container container">
                <h1>Projects</h1>
                    <ul>
                        { projectList }
                    </ul>
                <p><a href="https://github.com/andrehhh?tab=repositories">View Complete Projects in Github &#62;</a></p>
            </div>
        </div>
    )
}

export default Projects

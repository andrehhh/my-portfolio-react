import React, { useState, useEffect } from 'react'
import SkillCard from '../components/SkillCard';

import data from '../components/data/data.json';

import leftIcon from '../images/left-icon.png';
import rightIcon from '../images/right-icon.png';

import { useGlobalContext } from '../context';

const Projects = ({ location }) => {

	const { setCurrentPath } = useGlobalContext()

	const [currentProject, setCurrentProject] = useState(1)

	// if(currentProject === data.projects.length + 1) {
	// 	setCurrentProject(1)
	// }

	useEffect(() => {
		setCurrentPath(location.pathname)
	}, [setCurrentPath, location.pathname])

	return (
		<section className="projects">
			<div className={`container project-card`}>
			{
				data.projects.map((project, index) => {
					const { name, githubLink, link, skills, image, desc } = project

					let className = ""
					
					if(index + 1 === currentProject) {
						className = "currentProject"
					} else if(index + 2 === currentProject) {
						className = "lastProject"
					} else {
						className = "nextProject"
					}
					
					// if(currentProject === 1) {
					// 	if(index + 1 === data.projects.length) {
					// 		className = "lastProject"
					// 	}
					// }

					return (
						<div className={`project-card-content ${className}`} key={index}>
							<h3>{name}</h3>
							<div>
								<div className="project-hero">
									<img src={image} alt={name} />
									<div>
										<h4>Skills Used</h4>
										<div className="project-skill-cards">
										{
											skills.map((skill, index) => {
												return (
													<SkillCard key={index} skillName={skill}/>
												)
											})
										}
										</div>
									</div>
								</div>
								<div className="project-desc">
									{
										desc.map((description, index) => {
											return (
												<p key={index}>{description}</p>
											)
										})
									}
								</div>
							</div>
							<div className="project-links">
								{ githubLink && <button>View on Github</button> }
								{ link && <button>View site</button> }
							</div>
						</div>
					)
				})
			}
			</div>
			<div>
				{ currentProject !== 1 && <button className="prevBtn" onClick={() => setCurrentProject(currentProject - 1)}>
						<img src={leftIcon} alt="leftIcon" />
					</button> }
			</div>
			<div>
				{ currentProject !== data.projects.length && <button className="nextBtn" onClick={() => setCurrentProject(currentProject + 1)}>
						<img src={rightIcon} alt="rightIcon" />
					</button> }
			</div>
		</section>
	)
}

export default Projects

import React from 'react';

import figmaLogo from '../images/figma-logo.svg'
import reactLogo from '../images/react-logo.svg'
import nodeLogo from '../images/node-logo.svg'

const WhatIDo = () => {
	return (
		<section className="what-i-do">
			<div className="container">
				<h2>What I Do</h2>
				<div className="cards">
					<div className="card-1">
						<img src={figmaLogo} alt="figmaLogo" />
						<h5>UI/UX Design</h5>
						<p>I am capable of using prototyping tools such as Figma and Adobe XD to design the application to ease the development process.</p>
					</div>
					<div className="card-2">
						<img src={reactLogo} alt="reactLogo" />
						<h5>Frontend Development</h5>
						<p>As a developer, it is our first priority to build user-friendly applications. I specialize in frontend frameworks such as React.js, Sass, JQuery, and Ajax.</p>
					</div>
					<div className="card-3">
						<img src={nodeLogo} alt="nodeLogo" />
						<h5>Backend Development</h5>
						<p>Storing data in the server is essential in web applications. Building connections to the server using Node.js and Express JS is one of my strong abilities. </p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhatIDo

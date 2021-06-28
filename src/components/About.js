import React from 'react'

import data from './data/data.json';

import myImage from '../images/photo-portrait.jpg';

import htmlLogo from '../images/html-logo.svg';
import cssLogo from '../images/css-logo.svg';
import javascriptLogo from '../images/javascript-logo.svg';
import reactLogoRect from '../images/react-logo-2.svg';
import sassLogo from '../images/sass-logo.svg';
import jqueryLogo from '../images/jquery-logo.svg';
import nodeLogoRect from '../images/node-logo-2.svg';
import expressLogo from '../images/express-logo.svg';
import mongoLogo from '../images/mongo-logo.svg';
import mysqlLogo from '../images/mysql-logo.svg';
import phpLogo from '../images/php-logo.svg';
import pythonLogo from '../images/python-logo.svg';
import flaskLogo from '../images/flask-logo.svg';
import javaLogo from '../images/java-logo.svg';
import gitLogo from '../images/git-logo.svg';
import figmaLogoRect from '../images/figma-logo-2.svg';
import adobexdLogo from '../images/adobexd-logo.svg';

const About = () => {
	return (
		<section className="about" id="about">
			<div className="container">
				<h2>About Me</h2>
				<div className="intro">
					<div className="img"><img src={myImage} alt="myImage" /></div>
					<div className="intro-text">
						<h4>Hello, I am Andre!</h4>
						<h6>{data.about}</h6>
					</div>
				</div>
				<div className="skills">
					<h3>Programming Skills</h3>
					<div className="skill-cards">
						<div className="card"><img src={htmlLogo} alt="htmlLogo" /></div>
						<div className="card"><img src={cssLogo} alt="cssLogo" /></div>
						<div className="card"><img src={javascriptLogo} alt="javascriptLogo" /></div>
						<div className="card"><img src={reactLogoRect} alt="reactLogoRect" /></div>
						<div className="card"><img src={sassLogo} alt="sassLogo" /></div>
						<div className="card"><img src={jqueryLogo} alt="jqueryLogo" /></div>
						<div className="card"><img src={nodeLogoRect} alt="nodeLogoRect" /></div>
						<div className="card"><img src={expressLogo} alt="expressLogo" /></div>
						<div className="card"><img src={mongoLogo} alt="mongoLogo" /></div>
						<div className="card"><img src={mysqlLogo} alt="mysqlLogo" /></div>
						<div className="card"><img src={phpLogo} alt="phpLogo" /></div>
						<div className="card"><img src={pythonLogo} alt="pythonLogo" /></div>
						<div className="card"><img src={flaskLogo} alt="flaskLogo" /></div>
						<div className="card"><img src={javaLogo} alt="javaLogo" /></div>
						<div className="card"><img src={gitLogo} alt="gitLogo" /></div>
					</div>
					<h3>Design Skills</h3>
					<div className="skill-cards">
						<div className="card"><img src={figmaLogoRect} alt="figmaLogoRect" /></div>
						<div className="card"><img src={adobexdLogo} alt="adobexdLogo" /></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About

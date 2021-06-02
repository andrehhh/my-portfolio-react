import React from 'react'

import data from './data/data.json';

import myImage from '../images/photo-portrait.jpg';

import htmlLogo from '../images/html-logo.svg';
import cssLogo from '../images/css-logo.svg';
import javascriptLogo from '../images/javascript-logo.svg';
import reactLogo2 from '../images/react-logo-2.svg';
import sassLogo from '../images/sass-logo.svg';
import jqueryLogo from '../images/jquery-logo.svg';
import nodeLogo2 from '../images/node-logo-2.svg';
import expressLogo from '../images/express-logo.svg';
import mongoLogo from '../images/mongo-logo.svg';
import mysqlLogo from '../images/mysql-logo.svg';
import phpLogo from '../images/php-logo.svg';
import pythonLogo from '../images/python-logo.svg';
import flaskLogo from '../images/flask-logo.svg';
import javaLogo from '../images/java-logo.svg';
import gitLogo from '../images/git-logo.svg';
import figmaLogo2 from '../images/figma-logo-2.svg';
import adobexdLogo from '../images/adobexd-logo.svg';

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me-section">
            <div className="about-me-container container">
                <h1>About Me</h1>
                <div className="introduction-container">
                    <div className="introduction-left">
                        <img src={myImage} />
                    </div>
                    <div className="introduction-right">
                        <h4>Hello, I am Andre!</h4>
                        <p>{data.about}</p>
                    </div>
                </div>
                <div className="skills-container">
                    <h4>Programming Skills</h4>
                    <ul>
                        <li><img src={htmlLogo} /></li>
                        <li><img src={cssLogo} /></li>
                        <li><img src={javascriptLogo} /></li>
                        <li><img src={reactLogo2} /></li>
                        <li><img src={sassLogo} /></li>
                        <li><img src={jqueryLogo} /></li>
                        <li><img src={nodeLogo2} /></li>
                        <li><img src={expressLogo} /></li>
                        <li><img src={mongoLogo} /></li>
                        <li><img src={mysqlLogo} /></li>
                        <li><img src={phpLogo} /></li>
                        <li><img src={pythonLogo} /></li>
                        <li><img src={flaskLogo} /></li>
                        <li><img src={javaLogo} /></li>
                        <li><img src={gitLogo} /></li>
                    </ul>
                </div>
                <div className="skills-container-2">
                    <h4>Design Skills</h4>
                    <ul>
                        <li><img src={figmaLogo2} /></li>
                        <li><img src={adobexdLogo} /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

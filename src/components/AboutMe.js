import React from 'react'

import data from './data/data.json'

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me-section">
            <div className="about-me-container container">
                <h1>About Me</h1>
                <div className="introduction-container">
                    <div className="introduction-left">
                        <img src={'/images/photo-portrait.jpg'} />
                    </div>
                    <div className="introduction-right">
                        <h4>Hello, I am Andre!</h4>
                        <p>{data.about}</p>
                    </div>
                </div>
                <div className="skills-container">
                    <h4>Programming Skills</h4>
                    <ul>
                        <li><img src={'/images/html-logo.svg'} /></li>
                        <li><img src={'/images/css-logo.svg'} /></li>
                        <li><img src={'/images/javascript-logo.svg'} /></li>
                        <li><img src={'/images/react-logo-2.svg'} /></li>
                        <li><img src={'/images/sass-logo.svg'} /></li>
                        <li><img src={'/images/jquery-logo.svg'} /></li>
                        <li><img src={'/images/node-logo-2.svg'} /></li>
                        <li><img src={'/images/express-logo.svg'} /></li>
                        <li><img src={'/images/mongo-logo.svg'} /></li>
                        <li><img src={'/images/mysql-logo.svg'} /></li>
                        <li><img src={'/images/php-logo.svg'} /></li>
                        <li><img src={'/images/python-logo.svg'} /></li>
                        <li><img src={'/images/flask-logo.svg'} /></li>
                        <li><img src={'/images/java-logo.svg'} /></li>
                        <li><img src={'/images/git-logo.svg'} /></li>
                    </ul>
                </div>
                <div className="skills-container-2">
                    <h4>Design Skills</h4>
                    <ul>
                        <li><img src={'/images/figma-logo-2.svg'} /></li>
                        <li><img src={'/images/adobexd-logo.svg'} /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

import React from 'react';
import { Link } from 'react-scroll';

import data from './data/data.json';

import mailLogo from '../images/mail-logo.svg';
import linkedinLogo from '../images/linkedin-logo.svg';
import githubLogo from '../images/github-logo.svg';

import stripes from '../images/2stripes.png';
import landingImage from '../images/landing-photo.jpg';

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-container">
                <div className="landing-left">
                    <div className="navbar">
                    <div className="navbar-container container">
                        <div className="logo">Dre</div>
                        <ul>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="what-i-do-section"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={700}
                                >What I Do</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="projects-section"
                                    spy={true}
                                    smooth={true}
                                    offset= {-30}
                                    duration={700}
                                >Projects</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="about-me-section"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={700}
                                >About Me</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="landing-left-container container">
                    <h1 className="slogan">User First Web Application to fit Your Needs. ✌️</h1>
                    </div>
                </div>
                <div className="landing-right">
                    <div className="landing-right-container">
                    <ul>
                        <li><a href={"mailto:" + data.email}><img src={mailLogo} alt="mail-logo" /></a></li>
                        <li><a href={data.linkedin} target="_blank"><img src={linkedinLogo} alt="linkedin-logo" /></a></li>
                        <li><a href={data.github} target="_blank"><img src={githubLogo} alt="github-logo" /></a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <img className="stripes-img" src={stripes} alt="stripes" />
            <img className="landing-image" src={landingImage} alt="landing-image" />
        </div>
    )
}

export default Landing

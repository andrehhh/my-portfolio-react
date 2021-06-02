import React from 'react';
import { Link } from 'react-scroll';

import data from './data/data.json';

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
                        <li><a href={"mailto:" + data.email}><img src={'/images/mail-logo.svg'} alt="mail-logo" /></a></li>
                        <li><a href={data.linkedin} target="_blank"><img src={'/images/linkedin-logo.svg'} alt="linkedin-logo" /></a></li>
                        <li><a href={data.github} target="_blank"><img src={'/images/github-logo.svg'} alt="github-logo" /></a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <img className="stripes-img" src={'/images/2stripes.png'} />
            <img className="landing-image" src={'/images/landing-photo.jpg'} alt="landing-image" />
        </div>
    )
}

export default Landing

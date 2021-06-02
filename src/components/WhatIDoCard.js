import React from 'react'
import PropTypes from 'prop-types'

import figmaLogo from '../images/figma-logo.svg';
import reactLogo from '../images/react-logo.svg';
import nodeLogo from '../images/node-logo.svg';

const WhatIDoCard = ({ type }) => {
    if(type == "uiux") {
        return (
            <li>
                <img src={figmaLogo} />
                <h3>UI/UX Design</h3>
                <p>I am capable of using prototyping tools such as Figma and Adobe XD to design the application to ease the development process.</p>
            </li>
        )

    } else if (type == "frontend") {
        return (
            <li>
                <img src={reactLogo} />
                <h3>Frontend Web Developer</h3>
                <p>As a developer, it is our first priority to build user-friendly applications. I specialize in frontend frameworks such as React.js, Sass, JQuery, and Ajax.</p>
            </li>
        )

    } else if (type == "backend") {
        return (
            <li>
                <img src={nodeLogo} />
                <h3>Backend Web Developer</h3>
                <p>Storing data in the server is essential in web applications. Building connections to the server using Node.js and Express JS is one of my strong abilities.</p>
            </li>
        )
    }
}

WhatIDoCard.propTypes = {
    type: PropTypes.string,
}

export default WhatIDoCard

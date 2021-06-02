import React from 'react'
import PropTypes from 'prop-types'

const Project = ({name, description, image, link}) => {
    return (
        <li>
            <img src={'/images/' + image} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={link}>View on Github &#62;</a>
            </div>
        </li>
    )
}

Project.propTypes = {
    name: PropTypes.string,
}

export default Project

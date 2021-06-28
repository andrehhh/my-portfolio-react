import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

import React from 'react'

const Navbar = () => {
	return (
		<section className="navbar container">
			<div className="logo">Dre</div>
			<ul className="nav-links">
				<Link to="/projects" className="white-link">Projects</Link>
				<ScrollLink
				activeClass="active"
				to="about"
				spy={true}
				smooth={true}
				duration={700}
				className="white-link">
					About
			</ScrollLink>
			<ScrollLink
				activeClass="active"
				to="contact"
				spy={true}
				smooth={true}
				duration={700}
				className="white-link">
					Contact
			</ScrollLink>
			</ul>
		</section>
	)
}

export default Navbar

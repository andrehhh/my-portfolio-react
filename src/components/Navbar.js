import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

import { useGlobalContext } from '../context'

const Navbar = () => {
	const { currentPath } = useGlobalContext()

	if(currentPath === '/') {
		return (
			<section className="navbar container">
				<div className="logo"><Link to="/" className="link">Dre</Link></div>
				<ul className="nav-links">
					<Link to="/projects" className="link">Projects</Link>
					<ScrollLink
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					duration={700}
					className="link">
						About
				</ScrollLink>
				<ScrollLink
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					duration={700}
					className="link">
						Contact
				</ScrollLink>
				</ul>
			</section>
		)

	} else {
		return (
			<section className="navbar container">
				<div className="logo"><Link to="/" className="link">Dre</Link></div>
				<ul className="nav-links">
					<div></div>
					<div></div>
					<div></div>
					<Link to="/" className="link">Home</Link>
				</ul>
			</section>
		)
	}

	
}

export default Navbar

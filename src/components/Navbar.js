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
					<div></div>
					<div></div>
					<div></div>
					<Link to="/projects" className="link">Projects</Link>
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

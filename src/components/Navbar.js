import { Link } from 'react-router-dom'

import React from 'react'

const Navbar = () => {
	return (
		<section className="navbar container">
			<div className="logo">Dre</div>
			<ul className="nav-links">
				<li>Home</li>
				<li>Projects</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</section>
	)
}

export default Navbar

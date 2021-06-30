import React, { useEffect } from 'react'

import Hero from '../components/Hero';
import WhatIDo from '../components/WhatIDo';
import About from '../components/About';
import Contact from '../components/Contact';

import { useGlobalContext } from '../context';

const Home = ({ location }) => {

	const { setCurrentPath } = useGlobalContext()

	useEffect(() => {
		setCurrentPath(location.pathname)
	}, [setCurrentPath, location.pathname])

	return (
		<>
			<Hero />
			<WhatIDo />
			<About />
			<Contact />
		</>
	)
}

export default Home

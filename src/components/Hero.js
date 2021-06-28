import React from 'react'

import heroImage from '../images/hero-image.png'
import waveImage from '../images/wave.png'

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div>
					<h1>Beautifully Crafted<br />Web Application</h1>
					<button>Contact Me</button>
				</div>
				<img src={heroImage} alt="" className="hero-image" />
			</div>
			<img className="wave-image" src={waveImage} alt="" />
		</section>
	)
}

export default Hero

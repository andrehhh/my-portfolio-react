import React from 'react'

import data from './data/data.json';

import mailImage from '../images/mail-img.png';
import mailLogo from '../images/mail-logo.svg';
import linkedinLogo from '../images/linkedin-logo.svg';
import githubLogo from '../images/github-logo.svg';
import phoneLogo from '../images/phone-logo.svg';
import whatsappLogo from '../images/whatsapp-logo.svg';
import instagramLogo from '../images/instagram-logo.svg';
import twitterLogo from '../images/twitter-logo.svg';
import facebookLogo from '../images/facebook-logo.svg';

const Contact = () => {
	return (
		<section className="contact">
			<div className="container">
				<h2>Contact Me</h2>
				<div className="contact-hero">
					<img src={mailImage} alt="mailImage"/>
					<div className="form">
						<h3>Leave me a mail</h3>
						<form>
							<input type="text" placeholder="From (email)" />
							<textarea placeholder="Message" />
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
				<div className="contacts">
					<div className="non-socials">
						<div className="link">
							<img src={mailLogo} alt="mailLogo" />
							<h6>{data.email}</h6>
						</div>
						<div className="link">
							<img src={phoneLogo} alt="phoneLogo" />
							<h6>{data.phone}</h6>
						</div>
					</div>
					<div className="socials">
						<a href={data.github} target="_blank" className="link">
							<img src={githubLogo} alt="githubLogo" />
							<h6>Github</h6>
						</a>
						<a href={data.linkedin} target="_blank" className="link">
							<img src={linkedinLogo} alt="linkedinLogo" />
							<h6>LinkedIn</h6>
						</a>
						<a href={data.whatsapp} target="_blank" className="link">
							<img src={whatsappLogo} alt="whatsappLogo" />
							<h6>Whatsapp</h6>
						</a>
						<a href={data.instagram} target="_blank" className="link">
							<img src={instagramLogo} alt="instagramLogo" />
							<h6>Instagram</h6>
						</a>
						<a href={data.twitter} target="_blank" className="link">
							<img src={twitterLogo} alt="twitterLogo" />
							<h6>Twitter</h6>
						</a>
						<a href={data.facebook} target="_blank" className="link">
							<img src={facebookLogo} alt="facebookLogo" />
							<h6>Facebook</h6>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact

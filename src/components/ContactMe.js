import React from 'react'

import data from '../components/data/data.json';

import mailLogo from '../images/mail-logo.svg';
import linkedinLogo from '../images/linkedin-logo.svg';
import phoneLogo from '../images/phone-logo.svg';
import whatsappLogo from '../images/whatsapp-logo.svg';
import instagramLogo from '../images/instagram-logo.svg';
import twitterLogo from '../images/twitter-logo.svg';
import facebookLogo from '../images/facebook-logo.svg';

const ContactMe = () => {
    return (
        <div className="contact-me container">
            <h3>Contact Me</h3>
            <div className="contact-me-container">
                <div className="contact-me-left">
                    <ul>
                    <li>
                        <img src={mailLogo} />
                        <p>{data.email}</p>
                    </li>
                    <li>
                        <img src={phoneLogo} />
                        <p>{data.phone}</p>
                    </li>
                    </ul>
                </div>
                <div className="contact-me-right">
                    <ul>
                    <li>
                        <a href={data.whatsapp} target="_blank">
                        <img src={whatsappLogo} />
                        <p>Whatsapp</p>
                        </a>
                    </li>
                    <li>
                        <a href={data.instagram} target="_blank">
                        <img src={instagramLogo} />
                        <p>Instagram</p>
                        </a>
                    </li>
                    <li>
                        <a href={data.twitter} target="_blank">
                        <img src={twitterLogo} />
                        <p>Twitter</p>
                        </a>
                    </li>
                    <li>
                        <a href={data.linkedin} target="_blank">
                        <img src={linkedinLogo} />
                        <p>LinkedIn</p>
                        </a>
                    </li>
                    <li>
                        <a href={data.facebook} target="_blank">
                        <img src={facebookLogo} />
                        <p>Facebook</p>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactMe

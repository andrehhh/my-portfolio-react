import React from 'react'

import data from '../components/data/data.json';

const ContactMe = () => {
    return (
        <div className="contact-me container">
            <h3>Contact Me</h3>
            <div className="contact-me-container">
                <div className="contact-me-left">
                    <ul>
                    <li>
                        <img src={'/images/mail-logo.svg'} />
                        <p>{data.email}</p>
                    </li>
                    <li>
                        <img src={'/images/phone-logo.svg'} />
                        <p>{data.phone}</p>
                    </li>
                    </ul>
                </div>
                <div className="contact-me-right">
                    <ul>
                    <li>
                        <a href={data.whatsapp} target="_blank">
                        <img src={'/images/whatsapp-logo.svg'} />
                        <p>Whatsapp</p>
                        </a>
                    </li>
                    <li>
                        <a href={data.instagram} target="_blank">
                        <img src={'/images/instagram-logo.svg'} />
                        <p>Instagram</p>
                        </a>
                    </li>
                    <li>
                        <a href={data.twitter} target="_blank">
                        <img src={'/images/twitter-logo.svg'} />
                        <p>Twitter</p>
                        </a>
                    </li>
                    <li>
                        <a href={data.linkedin} target="_blank">
                        <img src={'/images/linkedin-logo.svg'} />
                        <p>LinkedIn</p>
                        </a>
                    </li>
                    <li>
                        <a href={data.facebook} target="_blank">
                        <img src={'/images/facebook-logo.svg'} />
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

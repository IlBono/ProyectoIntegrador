import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
    <footer className="pie">
        <div className="container">
            <div className="isologotipo">
                <small>&copy; 2022 <b>Digital Booking</b></small>
            </div>
            <div className="red-social">
                <a href="#URL" className="social-button"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                <a href="#URL" className="social-button"><i></i><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="#URL" className="social-button"><i></i><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#URL" className="social-button"><i></i><FontAwesomeIcon icon={faInstagram} /></a>

            </div>
        </div>
    </footer>
    )
}

export default Footer
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='footer--container'>
            <footer className='footer'>
            <a href="https://github.com/Ramis-alt" target={'_blank'}><FontAwesomeIcon icon={faGitSquare} className="icon-style git-hub"></FontAwesomeIcon></a>
            <a href="https://twitter.com/IAmRamiroR" target={'_blank'}><FontAwesomeIcon icon={faTwitter} className="icon-style twi-tter"></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/ramiro-renteria-24bba520/" target={'_blank'}><FontAwesomeIcon icon={faLinkedin} className="icon-style linked-in"></FontAwesomeIcon></a>
            </footer>
            <p className='back-to-top' onClick={scrollToTop} style={{cursor:'pointer'}}>Back to Top</p>
        </div>
    );
};
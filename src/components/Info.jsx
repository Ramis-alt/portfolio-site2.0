import React from 'react';
import { Link } from 'react-router-dom';

export default function Info() {
    const afterClick = "https://www.linkedin.com/in/ramiro-renteria-24bba520/";
    const myGitHub = "https://github.com/Ramis-alt";
    //showCertificate is set to null so that no certificate is shown when the page is first loaded.
    const [showCertificate, setShowCertificate] = React.useState(null);

    const handleClose = () => {
        setShowCertificate(null); // Sets the state to null, hiding the iframe
    };
    return (
        <main className="main--body">
            <img src='images/IMG_3627.png' alt="Ramiro Renteria, smiling." />
            <div className="profile-info">
                <h1>Ramiro Renteria</h1>
                <h4>Full Stack Web Developer</h4>
                <h5><Link to='/contact' className='contact--edit' aria-label="Contact Ramiro Renteria">Contact</Link></h5>
                <hr></hr>
                <div className="myDetails">
                    <section aria-labelledby="about-heading">
                        <h2 id="about-heading">About</h2>
                        <p>Welcome to my website! I'm a passionate Full Stack developer with a deep fascination for web development.
                            I thrive on staying up-to-date with the latest technologies and best practices in the ever-evolving world of web development.
                            Exploring new horizons and embracing continuous learning are integral parts of my journey.
                            I'm excited to showcase my skills and share my experiences as I strive to create captivating and user-friendly web experiences.
                            Join me as I push the boundaries of what's possible on the web!
                        </p>
                    </section>
                    <section aria-labelledby="interests-heading">
                        <h2 id="interests-heading">Interests</h2>
                        <p>New emerging technologies. Open to all kinds of music. Gamer. Outdoorsy. SciFi movie geek. 90's music. Traveling. Baseball.</p>
                    </section>
                    <section aria-labelledby="achievements-heading">
                        <h2 id="achievements-heading">My Certificates</h2>
                        <button onClick={() => setShowCertificate('certificate1')} aria-label="Show Certificate">Front-End</button>
                        <button onClick={() => setShowCertificate('certificate2')} aria-label="Show Certificate">Full-Stack</button>
                        <button onClick={() => setShowCertificate('certificate3')} aria-label="Show Certificate">Back-End</button>
                        <button onClick={() => setShowCertificate('certificate4')} aria-label="Show Certificate">Resume</button>

                        {showCertificate === 'certificate1' && (
                            <div className="certificate-container">
                                <button onClick={handleClose} aria-label="Close Certificate">X</button>
                                <iframe
                                    src='/Ramiro-Renteria-Student-ID-22324-Front-End-Web-App-Development-Course.pdf'
                                    className="certificate-frame"
                                    title='Front End Web-App Development Course'
                                ></iframe>
                            </div>
                        )}
                        {showCertificate === 'certificate2' && (
                            <div className="certificate-container">
                                <button onClick={handleClose} aria-label="Close Certificate">X</button>
                                <iframe
                                    src='/Ramiro Renteria-Student-ID-22324-Full Stack Web-App Development Course.pdf'
                                    className="certificate-frame"
                                    title='Full Stack Development Course'
                                ></iframe>
                                
                            </div>
                        )}
                        {showCertificate === 'certificate3' && (
                            <div className="certificate-container">
                                <button onClick={handleClose} aria-label="Close Certificate">X</button>
                                <iframe
                                    src='/Ramiro Renteria-Student-ID-22324-Intro to Back-End Web-Development Module.pdf'
                                    className="certificate-frame"
                                    title='Back End Development Course'
                                ></iframe>
                                
                            </div>
                        )}
                        {showCertificate === 'certificate4' && (
                            <div className="certificate-container">
                                <button onClick={handleClose} aria-label="Close Certificate">X</button>
                                <iframe
                                    src='/ResumeMostCurrent1.pdf'
                                    className="certificate-frame"
                                    title='Resume'
                                ></iframe>
                                
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </main>
    );
};
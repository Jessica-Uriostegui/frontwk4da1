import React from 'react';
import './About.css';
import aboutImage from '../luffy.jpg';


const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className='about-content'>
                <img src={aboutImage} alt='About Us' className='about-image' />
                <p>My name is Monkey D. Luffy. I will be King of The Pirates.  I am on a quest to find The One Piece Treasure.
                   I have traveled the seas for over a year. I have excellent leadership experience since I am captain of the Strawhats.
                </p> 
            </div>
        </section>
    );
};

export default About;
import React from 'react';
import'./Contact.css';
;






const Contact = () => {
    return (
        <section id="contact" className='contact'>
            <h2>Contact Me</h2>
            <p>Email: Luffy@GrandLine.com</p>
            <section className="video-section">
                <h3>Communication</h3>
                <video width="200" height="200" controls>
                    <source src="/transponder.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <p>You can reach me on my Transponder snail.</p>
            </section>
        </section>
    );
};

export default Contact;
import React from 'react';
import styles from './EventAbout.module.css';

import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <h1 className={styles.title}>About Us</h1>
                <div className={styles.description}>
                  <p>
                  What happens at one of our 24 hour hackathons?
                  This is an opportunity for students of all abilities to collaborate, learn new skills, and build something cool using technology. 
                  It's a great way for people with similar interests to work together on exciting projects in a fast-paced, creative environment.</p>


                  <p>This is a fantastic opportunity to enjoy yourself, boost your CV, and above all learn something new. Be it tech and software skills or teamwork experience. There's room for both the competitive and the laid back, and a chance for people of any level of experience to win prizes. The event is entirely free and paid for by our lovely sponsors.</p>

                  <p>Once again, this year  HackSussex 2023 will be going Hybrid! In addition to the in-person experience, you will be able to take part online!
                  Thanks to our partners at the Media Technology Lab, we will be running a professional live stream throughout the event to allow our digital attendees to ask questions, speak to sponsors, attend workshops and take part in the hack!
                  HackSussex 2023 is run in accordance with the MLH Code of Conduct and the Hackathons UK Code of Conduct.</p>
                </div>


                <div className={styles.buttonGroup}>
                  <Link to="/hackathon-register" className={styles.button}>Register</Link>
                  <Link to="/hackathon-faq" className={styles.button}>FAQ</Link>
              </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.rightColumnContent}>
                    <p>✅ 24 Hours of project building</p>
                    <p>✅ Win exciting prizes</p>
                    <p>✅ Free swag</p>
                    <p>✅ Free Food and Drinks</p>
                    <p>✅ Workshops to learn skills</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

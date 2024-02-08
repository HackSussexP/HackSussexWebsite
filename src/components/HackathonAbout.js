import React from 'react';

import AboutSection from './AboutSection';

const HackathonAbout = () => {

    const styles = {
        "pcVideo": { aspectRatio: '16/9', maxWidth: '50%', borderRadius: '15px' },
        "mobileVideo": { aspectRatio: '9/16', maxWidth: '80%', borderRadius: '15px' },
        "title": {color: "var(--electric-green)"}
    }

    return (
    <>
        <div className='container w-75'>
            <div className='row'>
                <p className='col m-2 p-2 text-light text-center display-4'>What actually is a hackathon?</p>
            </div>
            <AboutSection description={<>
                    <p>
                    The 2024 Hackathon is almost upon us! This unique event is hosted over a full weekend including 24 hours of non-stop coding, workshops hosted by our sponsors, 5 mouth-wateringly tasty meals from local Brighton caterers, snacks and drinks, and an exclusive Hackathon 2024 t-shirt, <strong>all for free!</strong></p>
                    <p>Your project can enter multiple of our many prize tracks, with a prize pool worth over £3,000! If you don't have a team, find your family-for-the-weekend in our team building event! Together you'll create a game, some software or something electronic. Have you never coded before? Have you been coding since you were conceived? Are you competitive? Are you laid back? Want to boost your CV while having fun? Join us for our best hackathon yet - you won't want to miss this! <strong>Get your free ticket now!</strong></p>
                    </>}
            list={["24 Hours of team project building", "£3,000+ worth of exciting prizes", "Free swag", "Free Food and Drinks", "Workshops and entertainment"]} />
            <div className='row d-none d-sm-flex m-3 justify-content-center'>
                <iframe 
                    className="w-100 rounded" 
                    src="https://www.youtube.com/embed/X0D1yNHRXoI" 
                    style={styles.pcVideo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Hackathon Video"
                ></iframe>
            </div>
            <div className='row d-flex d-sm-none p-2 mb-3 justify-content-center'> {/* Mobile video */}
                <iframe 
                    className="w-100 rounded" 
                    src="https://www.youtube.com/embed/X0D1yNHRXoI" 
                    style={styles.mobileVideo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Hackathon Video"
                ></iframe>
            </div>
            <div className='row d-none d-sm-flex justify-content-evenly m-3 mt-5'>
                <div className="col mx-3 ms-5">
                    <p id="example-title" className="display-3 text-start fw-bold" style={styles.title}>Food</p>
                    <p>Some of Brighton's best food spots will join us on campus to keep you fed throughout the event. Previous caterers include:</p>
                    <ul>
                        <li>Oui! Creperie</li>
                        <li>Taquitos Casazul</li>
                        <li>Pizza Me</li>
                    </ul>
                </div>
                <div className="col mx-3">
                    <p id="example-title" className="display-3 text-start fw-bold" style={styles.title}>Workshops</p>
                    <p>Take part in workshops run by our Sponsors that are guaranteed to teach you something new, that cover anything from emerging technology through to interview Prep.</p>
                </div>
                <div className="col mx-3 me-5">
                    <p id="example-title" className="display-3 text-start fw-bold" style={styles.title}>Prizes</p>
                    <p>We've given away some great prizes at our events like:</p>
                    <ul>
                        <li>Nintendo Switches</li>
                        <li>iFixit kits</li>
                        <li>Ender-3 3D printers</li>
                    </ul>
                </div>
            </div>
            <div className='row d-sm-none m-1 d-flex justify-content-center'> {/* Mobile version */}
                <div className="col mx-3">
                    <p id="example-title" className="display-3 text-start fw-bold" style={styles.title}>Food</p>
                    <p>Some of Brighton's best food spots will join us on campus to keep you fed throughout the event. Previous caterers include:</p>
                    <ul>
                        <li>Oui! Creperie</li>
                        <li>Taquitos Casazul</li>
                        <li>Pizza Me</li>
                    </ul>
                </div>
                <div className="col mx-3">
                    <p id="example-title" className="display-3 text-start fw-bold" style={styles.title}>Workshops</p>
                    <p>Take part in workshops run by our Sponsors that are guaranteed to teach you something new, that cover anything from emerging technology through to interview Prep.</p>
                </div>
                <div className="col mx-3">
                    <p id="example-title" className="display-3 text-start fw-bold" style={styles.title}>Prizes</p>
                    <p>We've given away some great prizes at our events like:</p>
                    <ul>
                        <li>Nintendo Switches</li>
                        <li>iFixit kits</li>
                        <li>Ender-3 3D printers</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
}

export default HackathonAbout;

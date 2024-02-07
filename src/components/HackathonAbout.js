import React, { useState } from 'react';

import AboutSection from './AboutSection';

const HackathonAbout = () => {

    const [hoveredLink, setHoveredLink] = useState(null);

    const config = {
        "video": true,
    }
    const styles = {
        "pcVideo": { aspectRatio: '16/9', maxWidth: '50%', borderRadius: '15px' },
        "mobileVideo": { aspectRatio: '9/16', maxWidth: '80%', borderRadius: '15px' },
        "title": {color: "var(--electric-green)"},
        "defaultStyle": { textDecoration: "none", color: "white" },
        "hoverStyle": { textDecoration: "none", color: "var(--teal)" }
    }

    return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <p className='col m-2 p-2 text-light text-center display-4'>What actually is a hackathon?</p>
            </div>
            <AboutSection description={<>
                <p>With only a few days until the Hacksussex Hackathon 2024, we hope that you are just as excited as we are! To ensure that you are having the best experience during your time developing, we have gathered all the important information regarding the event.</p>
                <p>In-person registration for the hackathon will begin at 10am on the 17th of February. It will take place at <a href="https://www.google.com/maps/place/50%C2%B051'56.4%22N+0%C2%B005'13.5%22W/@50.865676,-0.08709,17z/data=!3m1!4b1!4m4!3m3!8m2!3d50.865676!4d-0.08709?entry=ttu" style={hoveredLink === true ? styles.hoverStyle : styles.defaultStyle} onMouseEnter={() => setHoveredLink(true)} onMouseLeave={() => setHoveredLink(false)}>Chichester 1, University of Sussex</a>. The event will end at 6pm on the 18th of February.</p>
                <p>If coming from Falmer Station, keep an eye out for HackSussex signs guiding the way. If you are coming via the 25 or 23 bus from Brighton, hop off at the North South Road stop.</p>
                <p>If you are not coming with a team, you can find your team-for-the-weekend in our team building event on Saturday morning.</p>
                <p>Please be aware that by attending the Hackathon 2024, you are acknowledging that images, (audio, visual, photographic) may be taken of you. All content may be used by HackSussex, The University of Sussex and companies involved with Hackathon 2024.</p>
                <p>We also ask that you do not bring any nut products because there are attendees with severe allergies.</p>
            </>}
            list={["A laptop with a charger", "HDMI cable (we have monitors that you can use)", "Any peripherals you want to use in a project", "Any necessary hardware or tools, if you plan on working on a proecjt with them", "Water bottle and reusbale cup for hot drinks", "Toiletries and any mediacation you require"]} />
            {config.video && <div className='row d-none d-sm-flex m-3 justify-content-center'>
                <iframe 
                    className="w-100 rounded" 
                    src="https://www.youtube.com/embed/X0D1yNHRXoI" 
                    style={styles.pcVideo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Hackathon Video"
                ></iframe>
            </div>}
            {config.video && <div className='row d-flex d-sm-none p-2 mb-3 justify-content-center'> {/* Mobile video */}
                <iframe 
                    className="w-100 rounded" 
                    src="https://www.youtube.com/embed/X0D1yNHRXoI" 
                    style={styles.mobileVideo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Hackathon Video"
                ></iframe>
            </div>}
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
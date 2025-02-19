import React, { useState } from 'react';

import AboutSection from './AboutSection';

const HackathonAbout = () => {
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

    const [hoveredLink, setHoveredLink] = useState(null);

    const defaultStyle = {
        textDecoration: "none",
        color: "black"
    };

    const hoverStyle = {
        textDecoration: "none",
        color: "white"
    };

    return (
    <>
        <div className='container d-block w-75'>
            <AboutSection description={<>
                <p>HackSussex 2025 is almost upon us! This unique event is hosted over a full weekend, including 24 hours of non-stop coding, workshops hosted by our sponsors, 4 mouth-wateringly tasty meals from local Brighton caterers, snacks and drinks, and an exclusive 2025 t-shirt, <strong>all for free</strong>!</p>
                <p>Your project can enter multiple of our many prize tracks. If you don’t have a team, find your family-for-the-weekend in our team building event! Together you’ll create a game, some software or something electronic. Have you never coded before? Have you been coding since before you were conceived? Are you competitive? Are you laid back? Want to boost your CV while having fun? Join us for our best Hackathon yet – you won’t want to miss this!</p>
                </>}
            list={["A laptop with a charger", "HDMI cable (we have monitors that you can use)", "Any peripherals you want to use in a project", "Any necessary hardware or tools, if you plan on working on a project with them", "Water bottle and reusbale cup for hot drinks", "Toiletries and any medication you require"]} />
            <div className='container row rounded-4 my-2 mb-5 text-center text-dark' style={{backgroundColor: "var(--lime)"}}>
                <p className='display-6 text-decoration-underline'>Upcoming Train Engineering Work</p>
                <p className='h5 lh-lg'>Please note that there are planned engineering works that will affect these routes:</p>
                <ul className='list-group-flush'>
                <li className='list-group-item'>- Gatwick Express between London Victoria and BrightonThameslink between Bedford / Cambridge and Brighton</li>
                <li className='list-group-item'>- Southern between London Victoria and Brighton / Littlehampton / Ore.</li>
                <li className='list-group-item'>- Thameslink between Bedford / Cambridge and Brighton</li>
                </ul>
                <p className='h5'>There will be bus replacements but please check your rail provider before travelling</p>
                <a
                style={hoveredLink === true ? hoverStyle : defaultStyle}
                onMouseEnter={() => setHoveredLink(true)}
                onMouseLeave={() => setHoveredLink(false)}
                className="fs-4"
                href='https://www.southernrailway.com/travel-information/plan-your-journey/planned-engineering-work'
                target="_blank"
                rel="noreferrer"
                >Click here for more information.</a>
            </div>
        </div>
    </>
    );
}

export default HackathonAbout;
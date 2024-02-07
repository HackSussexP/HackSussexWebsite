import React, { useState } from "react";

import RotatingSponsorBanner from './../../components/RotatingSponsorBanner';
import EventWhereWhen from '../../components/EventWhereWhen'; 
import Timer from './../../components/Timer';
import Schedule from './../../components/Schedule';
import Sponsors from './../../components/Sponsors';
import TicketSection from '../../components/TicketSection';
import CodesOfConduct from '../../components/CodesOfConduct';

import AboutSection from '../../components/AboutSection';
import HackathonAbout from '../../components/HackathonAbout';

import HackathonBackground from '../../assets/hackathon-background-darker.png';
import HackathonLogo from '../../assets/events/hs24.png';

import RotoVRLogo from './../../assets/SponsorLogos/rotovr.png';
import Hastings from './.././../assets/SponsorLogos/hastings.png';
import paxton from './../../assets/SponsorLogos/paxton-logo.png';
import teachFirst from './../../assets/SponsorLogos/GameJam/TeachFirst.png';
import bcs from './../../assets/SponsorLogos/BCS.png';
import github from './../../assets/SponsorLogos/GameJam/GitHubDark.png';
import mlh from './../../assets/SponsorLogos/Mlh-logo.png';
import huk from './../../assets/SponsorLogos/GameJam/hackathonsUK.png';
import UoS from './../../assets/SponsorLogos/UoS.png';

const config = {
  "timer": true,
  "event": false,
  "schedule": false,
  "sponsors": true,
  "date": "Feb 17, 2024, 0:0:0",
  "title": "2024 Hackathon",
  "tickets": true,
  "url": "https://tickets.hacksussex.com/"
}

var schedule = {
  1: [
    {
      time: "10:00",
      event: "Registration Opens",
      location: "Chichester Lecture Theatre",
    },
    {
      time: "11:00 - 12:00",
      event: "Opening Ceremony",
      location: "Chichester Lecture Theatre",
    },
    {
      time: "12:00",
      event: "Hacking Begins",
      location: "The beginning of the journey",
    },
    {
      time: "1:00PM",
      event: "Event 4",
      location: "Location 1",
    }
  ],
  2: [
    {
      time: "10:00AM",
      event: "Event 1",
      location: "Location 1",
    },
    {
      time: "11:00AM",
      event: "Event 2",
      location: "Location 1",
    },
    {
      time: "12:00PM",
      event: "Event 3",
      location: "Location 1",
    },
    {
      time: "1:00PM",
      event: "Event 4",
      location: "Location 1",
    }
  ],
}

const sponsorData = [
  {
    title: "Gold Sponsors",
    size: "125px",
    logos: [
      { src: RotoVRLogo, url: "https://www.rotovr.com/" },
      { src: Hastings, url: "https://www.hastingsdirect.com/" },
    ]
  },
  {
    title: "Silver Sponsors",
    size: "110px",
    logos: [
      { src: paxton, url: "https://www.paxton-access.com/" },
      { src: bcs, url: "https://www.bcs.org/" }
    ]
  },
  {
    title: "Bronze Sponsors",
    size: "100px",
    logos: [
      { src: teachFirst, url: "https://www.teachfirst.org.uk/" }
    ]
  },
  {
    title: "Partners",
    size: "100px",
    logos: [
      { src: huk, url: "https://www.hackathons.org.uk/" },
      { src: UoS, url: "https://www.sussex.ac.uk/ei/" },
    ]
  },
];

const codes = [
  { name: "Hackthons UK", url: "https://www.hackathons.org.uk/code-of-conduct" }
];

const Hackathon = () => {

  const [hoveredLink, setHoveredLink] = useState(null);

  const defaultStyle = {
    textDecoration: "none",
    color: "black"
  };

  const hoverStyle = {
    textDecoration: "none",
    color: "white"
  };

  return(
    <>
      <div className="carousel-inner p-0">
        <img src={HackathonBackground} className="d-block w-100 img-fluid splash" alt='Hackathon background' />
        <div className="carousel-caption">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <img src={HackathonLogo} alt="Hackathon Logo" className="img-fluid me-auto ms-auto d-block p-3" />
              <p className='text-wrap text-start d-none d-lg-block'>
                📅 17th - 18th February 2024 <br />
                📍 Chichester building, University of Sussex, UK
              </p>
            </div>
            <div className="col-6 d-none d-lg-block">
              <iframe 
                className="w-100 rounded" 
                src="https://www.youtube.com/embed/gmKBSb7kbTY" 
                style={{ aspectRatio: '16/9', maxWidth: '560px', borderRadius: '15px' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Hackathon Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {config.tickets && <TicketSection url={config.url} />}
      {config.timer && <Timer date={config.date} title={config.title} />}
      <HackathonAbout />
      <EventWhereWhen location="University of Sussex, Brighton" date={"17 February 2024"} link={null} />
      <div className='container-fluid rounded-4 my-2 text-center text-dark' style={{backgroundColor: "var(--lime)"}}>
        <p className='display-6 text-decoration-underline'>Upcoming Train Strikes and Engineering Work</p>
        <p className='h5 lh-lg'>Please note the following:</p>
        <ul className='list-group-flush'>
          <li className='list-group-item'>- There are no train running between Three Bridges and Brighton on both days of the hackathon.</li>
          <li className='list-group-item'>- There are no train's between Three Bridges and Brighton in the early morning and late night Monday 12th to Friday 16th February.</li>
        </ul>
        <p className='h5'>There are further strikes and engineering work planned around this time so please check with your rail travel provider before travelling.</p>
        <a
          style={hoveredLink === true ? hoverStyle : defaultStyle}
          onMouseEnter={() => setHoveredLink(true)}
          onMouseLeave={() => setHoveredLink(false)}
          className="fs-4"
          href='https://www.southernrailway.com/travel-information/plan-your-journey/planned-engineering-work'
        >Click here for more information.</a>
      </div>
      {config.schedule && <Schedule schedule={schedule} />}
      <Sponsors sponsorData={sponsorData}/>
      <CodesOfConduct links={codes} />
    </>
  );
}

export default Hackathon;
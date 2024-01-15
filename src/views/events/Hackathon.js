import React from 'react';

import RotatingSponsorBanner from './../../components/RotatingSponsorBanner';
import EventWhereWhen from '../../components/EventWhereWhen'; 
import Timer from './../../components/Timer';
import Schedule from './../../components/Schedule';
import Sponsors from './../../components/Sponsors';
import TicketSection from '../../components/TicketSection';
import CodesOfConduct from '../../components/CodesOfConduct';

import AboutSection from '../../components/AboutSection';

import HackathonBackground from '../../assets/hackathon-background-darker.png';
import HackathonLogo from '../../assets/hackathon-2024.png';

import RotoVRLogo from './../../assets/SponsorLogos/GameJam/rotovr.png';
import Hastings from './.././../assets/SponsorLogos/hastings-direct-logo.png';
import paxton from './../../assets/SponsorLogos/paxton-logo.png';
import electricsqaure from './../../assets/SponsorLogos/ElectricSquare.png';
import teachFirst from './../../assets/SponsorLogos/GameJam/TeachFirst.png';
import bcs from './../../assets/SponsorLogos/BCS.png';
import github from './../../assets/SponsorLogos/GitHub.png';
import mlh from './../../assets/SponsorLogos/GameJam/mlh.jpg';
import huk from './../../assets/SponsorLogos/GameJam/HUK.jpg';

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
    size: "100%",
    logos: [
      { src: RotoVRLogo, url: "https://github.com" },
      { src: Hastings, url: "https://github.com" },
    ]
  },
  {
    title: "Silver Sponsors",
    size: "80%",
    logos: [
      { src: paxton, url: "https://github.com" },
      { src: electricsqaure, url: "https://github.com" },
    ]
  },
  {
    title: "Bronze Sponsors",
    size: "60%",
    logos: [
      { src: teachFirst, url: "https://github.com" },
      { src: bcs, url: "https://github.com" },
      { src: github, url: "https://github.com" },
    ]
  },
  {
    title: "Partners",
    size: "40%",
    logos: [
      { src: mlh, url: "https://github.com" },
      { src: huk, url: "https://github.com" },
    ]
  },
];

const codes = [
  { name: "Major League Hacking", url: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf" },
  { name: "Hackthons UK", url: "https://www.hackathons.org.uk/code-of-conduct" }
];

const Hackathon = () => {
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
      <AboutSection description={<>
                  <p>
                  What happens at one of our 24 hour hackathons?
                  This is an opportunity for students of all abilities to collaborate, learn new skills, and build something cool using technology. 
                  It's a great way for people with similar interests to work together on exciting projects in a fast-paced, creative environment.</p>
                  <p>This is a fantastic opportunity to enjoy yourself, boost your CV, and above all learn something new. Be it tech and software skills or teamwork experience. There's room for both the competitive and the laid back, and a chance for people of any level of experience to win prizes. The event is entirely free and paid for by our lovely sponsors.</p>
                  </>}
                  list={["24 Hours of project building", "Win exciting prizes", "Free swag", "Free Food and Drinks", "Workshops to learn skills"]} />
      <CodesOfConduct links={codes} />
      <EventWhereWhen location="University of Sussex, Brighton" date={"17 February 2024"} />
      {config.schedule && <Schedule schedule={schedule} />}
      <Sponsors sponsorData={sponsorData}/>
    </>
  );
}

export default Hackathon;
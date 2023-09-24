import React from 'react';

import RotatingSponsorBanner from './../../components/RotatingSponsorBanner';
import EventWhereWhen from '../../components/EventWhereWhen'; 
import Timer from './../../components/Timer';
import EventAbout from './../../components/EventAbout';
import Schedule from './../../components/Schedule';
import Sponsors from './../../components/Sponsors';


import HackathonBackground from '../../assets/hackathon-background-darker.png';
import HackathonLogo from '../../assets/hackathon-23-trans-gradient-small.png';

const config = {
  "timer": false,
  "event": false,
  "schedule": false,
  "sponsors": false,
  "date": "May 1, 2024, 0:0:0",
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
    title: "Title Sponsor",
    size: "80%",
    logos: [HackathonLogo]
  },
  {
    title: "Gold Sponsors",
    size: "40%",
    logos: [HackathonLogo, HackathonLogo]
  },
  {
    title: "Silver Sponsors",
    size: "30%",
    logos: [HackathonLogo, HackathonLogo, HackathonLogo]
  },
  {
    title: "Bronze Sponsors",
    size: "20%",
    logos: [HackathonLogo, HackathonLogo, HackathonLogo, HackathonLogo]
  },
  {
    title: "Partners",
    size: "20%",
    logos: [HackathonLogo, HackathonLogo, HackathonLogo, HackathonLogo]
  },
];

<Sponsors sponsorData={sponsorData} />

const Hackathon = () => {
  return(
    <>
      <div className="container-fluid p-0">
        <img src={HackathonBackground} className="d-block w-100 img-fluid" alt='Hackathon background' />
        <div className="carousel-caption">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <img src={HackathonLogo} alt="Hackathon Logo" className="img-fluid me-auto ms-auto d-block p-3" />
              <p className='text-wrap text-start d-none d-lg-block'>
                📅 18th - 19th February 2024 <br />
                📍 Chichester building, University of Sussex, UK <br />
                🌐 Hybrid
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
      {config.timer && <Timer date={config.date} />}
      <EventAbout />
      <EventWhereWhen location="University of Sussex, Brighton" date={config.timer === true ? config.date : null} />
      {config.schedule && <Schedule schedule={schedule} />}
      <Sponsors sponsorData={sponsorData}/>
    </>
  );
}

export default Hackathon;
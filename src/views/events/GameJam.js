import React from 'react';

import GameJamLogo from './../../assets/index-carousel/gamejam-logo.png';
import GameJamBackground from './../../assets/index-carousel/gamejam-background.png';

import EventWhereWhen from '../../components/EventWhereWhen'; 
import Timer from './../../components/Timer';
import Schedule from './../../components/Schedule';
import Sponsors from './../../components/Sponsors';

import AboutSection from '../../components/AboutSection';

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
    logos: [GameJamLogo]
  },
  {
    title: "Gold Sponsors",
    size: "40%",
    logos: [GameJamLogo, GameJamLogo]
  },
  {
    title: "Silver Sponsors",
    size: "30%",
    logos: [GameJamLogo, GameJamLogo, GameJamLogo]
  },
  {
    title: "Bronze Sponsors",
    size: "20%",
    logos: [GameJamLogo, GameJamLogo, GameJamLogo, GameJamLogo]
  },
  {
    title: "Partners",
    size: "20%",
    logos: [GameJamLogo, GameJamLogo, GameJamLogo, GameJamLogo]
  },
];

const GameJam = () => {
  return (
    <>
    <div className="carousel-inner p-0">
      <img src={GameJamBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
      <div className="carousel-caption">
        <div className='row align-items-center'>
            <div className="col-12 col-lg-6">
              <img src={GameJamLogo} alt="Game Jam Logo" className='img-fluid me-auto ms-auto d-block p-3'/>
              <p className='text-wrap text-start d-none d-lg-block'>
                📅 25th - 26th November 2023<br />
                📍 Chichester building, University of Sussex, UK<br />
                🌐 In-Person
              </p>
            </div>
            <div className='col-lg-6 d-none d-lg-block'>
              <h1 className='fw-bold display-4 text-electric'>Game Jam Event Loading...</h1>
              <div className='mt-3'>
                <div className="progress" style={{ height: '30px', borderRadius: '15px', backgroundColor: '#222' }}>
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='text-center mt-2 text-light display-6'>50%</div>
              </div>
            </div>
        </div>
      </div>
    </div>
    {config.timer && <Timer date={config.date} />}
    <AboutSection description={<>
                  <p>
                  This year, we are hosting our first GameJam. Collaborating with many of the local studios surrounding Brighton to focus 
                  in on our Game Development and Design enthusiasts. Much like a hackathon, teams will be tasked with building a project to 
                  compete in tracks to inspire game design and win prizes.If you are looking for an opportunity to collaborate with others and 
                  experience trial and error throughout the game development process, this event would be a good match for you. Also, it will 
                  be great for those who are looking for a place to have exploration of new technologies in the realm of game development. The 
                  event is entirely free and paid for by our lovely sponsors.
                  </p>
                  </>}
                  list={["24 Hours of project building", "Win exciting prizes", "Free swag", "Free Food and Drinks", "Workshops to learn skills"]} />
    <EventWhereWhen location="University of Sussex, Brighton" date={"25 November 2023"} />
    {config.schedule && <Schedule schedule={schedule} />}
    {/* <Sponsors sponsorData={sponsorData}/> */}
    </>
  );
}

export default GameJam;
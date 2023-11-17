import {React, useEffect} from 'react';

import GameJamLogo from './../../assets/index-carousel/gamejam-logo.png';
import GameJamBackground from './../../assets/index-carousel/gamejam-background.png';

import RotoVRLogo from './../../assets/SponsorLogos/GameJam/rotovr.png';
import BCSLogo from './../../assets/SponsorLogos/GameJam/BCSDark.png';
import GitHubLogo from './../../assets/SponsorLogos/GameJam/GitHubDarkTall.png';
import HackathonsUKLogo from './../../assets/SponsorLogos/GameJam/HUK.jpg';
import MLHLogo from './../../assets/SponsorLogos/GameJam/mlh2.png';
import RedbullLogo from './../../assets/SponsorLogos/GameJam/RedBull.png';
import SussexLogo from './../../assets/SponsorLogos/GameJam/UoS.png';
import TeachFirstLogo from './../../assets/SponsorLogos/GameJam/TeachFirstDark.png';

import EventWhereWhen from '../../components/EventWhereWhen'; 
import Timer from './../../components/Timer';
import Schedule from './../../components/Schedule';
import Sponsors from './../../components/Sponsors';
import TicketSection from '../../components/TicketSection';

import AboutSection from '../../components/AboutSection';


const config = {
  "timer": true,
  "event": false,
  "schedule": true,
  "sponsors": true,
  "date": "Nov 25, 2023, 11:00:00",
  "title": "2023 Game Jam",
  "tickets": true,
  "url": "https://pretix.eu/HackSussex2023/register/"
}

var schedule = {
  1: [
    {
      time: "10:00",
      event: "Registration Opens",
      location: "Chichester 1",
    },
    {
      time: "11:00",
      event: "Opening Ceremony",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "12:00",
      event: "Jam Begins",
      location: "Chichester 1 Labs",
    },
    {
      time: "1:00PM",
      event: "Lunch",
      location: "Chichester 1",
    },
    {
      time: "3:30PM",
      event: "Workshop/Talk",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "4:30PM",
      event: "Cup Stacking Contest",
      location: "Chichester 1 FTL",
    },
    {
      time: "5:30PM",
      event: "MLH Minigame",
      location: "Chichester 1",
    },
    {
      time: "6:30PM",
      event: "Dinner",
      location: "Chichester 1",
    },
    {
      time: "10:00PM",
      event: "Minecraft Games",
      location: "Chichester 1",
    }
  ],
  2:[
    {
      time: "12:00AM",
      event: "Midnight Snack",
      location: "Chichester 1",
    },
    {
      time: "1:00AM",
      event: "Movie",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "8:30AM",
      event: "Breakfast",
      location: "Breakfast",
    },
    {
      time: "11:00AM",
      event: "Soft Deadline",
      location: "Chichester 1",
    },
    {
      time: "12:00PM",
      event: "Jam Finishes + Science Fair",
      location: "Chichester 1",
    },
    {
      time: "1:00PM",
      event: "Lunch",
      location: "Chichester 1",
    },
    {
      time: "2:00PM",
      event: "Presentations",
      location: "Chichester 1",
    },
    {
      time: "4:00PM",
      event: "Closing Ceremony",
      location: "Chichester 1 Lecture Theatre",
    }
  ]
}

const sponsorData = [
  {
    title: "Gold Sponsor",
    size: "100%",
    logos: [
      { src: RotoVRLogo, url: "https://www.rotovr.com" }
    ]
  },
  // {
  //   title: "Gold Sponsors",
  //   size: "70%",
  //   logos: [
  //     { src: RotoVRLogo, url: "https://www.rotovr.com" }
  //   ]
  // },
  {
    title: "Silver Sponsors",
    size: "80%",
    logos: [
      { src: GitHubLogo, url: "https://github.com" },
      { src: BCSLogo, url: "https://www.bcs.org" }
    ]
  },
  {
    title: "Bronze Sponsors",
    size: "80%",
    logos: [
      { src: TeachFirstLogo, url: "https://www.teachfirst.org.uk" },
      { src: RedbullLogo, url: "https://www.redbull.com" }
    ]
  },
  {
    title: "Partners",
    size: "50%",
    logos: [
      { src: SussexLogo, url: "https://www.sussex.ac.uk" },
      { src: HackathonsUKLogo, url: "https://hackathons.org.uk" },
      { src: MLHLogo, url: "https://mlh.io" }
    ]
  },
];


const GameJam = () => {
  useEffect(() => {
    document.body.classList.add("gamejam-body");

    return () => {
      document.body.classList.remove("gamejam-body");
    };
  }, []);

  return (
    <>
    <div className="gamejam">
      <div className="carousel-inner p-0">
        <img src={GameJamBackground} className="d-block w-100 h-100 img-fluid splash" alt='Background' />
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
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="80" aria-valuemax="100"></div>
                  </div>
                  <div className='text-center mt-2 text-light display-6'>80%</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      {config.tickets && <TicketSection url={config.url} />}
      {config.timer && <Timer date={config.date} title={config.title} />}
      <AboutSection description={<>
                    <p>
                    This year, we are hosting our first GameJam. Collaborating with many of the local studios surrounding Brighton to focus 
                    in on our Game Development and Design enthusiasts. Much like a hackathon, teams will be tasked with building a project to 
                    compete in tracks to inspire game design and win prizes.If you are looking for an opportunity to collaborate with others and 
                    experience trial and error throughout the game development process, this event would be a good match for you. Also, it will 
                    be great for those who are looking for a place to have exploration of new technologies in the realm of game development. The 
                    event is entirely free and paid for by our lovely sponsors. HackSussex GameJam 2023 is run in accordance with the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">MLH Code of Conduct</a>.
                    </p>
                    </>}
                    list={["24 Hours of project building", "Win exciting prizes", "Free swag", "Free Food and Drinks", "Workshops to learn skills"]} />
      <EventWhereWhen location="University of Sussex, Brighton" date={"25 November 2023"} />
      {config.schedule && <Schedule schedule={schedule} />}
      {config.sponsors && <Sponsors sponsorData={sponsorData} />}
    </div>
    </>
  );
}

export default GameJam;
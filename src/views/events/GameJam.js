import {React, useEffect} from 'react';

import GameJamLogo from './../../assets/Events/GameJam/GJ25Logo.png';
import GameJamBackground from './../../assets/Events/GameJam/GJBackground.png';

import EventWhereWhen from '../../components/EventWhereWhen'; 
import Timer from '../../components/Timer';
import Schedule from '../../components/Schedule';
import TicketSection from '../../components/TicketSection';
import CodesOfConduct from '../../components/CodesOfConduct';
import Sponsors from '../../components/Sponsors';

import AboutSection from '../../components/AboutSection';


const config = {
  "timer": true,
  "event": true,
  "schedule": false,
  "sponsors": false,
  "date": "Dec 6, 2025, 10:00:00",
  "title": "2025 Game Jam",
  "tickets": true,
  "url": "https://tickets.hacksussex.com/GameJam25/"
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
      time: "2:00PM",
      event: "Github Workshop",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "3:30PM",
      event: "Game Dev & Shaders",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "5:00PM",
      event: "MS Paint w/ Bob Ross",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "6:30PM",
      event: "Dinner",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "10:00PM",
      event: "Karaoke",
      location: "Chichester 1",
    }
  ],
  2:[
    {
      time: "12:00AM",
      event: "Midnight Pizza",
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
      event: "Jam Finishes + Lunch",
      location: "Chichester 1",
    },
    {
      time: "1:00PM",
      event: "Judging Begins",
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
    size: "50%",
    logos: [
      { src: "", url: "" },
    ]
  },
  {
    title: "Silver Sponsors",
    size: "30%",
    logos: [
      { src: "", url: "" },
    ]
  },
  {
    title: "Bronze Sponsors",
    size: "30%",
    logos: [
      { src: "", url: "" },
    ]
  },
  {
    title: "Partners",
    size: "30%",
    logos: [
      { src: "", url: "" },
    ]
  },
  {
    title: "Supporters",
    size: "20%",
    logos: [
      { src: "", url: "" },
    ]
  }
];

const codes = [
  { name: "Hackthons UK", url: "https://www.hackathons.org.uk/code-of-conduct" }
]


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
          <div className='row align-items-center h-100'>
              <div className="col-12 col-lg-6 h-100">
                <img src={GameJamLogo} alt="Game Jam Logo" className="img-fluid d-block mx-auto p-3 h-100 object-fit-contain" />
                <p className='text-wrap text-start d-none d-lg-block'>
                  📅 December 2025<br />
                  📍 Chichester building, University of Sussex, UK<br />
                  🌐 In-Person
                </p>
              </div>
              <div className='col-lg-6 d-none d-lg-block'>
                <h1 className='fw-bold display-4 text-electric'>Game Jam Event Loading...</h1>
                <div className='mt-3'>
                  <div className="progress" style={{ height: '30px', borderRadius: '15px', backgroundColor: '#222' }}>
                    <div className="progress-barprogress-bar-animated bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label='progress bar'></div>
                  </div>
                  <div className='text-center mt-2 text-light display-6'>100%</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      {config.tickets && <TicketSection url={config.url} />}
      {config.timer && <Timer date={config.date} title={config.title} />}
      <AboutSection description={<>
                    <p>
                    The Game Jam is back! Collaborating with many of the local studios surrounding Brighton to focus 
                    in on our Game Development and Design enthusiasts. Much like a hackathon, teams will be tasked with building a project to 
                    compete in tracks to inspire game design and win prizes.If you are looking for an opportunity to collaborate with others and 
                    experience trial and error throughout the game development process, this event would be a good match for you. Also, it will 
                    be great for those who are looking for a place to have exploration of new technologies in the realm of game development. The 
                    {/* event is entirely free and paid for by our lovely sponsors. HackSussex GameJam 2024 is run in accordance with the <a href="https://static.mlh.io/docs/org-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">Hackathons UK Code of Conduct</a>. */}
                    </p>
                    </>}
                    list={["24 Hours of project building", "Win exciting prizes", "Free swag", "Free Food and Drinks", "Workshops to learn skills"]} />
      {config.event && <EventWhereWhen location="University of Sussex, Brighton" date={config.date} link={null} /> }
      {config.schedule && <Schedule schedule={schedule} multi_day={true} />}
      {config.event && <CodesOfConduct links={codes} /> }
      {config.sponsors && <Sponsors sponsorData={sponsorData} />}
    </div>
    </>
  );
}

export default GameJam;
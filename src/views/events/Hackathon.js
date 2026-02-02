import EventWhereWhen from '../../components/EventWhereWhen'; 
import Timer from '../../components/Timer';
import Schedule from '../../components/Schedule';
import Sponsors from '../../components/Sponsors';
import TicketSection from '../../components/TicketSection';
import CodesOfConduct from '../../components/CodesOfConduct';

import HackathonAbout from '../../components/HackathonAbout';

import HackathonBackground from '../../assets/Events/Hackathon/HSBackground.png';
import HackathonLogo from '../../assets/Events/Hackathon/HSLogo.png';

import Hastings from './.././../assets/SponsorLogos/hastings.svg';
import bcs from './../../assets/SponsorLogos/BCS.png';
import huk from './../../assets/SponsorLogos/huk.svg';
import UoS from './../../assets/SponsorLogos/UoS.png';
import recurse from './../../assets/SponsorLogos/recurse.png';
import casm from './../../assets/SponsorLogos/casm.png';

const config = {
  "timer": true,
  "event": true,
  "schedule": false,
  "sponsors": false,
  "date": "Feb 28, 2026, 10:00:00",
  "title": "2026 Hackathon",
  "tickets": true,
  "url": "https://tickets.hacksussex.com/HackSussex26/"
}

var schedule = {
  1: [
    {
      time: "10:00AM",
      event: "Registration Opens",
      location: "Chichester 1",
    },
    {
      time: "11:00AM",
      event: "Opening Ceremony",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "12:00PM",
      event: "Hacking Begins",
      location: "Chichester 1 Labs",
    },
    {
      time: "1:00PM",
      event: "Lunch - Happy Go Souvlaki",
      location: "Chichester 1",
    },
    {
      time: "2:00PM",
      event: "Recurse ML Product Demo",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "2:30pm",
      event: "CASM Technology Q&A",
      location: "Chichester 1 Lecture Theatre"
    },
    {
      time: "3:00PM",
      event: "Hastings Direct - AI: when, why, what and not",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "7:00PM",
      event: "Dinner - PizzaMe",
      location: "Chichester 1 Lecture Theatre",
    },
    {
      time: "8:00PM",
      event: "Bob Ross Paint",
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
      time: "9:00AM",
      event: "Breakfast - Bon Vivant",
      location: "Breakfast",
    },
    {
      time: "11:00AM",
      event: "Soft Deadline",
      location: "Chichester 1",
    },
    {
      time: "12:00PM",
      event: "Hacking Ends",
      location: "Chichester 1",
    },
    {
      time: "1:00PM",
      event: "Lunch - Tun Tun's Cafe",
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
    title: "Silver Sponsor",
    logo: Hastings,
    url: "https://www.hastingsdirect.com/"
  },
  {
    title: "Silver Sponsor",
    logo: bcs,
    url: "https://www.bcs.org/"
  },
  {
    title: "Silver Sponsor",
    logo: casm,
    url: "https://www.casmtechnology.com/"
  },
  {
    title: "Bronze Sponsor",
    logo: recurse,
    url: "https://www.recurse.ml/"
  },
  {
    title: "Partner",
    logo: UoS,
    url: "https://www.sussex.ac.uk/ei/"
  },
]

const codes = [
  { name: "Hackthons UK", url: "https://www.hackathons.org.uk/code-of-conduct" },
  { name: "MLH", url: "https://mlh.io/code-of-conduct" }
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
                📅 28th Feb - 1st March 2026 <br />
                📍 Chichester building, University of Sussex, UK
              </p>
            </div>
            <div className="col-6 d-none d-lg-block">
              <iframe 
                className="w-100 rounded" 
                src="https://www.youtube.com/embed/I0szBuNtyLs?si=zrvUYJ0cMzRRywWV" 
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
      {config.event && <EventWhereWhen location="University of Sussex, Brighton" date={"28 February 2026"} link={null} /> }
      {config.schedule && <Schedule schedule={schedule} multi_day={true} />}
      {config.sponsors && <Sponsors sponsorData={sponsorData}/> }
      {config.event && <CodesOfConduct links={codes} /> }
    </>
  );
}

export default Hackathon;
import React from 'react';

import RotatingSponsorBanner from './../../components/RotatingSponsorBanner';
import EventWhereWhen from '../../components/EventWhereWhen'; 
import Timer from './../../components/Timer';
import Schedule from './../../components/Schedule';
import Sponsors from './../../components/Sponsors';
import TicketSection from '../../components/TicketSection';

import AboutSection from '../../components/AboutSection';

import HackathonBackground from '../../assets/hackathon-background-darker.png';
import HackathonLogo from '../../assets/hackathon-2024.png';


const config = {
  "timer": true,
  "event": false,
  "schedule": false,
  "sponsors": false,
  "date": "Feb 18, 2024, 0:0:0",
  "title": "2024 Hackathon",
  "tickets": true,
  "url": "/"
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
      <div className="carousel-inner p-0">
        <img src={HackathonBackground} className="d-block w-100 img-fluid splash" alt='Hackathon background' />
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
      {config.tickets && <TicketSection url={config.url} />}
      {config.timer && <Timer date={config.date} title={config.title} />}
      <AboutSection description={<>
                  <p>
                  What happens at one of our 24 hour hackathons?
                  This is an opportunity for students of all abilities to collaborate, learn new skills, and build something cool using technology. 
                  It's a great way for people with similar interests to work together on exciting projects in a fast-paced, creative environment.</p>


                  <p>This is a fantastic opportunity to enjoy yourself, boost your CV, and above all learn something new. Be it tech and software skills or teamwork experience. There's room for both the competitive and the laid back, and a chance for people of any level of experience to win prizes. The event is entirely free and paid for by our lovely sponsors.</p>

                  <p>Once again, this year  HackSussex 2023 will be going Hybrid! In addition to the in-person experience, you will be able to take part online!
                  Thanks to our partners at the Media Technology Lab, we will be running a professional live stream throughout the event to allow our digital attendees to ask questions, speak to sponsors, attend workshops and take part in the hack!
                  HackSussex 2023 is run in accordance with the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">MLH Code of Conduct</a> and the <a href="https://assets.ctfassets.net/8qdadmww1gdd/5BgY4Ty3TIdtfisJAhRQFO/909f3f37b89f046cafbe001feacbf670/Code_of_Conduct.pdf" target="_blank" rel="noopener noreferrer">Hackathons UK Code of Conduct</a>.
                  </p>
                  </>}
                  list={["24 Hours of project building", "Win exciting prizes", "Free swag", "Free Food and Drinks", "Workshops to learn skills"]} />
      <EventWhereWhen location="University of Sussex, Brighton" date={"18 February 2024"} />
      {config.schedule && <Schedule schedule={schedule} />}
      {/* <Sponsors sponsorData={sponsorData}/> */}
    </>
  );
}

export default Hackathon;
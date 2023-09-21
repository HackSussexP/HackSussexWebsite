import React from 'react';

import RotatingSponsorBanner from './../../components/RotatingSponsorBanner';
import EventWhereWhen from '../../components/EventWhereWhen'; 
import Timer from './../../components/Timer';
import EventAbout from './../../components/EventAbout';
import Schedule from './../../components/Schedule';
import Sponsors from './../../components/Sponsors';


import background from '../../assets/hackathon-background-darker.png';
import hackathonLogo from '../../assets/hackathon-23-trans-gradient-small.png';

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
    logos: [hackathonLogo]
  },
  {
    title: "Gold Sponsors",
    size: "40%",
    logos: [hackathonLogo, hackathonLogo]
  },
  {
    title: "Silver Sponsors",
    size: "30%",
    logos: [hackathonLogo, hackathonLogo, hackathonLogo]
  },
  {
    title: "Bronze Sponsors",
    size: "20%",
    logos: [hackathonLogo, hackathonLogo, hackathonLogo, hackathonLogo]
  },
  {
    title: "Partners",
    size: "20%",
    logos: [hackathonLogo, hackathonLogo, hackathonLogo, hackathonLogo]
  },
];

<Sponsors sponsorData={sponsorData} />


var hackathonStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
};

const Hackathon = () => {
  return(
    <>
      <div className='container-fluid p-2' style={hackathonStyle}>
        <div className='row'>
          <div className='col p-5'>
            <img src={hackathonLogo} className='img-fluid'></img>
          </div>
          <div className='col p-5'>
            <div className='container p-2 text-center'>Copy something goes here, text, graphic, dates, social media. just pad this out somehow</div>
          </div>
        </div>
      </div>
      <Timer date={"May 1, 2024, 0:0:0"} />
      <EventAbout />
      <EventWhereWhen location="University of Sussex, Brighton" date="June 01, 2024, 10:00AM" />
      <Schedule schedule={schedule} />
      <Sponsors sponsorData={sponsorData}/>
    </>
  );
}

export default Hackathon;
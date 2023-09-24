import React from 'react';

import Resources from '../../components/Resources'
import AboutSection from '../../components/AboutSection';
import EventWhereWhen from '../../components/EventWhereWhen';

import PwnSussexLogo from './../../assets/index-carousel/PwnSussex-logo.png';
import PwnSussexBackground from './../../assets/index-carousel/PwnSussex-background.png';

const CaptureTheFlag = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <img src={PwnSussexBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
        <div className="carousel-caption">
          <img src={PwnSussexLogo} alt="PwnSussex Logo" className='img-fluid ms-auto me-auto d-block p-3' style={{ width: '60%', height: 'auto' }} />
        </div>
        <AboutSection description={`pwnsussex is a group of students who actively participate in Capture the flag events. A Capture the Flag event, or a CTF, is typically a team based game where players need to find flags hidden behind cybersecurity challenges in order to score points, and the team with the most points at the end of the event win. These flags can be found by solving puzzles, technical challenges, or by otherwise exploiting vulnerable computer programs, networks, and algorithms. There will typically be multiple problems at one of these events, so if you get stuck on one, you can always go and work on another. These problems can encompass multiple domains, such as web based challenges, cryptography problems, forensics, reverse engineering, and open source intelligence, among many others. CTFs are a great way to develop your problem solving skills, knowledge of cyber security topics, and even your ability to develop secure software. If you're interested in any of these topics, then come along to one of our cybersecurity workshops, where we introduce and explain various methods of exploiting vulnerable programs, or come along to help out with our CTF team, pwnsussex in a real world CTF!`}/>
        <EventWhereWhen location="TBD" date="TBD" />
        <div className='container text-center'>
          <div className='row'>
            <div className='col'>
              <p className='display-4'>Live Leaderboard</p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-auto'>
              <p>Will be opened closer to event</p>
            </div>
            <div className='col-auto'>
              <p>0</p>
            </div>
          </div>
        </div>
        <Resources />
      </div>
    </>
  )
}

export default CaptureTheFlag;
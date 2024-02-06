import React, { useState } from "react";
import { FaDiscord } from 'react-icons/fa';

import Resources from '../../components/Resources'
import AboutSection from '../../components/AboutSection';
import EventWhereWhen from '../../components/EventWhereWhen';

import PwnSussexLogo from './../../assets/index-carousel/PwnSussex-logo.png';
import PwnSussexBackground from './../../assets/index-carousel/PwnSussex-background.png';

const linksData = [
  { name: "Hackers Arise", url: "https://www.hackers-arise.com" },
  { name: "HackTheBox", url: "https://www.hackthebox.com" },
  { name: "TryHackMe", url: "https://www.tryhackme.com" },
  { name: "picoCTF", url: "https://www.picoctf.com" },
  { name: "MalDev Academy (Paid)", url: "https://www.maldevacademy.com" },
  { name: "pwn college", url: "https://www.pwn.college" },
  { name: "roppers", url: "https://www.hoppersroppers.org" },
  { name: "liveoverflow", url: "https://www.hliveoverflow.com/" },
  { name: "John Hammond", url: "https://www.youtube.com/channel/UCVeW9qkBjo3zosnqUbG7CFw" },
  { name: "pwnfunction", url: "https://www.youtube.com/@PwnFunction" },
];

const CaptureTheFlag = () => {
  const [hoveredDiscord, setHoveredDiscord] = useState(false);

  const defaultStyle = {
    textDecoration: "none",
    color: "white"
  };

  const hoverStyle = {
    textDecoration: "none",
    color: "#34d2c8"
  };

  return (
    <>
      <div className="carousel-inner p-0">
        <img src={PwnSussexBackground} className="d-block w-100 h-100 img-fluid splash" alt='Background' />
        <div className="carousel-caption">
          <img src={PwnSussexLogo} alt="PwnSussex Logo" className='img-fluid ms-auto me-auto d-block p-3' style={{ width: '60%', height: 'auto' }} />
        </div>
      </div>
      <AboutSection description={[`pwnsussex is a group of students who actively participate in Capture the flag events. A Capture the Flag event, or a CTF, is typically a team based game where players need to find flags hidden behind cybersecurity challenges in order to score points, and the team with the most points at the end of the event win. These flags can be found by solving puzzles, technical challenges, or by otherwise exploiting vulnerable computer programs, networks, and algorithms. There will typically be multiple problems at one of these events, so if you get stuck on one, you can always go and work on another. These problems can encompass multiple domains, such as web based challenges, cryptography problems, forensics, reverse engineering, and open source intelligence, among many others. CTFs are a great way to develop your problem solving skills, knowledge of cyber security topics, and even your ability to develop secure software. If you're interested in any of these topics, then come along to one of our cybersecurity workshops, where we introduce and explain various methods of exploiting vulnerable programs, or come along to help out with our CTF team, pwnsussex in a real world CTF!`]}/>
      <EventWhereWhen location="TBA" date="TBA" link={null} />
      <div className='container text-center p-3' hidden>
        <div className='row'>
          <div className='col'>
            <p className='display-4 fw-bold border-bottom pb-3 w-76 me-auto ms-auto'>Live Leaderboard</p>
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
      <Resources links={linksData} />

      <div className="row p-4 justify-content-center">
        <p className="fs-4 text-center">
          Plenty more resources on our{' '}
          <a
             className="discord-link"
             style={hoveredDiscord ? hoverStyle : defaultStyle}
             onMouseEnter={() => setHoveredDiscord(true)}
             onMouseLeave={() => setHoveredDiscord(false)}
             href="https://discord.gg/h7JD9mjfWY">
             <FaDiscord /> Discord 
          </a>
          {' '}server!
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 767.98px) {
          .discord-link {
            color: #34d2c8 !important;
          }
        }
      `}</style>
    </>
  )
}

export default CaptureTheFlag;
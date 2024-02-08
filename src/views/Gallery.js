import React from 'react';
import GalleryTemplate from '../components/GalleryTemplate';

import h1 from '../assets/Gallery/hackathon23/h1.jpg';
import h2 from '../assets/Gallery/hackathon23/h2.jpg';
import h3 from '../assets/Gallery/hackathon23/h3.jpg';
import h4 from '../assets/Gallery/hackathon23/h4.jpg';
import h5 from '../assets/Gallery/hackathon23/h5.jpg';
import h6 from '../assets/Gallery/hackathon23/h6.jpg';
import h7 from '../assets/Gallery/hackathon23/h7.jpg';
import h8 from '../assets/Gallery/hackathon23/h8.jpg';
import h9 from '../assets/Gallery/hackathon23/h9.jpg';
import h10 from '../assets/Gallery/hackathon23/h10.jpg';
import h11 from '../assets/Gallery/hackathon23/h11.jpg';
import h12 from '../assets/Gallery/hackathon23/h12.jpg';
import h13 from '../assets/Gallery/hackathon23/h13.jpg';
import h14 from '../assets/Gallery/hackathon23/h14.jpg';
import h15 from '../assets/Gallery/hackathon23/h15.jpg';
import h16 from '../assets/Gallery/hackathon23/h16.jpg';

import cc1 from '../assets/Gallery/coderscup23/cc1.jpg';
import cc2 from '../assets/Gallery/coderscup23/cc2.jpg';
import cc3 from '../assets/Gallery/coderscup23/cc3.jpg';
import cc4 from '../assets/Gallery/coderscup23/cc4.jpg';
import cc5 from '../assets/Gallery/coderscup23/cc5.jpg';
import cc6 from '../assets/Gallery/coderscup23/cc6.jpg';
import cc7 from '../assets/Gallery/coderscup23/cc7.jpg';
import cc8 from '../assets/Gallery/coderscup23/cc8.jpg';
import cc9 from '../assets/Gallery/coderscup23/cc9.jpg';
import cc10 from '../assets/Gallery/coderscup23/cc10.jpg';
import cc11 from '../assets/Gallery/coderscup23/cc11.jpg';
import cc12 from '../assets/Gallery/coderscup23/cc12.jpg';

import cs1 from '../assets/Gallery/code-socials/cs1.jpg';
import cs2 from '../assets/Gallery/code-socials/cs2.jpg';
import cs3 from '../assets/Gallery/code-socials/cs3.jpg';
import cs4 from '../assets/Gallery/code-socials/cs4.jpg';
import cs5 from '../assets/Gallery/code-socials/cs5.jpg';
import cs6 from '../assets/Gallery/code-socials/cs6.jpg';
import cs7 from '../assets/Gallery/code-socials/cs7.jpg';
import cs8 from '../assets/Gallery/code-socials/cs8.jpg';
import cs9 from '../assets/Gallery/code-socials/cs9.jpg';

import w1 from '../assets/Gallery/workshops/w1.jpg';
import w3 from '../assets/Gallery/workshops/w3.jpg';
import w4 from '../assets/Gallery/workshops/w4.jpg';
import w5 from '../assets/Gallery/workshops/w5.jpg';
import w6 from '../assets/Gallery/workshops/w6.jpg';
import w7 from '../assets/Gallery/workshops/w7.jpg';
import w8 from '../assets/Gallery/workshops/w8.jpg';

import a1 from '../assets/Gallery/all/a1.jpg';
import a2 from '../assets/Gallery/all/a2.jpg';
import a3 from '../assets/Gallery/all/a3.jpg';
import a4 from '../assets/Gallery/all/a4.jpg';
import a5 from '../assets/Gallery/all/a5.jpg';

import gj1 from '../assets/Gallery/gamejam23/gj1.jpeg';
import gj2 from '../assets/Gallery/gamejam23/gj2.jpeg';
import gj3 from '../assets/Gallery/gamejam23/gj3.jpeg';
import gj4 from '../assets/Gallery/gamejam23/gj4.jpeg';
import gj5 from '../assets/Gallery/gamejam23/gj5.jpeg';
import gj6 from '../assets/Gallery/gamejam23/gj6.jpeg';
import gj7 from '../assets/Gallery/gamejam23/gj8.jpeg';
import gj8 from '../assets/Gallery/gamejam23/gj7.jpeg';
import gj9 from '../assets/Gallery/gamejam23/gj9.jpeg';
import gj10 from '../assets/Gallery/gamejam23/gj10.jpeg';
import gj11 from '../assets/Gallery/gamejam23/gj11.jpeg';
import gj12 from '../assets/Gallery/gamejam23/gj12.jpeg';
import gj13 from '../assets/Gallery/gamejam23/gj13.jpeg';

const Gallery = () => {
  const events = [
    { id: 'all', name: 'All' },
    { id: 'hackathon23', name: 'Hackathon 2023' },
    { id: 'coderscup23', name: 'Coders Cup 2023' },
    { id: 'gamejam23', name: 'GameJam 2023'},
    { id: 'codesocials', name: 'Code Socials' },
    { id: 'workshops', name: 'Workshops' },
  ];

  const images = [
    { id: 1, url: h1, description: 'HACKSUSSEX TEAM BEHIND 2023 HACKATHON', event: 'hackathon23' },
    { id: 2, url: h2, description: '2023 HACKATHON BTS', event: 'hackathon23' },
    { id: 3, url: h3, description: '2023 HACKATHON TEAM DISCUSSING PROJECT', event: 'hackathon23' },
    { id: 4, url: h4, description: '2023 HACKATHON TEAM WORKING ON PROJECT', event: 'hackathon23' },
    { id: 5, url: h5, description: 'INTRODUCING PRIZES TO 2023 HACKATHON ATTENDEES', event: 'hackathon23' },
    { id: 6, url: h6, description: '2022 HACKATHON AUDIENCE', event: 'hackathon23' },
    { id: 7, url: h7, description: '2022 HACKATHON AUDIENCE', event: 'hackathon23' },
    { id: 8, url: h8, description: 'INTRODUCING HACKTHON TO 2021 ATTENDEES', event: 'hackathon23' },
    { id: 9, url: h9, description: '2022 HACKATHON SPONSORS MIZUHO INTRODUCING THEMSELVES', event: 'hackathon23' },
    { id: 10, url: h10, description: 'VARIOUS 2022 HACKATHON SPONSORS', event: 'hackathon23' },
    { id: 11, url: h11, description: '2021 HACKATHON TEAM WORKING ON PROJECT', event: 'hackathon23' },
    { id: 12, url: h12, description: '2023 HACKATHON LIVESTREAM BTS', event: 'hackathon23' },
    { id: 13, url: h13, description: '2023 HACKATHON TEAM WORKING ON PROJECT', event: 'hackathon23' },
    { id: 14, url: h14, description: 'TESTING SPEAKERS BEFORE 2023 HACKATHON', event: 'hackathon23' },
    { id: 15, url: h15, description: '2023 HACKATHON TEAM SHOWING OFF CROQUETED CREATION', event: 'hackathon23' },
    { id: 16, url: h16, description: '2022 HACKATHON TEAM AT START OF EVENT', event: 'hackathon23' },

    { id: 17, url: cc1, description: '2023 CODERS CUP BTS', event: 'coderscup23' },
    { id: 18, url: cc2, description: 'AUDIENCE WATCHING 2022 CODERS CUP', event: 'coderscup23' },
    { id: 19, url: cc3, description: '2023 CODERS CUP COMPETITORS', event: 'coderscup23' },
    { id: 20, url: cc4, description: 'HACKSUSSEX TEAM VALIDATING COMPETITORS PROGRAMMING', event: 'coderscup23' },
    { id: 21, url: cc5, description: '2023 CODERS CUP WINNER WITH PRIZES', event: 'coderscup23' },
    { id: 22, url: cc6, description: '2023 CODERS CUP REHEARSAL', event: 'coderscup23' },
    { id: 23, url: cc7, description: '2023 CODERS CUP TV STUDIO BTS', event: 'coderscup23' },
    { id: 24, url: cc8, description: '2023 CODERS CUP COMPETITORS BATTLING EACH OTHER', event: 'coderscup23' },
    { id: 25, url: cc9, description: '2023 CODERS CUP COMPETITORS BATTLING EACH OTHER', event: 'coderscup23' },
    { id: 26, url: cc10, description: 'PREPARING TV STUDIO FOR 2023 CODERS CUP', event: 'coderscup23' },
    { id: 27, url: cc11, description: '2023 CODERS CUP REHEARSAL', event: 'coderscup23' },
    { id: 28, url: cc12, description: '2023 CODERS CUP BEHIND THE CAMERAS', event: 'coderscup23' },

    { id: 29, url: cs1, description: '2021 CODE SOCIAL ENJOYING PIZZA', event: 'codesocials' },
    { id: 30, url: cs2, description: '2022 CODE SOCIAL', event: 'codesocials' },
    { id: 31, url: cs3, description: 'HACKSUSSEX LOVE PIZZA', event: 'codesocials' },
    { id: 32, url: cs4, description: '2022 CODE SOCIAL GROUP ENJOYING A GAME', event: 'codesocials' },
    { id: 33, url: cs5, description: '2022 CODE SOCIAL GROUP LOOKING A RC CARS', event: 'codesocials' },
    { id: 34, url: cs6, description: 'THE FIRST CODE SOCIAL OF THE UNI YEAR, 2023', event: 'codesocials' },
    { id: 35, url: cs7, description: 'HACKSUSSEX COMMITTEE STANDING OVER THE MERCH STALL AT A CODE SOCIAL', event: 'codesocials' },
    { id: 36, url: cs8, description: 'OUR COMMITTEE HARD AT WORK PREPARING A CODE SOCIAL', event: 'codesocials' },
    { id: 37, url: cs9, description: 'THE FIRST CODE SOCIAL OF 2024 AND THE NEW UNIVERSITY TERM', event: 'codesocials' },
    
    { id: 38, url: w1, description: 'INTRODUCTORY ROBOTICS WORKSHOP', event: 'workshops' },
    { id: 39, url: w3, description: '2022 CAPTURE THE FLAG TEAM TAKING ON A CHALLENGE', event: 'workshops' },
    { id: 40, url: w4, description: '2023 LEETCODING WORKSHOP', event: 'workshops' },
    { id: 41, url: w5, description: '2023 ROBOTICS WORKSHOP', event: 'workshops' },
    { id: 42, url: w6, description: 'INTRODUCTORY ROBOTICS WORKSHOP INSTRUCTIONS TO DEVELOP A CIRCUIT', event: 'workshops' },
    { id: 43, url: w7, description: 'GROUP WORKING WITH SENSORS IN A ROBOTICS WORKSHOP', event: 'workshops' },
    { id: 44, url: w8, description: '2 MEMBERS OF OUR COOMUNITY SHOWING OFF THEIR BUILD', event: 'workshops' },

    { id: 45, url: a1, description: 'HACKSUSSEX COMMITTEE RUNNING OUR STALL AT FRESHERS 2023', event: 'all' },
    { id: 46, url: a2, description: 'A TEAM COMPETING IN THE REGIONAL QUALIFIER FOR UKIEPC 2023', event: 'all' },
    { id: 47, url: a3, description: 'SOME OF OUR BEST PROGRAMMERS WORKING HARD TO SOLVE UKIEPC QUALIFYING PROBLEMS', event: 'all' },
    { id: 48, url: a4, description: 'SOME COMMUNITY MEMBERS WORKING ON A PROJECT FOR THE GLOBAL GAMEJAM 2023 OF WHICH WE WERE THE LOCAL HOST', event: 'all' },
    { id: 49, url: a5, description: 'A PROGRAMMER HARD AT WORK ON A GAME FOR THE GLOBAL GAMEJAM 2023', event: 'all' },

    { id: 50, url: gj1, description: 'ROTOVR CHAIRS BEING PREPPARED THE NIGHT BEFORE THE GAMEJAM', event: 'gamejam23' },
    { id: 51, url: gj2, description: 'AN EXCITED TEAM WATCHING THE OPENING CEREMONY OF THE GAMEJAM', event: 'gamejam23' },
    { id: 52, url: gj3, description: 'MEMBERS OF OUR COMMUNITY WAITING FOR THE OPENING CEREMONY INCLUDNG LECTURER RON GRAU AND HEAD OF E&I AT SUSSEX, IAN WAKEMAN', event: 'gamejam23' },
    { id: 53, url: gj4, description: 'A TEAM SHOWING OFF THE GAME TO OUR JUDGES, INCLUDING UNIVERSITY LECTURER RON GRAU', event: 'gamejam23' },
    { id: 54, url: gj5, description: 'PROGRAMMER PLAY TESTING THEIR GAME ON THE ROTOVR CHAIR', event: 'gamejam23' },
    { id: 55, url: gj6, description: 'ONE OUR CATERERS, OUICREPERIE, SETUP OUTSIDE CHICHESTER BUILDING MORNING OF DAY 2', event: 'gamejam23' },
    { id: 56, url: gj7, description: 'A PROGRAMEMR HARD AT WORK AT THEIR GREAT GAME', event: 'gamejam23' },
    { id: 57, url: gj8, description: 'PEOPLE ENJOYING MIDNIGHT PIZZA FROM PIZZAME DURING THE NIGHT OF THE GAMEJAM', event: 'gamejam23' },
    { id: 58, url: gj9, description: 'A QUEUUE OF PEOPLE GETTING READY TO ENJOY THEIR DINNER FROM TUNTUNS', event: 'gamejam23' },
    { id: 59, url: gj10, description: 'MEMBERS OF OUR COMMUNITY HARD AT WORK', event: 'gamejam23' },
    { id: 60, url: gj11, description: 'THE CEO OF ROTOVR, ELLIOTT MYERS, HELPING A STUDENT TO GET SETUP WITH THE ROTOVR CHAIR', event: 'gamejam23' },
    { id: 61, url: gj12, description: 'LECTURER RONGRAU TESTING OUT THE ROTOVR CHAIRS SPIN WITH A STEERING WHEEL', event: 'gamejam23' },
    { id: 62, url: gj13, description: 'ONE OF COMMITTEE THE NIGHT BEFORE PAINFULLY ORGANISING THE LANYARDS FOR THE MORNING', event: 'gamejam23' },

  ];
  
  const videos = [
    { event: 'hackathon23', videoId: 'gmKBSb7kbTY' },
    { event: 'coderscup23', videoId: 'yPifHEfu4Qs?si=-9kvdIJc05nbL4IY' }
  ];

  return (
    <GalleryTemplate events={events} images={images} videos={videos} />
  );
}

export default Gallery;

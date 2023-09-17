import React from 'react';
import styles from './HomeEvent.module.css';

import image1 from './../assets/index-carousel/image1.png'
import image2 from './../assets/index-carousel/image2.png'
import image3 from './../assets/index-carousel/image3.png'

const HomeEvents = () => {
  return (
    <div className={`container-fluid ${styles.container} text-center`}>
      <div className='container pt-3 text-center'>
      <div className='row mb-3'>
        <div className='col-12 col-md-6 m-auto text-md-end'>
          <h2 className='display-6 fw-bold text-electric'>
            Hackathon
          </h2>
          <p className='fs-4'>
            The biggest Annual Hackathon in Brighton & Hove
          </p>
          <p>
            HackSussex runs a weekend-long hackathon annually on Sussex campus. The hackathon is an event where passionate programmers and designers from all across the country come down to build the best tech inventions and solutions they can in just 24 hours, with many prizes for the winning teams.
          </p>
        </div>
        <div className='col-12 col-md-6 p-5 m-auto'>
          <img src={image1} alt="hackathon" className='img-fluid rounded w-77 d-none d-md-block'></img>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-12 col-md-6 m-auto text-md-start order-1 order-md-2'>
          <h2 className='display-6 fw-bold text-electric'>
            Game Jam
          </h2>
          <p className='fs-4'>
            Our newest event where participants are challenged with designing a game within 24 hours!
          </p>
          <p>
          This year, we are running a brand-new event called the HackSussex Game Jam. Participants will have the opportunity to showcase their skills & innovative ideas in designing and developing games within 24 hours.
          </p>
        </div>
        <div className='col-12 col-md-6 p-5 m-auto order-2 order-md-1'>
          <img src={image2} alt="hackathon" className='img-fluid rounded w-77 d-none d-md-block'></img>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-12 col-md-6 m-auto text-md-end'>
          <h2 className='display-6 fw-bold text-electric'>
            Coders Cup
          </h2>
          <p className='fs-4'>
            Algorithmic Coding Competition for Students!
          </p>
          <p>
            An annual programming competition where all programmers studying at the University of Sussex compete to answer algorithmic coding puzzles. If you manage to qualify for the finals, you will go toe to toe with other programmers in an 8 player knockout competition, which will be streamed online. There is a prize pool involved for the winners of the competition.
          </p>
        </div>
        <div className='col-12 col-md-6 p-5 m-auto'>
          <img src={image3} alt="hackathon" className='img-fluid rounded w-77 d-none d-md-block'></img>
        </div>    
      </div>
      <div className='row mb-3'>
        <div className='col-12 col-md-6 m-auto text-md-start order-1 order-md-2'>
          <h2 className='display-6 fw-bold text-electric'>
            Capture The Flag
          </h2>
          <p className='fs-4'>
            Cybersecruity Puzzles for our HackerSussexers
          </p>
          <p>
            Run by PwnSussex, we also participate in Capture The Flag (CTF) events,where players in a team need to find as many flags as possible, of which are hidden behind cybersecurity challenges in order to score points.
          </p>
        </div>  
        <div className='col-12 col-md-6 p-5 m-auto order-2 order-md-1'>
          <img src={image3} alt="hackathon" className='img-fluid rounded w-77 d-none d-md-block'></img>
        </div>  
      </div>
      </div>
    </div>
  );
}

export default HomeEvents;
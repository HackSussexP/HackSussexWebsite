import React, { useState, useEffect } from 'react';

import RotatingSponsorBanner from '../components/RotatingSponsorBanner';
import SocialMediaBanner from '../components/SocialMediaBanner';
import AboutHeader from '../components/AboutHeader'

import image1 from './../assets/index-carousel/image1.png'
import image2 from './../assets/index-carousel/image2.png'
import image3 from './../assets/index-carousel/image3.png'

const Home = () => {
  const [loading, setLoading] = useState(true)

  const waitForLoad = () => {
    if (document.readyState === "complete") {
      setLoading(false)
    }
  }

  useEffect(() => {
    waitForLoad()
  }, [])

  return(
    <>
      <div className='container-fluid m-0 p-0'>
        <div className='row'>
          <div className='col-12 p-0'>
            <div id='homeCarousel' className='carousel slide' data-bs-ride='carousel'> {/* TODO vertical slide or change buttons back */}
              <div class="carousel-indicators mb-3 p-0">
                <div className='row'>
                  <div className='col'>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                </div>
              </div>
              <div className='carousel-inner' role='listbox'>
                <div className='carousel-item active'>
                  <img src={image1} className='d-block w-100 img-fluid' alt='...' />
                </div>
                <div className='carousel-item'>
                  <img src={image2} className=' d-block w-100 img-fluid' alt='...' />
                </div>
                <div className='carousel-item'>
                  <img src={image3} className=' d-block w-100 img-fluid' alt='...' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutHeader />
      <RotatingSponsorBanner />
      <div className='container pt-3 text-center'>
        <div className='row mb-3'>
          <div className='col-12 col-md-6 m-auto text-md-end'>
            <h2 className='display-6 fw-bold text-electric'>
              Hackathon
            </h2>
            <p className='fs-4'>
              The biggest annual hackathon in Brighton & Hove!
            </p>
            <p>
              Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusm tempor incididun. Eiusum tempor incididun.
            </p>
          </div>
          <div className='col-12 col-md-6 p-5 m-auto'>
            <img src={image1} alt="hackathon" className='img-fluid rounded'></img>
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
              Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusm tempor incididun. Eiusum tempor incididun.
            </p>
          </div>
          <div className='col-12 col-md-6 p-5 m-auto order-2 order-md-1'>
            <img src={image2} alt="hackathon" className='img-fluid rounded'></img>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12 col-md-6 m-auto text-md-end'>
            <h2 className='display-6 fw-bold text-electric'>
              Coders Cup
            </h2>
            <p className='fs-4'>
              Algorithmic coding compeition
            </p>
            <p>
            Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusm tempor incididun. Eiusum tempor incididun.
            </p>
          </div>
          <div className='col-12 col-md-6 p-5 m-auto'>
            <img src={image3} alt="hackathon" className='img-fluid rounded'></img>
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
            Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusm tempor incididun. Eiusum tempor incididun.
            </p>
          </div>  
          <div className='col-12 col-md-6 p-5 m-auto order-2 order-md-1'>
            <img src={image3} alt="hackathon" className='img-fluid rounded'></img>
          </div>  
        </div>
      </div>
      <SocialMediaBanner />
    </>
  );
}

export default Home;

/*
          <div className='col text-right'>
            <p className='h2' style={{color: "var(--electric-green)"}}>Capture The Flag</p>
            <p className='h5 text-light lh-2'>Cybersecruity Puzzles for our HackerSussexers</p>
            <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. eiusm tempor incididun.</p>
          </div>
          <div className='col'>
            <img src={pic} className='img-fluid rounded' />
          </div>
*/
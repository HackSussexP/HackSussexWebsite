import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import RotatingSponsorBanner from '../components/RotatingSponsorBanner';
import SocialMediaBanner from '../components/SocialMediaBanner';

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
      <div className='container py-2 px-3'>
        <div class='row align-items-center px-4 mx-4 py-4 text-center'>
          <div class='col'>
            <h1 class='lead fs-2 mb-3 text-uppercase'>The Home of informatics at the University of Sussex</h1>
            <h2 class='mb-3 fs-3 text-uppercase'>Welcome to HackSussex</h2>
            <p className='fs-5 mb-4 fw-light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ante eget tellus vulputate facilisis id ac diam. Pellentesque nec pretium leo. In non imperdiet purus. Phasellus arcu sem, volutpat non neque ut, mattis pretium nisi. Etiam dapibus convallis ligula vel molestie. Donec maximus magna id condimentum sodales. In orci ipsum, commodo vel mi ut, tincidunt malesuada dolor. Nunc gravida est in ante sagittis porta. Maecenas ullamcorper odio eu magna accumsan, non vestibulum nibh malesuada. Aenean sollicitudin ex eu ante pharetra, non tempus ex tempus. Nam ultrices metus dui, id imperdiet nisl pulvinar vel. Cras efficitur magna a dapibus tempor.
            </p>
            <Link type="button" class="btn btn-blue btn-lg" to='/about'>Learn More</Link>
          </div>
        </div>        
      </div>
      <RotatingSponsorBanner />
      <div className='container pt-3 text-center'>
        <div className='row mb-3'>
          <div className='col-12 col-md-6 p-5 m-auto'>
            <img src={image1} alt="hackathon" className='img-fluid rounded'></img>
          </div>
          <div className='col-12 col-md-6 m-auto text-md-start'>
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
        </div>
        <div className='row mb-3'>
          <div className='col-12 col-md-6 m-auto text-md-end'>
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
          <div className='col-12 col-md-6 p-5 m-auto'>
            <img src={image2} alt="hackathon" className='img-fluid rounded'></img>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12 col-md-6 p-5 m-auto'>
            <img src={image3} alt="hackathon" className='img-fluid rounded'></img>
          </div> 
          <div className='col-12 col-md-6 m-auto text-md-start'>
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
        </div>
        <div className='row mb-3'>
          <div className='col-12 col-md-6 m-auto text-md-start'>
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
          <div className='col-12 col-md-6 p-5 m-auto'>
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
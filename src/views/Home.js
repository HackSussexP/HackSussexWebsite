import React, { useState, useEffect } from 'react';

import styles from './Home.module.css';

import RotatingSponsorBanner from '../components/RotatingSponsorBanner';
import SocialMediaBanner from '../components/SocialMediaBanner';
import AboutHeader from '../components/AboutHeader'

import image1 from './../assets/index-carousel/image1.png'
import image2 from './../assets/index-carousel/image2.png'
import image3 from './../assets/index-carousel/image3.png'

import hackathonBackground from './../assets/hackathon-background-darker.png';
import hackathonLogo from '../assets/hackathon-23-trans-gradient-small.png'

import codersCupBackground from './../assets/coders-cup-background-dark.png';
import codersCupLogo from '../assets/coders-cup-logo-white-23.png'
import codersCupWideLogo from '../assets/HackSussex-SuperWide-Text-Lined-Trans.png'
import codersCupWideLogoColoured from '../assets/HackSussex-SuperWide-Text-Lined-Trans-Gradient.png'

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

              {/* HACKATHON CAROUSEL */}
              <a href="/events/hackathon" className={styles.carouselLink}>
                <div className={styles.carouselItem + ' carousel-item active'}>
                  <img src={hackathonBackground} className={styles.backgroundImage + ' d-block w-100 img-fluid'} alt='Background' />

                  <div className={styles.carouselCaption + " carousel-caption d-none d-md-block"}>
                    <div className="container">
                      <div className="row align-items-center justify-content-center">
                        
                        <div className={`col-md-5 ${styles.leftColumn}`}>
                            <img src={hackathonLogo} alt="Logo" className={styles.logo} />
                            <div className={styles.details}>
                                <p>📅 18th - 19th February 2023 </p>
                                <p>📍 Chichester building, University of Sussex, UK</p>
                                <p>🌐 Hybrid</p>
                            </div>
                        </div>

                        <div className={`col-md-7 ${styles.rightColumn}`}>
                            <iframe 
                                className={styles.youtubeEmbed} 
                                src="https://www.youtube.com/embed/gmKBSb7kbTY" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen
                            ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {/* END HACKATHON CAROUSEL */}

              <div className='carousel-item'>
                <img src={image2} className=' d-block w-100 img-fluid' alt='...' />
              </div>


              {/* CODERS CUP CAROUSEL */}
              <a href="/events/coderscup" className={styles.carouselLink}>
                <div className={styles.carouselItem + ' carousel-item active'}>
                  <img src={codersCupBackground} className={styles.backgroundImage + ' d-block w-100 img-fluid'} alt='Background' />

                  <div className={styles.carouselCaption + " carousel-caption d-none d-md-block"}>
                    <div className="container">
                      <div className="row align-items-center justify-content-center">
                        
                      <div className={`col-md-5 ${styles.leftColumn}`}>
                        <img src={codersCupWideLogoColoured} alt="Wide Logo" className={styles.wideLogo} />
                        <img src={codersCupLogo} alt="Square Logo" className={styles.squareLogo} />
                      </div>

                      <div className={`col-md-7 ${styles.rightColumn}`}>
                          <iframe 
                              className={styles.youtubeEmbed} 
                              src="https://www.youtube.com/embed/yPifHEfu4Qs?si=-9kvdIJc05nbL4IY" 
                              frameborder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {/* CODERS CUP CAROUSEL */}

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